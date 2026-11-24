// TeraStockX AI helper: a Cloudflare Worker between the website and the Claude API. The API key stays here
// (a Worker secret); the browser sends the question and a summary of what the page shows, and gets the answer
// streamed back as plain text. Settings: wrangler.toml [vars]; the key: the ANTHROPIC_API_KEY secret.
import Anthropic from "@anthropic-ai/sdk";
import { METHODOLOGY } from "./methodology.js";
import { RULES, corsFor, parseRequest, userMessage, allowRequest } from "./guard.js";

const SYSTEM = `${RULES}\n\n${METHODOLOGY}`;
// Sent at the end of a stream that broke off, so the page can show its own message.
const BROKEN = "\u0000ERR";

const json = (status, body, headers = {}) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers } });

export default {
  async fetch(request, env, ctx) {
    const cors = corsFor(request.headers.get("origin"), env.ALLOWED_ORIGINS);
    if (request.method === "OPTIONS") return cors ? new Response(null, { status: 204, headers: cors }) : new Response(null, { status: 403 });
    if (!cors) return json(403, { error: "origin" });
    if (request.method !== "POST") return json(405, { error: "method" }, cors);
    if (!env.ANTHROPIC_API_KEY) return json(503, { error: "not_configured" }, cors);

    const req = parseRequest(await request.text());
    if (req.error) return json(400, { error: req.error }, cors);
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const cache = typeof caches !== "undefined" ? caches.default : null;
    if (!(await allowRequest(ip, Number(env.MAX_PER_HOUR || 15), cache))) return json(429, { error: "rate" }, cors);

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, ...(env.ANTHROPIC_BASE_URL ? { baseURL: env.ANTHROPIC_BASE_URL } : {}) });
    const stream = client.messages.stream({
      model: env.MODEL || "claude-opus-5-5",
      max_tokens: Number(env.MAX_TOKENS || 2000),
      output_config: { effort: env.EFFORT || "low" },
      // The rules and the methodology are the same for every question: cached for an hour.
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral", ttl: "1h" } }],
      messages: [{ role: "user", content: userMessage(req) }],
    });
    // The first event shows whether the API accepted the request (key, credit, overload): if not, a clear status.
    const events = stream[Symbol.asyncIterator]();
    let next;
    try {
      next = await events.next();
    } catch (err) {
      const status = err instanceof Anthropic.RateLimitError ? 429 : 503;
      console.log(JSON.stringify({ upstream: err instanceof Anthropic.APIError ? err.status : "network" }));
      return json(status, { error: status === 429 ? "busy" : "upstream" }, cors);
    }
    const enc = new TextEncoder();
    const body = new ReadableStream({
      async start(controller) {
        try {
          while (!next.done) {
            const ev = next.value;
            if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") controller.enqueue(enc.encode(ev.delta.text));
            next = await events.next();
          }
          const msg = await stream.finalMessage();
          if (msg.stop_reason === "refusal") controller.enqueue(enc.encode(BROKEN));
          // Token use for the cost overview in the Worker's logs (no question text, no address).
          console.log(JSON.stringify({ model: msg.model, stop: msg.stop_reason, usage: msg.usage }));
        } catch {
          controller.enqueue(enc.encode(BROKEN));
        }
        controller.close();
      },
    });
    return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff", ...cors } });
  },
};
