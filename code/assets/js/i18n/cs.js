// Czech.
export default {
 "meta": {
  "name": "Čeština",
  "short": "CS",
  "locale": "cs-CZ"
 },
 "ui": {
  "classTitle": "Společnost má několik kótovaných tříd akcií, které se liší hlavně hlasovacím právem. Finanční údaje a TeraScore jsou pro všechny stejné.",
  "classNonVoting": "Bez hlasovacího práva",
  "classVoting": "S hlasovacím právem",
  "classLetter": "Třída {c}",
  "slogan": "Chytrý nástroj pro investory.",
  "notApplicable": "nelze použít",
  "bdMissing": "◐ = oblast, kterou nebylo možné ohodnotit kvůli chybějícím datům: počítá se jako neutrálních {s}, nebo jako průměr ostatních oblastí společnosti, pokud je nižší, takže chybějící data nikdy nezvednou skóre.",
  "bdNote": "Od základu 50 každá oblast přičte nebo odečte svou váhu × (své skóre − 50); součet je TeraScore ({s}, zaokrouhleno).",
  "bdMissingShort": "žádná data → {s}",
  "bdLowers": "Snižují",
  "bdLifts": "Zvyšují",
  "bdTitle": "Co zvyšuje a co snižuje TeraScore?",
  "basis3y": "3letý základ",
  "netCashLoss": "čistá hotovost, ztráta: {s} b.",
  "runwayCap": "omezuje likviditu, dokud společnost spaluje hotovost",
  "capLabel": "strop",
  "yearsUnit": "{n} r.",
  "pfCurrency": "Měna",
  "pfAllocTitle": "Rozložení",
  "pfByHolding": "Podle pozice",
  "pfByCurrency": "Podle obchodní měny",
  "pfHistTitle": "Vývoj portfolia",
  "pfHistLoading": "Načítání historie cen…",
  "pfHistValue": "Hodnota současných pozic",
  "pfHistValueSub": "Měsíčně, poslední dva roky, v {c} (zahraniční ceny podle dnešního kurzu).",
  "pfHistMissing": "Bez historie cen, nezahrnuto: {list}.",
  "pfHistScoreWeekly": "TeraScore portfolia týden po týdnu",
  "pfHistScoreYearly": "TeraScore portfolia podle fiskálních let",
  "pfHistScoreSub": "Společnosti vážené dnešní hodnotou (ETF nemají TeraScore).",
  "etfAcc": "akumulační",
  "etfDist": "distribuční",
  "cmpPartialNote": "V podáních těchto společností chybějí data, proto je jejich analýza částečná a skóre méně jistá: {list}. Oblasti označené „žádná data“ se počítají nejvýše jako neutrálních 50, takže chybějící data nikdy nezvednou TeraScore.",
  "showMore": "Zobrazit více",
  "tagline": "Fundamentální analýza akcií, přehledně.",
  "heroText": "Každá společnost kótovaná na Nasdaq, NYSE, NYSE American a Cboe hodnocená v deseti investičních dimenzích — ziskovost, kvalita peněžních toků, síla rozvahy, růst, ocenění a riziko — na základě auditovaných podání u SEC a porovnaná se společnostmi ze stejného sektoru.",
  "navCompanies": "Společnosti",
  "navCompare": "Porovnat",
  "navMethod": "Metodika",
  "language": "Jazyk",
  "searchPlaceholder": "Hledat ticker nebo název společnosti (např. AAPL, Apple)",
  "allSectors": "Všechny sektory",
  "onlyAnalyzed": "Analyzované společnosti",
  "allCompanies": "Všechny společnosti",
  "watchlist": "Sledované",
  "results": "Výsledky: {n}",
  "analyzedOf": "Analyzováno: {a} / společností: {n}",
  "updated": "Aktualizováno {d}",
  "company": "Společnost",
  "noData": "žádná data",
  "noResults": "Hledání neodpovídá žádná společnost.",
  "prev": "Předchozí",
  "next": "Další",
  "demoBadge": "DEMO",
  "demoNote": "Společnosti označené DEMO ukazují přibližná ukázková čísla, dokud aktualizace nenačte oficiální data SEC.",
  "back": "Zpět na seznam",
  "tabAnalysis": "Analýza",
  "tabRaw": "Účetní výkazy",
  "demoNotice": "Ukázková data: přibližná čísla. Aktualizace je nahradí oficiálními podáními u SEC.",
  "notFound": "Nenalezena společnost s tickerem {t}.",
  "lastFy": "Poslední fiskální rok: {y}",
  "ttmBasis": "Ocenění podle údajů za posledních dvanáct měsíců (TTM) k {d}",
  "annualBasis": "Ocenění podle údajů za poslední fiskální rok",
  "overallScore": "TeraScore",
  "risk": "Riziko",
  "distress": "Riziko finančních potíží",
  "trend": "Dlouhodobý trend",
  "coverage": "Úplnost dat",
  "watchEmpty": "Seznam sledovaných je prázdný. Klepnutím na hvězdičku ☆ v řádku společnosti ji sem přidáte.",
  "now": "Teď",
  "today": "Dnes",
  "yesterday": "Včera",
  "updatedLabel": "Aktualizováno",
  "searchFuzzy": "Žádná přesná shoda pro „{q}“. Podobné názvy:",
  "years": "{n} r.",
  "marketCap": "Tržní kapitalizace",
  "price": "Cena",
  "sector": "Sektor",
  "industry": "Odvětví",
  "sectionScores": "Hodnoticí karta",
  "sectionFlags": "Varovné signály a silné stránky",
  "sectionCharts": "Historický vývoj",
  "sectionKey": "Klíčové ukazatele",
  "howCalculated": "Podrobnosti výpočtu",
  "weight": "váha",
  "points": "b.",
  "notScored": "n/a",
  "sectorRank": "Lepší než {p} % společností v sektoru {s}",
  "sectorRankShort": "Top {p} % v sektoru",
  "riskExplain": "Riziko = 100 − skóre bezpečnosti. Bezpečnost tvoří z {f} % fundamenty (rozvaha {bs} %, stabilita {co} %, peněžní toky {cf} %, ziskovost {pr} %, likvidita {li} %) a z {m} % volatilita a největší propad ceny akcie (pokud je k dispozici historie cen). Varovné signály zvyšují riziko ({c} bodů za každý kritický a {w} za každé jiné varování) po saturační křivce: každý bod uzavře část zbývající vzdálenosti ke 100, takže i nejrizikovější společnosti se od sebe dál liší.",
  "noFlags": "Žádné významné signály.",
  "critical": "Kritické",
  "warningTag": "Varování",
  "strength": "Silná stránka",
  "footer": "TeraStockX počítá všechna skóre z veřejných účetních výkazů podaných u SEC. Skóre popisují historické fundamenty; nejsou investičním doporučením a nepředpovídají ceny akcií.",
  "engine": "Engine v{v}. Skóre vypočtená z historických, veřejně vykázaných dat; nejde o investiční doporučení.",
  "currencyNote": "Částky v {cur}.",
  "source": "Zdroj",
  "retrieved": "staženo {d}",
  "downloadCsv": "Stáhnout CSV",
  "downloadJson": "JSON (šablona)",
  "fiscalYear": "Fiskální rok",
  "ttm": "TTM",
  "computedRatios": "Vypočtené ukazatele",
  "addWatch": "Přidat do sledovaných",
  "removeWatch": "Odebrat ze sledovaných",
  "compareWith": "Porovnat",
  "compareTitle": "Porovnání společností",
  "compareHint": "Vyberte až šest společností k porovnání vedle sebe.",
  "addCompany": "Přidat společnost (název nebo ticker)…",
  "remove": "Odebrat",
  "dimension": "Dimenze",
  "metric": "Ukazatel",
  "chartRevenue": "Tržby",
  "chartNetIncome": "Čistý zisk",
  "chartFcf": "Volné peněžní toky",
  "chartMargin": "Provozní marže",
  "chartPrice": "Cena akcie (měsíčně, upravená)",
  "chartRevenueSub": "ročně",
  "chartNetIncomeSub": "ročně (červená = ztráta)",
  "chartFcfSub": "provozní peněžní toky − kapitálové výdaje",
  "chartMarginSub": "provozní zisk / tržby",
  "chartPriceSub": "měsíční závěrečné ceny, posledních 6 let", "chartPriceDaily": "Cena akcie (denní)", "chartPriceDailySub": "denní závěrečné ceny od {d}",
  "notEnough": "Nedostatek dat.",
  "errorLoad": "Něco se pokazilo: {e}",
  "serveHint": "Pokud jste soubor otevřeli přímo, spusťte místní webový server (viz README).",
  "profileFinancial": "Profil finanční instituce: ukazatele likvidity, EBITDA a volných peněžních toků se na banky a pojišťovny nevztahují, proto jsou vynechány.",
  "profileRealEstate": "Realitní profil: hranice zadlužení a ocenění jsou upraveny pro strukturálně vyšší dluh fondů REIT.",
  "styles": "Investiční profil",
  "navNews": "Trh a události",
  "navData": "Finanční data",
  "newsTitle": "Trh a události",
  "newsIntro": "Významné události, které společnosti kótované v USA za posledních 12 měsíců oficiálně oznámily SEC na formuláři 8-K: typy událostí s velkým dopadem (bankrot, přepracování výkazů, upozornění na vyřazení z obchodování, změna kontroly, akvizice, restrukturalizace, snížení hodnoty, změna auditora, kybernetické incidenty) a změny ve vedení velkých společností; rutinní podání jsou vynechána.",
  "newsEmpty": "V aktuálních datech nejsou žádné velké události.",
  "viewFiling": "Zobrazit podání",
  "sectionEvents": "Velké události (posledních 12 měsíců)",
  "eventsNone": "Za posledních 12 měsíců nebyly oznámeny žádné velké události.",
  "latestEvents": "Nejnovější velké události",
  "allNews": "Všechny velké události",
  "dataTitle": "Finanční data",
  "dataIntro": "Surové účetní výkazy v šabloně TeraStockX: výkaz zisku a ztráty, přehled peněžních toků a rozvaha až za deset fiskálních let plus posledních dvanáct měsíců, s vypočtenými ukazateli. Ke stažení jako CSV nebo JSON.",
  "dataPick": "Vyberte společnost (název nebo ticker)",
  "sev5": "Kritické",
  "sev4": "Velké",
  "sev3": "Významné",
  "sev2": "Pozoruhodné",
  "allSeverities": "Všechny typy událostí",
  "onlyCritical": "Jen kritické a velké",
  "openAnalysis": "Otevřít analýzu",
  "tabCompanies": "Akcie",
  "tabNews": "Události",
  "tabData": "Data",
  "tabCompare": "Porovnat",
  "tabMethod": "Metoda",
  "newsTop": "Nejdůležitější (kritické události; velké události společností nad $1B)",
  "filters": "Filtry vyhledávače",
  "filtersActive": "Aktivní: {n}",
  "reset": "Zrušit filtry",
  "minScore": "Minimální TeraScore",
  "maxRisk": "Maximální riziko",
  "anyValue": "Libovolné",
  "minCap": "Minimální kapitalizace",
  "minDividend": "Minimální dividendový výnos",
  "exchange": "Burza",
  "allExchanges": "Všechny burzy",
  "styleFilter": "Investiční profil:",
  "noCritical": "Bez kritických signálů",
  "pe": "P/E",
  "dividendYieldShort": "Div. výnos",
  "sectorMedian": "Medián sektoru",
  "insiderTitle": "Obchody insiderů",
  "insiderBuys": "Nákupy na otevřeném trhu",
  "insiderSells": "Prodeje na otevřeném trhu",
  "insiderNone": "Za posledních 12 měsíců insideři na otevřeném trhu nenakupovali ani neprodávali.",
  "insiderForeign": "Zahraniční soukromí emitenti jsou osvobozeni od podávání formuláře 4; data o insiderech nejsou k dispozici.",
  "insiderPlanned": "Z toho v rámci obchodních plánů 10b5-1",
  "insiderPeriod": "Formuláře 4 u SEC, {from} – {to}. Zobrazeny jsou jen nákupy (kód P) a prodeje (kód S) na otevřeném trhu; přidělení akcií, uplatnění opcí a srážky daní jsou vynechány.",
  "insiderCount": "Obchody: {n} · insideři: {p}",
  "insiderDate": "Datum",
  "insiderName": "Insider",
  "insiderType": "Obchod",
  "insiderShares": "Akcie",
  "insiderValue": "Hodnota",
  "insiderPurchase": "Nákup",
  "insiderSale": "Prodej",
  "insiderPlanTag": "Plán 10b5-1",
  "alertsTitle": "Upozornění na sledované",
  "alertsSeen": "Označit vše jako přečtené",
  "alertScore": "{t}: TeraScore se změnilo z {from} na {to}",
  "alertRisk": "{t}: riziko vzrostlo z {from} na {to}",
  "alertDistress": "{t}: riziko finančních potíží je nyní {level}",
  "alertEvent": "{t}: nová velká událost – {event} ({date})",
  "alertCritical": "{t}: nový kritický signál – {flag}",
  "fxNote": "výkazy v {cur}, převedeno kurzem 1 {cur} = {rate} USD",
  "navTrend": "Změny TeraScore",
  "tabTrend": "Změny",
  "trendIntro": "Jak se TeraScore společností mění v čase. Pohled podle fiskálních let hodnotí každou společnost ke konci každého fiskálního roku jen podle toho, co bylo tehdy známo (výroční zprávy, události 8-K za předchozích 12 měsíců a cena akcie k danému dni). Týdenní snímky přibývají s každou pondělní aktualizací, takže změny za 4 a 13 týdnů se objeví po prvních týdnech.",
  "trendPeriod": "Období",
  "trendPeriodFy": "Změna proti předchozímu fiskálnímu roku",
  "trendPeriod4w": "Změna za 4 týdny",
  "trendPeriod13w": "Změna za 13 týdnů",
  "trendUp": "Největší zlepšení",
  "trendDown": "Největší zhoršení",
  "trendChange": "Změna",
  "trendFrom": "z {v}",
  "trendWeeklyEmpty": "Týdenní snímky se sbírají při každé pondělní aktualizaci; tento pohled se zaplní po prvních týdnech.",
  "trendNote": "Změny jsou v bodech TeraScore. Skóre podle fiskálních let používají dnešní sektorová měřítka i pro minulé roky.",
  "trendAnnualChart": "TeraScore podle fiskálních let",
  "trendAnnualSub": "tehdejší skóre na konci každého fiskálního roku",
  "trendWeeklyChart": "TeraScore, týdně",
  "trendWeeklySub": "snímek z každé pondělní aktualizace",
  "trendAll": "Všechny změny",
  "navPortfolio": "Portfolio",
  "tabPortfolio": "Portfolio",
  "addPortfolio": "Přidat do portfolia",
  "inPortfolio": "V portfoliu",
  "pdfReport": "Zpráva v PDF",
  "minDivSafety": "Bezpečnost dividendy",
  "peersTitle": "Podobné společnosti",
  "peersNone": "V tomto sektoru nejsou srovnatelné hodnocené společnosti.",
  "peerMedian": "Medián srovnatelných",
  "peersSub": "Nejbližší srovnatelné společnosti v sektoru {s} podle odvětví a velikosti.",
  "peersRank": "{t} je v této skupině podle TeraScore na #{r}. místě z {n}.",
  "peersCompare": "Porovnat podrobně",
  "dividendTitle": "Dividenda",
  "dividendSafety": "Bezpečnost dividendy",
  "dividendYield": "Dividendový výnos",
  "dps": "Dividenda na akcii",
  "dpsCagr": "Růst dividendy (5letý CAGR)",
  "yearsPaid": "Vyplácena bez přerušení",
  "yearsN": "{n} r.",
  "yearsRaised": "Zvýšení v řadě",
  "dividendCuts": "Snížení (10 let)",
  "earningsPayout": "Výplatní poměr (zisk)",
  "fcfPayout": "Výplatní poměr (volné peněžní toky)",
  "payoutUncovered": "nekryto",
  "dividendNone": "Společnost nevyplácí dividendu.",
  "dividendNoneShort": "bez dividendy",
  "dividendNote": "Dividenda na akcii se počítá jako vyplacené peněžní dividendy dělené zředěným počtem akcií, proto se mimořádné dividendy projeví jako skoky. Výplatní poměry používají posledních dvanáct měsíců, pokud jsou k dispozici.",
  "chartDps": "Dividenda na akcii",
  "chartDpsSub": "vyplacené peněžní dividendy / zředěné akcie",
  "period": "Období",
  "periodAnnual": "Ročně",
  "periodQuarterly": "Čtvrtletně",
  "quarterEnd": "Čtvrtletí končící",
  "quarterlyNote": "Tříměsíční údaje. Pokud je čtvrtletí vykázáno jen kumulativně od začátku roku, jde o kumulativní údaj minus údaj předchozího čtvrtletí; čtvrté čtvrtletí je roční údaj minus prvních devět měsíců.",
  "quarterlyNone": "Čtvrtletní údaje nejsou k dispozici.",
  "quarterlyForeign": "Zahraniční soukromí emitenti podávají jen výroční zprávy (20-F / 40-F); čtvrtletní údaje nejsou k dispozici.",
  "pfIntro": "Zadejte své pozice a uvidíte hodnotou vážené TeraScore portfolia, riziko, dividendový příjem, rozložení do sektorů a upozornění na koncentraci. Portfolio se ukládá jen v tomto prohlížeči.",
  "pfAdd": "Přidat",
  "pfFromWatch": "Přidat sledované (po 1 akcii)",
  "pfNeedShares": "Zadejte počet akcií.",
  "pfEmpty": "Portfolio je prázdné. Přidejte výše společnost a počet akcií.",
  "pfValue": "Hodnota portfolia",
  "pfScore": "Vážené TeraScore",
  "pfIncome": "Roční dividendový příjem",
  "pfPe": "P/E portfolia",
  "pfHoldings": "Pozice",
  "pfSectors": "Rozložení do sektorů",
  "pfOther": "Ostatní",
  "pfChecks": "Kontroly portfolia",
  "pfOk": "Žádná upozornění na koncentraci ani kvalitu.",
  "pfInfo": "Poznámka",
  "pfShares": "Akcie",
  "pfPrice": "Cena",
  "pfValueCol": "Hodnota",
  "pfWeight": "Váha",
  "pfNote": "Ceny a skóre podle poslední aktualizace dat ({d}). Hodnoty v {c}; evropské ETF jsou oceněny ve vlastní obchodní měně a převedeny dnešním kurzem.",
  "reportTitle": "Zpráva o společnosti",
  "printPdf": "Tisk / uložit jako PDF",
  "printHint": "V dialogu tisku zvolte „Uložit jako PDF“.",
  "reportFinancials": "Pětiletý finanční přehled",
  "profile": "Investiční profil",
  "ratedCompanies": "Společnosti s TeraScore",
  "installFooter": "Nainstalovat aplikaci",
  "installBanner": "Nainstalujte si TeraStockX jako aplikaci do telefonu, tabletu nebo počítače.",
  "installHow": "Jak nainstalovat",
  "close": "Zavřít",
  "installTitle": "Nainstalujte TeraStockX jako aplikaci",
  "installIntro": "TeraStockX lze nainstalovat přímo z tohoto webu, bez obchodu s aplikacemi a téměř bez stahování. Pak se otevírá z vlastní ikony na celou obrazovku jako každá jiná aplikace a vždy ukazuje nejnovější data.",
  "installDone": "Používáte nainstalovanou aplikaci.",
  "installNow": "Nainstalovat",
  "installYourDevice": "Vaše zařízení",
  "installIos": "iPhone a iPad",
  "installAndroid": "Android",
  "installDesktop": "Počítač (Chrome, Edge)",
  "installNote": "Aplikace je stejná jako web: aktualizace dat přicházejí automaticky a vaše sledované i portfolio zůstávají v tomto zařízení. Odstraníte ji jako každou jinou aplikaci.",
  "pfAddPlaceholder": "Společnost nebo ETF (název nebo ticker)…",
  "pfScoreCover": "pokrývá {p} portfolia",
  "pfEtfs": "ETF",
  "etfExpense": "Celková nákladovost {v}",
  "etfNoScore": "ETF nemají TeraScore: fond nemá vlastní účetní výkazy.",
  "etfYieldInput": "Dividendový výnos (%)",
  "etfNote": "ETF nemají TeraScore; vážené TeraScore a riziko zahrnují jen společnosti.",
  "etfYieldMissing": "Zdroj dat neuvádí dividendový výnos pro {list}. Zadejte ho do sloupce výnosu (v %), aby se započítal do dividendového příjmu.",
  "screensTitle": "Rychlá hledání",
  "colChangeFy": "Změna",
  "filtersAndScreens": "Filtry a rychlá hledání",
  "maxPe": "Max. P/E",
  "minDrop": "Pod 12měsíčním maximem",
  "dropAtLeast": "alespoň {p}",
  "colFromHigh": "Od maxima",
  "contact": "Kontakt",
  "marketToday": "Trh dnes",
  "marketMore": "Trh a události",
  "eventsTitle": "Velké firemní události (8-K)",
  "pfMax": "Max",
  "pfSince": "od {d}",
  "pfMoveValue": "Změna hodnoty",
  "pfMoveScore": "Změna TeraScore",
  "pfMoveNoScore": "Zatím málo historie: týdenní TeraScore podle současné metody zaznamenáváme od {d}.",
  "pfMoveFy": "Poslední účetní rok oproti předchozímu (podle údajů známých v té době).",
  "pfMoveFyRange": "Účetní roky {a} → {b} (podle údajů známých v té době).",
  "pfMoveChartSub": "V {c}; zahraniční ceny podle dnešního kurzu.",
  "pfMoveTop": "Co pohnulo portfoliem",
  "pfMoveTopSub": "U každé pozice: změna ceny, její vliv na hodnotu portfolia a změna TeraScore za období.",
  "pfMoveMonthly": "S cenami ke konci měsíce (zatím bez denních uzavíracích cen): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "Akcie AI",
   "bigTech": "Big Tech",
   "semis": "Polovodiče",
   "banks": "Banky",
   "energy": "Ropa a plyn",
   "crypto": "Kryptoakcie"
  },
  "hlIndex": "{n} {v} dnes",
  "hlTheme": "{n} {v} dnes (nejlepší {b}, nejslabší {w})",
  "hlUp": "{n}: dnes růst o {v}",
  "hlDown": "{n}: dnes pokles o {v}",
  "hlReport": "{n} zveřejnila {f} ({form})",
  "annualReport": "výroční zprávu",
  "quarterlyReport": "čtvrtletní zprávu",
  "hlScore": "TeraScore společnosti {n} se změnilo o {v} b. (nyní {o})",
  "hlListing": "Nově na burze: {n}",
  "none": "Dnes není co zobrazit.",
  "notYet": "Přehled trhu se zobrazí po další aktualizaci dat.",
  "bestWorst": "nejlepší {b} · nejslabší {w}",
  "asOf": "Ceny: {d} (zpožděné asi o 15 minut). V pracovní dny se ceny, TeraScore, zprávy a nové výkazy aktualizují každých 5 minut během obchodních hodin v USA a každých 10 minut před nimi a po nich.",
  "headlines": "Dnešní velké pohyby",
  "themesTitle": "Témata (dnešní změna vážená kapitalizací)",
  "sectorsTitle": "Sektory dnes",
  "gainers": "Největší růst (od $2B)",
  "losers": "Největší pokles (od $2B)",
  "today": "Dnes",
  "reports": "Nové čtvrtletní a výroční zprávy",
  "filed": "Podáno",
  "scoreMoves": "Velké změny TeraScore od včerejška",
  "newListings": "Nově na burze",
  "listed": "Kótováno",
  "note": "Změny od předchozího závěru. Témata a sektory jsou váženy kapitalizací. Změny TeraScore se porovnávají se skóre z předchozího dne. Během obchodování se denní změna ukazuje u společností nad asi 2 miliardy dolarů a u největších fondů; u menších po denní aktualizaci.",
  "noFilings": "Zatím žádné finanční výkazy u SEC",
  "notScoredYet": "Zatím nehodnoceno",
  "notScoredText": "TeraScore vyžaduje alespoň jednu výroční zprávu (10-K nebo 20-F). Nově kótované společnosti ho dostanou po první výroční zprávě; do té doby se zobrazuje cena, kapitalizace a případné čtvrtletní údaje.",
  "lastReport": "Poslední zpráva",
  "storiesTitle": "Hlavní zprávy",
  "storiesNote": "Důležitá oznámení a velké cenové pohyby velkých společností (tržní hodnota nad 10 miliard dolarů) z posledních dní. Titulky pocházejí z podání samotných společností u SEC, v původní angličtině.",
  "kind": {
   "leadership": "Změna ve vedení",
   "deal": "Fúze nebo akvizice",
   "results": "Výsledky",
   "critical": "Kritická událost",
   "major": "Velká událost",
   "restructuring": "Restrukturalizace",
   "cyber": "Kybernetický incident",
   "board": "Změna v představenstvu",
   "other": "Oznámení",
   "move": "Velký cenový pohyb"
  },
  "when": {
   "pre": "před otevřením",
   "post": "po uzavření",
   "day": "dnes",
   "last": "poslední obchodní den"
  },
  "preNote": "Před otevřením: denní změny níže jsou z předchozího obchodního dne ({d}). Pohyby velkých společností před otevřením najdete v Hlavních zprávách.",
  "postNote": "Po uzavření: denní změny níže jsou z dnešního obchodování; pohyby velkých společností po uzavření najdete v Hlavních zprávách.",
  "readMore": "Tisková zpráva (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Od velkých společností teď nejsou žádné velké zprávy.",
  "moreNews": "Všechny zprávy",
  "asOfShort": "Ceny: {d}, zpožděné asi o 15 minut",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "od zprávy",
  "sinceNote": "U zprávy: změna ceny akcie od zprávy, měřená od poslední uzavírací ceny před ní (včetně obchodů před otevřením a po uzavření). U velkého cenového pohybu: pohyb za den, před otevřením nebo po uzavření."
 },
 "screens": {
  "top": {
   "name": "Nejvyšší TeraScore",
   "desc": "Všechny hodnocené společnosti, od nejvyššího TeraScore."
  },
  "bestRiskReward": {
   "name": "Nejlepší skóre, nejnižší riziko",
   "desc": "TeraScore alespoň 70 a riziko nejvýše 30, bez kritického varování, kapitalizace od $300M; řazeno podle TeraScore minus riziko."
  },
  "safeLongTerm": {
   "name": "Nejbezpečnější na dlouhou dobu",
   "desc": "TeraScore ≥ 65, riziko ≤ 25, stabilita ≥ 70, síla rozvahy ≥ 60, nízké riziko finančních potíží, bez kritického varování, kapitalizace od $2B; řazeno podle nízkého rizika, stability a rozvahy."
  },
  "lowRisk": {
   "name": "Nejnižší riziko",
   "desc": "Riziko nejvýše 20 a bez kritického varování; od nejnižšího rizika."
  },
  "improvers": {
   "name": "Největší zlepšení za poslední rok",
   "desc": "TeraScore vyšší alespoň o 10 bodů proti předchozímu fiskálnímu roku, kapitalizace od $300M; od největšího růstu."
  },
  "growth": {
   "name": "Rychle rostoucí",
   "desc": "Růst v posledním fiskálním roce ≥ 75 a dlouhodobý růst ≥ 70, TeraScore alespoň 55, kapitalizace od $300M."
  },
  "value": {
   "name": "Podhodnocená kvalita",
   "desc": "Skóre ocenění ≥ 70 (levné vzhledem k zisku a peněžním tokům), TeraScore ≥ 65, ziskovost ≥ 60, bez kritického varování, kapitalizace od $300M."
  },
  "dividend": {
   "name": "Bezpečné dividendy",
   "desc": "Bezpečnost dividendy ≥ 75 a dividendový výnos alespoň 2,5 %, kapitalizace od $300M; od nejvyššího výnosu."
  },
  "largeQuality": {
   "name": "Velké kvalitní společnosti",
   "desc": "Kapitalizace alespoň $50B a TeraScore alespoň 70."
  },
  "highRisk": {
   "name": "Vysoké riziko",
   "desc": "Riziko alespoň 70, nebo vysoké riziko finančních potíží při riziku alespoň 55, kapitalizace od $300M; od nejrizikovějších. Spekulativní akcie: buďte opatrní."
  },
  "decliners": {
   "name": "Největší zhoršení za poslední rok",
   "desc": "TeraScore nižší alespoň o 10 bodů proti předchozímu fiskálnímu roku, kapitalizace od $300M; od největšího poklesu."
  },
  "dip": {
   "name": "Pod maximem, teď levnější",
   "desc": "Kvalitní společnosti (TeraScore ≥ 65, riziko ≤ 40, bez kritického varování, kapitalizace od $300M), jejichž cena akcie je 20–50 % pod 12měsíčním maximem (měsíční závěry); od nejlepšího TeraScore. Větší propady jsou vynechány: častěji signalizují problémy než slevu."
  },
  "lowPe": {
   "name": "Nízké P/E",
   "desc": "Ziskové společnosti s P/E 3–12, jejichž skóre ocenění je také alespoň 60 (EV/EBIT a výnos peněžních toků potvrzují, že jsou levné), TeraScore ≥ 60, stabilita ≥ 50, bez kritického varování, kapitalizace od $300M. P/E pod 3 obvykle vzniká z jednorázového zisku, proto je vynecháno."
  }
 },
 "install": {
  "benefit1": "Vlastní ikona na ploše vedle ostatních aplikací",
  "benefit2": "Otevírá se na celou obrazovku bez adresního řádku prohlížeče",
  "benefit3": "Spouští se rychleji a naposledy prohlížené společnosti se otevřou i offline",
  "benefit4": "Aktualizuje se sama: žádná reinstalace, žádný obchod s aplikacemi",
  "iphone1": "Otevřete tuto stránku v Safari.",
  "iphone2": "Klepněte na tlačítko Sdílet (čtverec se šipkou nahoru) – na iPhonu dole, na iPadu vpravo nahoře.",
  "iphone3": "Posuňte se dolů a klepněte na „Přidat na plochu“.",
  "iphone4": "Klepněte vpravo nahoře na „Přidat“. Ikona TeraStockX se objeví na ploše.",
  "android1": "Otevřete tuto stránku v Chrome.",
  "android2": "Klepněte výše na „Nainstalovat“, nebo otevřete nabídku (⋮) vpravo nahoře.",
  "android3": "Zvolte „Nainstalovat aplikaci“ (nebo „Přidat na plochu“).",
  "android4": "Potvrďte tlačítkem „Instalovat“. Aplikace se objeví mezi vašimi aplikacemi a na ploše.",
  "desktop1": "Otevřete tuto stránku v Chrome nebo Edge.",
  "desktop2": "Klikněte výše na „Nainstalovat“, nebo na ikonu instalace na pravém konci adresního řádku.",
  "desktop3": "Potvrďte tlačítkem „Instalovat“.",
  "desktop4": "TeraStockX se otevře ve vlastním okně a lze ji spouštět z nabídky Start, z Docku nebo z Launchpadu."
 },
 "dividend": {
  "safe": "Bezpečná",
  "moderate": "Střední",
  "risky": "Ohrožená",
  "unsafe": "Nejistá",
  "na": "Nehodnoceno",
  "safeText": "Dobře krytá ziskem a volnými peněžními toky, se solidní historií výplat.",
  "moderateText": "Krytá, ale s omezenou rezervou; zpomalení by na ni mohlo vyvinout tlak.",
  "riskyText": "Krytí je slabé nebo je rozvaha napjatá; snížení je reálná možnost.",
  "unsafeText": "Nekrytá ziskem ani peněžními toky, nebo nedávno snížená; další snížení je pravděpodobné.",
  "naText": "Nedostatek dat pro hodnocení.",
  "parts": {
   "priceStability": "Stabilita ceny akcie",
   "fcfPayout": "Krytí volnými peněžními toky",
   "earningsPayout": "Krytí ziskem",
   "leverage": "Zadlužení",
   "trackRecord": "Historie výplat",
   "stability": "Stabilita zisku"
  },
  "partsText": {
   "priceStability": "Skóre tržního rizika (volatilita a největší propad ceny akcie): prudký propad často předchází snížení dividendy.",
   "fcfPayout": "Vyplacené dividendy / volné peněžní toky: 100 bodů při 40 % nebo méně (REIT: 80 %), 0 bodů při 120 % nebo více (REIT: 130 %) nebo při záporných volných peněžních tocích.",
   "earningsPayout": "Vyplacené dividendy / čistý zisk: 100 bodů při 50 % nebo méně, 0 bodů při 150 % nebo více nebo při ztrátě. U REIT se nehodnotí.",
   "leverage": "Čistý dluh / EBITDA: 100 bodů při 1× nebo méně, 0 bodů při 5× nebo více. U bank, pojišťoven a REIT se nehodnotí.",
   "trackRecord": "Roky výplat bez přerušení (60 %) a zvýšení v řadě (40 %), až 10 let; minus 35 bodů za každé snížení o více než 10 % za posledních 10 let.",
   "stability": "Podíl ziskových let za posledních pět let."
  }
 },
 "pw": {
  "position": "{t} tvoří {w} portfolia (nad {l}).",
  "sector": "{s} tvoří {w} portfolia (nad {l}).",
  "few": "Jen pozic: {n}. Méně než {m} pozic vystavuje portfolio riziku jednotlivé společnosti.",
  "critical": "Kritické varování: {list}.",
  "distress": "Vysoké riziko finančních potíží: {list}.",
  "weak": "TeraScore pod {s}: {list}.",
  "unscored": "Nehodnoceno (nedostatek dat): {list}."
 },
 "ocr": {
  "button": "Ze snímku obrazovky",
  "loading": "Načítání rozpoznávání textu (jednorázově, asi 7 MB)…",
  "reading": "Čtení obrázku… {p} %",
  "privacy": "Obrázek neopouští vaše zařízení: čte se v prohlížeči.",
  "found": "Rozpoznané pozice: {n}",
  "check": "Zkontrolujte tickery a počty akcií, případně je opravte a pak je přidejte.",
  "inPortfolio": "Nyní v portfoliu: {n} akcií (budou nahrazeny)",
  "add": "Přidat do portfolia",
  "cancel": "Zrušit",
  "close": "Zavřít",
  "none": "Na obrázku nebyly nalezeny žádné akcie. Zkuste ostřejší a větší snímek, na kterém je jasně vidět ticker nebo název společnosti a počet akcií, nebo je přidejte ručně.",
  "failed": "Rozpoznání textu se nezdařilo: {e}",
  "needShares": "Zadejte počet akcií u každého označeného řádku.",
  "hint": "Tip: nejlépe fungují snímky seznamu pozic v aplikaci vašeho brokera; můžete jich vybrat několik najednou.",
  "readingN": "Čtení obrázku {i} z {n}… {p} %",
  "foundImages": "Rozpoznané pozice: {n} (z obrázků: {k})",
  "estimated": "≈ hodnota ÷ cena, zkontrolujte"
 },
 "dq": {
  "partial": "Částečná",
  "partialTitle": "Částečná analýza: {p} % TeraScore stojí na datech. Nehodnoceno kvůli chybějícím datům (počítá se nejvýše jako 50): {d}.",
  "partialTitleParts": "Částečná analýza: {p} % TeraScore stojí na datech; chybí několik ukazatelů.",
  "little": "Málo dat",
  "littleTitle": "Nedostatek dat pro TeraScore: alespoň 5 z 9 oblastí musí být možné ohodnotit.",
  "none": "Bez analýzy",
  "noneTitle": "Zatím není k dispozici výroční zpráva s finančními údaji.",
  "newListing": "Nově kótovaná",
  "newTitle": "Nedávno kótovaná: TeraScore získá po první výroční zprávě.",
  "newBadge": "NOVÉ",
  "legend": "„Částečná · 65 %“ = analýza je neúplná: jen tato část TeraScore stojí na datech. Označuje se pod 80 %. Oblast bez dat se počítá nejvýše jako neutrálních {s}, takže mezera nikdy nezvedne skóre, ale výsledek je méně jistý.",
  "noticePartialTitle": "Částečná analýza: {p} % TeraScore stojí na datech.",
  "noticePartial": "Tyto oblasti nebylo možné ohodnotit, protože v podáních společnosti chybějí data: {d}. Počítají se jako neutrálních {s}, nebo jako průměr ostatních oblastí společnosti, pokud je nižší, takže chybějící data nikdy nezvednou TeraScore; skóre je méně jisté než u plně analyzované společnosti.",
  "noticePartialParts": "V podáních společnosti chybějí některé ukazatele. V každé oblasti se vynechají a váhy ostatních ukazatelů úměrně vzrostou, takže TeraScore je méně jisté než u plně analyzované společnosti.",
  "noticeLittle": "TeraScore vyžaduje alespoň 5 hodnotitelných oblastí; tato společnost jich má {n}. Oblasti, které bylo možné ohodnotit, jsou uvedeny níže.",
  "estimated": "Odhadnuto z jiných vykázaných údajů: {list}.",
  "est": {
   "capex": "kapitálové výdaje ≈ obvyklý poměr kapitálových výdajů k tržbám společnosti, nebo odpisy (společnost je vykazuje jen ve vlastním prvku XBRL)",
   "operatingIncome": "provozní zisk ≈ zisk před zdaněním (nebo čistý zisk + daň z příjmů) + nákladové úroky (společnost nevykazuje řádek provozního zisku)",
   "totalDebt": "dluh = 0 (za poslední dva roky nevykázány žádné úvěry ani nákladové úroky)"
  },
  "partialShort": "Částečná · {p} %",
  "coverageBadge": "Analýza dokončena z {p} % (část dat chybí)",
  "partialMobile": "{p} % dat"
 },
 "dims": {
  "profitability": {
   "name": "Ziskovost",
   "q": "Jak efektivně společnost mění tržby a kapitál na zisk?",
   "summary": "Provozní marže {operatingMargin}, čistá marže {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Kvalita peněžních toků",
   "q": "Je vykázaný zisk krytý hotovostí?",
   "summary": "Marže FCF {fcfMargin}; konverze čistého zisku na FCF {fcfConversion}; ukazatel časového rozlišení {accrualRatio}; odměny v akciích {sbcToRevenue} tržeb."
  },
  "balanceSheet": {
   "name": "Síla rozvahy",
   "q": "Jaké zadlužení nese společnost vzhledem k zisku a vlastnímu kapitálu?",
   "summary": "Čistý dluh/EBITDA {netDebtToEbitda}, dluh/vlastní kapitál {debtToEquity}, úrokové krytí {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Likvidita",
   "q": "Lze krátkodobé závazky pokrýt krátkodobými aktivy?",
   "summary": "Běžná likvidita {currentRatio}, pohotová likvidita {quickRatio}, okamžitá likvidita {cashRatio}."
  },
  "growth1y": {
   "name": "Růst (poslední fiskální rok)",
   "q": "Meziroční dynamika tržeb, zisku a peněžních toků.",
   "summary": "Meziročně tržby {revenueYoY}, provozní zisk {operatingIncomeYoY}, EPS {epsYoY}, volné peněžní toky {fcfYoY}."
  },
  "growthLong": {
   "name": "Dlouhodobý růst",
   "q": "Průměrný roční růst za období až pěti let.",
   "summary": "{windowYears}letý CAGR: tržby {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, účetní hodnota na akcii {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilita",
   "q": "Jak předvídatelné a odolné jsou výsledky?",
   "summary": "Zisk v {profitableYearsRatio} let, kladný FCF v {fcfPositiveRatio}; volatilita růstu tržeb {revenueVolatility}; Piotroskiho F-skóre {piotroski}."
  },
  "capitalAllocation": {
   "name": "Alokace kapitálu",
   "q": "Jak dobře se kapitál vrací akcionářům a znovu investuje?",
   "summary": "Počet akcií {shareChangeYearly} ročně; výnos pro akcionáře {shareholderYield}; výplata dividend {payoutRatio} FCF; změna ROIC {roicChange}."
  },
  "valuation": {
   "name": "Ocenění",
   "q": "Jak drahá je akcie vzhledem k fundamentům?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, výnos FCF {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Riziko",
   "q": "Celkové investiční riziko (čím nižší, tím lepší).",
   "summary": "Riziko finančních potíží: {distress}. Roční volatilita {volatility}; maximální propad (5 let) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Tržní riziko",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Výborné",
  "strong": "Silné",
  "moderate": "Střední",
  "weak": "Slabé",
  "poor": "Špatné",
  "na": "Žádná data"
 },
 "riskGrades": {
  "excellent": "Velmi nízké",
  "strong": "Nízké",
  "moderate": "Střední",
  "weak": "Vysoké",
  "poor": "Velmi vysoké",
  "na": "Žádná data"
 },
 "distress": {
  "low": "Nízké",
  "medium": "Zvýšené",
  "high": "Vysoké",
  "lowText": "Aktuální data neukazují na finanční potíže.",
  "mediumText": "Některé varovné signály; situaci je dobré sledovat.",
  "highText": "Několik ukazatelů poukazuje na vážné finanční potíže."
 },
 "outlook": {
  "up": "Zlepšuje se",
  "flat": "Stabilní",
  "down": "Zhoršuje se",
  "unknown": "Nedostatečná historie",
  "upText": "Fundamenty se v posledních letech soustavně zlepšovaly.",
  "flatText": "Fundamenty zůstaly zhruba beze změny.",
  "downText": "Fundamenty se v posledních letech zhoršily.",
  "unknownText": "Jsou potřeba alespoň tři fiskální roky."
 },
 "verdict": {
  "excellent": "Mimořádně silné fundamenty ve většině dimenzí.",
  "strong": "Finančně zdravá společnost se solidními fundamenty.",
  "moderate": "Smíšený fundamentální profil se zřetelnými silnými i slabými stránkami.",
  "weak": "Slabé fundamenty; na místě je zvýšená opatrnost.",
  "poor": "Vážné fundamentální slabiny.",
  "na": "Nedostatek dat pro celkové hodnocení."
 },
 "styles": {
  "quality": "Kvalita",
  "growth": "Růst",
  "value": "Hodnota",
  "income": "Příjem",
  "speculative": "Spekulativní"
 },
 "sectors": {
  "technology": "Technologie",
  "healthcare": "Zdravotnictví",
  "financials": "Finance",
  "realEstate": "Nemovitosti",
  "consumerDiscretionary": "Cyklická spotřeba",
  "consumerStaples": "Základní spotřeba",
  "industrials": "Průmysl",
  "energy": "Energetika",
  "utilities": "Veřejné služby",
  "communication": "Komunikační služby",
  "materials": "Suroviny",
  "shell": "Prázdné společnosti / SPAC",
  "other": "Ostatní"
 },
 "metrics": {
  "cashRunway": [
   "Výdrž hotovosti",
   "Kolik let by likvidní aktiva (hotovost, nebo oběžná aktiva bez zásob a pohledávek) financovala současné záporné volné peněžní toky. Omezuje skóre likvidity: 0,75 roku nebo méně = 0 bodů, 3 roky nebo více = 100."
  ],
  "grossMargin": [
   "Hrubá marže",
   "Hrubý zisk / tržby."
  ],
  "operatingMargin": [
   "Provozní marže",
   "Provozní zisk (EBIT) / tržby."
  ],
  "netMargin": [
   "Čistá marže",
   "Čistý zisk / tržby."
  ],
  "fcfMargin": [
   "Marže FCF",
   "Volné peněžní toky (provozní peněžní toky − kapitálové výdaje) / tržby."
  ],
  "roe": [
   "Rentabilita vlastního kapitálu (ROE)",
   "Čistý zisk / průměrný vlastní kapitál. Nehodnotí se při záporném vlastním kapitálu."
  ],
  "roa": [
   "Rentabilita aktiv (ROA)",
   "Čistý zisk / průměrná aktiva celkem."
  ],
  "roic": [
   "Rentabilita investovaného kapitálu (ROIC)",
   "NOPAT (EBIT × (1 − efektivní daňová sazba)) / průměrný investovaný kapitál (vlastní kapitál + dluh − hotovost)."
  ],
  "fcfConversion": [
   "Konverze na FCF",
   "Volné peněžní toky / čistý zisk. Při čisté ztrátě dostává kladný FCF 60 bodů."
  ],
  "accrualRatio": [
   "Ukazatel časového rozlišení",
   "(Čistý zisk − provozní peněžní toky) / průměrná aktiva celkem. Vysoké hodnoty ukazují na zisk nekrytý hotovostí."
  ],
  "sbcToRevenue": [
   "Odměny v akciích / tržby",
   "Nepeněžní odměny, které ředí akcionáře."
  ],
  "capexToRevenue": [
   "Náročnost kapitálových výdajů",
   "Kapitálové výdaje / tržby."
  ],
  "currentRatio": [
   "Běžná likvidita",
   "Oběžná aktiva / krátkodobé závazky."
  ],
  "quickRatio": [
   "Pohotová likvidita",
   "(Oběžná aktiva − zásoby) / krátkodobé závazky."
  ],
  "cashRatio": [
   "Okamžitá likvidita",
   "Peníze a peněžní ekvivalenty / krátkodobé závazky."
  ],
  "debtToEquity": [
   "Dluh / vlastní kapitál",
   "Finanční dluh / vlastní kapitál. Záporný vlastní kapitál dostává 0."
  ],
  "equityRatio": [
   "Podíl vlastního kapitálu",
   "Vlastní kapitál / aktiva celkem."
  ],
  "liabilitiesToAssets": [
   "Závazky / aktiva",
   "Závazky celkem / aktiva celkem."
  ],
  "netDebt": [
   "Čistý dluh",
   "Finanční dluh − hotovost. Záporný = čistá hotovost."
  ],
  "netDebtToEbitda": [
   "Čistý dluh / EBITDA",
   "Kolik let EBITDA je potřeba na splacení čistého dluhu. Čistá hotovost dostává 100, když je EBITDA kladná, a 50, když není (hotovost se spotřebovává); čistý dluh se zápornou EBITDA dostává 0."
  ],
  "interestCoverage": [
   "Úrokové krytí",
   "EBIT / nákladové úroky. Bez nákladových úroků 100."
  ],
  "goodwillToAssets": [
   "Goodwill a nehmotná aktiva / aktiva",
   "Podíl aktiv z akvizic; ohrožený snížením hodnoty."
  ],
  "payoutRatio": [
   "Výplata dividend (z FCF)",
   "Vyplacené dividendy / volné peněžní toky. Nehodnotí se, pokud se dividenda nevyplácí."
  ],
  "bookValuePerShare": [
   "Účetní hodnota na akcii",
   "Vlastní kapitál / akcie v oběhu."
  ],
  "altmanZ": [
   "Altman Z''-skóre",
   "6,56·(pracovní kapitál/aktiva) + 3,26·(nerozdělený zisk/aktiva) + 6,72·(EBIT/aktiva) + 1,05·(vlastní kapitál/závazky). < 1,1 potíže, > 2,6 bezpečné."
  ],
  "piotroski": [
   "Piotroskiho F-skóre",
   "Devět testů ano/ne týkajících se ziskovosti, zadlužení, likvidity a provozní efektivity (0–9)."
  ],
  "revenueYoY": [
   "Růst tržeb (meziročně)",
   "Změna proti předchozímu fiskálnímu roku."
  ],
  "operatingIncomeYoY": [
   "Růst provozního zisku (meziročně)",
   "Změna proti předchozímu fiskálnímu roku; ze záporného základu není definována."
  ],
  "netIncomeYoY": [
   "Růst čistého zisku (meziročně)",
   "Změna proti předchozímu fiskálnímu roku; ze záporného základu není definována."
  ],
  "epsYoY": [
   "Růst EPS (meziročně)",
   "Zředěný zisk na akcii proti předchozímu roku. 0 bodů, pokud byl poslední rok ztrátový."
  ],
  "fcfYoY": [
   "Růst FCF (meziročně)",
   "Volné peněžní toky proti předchozímu roku."
  ],
  "revenueCagr": [
   "CAGR tržeb",
   "Průměrné roční tempo růstu za období až pěti let."
  ],
  "epsCagr": [
   "CAGR EPS",
   "Průměrný roční růst zředěného EPS za období až pěti let."
  ],
  "fcfCagr": [
   "CAGR FCF",
   "Průměrný roční růst volných peněžních toků za období až pěti let."
  ],
  "bookValuePerShareCagr": [
   "CAGR účetní hodnoty na akcii",
   "Průměrný roční růst vlastního kapitálu na akcii."
  ],
  "revenueGrowthYearsRatio": [
   "Roky s růstem tržeb",
   "Podíl let v období s vyššími tržbami než v předchozím roce."
  ],
  "marginTrend": [
   "Změna provozní marže",
   "Změna provozní marže od prvního do posledního roku období (procentní body)."
  ],
  "roicChange": [
   "Změna ROIC",
   "Změna ROIC od prvního do posledního roku období (procentní body)."
  ],
  "profitableYearsRatio": [
   "Ziskové roky",
   "Podíl let v období s kladným čistým ziskem."
  ],
  "fcfPositiveRatio": [
   "Roky s kladným FCF",
   "Podíl let v období s kladnými volnými peněžními toky."
  ],
  "revenueVolatility": [
   "Volatilita růstu tržeb",
   "Směrodatná odchylka ročního růstu tržeb."
  ],
  "marginVolatility": [
   "Volatilita marže",
   "Směrodatná odchylka provozní marže (u finančních institucí čisté marže)."
  ],
  "shareChangeYearly": [
   "Změna počtu akcií (ročně)",
   "Kladná = ředění, záporná = zpětné odkupy."
  ],
  "marketCap": [
   "Tržní kapitalizace",
   "Cena akcie × akcie v oběhu."
  ],
  "enterpriseValue": [
   "Hodnota podniku (EV)",
   "Tržní kapitalizace + finanční dluh − hotovost."
  ],
  "peRatio": [
   "Cena / zisk (P/E)",
   "Tržní kapitalizace / čistý zisk (TTM). Ztráta dostává 0."
  ],
  "psRatio": [
   "Cena / tržby (P/S)",
   "Tržní kapitalizace / tržby (TTM)."
  ],
  "pbRatio": [
   "Cena / účetní hodnota (P/B)",
   "Tržní kapitalizace / vlastní kapitál."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Hodnota podniku / provozní zisk (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Hodnota podniku / EBITDA (TTM)."
  ],
  "fcfYield": [
   "Výnos FCF",
   "Volné peněžní toky (TTM) / tržní kapitalizace."
  ],
  "pfcfRatio": [
   "Cena / FCF",
   "Tržní kapitalizace / volné peněžní toky (TTM)."
  ],
  "pegRatio": [
   "Ukazatel PEG",
   "P/E dělené CAGR EPS (v %). Záporný růst nebo ztráta dostávají 0."
  ],
  "dividendYield": [
   "Dividendový výnos",
   "Vyplacené dividendy (TTM) / tržní kapitalizace."
  ],
  "shareholderYield": [
   "Výnos pro akcionáře",
   "(Dividendy + zpětné odkupy akcií, TTM) / tržní kapitalizace."
  ],
  "priceReturn1y": [
   "Cena akcie, 1 rok",
   "Celkový výnos upravené ceny akcie za 12 měsíců."
  ],
  "priceCagr5y": [
   "CAGR ceny akcie, 5 let",
   "Anualizovaný výnos upravené ceny akcie."
  ],
  "volatility": [
   "Volatilita (roční)",
   "Směrodatná odchylka měsíčních logaritmických výnosů za 36 měsíců × √12."
  ],
  "maxDrawdown": [
   "Maximální propad (5 let)",
   "Největší pokles ceny akcie od vrcholu ke dnu."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Záporný vlastní kapitál",
   "Závazky převyšují aktiva. Může jít o důsledek agresivních zpětných odkupů, často ale ukazuje na finanční napětí."
  ],
  "persistentLosses": [
   "Trvalé ztráty",
   "Čistá ztráta alespoň ve dvou po sobě jdoucích fiskálních letech."
  ],
  "lossLastYear": [
   "Čistá ztráta v posledním roce",
   "Poslední fiskální rok skončil čistou ztrátou."
  ],
  "negativeFcf": [
   "Záporné volné peněžní toky",
   "Provoz a investice spotřebují víc hotovosti, než vytvoří; je potřeba externí financování."
  ],
  "lowCurrentRatio": [
   "Běžná likvidita pod 1,0",
   "Krátkodobé závazky převyšují oběžná aktiva (běžná likvidita {value}). Zvládnutelné při silných provozních peněžních tocích."
  ],
  "interestCoverageCritical": [
   "Nedostatečné úrokové krytí",
   "EBIT pokrývá nákladové úroky jen {value} — obsluha dluhu je ohrožena."
  ],
  "interestCoverageWeak": [
   "Slabé úrokové krytí",
   "EBIT pokrývá nákladové úroky jen {value}."
  ],
  "altmanDistress": [
   "Altman Z'' v zóně potíží",
   "Z''-skóre {value} je pod hranicí potíží 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' v šedé zóně",
   "Z''-skóre {value}: ani potíže, ani bezpečná zóna (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Čistý dluh bez kladné EBITDA",
   "Společnost má čistý dluh, ale nevytváří kladnou EBITDA na jeho obsluhu."
  ],
  "highLeverage": [
   "Vysoké zadlužení",
   "Čistý dluh odpovídá {value} EBITDA."
  ],
  "revenueDecline": [
   "Výrazný pokles tržeb",
   "Tržby se meziročně změnily o {value}."
  ],
  "heavyDilution": [
   "Silné ředění akcionářů",
   "Počet akcií roste v průměru o {value} ročně."
  ],
  "highSbc": [
   "Vysoké odměny v akciích",
   "Odměny v akciích odpovídají {value} tržeb."
  ],
  "lowEarningsQuality": [
   "Nízká kvalita zisku",
   "Ukazatel časového rozlišení {value}: zisk výrazně převyšuje provozní peněžní toky."
  ],
  "dividendUncovered": [
   "Dividenda nekrytá FCF",
   "Dividendy převyšují volné peněžní toky (výplatní poměr {value})."
  ],
  "goodwillHeavy": [
   "Vysoký goodwill a nehmotná aktiva",
   "{value} aktiv celkem tvoří goodwill a nehmotná aktiva ohrožená snížením hodnoty."
  ],
  "staleData": [
   "Zastaralá finanční data",
   "Poslední výroční zpráva pokrývá období končící {value}."
  ],
  "deepDrawdown": [
   "Hluboký propad ceny akcie",
   "Cena akcie klesla o {value} od 5letého vrcholu."
  ],
  "netCash": [
   "Čistá hotovostní pozice",
   "Hotovost převyšuje finanční dluh o {value}."
  ],
  "highMargin": [
   "Vysoká provozní marže",
   "Provozní marže {value}."
  ],
  "highRoic": [
   "Vysoká rentabilita investovaného kapitálu",
   "ROIC {value}, výrazně nad obvyklými náklady kapitálu."
  ],
  "alwaysProfitable": [
   "Zisková v každém analyzovaném roce",
   "Kladný čistý zisk ve všech fiskálních letech ({years})."
  ],
  "strongGrowth": [
   "Silný dlouhodobý růst",
   "CAGR tržeb {value}."
  ],
  "buybacks": [
   "Čisté zpětné odkupy akcií",
   "Počet akcií klesá v průměru o {value} ročně."
  ],
  "altmanSafe": [
   "Altman Z'' v bezpečné zóně",
   "Z''-skóre {value}."
  ],
  "strongCashConversion": [
   "Silná konverze na hotovost",
   "Volné peněžní toky odpovídají {value} čistého zisku."
  ],
  "bankruptcyFiling": [
   "Návrh na insolvenci nebo nucenou správu",
   "Formulář 8-K, bod 1.03, podán {value}."
  ],
  "restatement": [
   "Přepracované účetní výkazy",
   "Formulář 8-K, bod 4.02 (na dříve zveřejněné účetní výkazy již nelze spoléhat), podán {value}."
  ],
  "debtAcceleration": [
   "Zesplatnění dluhu",
   "Formulář 8-K, bod 2.04 (událost urychlující finanční závazek), podán {value}."
  ],
  "delistingNotice": [
   "Upozornění na vyřazení z obchodování",
   "Formulář 8-K, bod 3.01 (nesplnění pravidla kotace), podán {value}."
  ],
  "auditorChange": [
   "Změna auditora",
   "Formulář 8-K, bod 4.01 (změna auditora), podán {value}."
  ],
  "insiderBuying": [
   "Nákupy insiderů",
   "Insideři ({count}) za posledních 12 měsíců koupili akcie na otevřeném trhu celkem za {value}."
  ],
  "insiderSelling": [
   "Rozsáhlé prodeje insiderů",
   "Insideři za posledních 12 měsíců prodali akcie za {value} mimo předem stanovené obchodní plány ({share} tržní kapitalizace)."
  ]
 },
 "events": {
  "1.03": "Insolvence nebo nucená správa",
  "4.02": "Přepracování účetních výkazů",
  "2.04": "Zesplatnění finančního závazku",
  "3.01": "Upozornění na vyřazení z obchodování / porušení pravidel kotace",
  "5.01": "Změna kontroly",
  "2.01": "Dokončená akvizice nebo prodej",
  "2.05": "Restrukturalizace / ukončení činností",
  "2.06": "Významné snížení hodnoty",
  "4.01": "Změna auditora",
  "1.01": "Významná smlouva",
  "1.02": "Ukončení významné smlouvy",
  "1.05": "Významný kybernetický incident",
  "5.02": "Změna ve vedení (generální ředitel, finanční ředitel nebo předseda)"
 },
 "raw": {
  "income": "Výkaz zisku a ztráty",
  "cashflow": "Přehled peněžních toků",
  "balance": "Rozvaha",
  "revenue": "Tržby",
  "costOfRevenue": "Náklady na prodej",
  "grossProfit": "Hrubý zisk",
  "researchAndDevelopment": "Výzkum a vývoj",
  "operatingIncome": "Provozní zisk (EBIT)",
  "depreciationAndAmortization": "Odpisy",
  "interestExpense": "Nákladové úroky",
  "pretaxIncome": "Zisk před zdaněním",
  "incomeTaxExpense": "Daň z příjmů",
  "netIncome": "Čistý zisk",
  "epsDiluted": "EPS, zředěný ($)",
  "sharesDiluted": "Zředěné akcie (vážený průměr)",
  "operatingCashFlow": "Provozní peněžní toky",
  "capex": "Kapitálové výdaje",
  "freeCashFlow": "Volné peněžní toky",
  "shareBasedCompensation": "Odměny v akciích",
  "dividendsPaid": "Vyplacené dividendy",
  "buybacks": "Zpětné odkupy akcií",
  "totalAssets": "Aktiva celkem",
  "currentAssets": "Oběžná aktiva",
  "cash": "Peníze a peněžní ekvivalenty",
  "inventory": "Zásoby",
  "accountsReceivable": "Pohledávky z obchodního styku",
  "goodwill": "Goodwill",
  "intangibleAssets": "Nehmotná aktiva",
  "totalLiabilities": "Závazky celkem",
  "currentLiabilities": "Krátkodobé závazky",
  "totalDebt": "Finanční dluh",
  "equity": "Vlastní kapitál",
  "retainedEarnings": "Nerozdělený zisk",
  "sharesOutstanding": "Akcie v oběhu"
 },
 "method": {
  "btPending": "Výsledky zpětného testu se zobrazí po další aktualizaci dat.",
  "btCaveats": "Upozornění: zahrnuty jsou jen dnes kótované společnosti (zkrachovalé a vyřazené chybějí, takže nejslabší skóre si ve skutečnosti vedla ještě hůř); ceny nezahrnují dividendy; pro každý rok se používají dnešní sektorová měřítka; váhy byly vyladěny na stejném období, takže skutečná předpovědní síla může být o něco nižší. Minulé výsledky nejsou zárukou budoucích a nejde o investiční doporučení.",
  "btDividend": "Bezpečnost dividendy: v dalším roce snížilo dividendu {safe} „bezpečných“, {moderate} „středních“, {risky} „ohrožených“ a {unsafe} „nejistých“ plátců.",
  "btRisk": "Riziko: v pětině s nejnižším rizikem byl největší propad během 12 měsíců v průměru {lo} a {blo} akcií ztratilo více než polovinu; v nejrizikovější pětině {hi} a {bhi}.",
  "btLoss": "Ztráta v dalším roce: ze dvou společností, z nichž jedna měla v dalším roce ztrátu a druhá ne, měla ztrátová nižší TeraScore s pravděpodobností {p} (firemních let: {y}; 50 % = náhoda, 100 % = dokonalé).",
  "btIc": "U {share} z {k} testovaných dat šlo vyšší TeraScore v průměru ruku v ruce s lepšími následujícími 12 měsíci (průměrná pořadová korelace {ic}; 0 = žádná souvislost, 1 = dokonalá).",
  "btWorst": "nejslabších 20 %",
  "btBest": "nejlepších 20 %",
  "btDrawdown": "Prům. max. propad",
  "btBigLoss": "Propad >50 %",
  "btExcess": "Nadvýnos (12 měs.)",
  "btAvg": "prům. skóre",
  "btQuintile": "Pětina",
  "btIntro": "Metoda byla změřena i na historických datech. Každé čtvrtletí od {from} do {to} byla každá společnost ohodnocena tak, jak by to šlo tehdy – jen s již zveřejněnými výročními zprávami a za tehdejší cenu akcie – a porovnána s tím, co se stalo v následujících 12 měsících. Pozorování: {n}, společnosti: {c}, tržní hodnota alespoň {mc}. Nadvýnos: 12měsíční změna ceny společnosti minus změna mediánové společnosti ke stejnému datu.",
  "btTitle": "Jak spolehlivé to je? Zpětný test",
  "runwayText": "Jsou-li volné peněžní toky záporné (společnost spaluje hotovost), může likvidita dostat nejvýše tolik, kolik ospravedlňuje výdrž hotovosti: na kolik let likvidní aktiva pokryjí současnou spotřebu ({bad} r. nebo méně = 0 bodů, {good} r. nebo více = 100).",
  "smoothText": "Marže a výnosy z kapitálu (ROIC, ROE, ROA) se hodnotí z {a} % podle posledního roku a z {b} % podle průměru dvou předchozích let, aby jeden výjimečný rok skóre nerozhoupal. Stránka společnosti ukazuje tento 3letý základ pod poslední hodnotou.",
  "title": "Metodika",
  "intro": "Každá společnost se převede do stejné datové šablony z auditovaných výročních zpráv (10-K / 20-F) a posledních čtvrtletních zpráv (10-Q). Každý ukazatel se převede na skóre 0–100; každá dimenze je váženým průměrem svých ukazatelů. 100 je nejlepší — kromě rizika, kde čím nižší, tím lepší.",
  "scaling": "Škála je lineární mezi hodnotou, která dává 0 bodů, a hodnotou, která dává 100 bodů, a mimo tento rozsah je omezena. V rámci oblasti se chybějící ukazatele vynechají a zbylé váhy se znovu normalizují; oblast se hodnotí jen tehdy, když jsou k dispozici ukazatele s alespoň polovinou její váhy. Úplnost dat je podíl TeraScore (podle váhy), který stojí na datech.",
  "partial": "Částečná analýza. Pokud v podáních společnosti chybějí data pro některou oblast, počítá se tato oblast v TeraScore jako neutrálních {s}, nebo jako průměr ostatních oblastí společnosti, pokud je nižší – takže chybějící data nikdy nezvednou skóre (ve zpětném testu dopadly společnosti s mezerami hůř než úplné společnosti se stejným skóre). Hodnoty, které nechybějí, ale nejsou definovány – růst z nulového nebo záporného základu, ROIC při záporném investovaném kapitálu, výplatní poměr společnosti bez dividendy – se místo toho z oblasti vynechají. Úplnost dat je podíl TeraScore (podle váhy), který stojí na datech. Pod 80 % seznamy ukazují „◐ Částečná · 65 %“ mezi názvem společnosti a jejím TeraScore; stránka společnosti ukazuje procento vždy, když je pod 100 %, a jmenuje chybějící oblasti. S méně než 5 hodnotitelnými oblastmi TeraScore není („Málo dat“); společnosti zatím bez výroční zprávy se zobrazují jako „Bez analýzy“ nebo „Nově kótovaná“.",
  "estimates": "Odhadované údaje. Když společnost nevykazuje řádek provozního zisku, provozní zisk (EBIT) se aproximuje jako zisk před zdaněním plus nákladové úroky (ne u bank a pojišťoven). Společnost, která v posledních dvou fiskálních letech nevykázala žádné úvěry ani nákladové úroky a jejíž dlouhodobé závazky jsou pod 15 % aktiv, se považuje za nezadluženou. Stránka společnosti tyto odhady uvádí; surová data ukazují čísla tak, jak byla vykázána. Některé společnosti vykazují kapitálové výdaje jen ve vlastním prvku XBRL, který standardní data SEC neobsahují; pak se odhadnou z vlastního poměru kapitálových výdajů k tržbám v nejbližších letech, kdy byly vykázány oba údaje, jinak z odpisů.",
  "bands": "Pásma hodnocení:",
  "profiles": "Banky, pojišťovny a brokeři (finanční profil) a REIT (realitní profil) se hodnotí upravenými ukazateli a hranicemi, které jsou níže uvedeny tam, kde se liší.",
  "overall": "TeraScore (celkové)",
  "overallText": "Vážený průměr devíti fundamentálních oblastí (engine 2.1). Váhy byly vyladěny podle níže uvedeného zpětného testu: oblasti, které lépe odlišily pozdější vítěze a poražené i pozdější ztráty, váží víc (stabilita, ocenění, peněžní toky); ty, které to zvládaly hůř, váží méně (likvidita, rozvaha – která si ve skóre rizika ponechává 30% podíl). Na stránce každé společnosti ukazuje „Co zvyšuje a co snižuje TeraScore?“ příspěvek každé oblasti: 50 + Σ váha × (skóre − 50).",
  "riskTitle": "Riziko",
  "distressTitle": "Riziko finančních potíží",
  "distressText": "Body: Altman Z'' v zóně potíží +3 / v šedé zóně +1; záporný vlastní kapitál bez kladného FCF +2; záporný FCF +1; čistá ztráta +1; úrokové krytí < 1,5× +2; čistý dluh bez kladné EBITDA +1; podíl vlastního kapitálu < 5 % (finanční instituce) +2. 2–3 body = zvýšené, 4+ = vysoké.",
  "trendTitle": "Dlouhodobý trend",
  "trendText": "70 % dlouhodobého růstu + 30 % růstu za poslední rok, upraveno až o ±5 bodů podle trendu provozní marže. ≥ 65 zlepšuje se, 40–64 stabilní, < 40 zhoršuje se. Popisuje minulost; není to předpověď.",
  "stylesTitle": "Investiční profil",
  "stylesText": "Kvalita: ziskovost ≥ 70, stabilita ≥ 70, rozvaha ≥ 60, bez kritického signálu. Růst: dlouhodobý růst ≥ 70. Hodnota: ocenění ≥ 65. Příjem: dividendový výnos ≥ 2 % krytý FCF. Spekulativní: kritický signál nebo ztráty ve většině let.",
  "sectorTitle": "Srovnání v sektoru",
  "sectorText": "Každé skóre se také řadí vůči všem analyzovaným společnostem ze stejného sektoru (percentil).",
  "limitsTitle": "Omezení",
  "limitsText": "Skóre vycházejí jen z vykázaných finančních údajů a tržních cen. Nezachycují kvalitu vedení, konkurenční postavení, zprávy ani výhled společnosti. Nejde o investiční doporučení.",
  "logosText": "Loga společností pocházejí z veřejných obrázků log Financial Modeling Prep. Jsou ochrannými známkami příslušných společností a zobrazují se jen k jejich identifikaci; společnost bez loga je zobrazena počátečním písmenem.",
  "profileGeneral": "Obecný",
  "profileFinancial": "Finanční",
  "profileRealEstate": "Nemovitosti",
  "eventsTitle": "Velké firemní události (8-K)",
  "eventsText": "Významné události se berou z formulářů 8-K podaných u SEC za posledních 12 měsíců, přičemž se ponechávají jen body s velkým dopadem. Bankrot (1.03) a přepracování výkazů (4.02) jsou kritické signály; zesplatnění dluhu (2.04), upozornění na vyřazení z obchodování (3.01) a změna auditora (4.01) jsou varování a všechny zvyšují skóre rizika a finančních potíží.",
  "relativeTitle": "Hodnocení vůči sektoru",
  "relativeText": "Marže, výnosy, kapitálová struktura, likvidita a násobky ocenění silně závisejí na odvětví. U těchto ukazatelů je skóre z 50 % absolutní (hranice výše) a z 50 % relativní: pozice společnosti mezi 10. a 90. percentilem zavedených konkurentů v sektoru (kapitalizace ≥ $300M, tržby ≥ $50M, alespoň 20 konkurentů). Medián sektoru se zobrazuje u každého ukazatele. Ukazatele růstu, stability a rizika používají jen absolutní hranice.",
  "insiderText": "Z čtvrtletních datových sad formulářů 4 u SEC za posledních 12 měsíců. Počítají se jen nákupy a prodeje na otevřeném trhu. Nákupy alespoň dvou insiderů v celkové výši $100 000 nebo více jsou silnou stránkou; prodeje mimo plány 10b5-1 nad 1 % tržní kapitalizace jsou varováním.",
  "currencyTitle": "Zahraniční společnosti a měny",
  "currencyText": "Zahraniční společnosti kótované v USA (formuláře 20-F / 40-F, IFRS) se analyzují ve své vykazovací měně; ukazatele jsou na měně nezávislé. Pro ocenění se kapitalizace v dolarech převádí referenčním kurzem ECB (pro měny, které ECB nezveřejňuje, z jiných zdrojů). Zahraniční soukromí emitenti nepodávají čtvrtletní zprávy v XBRL, proto jejich ocenění vychází z posledního fiskálního roku.",
  "historyText": "Změny TeraScore hodnotí každou společnost ke konci každého fiskálního roku jen s informacemi, které byly tehdy k dispozici: výroční zprávy do daného roku, události 8-K za předchozích 12 měsíců a cena akcie k tomu dni (kapitalizace se odhaduje z dnešní kapitalizace, změny ceny a změny počtu akcií). Pro minulé roky se nepoužívají údaje TTM, data o insiderech ani aktuální tržní data a na všechny roky se uplatňují dnešní sektorová měřítka. Navíc každá pondělní aktualizace uloží snímek aktuálního TeraScore; změny za 4 a 13 týdnů se porovnávají s nejnovějším snímkem, který je alespoň tak starý.",
  "peersText": "Podobné společnosti se vybírají ze stejného sektoru. Vzdálenost každého kandidáta je rozdíl logaritmů tržní kapitalizace plus penalizace odpovídající 4,5násobnému rozdílu velikosti, pokud patří do jiného odvětví; proto jsou první společnosti ze stejného odvětví a podobné velikosti, zatímco největší společnosti se porovnávají s největšími ve svém sektoru. Zahrnuty jsou jen hodnocené společnosti a jedna třída akcií na společnost.",
  "dividendText": "Bezpečnost dividendy hodnotí na stupnici 0 až 100, jak pravděpodobné je udržení současné dividendy: 75 a více bezpečná, 55–74 střední, 35–54 ohrožená, pod 35 nejistá. Složky bez dat se vynechají a zbylé váhy se přepočítají.",
  "portfolioText": "TeraScore, riziko a dividendový výnos portfolia jsou průměry vážené hodnotou pozic; P/E je celková hodnota dělená ziskem připadajícím na pozice (bez ztrátových společností). Upozornění: jedna pozice nad {p}, jeden sektor nad {s}, méně než {n} pozic, kritická varování, vysoké riziko finančních potíží a slabá TeraScore.",
  "quarterlyText": "Čtvrtletní údaje pokrývají posledních 12 čtvrtletí z podání 10-Q a 10-K. Toky jsou tříměsíční částky: vykázané přímo nebo odvozené z kumulativních údajů od začátku roku; čtvrté čtvrtletí je roční částka minus prvních devět měsíců. Údaje na akcii a počty akcií se zobrazují jen tehdy, jsou-li vykázány za tři měsíce, upravené o pozdější štěpení akcií. Položky rozvahy jsou ke konci čtvrtletí.",
  "portfolioEtfText": "Přidat lze i ETF (burzovně obchodované fondy): oceňují se denní cenou, nemají TeraScore a nezahrnují se do kontrol pozic, sektorů a počtu pozic, protože fond je již diverzifikovaný. Jejich dividendový výnos pochází z Nasdaq, pokud je zveřejněn; jinak ho lze zadat ručně.",
  "zero": "0 b.",
  "hundred": "100 b."
 },
 "ai": {
  "button": "Zeptat se AI",
  "title": "AI asistent",
  "intro": "Zeptejte se na čísla na této stránce nebo na metodiku – vysvětlím je srozumitelně.",
  "placeholder": "Napište svou otázku…",
  "send": "Odeslat",
  "close": "Zavřít",
  "note": "Odpovědi píše AI a mohou obsahovat chyby. Nejde o investiční doporučení.",
  "error": "Asistent teď není k dispozici. Zkuste to prosím později.",
  "rate": "Z této adresy přišlo příliš mnoho otázek. Zkuste to znovu za hodinu.",
  "thinking": "Přemýšlím…",
  "qCompany1": "Co znamená likvidita?",
  "qCompany2": "Proč je rizikové skóre takové?",
  "qCompany3": "Co zvyšuje a co snižuje TeraScore?",
  "qMethod1": "Jak se počítá TeraScore?",
  "qMethod2": "Co znamená rizikové skóre?",
  "qMethod3": "Co je částečná analýza?"
 }
};
