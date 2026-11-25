# AI-segéd („Kérdezz” panel) – beüzemelés

A cégoldalakon és a Módszertan oldalon megjelenő „Kérdezz” panel egy kis közvetítőn (Cloudflare Worker) keresztül
kérdezi a Claude-ot. A közvetítő őrzi titokban az API-kulcsot, így az nem kerül a weboldal kódjába.

- A segéd **csak magyaráz**: a cég oldalon látható számaiból és a módszertanból, a látogató nyelvén. Befektetési
  tanácsot nem ad.
- Amíg nincs beállítva, a gomb nem látszik az oldalon.

## Amit egyszer be kell állítani (kb. 15 perc, mind böngészőben)

### 1. Anthropic (Claude API)
1. Regisztrálj a https://platform.claude.com oldalon.
2. **Billing** → **Buy credits**: tölts fel egy kis összeget (pl. 10 dollár). Az automatikus feltöltést hagyd kikapcsolva.
3. **Settings → Limits**: állíts be havi költéskorlátot (pl. 10 dollár). Ez a végső biztosíték: efölött a segéd leáll,
   utólagos számla nincs.
4. **API keys → Create key** (név: `terastockx-ai`). A kulcsot **ne küldd el senkinek, a csevegésbe se másold be**;
   csak a 3. lépésben használod.

### 2. Cloudflare (ingyenes csomag)
1. Regisztrálj a https://dash.cloudflare.com oldalon.
2. Nyisd meg a **Workers & Pages** részt. Első alkalommal választani kell egy `workers.dev` aldomaint
   (pl. `terastockx`).
3. Az **Account ID**-t a Workers & Pages áttekintő oldalán (jobb oldalt) találod: másold ki.
4. **My Profile → API Tokens → Create Token** → az **„Edit Cloudflare Workers”** sablon → **Create Token**: másold ki.

### 3. GitHub (a weboldal tárolója)
A tárolóban: **Settings → Secrets and variables → Actions → New repository secret**, háromszor:

| Név | Érték |
|---|---|
| `ANTHROPIC_API_KEY` | az 1. lépés kulcsa |
| `CLOUDFLARE_API_TOKEN` | a 2. lépés tokenje |
| `CLOUDFLARE_ACCOUNT_ID` | a 2. lépés Account ID-ja |

### 4. Indítás
1. **Actions → „AI-segéd (Cloudflare Worker)” → Run workflow.** Pár perc alatt elkészül.
2. A futás naplójának végén megjelenik a segéd címe, pl. `https://terastockx-ai.terastockx.workers.dev`.
3. Ezt a címet (nem titkos) írd be az `assets/js/config.js` fájlba (`AI_ENDPOINT`), vagy küldd el, és beállítom.
   Ezután megjelenik a „Kérdezz” gomb.

## Beállítások (`worker/wrangler.toml`)
- `MODEL`: `claude-opus-5-5` (legjobb magyarázatok, kb. 2–3 cent kérdésenként) vagy `claude-haiku-5-5`
  (kb. 0,1 cent kérdésenként).
- `MAX_PER_HOUR`: egy címről óránként ennyi kérdés jöhet (alapból 15; adatközpontonként számolva, közelítő).
- `ALLOWED_ORIGINS`: csak ezekről az oldalakról fogad kérdést.

Módosítás után a GitHub automatikusan újratelepíti a közvetítőt.

## Védelem és költség
- Csak a terastockx.com-ról fogad kérdést; a kérdés és a cégadatok hossza korlátozott.
- Óránkénti kérdéskorlát címenként, és a Claude-fiók havi költéskorlátja.
- A módszertani rész egy órára gyorsítótárba kerül, így kérdésenként főleg a cég adatai és a kérdés számít.
- A közvetítő naplójában csak a felhasznált tokenek száma látszik (kérdés szövege és IP-cím nem).

## Fejlesztőknek
- `src/index.js`: a közvetítő (Claude API, folyamatos válasz); `src/guard.js`: kérésellenőrzés, korlát, szabályok.
- `src/methodology.js`: a segéd módszertani tudása; a pontozó motorból generálódik:
  `node scripts/ai-prompt.mjs` (módszertan-változás után futtasd; a teszt figyelmeztet, ha elavult).
- Kipróbálás egy böngészőben: `localStorage.setItem("tsx-ai-endpoint", "<a közvetítő címe>")`.
