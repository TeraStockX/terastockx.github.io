// All common stocks listed on the major US exchanges, from the official Nasdaq Trader symbol directories:
//   nasdaqlisted.txt – Nasdaq
//   otherlisted.txt  – NYSE (N), NYSE American (A), Cboe BZX (Z); NYSE Arca (P) and IEX (V) are skipped
//                      because they list almost only ETFs and other funds.
// ETFs, test issues, warrants, units, rights, notes and preferred shares are excluded.

export const EXCHANGES = { Q: "NASDAQ", N: "NYSE", A: "NYSE American", Z: "Cboe BZX" };

// Warrants, units, rights and notes share the issuer's SEC filings; only the shares themselves are analyzed.
export const DERIVATIVE = /\b(warrants?|units?|rights?|notes? due|debentures?|subordinated|preferred|depositary shares, each representing a fractional|when issued)\b/i;

export function cleanName(n) {
  return String(n)
    .replace(/\s+-\s+.*$/, "")
    .replace(/\s+(Class [A-Z] )?(Common Stock|Common Shares|Ordinary Shares|American Depositary Shares|American Depository Shares|Shares of Beneficial Interest|Capital Stock)\b.*$/i, "")
    .trim();
}

function parseTable(txt) {
  const lines = String(txt).trim().split(/\r?\n/).filter((l) => !l.startsWith("File Creation Time"));
  const header = lines[0].split("|");
  return lines.slice(1).map((l) => Object.fromEntries(l.split("|").map((v, i) => [header[i], v])));
}

export function parseNasdaqListed(txt) {
  return parseTable(txt)
    .filter((r) => r["Test Issue"] === "N" && r.ETF === "N" && !DERIVATIVE.test(r["Security Name"]))
    .map((r) => ({ ticker: r.Symbol, name: cleanName(r["Security Name"]), exchange: EXCHANGES.Q }));
}

export function parseOtherListed(txt) {
  return parseTable(txt)
    .filter((r) => EXCHANGES[r.Exchange] && r.Exchange !== "Q" && r["Test Issue"] === "N" && r.ETF === "N")
    .filter((r) => !DERIVATIVE.test(r["Security Name"]) && !/[$^+=]/.test(r["ACT Symbol"]))
    .map((r) => ({ ticker: r["ACT Symbol"], name: cleanName(r["Security Name"]), exchange: EXCHANGES[r.Exchange] }));
}

// Exchange-traded funds of both directories (NYSE Arca included). Shown only in the portfolio:
// a fund has no financial statements of its own, so it gets no TeraScore.
const ETF_EXCHANGES = { ...EXCHANGES, P: "NYSE Arca", V: "IEX" };
export function parseEtfs(nasdaqTxt, otherTxt) {
  const nasdaq = parseTable(nasdaqTxt).filter((r) => r["Test Issue"] === "N" && r.ETF === "Y")
    .map((r) => ({ ticker: r.Symbol, name: r["Security Name"].trim(), exchange: EXCHANGES.Q }));
  const other = parseTable(otherTxt).filter((r) => r["Test Issue"] === "N" && r.ETF === "Y" && ETF_EXCHANGES[r.Exchange] && !/[$^+=]/.test(r["ACT Symbol"]))
    .map((r) => ({ ticker: r["ACT Symbol"], name: r["Security Name"].trim(), exchange: ETF_EXCHANGES[r.Exchange] }));
  const seen = new Set();
  return [...nasdaq, ...other].filter((x) => !seen.has(x.ticker) && seen.add(x.ticker));
}
