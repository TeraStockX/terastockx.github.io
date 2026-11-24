// AI helper: an "Ask" panel on company pages and the methodology page. The question and a compact summary of
// what the page shows go to the site's AI endpoint (a Cloudflare Worker that keeps the API key, see
// worker/README.md); the answer streams in. Nothing is shown while no endpoint is configured.
import { AI_ENDPOINT } from "./config.js";
import { t, lang, langMeta } from "./i18n/index.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// A test endpoint can be set in this browser only (localStorage "tsx-ai-endpoint").
const endpoint = () => { try { return localStorage.getItem("tsx-ai-endpoint") || AI_ENDPOINT; } catch { return AI_ENDPOINT; } };
const BROKEN = "\u0000ERR";
const SUGGEST = { company: ["ai.qCompany1", "ai.qCompany2", "ai.qCompany3"], method: ["ai.qMethod1", "ai.qMethod2", "ai.qMethod3"] };

let page = null;   // { page, ticker, title, context, key }
let log = [];      // [{ q, a, state: "streaming" | "done" | "error", err }]
let open = false, busy = false, root = null;

// Answers: plain text with "- " bullets, blank-line paragraphs and **bold**, escaped before formatting.
export function formatAnswer(text) {
  let html = "", list = false;
  for (const line of esc(text).split("\n")) {
    const b = line.match(/^\s*[-•*]\s+(.*)$/);
    if (b) { if (!list) { html += "<ul>"; list = true; } html += `<li>${b[1]}</li>`; continue; }
    if (list) { html += "</ul>"; list = false; }
    if (line.trim()) html += `<p>${line}</p>`;
  }
  if (list) html += "</ul>";
  return html.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
}

// Called on every page: the company page and the methodology page pass what the helper may see, others null.
export function aiPage(p) {
  if (!endpoint() || !p) { page = null; open = false; if (root) root.hidden = true; return; }
  const key = `${p.page}:${p.ticker || ""}`;
  if (!page || page.key !== key) { log = []; open = false; }
  page = { ...p, key };
  if (!root) {
    root = document.createElement("div");
    root.className = "ai-root";
    document.body.appendChild(root);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && open) toggle(false); });
  }
  root.hidden = false;
  render();
}

function toggle(on) {
  open = on;
  render();
  if (on) root.querySelector(".ai-input")?.focus();
  else root.querySelector(".ai-fab")?.focus();
}

function messages() {
  if (!log.length) return `<p class="ai-intro">${esc(t("ai.intro"))}</p>
    <div class="ai-suggest">${(SUGGEST[page.page] || []).map((k) => `<button type="button" class="chip-toggle" data-q="${esc(t(k))}">${esc(t(k))}</button>`).join("")}</div>`;
  return log.map((x) => `<div class="ai-q">${esc(x.q)}</div>
    <div class="ai-a${x.state === "error" ? " ai-err" : ""}">${x.state === "error" ? esc(t(x.err === "rate" ? "ai.rate" : "ai.error"))
      : x.a ? formatAnswer(x.a) : `<span class="ai-dots" aria-label="${esc(t("ai.thinking"))}"><i></i><i></i><i></i></span>`}</div>`).join("");
}

function render() {
  if (!root || !page) return;
  const dir = langMeta(lang()).dir || "ltr";
  root.innerHTML = `
    <button type="button" class="ai-fab${open ? " on" : ""}" aria-expanded="${open}" aria-controls="ai-panel">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9zM19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z"/></svg>
      <span>${esc(t("ai.button"))}</span></button>
    <section class="ai-panel glass" id="ai-panel" role="dialog" aria-label="${esc(t("ai.title"))}" dir="${dir}" ${open ? "" : "hidden"}>
      <div class="ai-head"><b>${esc(t("ai.title"))}</b>${page.title ? `<span class="ai-sub">${esc(page.title)}</span>` : ""}
        <button type="button" class="icon-btn ai-close" aria-label="${esc(t("ai.close"))}">×</button></div>
      <div class="ai-log" aria-live="polite">${messages()}</div>
      <form class="ai-form">
        <textarea class="ai-input" rows="2" maxlength="500" placeholder="${esc(t("ai.placeholder"))}" aria-label="${esc(t("ai.placeholder"))}"></textarea>
        <button class="btn btn-primary" type="submit" ${busy ? "disabled" : ""}>${esc(t("ai.send"))}</button>
      </form>
      <p class="ai-note">${esc(t("ai.note"))}</p>
    </section>`;
  root.querySelector(".ai-fab").addEventListener("click", () => toggle(!open));
  root.querySelector(".ai-close").addEventListener("click", () => toggle(false));
  root.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => ask(b.dataset.q)));
  const input = root.querySelector(".ai-input");
  root.querySelector(".ai-form").addEventListener("submit", (e) => { e.preventDefault(); ask(input.value); });
  input.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(input.value); } });
  const box = root.querySelector(".ai-log");
  box.scrollTop = box.scrollHeight;
}

function paintLog() {
  const box = root?.querySelector(".ai-log");
  if (!box) return;
  const atEnd = box.scrollHeight - box.scrollTop - box.clientHeight < 40;
  box.innerHTML = messages();
  if (atEnd) box.scrollTop = box.scrollHeight;
  root.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => ask(b.dataset.q)));
  const send = root.querySelector(".ai-form button");
  if (send) send.disabled = busy;
}

async function ask(text) {
  const q = String(text || "").trim().slice(0, 500);
  if (!q || busy || !page) return;
  const forPage = page.key;
  busy = true;
  const item = { q, a: "", state: "streaming" };
  const earlier = log.filter((x) => x.state === "done").slice(-3).map((x) => ({ q: x.q, a: x.a.slice(0, 1200) }));
  log.push(item);
  const input = root.querySelector(".ai-input");
  if (input) input.value = "";
  paintLog();
  try {
    const res = await fetch(endpoint(), { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: q, lang: lang(), page: page.page, ticker: page.ticker || "", context: page.context || "", earlier }) });
    if (!res.ok || !res.body) {
      const err = res.status === 429 ? (await res.json().catch(() => ({}))).error : "";
      Object.assign(item, { state: "error", err: err === "rate" ? "rate" : "error" });
    } else {
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        item.a += dec.decode(value, { stream: true });
        if (page?.key === forPage) paintLog();
      }
      const broken = item.a.includes(BROKEN);
      item.a = item.a.replace(BROKEN, "").trim();
      Object.assign(item, item.a ? { state: "done" } : { state: "error", err: "error" });
      if (broken && item.a) item.a += " …";
    }
  } catch {
    Object.assign(item, { state: "error", err: "error" });
  }
  busy = false;
  if (page?.key === forPage) paintLog();
}
