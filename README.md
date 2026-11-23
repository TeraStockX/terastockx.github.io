# TeraStockX

**Fundamental analysis of every company listed on Nasdaq, NYSE, NYSE American and Cboe — in English, Magyar, Deutsch, Français and Español.**

Az amerikai tőzsdék (Nasdaq, NYSE, NYSE American, Cboe) összes vállalatának fundamentális elemzése tíz befektetési szempont szerint, auditált SEC-jelentések alapján, a szektortársakhoz viszonyítva:

| Szempont | Mit mér |
|---|---|
| Jövedelmezőség | árrések, ROIC, ROE, ROA |
| Cash flow minősége | FCF-árrés, FCF-konverzió, eredményhatárolás, részvényalapú juttatás |
| Mérlegerő | nettó adósság/EBITDA, adósság/saját tőke, kamatfedezet, Altman Z'' |
| Likviditás | likviditási ráta, gyorsráta, pénzeszköz-ráta |
| Növekedés (1 év) | árbevétel, üzemi eredmény, EPS, FCF |
| Hosszú távú növekedés | 5 éves CAGR-ek, egy részvényre jutó saját tőke |
| Kiszámíthatóság | nyereséges évek, volatilitás, Piotroski F-pontszám |
| Tőkeallokáció | hígítás / visszavásárlás, részvényesi hozam, osztalékfedezet |
| Értékeltség | P/E, EV/EBIT, FCF-hozam, P/S, PEG (TTM-adatokon) |
| Kockázat | fundamentális + piaci (volatilitás, max. visszaesés) + jelzések |

Emellett: hasonló vállalatok összevetése a cégoldalon, osztalékbiztonság, portfólió-elemzés, negyedéves adatok, nyomtatható PDF-jelentés, appként telepíthető (telefon, tablet, számítógép), szektorhoz viszonyított pontozás (szektormediánnal), szűrő és rangsor, TeraScore-változások (a pontszám változása üzleti évenként és hetente), figyelőlista-riasztások, bennfentes ügyletek (SEC Form 4), külföldi cégek saját pénznemben (20-F / IFRS), csődkockázat, hosszú távú trend, befektetési profil (minőségi, növekedési, érték, osztalék, spekulatív), szektoron belüli rangsor, 34-féle figyelmeztetés és erősség, vállalat-összehasonlítás, figyelőlista, nyers pénzügyi kimutatások CSV/JSON letöltéssel. Bankokra, biztosítókra és REIT-ekre külön mérce vonatkozik.

A teljes adatsablon és a pontozás minden küszöbértéke: **[`docs/SABLON.md`](docs/SABLON.md)** (a kódból generálva).

## Felépítés

```
index.html                    egyoldalas webalkalmazás (keretrendszer nélkül)
manifest.webmanifest, sw.js   telepíthető app (PWA): ikon, teljes képernyő, offline gyorsítótár
assets/img/icons/             app-ikonok (iPhone, Android, számítógép)
assets/css/style.css          üveghatású, kékes-fekete dizájn (mobil, tablet, laptop)
assets/img/                   logó és illusztráció
assets/js/app.js              felület: lista, cégoldal, trend, hírek, nyers adatok, összehasonlítás, módszertan
assets/js/scoring.js          elemzőmotor (böngészőben és Node-ban is fut)
assets/js/portfolio.js        portfólió-elemzés
assets/js/charts.js           grafikonok
assets/js/i18n/               nyelvi fájlok: en (alapértelmezett), hu, de, fr, es
data/                         adatok – a data ágon tárolva (mindig csak a legfrissebb állapot):
                              index.json, news.json, benchmarks.json, companies/*.json
scripts/update-data.mjs       adatletöltő (SEC EDGAR + Nasdaq + árfolyam-előzmények)
scripts/sec-parse.mjs         SEC XBRL → sablon (éves, TTM, legfrissebb mérleg)
scripts/sectors.mjs           SIC-kód → szektor és elemzési profil
scripts/market.mjs            árfolyam, piaci kapitalizáció, devizaárfolyamok, havi árfolyam-előzmények
scripts/listings.mjs          tőzsdelisták (Nasdaq, NYSE, NYSE American, Cboe)
scripts/insider.mjs           bennfentes ügyletek (SEC Form 4 negyedéves adatbázis)
scripts/events.mjs            jelentős 8-K események, a nagy cégek friss 8-K bejelentései
scripts/news-headline.mjs     hírcímek: a 8-K-hoz csatolt sajtóközlemény (Exhibit 99) címe, ennek hiányában a bejelentett pont első mondata
scripts/pulse.mjs             „Fő hírek” (nagy cégek vezetőváltásai, felvásárlásai, gyorsjelentései, nagy árfolyammozgásai, nyitás előtt és zárás után is) és „Piac ma”: indexek, témák (pl. AI-részvények), szektorok, legnagyobb mozgások, új jelentések, TeraScore-változások, új tőzsdei cégek
scripts/xbrl-instance.mjs     a companyfactsből hiányzó jelentések kiolvasása az XBRL-fájlból
scripts/gen-docs.mjs          docs/SABLON.md generálása
tests/                        tesztek (npm test)
```

