// Company logos: small copies kept with the data (data/logos/<TICKER>.webp), so the site loads them from
// its own address, a few kilobytes each, and does not depend on another server while it is open.
// Source: the public logo images of Financial Modeling Prep. Every logo is trimmed and fitted into a square
// tile: white, or dark blue for logos that are light-coloured on a transparent background.
// data/logos/status.json remembers tickers without a logo; they are retried after RETRY_DAYS.
// Image processing needs the "sharp" package (installed by the workflow outside the site folder, see
// SHARP_DIR); without it the logos step is skipped and the site shows letter tiles.

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

export const LOGO_SIZE = 96;
export const RETRY_DAYS = 30;
const PLACEHOLDER_MIN = 5; // the same image for this many companies is a placeholder, not a logo
const source = (t) => `https://financialmodelingprep.com/image-stock/${encodeURIComponent(t)}.png`;
export const logoFile = (t) => (/^[A-Z0-9.\-]+$/.test(t) ? `${t}.webp` : null);
const DARK = { r: 23, g: 32, b: 54, alpha: 1 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

export function loadSharp() {
  const base = process.env.SHARP_DIR ? join(process.env.SHARP_DIR, "package.json") : import.meta.url;
  try { return createRequire(base)("sharp"); } catch { return null; }
}

// Logo image (PNG, JPEG, …) -> square WebP tile, or null when the image is unusable.
export async function processLogo(sharp, buf, size = LOGO_SIZE) {
  const meta = await sharp(buf, { failOn: "none" }).metadata().catch(() => null);
  if (!meta?.width || !meta?.height || meta.width < 16 || meta.height < 16) return null;
  let trimmed;
  try { trimmed = await sharp(buf, { failOn: "none" }).ensureAlpha().trim({ threshold: 12 }).png().toBuffer(); }
  catch { trimmed = await sharp(buf, { failOn: "none" }).ensureAlpha().png().toBuffer(); }
  const { data, info } = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let opaque = 0, lum = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    opaque++;
    lum += (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
  }
  if (opaque < 20) return null;
  const transparent = opaque / (info.width * info.height) < 0.97;
  const bg = transparent && lum / opaque > 0.82 ? DARK : WHITE;
  const pad = Math.round(size * (transparent ? 0.14 : 0.06));
  const fitted = await sharp(trimmed).resize(size - 2 * pad, size - 2 * pad, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: fitted, gravity: "center" }])
    .flatten({ background: bg })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
}

// Downloads the logos that are not there yet (within the time budget) and returns a summary.
export async function updateLogos({ dataDir, tickers, budgetMs = 15 * 60 * 1000, concurrency = 8, fetchImpl = fetch, now = new Date(), log = console.log }) {
  const sharp = loadSharp();
  if (!sharp) { log("logos: the sharp package is not installed; skipped"); return null; }
  const dir = join(dataDir, "logos");
  mkdirSync(dir, { recursive: true });
  const statusFile = join(dir, "status.json");
  let status = { missing: {} };
  try { status = JSON.parse(readFileSync(statusFile, "utf8")); status.missing ||= {}; } catch {}
  const have = new Set(readdirSync(dir).filter((f) => f.endsWith(".webp")));
  const today = now.toISOString().slice(0, 10);
  const age = (d) => (now - new Date(d)) / 86400000;
  const due = [...new Set(tickers)].filter((t) => logoFile(t) && !have.has(logoFile(t)) && !(status.missing[t] && age(status.missing[t]) < RETRY_DAYS));
  const start = Date.now();
  const hashes = new Map();
  let saved = 0, missing = 0, done = 0;
  const queue = [...due];
  async function worker() {
    while (queue.length && Date.now() - start < budgetMs) {
      const t = queue.shift();
      done++;
      try {
        const r = await fetchImpl(source(t), { signal: AbortSignal.timeout(20000), headers: { "User-Agent": "TeraStockX logo cache" } });
        const type = r.headers.get("content-type") || "";
        const buf = r.ok && type.startsWith("image/") ? Buffer.from(await r.arrayBuffer()) : null;
        const tile = buf ? await processLogo(sharp, buf) : null;
        if (!tile) { status.missing[t] = today; missing++; continue; }
        const h = createHash("md5").update(buf).digest("hex");
        (hashes.get(h) || hashes.set(h, []).get(h)).push(t);
        writeFileSync(join(dir, logoFile(t)), tile);
        delete status.missing[t];
        saved++;
      } catch {
        status.missing[t] = today; missing++;
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  // The same picture for many unrelated companies is the source's "no logo" image.
  for (const [, list] of hashes) {
    if (list.length < PLACEHOLDER_MIN) continue;
    for (const t of list) { try { unlinkSync(join(dir, logoFile(t))); } catch {} status.missing[t] = today; saved--; missing++; }
  }
  status.updated = today;
  writeFileSync(statusFile, JSON.stringify(status) + "\n");
  const summary = { due: due.length, checked: done, saved, missing, remaining: due.length - done, total: readdirSync(dir).filter((f) => f.endsWith(".webp")).length };
  log(`logos: ${JSON.stringify(summary)}`);
  return summary;
}

// Tickers that have a logo file (for the index).
export function logoSet(dataDir) {
  try { return new Set(readdirSync(join(dataDir, "logos")).filter((f) => f.endsWith(".webp")).map((f) => f.slice(0, -5))); } catch { return new Set(); }
}
