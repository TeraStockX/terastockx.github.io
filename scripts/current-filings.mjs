// Filings accepted by EDGAR during the day, from the SEC's "latest filings" feed (updated continuously).
// The intraday update uses it to download again the companies that filed an annual or quarterly report
// or a current report (8-K) since their data was last downloaded.

export const CURRENT_FORMS = ["10-K", "10-Q", "20-F", "40-F", "8-K", "6-K"];
// Forms whose financial statements change the analysis; the other forms only change events.
export const FINANCIAL_FORMS = new Set(["10-K", "10-K/A", "10-Q", "10-Q/A", "20-F", "20-F/A", "40-F", "40-F/A", "10-KT"]);

const decode = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");

// Atom feed -> [{ form, cik, accession, updated }]
export function parseCurrentFeed(xml) {
  const out = [];
  for (const m of String(xml || "").matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const e = m[1];
    const title = decode(/<title[^>]*>([\s\S]*?)<\/title>/.exec(e)?.[1] || "");
    const form = /<category[^>]*term="([^"]+)"/.exec(e)?.[1] || title.split(" - ")[0].trim();
    const cik = /\((\d{10})\)/.exec(title)?.[1] || null;
    const accession = /accession-number=([\d-]{20})/.exec(e)?.[1] || /AccNo:\D*([\d-]{20})/.exec(decode(e))?.[1] || null;
    const updated = /<updated>([^<]+)<\/updated>/.exec(e)?.[1] || null;
    if (cik && accession && form) out.push({ form, cik, accession, updated });
  }
  return out;
}

// All feed entries of the given forms accepted after `since` (Date), newest first, one per filing.
// get(url, "text") is the caller's rate-limited fetch.
export async function currentFilings({ get, since, forms = CURRENT_FORMS, maxPages = 10 }) {
  const out = [], seen = new Set();
  for (const form of forms) {
    for (let page = 0; page < maxPages; page++) {
      const url = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=${encodeURIComponent(form)}&company=&dateb=&owner=exclude&start=${page * 100}&count=100&output=atom`;
      const entries = parseCurrentFeed(await get(url, "text"));
      for (const e of entries) {
        const key = `${e.cik}|${e.accession}`;
        if (seen.has(key)) continue;
        seen.add(key);
        if (!since || !e.updated || new Date(e.updated) >= since) out.push(e);
      }
      // A page shorter than 100 is the last; a page reaching back before `since` covers the period.
      if (entries.length < 100 || (since && entries.some((e) => e.updated && new Date(e.updated) < since))) break;
    }
  }
  return out.sort((a, b) => String(b.updated).localeCompare(String(a.updated)));
}
