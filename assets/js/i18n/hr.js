// Croatian.
export default {
 "meta": {
  "name": "Hrvatski",
  "short": "HR",
  "locale": "hr-HR"
 },
 "ui": {
  "classTitle": "Tvrtka ima više klasa dionica uvrštenih na burzu; razlikuju se uglavnom po pravu glasa. Financijski podaci i TeraScore isti su za sve.",
  "classNonVoting": "Bez prava glasa",
  "classVoting": "S pravom glasa",
  "classLetter": "Klasa {c}",
  "slogan": "Pametan alat za ulagače.",
  "notApplicable": "nije primjenjivo",
  "bdMissing": "◐ = područje koje nije bilo moguće ocijeniti zbog nedostatka podataka: računa se kao neutralnih {s} ili kao prosjek ostalih područja tvrtke ako je on niži, pa podaci koji nedostaju nikada ne mogu podići ocjenu.",
  "bdNote": "Polazeći od 50, svako područje dodaje ili oduzima svoj ponder × (svoju ocjenu − 50); zbroj je TeraScore ({s}, zaokruženo).",
  "bdMissingShort": "nema podataka → {s}",
  "bdLowers": "Snižava",
  "bdLifts": "Podiže",
  "bdTitle": "Što podiže, a što snižava TeraScore?",
  "basis3y": "osnova od 3 god.",
  "netCashLoss": "neto novac, gubitak: {s} bod.",
  "runwayCap": "ograničava likvidnost dok tvrtka troši novac",
  "capLabel": "granica",
  "yearsUnit": "{n} god.",
  "pfCurrency": "Valuta",
  "pfAllocTitle": "Raspodjela",
  "pfByHolding": "Po pozicijama",
  "pfByCurrency": "Po valuti trgovanja",
  "pfHistTitle": "Kretanje portfelja",
  "pfHistLoading": "Učitavanje povijesti cijena…",
  "pfHistValue": "Vrijednost trenutačnih pozicija",
  "pfHistValueSub": "Mjesečno, posljednje dvije godine, u {c} (strane cijene po današnjem tečaju).",
  "pfHistMissing": "Bez povijesti cijena, nije uključeno: {list}.",
  "pfHistScoreWeekly": "TeraScore portfelja, tjedno",
  "pfHistScoreYearly": "TeraScore portfelja, po poslovnim godinama",
  "pfHistScoreSub": "Tvrtke ponderirane današnjom vrijednošću (ETF-ovi nemaju TeraScore).",
  "etfAcc": "akumulirajući",
  "etfDist": "distribucijski",
  "cmpPartialNote": "U izvještajima ovih tvrtki nedostaju podaci, pa je njihova analiza djelomična, a ocjene manje pouzdane: {list}. Područja označena s „nema podataka” računaju se najviše kao neutralnih 50, pa podaci koji nedostaju nikada ne podižu TeraScore.",
  "showMore": "Prikaži više",
  "tagline": "Fundamentalna analiza dionica, jasno.",
  "heroText": "Svaka tvrtka uvrštena na Nasdaq, NYSE, NYSE American i Cboe ocijenjena je kroz deset ulagačkih dimenzija — profitabilnost, kvalitetu novčanog toka, snagu bilance, rast, vrednovanje i rizik — na temelju revidiranih izvještaja podnesenih SEC-u i uspoređena sa sličnim tvrtkama iz sektora.",
  "navCompanies": "Tvrtke",
  "navCompare": "Usporedi",
  "navMethod": "Metodologija",
  "language": "Jezik",
  "searchPlaceholder": "Pretraži po oznaci ili nazivu tvrtke (npr. AAPL, Apple)",
  "allSectors": "Svi sektori",
  "onlyAnalyzed": "Analizirane tvrtke",
  "allCompanies": "Sve tvrtke",
  "watchlist": "Popis praćenja",
  "results": "Rezultata: {n}",
  "analyzedOf": "Analizirano: {a} / tvrtki: {n}",
  "updated": "Ažurirano {d}",
  "company": "Tvrtka",
  "noData": "nema podataka",
  "noResults": "Nijedna tvrtka ne odgovara pretraživanju.",
  "prev": "Prethodna",
  "next": "Sljedeća",
  "demoBadge": "DEMO",
  "demoNote": "Tvrtke označene s DEMO prikazuju približne ogledne brojke dok program za ažuriranje ne učita službene podatke SEC-a.",
  "back": "Natrag na popis",
  "tabAnalysis": "Analiza",
  "tabRaw": "Financijski izvještaji",
  "demoNotice": "Demo podaci: približne ogledne brojke. Program za ažuriranje zamjenjuje ih službenim izvještajima SEC-a.",
  "notFound": "Nije pronađena tvrtka s oznakom {t}.",
  "lastFy": "Posljednja poslovna godina: {y}",
  "ttmBasis": "Vrednovanje na temelju brojki za posljednjih dvanaest mjeseci (TTM) do {d}",
  "annualBasis": "Vrednovanje na temelju brojki posljednje poslovne godine",
  "overallScore": "TeraScore",
  "risk": "Rizik",
  "distress": "Rizik financijskih poteškoća",
  "trend": "Dugoročni trend",
  "coverage": "Potpunost podataka",
  "watchEmpty": "Vaš popis praćenja je prazan. Dodirnite zvjezdicu ☆ u retku bilo koje tvrtke da biste je dodali ovdje.",
  "now": "Sada",
  "today": "Danas",
  "yesterday": "Jučer",
  "updatedLabel": "Ažurirano",
  "searchFuzzy": "Nema točnog podudaranja za „{q}”. Slični nazivi:",
  "years": "{n} god.",
  "marketCap": "Tržišna kapitalizacija",
  "price": "Cijena",
  "sector": "Sektor",
  "industry": "Djelatnost",
  "sectionScores": "Kartica ocjena",
  "sectionFlags": "Upozorenja i prednosti",
  "sectionCharts": "Povijesni rezultati",
  "sectionKey": "Ključni pokazatelji",
  "howCalculated": "Pojedinosti izračuna",
  "weight": "ponder",
  "points": "bod.",
  "notScored": "n/p",
  "sectorRank": "Bolje od {p}% tvrtki u sektoru {s}",
  "sectorRankShort": "Među najboljih {p}% u sektoru",
  "riskExplain": "Rizik = 100 − ocjena sigurnosti. Sigurnost je {f}% fundamentalna (bilanca {bs}%, stabilnost {co}%, novčani tok {cf}%, profitabilnost {pr}%, likvidnost {li}%) i {m}% volatilnost cijene dionice i njezin najveći pad (kada postoji povijest cijena). Upozorenja povećavaju rizik ({c} bod. za svako kritično i {w} za svako drugo upozorenje) po krivulji zasićenja: svaki bod zatvara dio preostale razlike do 100, pa se i najrizičnije tvrtke i dalje međusobno razlikuju.",
  "noFlags": "Nema značajnih upozorenja.",
  "critical": "Kritično",
  "warningTag": "Upozorenje",
  "strength": "Prednost",
  "footer": "TeraStockX sve ocjene izvodi iz javnih financijskih izvještaja podnesenih SEC-u. Ocjene opisuju povijesne fundamentalne pokazatelje; nisu savjet za ulaganje i ne predviđaju cijene dionica.",
  "engine": "Motor v{v}. Ocjene su izračunate iz povijesnih, javno objavljenih podataka; nije savjet za ulaganje.",
  "currencyNote": "Iznosi u {cur}.",
  "source": "Izvor",
  "retrieved": "preuzeto {d}",
  "downloadCsv": "Preuzmi CSV",
  "downloadJson": "JSON (predložak)",
  "fiscalYear": "Poslovna godina",
  "ttm": "TTM",
  "computedRatios": "Izračunati pokazatelji",
  "addWatch": "Dodaj na popis praćenja",
  "removeWatch": "Ukloni s popisa praćenja",
  "compareWith": "Usporedi",
  "compareTitle": "Usporedba tvrtki",
  "compareHint": "Odaberite do šest tvrtki za usporedni prikaz.",
  "addCompany": "Dodaj tvrtku (naziv ili oznaka)…",
  "remove": "Ukloni",
  "dimension": "Dimenzija",
  "metric": "Pokazatelj",
  "chartRevenue": "Prihodi",
  "chartNetIncome": "Neto dobit",
  "chartFcf": "Slobodni novčani tok",
  "chartMargin": "Operativna marža",
  "chartPrice": "Cijena dionice (mjesečno, prilagođeno)",
  "chartRevenueSub": "godišnje",
  "chartNetIncomeSub": "godišnje (crveno = gubitak)",
  "chartFcfSub": "operativni novčani tok − kapitalna ulaganja",
  "chartMarginSub": "operativna dobit / prihodi",
  "chartPriceSub": "mjesečne zaključne cijene, posljednjih 6 godina",
  "notEnough": "Nema dovoljno podataka.",
  "errorLoad": "Došlo je do pogreške: {e}",
  "serveHint": "Ako ste datoteku otvorili izravno, pokrenite lokalni web-poslužitelj (pogledajte README).",
  "profileFinancial": "Profil financijske institucije: pokazatelji likvidnosti, EBITDA i slobodnog novčanog toka ne primjenjuju se na banke i osiguravatelje te su isključeni.",
  "profileRealEstate": "Profil nekretnina: pragovi zaduženosti i vrednovanja prilagođeni su višem strukturnom dugu REIT-ova.",
  "styles": "Ulagački profil",
  "navNews": "Tržište i događaji",
  "navData": "Financijski podaci",
  "newsTitle": "Tržište i događaji",
  "newsIntro": "Važni događaji koje su tvrtke uvrštene na američke burze službeno prijavile SEC-u na obrascu 8-K u posljednjih 12 mjeseci: vrste događaja velikog utjecaja (stečaj, ispravak izvještaja, obavijesti o isključenju s burze, promjena kontrole, preuzimanja, restrukturiranja, umanjenja vrijednosti, promjene revizora, kibernetički incidenti) i promjene u upravi velikih tvrtki; rutinski podnesci su isključeni.",
  "newsEmpty": "U trenutačnim podacima nema važnih događaja.",
  "viewFiling": "Pogledaj podnesak",
  "sectionEvents": "Važni događaji (posljednjih 12 mjeseci)",
  "eventsNone": "U posljednjih 12 mjeseci nije prijavljen nijedan važan događaj.",
  "latestEvents": "Najnoviji važni događaji",
  "allNews": "Svi važni događaji",
  "dataTitle": "Financijski podaci",
  "dataIntro": "Neobrađeni financijski izvještaji u predlošku TeraStockX: račun dobiti i gubitka, izvještaj o novčanim tokovima i bilanca za do deset poslovnih godina i posljednjih dvanaest mjeseci, s izračunatim pokazateljima. Preuzimanje u formatu CSV ili JSON.",
  "dataPick": "Odaberite tvrtku (naziv ili oznaka)",
  "sev5": "Kritično",
  "sev4": "Veliko",
  "sev3": "Značajno",
  "sev2": "Vrijedno pažnje",
  "allSeverities": "Sve vrste događaja",
  "onlyCritical": "Samo kritični i veliki",
  "openAnalysis": "Otvori analizu",
  "tabCompanies": "Dionice",
  "tabNews": "Događaji",
  "tabData": "Podaci",
  "tabCompare": "Usporedba",
  "tabMethod": "Metoda",
  "newsTop": "Najvažnije (kritični događaji; veliki događaji tvrtki vrijednih više od $1 mlrd.)",
  "filters": "Filtri pretraživanja",
  "filtersActive": "Aktivno: {n}",
  "reset": "Poništi filtre",
  "minScore": "Minimalni TeraScore",
  "maxRisk": "Maksimalni rizik",
  "anyValue": "Bilo koji",
  "minCap": "Minimalna tržišna kapitalizacija",
  "minDividend": "Minimalni dividendni prinos",
  "exchange": "Burza",
  "allExchanges": "Sve burze",
  "styleFilter": "Ulagački profil:",
  "noCritical": "Bez kritičnih upozorenja",
  "pe": "P/E",
  "dividendYieldShort": "Div. prinos",
  "sectorMedian": "Medijan sektora",
  "insiderTitle": "Transakcije insajdera",
  "insiderBuys": "Kupnje na otvorenom tržištu",
  "insiderSells": "Prodaje na otvorenom tržištu",
  "insiderNone": "U posljednjih 12 mjeseci insajderi nisu kupovali ni prodavali dionice na otvorenom tržištu.",
  "insiderForeign": "Strani privatni izdavatelji izuzeti su od podnošenja obrasca 4; nema podataka o insajderima.",
  "insiderPlanned": "Od toga prema planovima trgovanja 10b5-1",
  "insiderPeriod": "Podnesci SEC obrasca 4, {from} – {to}. Prikazane su samo kupnje (oznaka P) i prodaje (oznaka S) na otvorenom tržištu; dodjele, izvršenja opcija i zadržavanja poreza su isključeni.",
  "insiderCount": "Transakcija: {n} · insajdera: {p}",
  "insiderDate": "Datum",
  "insiderName": "Insajder",
  "insiderType": "Transakcija",
  "insiderShares": "Dionice",
  "insiderValue": "Vrijednost",
  "insiderPurchase": "Kupnja",
  "insiderSale": "Prodaja",
  "insiderPlanTag": "Plan 10b5-1",
  "alertsTitle": "Obavijesti popisa praćenja",
  "alertsSeen": "Označi sve kao pregledano",
  "alertScore": "{t}: TeraScore se promijenio s {from} na {to}",
  "alertRisk": "{t}: rizik je porastao s {from} na {to}",
  "alertDistress": "{t}: rizik financijskih poteškoća sada je {level}",
  "alertEvent": "{t}: novi važan događaj – {event} ({date})",
  "alertCritical": "{t}: novo kritično upozorenje – {flag}",
  "fxNote": "izvještaji u {cur}, preračunato po tečaju 1 {cur} = {rate} USD",
  "navTrend": "Promjene TeraScorea",
  "tabTrend": "Promjene",
  "trendIntro": "Kako se TeraScore tvrtki mijenja tijekom vremena. Prikaz po poslovnim godinama ocjenjuje svaku tvrtku na kraju svake poslovne godine samo na temelju onoga što se tada znalo (godišnji izvještaji, događaji iz obrazaca 8-K u prethodnih 12 mjeseci i cijena dionice toga dana). Tjedne snimke dodaju se pri svakom ažuriranju ponedjeljkom, pa se promjene za 4 i 13 tjedana pojavljuju nakon prvih tjedana.",
  "trendPeriod": "Razdoblje",
  "trendPeriodFy": "Promjena u odnosu na prethodnu poslovnu godinu",
  "trendPeriod4w": "Promjena za 4 tjedna",
  "trendPeriod13w": "Promjena za 13 tjedana",
  "trendUp": "Najveća poboljšanja",
  "trendDown": "Najveća pogoršanja",
  "trendChange": "Promjena",
  "trendFrom": "s {v}",
  "trendWeeklyEmpty": "Tjedne snimke prikupljaju se pri svakom ažuriranju ponedjeljkom; ovaj će se prikaz popuniti nakon prvih tjedana.",
  "trendNote": "Promjene su u bodovima TeraScorea. Ocjene po poslovnim godinama primjenjuju današnja sektorska mjerila na prošle godine.",
  "trendAnnualChart": "TeraScore po poslovnim godinama",
  "trendAnnualSub": "ocjena na kraju svake poslovne godine",
  "trendWeeklyChart": "TeraScore, tjedno",
  "trendWeeklySub": "snimka svakog ažuriranja ponedjeljkom",
  "trendAll": "Sve promjene",
  "navPortfolio": "Portfelj",
  "tabPortfolio": "Portfelj",
  "addPortfolio": "Dodaj u portfelj",
  "inPortfolio": "U portfelju",
  "pdfReport": "PDF izvještaj",
  "minDivSafety": "Sigurnost dividende",
  "peersTitle": "Slične tvrtke",
  "peersNone": "U ovom sektoru nema usporedivih ocijenjenih tvrtki.",
  "peerMedian": "Medijan sličnih",
  "peersSub": "Najsličnije tvrtke u sektoru {s}, prema djelatnosti i veličini tvrtke.",
  "peersRank": "{t} je #{r} od {n} u ovoj skupini prema TeraScoreu.",
  "peersCompare": "Detaljna usporedba",
  "dividendTitle": "Dividenda",
  "dividendSafety": "Sigurnost dividende",
  "dividendYield": "Dividendni prinos",
  "dps": "Dividenda po dionici",
  "dpsCagr": "Rast dividende (CAGR za 5 god.)",
  "yearsPaid": "Isplaćuje se bez prekida",
  "yearsN": "{n} god.",
  "yearsRaised": "Uzastopna povećanja",
  "dividendCuts": "Smanjenja (10 god.)",
  "earningsPayout": "Omjer isplate (dobit)",
  "fcfPayout": "Omjer isplate (slobodni novčani tok)",
  "payoutUncovered": "nije pokriveno",
  "dividendNone": "Tvrtka ne isplaćuje dividendu.",
  "dividendNoneShort": "bez dividende",
  "dividendNote": "Dividenda po dionici izvodi se iz isplaćenih novčanih dividendi podijeljenih brojem razrijeđenih dionica, pa se izvanredne dividende vide kao skokovi. Omjeri isplate koriste posljednjih dvanaest mjeseci kada su dostupni.",
  "chartDps": "Dividenda po dionici",
  "chartDpsSub": "isplaćene novčane dividende / razrijeđene dionice",
  "period": "Razdoblje",
  "periodAnnual": "Godišnje",
  "periodQuarterly": "Tromjesečno",
  "quarterEnd": "Tromjesečje koje završava",
  "quarterlyNote": "Tromjesečne brojke. Kada je tromjesečje objavljeno samo kumulativno od početka godine, to je kumulativna brojka umanjena za onu iz prethodnog tromjesečja; četvrto tromjesečje je godišnja brojka umanjena za prvih devet mjeseci.",
  "quarterlyNone": "Nema dostupnih tromjesečnih brojki.",
  "quarterlyForeign": "Strani privatni izdavatelji podnose samo godišnje izvještaje (20-F / 40-F); tromjesečne brojke nisu dostupne.",
  "pfIntro": "Unesite svoje pozicije da biste vidjeli vrijednosno ponderirani TeraScore, rizik, prihod od dividendi, raspodjelu po sektorima i upozorenja o koncentraciji portfelja. Portfelj se sprema samo u ovom pregledniku.",
  "pfAdd": "Dodaj",
  "pfFromWatch": "Dodaj popis praćenja (po 1 dionica)",
  "pfNeedShares": "Unesite broj dionica.",
  "pfEmpty": "Portfelj je prazan. Gore dodajte tvrtku i broj dionica.",
  "pfValue": "Vrijednost portfelja",
  "pfScore": "Ponderirani TeraScore",
  "pfIncome": "Godišnji prihod od dividendi",
  "pfPe": "P/E portfelja",
  "pfHoldings": "Pozicije",
  "pfSectors": "Raspodjela po sektorima",
  "pfOther": "Ostalo",
  "pfChecks": "Provjere portfelja",
  "pfOk": "Nema upozorenja o koncentraciji ili kvaliteti.",
  "pfInfo": "Napomena",
  "pfShares": "Dionice",
  "pfPrice": "Cijena",
  "pfValueCol": "Vrijednost",
  "pfWeight": "Udio",
  "pfNote": "Cijene i ocjene prema posljednjem ažuriranju podataka ({d}). Vrijednosti u {c}; europski ETF-ovi iskazani su u vlastitoj valuti trgovanja i preračunati po današnjem tečaju.",
  "reportTitle": "Izvještaj o tvrtki",
  "printPdf": "Ispiši / spremi kao PDF",
  "printHint": "U dijalogu za ispis odaberite „Spremi kao PDF”.",
  "reportFinancials": "Petogodišnji financijski pregled",
  "profile": "Ulagački profil",
  "ratedCompanies": "Tvrtke s TeraScoreom",
  "installFooter": "Instaliraj aplikaciju",
  "installBanner": "Instalirajte TeraStockX kao aplikaciju na telefon, tablet ili računalo.",
  "installHow": "Kako instalirati",
  "close": "Zatvori",
  "installTitle": "Instalirajte TeraStockX kao aplikaciju",
  "installIntro": "TeraStockX se može instalirati izravno s ove stranice, bez trgovine aplikacijama i praktički bez preuzimanja. Zatim se otvara s vlastite ikone, preko cijelog zaslona, kao svaka druga aplikacija, i uvijek prikazuje najnovije podatke.",
  "installDone": "Koristite instaliranu aplikaciju.",
  "installNow": "Instaliraj odmah",
  "installYourDevice": "Vaš uređaj",
  "installIos": "iPhone i iPad",
  "installAndroid": "Android",
  "installDesktop": "Računalo (Chrome, Edge)",
  "installNote": "Aplikacija je ista kao web-stranica: ažuriranja podataka stižu automatski, a popis praćenja i portfelj ostaju na ovom uređaju. Da biste je uklonili, izbrišite je kao svaku drugu aplikaciju.",
  "pfAddPlaceholder": "Tvrtka ili ETF (naziv ili oznaka)…",
  "pfScoreCover": "pokriva {p} portfelja",
  "pfEtfs": "ETF-ovi",
  "etfExpense": "Omjer troškova {v}",
  "etfNoScore": "ETF-ovi nemaju TeraScore: fond nema vlastite financijske izvještaje.",
  "etfYieldInput": "Dividendni prinos (%)",
  "etfNote": "ETF-ovi nemaju TeraScore; ponderirani TeraScore i rizik obuhvaćaju samo tvrtke.",
  "etfYieldMissing": "Izvor podataka ne objavljuje dividendni prinos za {list}. Unesite ga u stupac prinosa (u %) kako bi bio uračunat u prihod od dividendi.",
  "screensTitle": "Brza pretraživanja",
  "colChangeFy": "Promijeni",
  "filtersAndScreens": "Filtri i brza pretraživanja",
  "maxPe": "Maks. P/E",
  "minDrop": "Ispod 12-mjesečnog maksimuma",
  "dropAtLeast": "najmanje {p}",
  "colFromHigh": "Od maksimuma",
  "contact": "Kontakt",
  "marketToday": "Tržište danas",
  "marketMore": "Tržište i događaji",
  "eventsTitle": "Važni korporativni događaji (8-K)",
  "pfMax": "Maks.",
  "pfSince": "od {d}",
  "pfMoveValue": "Promjena vrijednosti",
  "pfMoveScore": "Promjena TeraScorea",
  "pfMoveNoScore": "Još nema dovoljno povijesti: tjedni TeraScore po sadašnjoj metodi bilježi se od {d}.",
  "pfMoveFy": "Posljednja poslovna godina u odnosu na prethodnu (prema podacima poznatima u to vrijeme).",
  "pfMoveFyRange": "Poslovne godine {a} → {b} (prema podacima poznatima u to vrijeme).",
  "pfMoveChartSub": "U {c}; strane cijene po današnjem tečaju.",
  "pfMoveTop": "Što je pokrenulo portfelj",
  "pfMoveTopSub": "Za svaku poziciju: promjena cijene, njezin utjecaj na vrijednost portfelja i promjena TeraScorea u razdoblju.",
  "pfMoveMonthly": "S cijenama na kraju mjeseca (još nema dnevnih cijena zatvaranja): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "AI dionice",
   "bigTech": "Big Tech",
   "semis": "Poluvodiči",
   "banks": "Banke",
   "energy": "Nafta i plin",
   "crypto": "Kripto dionice"
  },
  "hlIndex": "{n} {v} danas",
  "hlTheme": "{n} {v} danas (najbolja {b}, najslabija {w})",
  "hlUp": "{n}: rast od {v} danas",
  "hlDown": "{n}: pad od {v} danas",
  "hlReport": "{n} je objavila {f} ({form})",
  "annualReport": "godišnji izvještaj",
  "quarterlyReport": "tromjesečni izvještaj",
  "hlScore": "TeraScore tvrtke {n} promijenio se za {v} bod. (sada {o})",
  "hlListing": "Novo na tržištu: {n}",
  "none": "Danas nema ništa za prikaz.",
  "notYet": "Pregled tržišta pojavit će se nakon sljedećeg ažuriranja podataka.",
  "bestWorst": "najbolja {b} · najslabija {w}",
  "asOf": "Cijene: {d} (s odgodom od oko 15 minuta). Radnim danima cijene, TeraScore, vijesti i novi izvještaji ažuriraju se svakih 5 minuta tijekom trgovanja u SAD-u i svakih 10 minuta prije i poslije njega.",
  "headlines": "Današnja velika kretanja",
  "themesTitle": "Teme (današnja promjena ponderirana tržišnom kapitalizacijom)",
  "sectorsTitle": "Sektori danas",
  "gainers": "Najveći rast (od $2 mlrd.)",
  "losers": "Najveći pad (od $2 mlrd.)",
  "today": "Danas",
  "reports": "Novi tromjesečni i godišnji izvještaji",
  "filed": "Podneseno",
  "scoreMoves": "Velike promjene TeraScorea od jučer",
  "newListings": "Novo na tržištu",
  "listed": "Uvršteno",
  "note": "Promjene od prethodnog zatvaranja. Teme i sektori ponderirani su tržišnom kapitalizacijom. Promjene TeraScorea uspoređuju se s ocjenom prethodnog dana. Tijekom trgovanja dnevna promjena prikazuje se za tvrtke veće od oko $2 mlrd. i za najveće fondove; za manje — nakon dnevnog ažuriranja.",
  "noFilings": "Još nema financijskih izvještaja SEC-u",
  "notScoredYet": "Još nije ocijenjeno",
  "notScoredText": "Za TeraScore potreban je barem jedan godišnji izvještaj (10-K ili 20-F). Novouvrštene tvrtke dobivaju ga nakon prvog godišnjeg izvještaja; do tada se prikazuju cijena, tržišna kapitalizacija i eventualne tromjesečne brojke.",
  "lastReport": "Najnoviji izvještaj",
  "storiesTitle": "Glavne vijesti",
  "storiesNote": "Važne objave i velika kretanja cijena velikih tvrtki (tržišna vrijednost veća od $10 mlrd.) iz posljednjih nekoliko dana. Naslovi potječu iz podnesaka samih tvrtki SEC-u, na izvornom engleskom.",
  "kind": {
   "leadership": "Promjena u upravi",
   "deal": "Spajanje ili preuzimanje",
   "results": "Rezultati",
   "critical": "Kritičan događaj",
   "major": "Velik događaj",
   "restructuring": "Restrukturiranje",
   "cyber": "Kibernetički incident",
   "board": "Promjena u upravnom odboru",
   "other": "Objava",
   "move": "Veliko kretanje cijene"
  },
  "when": {
   "pre": "prije otvaranja",
   "post": "nakon zatvaranja",
   "day": "danas",
   "last": "posljednja sesija"
  },
  "preNote": "Prije otvaranja: dnevne promjene ispod su promjene prethodnog trgovinskog dana ({d}). Kretanja velikih tvrtki prije otvaranja nalaze se u glavnim vijestima.",
  "postNote": "Nakon zatvaranja: dnevne promjene ispod su promjene današnje sesije; kretanja velikih tvrtki nakon zatvaranja nalaze se u glavnim vijestima.",
  "readMore": "Priopćenje za javnost (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Trenutačno nema velikih vijesti velikih tvrtki.",
  "moreNews": "Sve vijesti",
  "asOfShort": "Cijene: {d}, s odgodom od oko 15 minuta",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "od vijesti",
  "sinceNote": "Uz vijest: promjena cijene dionice od vijesti, u odnosu na posljednju zaključnu cijenu prije nje (uključujući trgovanje prije otvaranja i nakon zatvaranja). Uz veliko kretanje cijene: kretanje toga dana, prije otvaranja ili nakon zatvaranja."
 },
 "screens": {
  "top": {
   "name": "Najviši TeraScore",
   "desc": "Sve ocijenjene tvrtke, najprije najviši TeraScore."
  },
  "bestRiskReward": {
   "name": "Najbolja ocjena, najmanji rizik",
   "desc": "TeraScore najmanje 70 i rizik najviše 30, bez kritičnih upozorenja, tržišna kapitalizacija od $300 mil.; poredano po TeraScoreu umanjenom za rizik."
  },
  "safeLongTerm": {
   "name": "Najsigurnije na dugi rok",
   "desc": "TeraScore ≥ 65, rizik ≤ 25, stabilnost ≥ 70, snaga bilance ≥ 60, nizak rizik financijskih poteškoća, bez kritičnih upozorenja, tržišna kapitalizacija od $2 mlrd.; poredano po niskom riziku, stabilnosti i bilanci."
  },
  "lowRisk": {
   "name": "Najmanji rizik",
   "desc": "Rizik najviše 20 i bez kritičnih upozorenja; najprije najmanji rizik."
  },
  "improvers": {
   "name": "Najveće poboljšanje prošle godine",
   "desc": "TeraScore porastao za najmanje 10 bodova u odnosu na prethodnu poslovnu godinu, tržišna kapitalizacija od $300 mil.; najprije najveći rast."
  },
  "growth": {
   "name": "Brz rast",
   "desc": "Rast u posljednjoj poslovnoj godini ≥ 75 i dugoročni rast ≥ 70, uz TeraScore od najmanje 55, tržišna kapitalizacija od $300 mil."
  },
  "value": {
   "name": "Podcijenjena kvaliteta",
   "desc": "Ocjena vrednovanja ≥ 70 (jeftino u odnosu na dobit i novčani tok), TeraScore ≥ 65, profitabilnost ≥ 60, bez kritičnih upozorenja, tržišna kapitalizacija od $300 mil."
  },
  "dividend": {
   "name": "Sigurne dividende",
   "desc": "Sigurnost dividende ≥ 75 i dividendni prinos od najmanje 2,5%, tržišna kapitalizacija od $300 mil.; najprije najveći prinos."
  },
  "largeQuality": {
   "name": "Velike kvalitetne tvrtke",
   "desc": "Tržišna kapitalizacija od najmanje $50 mlrd. i TeraScore od najmanje 70."
  },
  "highRisk": {
   "name": "Visok rizik",
   "desc": "Rizik najmanje 70, ili visok rizik financijskih poteškoća uz rizik od najmanje 55, tržišna kapitalizacija od $300 mil.; najprije najrizičnije. Špekulativne dionice: oprezno."
  },
  "decliners": {
   "name": "Najveće pogoršanje prošle godine",
   "desc": "TeraScore pao za najmanje 10 bodova u odnosu na prethodnu poslovnu godinu, tržišna kapitalizacija od $300 mil.; najprije najveći pad."
  },
  "dip": {
   "name": "Ispod maksimuma, sada jeftinije",
   "desc": "Kvalitetne tvrtke (TeraScore ≥ 65, rizik ≤ 40, bez kritičnih upozorenja, tržišna kapitalizacija od $300 mil.) čija je cijena dionice 20–50% ispod 12-mjesečnog maksimuma (mjesečne zaključne cijene); najprije najbolji TeraScore. Veći pad je izostavljen: češće upućuje na probleme nego na popust."
  },
  "lowPe": {
   "name": "Nizak P/E",
   "desc": "Profitabilne tvrtke s P/E od 3–12 čija je i ocjena vrednovanja najmanje 60 (EV/EBIT i prinos novčanog toka potvrđuju da su jeftine), TeraScore ≥ 60, stabilnost ≥ 50, bez kritičnih upozorenja, tržišna kapitalizacija od $300 mil. P/E ispod 3 obično potječe od jednokratne dobiti i izostavljen je."
  }
 },
 "install": {
  "benefit1": "Vlastita ikona na početnom zaslonu, pokraj ostalih aplikacija",
  "benefit2": "Otvara se preko cijelog zaslona, bez adresne trake preglednika",
  "benefit3": "Pokreće se brže, a posljednje pregledane tvrtke otvaraju se i izvan mreže",
  "benefit4": "Sama se ažurira: bez ponovne instalacije, bez trgovine aplikacijama",
  "iphone1": "Otvorite ovu stranicu u Safariju.",
  "iphone2": "Dodirnite gumb Dijeli (kvadrat sa strelicom prema gore) – na iPhoneu pri dnu, na iPadu gore desno.",
  "iphone3": "Pomaknite se prema dolje i dodirnite „Dodaj na početni zaslon”.",
  "iphone4": "Dodirnite „Dodaj” u gornjem desnom kutu. Ikona TeraStockX pojavit će se na početnom zaslonu.",
  "android1": "Otvorite ovu stranicu u Chromeu.",
  "android2": "Dodirnite „Instaliraj odmah” iznad ili otvorite izbornik (⋮) gore desno.",
  "android3": "Odaberite „Instaliraj aplikaciju” (ili „Dodaj na početni zaslon”).",
  "android4": "Potvrdite s „Instaliraj”. Aplikacija će se pojaviti među vašim aplikacijama i na početnom zaslonu.",
  "desktop1": "Otvorite ovu stranicu u Chromeu ili Edgeu.",
  "desktop2": "Kliknite „Instaliraj odmah” iznad ili ikonu za instalaciju na desnom kraju adresne trake.",
  "desktop3": "Potvrdite s „Instaliraj”.",
  "desktop4": "TeraStockX se otvara u vlastitom prozoru i može se pokrenuti iz izbornika Start, Docka ili Launchpada."
 },
 "dividend": {
  "safe": "Sigurna",
  "moderate": "Umjerena",
  "risky": "Ugrožena",
  "unsafe": "Nesigurna",
  "na": "Nije ocijenjeno",
  "safeText": "Dobro pokrivena dobiti i slobodnim novčanim tokom, sa solidnom poviješću.",
  "moderateText": "Pokrivena, ali s ograničenom rezervom; pad gospodarstva mogao bi izazvati pritisak.",
  "riskyText": "Pokriće je slabo ili je bilanca opterećena; smanjenje je realna mogućnost.",
  "unsafeText": "Nije pokrivena dobiti ni novčanim tokom ili je nedavno smanjena; daljnje smanjenje je vjerojatno.",
  "naText": "Nema dovoljno podataka za ocjenu.",
  "parts": {
   "priceStability": "Stabilnost cijene dionice",
   "fcfPayout": "Pokriće slobodnim novčanim tokom",
   "earningsPayout": "Pokriće dobiti",
   "leverage": "Zaduženost",
   "trackRecord": "Povijest isplata",
   "stability": "Stabilnost dobiti"
  },
  "partsText": {
   "priceStability": "Ocjena tržišnog rizika (volatilnost i najveći pad cijene dionice): nagli pad često prethodi smanjenju dividende.",
   "fcfPayout": "Isplaćene dividende / slobodni novčani tok: 100 bodova pri 40% ili manje (REIT: 80%), 0 bodova pri 120% ili više (REIT: 130%) ili pri negativnom slobodnom novčanom toku.",
   "earningsPayout": "Isplaćene dividende / neto dobit: 100 bodova pri 50% ili manje, 0 bodova pri 150% ili više ili pri gubitku. Ne ocjenjuje se za REIT-ove.",
   "leverage": "Neto dug / EBITDA: 100 bodova pri 1× ili manje, 0 bodova pri 5× ili više. Ne ocjenjuje se za banke, osiguravatelje i REIT-ove.",
   "trackRecord": "Godine isplate bez prekida (60%) i uzastopnih povećanja (40%), do 10 godina; minus 35 bodova za svako smanjenje veće od 10% u posljednjih 10 godina.",
   "stability": "Udio profitabilnih godina u posljednjih pet."
  }
 },
 "pw": {
  "position": "{t} čini {w} portfelja (više od {l}).",
  "sector": "{s} čini {w} portfelja (više od {l}).",
  "few": "Broj pozicija: samo {n}. S manje od {m} pozicija portfelj je izložen riziku pojedinačne tvrtke.",
  "critical": "Kritično upozorenje: {list}.",
  "distress": "Visok rizik financijskih poteškoća: {list}.",
  "weak": "TeraScore ispod {s}: {list}.",
  "unscored": "Nije ocijenjeno (nedovoljno podataka): {list}."
 },
 "ocr": {
  "button": "Sa snimke zaslona",
  "loading": "Učitavanje prepoznavanja teksta (jednokratno, oko 7 MB)…",
  "reading": "Čitanje slike… {p}%",
  "privacy": "Slika ne napušta vaš uređaj: čita se u vašem pregledniku.",
  "found": "Prepoznate pozicije: {n}",
  "check": "Provjerite oznake i broj dionica, po potrebi ih ispravite, pa ih dodajte.",
  "inPortfolio": "Trenutačno u portfelju, dionica: {n} (bit će zamijenjeno)",
  "add": "Dodaj u portfelj",
  "cancel": "Odustani",
  "close": "Zatvori",
  "none": "Na slici nisu pronađene dionice. Pokušajte s oštrijom i većom snimkom zaslona na kojoj se jasno vide oznaka ili naziv tvrtke i broj dionica ili ih dodajte ručno.",
  "failed": "Prepoznavanje teksta nije uspjelo: {e}",
  "needShares": "Unesite broj dionica za svaki označeni redak.",
  "hint": "Savjet: najbolje funkcioniraju snimke popisa pozicija u aplikaciji vašeg brokera; možete odabrati više njih odjednom.",
  "readingN": "Čitanje slike {i} od {n}… {p}%",
  "foundImages": "Prepoznate pozicije: {n} (sa slika: {k})",
  "estimated": "≈ vrijednost ÷ cijena, provjerite"
 },
 "dq": {
  "partial": "Djelomično",
  "partialTitle": "Djelomična analiza: {p}% TeraScorea temelji se na podacima. Nije ocijenjeno zbog nedostatka podataka (računa se najviše kao 50): {d}.",
  "partialTitleParts": "Djelomična analiza: {p}% TeraScorea temelji se na podacima; nedostaje više pokazatelja.",
  "little": "Malo podataka",
  "littleTitle": "Nema dovoljno podataka za TeraScore: barem 5 od 9 područja mora se moći ocijeniti.",
  "none": "Bez analize",
  "noneTitle": "Još nema godišnjeg izvještaja s financijskim podacima.",
  "newListing": "Novo na burzi",
  "newTitle": "Nedavno uvrštena: TeraScore dobiva nakon prvog godišnjeg izvještaja.",
  "newBadge": "NOVO",
  "legend": "„Djelomično · 65%” = analiza je nepotpuna: samo se ovaj dio TeraScorea temelji na podacima. Označava se ispod 80%. Područje bez podataka računa se najviše kao neutralnih {s}, pa praznina nikada ne može podići ocjenu, ali je rezultat manje pouzdan.",
  "noticePartialTitle": "Djelomična analiza: {p}% TeraScorea temelji se na podacima.",
  "noticePartial": "Ova područja nije bilo moguće ocijeniti jer u izvještajima tvrtke nedostaju podaci: {d}. Računaju se kao neutralnih {s} ili kao prosjek ostalih područja tvrtke ako je on niži, pa podaci koji nedostaju nikada ne mogu podići TeraScore; ocjena je manje pouzdana nego kod potpuno analizirane tvrtke.",
  "noticePartialParts": "U izvještajima tvrtke nedostaju neki pokazatelji. Unutar svakog područja oni se izostavljaju, a ponderi ostalih pokazatelja razmjerno rastu, pa je TeraScore manje pouzdan nego kod potpuno analizirane tvrtke.",
  "noticeLittle": "za TeraScore je potrebno barem 5 područja koja se mogu ocijeniti; ova ih tvrtka ima {n}. Područja koja je bilo moguće ocijeniti prikazana su ispod.",
  "estimated": "Procijenjeno iz drugih objavljenih brojki: {list}.",
  "est": {
   "capex": "kapitalna ulaganja ≈ uobičajeni omjer kapitalnih ulaganja i prihoda tvrtke ili amortizacija (tvrtka ih iskazuje samo pod vlastitim XBRL elementom)",
   "operatingIncome": "operativna dobit ≈ dobit prije oporezivanja (ili neto dobit + porez na dobit) + troškovi kamata (tvrtka ne iskazuje stavku operativne dobiti)",
   "totalDebt": "dug = 0 (u posljednje dvije godine nisu iskazani ni zaduživanje ni troškovi kamata)"
  },
  "partialShort": "Djelomično · {p}%",
  "coverageBadge": "Analiza potpuna {p}% (nedostaju neki podaci)",
  "partialMobile": "{p}% podataka"
 },
 "dims": {
  "profitability": {
   "name": "Profitabilnost",
   "q": "Koliko učinkovito tvrtka pretvara prihode i kapital u dobit?",
   "summary": "Operativna marža {operatingMargin}, neto marža {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Kvaliteta novčanog toka",
   "q": "Je li iskazana dobit pokrivena novcem?",
   "summary": "FCF marža {fcfMargin}; konverzija FCF-a {fcfConversion} neto dobiti; omjer obračunskih stavki {accrualRatio}; naknade u dionicama {sbcToRevenue} prihoda."
  },
  "balanceSheet": {
   "name": "Snaga bilance",
   "q": "Kolika je zaduženost tvrtke u odnosu na dobit i kapital?",
   "summary": "Neto dug/EBITDA {netDebtToEbitda}, dug/kapital {debtToEquity}, pokriće kamata {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Likvidnost",
   "q": "Mogu li se kratkoročne obveze podmiriti iz kratkotrajne imovine?",
   "summary": "Tekući omjer {currentRatio}, brzi omjer {quickRatio}, novčani omjer {cashRatio}."
  },
  "growth1y": {
   "name": "Rast (posljednja poslovna godina)",
   "q": "Međugodišnja dinamika prodaje, dobiti i novčanog toka.",
   "summary": "Prihodi {revenueYoY}, operativna dobit {operatingIncomeYoY}, EPS {epsYoY}, slobodni novčani tok {fcfYoY} u odnosu na prethodnu godinu."
  },
  "growthLong": {
   "name": "Dugoročni rast",
   "q": "Prosječni godišnji rast za razdoblje do pet godina.",
   "summary": "CAGR za {windowYears} god.: prihodi {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, knjigovodstvena vrijednost po dionici {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilnost",
   "q": "Koliko su rezultati predvidljivi i otporni?",
   "summary": "Profitabilna u {profitableYearsRatio} godina, pozitivan FCF u {fcfPositiveRatio}; volatilnost rasta prihoda {revenueVolatility}; Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "Alokacija kapitala",
   "q": "Koliko se dobro kapital vraća dioničarima i ponovno ulaže?",
   "summary": "Broj dionica {shareChangeYearly} godišnje; prinos dioničarima {shareholderYield}; isplata dividendi {payoutRatio} FCF-a; promjena ROIC-a {roicChange}."
  },
  "valuation": {
   "name": "Vrednovanje",
   "q": "Koliko je dionica skupa u odnosu na fundamentalne pokazatelje?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, FCF prinos {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Rizik",
   "q": "Ukupni rizik ulaganja (manje je bolje).",
   "summary": "Rizik financijskih poteškoća: {distress}. Godišnja volatilnost {volatility}; najveći pad (5 god.) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Tržišni rizik",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Izvrsno",
  "strong": "Snažno",
  "moderate": "Umjereno",
  "weak": "Slabo",
  "poor": "Loše",
  "na": "Nema podataka"
 },
 "riskGrades": {
  "excellent": "Vrlo nizak",
  "strong": "Nizak",
  "moderate": "Umjeren",
  "weak": "Visok",
  "poor": "Vrlo visok",
  "na": "Nema podataka"
 },
 "distress": {
  "low": "Nizak",
  "medium": "Povišen",
  "high": "Visok",
  "lowText": "U trenutačnim podacima nema znakova financijskih poteškoća.",
  "mediumText": "Postoje neki signali upozorenja; situaciju treba pratiti.",
  "highText": "Više pokazatelja upućuje na značajne financijske poteškoće."
 },
 "outlook": {
  "up": "Poboljšava se",
  "flat": "Stabilno",
  "down": "Pogoršava se",
  "unknown": "Nedovoljna povijest",
  "upText": "Fundamentalni pokazatelji posljednjih su se godina postojano poboljšavali.",
  "flatText": "Fundamentalni pokazatelji uglavnom su se kretali bočno.",
  "downText": "Fundamentalni pokazatelji posljednjih su se godina pogoršali.",
  "unknownText": "Potrebne su barem tri poslovne godine."
 },
 "verdict": {
  "excellent": "Iznimno snažni fundamentalni pokazatelji u većini dimenzija.",
  "strong": "Financijski zdrava tvrtka sa solidnim fundamentalnim pokazateljima.",
  "moderate": "Mješovit fundamentalni profil s jasnim prednostima i slabostima.",
  "weak": "Slabi fundamentalni pokazatelji; potreban je povećan oprez.",
  "poor": "Ozbiljne fundamentalne slabosti.",
  "na": "Nema dovoljno podataka za ukupnu procjenu."
 },
 "styles": {
  "quality": "Kvaliteta",
  "growth": "Rast",
  "value": "Vrijednost",
  "income": "Prihod",
  "speculative": "Špekulativno"
 },
 "sectors": {
  "technology": "Tehnologija",
  "healthcare": "Zdravstvo",
  "financials": "Financije",
  "realEstate": "Nekretnine",
  "consumerDiscretionary": "Diskrecijska potrošnja",
  "consumerStaples": "Osnovna potrošnja",
  "industrials": "Industrija",
  "energy": "Energetika",
  "utilities": "Komunalne usluge",
  "communication": "Komunikacijske usluge",
  "materials": "Materijali",
  "shell": "Tvrtke-ljušture / SPAC",
  "other": "Ostalo"
 },
 "metrics": {
  "cashRunway": [
   "Novčana rezerva",
   "Koliko bi godina likvidna imovina (novac ili kratkotrajna imovina umanjena za zalihe i potraživanja) financirala trenutačni negativni slobodni novčani tok. Ograničava ocjenu likvidnosti: 0,75 godina ili manje = 0 bodova, 3 godine ili više = 100."
  ],
  "grossMargin": [
   "Bruto marža",
   "Bruto dobit / prihodi."
  ],
  "operatingMargin": [
   "Operativna marža",
   "Operativna dobit (EBIT) / prihodi."
  ],
  "netMargin": [
   "Neto marža",
   "Neto dobit / prihodi."
  ],
  "fcfMargin": [
   "FCF marža",
   "Slobodni novčani tok (operativni novčani tok − kapitalna ulaganja) / prihodi."
  ],
  "roe": [
   "Povrat na kapital (ROE)",
   "Neto dobit / prosječni kapital dioničara. Ne ocjenjuje se kada je kapital negativan."
  ],
  "roa": [
   "Povrat na imovinu (ROA)",
   "Neto dobit / prosječna ukupna imovina."
  ],
  "roic": [
   "Povrat na uloženi kapital (ROIC)",
   "NOPAT (EBIT × (1 − efektivna porezna stopa)) / prosječni uloženi kapital (kapital + dug − novac)."
  ],
  "fcfConversion": [
   "Konverzija FCF-a",
   "Slobodni novčani tok / neto dobit. Kod neto gubitka pozitivan FCF dobiva 60 bodova."
  ],
  "accrualRatio": [
   "Omjer obračunskih stavki",
   "(Neto dobit − operativni novčani tok) / prosječna ukupna imovina. Visoke vrijednosti upućuju na dobit koja nije pokrivena novcem."
  ],
  "sbcToRevenue": [
   "Naknade u dionicama / prihodi",
   "Nenovčane naknade koje razrjeđuju udio dioničara."
  ],
  "capexToRevenue": [
   "Intenzitet kapitalnih ulaganja",
   "Kapitalna ulaganja / prihodi."
  ],
  "currentRatio": [
   "Tekući omjer",
   "Kratkotrajna imovina / kratkoročne obveze."
  ],
  "quickRatio": [
   "Brzi omjer",
   "(Kratkotrajna imovina − zalihe) / kratkoročne obveze."
  ],
  "cashRatio": [
   "Novčani omjer",
   "Novac i novčani ekvivalenti / kratkoročne obveze."
  ],
  "debtToEquity": [
   "Dug / kapital",
   "Financijski dug / kapital dioničara. Negativan kapital dobiva 0."
  ],
  "equityRatio": [
   "Omjer kapitala",
   "Kapital dioničara / ukupna imovina."
  ],
  "liabilitiesToAssets": [
   "Obveze / imovina",
   "Ukupne obveze / ukupna imovina."
  ],
  "netDebt": [
   "Neto dug",
   "Financijski dug − novac. Negativno = neto novac."
  ],
  "netDebtToEbitda": [
   "Neto dug / EBITDA",
   "Koliko je godina EBITDA potrebno za otplatu neto duga. Neto novac dobiva 100 kada je EBITDA pozitivna i 50 kada nije (novac se troši); neto dug uz negativnu EBITDA dobiva 0."
  ],
  "interestCoverage": [
   "Pokriće kamata",
   "EBIT / troškovi kamata. Bez troškova kamata dobiva 100."
  ],
  "goodwillToAssets": [
   "Goodwill i nematerijalna imovina / imovina",
   "Dio imovine stečen preuzimanjima; izložen riziku umanjenja vrijednosti."
  ],
  "payoutRatio": [
   "Isplata dividendi (od FCF-a)",
   "Isplaćene dividende / slobodni novčani tok. Ne ocjenjuje se ako se dividenda ne isplaćuje."
  ],
  "bookValuePerShare": [
   "Knjigovodstvena vrijednost po dionici",
   "Kapital dioničara / dionice u optjecaju."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(radni kapital/imovina) + 3,26·(zadržana dobit/imovina) + 6,72·(EBIT/imovina) + 1,05·(kapital/obveze). < 1,1 poteškoće, > 2,6 sigurno."
  ],
  "piotroski": [
   "Piotroski F-score",
   "Devet testova da/ne o profitabilnosti, zaduženosti, likvidnosti i poslovnoj učinkovitosti (0–9)."
  ],
  "revenueYoY": [
   "Rast prihoda (g/g)",
   "Promjena u odnosu na prethodnu poslovnu godinu."
  ],
  "operatingIncomeYoY": [
   "Rast operativne dobiti (g/g)",
   "Promjena u odnosu na prethodnu poslovnu godinu; nije definirana od negativne osnove."
  ],
  "netIncomeYoY": [
   "Rast neto dobiti (g/g)",
   "Promjena u odnosu na prethodnu poslovnu godinu; nije definirana od negativne osnove."
  ],
  "epsYoY": [
   "Rast EPS-a (g/g)",
   "Razrijeđena dobit po dionici u odnosu na prethodnu godinu. 0 bodova ako je posljednja godina s gubitkom."
  ],
  "fcfYoY": [
   "Rast FCF-a (g/g)",
   "Slobodni novčani tok u odnosu na prethodnu godinu."
  ],
  "revenueCagr": [
   "CAGR prihoda",
   "Prosječna godišnja stopa rasta za razdoblje do pet godina."
  ],
  "epsCagr": [
   "CAGR EPS-a",
   "Prosječni godišnji rast razrijeđenog EPS-a za razdoblje do pet godina."
  ],
  "fcfCagr": [
   "CAGR FCF-a",
   "Prosječni godišnji rast slobodnog novčanog toka za razdoblje do pet godina."
  ],
  "bookValuePerShareCagr": [
   "CAGR knjigovodstvene vrijednosti po dionici",
   "Prosječni godišnji rast kapitala po dionici."
  ],
  "revenueGrowthYearsRatio": [
   "Godine s rastom prihoda",
   "Udio godina u razdoblju s većim prihodima nego prethodne godine."
  ],
  "marginTrend": [
   "Promjena operativne marže",
   "Promjena operativne marže od prve do posljednje godine razdoblja (postotni bodovi)."
  ],
  "roicChange": [
   "Promjena ROIC-a",
   "Promjena ROIC-a od prve do posljednje godine razdoblja (postotni bodovi)."
  ],
  "profitableYearsRatio": [
   "Profitabilne godine",
   "Udio godina u razdoblju s pozitivnom neto dobiti."
  ],
  "fcfPositiveRatio": [
   "Godine s pozitivnim FCF-om",
   "Udio godina u razdoblju s pozitivnim slobodnim novčanim tokom."
  ],
  "revenueVolatility": [
   "Volatilnost rasta prihoda",
   "Standardna devijacija godišnjeg rasta prihoda."
  ],
  "marginVolatility": [
   "Volatilnost marže",
   "Standardna devijacija operativne marže (neto marže kod financijskih institucija)."
  ],
  "shareChangeYearly": [
   "Promjena broja dionica (godišnje)",
   "Pozitivno = razrjeđivanje, negativno = otkup."
  ],
  "marketCap": [
   "Tržišna kapitalizacija",
   "Cijena dionice × dionice u optjecaju."
  ],
  "enterpriseValue": [
   "Vrijednost poduzeća (EV)",
   "Tržišna kapitalizacija + financijski dug − novac."
  ],
  "peRatio": [
   "Cijena / dobit (P/E)",
   "Tržišna kapitalizacija / neto dobit (TTM). Gubici dobivaju 0."
  ],
  "psRatio": [
   "Cijena / prihodi (P/S)",
   "Tržišna kapitalizacija / prihodi (TTM)."
  ],
  "pbRatio": [
   "Cijena / knjigovodstvena vrijednost (P/B)",
   "Tržišna kapitalizacija / kapital dioničara."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Vrijednost poduzeća / operativna dobit (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Vrijednost poduzeća / EBITDA (TTM)."
  ],
  "fcfYield": [
   "FCF prinos",
   "Slobodni novčani tok (TTM) / tržišna kapitalizacija."
  ],
  "pfcfRatio": [
   "Cijena / FCF",
   "Tržišna kapitalizacija / slobodni novčani tok (TTM)."
  ],
  "pegRatio": [
   "PEG omjer",
   "P/E podijeljen s CAGR-om EPS-a (u %). Negativan rast ili gubici dobivaju 0."
  ],
  "dividendYield": [
   "Dividendni prinos",
   "Isplaćene dividende (TTM) / tržišna kapitalizacija."
  ],
  "shareholderYield": [
   "Prinos dioničarima",
   "(Dividende + otkup dionica, TTM) / tržišna kapitalizacija."
  ],
  "priceReturn1y": [
   "Cijena dionice, 1 god.",
   "Ukupni prinos prilagođene cijene dionice za 12 mjeseci."
  ],
  "priceCagr5y": [
   "CAGR cijene dionice, 5 god.",
   "Godišnji prinos prilagođene cijene dionice."
  ],
  "volatility": [
   "Volatilnost (godišnja)",
   "Standardna devijacija mjesečnih logaritamskih prinosa za 36 mjeseci × √12."
  ],
  "maxDrawdown": [
   "Najveći pad (5 god.)",
   "Najveći pad cijene dionice od vrha do dna."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Negativan kapital dioničara",
   "Obveze premašuju imovinu. To može biti posljedica agresivnog otkupa, ali često upućuje na financijski pritisak."
  ],
  "persistentLosses": [
   "Trajni gubici",
   "Neto gubitak u barem dvije uzastopne poslovne godine."
  ],
  "lossLastYear": [
   "Neto gubitak u posljednjoj godini",
   "Posljednja poslovna godina završila je neto gubitkom."
  ],
  "negativeFcf": [
   "Negativan slobodni novčani tok",
   "Poslovanje i ulaganja troše više novca nego što stvaraju; potrebno je vanjsko financiranje."
  ],
  "lowCurrentRatio": [
   "Tekući omjer ispod 1,0",
   "Kratkoročne obveze premašuju kratkotrajnu imovinu (tekući omjer {value}). Podnošljivo uz snažan operativni novčani tok."
  ],
  "interestCoverageCritical": [
   "Nedovoljno pokriće kamata",
   "EBIT pokriva troškove kamata samo {value} — servisiranje duga je ugroženo."
  ],
  "interestCoverageWeak": [
   "Slabo pokriće kamata",
   "EBIT pokriva troškove kamata samo {value}."
  ],
  "altmanDistress": [
   "Altman Z'' u zoni poteškoća",
   "Z''-score od {value} ispod je praga poteškoća od 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' u sivoj zoni",
   "Z''-score od {value}: ni u zoni poteškoća ni u sigurnoj zoni (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Neto dug bez pozitivne EBITDA",
   "Tvrtka ima neto dug, ali ne ostvaruje pozitivnu EBITDA za njegovo servisiranje."
  ],
  "highLeverage": [
   "Visoka zaduženost",
   "Neto dug iznosi {value} EBITDA."
  ],
  "revenueDecline": [
   "Značajan pad prihoda",
   "Prihodi su se promijenili za {value} u odnosu na prethodnu godinu."
  ],
  "heavyDilution": [
   "Snažno razrjeđivanje dioničara",
   "Broj dionica raste u prosjeku za {value} godišnje."
  ],
  "highSbc": [
   "Visoke naknade u dionicama",
   "Naknade u dionicama iznose {value} prihoda."
  ],
  "lowEarningsQuality": [
   "Niska kvaliteta dobiti",
   "Omjer obračunskih stavki od {value}: dobit znatno premašuje operativni novčani tok."
  ],
  "dividendUncovered": [
   "Dividenda nije pokrivena FCF-om",
   "Dividende premašuju slobodni novčani tok (omjer isplate {value})."
  ],
  "goodwillHeavy": [
   "Visok goodwill i nematerijalna imovina",
   "{value} ukupne imovine čine goodwill i nematerijalna imovina, izloženi umanjenju vrijednosti."
  ],
  "staleData": [
   "Zastarjeli financijski podaci",
   "Najnoviji godišnji izvještaj obuhvaća razdoblje koje je završilo {value}."
  ],
  "deepDrawdown": [
   "Dubok pad cijene dionice",
   "Cijena dionice pala je za {value} od petogodišnjeg vrha."
  ],
  "netCash": [
   "Pozicija neto novca",
   "Novac premašuje financijski dug za {value}."
  ],
  "highMargin": [
   "Visoka operativna marža",
   "Operativna marža od {value}."
  ],
  "highRoic": [
   "Visok povrat na uloženi kapital",
   "ROIC od {value}, znatno iznad uobičajenog troška kapitala."
  ],
  "alwaysProfitable": [
   "Profitabilna u svakoj analiziranoj godini",
   "Pozitivna neto dobit u svih {years} poslovnih godina."
  ],
  "strongGrowth": [
   "Snažan dugoročni rast",
   "CAGR prihoda od {value}."
  ],
  "buybacks": [
   "Neto otkup dionica",
   "Broj dionica pada u prosjeku za {value} godišnje."
  ],
  "altmanSafe": [
   "Altman Z'' u sigurnoj zoni",
   "Z''-score od {value}."
  ],
  "strongCashConversion": [
   "Snažna konverzija u novac",
   "Slobodni novčani tok iznosi {value} neto dobiti."
  ],
  "bankruptcyFiling": [
   "Zahtjev za stečaj ili prisilnu upravu",
   "Obrazac 8-K, točka 1.03, podnesen {value}."
  ],
  "restatement": [
   "Ispravljeni financijski izvještaji",
   "Obrazac 8-K, točka 4.02 (prethodno objavljeni financijski izvještaji više nisu pouzdani), podnesen {value}."
  ],
  "debtAcceleration": [
   "Ubrzano dospijeće duga",
   "Obrazac 8-K, točka 2.04 (događaj koji ubrzava dospijeće financijske obveze), podnesen {value}."
  ],
  "delistingNotice": [
   "Obavijest o isključenju s burze",
   "Obrazac 8-K, točka 3.01 (neispunjavanje pravila uvrštenja), podnesen {value}."
  ],
  "auditorChange": [
   "Promjena revizora",
   "Obrazac 8-K, točka 4.01 (promjena revizora), podnesen {value}."
  ],
  "insiderBuying": [
   "Kupnje insajdera",
   "Insajderi ({count}) kupili su dionice na otvorenom tržištu u ukupnom iznosu od {value} u posljednjih 12 mjeseci."
  ],
  "insiderSelling": [
   "Masovne prodaje insajdera",
   "Insajderi su prodali dionice u vrijednosti od {value} izvan unaprijed dogovorenih planova trgovanja u posljednjih 12 mjeseci ({share} tržišne kapitalizacije)."
  ]
 },
 "events": {
  "1.03": "Stečaj ili prisilna uprava",
  "4.02": "Ispravak financijskih izvještaja",
  "2.04": "Ubrzanje dospijeća financijske obveze",
  "3.01": "Obavijest o isključenju s burze / kršenje pravila uvrštenja",
  "5.01": "Promjena kontrole",
  "2.01": "Dovršeno stjecanje ili otuđenje",
  "2.05": "Restrukturiranje / gašenje djelatnosti",
  "2.06": "Značajno umanjenje vrijednosti",
  "4.01": "Promjena revizora",
  "1.01": "Značajan ugovor",
  "1.02": "Raskid značajnog ugovora",
  "1.05": "Značajan kibernetički incident",
  "5.02": "Promjena u upravi (glavni izvršni direktor, financijski direktor ili predsjednik upravnog odbora)"
 },
 "raw": {
  "income": "Račun dobiti i gubitka",
  "cashflow": "Izvještaj o novčanim tokovima",
  "balance": "Bilanca",
  "revenue": "Prihodi",
  "costOfRevenue": "Troškovi prodanih proizvoda i usluga",
  "grossProfit": "Bruto dobit",
  "researchAndDevelopment": "Istraživanje i razvoj",
  "operatingIncome": "Operativna dobit (EBIT)",
  "depreciationAndAmortization": "Amortizacija",
  "interestExpense": "Troškovi kamata",
  "pretaxIncome": "Dobit prije oporezivanja",
  "incomeTaxExpense": "Porez na dobit",
  "netIncome": "Neto dobit",
  "epsDiluted": "EPS, razrijeđeno ($)",
  "sharesDiluted": "Razrijeđene dionice (ponderirano)",
  "operatingCashFlow": "Operativni novčani tok",
  "capex": "Kapitalna ulaganja",
  "freeCashFlow": "Slobodni novčani tok",
  "shareBasedCompensation": "Naknade u dionicama",
  "dividendsPaid": "Isplaćene dividende",
  "buybacks": "Otkup dionica",
  "totalAssets": "Ukupna imovina",
  "currentAssets": "Kratkotrajna imovina",
  "cash": "Novac i novčani ekvivalenti",
  "inventory": "Zalihe",
  "accountsReceivable": "Potraživanja od kupaca",
  "goodwill": "Goodwill",
  "intangibleAssets": "Nematerijalna imovina",
  "totalLiabilities": "Ukupne obveze",
  "currentLiabilities": "Kratkoročne obveze",
  "totalDebt": "Financijski dug",
  "equity": "Kapital dioničara",
  "retainedEarnings": "Zadržana dobit",
  "sharesOutstanding": "Dionice u optjecaju"
 },
 "method": {
  "btPending": "Rezultati povratnog testa pojavit će se nakon sljedećeg ažuriranja podataka.",
  "btCaveats": "Ograde: obuhvaćene su samo tvrtke koje danas kotiraju (one u stečaju i isključene s burze nedostaju, pa su najslabije ocjene zapravo prošle još gore); cijene ne uključuju dividende; za svaku se godinu koriste današnja sektorska mjerila; ponderi su precizirani na istom razdoblju, pa stvarna moć predviđanja može biti nešto manja. Prošli rezultati nisu jamstvo za budućnost, i ovo nije savjet za ulaganje.",
  "btDividend": "Sigurnost dividende: sljedeće godine dividendu je smanjilo {safe} „sigurnih”, {moderate} „umjerenih”, {risky} „ugroženih” i {unsafe} „nesigurnih” isplatitelja.",
  "btRisk": "Rizik: u petini s najmanjim rizikom najveći pad unutar 12 mjeseci u prosjeku je iznosio {lo}, a {blo} dionica palo je za više od polovice; u najrizičnijoj petini {hi} i {bhi}.",
  "btLoss": "Gubitak sljedeće godine: od dviju tvrtki, od kojih je jedna sljedeće godine imala gubitak, a druga nije, ona s gubitkom imala je niži TeraScore s vjerojatnošću od {p} (tvrtka-godina: {y}; 50% = nagađanje, 100% = savršeno).",
  "btIc": "Na {share} od {k} testiranih datuma viši TeraScore u prosjeku je išao uz bolji rezultat u sljedećih 12 mjeseci (prosječna korelacija rangova {ic}; 0 = nema veze, 1 = savršeno).",
  "btWorst": "najslabijih 20%",
  "btBest": "najboljih 20%",
  "btDrawdown": "Prosj. najveći pad",
  "btBigLoss": "Pad >50%",
  "btExcess": "Višak prinosa (12 mj.)",
  "btAvg": "prosj. ocjena",
  "btQuintile": "Petina",
  "btIntro": "Metoda je izmjerena i na prošlim podacima. Svakog tromjesečja od {from} do {to} svaka je tvrtka ocijenjena onako kako je tada mogla biti — samo na temelju već objavljenih godišnjih izvještaja, po cijeni dionice toga dana — i uspoređena s onim što se dogodilo u sljedećih 12 mjeseci. Opažanja: {n}, tvrtki: {c}, tržišna vrijednost najmanje {mc}. Višak prinosa: promjena cijene tvrtke za 12 mjeseci umanjena za promjenu medijalne tvrtke istoga dana.",
  "btTitle": "Koliko je pouzdano? Povratni test",
  "runwayText": "Ako je slobodni novčani tok negativan (tvrtka troši novac), likvidnost može dobiti najviše onoliko koliko opravdava novčana rezerva: koliko godina likvidna imovina pokriva trenutačnu potrošnju ({bad} god. ili manje = 0 bodova, {good} god. ili više = 100).",
  "smoothText": "Marže i povrati na kapital (ROIC, ROE, ROA) ocjenjuju se {a}% na temelju posljednje godine i {b}% na temelju prosjeka dviju prethodnih godina, kako jedna iznimna godina ne bi poljuljala ocjenu. Stranica tvrtke prikazuje ovu trogodišnju osnovu ispod posljednje vrijednosti.",
  "title": "Metodologija",
  "intro": "Svaka se tvrtka preslikava u isti predložak podataka iz revidiranih godišnjih izvještaja (10-K / 20-F) i najnovijih tromjesečnih izvještaja (10-Q). Svaki se pokazatelj pretvara u ocjenu od 0 do 100; svaka dimenzija ponderirani je prosjek svojih pokazatelja. 100 je najbolje — osim kod rizika, gdje je manje bolje.",
  "scaling": "Ljestvica je linearna između vrijednosti koja donosi 0 bodova i vrijednosti koja donosi 100 bodova, a izvan tog raspona je ograničena. Unutar područja pokazatelji koji nedostaju preskaču se, a preostali ponderi ponovno se normaliziraju; područje se ocjenjuje samo ako su dostupni pokazatelji koji nose barem polovicu njegova pondera. Potpunost podataka dio je TeraScorea, prema ponderu, koji se temelji na podacima.",
  "partial": "Djelomična analiza. Kada u izvještajima tvrtke nedostaju podaci za neko područje, to se područje u TeraScoreu računa kao neutralnih {s} ili kao prosjek ostalih područja tvrtke ako je on niži — pa podaci koji nedostaju nikada ne mogu podići ocjenu (u povratnom testu tvrtke s prazninama prošle su lošije od potpunih s istom ocjenom). Brojke koje ne nedostaju, nego nisu definirane — rast od nulte ili negativne osnove, ROIC uz negativan uloženi kapital, omjer isplate tvrtke koja ne isplaćuje dividendu — umjesto toga izostavljaju se iz područja. Potpunost podataka dio je TeraScorea (prema ponderu) koji se temelji na podacima. Ispod 80% popisi prikazuju „◐ Djelomično · 65%” između naziva tvrtke i njezina TeraScorea; stranica tvrtke prikazuje postotak kad god je ispod 100% i navodi područja koja nedostaju. S manje od 5 područja koja se mogu ocijeniti nema TeraScorea („Malo podataka”); tvrtke koje još nemaju godišnji izvještaj prikazuju se kao „Bez analize” ili „Novo na burzi”.",
  "estimates": "Procijenjene brojke. Kada tvrtka ne iskazuje stavku operativne dobiti, operativna dobit (EBIT) aproksimira se kao dobit prije oporezivanja uvećana za troškove kamata (ne za banke i osiguravatelje). Tvrtka koja u posljednje dvije poslovne godine nije iskazala zaduživanje ni troškove kamata i čije su dugoročne obveze manje od 15% imovine smatra se nezaduženom. Stranica tvrtke navodi takve procjene; neobrađeni podaci prikazuju brojke onako kako su iskazane. Neke tvrtke iskazuju kapitalna ulaganja samo pod vlastitim XBRL elementom, koji standardni podaci SEC-a ne sadrže; tada se ona procjenjuju iz vlastitog omjera kapitalnih ulaganja i prihoda tvrtke u najbližim godinama u kojima je iskazano oboje, a inače iz amortizacije.",
  "bands": "Rasponi ocjena:",
  "profiles": "Banke, osiguravatelji i brokeri (financijski profil) i REIT-ovi (profil nekretnina) ocjenjuju se prilagođenim pokazateljima i pragovima, prikazanima ispod ondje gdje se razlikuju.",
  "overall": "TeraScore (ukupno)",
  "overallText": "Ponderirani prosjek devet fundamentalnih područja (motor 2.1). Ponderi su precizirani na temelju povratnog testa ispod: područja koja su bolje razdvajala buduće dobitnike i gubitnike, kao i buduće gubitke, imaju veći ponder (stabilnost, vrednovanje, novčani tok); ona manje uspješna imaju manji ponder (likvidnost, bilanca — koja zadržava udio od 30% u ocjeni rizika). Na stranici svake tvrtke „Što podiže, a što snižava TeraScore?” prikazuje doprinos svakog područja: 50 + Σ ponder × (ocjena − 50).",
  "riskTitle": "Rizik",
  "distressTitle": "Rizik financijskih poteškoća",
  "distressText": "Bodovi: Altman Z'' u zoni poteškoća +3 / u sivoj zoni +1; negativan kapital bez pozitivnog FCF-a +2; negativan FCF +1; neto gubitak +1; pokriće kamata < 1,5× +2; neto dug bez pozitivne EBITDA +1; omjer kapitala < 5% (financijske institucije) +2. 2–3 boda = povišen, 4+ = visok.",
  "trendTitle": "Dugoročni trend",
  "trendText": "70% dugoročni rast + 30% rast u posljednjoj godini, prilagođeno do ±5 bodova prema trendu operativne marže. ≥ 65 poboljšava se, 40–64 stabilno, < 40 pogoršava se. Opisuje prošlost; nije prognoza.",
  "stylesTitle": "Ulagački profil",
  "stylesText": "Kvaliteta: profitabilnost ≥ 70, stabilnost ≥ 70, bilanca ≥ 60, bez kritičnog upozorenja. Rast: dugoročni rast ≥ 70. Vrijednost: vrednovanje ≥ 65. Prihod: dividendni prinos ≥ 2% pokriven FCF-om. Špekulativno: kritično upozorenje ili gubici u većini godina.",
  "sectorTitle": "Usporedba sa sektorom",
  "sectorText": "Svaka se ocjena rangira i u odnosu na sve analizirane tvrtke iz istog sektora (percentil).",
  "limitsTitle": "Ograničenja",
  "limitsText": "Ocjene se oslanjaju isključivo na objavljene financijske podatke i tržišne cijene. Ne obuhvaćaju kvalitetu menadžmenta, konkurentski položaj, vijesti ni projekcije. Nije savjet za ulaganje.",
  "logosText": "Logotipi tvrtki potječu iz javnih slika logotipa servisa Financial Modeling Prep. Oni su žigovi odgovarajućih tvrtki i prikazuju se samo radi njihove identifikacije; tvrtka bez logotipa prikazuje se svojim inicijalom.",
  "profileGeneral": "Opće",
  "profileFinancial": "Financijski",
  "profileRealEstate": "Nekretnine",
  "eventsTitle": "Važni korporativni događaji (8-K)",
  "eventsText": "Važni događaji preuzimaju se iz obrazaca 8-K podnesenih SEC-u u posljednjih 12 mjeseci, uz zadržavanje samo točaka velikog utjecaja. Stečaj (1.03) i ispravak izvještaja (4.02) kritična su upozorenja; ubrzanje dospijeća duga (2.04), obavijest o isključenju s burze (3.01) i promjena revizora (4.01) upozorenja su, i svi oni povećavaju ocjene rizika i financijskih poteškoća.",
  "relativeTitle": "Ocjenjivanje u odnosu na sektor",
  "relativeText": "Marže, povrati, struktura kapitala, likvidnost i multiplikatori vrednovanja snažno ovise o djelatnosti. Za ove pokazatelje ocjena je 50% apsolutna (pragovi iznad) i 50% relativna: položaj tvrtke između 10. i 90. percentila etabliranih sličnih tvrtki iz sektora (tržišna kapitalizacija ≥ $300 mil., prihodi ≥ $50 mil., barem 20 sličnih tvrtki). Medijan sektora prikazan je pokraj svakog pokazatelja. Pokazatelji rasta, stabilnosti i rizika koriste samo apsolutne pragove.",
  "insiderText": "Iz tromjesečnih skupova podataka SEC obrasca 4 za posljednjih 12 mjeseci. Računaju se samo kupnje i prodaje na otvorenom tržištu. Kupnje barem dvaju insajdera u ukupnom iznosu od $100.000 ili više prednost su; prodaje izvan planova 10b5-1 veće od 1% tržišne kapitalizacije upozorenje su.",
  "currencyTitle": "Strane tvrtke i valute",
  "currencyText": "Strane tvrtke koje kotiraju u SAD-u (obrasci 20-F / 40-F, MSFI) analiziraju se u svojoj izvještajnoj valuti; pokazatelji ne ovise o valuti. Za vrednovanje se tržišna kapitalizacija u dolarima preračunava po referentnom tečaju ESB-a (drugi izvori za valute koje ESB ne objavljuje). Strani privatni izdavatelji ne podnose tromjesečne XBRL izvještaje, pa se njihovo vrednovanje temelji na posljednjoj poslovnoj godini.",
  "historyText": "Promjene TeraScorea ocjenjuju svaku tvrtku na kraju svake poslovne godine samo na temelju informacija dostupnih u tom trenutku: godišnjih izvještaja zaključno s tom godinom, događaja iz obrazaca 8-K u prethodnih 12 mjeseci i cijene dionice toga dana (tržišna kapitalizacija procjenjuje se iz današnje kapitalizacije, promjene cijene i promjene broja dionica). Za prošle godine ne koriste se brojke TTM, podaci o insajderima ni trenutačni tržišni podaci, a današnja sektorska mjerila primjenjuju se na sve godine. Osim toga, svako ažuriranje ponedjeljkom sprema snimku trenutačnog TeraScorea; promjene za 4 i 13 tjedana uspoređuju se s najnovijom snimkom koja je barem toliko stara.",
  "peersText": "Slične tvrtke biraju se iz istog sektora. Udaljenost svakog kandidata razlika je logaritama tržišne kapitalizacije, uvećana za kaznu jednaku razlici u veličini od 4,5 puta ako pripada drugoj djelatnosti, pa najprije dolaze tvrtke iz iste djelatnosti i slične veličine, dok se najveće tvrtke uparuju s najvećima u svojem sektoru. Uključene su samo ocijenjene tvrtke i po jedna klasa dionica po tvrtki.",
  "dividendText": "Sigurnost dividende procjenjuje, od 0 do 100, koliko je vjerojatno da će trenutačna dividenda biti zadržana: 75 ili više je sigurna, 55–74 umjerena, 35–54 ugrožena, ispod 35 nesigurna. Komponente bez podataka izostavljaju se, a preostali ponderi ponovno se skaliraju.",
  "portfolioText": "TeraScore, rizik i dividendni prinos portfelja prosjeci su ponderirani vrijednošću pozicija; P/E je ukupna vrijednost podijeljena dobiti koja pripada pozicijama (bez tvrtki s gubitkom). Upozorenja: pojedinačna pozicija iznad {p}, sektor iznad {s}, manje od {n} pozicija, kritična upozorenja, visok rizik financijskih poteškoća i slab TeraScore.",
  "quarterlyText": "Tromjesečne brojke obuhvaćaju posljednjih 12 tromjesečja iz izvještaja 10-Q i 10-K. Tokovi su tromjesečni iznosi: iskazani izravno ili izvedeni iz kumulativnih brojki od početka godine; četvrto tromjesečje godišnji je iznos umanjen za prvih devet mjeseci. Brojke po dionici i broj dionica prikazuju se samo kada su iskazani za tri mjeseca, prilagođeni za kasnije podjele dionica. Bilančne stavke su na dan završetka tromjesečja.",
  "portfolioEtfText": "Mogu se dodati i ETF-ovi (fondovi kojima se trguje na burzi): vrednuju se po dnevnoj cijeni, nemaju TeraScore i izostavljeni su iz provjera pozicija, sektora i broja pozicija jer je fond već diverzificiran. Njihov dividendni prinos potječe s Nasdaqa kada je objavljen; u suprotnom se može unijeti ručno.",
  "zero": "0 bod.",
  "hundred": "100 bod."
 },
 "ai": {
  "button": "Pitaj UI",
  "title": "UI pomoćnik",
  "intro": "Pitajte o brojkama na ovoj stranici ili o metodologiji – objasnit ću jednostavnim riječima.",
  "placeholder": "Upišite pitanje…",
  "send": "Pošalji",
  "close": "Zatvori",
  "note": "Odgovore piše umjetna inteligencija i mogu sadržavati pogreške. Nije investicijski savjet.",
  "error": "Pomoćnik trenutačno nije dostupan. Pokušajte ponovno kasnije.",
  "rate": "Previše pitanja s ove adrese. Pokušajte ponovno za sat vremena.",
  "thinking": "Razmišljam…",
  "qCompany1": "Što znači likvidnost?",
  "qCompany2": "Zašto je ocjena rizika ovakva?",
  "qCompany3": "Što podiže, a što spušta TeraScore?",
  "qMethod1": "Kako se izračunava TeraScore?",
  "qMethod2": "Što znači ocjena rizika?",
  "qMethod3": "Što je djelomična analiza?"
 }
};