## Helyi futtatás

```bash
git fetch origin data && git archive FETCH_HEAD data | tar -x    # adatok a data ágról
npm start        # http://localhost:8000
npm test
npm run docs     # docs/SABLON.md újragenerálása
```

## Adatfrissítés

```bash
SEC_USER_AGENT="Név email@cim.hu" npm run update-data                 # minden vállalat (~2–3 óra)
SEC_USER_AGENT="..." node scripts/update-data.mjs --tickers AAPL,MSFT
node scripts/update-data.mjs --skip-prices                             # árfolyam-előzmények nélkül
npm run build-index                                                    # csak az index újraszámolása
```

Az árfolyam- és piaci adatok (Nasdaq, Yahoo Finance, Stooq) opcionálisak: ha egy forrás nem érhető el, az értékeltség és a piaci kockázat kimarad, a többi szempont változatlanul számolódik.

## Online közzététel (GitHub Pages)

A `.github/workflows/deploy.yml` minden `main`-re pusholáskor közzéteszi az oldalt, minden nap pedig frissíti az adatokat (a bennfentes adatokat hétfőnként); hétköznap az amerikai kereskedési időben (13:00–22:00 UTC) 5 percenként, előtte és utána (11:00–13:00 és 22:00–01:00 UTC) 10 percenként az árfolyamokat, az aznap beadott jelentések alapján a cégek adatait és TeraScore-ját, valamint a „Piac ma” összefoglalót is (`.github/workflows/intraday.yml`). Mivel a GitHub az ütemezett futásokat terhelés idején késve vagy egyáltalán nem indítja, minden napközbeni futás a végén maga indítja a következőt; az ütemezés csak elindítja (vagy újraindítja) ezt a láncot. A 10 milliárd dollárnál nagyobb cégek friss 8-K bejelentéseihez a frissítés letölti a csatolt sajtóközlemény címét (pl. „NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director”), ezekből és a nagy árfolyammozgásokból állnak össze a „Fő hírek”. A Nasdaq tőzsdelistájának árai a nap nagy részében az előző záróárat mutatják, ezért kereskedési időben a kb. 2000 legnagyobb cég (2 milliárd dollár felett) és a 100 legnagyobb alap élő árfolyama külön töltődik le (20 szimbólum kérésenként); nyitás előtt és zárás után a 300 legnagyobb cégé és az indexalapoké, így a nyitás előtti és zárás utáni mozgások is látszanak. A nap árfolyamai a napközbeni futások között megmaradnak (Actions cache), így zárás után is a napi változás látszik. A cégek logóit a napi frissítés tölti le és kicsinyíti (`scripts/logos.mjs`). Az adatok a `data` ágra kerülnek, amely mindig egyetlen commitot tartalmaz, így a repó nem nő hétről hétre.

1. **Settings → Pages → Source: GitHub Actions**
2. **Settings → Secrets and variables → Actions → New repository secret:** `SEC_USER_AGENT` = `Név email@cim.hu`
3. **Actions → „Adatfrissítés és közzététel” → Run workflow**

Az oldal címe: `https://terastockx.com/` (GitHub Pages, saját domain; a régi `terastockx.github.io` cím átirányít)

> Az értékelések múltbeli, nyilvános pénzügyi adatokon alapulnak, és nem minősülnek befektetési tanácsnak.
