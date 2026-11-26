// Romanian.
export default {
 "meta": {
  "name": "Română",
  "short": "RO",
  "locale": "ro-RO"
 },
 "ui": {
  "classTitle": "Compania are mai multe clase de acțiuni listate, care diferă în principal prin dreptul de vot. Datele financiare și TeraScore sunt aceleași pentru toate.",
  "classNonVoting": "Fără drept de vot",
  "classVoting": "Cu drept de vot",
  "classLetter": "Clasa {c}",
  "slogan": "Instrumentul inteligent al investitorilor.",
  "notApplicable": "nu se aplică",
  "bdMissing": "◐ = domeniu care nu a putut fi evaluat din lipsă de date: contează ca un {s} neutru sau ca media celorlalte domenii ale companiei, dacă aceasta este mai mică, astfel încât datele lipsă nu pot ridica niciodată scorul.",
  "bdNote": "Pornind de la 50, fiecare domeniu adaugă sau scade ponderea sa × (scorul său − 50); suma este TeraScore ({s}, rotunjit).",
  "bdMissingShort": "fără date → {s}",
  "bdLowers": "Coboară",
  "bdLifts": "Ridică",
  "bdTitle": "Ce ridică și ce coboară TeraScore?",
  "basis3y": "bază pe 3 ani",
  "netCashLoss": "numerar net, pe pierdere: {s} pct.",
  "runwayCap": "limitează lichiditatea cât timp compania consumă numerar",
  "capLabel": "plafon",
  "yearsUnit": "{n} ani",
  "pfCurrency": "Monedă",
  "pfAllocTitle": "Alocare",
  "pfByHolding": "După poziție",
  "pfByCurrency": "După moneda de tranzacționare",
  "pfHistTitle": "Evoluția portofoliului",
  "pfHistLoading": "Se încarcă istoricul prețurilor…",
  "pfHistValue": "Valoarea pozițiilor actuale",
  "pfHistValueSub": "Lunar, ultimii doi ani, în {c} (prețurile străine la cursul de azi).",
  "pfHistMissing": "Fără istoric de prețuri, neincluse: {list}.",
  "pfHistScoreWeekly": "TeraScore al portofoliului, săptămânal",
  "pfHistScoreYearly": "TeraScore al portofoliului, pe ani fiscali",
  "pfHistScoreSub": "Companiile sunt ponderate după valoarea de azi (ETF-urile nu au TeraScore).",
  "etfAcc": "de acumulare",
  "etfDist": "de distribuție",
  "cmpPartialNote": "Din raportările acestor companii lipsesc date, deci analiza lor este parțială, iar scorurile sunt mai puțin sigure: {list}. Domeniile marcate „fără date” contează cel mult ca un 50 neutru, astfel încât datele lipsă nu ridică niciodată TeraScore.",
  "showMore": "Arată mai mult",
  "tagline": "Analiză fundamentală a acțiunilor, pe înțeles.",
  "heroText": "Fiecare companie listată pe Nasdaq, NYSE, NYSE American și Cboe, evaluată pe zece dimensiuni de investiție — profitabilitate, calitatea fluxului de numerar, soliditatea bilanțului, creștere, evaluare și risc — pe baza raportărilor auditate la SEC și comparată cu companiile din același sector.",
  "navCompanies": "Companii",
  "navCompare": "Compară",
  "navMethod": "Metodologie",
  "language": "Limbă",
  "searchPlaceholder": "Caută simbol sau nume de companie (de ex. AAPL, Apple)",
  "allSectors": "Toate sectoarele",
  "onlyAnalyzed": "Companii analizate",
  "allCompanies": "Toate companiile",
  "watchlist": "Listă de urmărire",
  "results": "{n} rezultate",
  "analyzedOf": "{a} analizate / {n} companii",
  "updated": "Actualizat {d}",
  "company": "Companie",
  "noData": "fără date",
  "noResults": "Nicio companie nu corespunde căutării.",
  "prev": "Anterioara",
  "next": "Următoarea",
  "demoBadge": "DEMO",
  "demoNote": "Companiile marcate DEMO arată cifre de exemplu aproximative până când actualizarea încarcă datele oficiale SEC.",
  "back": "Înapoi la listă",
  "tabAnalysis": "Analiză",
  "tabRaw": "Situații financiare",
  "demoNotice": "Date demo: cifre de exemplu aproximative. Actualizarea le înlocuiește cu raportările oficiale la SEC.",
  "notFound": "Nu s-a găsit nicio companie cu simbolul {t}.",
  "lastFy": "Ultimul an fiscal: {y}",
  "ttmBasis": "Evaluare pe cifrele ultimelor douăsprezece luni (TTM) până la {d}",
  "annualBasis": "Evaluare pe cifrele ultimului an fiscal",
  "overallScore": "TeraScore",
  "risk": "Risc",
  "distress": "Risc de dificultăți financiare",
  "trend": "Tendință pe termen lung",
  "coverage": "Completitudinea datelor",
  "watchEmpty": "Lista de urmărire este goală. Atinge steaua ☆ din rândul unei companii pentru a o adăuga aici.",
  "now": "Acum",
  "today": "Azi",
  "yesterday": "Ieri",
  "updatedLabel": "Actualizat",
  "searchFuzzy": "Nicio potrivire exactă pentru „{q}”. Nume similare:",
  "years": "{n} ani",
  "marketCap": "Capitalizare",
  "price": "Preț",
  "sector": "Sector",
  "industry": "Ramură",
  "sectionScores": "Fișă de scoruri",
  "sectionFlags": "Semnale de alarmă și puncte forte",
  "sectionCharts": "Evoluție istorică",
  "sectionKey": "Indicatori-cheie",
  "howCalculated": "Detaliile calculului",
  "weight": "pondere",
  "points": "pct.",
  "notScored": "n/a",
  "sectorRank": "Mai bună decât {p}% din companiile din {s}",
  "sectorRankShort": "Top {p}% în sector",
  "riskExplain": "Risc = 100 − scorul de siguranță. Siguranța provine în proporție de {f}% din fundamente (bilanț {bs}%, stabilitate {co}%, flux de numerar {cf}%, profitabilitate {pr}%, lichiditate {li}%) și de {m}% din volatilitatea și cea mai mare scădere a prețului acțiunii (când există istoric de prețuri). Semnalele de alarmă cresc riscul ({c} puncte pentru fiecare semnal critic și {w} pentru fiecare alt avertisment) pe o curbă de saturație: fiecare punct închide o parte din distanța rămasă până la 100, astfel încât chiar și companiile cele mai riscante rămân diferite între ele.",
  "noFlags": "Niciun semnal notabil.",
  "critical": "Critic",
  "warningTag": "Avertisment",
  "strength": "Punct forte",
  "footer": "TeraStockX calculează toate scorurile din situațiile financiare publice depuse la SEC. Scorurile descriu fundamentele istorice; nu sunt recomandări de investiții și nu prezic prețurile acțiunilor.",
  "engine": "Motor v{v}. Scorurile sunt calculate din date istorice raportate public; nu reprezintă recomandări de investiții.",
  "currencyNote": "Sume în {cur}.",
  "source": "Sursă",
  "retrieved": "preluat {d}",
  "downloadCsv": "Descarcă CSV",
  "downloadJson": "JSON (șablon)",
  "fiscalYear": "An fiscal",
  "ttm": "TTM",
  "computedRatios": "Indicatori calculați",
  "addWatch": "Adaugă la lista de urmărire",
  "removeWatch": "Elimină din lista de urmărire",
  "compareWith": "Compară",
  "compareTitle": "Compară companii",
  "compareHint": "Alege până la șase companii pentru a le compara una lângă alta.",
  "addCompany": "Adaugă companie (nume sau simbol)…",
  "remove": "Elimină",
  "dimension": "Dimensiune",
  "metric": "Indicator",
  "chartRevenue": "Venituri",
  "chartNetIncome": "Profit net",
  "chartFcf": "Flux de numerar liber",
  "chartMargin": "Marjă operațională",
  "chartPrice": "Prețul acțiunii (lunar, ajustat)",
  "chartRevenueSub": "anual",
  "chartNetIncomeSub": "anual (roșu = pierdere)",
  "chartFcfSub": "flux de numerar operațional − cheltuieli de capital",
  "chartMarginSub": "profit operațional / venituri",
  "chartPriceSub": "prețuri lunare de închidere, ultimii 6 ani", "chartPriceDaily": "Prețul acțiunii (zilnic)", "chartPriceDailySub": "prețuri zilnice de închidere din {d}", "pfCost": "Preț de cumpărare", "pfCostHint": "Prețul mediu plătit pe acțiune, în moneda de tranzacționare (opțional)", "pfGain": "Câștig/pierdere", "pfGainPartial": "{n} din {m} poziții cu preț de cumpărare", "pfGainHint": "Introdu prețurile de cumpărare ale pozițiilor tale", "pfGainNote": "Câștig/pierdere: prețul de azi față de prețul de cumpărare (mediu pe acțiune, în moneda de tranzacționare), la cursul de azi, fără dividende.", "pfBench": "S&P 500 în aceeași perioadă", "pfBenchBetter": "Portofoliul tău: cu {d} puncte procentuale mai bine", "pfBenchWorse": "Portofoliul tău: cu {d} puncte procentuale mai slab", "pfBenchSame": "Portofoliul tău a evoluat la fel", "pfRiskTitle": "Risc și diversificare", "pfVol": "Volatilitate (anuală)", "pfVolBench": "S&P 500: {v}", "pfDivers": "Diversificare", "pfDiversUnit": "poziții independente", "pfDiversSub": "din {n} poziții · corelație medie: {c}", "pfTopRisk": "Cea mai mare sursă de risc", "pfTopRiskSub": "{r} din risc, {w} din valoare", "pfRiskShare": "Parte din risc", "pfRiskNote": "Din prețurile zilnice de închidere începând cu {d}: cât oscilează valoarea portofoliului și cât adaugă fiecare poziție. Dacă partea din risc a unei poziții e mult peste ponderea ei, aceasta oscilează puternic sau se mișcă împreună cu celelalte. Diversificarea arată cu câte poziții independente echivalează portofoliul.", "pfRiskShort": "Excluse din cauza unui istoric de prețuri scurt sau lipsă: {list}.", "pfDivTitle": "Calendar de dividende", "pfDivTotal": "Dividende așteptate în următoarele 12 luni: {v}", "pfDivKnown": "după datele de plată", "pfDivEst": "estimat", "pfDivNote": "Titlurile de pe Nasdaq: plățile anunțate și datele de plată de anul trecut, la ultima sumă. Celelalte (*): estimate din randamentul dividendului, distribuite ca plățile trimestriale ale companiei (sau uniform). Sume înainte de impozit, la cursul de azi.", "pfDivNone": "Niciuna dintre pozițiile tale nu plătește dividende.", "alertDividendCut": "{t}: dividend redus ({date})", "pfAlertsTitle": "Alerte", "pfAlertsNone": "Nicio alertă nouă despre pozițiile tale din {d}.", "pfAlertsFirst": "De acum pozițiile tale sunt urmărite: dacă un TeraScore se schimbă mult, riscul crește, un dividend e redus sau apare un semnal critic ori un eveniment important, vei vedea aici.", "pfAlertsNote": "Alertele funcționează în acest browser; prin e-mail și pe telefon vor veni odată cu autentificarea.",
  "notEnough": "Date insuficiente.",
  "errorLoad": "Ceva n-a mers bine: {e}",
  "serveHint": "Dacă ai deschis fișierul direct, pornește un server web local (vezi README).",
  "profileFinancial": "Profil de instituție financiară: indicatorii de lichiditate, EBITDA și flux de numerar liber nu se aplică băncilor și asigurătorilor, așa că sunt excluși.",
  "profileRealEstate": "Profil imobiliar: pragurile de îndatorare și de evaluare sunt adaptate datoriei structural mai mari a REIT-urilor.",
  "styles": "Profil de investiție",
  "navNews": "Piață și evenimente",
  "navData": "Date financiare",
  "newsTitle": "Piață și evenimente",
  "newsIntro": "Evenimente importante pe care companiile listate în SUA le-au raportat oficial la SEC pe formularul 8-K în ultimele 12 luni: tipuri de evenimente cu impact mare (faliment, retratarea situațiilor financiare, notificări de delistare, schimbarea controlului, achiziții, restructurări, deprecieri, schimbarea auditorului, incidente de securitate cibernetică) și schimbări în conducerea companiilor mari; raportările de rutină sunt excluse.",
  "newsEmpty": "Niciun eveniment major în datele actuale.",
  "viewFiling": "Vezi raportarea",
  "sectionEvents": "Evenimente majore (ultimele 12 luni)",
  "eventsNone": "Niciun eveniment major raportat în ultimele 12 luni.",
  "latestEvents": "Cele mai recente evenimente majore",
  "allNews": "Toate evenimentele majore",
  "dataTitle": "Date financiare",
  "dataIntro": "Situații financiare brute în șablonul TeraStockX: contul de profit și pierdere, situația fluxurilor de numerar și bilanțul pentru până la zece ani fiscali plus ultimele douăsprezece luni, cu indicatori calculați. Descarcă în format CSV sau JSON.",
  "dataPick": "Alege o companie (nume sau simbol)",
  "sev5": "Critic",
  "sev4": "Major",
  "sev3": "Semnificativ",
  "sev2": "Notabil",
  "allSeverities": "Toate tipurile de evenimente",
  "onlyCritical": "Doar critice și majore",
  "openAnalysis": "Deschide analiza",
  "tabCompanies": "Acțiuni",
  "tabNews": "Evenimente",
  "tabData": "Date",
  "tabCompare": "Compară",
  "tabMethod": "Metodă",
  "newsTop": "Cele mai importante (evenimente critice; evenimente majore ale companiilor de peste $1B)",
  "filters": "Filtre de selecție",
  "filtersActive": "{n} active",
  "reset": "Resetează filtrele",
  "minScore": "TeraScore minim",
  "maxRisk": "Risc maxim",
  "anyValue": "Oricare",
  "minCap": "Capitalizare minimă",
  "minDividend": "Randament minim al dividendului",
  "exchange": "Bursă",
  "allExchanges": "Toate bursele",
  "styleFilter": "Profil de investiție:",
  "noCritical": "Fără semnale critice",
  "pe": "P/E",
  "dividendYieldShort": "Rand. div.",
  "sectorMedian": "Mediana sectorului",
  "insiderTitle": "Tranzacții ale insiderilor",
  "insiderBuys": "Cumpărări pe piața deschisă",
  "insiderSells": "Vânzări pe piața deschisă",
  "insiderNone": "Nicio cumpărare sau vânzare a insiderilor pe piața deschisă în ultimele 12 luni.",
  "insiderForeign": "Emitenții privați străini sunt scutiți de raportarea pe formularul 4; nu există date despre insideri.",
  "insiderPlanned": "Dintre care prin planuri de tranzacționare 10b5-1",
  "insiderPeriod": "Formulare 4 SEC, {from} – {to}. Sunt afișate doar cumpărările (cod P) și vânzările (cod S) pe piața deschisă; acordările, exercitarea opțiunilor și reținerile de impozit sunt excluse.",
  "insiderCount": "{n} tranzacții · {p} insideri",
  "insiderDate": "Data",
  "insiderName": "Insider",
  "insiderType": "Tranzacție",
  "insiderShares": "Acțiuni",
  "insiderValue": "Valoare",
  "insiderPurchase": "Cumpărare",
  "insiderSale": "Vânzare",
  "insiderPlanTag": "Plan 10b5-1",
  "alertsTitle": "Alerte pentru lista de urmărire",
  "alertsSeen": "Marchează toate ca văzute",
  "alertScore": "{t}: TeraScore s-a schimbat de la {from} la {to}",
  "alertRisk": "{t}: riscul a crescut de la {from} la {to}",
  "alertDistress": "{t}: riscul de dificultăți financiare este acum {level}",
  "alertEvent": "{t}: eveniment major nou – {event} ({date})",
  "alertCritical": "{t}: semnal critic nou – {flag}",
  "fxNote": "situații în {cur}, convertite la 1 {cur} = {rate} USD",
  "navTrend": "Variațiile TeraScore",
  "tabTrend": "Variații",
  "trendIntro": "Cum se schimbă în timp TeraScore al companiilor. Vizualizarea pe ani fiscali evaluează fiecare companie la sfârșitul fiecărui an fiscal folosind doar ce se știa atunci (rapoarte anuale, evenimente 8-K din cele 12 luni anterioare și prețul acțiunii la acea dată). La fiecare actualizare de luni se adaugă un instantaneu săptămânal, așa că variațiile pe 4 și 13 săptămâni apar după primele săptămâni.",
  "trendPeriod": "Perioadă",
  "trendPeriodFy": "Variație față de anul fiscal anterior",
  "trendPeriod4w": "Variație în 4 săptămâni",
  "trendPeriod13w": "Variație în 13 săptămâni",
  "trendUp": "Cele mai mari îmbunătățiri",
  "trendDown": "Cele mai mari scăderi",
  "trendChange": "Variație",
  "trendFrom": "de la {v}",
  "trendWeeklyEmpty": "Instantaneele săptămânale se colectează la fiecare actualizare de luni; această vizualizare se completează după primele săptămâni.",
  "trendNote": "Variațiile sunt în puncte TeraScore. Scorurile pe ani fiscali aplică și anilor trecuți reperele sectoriale de azi.",
  "trendAnnualChart": "TeraScore pe ani fiscali",
  "trendAnnualSub": "scorul de atunci, la sfârșitul fiecărui an fiscal",
  "trendWeeklyChart": "TeraScore, săptămânal",
  "trendWeeklySub": "instantaneu de la fiecare actualizare de luni",
  "trendAll": "Toate variațiile",
  "navPortfolio": "Portofoliu",
  "tabPortfolio": "Portofoliu",
  "addPortfolio": "Adaugă în portofoliu",
  "inPortfolio": "În portofoliu",
  "pdfReport": "Raport PDF",
  "minDivSafety": "Siguranța dividendului",
  "peersTitle": "Companii similare",
  "peersNone": "Nu există companii comparabile cu scor în acest sector.",
  "peerMedian": "Mediana companiilor comparabile",
  "peersSub": "Cele mai apropiate companii comparabile din {s}, după ramură și mărime.",
  "peersRank": "{t} ocupă locul #{r} din {n} în acest grup după TeraScore.",
  "peersCompare": "Compară în detaliu",
  "dividendTitle": "Dividend",
  "dividendSafety": "Siguranța dividendului",
  "dividendYield": "Randamentul dividendului",
  "dps": "Dividend pe acțiune",
  "dpsCagr": "Creșterea dividendului (CAGR pe 5 ani)",
  "yearsPaid": "Plătit fără întrerupere",
  "yearsN": "{n} ani",
  "yearsRaised": "Majorări consecutive",
  "dividendCuts": "Reduceri (10 ani)",
  "earningsPayout": "Rata de distribuire (profit)",
  "fcfPayout": "Rata de distribuire (flux de numerar liber)",
  "payoutUncovered": "neacoperit",
  "dividendNone": "Compania nu plătește dividend.",
  "dividendNoneShort": "fără dividend",
  "dividendNote": "Dividendul pe acțiune se calculează ca dividendele în numerar plătite împărțite la numărul diluat de acțiuni, așa că dividendele speciale apar ca salturi. Ratele de distribuire folosesc ultimele douăsprezece luni, când sunt disponibile.",
  "chartDps": "Dividend pe acțiune",
  "chartDpsSub": "dividende în numerar plătite / acțiuni diluate",
  "period": "Perioadă",
  "periodAnnual": "Anual",
  "periodQuarterly": "Trimestrial",
  "quarterEnd": "Trimestru încheiat la",
  "quarterlyNote": "Cifre pe trei luni. Când un trimestru este raportat doar cumulat de la începutul anului, cifra este cea cumulată minus cea a trimestrului anterior; trimestrul al patrulea este cifra anuală minus primele nouă luni.",
  "quarterlyNone": "Nu există cifre trimestriale.",
  "quarterlyForeign": "Emitenții privați străini depun doar rapoarte anuale (20-F / 40-F); cifrele trimestriale nu sunt disponibile.",
  "pfIntro": "Introdu pozițiile tale pentru a vedea TeraScore ponderat după valoare, riscul, venitul din dividende, alocarea pe sectoare și avertismentele de concentrare ale portofoliului. Portofoliul este salvat doar în acest browser.",
  "pfAdd": "Adaugă",
  "pfFromWatch": "Adaugă lista de urmărire (câte 1 acțiune)",
  "pfNeedShares": "Introdu numărul de acțiuni.",
  "pfEmpty": "Portofoliul este gol. Adaugă mai sus o companie și numărul de acțiuni.",
  "pfValue": "Valoarea portofoliului",
  "pfScore": "TeraScore ponderat",
  "pfIncome": "Venit anual din dividende",
  "pfPe": "P/E al portofoliului",
  "pfHoldings": "Poziții",
  "pfSectors": "Alocare pe sectoare",
  "pfOther": "Altele",
  "pfChecks": "Verificările portofoliului",
  "pfOk": "Niciun avertisment de concentrare sau de calitate.",
  "pfInfo": "Notă",
  "pfShares": "Acțiuni",
  "pfPrice": "Preț",
  "pfValueCol": "Valoare",
  "pfWeight": "Pondere",
  "pfNote": "Prețuri și scoruri la ultima actualizare a datelor ({d}). Valori în {c}; ETF-urile europene sunt cotate în propria monedă de tranzacționare și convertite la cursul de azi.",
  "reportTitle": "Raport despre companie",
  "printPdf": "Tipărește / salvează ca PDF",
  "printHint": "În fereastra de tipărire alege „Salvează ca PDF”.",
  "reportFinancials": "Rezumat financiar pe cinci ani",
  "profile": "Profil de investiție",
  "ratedCompanies": "Companii cu TeraScore",
  "installFooter": "Instalează aplicația",
  "installBanner": "Instalează TeraStockX ca aplicație pe telefon, tabletă sau computer.",
  "installHow": "Cum se instalează",
  "close": "Închide",
  "installTitle": "Instalează TeraStockX ca aplicație",
  "installIntro": "TeraStockX se poate instala direct de pe acest site, fără magazin de aplicații și cu o descărcare neglijabilă. Apoi se deschide din propria pictogramă, pe tot ecranul, ca orice altă aplicație, și arată mereu cele mai noi date.",
  "installDone": "Folosești aplicația instalată.",
  "installNow": "Instalează acum",
  "installYourDevice": "Dispozitivul tău",
  "installIos": "iPhone și iPad",
  "installAndroid": "Android",
  "installDesktop": "Computer (Chrome, Edge)",
  "installNote": "Aplicația este la fel ca site-ul: actualizările de date vin automat, iar lista de urmărire și portofoliul rămân pe acest dispozitiv. Pentru a o elimina, șterge-o ca pe orice altă aplicație.",
  "pfAddPlaceholder": "Companie sau ETF (nume sau simbol)…",
  "pfScoreCover": "acoperă {p} din portofoliu",
  "pfEtfs": "ETF-uri",
  "etfExpense": "Rata cheltuielilor {v}",
  "etfNoScore": "ETF-urile nu au TeraScore: un fond nu are situații financiare proprii.",
  "etfYieldInput": "Randamentul dividendului (%)",
  "etfNote": "ETF-urile nu au TeraScore; TeraScore ponderat și riscul se referă doar la companii.",
  "etfYieldMissing": "Sursa de date nu publică randamentul dividendului pentru {list}. Introdu-l în coloana randamentului (în %) pentru a-l include în venitul din dividende.",
  "screensTitle": "Căutări rapide",
  "colChangeFy": "Variație",
  "filtersAndScreens": "Filtre și căutări rapide",
  "maxPe": "P/E max.",
  "minDrop": "Sub maximul pe 12 luni",
  "dropAtLeast": "cel puțin {p}",
  "colFromHigh": "De la maxim",
  "contact": "Contact",
  "marketToday": "Piața azi",
  "marketMore": "Piață și evenimente",
  "eventsTitle": "Evenimente corporative majore (8-K)",
  "pfMax": "Max",
  "pfSince": "din {d}",
  "pfMoveValue": "Variația valorii",
  "pfMoveScore": "Variația TeraScore",
  "pfMoveNoScore": "Încă nu există suficient istoric: TeraScore-urile săptămânale ale metodei actuale sunt înregistrate din {d}.",
  "pfMoveFy": "Ultimul an financiar față de cel anterior (cu datele cunoscute atunci).",
  "pfMoveFyRange": "Ani financiari {a} → {b} (cu datele cunoscute atunci).",
  "pfMoveChartSub": "În {c}; prețurile străine la cursul de schimb de azi.",
  "pfMoveTop": "Ce a mișcat portofoliul",
  "pfMoveTopSub": "Pentru fiecare poziție: variația prețului, efectul asupra valorii portofoliului și variația TeraScore în perioadă.",
  "pfMoveMonthly": "Cu prețuri de sfârșit de lună (încă fără închideri zilnice): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "Acțiuni AI",
   "bigTech": "Big Tech",
   "semis": "Semiconductori",
   "banks": "Bănci",
   "energy": "Petrol și gaze",
   "crypto": "Acțiuni cripto"
  },
  "hlIndex": "{n} {v} azi",
  "hlTheme": "{n} {v} azi (cea mai bună {b}, cea mai slabă {w})",
  "hlUp": "{n} în creștere cu {v} azi",
  "hlDown": "{n} în scădere cu {v} azi",
  "hlReport": "{n} a publicat {f} ({form})",
  "annualReport": "raportul anual",
  "quarterlyReport": "raportul trimestrial",
  "hlScore": "TeraScore al {n} s-a schimbat cu {v} puncte (acum {o})",
  "hlListing": "Nou pe bursă: {n}",
  "none": "Nimic de afișat azi.",
  "notYet": "Rezumatul pieței apare după următoarea actualizare a datelor.",
  "bestWorst": "cea mai bună {b} · cea mai slabă {w}",
  "asOf": "Prețuri: {d} (întârziate cu aproximativ 15 minute). În zilele lucrătoare, prețurile, TeraScore, știrile și rapoartele noi se actualizează la fiecare 5 minute în timpul ședinței din SUA și la fiecare 10 minute înainte și după.",
  "headlines": "Mișcările mari de azi",
  "themesTitle": "Teme (variația de azi, ponderată după capitalizare)",
  "sectorsTitle": "Sectoarele azi",
  "gainers": "Cele mai mari creșteri (de la $2B)",
  "losers": "Cele mai mari scăderi (de la $2B)",
  "today": "Azi",
  "reports": "Rapoarte trimestriale și anuale noi",
  "filed": "Depus",
  "scoreMoves": "Variații mari ale TeraScore de ieri",
  "newListings": "Noi pe bursă",
  "listed": "Listată",
  "note": "Variații față de închiderea anterioară. Temele și sectoarele sunt ponderate după capitalizare. Variațiile TeraScore se compară cu scorul din ziua precedentă. În timpul ședinței, variația zilei apare pentru companiile de peste aproximativ 2 miliarde de dolari și pentru cele mai mari fonduri; pentru cele mai mici, după actualizarea zilnică.",
  "noFilings": "Încă nu există rapoarte financiare la SEC",
  "notScoredYet": "Încă fără scor",
  "notScoredText": "TeraScore necesită cel puțin un raport anual (10-K sau 20-F). Companiile listate recent îl primesc după primul raport anual; până atunci se afișează prețul, capitalizarea și eventualele cifre trimestriale.",
  "lastReport": "Ultimul raport",
  "storiesTitle": "Știri principale",
  "storiesNote": "Anunțuri importante și mișcări mari de preț ale companiilor mari (capitalizare de peste 10 miliarde de dolari) din ultimele zile. Titlurile provin din raportările companiilor la SEC, în engleza originală.",
  "kind": {
   "leadership": "Schimbare în conducere",
   "deal": "Fuziune sau achiziție",
   "results": "Rezultate",
   "critical": "Eveniment critic",
   "major": "Eveniment major",
   "restructuring": "Restructurare",
   "cyber": "Incident de securitate cibernetică",
   "board": "Schimbare în consiliu",
   "other": "Anunț",
   "move": "Mișcare mare de preț"
  },
  "when": {
   "pre": "înainte de deschidere",
   "post": "după închidere",
   "day": "azi",
   "last": "ultima ședință"
  , "lastPost": "după ultima închidere"},
  "preNote": "Înainte de deschidere: variațiile zilnice de mai jos sunt cele din ședința anterioară ({d}). Mișcările companiilor mari înainte de deschidere sunt la Știri principale.",
  "postNote": "După închidere: variațiile zilnice de mai jos sunt cele din ședința de azi; mișcările companiilor mari după închidere sunt la Știri principale.",
  "readMore": "Comunicat de presă (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "În acest moment nu există știri mari de la companiile mari.", "holidayNote": "Astăzi este sărbătoare în SUA: bursa este închisă, iar SEC nu acceptă depuneri, așa că nu există știri noi despre companii. Următoarele depuneri pot apărea de la {d}.", "weekendNote": "În weekend bursa este închisă, iar SEC nu acceptă depuneri, așa că nu există știri noi despre companii. Următoarele depuneri pot apărea de la {d}.", "marketHolidayNote": "Bursa americană este închisă astăzi din cauza unei sărbători; depunerile companiilor continuă să sosească.", "secHolidayNote": "SEC nu acceptă depuneri astăzi (sărbătoare federală), așa că nu există știri noi despre companii; bursa este deschisă. Următoarele depuneri pot apărea de la {d}.", "holidayShort": "Sărbătoare în SUA: bursa închisă, nicio știre nouă despre companii.", "weekendShort": "Weekend: bursa închisă, nicio știre nouă despre companii.", "checked": "Ultima verificare: {d}", "nextFilings": "următoarele depuneri de la {d}",
  "moreNews": "Toate știrile",
  "asOfShort": "Prețuri: {d}, întârziate cu aproximativ 15 minute",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "de la știre",
  "sinceNote": "Lângă o știre: variația prețului acțiunii de la știre, față de ultimul preț de închidere dinaintea ei (inclusiv tranzacțiile dinainte de deschidere și de după închidere). Lângă o mișcare mare de preț: mișcarea zilei, dinainte de deschidere sau de după închidere."
 },
 "screens": {
  "top": {
   "name": "Cel mai mare TeraScore",
   "desc": "Toate companiile cu scor, de la cel mai mare TeraScore."
  },
  "bestRiskReward": {
   "name": "Cel mai bun scor, cel mai mic risc",
   "desc": "TeraScore de cel puțin 70 și risc de cel mult 30, fără avertisment critic, capitalizare de la $300M; ordonate după TeraScore minus risc."
  },
  "safeLongTerm": {
   "name": "Cele mai sigure pe termen lung",
   "desc": "TeraScore ≥ 65, risc ≤ 25, stabilitate ≥ 70, soliditatea bilanțului ≥ 60, risc mic de dificultăți financiare, fără avertisment critic, capitalizare de la $2B; ordonate după risc scăzut, stabilitate și bilanț."
  },
  "lowRisk": {
   "name": "Cel mai mic risc",
   "desc": "Risc de cel mult 20 și fără avertisment critic; de la cel mai mic risc."
  },
  "improvers": {
   "name": "Cea mai mare îmbunătățire anul trecut",
   "desc": "TeraScore crescut cu cel puțin 10 puncte față de anul fiscal anterior, capitalizare de la $300M; de la cea mai mare creștere."
  },
  "growth": {
   "name": "Creștere rapidă",
   "desc": "Creșterea din ultimul an fiscal ≥ 75 și creșterea pe termen lung ≥ 70, cu TeraScore de cel puțin 55, capitalizare de la $300M."
  },
  "value": {
   "name": "Calitate subevaluată",
   "desc": "Scor de evaluare ≥ 70 (ieftină față de profit și flux de numerar), TeraScore ≥ 65, profitabilitate ≥ 60, fără avertisment critic, capitalizare de la $300M."
  },
  "dividend": {
   "name": "Dividende sigure",
   "desc": "Siguranța dividendului ≥ 75 și randamentul dividendului de cel puțin 2,5%, capitalizare de la $300M; de la cel mai mare randament."
  },
  "largeQuality": {
   "name": "Companii mari de calitate",
   "desc": "Capitalizare de cel puțin $50B și TeraScore de cel puțin 70."
  },
  "highRisk": {
   "name": "Risc ridicat",
   "desc": "Risc de cel puțin 70, sau risc ridicat de dificultăți financiare cu risc de cel puțin 55, capitalizare de la $300M; de la cele mai riscante. Acțiuni speculative: atenție."
  },
  "decliners": {
   "name": "Cea mai mare scădere anul trecut",
   "desc": "TeraScore scăzut cu cel puțin 10 puncte față de anul fiscal anterior, capitalizare de la $300M; de la cea mai mare scădere."
  },
  "dip": {
   "name": "Sub maxim, acum mai ieftine",
   "desc": "Companii de calitate (TeraScore ≥ 65, risc ≤ 40, fără avertisment critic, capitalizare de la $300M) al căror preț este cu 20–50% sub maximul pe 12 luni (închideri lunare); de la cel mai bun TeraScore. Scăderile mai mari sunt excluse: semnalează mai des probleme decât o reducere."
  },
  "lowPe": {
   "name": "P/E scăzut",
   "desc": "Companii profitabile cu P/E între 3 și 12 al căror scor de evaluare este și el de cel puțin 60 (EV/EBIT și randamentul fluxului de numerar confirmă că sunt ieftine), TeraScore ≥ 60, stabilitate ≥ 50, fără avertisment critic, capitalizare de la $300M. Un P/E sub 3 provine de obicei dintr-un câștig unic și este exclus."
  }
 },
 "install": {
  "benefit1": "Pictogramă proprie pe ecranul principal, lângă celelalte aplicații",
  "benefit2": "Se deschide pe tot ecranul, fără bara de adrese a browserului",
  "benefit3": "Pornește mai repede, iar ultimele companii văzute se deschid și offline",
  "benefit4": "Se actualizează singură: fără reinstalare, fără magazin de aplicații",
  "iphone1": "Deschide această pagină în Safari.",
  "iphone2": "Atinge butonul Partajează (pătratul cu o săgeată în sus) – pe iPhone jos, pe iPad în dreapta sus.",
  "iphone3": "Derulează în jos și atinge „Adaugă pe ecranul principal”.",
  "iphone4": "Atinge „Adaugă” în dreapta sus. Pictograma TeraStockX apare pe ecranul principal.",
  "android1": "Deschide această pagină în Chrome.",
  "android2": "Atinge „Instalează acum” mai sus sau deschide meniul (⋮) din dreapta sus.",
  "android3": "Alege „Instalează aplicația” (sau „Adaugă pe ecranul de pornire”).",
  "android4": "Confirmă cu „Instalează”. Aplicația apare printre aplicațiile tale și pe ecranul de pornire.",
  "desktop1": "Deschide această pagină în Chrome sau Edge.",
  "desktop2": "Dă clic pe „Instalează acum” mai sus sau pe pictograma de instalare din capătul drept al barei de adrese.",
  "desktop3": "Confirmă cu „Instalează”.",
  "desktop4": "TeraStockX se deschide în propria fereastră și poate fi pornită din meniul Start, din Dock sau din Launchpad."
 },
 "dividend": {
  "safe": "Sigur",
  "moderate": "Moderat",
  "risky": "La risc",
  "unsafe": "Nesigur",
  "na": "Fără scor",
  "safeText": "Bine acoperit de profit și de fluxul de numerar liber, cu un istoric solid.",
  "moderateText": "Acoperit, dar cu marjă limitată; o încetinire l-ar putea pune sub presiune.",
  "riskyText": "Acoperirea este redusă sau bilanțul este tensionat; o reducere este o posibilitate reală.",
  "unsafeText": "Neacoperit de profit sau de fluxul de numerar ori redus recent; o nouă reducere este probabilă.",
  "naText": "Date insuficiente pentru o evaluare.",
  "parts": {
   "priceStability": "Stabilitatea prețului acțiunii",
   "fcfPayout": "Acoperire prin fluxul de numerar liber",
   "earningsPayout": "Acoperire prin profit",
   "leverage": "Îndatorare",
   "trackRecord": "Istoric de plăți",
   "stability": "Stabilitatea profitului"
  },
  "partsText": {
   "priceStability": "Scorul riscului de piață (volatilitatea și cea mai mare scădere a prețului acțiunii): o scădere abruptă precedă adesea o reducere a dividendului.",
   "fcfPayout": "Dividende plătite / flux de numerar liber: 100 de puncte la 40% sau mai puțin (REIT: 80%), 0 puncte la 120% sau mai mult (REIT: 130%) ori la flux de numerar liber negativ.",
   "earningsPayout": "Dividende plătite / profit net: 100 de puncte la 50% sau mai puțin, 0 puncte la 150% sau mai mult ori la pierdere. Nu se evaluează pentru REIT-uri.",
   "leverage": "Datorie netă / EBITDA: 100 de puncte la 1× sau mai puțin, 0 puncte la 5× sau mai mult. Nu se evaluează pentru bănci, asigurători și REIT-uri.",
   "trackRecord": "Ani de plată fără întrerupere (60%) și majorări consecutive (40%), până la 10 ani; minus 35 de puncte pentru fiecare reducere de peste 10% în ultimii 10 ani.",
   "stability": "Ponderea anilor profitabili din ultimii cinci."
  }
 },
 "pw": {
  "position": "{t} reprezintă {w} din portofoliu (peste {l}).",
  "sector": "{s} reprezintă {w} din portofoliu (peste {l}).",
  "few": "Doar {n} poziții: mai puțin de {m} poziții expun portofoliul riscului unei singure companii.",
  "critical": "Avertisment critic: {list}.",
  "distress": "Risc ridicat de dificultăți financiare: {list}.",
  "weak": "TeraScore sub {s}: {list}.",
  "unscored": "Fără scor (date insuficiente): {list}."
 },
 "ocr": {
  "button": "Dintr-o captură de ecran",
  "loading": "Se încarcă recunoașterea textului (o singură dată, aproximativ 7 MB)…",
  "reading": "Se citește imaginea… {p}%",
  "privacy": "Imaginea nu părăsește dispozitivul: este citită în browser.",
  "found": "Poziții recunoscute: {n}",
  "check": "Verifică simbolurile și numărul de acțiuni, corectează-le dacă e nevoie, apoi adaugă-le.",
  "inPortfolio": "Acum în portofoliu: {n} acțiuni (vor fi înlocuite)",
  "add": "Adaugă în portofoliu",
  "cancel": "Anulează",
  "close": "Închide",
  "none": "Nu s-au găsit acțiuni în imagine. Încearcă o captură mai clară și mai mare, în care simbolul sau numele companiei și numărul de acțiuni se văd bine, sau adaugă-le manual.",
  "failed": "Recunoașterea textului a eșuat: {e}",
  "needShares": "Introdu numărul de acțiuni pentru fiecare rând bifat.",
  "hint": "Sfat: capturile listei de poziții din aplicația brokerului funcționează cel mai bine; poți selecta mai multe deodată.",
  "readingN": "Se citește imaginea {i} din {n}… {p}%",
  "foundImages": "Poziții recunoscute: {n} (din {k} imagini)",
  "estimated": "≈ valoare ÷ preț, te rog verifică"
 },
 "dq": {
  "partial": "Parțială",
  "partialTitle": "Analiză parțială: {p}% din TeraScore se bazează pe date. Neevaluat din lipsă de date (contează cel mult 50): {d}.",
  "partialTitleParts": "Analiză parțială: {p}% din TeraScore se bazează pe date; lipsesc mai mulți indicatori.",
  "little": "Puține date",
  "littleTitle": "Date insuficiente pentru TeraScore: cel puțin 5 din cele 9 domenii trebuie să poată fi evaluate.",
  "none": "Fără analiză",
  "noneTitle": "Nu există încă un raport anual cu date financiare.",
  "newListing": "Listare nouă",
  "newTitle": "Listată recent: primește TeraScore după primul raport anual.",
  "newBadge": "NOU",
  "legend": "„Parțială · 65%” = analiza este incompletă: doar această parte din TeraScore se bazează pe date. Se marchează sub 80%. Un domeniu fără date contează cel mult ca un {s} neutru, astfel încât o lipsă nu poate ridica niciodată scorul, dar rezultatul este mai puțin sigur.",
  "noticePartialTitle": "Analiză parțială: {p}% din TeraScore se bazează pe date.",
  "noticePartial": "Aceste domenii nu au putut fi evaluate deoarece în raportările companiei lipsesc datele: {d}. Ele contează ca un {s} neutru sau ca media celorlalte domenii ale companiei, dacă aceasta este mai mică, astfel încât datele lipsă nu pot ridica niciodată TeraScore; scorul este mai puțin sigur decât la o companie analizată complet.",
  "noticePartialParts": "În raportările companiei lipsesc unii indicatori. În fiecare domeniu, aceștia sunt omiși, iar ponderile celorlalți cresc proporțional, astfel încât TeraScore este mai puțin sigur decât la o companie analizată complet.",
  "noticeLittle": "TeraScore necesită cel puțin 5 domenii evaluabile; această companie are {n}. Domeniile care au putut fi evaluate sunt afișate mai jos.",
  "estimated": "Estimat din alte cifre raportate: {list}.",
  "est": {
   "capex": "cheltuieli de capital ≈ raportul obișnuit al companiei dintre cheltuielile de capital și venituri, sau amortizarea (compania le raportează doar printr-un element XBRL propriu)",
   "operatingIncome": "profit operațional ≈ profit înainte de impozitare (sau profit net + impozit pe profit) + cheltuieli cu dobânzile (compania nu raportează o linie de profit operațional)",
   "totalDebt": "datorie = 0 (niciun împrumut și nicio cheltuială cu dobânzile raportate în ultimii doi ani)"
  },
  "partialShort": "Parțială · {p}%",
  "coverageBadge": "Analiză completă în proporție de {p}% (lipsesc unele date)",
  "partialMobile": "{p}% date"
 },
 "dims": {
  "profitability": {
   "name": "Profitabilitate",
   "q": "Cât de eficient transformă compania veniturile și capitalul în profit?",
   "summary": "Marjă operațională {operatingMargin}, marjă netă {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Calitatea fluxului de numerar",
   "q": "Este profitul raportat susținut de numerar?",
   "summary": "Marjă FCF {fcfMargin}; conversie în FCF de {fcfConversion} din profitul net; rata angajamentelor {accrualRatio}; remunerare în acțiuni {sbcToRevenue} din venituri."
  },
  "balanceSheet": {
   "name": "Soliditatea bilanțului",
   "q": "Cât de îndatorată este compania față de profit și de capitalurile proprii?",
   "summary": "Datorie netă/EBITDA {netDebtToEbitda}, datorie/capitaluri proprii {debtToEquity}, acoperirea dobânzilor {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Lichiditate",
   "q": "Pot fi acoperite datoriile pe termen scurt din activele pe termen scurt?",
   "summary": "Lichiditate curentă {currentRatio}, lichiditate rapidă {quickRatio}, lichiditate imediată {cashRatio}."
  },
  "growth1y": {
   "name": "Creștere (ultimul an fiscal)",
   "q": "Dinamica anuală a vânzărilor, profitului și fluxului de numerar.",
   "summary": "Venituri {revenueYoY}, profit operațional {operatingIncomeYoY}, EPS {epsYoY}, flux de numerar liber {fcfYoY} față de anul precedent."
  },
  "growthLong": {
   "name": "Creștere pe termen lung",
   "q": "Creștere medie anuală pe cel mult cinci ani.",
   "summary": "CAGR pe {windowYears} ani: venituri {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, valoare contabilă pe acțiune {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilitate",
   "q": "Cât de previzibile și de rezistente sunt rezultatele?",
   "summary": "Profitabilă în {profitableYearsRatio} din ani, FCF pozitiv în {fcfPositiveRatio}; volatilitatea creșterii veniturilor {revenueVolatility}; scorul F Piotroski {piotroski}."
  },
  "capitalAllocation": {
   "name": "Alocarea capitalului",
   "q": "Cât de bine este capitalul returnat acționarilor și reinvestit?",
   "summary": "Număr de acțiuni {shareChangeYearly} pe an; randament pentru acționari {shareholderYield}; distribuirea dividendului {payoutRatio} din FCF; variația ROIC {roicChange}."
  },
  "valuation": {
   "name": "Evaluare",
   "q": "Cât de scumpă este acțiunea față de fundamente?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, randament FCF {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Risc",
   "q": "Riscul total al investiției (cu cât mai mic, cu atât mai bine).",
   "summary": "Risc de dificultăți financiare: {distress}. Volatilitate anualizată {volatility}; scădere maximă (5 ani) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Risc de piață",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Excelent",
  "strong": "Puternic",
  "moderate": "Moderat",
  "weak": "Slab",
  "poor": "Precar",
  "na": "Fără date"
 },
 "riskGrades": {
  "excellent": "Foarte scăzut",
  "strong": "Scăzut",
  "moderate": "Moderat",
  "weak": "Ridicat",
  "poor": "Foarte ridicat",
  "na": "Fără date"
 },
 "distress": {
  "low": "Scăzut",
  "medium": "Crescut",
  "high": "Ridicat",
  "lowText": "Niciun semn de dificultăți financiare în datele actuale.",
  "mediumText": "Câteva semnale de avertizare; situația merită urmărită.",
  "highText": "Mai mulți indicatori arată dificultăți financiare importante."
 },
 "outlook": {
  "up": "În îmbunătățire",
  "flat": "Stabil",
  "down": "În deteriorare",
  "unknown": "Istoric insuficient",
  "upText": "Fundamentele s-au îmbunătățit constant în ultimii ani.",
  "flatText": "Fundamentele au rămas în mare neschimbate.",
  "downText": "Fundamentele s-au deteriorat în ultimii ani.",
  "unknownText": "Sunt necesari cel puțin trei ani fiscali."
 },
 "verdict": {
  "excellent": "Fundamente excepțional de solide în majoritatea dimensiunilor.",
  "strong": "Companie sănătoasă financiar, cu fundamente solide.",
  "moderate": "Profil fundamental mixt, cu puncte forte și slabe clare.",
  "weak": "Fundamente slabe; se impune prudență sporită.",
  "poor": "Slăbiciuni fundamentale grave.",
  "na": "Date insuficiente pentru o evaluare de ansamblu."
 },
 "styles": {
  "quality": "Calitate",
  "growth": "Creștere",
  "value": "Valoare",
  "income": "Venit",
  "speculative": "Speculativă"
 },
 "sectors": {
  "technology": "Tehnologie",
  "healthcare": "Sănătate",
  "financials": "Financiar",
  "realEstate": "Imobiliare",
  "consumerDiscretionary": "Bunuri de consum discreționare",
  "consumerStaples": "Bunuri de consum de bază",
  "industrials": "Industrie",
  "energy": "Energie",
  "utilities": "Utilități",
  "communication": "Servicii de comunicații",
  "materials": "Materiale",
  "shell": "Companii-fantomă / SPAC-uri",
  "other": "Altele"
 },
 "metrics": {
  "cashRunway": [
   "Autonomie de numerar",
   "Câți ani ar finanța activele lichide (numerarul sau activele circulante fără stocuri și creanțe) fluxul de numerar liber negativ actual. Plafonează scorul de lichiditate: 0,75 ani sau mai puțin = 0 puncte, 3 ani sau mai mult = 100."
  ],
  "grossMargin": [
   "Marjă brută",
   "Profit brut / venituri."
  ],
  "operatingMargin": [
   "Marjă operațională",
   "Profit operațional (EBIT) / venituri."
  ],
  "netMargin": [
   "Marjă netă",
   "Profit net / venituri."
  ],
  "fcfMargin": [
   "Marjă FCF",
   "Flux de numerar liber (flux de numerar operațional − cheltuieli de capital) / venituri."
  ],
  "roe": [
   "Rentabilitatea capitalurilor proprii (ROE)",
   "Profit net / capitaluri proprii medii. Nu se evaluează când capitalurile proprii sunt negative."
  ],
  "roa": [
   "Rentabilitatea activelor (ROA)",
   "Profit net / total active mediu."
  ],
  "roic": [
   "Rentabilitatea capitalului investit (ROIC)",
   "NOPAT (EBIT × (1 − cota efectivă de impozit)) / capital investit mediu (capitaluri proprii + datorie − numerar)."
  ],
  "fcfConversion": [
   "Conversie în FCF",
   "Flux de numerar liber / profit net. La pierdere netă, un FCF pozitiv primește 60 de puncte."
  ],
  "accrualRatio": [
   "Rata angajamentelor",
   "(Profit net − flux de numerar operațional) / total active mediu. Valorile mari arată profit nesusținut de numerar."
  ],
  "sbcToRevenue": [
   "Remunerare în acțiuni / venituri",
   "Remunerare nemonetară care îi diluează pe acționari."
  ],
  "capexToRevenue": [
   "Intensitatea cheltuielilor de capital",
   "Cheltuieli de capital / venituri."
  ],
  "currentRatio": [
   "Lichiditate curentă",
   "Active circulante / datorii curente."
  ],
  "quickRatio": [
   "Lichiditate rapidă",
   "(Active circulante − stocuri) / datorii curente."
  ],
  "cashRatio": [
   "Lichiditate imediată",
   "Numerar și echivalente / datorii curente."
  ],
  "debtToEquity": [
   "Datorie / capitaluri proprii",
   "Datorie financiară / capitaluri proprii. Capitalurile proprii negative primesc 0."
  ],
  "equityRatio": [
   "Rata capitalurilor proprii",
   "Capitaluri proprii / total active."
  ],
  "liabilitiesToAssets": [
   "Datorii / active",
   "Total datorii / total active."
  ],
  "netDebt": [
   "Datorie netă",
   "Datorie financiară − numerar. Negativ = numerar net."
  ],
  "netDebtToEbitda": [
   "Datorie netă / EBITDA",
   "Câți ani de EBITDA sunt necesari pentru rambursarea datoriei nete. Numerarul net primește 100 când EBITDA este pozitiv și 50 când nu este (numerarul se consumă); datoria netă cu EBITDA negativ primește 0."
  ],
  "interestCoverage": [
   "Acoperirea dobânzilor",
   "EBIT / cheltuieli cu dobânzile. Fără cheltuieli cu dobânzile primește 100."
  ],
  "goodwillToAssets": [
   "Fond comercial și imobilizări necorporale / active",
   "Partea din active provenită din achiziții; expusă la depreciere."
  ],
  "payoutRatio": [
   "Distribuirea dividendului (din FCF)",
   "Dividende plătite / flux de numerar liber. Nu se evaluează dacă nu se plătește dividend."
  ],
  "bookValuePerShare": [
   "Valoare contabilă pe acțiune",
   "Capitaluri proprii / acțiuni în circulație."
  ],
  "altmanZ": [
   "Scorul Altman Z''",
   "6,56·(capital de lucru/active) + 3,26·(rezultat reportat/active) + 6,72·(EBIT/active) + 1,05·(capitaluri proprii/datorii). < 1,1 dificultate, > 2,6 sigur."
  ],
  "piotroski": [
   "Scorul F Piotroski",
   "Nouă teste da/nu privind profitabilitatea, îndatorarea, lichiditatea și eficiența operațională (0–9)."
  ],
  "revenueYoY": [
   "Creșterea veniturilor (an/an)",
   "Variație față de anul fiscal anterior."
  ],
  "operatingIncomeYoY": [
   "Creșterea profitului operațional (an/an)",
   "Variație față de anul fiscal anterior; nedefinită pornind de la o bază negativă."
  ],
  "netIncomeYoY": [
   "Creșterea profitului net (an/an)",
   "Variație față de anul fiscal anterior; nedefinită pornind de la o bază negativă."
  ],
  "epsYoY": [
   "Creșterea EPS (an/an)",
   "Profitul diluat pe acțiune față de anul precedent. 0 puncte dacă ultimul an a fost pe pierdere."
  ],
  "fcfYoY": [
   "Creșterea FCF (an/an)",
   "Fluxul de numerar liber față de anul precedent."
  ],
  "revenueCagr": [
   "CAGR al veniturilor",
   "Rata medie anuală de creștere pe cel mult cinci ani."
  ],
  "epsCagr": [
   "CAGR al EPS",
   "Creșterea medie anuală a EPS diluat pe cel mult cinci ani."
  ],
  "fcfCagr": [
   "CAGR al FCF",
   "Creșterea medie anuală a fluxului de numerar liber pe cel mult cinci ani."
  ],
  "bookValuePerShareCagr": [
   "CAGR al valorii contabile pe acțiune",
   "Creșterea medie anuală a capitalurilor proprii pe acțiune."
  ],
  "revenueGrowthYearsRatio": [
   "Ani cu creșterea veniturilor",
   "Ponderea anilor din perioadă cu venituri mai mari decât în anul precedent."
  ],
  "marginTrend": [
   "Variația marjei operaționale",
   "Variația marjei operaționale de la primul la ultimul an al perioadei (puncte procentuale)."
  ],
  "roicChange": [
   "Variația ROIC",
   "Variația ROIC de la primul la ultimul an al perioadei (puncte procentuale)."
  ],
  "profitableYearsRatio": [
   "Ani profitabili",
   "Ponderea anilor din perioadă cu profit net pozitiv."
  ],
  "fcfPositiveRatio": [
   "Ani cu FCF pozitiv",
   "Ponderea anilor din perioadă cu flux de numerar liber pozitiv."
  ],
  "revenueVolatility": [
   "Volatilitatea creșterii veniturilor",
   "Abaterea standard a creșterii anuale a veniturilor."
  ],
  "marginVolatility": [
   "Volatilitatea marjei",
   "Abaterea standard a marjei operaționale (a marjei nete la instituțiile financiare)."
  ],
  "shareChangeYearly": [
   "Variația numărului de acțiuni (anual)",
   "Pozitiv = diluare, negativ = răscumpărări."
  ],
  "marketCap": [
   "Capitalizare de piață",
   "Prețul acțiunii × acțiuni în circulație."
  ],
  "enterpriseValue": [
   "Valoarea întreprinderii (EV)",
   "Capitalizare + datorie financiară − numerar."
  ],
  "peRatio": [
   "Preț / profit (P/E)",
   "Capitalizare / profit net (TTM). Pierderile primesc 0."
  ],
  "psRatio": [
   "Preț / vânzări (P/S)",
   "Capitalizare / venituri (TTM)."
  ],
  "pbRatio": [
   "Preț / valoare contabilă (P/BV)",
   "Capitalizare / capitaluri proprii."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Valoarea întreprinderii / profit operațional (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Valoarea întreprinderii / EBITDA (TTM)."
  ],
  "fcfYield": [
   "Randament FCF",
   "Flux de numerar liber (TTM) / capitalizare."
  ],
  "pfcfRatio": [
   "Preț / FCF",
   "Capitalizare / flux de numerar liber (TTM)."
  ],
  "pegRatio": [
   "Raport PEG",
   "P/E împărțit la CAGR al EPS (în %). Creșterea negativă sau pierderile primesc 0."
  ],
  "dividendYield": [
   "Randamentul dividendului",
   "Dividende plătite (TTM) / capitalizare."
  ],
  "shareholderYield": [
   "Randament pentru acționari",
   "(Dividende + răscumpărări de acțiuni, TTM) / capitalizare."
  ],
  "priceReturn1y": [
   "Prețul acțiunii, 1 an",
   "Randamentul total al prețului ajustat în 12 luni."
  ],
  "priceCagr5y": [
   "CAGR al prețului, 5 ani",
   "Randamentul anualizat al prețului ajustat."
  ],
  "volatility": [
   "Volatilitate (anualizată)",
   "Abaterea standard a randamentelor logaritmice lunare pe 36 de luni × √12."
  ],
  "maxDrawdown": [
   "Scădere maximă (5 ani)",
   "Cea mai mare scădere a prețului acțiunii de la vârf la minim."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Capitaluri proprii negative",
   "Datoriile depășesc activele. Poate fi rezultatul unor răscumpărări agresive, dar adesea indică presiune financiară."
  ],
  "persistentLosses": [
   "Pierderi persistente",
   "Pierdere netă în cel puțin doi ani fiscali consecutivi."
  ],
  "lossLastYear": [
   "Pierdere netă în ultimul an",
   "Cel mai recent an fiscal s-a încheiat cu pierdere netă."
  ],
  "negativeFcf": [
   "Flux de numerar liber negativ",
   "Operațiunile și investițiile consumă mai mult numerar decât generează; este nevoie de finanțare externă."
  ],
  "lowCurrentRatio": [
   "Lichiditate curentă sub 1,0",
   "Datoriile curente depășesc activele circulante (lichiditate curentă {value}). Gestionabil cu un flux de numerar operațional puternic."
  ],
  "interestCoverageCritical": [
   "Acoperire insuficientă a dobânzilor",
   "EBIT acoperă cheltuielile cu dobânzile doar {value} — serviciul datoriei este în pericol."
  ],
  "interestCoverageWeak": [
   "Acoperire slabă a dobânzilor",
   "EBIT acoperă cheltuielile cu dobânzile doar {value}."
  ],
  "altmanDistress": [
   "Altman Z'' în zona de dificultate",
   "Scorul Z'' de {value} este sub pragul de dificultate de 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' în zona gri",
   "Scorul Z'' de {value}: nici în dificultate, nici în zona sigură (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Datorie netă fără EBITDA pozitiv",
   "Compania are datorie netă, dar nu generează EBITDA pozitiv pentru a o deservi."
  ],
  "highLeverage": [
   "Îndatorare ridicată",
   "Datoria netă echivalează cu {value} din EBITDA."
  ],
  "revenueDecline": [
   "Scădere semnificativă a veniturilor",
   "Veniturile s-au modificat cu {value} față de anul precedent."
  ],
  "heavyDilution": [
   "Diluare puternică a acționarilor",
   "Numărul de acțiuni crește în medie cu {value} pe an."
  ],
  "highSbc": [
   "Remunerare în acțiuni ridicată",
   "Remunerarea în acțiuni echivalează cu {value} din venituri."
  ],
  "lowEarningsQuality": [
   "Calitate scăzută a profitului",
   "Rata angajamentelor de {value}: profitul depășește semnificativ fluxul de numerar operațional."
  ],
  "dividendUncovered": [
   "Dividend neacoperit de FCF",
   "Dividendele depășesc fluxul de numerar liber (rata de distribuire {value})."
  ],
  "goodwillHeavy": [
   "Fond comercial și imobilizări necorporale ridicate",
   "{value} din totalul activelor reprezintă fond comercial și imobilizări necorporale, expuse la depreciere."
  ],
  "staleData": [
   "Date financiare învechite",
   "Cel mai recent raport anual acoperă perioada încheiată la {value}."
  ],
  "deepDrawdown": [
   "Scădere profundă a prețului",
   "Prețul acțiunii a scăzut cu {value} de la maximul pe 5 ani."
  ],
  "netCash": [
   "Poziție de numerar net",
   "Numerarul depășește datoria financiară cu {value}."
  ],
  "highMargin": [
   "Marjă operațională ridicată",
   "Marjă operațională de {value}."
  ],
  "highRoic": [
   "Rentabilitate ridicată a capitalului investit",
   "ROIC de {value}, mult peste costul obișnuit al capitalului."
  ],
  "alwaysProfitable": [
   "Profitabilă în fiecare an analizat",
   "Profit net pozitiv în toți cei {years} ani fiscali."
  ],
  "strongGrowth": [
   "Creștere solidă pe termen lung",
   "CAGR al veniturilor de {value}."
  ],
  "buybacks": [
   "Răscumpărări nete de acțiuni",
   "Numărul de acțiuni scade în medie cu {value} pe an."
  ],
  "altmanSafe": [
   "Altman Z'' în zona sigură",
   "Scorul Z'' de {value}."
  ],
  "strongCashConversion": [
   "Conversie puternică în numerar",
   "Fluxul de numerar liber echivalează cu {value} din profitul net."
  ],
  "bankruptcyFiling": [
   "Cerere de faliment sau administrare judiciară",
   "Formularul 8-K, punctul 1.03, depus la {value}."
  ],
  "restatement": [
   "Situații financiare retratate",
   "Formularul 8-K, punctul 4.02 (situațiile financiare publicate anterior nu mai sunt de încredere), depus la {value}."
  ],
  "debtAcceleration": [
   "Datorie devenită exigibilă anticipat",
   "Formularul 8-K, punctul 2.04 (eveniment care accelerează o obligație financiară), depus la {value}."
  ],
  "delistingNotice": [
   "Notificare de delistare",
   "Formularul 8-K, punctul 3.01 (nerespectarea unei reguli de listare), depus la {value}."
  ],
  "auditorChange": [
   "Schimbarea auditorului",
   "Formularul 8-K, punctul 4.01 (schimbarea auditorului), depus la {value}."
  ],
  "insiderBuying": [
   "Cumpărări ale insiderilor",
   "{count} insideri au cumpărat acțiuni pe piața deschisă în valoare totală de {value} în ultimele 12 luni."
  ],
  "insiderSelling": [
   "Vânzări masive ale insiderilor",
   "Insiderii au vândut acțiuni de {value} în afara planurilor de tranzacționare prestabilite în ultimele 12 luni ({share} din capitalizare)."
  ]
 },
 "events": {
  "1.03": "Faliment sau administrare judiciară",
  "4.02": "Retratarea situațiilor financiare",
  "2.04": "Exigibilitatea anticipată a unei obligații financiare",
  "3.01": "Notificare de delistare / încălcarea regulilor de listare",
  "5.01": "Schimbarea controlului",
  "2.01": "Achiziție sau vânzare finalizată",
  "2.05": "Restructurare / încetarea activităților",
  "2.06": "Depreciere semnificativă",
  "4.01": "Schimbarea auditorului",
  "1.01": "Contract important",
  "1.02": "Încetarea unui contract important",
  "1.05": "Incident de securitate cibernetică important",
  "5.02": "Schimbare în conducere (director general, director financiar sau președinte)"
 },
 "raw": {
  "income": "Contul de profit și pierdere",
  "cashflow": "Situația fluxurilor de numerar",
  "balance": "Bilanț",
  "revenue": "Venituri",
  "costOfRevenue": "Costul vânzărilor",
  "grossProfit": "Profit brut",
  "researchAndDevelopment": "Cercetare și dezvoltare",
  "operatingIncome": "Profit operațional (EBIT)",
  "depreciationAndAmortization": "Amortizare",
  "interestExpense": "Cheltuieli cu dobânzile",
  "pretaxIncome": "Profit înainte de impozitare",
  "incomeTaxExpense": "Impozit pe profit",
  "netIncome": "Profit net",
  "epsDiluted": "EPS diluat ($)",
  "sharesDiluted": "Acțiuni diluate (medie ponderată)",
  "operatingCashFlow": "Flux de numerar operațional",
  "capex": "Cheltuieli de capital",
  "freeCashFlow": "Flux de numerar liber",
  "shareBasedCompensation": "Remunerare în acțiuni",
  "dividendsPaid": "Dividende plătite",
  "buybacks": "Răscumpărări de acțiuni",
  "totalAssets": "Total active",
  "currentAssets": "Active circulante",
  "cash": "Numerar și echivalente",
  "inventory": "Stocuri",
  "accountsReceivable": "Creanțe comerciale",
  "goodwill": "Fond comercial",
  "intangibleAssets": "Imobilizări necorporale",
  "totalLiabilities": "Total datorii",
  "currentLiabilities": "Datorii curente",
  "totalDebt": "Datorie financiară",
  "equity": "Capitaluri proprii",
  "retainedEarnings": "Rezultat reportat",
  "sharesOutstanding": "Acțiuni în circulație"
 },
 "method": {
  "btPending": "Rezultatele testului retrospectiv apar după următoarea actualizare a datelor.",
  "btCaveats": "Rezerve: sunt incluse doar companiile listate azi (lipsesc cele falimentate și delistate, așa că scorurile cele mai slabe au avut în realitate rezultate și mai proaste); prețurile nu includ dividendele; pentru fiecare an se folosesc reperele sectoriale de azi; ponderile au fost ajustate pe aceeași perioadă, deci puterea predictivă reală poate fi ceva mai mică. Rezultatele trecute nu garantează rezultatele viitoare, iar aceasta nu este o recomandare de investiții.",
  "btDividend": "Siguranța dividendului: în anul următor și-au redus dividendul {safe} dintre plătitorii „siguri”, {moderate} dintre cei „moderați”, {risky} dintre cei „la risc” și {unsafe} dintre cei „nesiguri”.",
  "btRisk": "Risc: în cincimea cu cel mai mic risc, cea mai mare scădere în 12 luni a fost în medie de {lo}, iar {blo} dintre acțiuni au pierdut peste jumătate; în cincimea cea mai riscantă {hi} și {bhi}.",
  "btLoss": "Pierdere în anul următor: dintre două companii, una cu pierdere în anul următor și cealaltă fără, cea cu pierdere avea TeraScore mai mic cu o probabilitate de {p} ({y} companii-an; 50% = la întâmplare, 100% = perfect).",
  "btIc": "La {share} din cele {k} date testate, un TeraScore mai mare a fost însoțit în medie de 12 luni ulterioare mai bune (corelația medie a rangurilor {ic}; 0 = nicio legătură, 1 = perfectă).",
  "btWorst": "cele mai slabe 20%",
  "btBest": "cele mai bune 20%",
  "btDrawdown": "Scădere max. medie",
  "btBigLoss": "Scădere >50%",
  "btExcess": "Randament excedentar (12 luni)",
  "btAvg": "scor mediu",
  "btQuintile": "Cincime",
  "btIntro": "Metoda a fost măsurată și pe date istorice. În fiecare trimestru de la {from} la {to}, fiecare companie a fost evaluată așa cum ar fi putut fi atunci – doar cu rapoartele anuale deja publice, la prețul acțiunii din acea zi – și comparată cu ce s-a întâmplat în următoarele 12 luni. {n} observații, {c} companii, capitalizare de cel puțin {mc}. Randament excedentar: variația prețului companiei pe 12 luni minus cea a companiei mediane la aceeași dată.",
  "btTitle": "Cât de fiabil este? Test retrospectiv",
  "runwayText": "Dacă fluxul de numerar liber este negativ (compania consumă numerar), lichiditatea poate primi cel mult scorul justificat de autonomia de numerar: câți ani acoperă activele lichide consumul actual ({bad} ani sau mai puțin = 0 puncte, {good} ani sau mai mult = 100).",
  "smoothText": "Marjele și randamentele capitalului (ROIC, ROE, ROA) se evaluează în proporție de {a}% pe ultimul an și de {b}% pe media celor doi ani anteriori, ca un singur an excepțional să nu clatine scorul. Pagina companiei arată această bază pe 3 ani sub cea mai recentă valoare.",
  "title": "Metodologie",
  "intro": "Fiecare companie este adusă în același șablon de date din rapoartele anuale auditate (10-K / 20-F) și cele mai recente rapoarte trimestriale (10-Q). Fiecare indicator este transformat într-un scor de 0–100; fiecare dimensiune este media ponderată a indicatorilor săi. 100 este cel mai bun — cu excepția riscului, unde mai mic înseamnă mai bine.",
  "scaling": "Scala este liniară între valoarea care primește 0 puncte și cea care primește 100 de puncte și este plafonată în afara acestui interval. În cadrul unui domeniu, indicatorii lipsă sunt omiși, iar ponderile rămase sunt renormalizate; un domeniu este evaluat doar când sunt disponibili indicatori care cumulează cel puțin jumătate din ponderea sa. Completitudinea datelor este partea din TeraScore, după pondere, care se bazează pe date.",
  "partial": "Analiză parțială. Când în raportările unei companii lipsesc datele pentru un domeniu, acel domeniu contează în TeraScore ca un {s} neutru sau ca media celorlalte domenii ale companiei, dacă aceasta este mai mică – astfel încât datele lipsă nu pot ridica niciodată scorul (în testul retrospectiv, companiile cu lipsuri au avut rezultate mai slabe decât cele complete cu același scor). Cifrele care nu lipsesc, ci sunt nedefinite – creșterea de la o bază zero sau negativă, ROIC cu capital investit negativ, rata de distribuire a unei companii fără dividend – sunt în schimb excluse din domeniu. Completitudinea datelor este partea din TeraScore (după pondere) care se bazează pe date. Sub 80%, listele afișează „◐ Parțială · 65%” între numele companiei și TeraScore; pagina companiei arată procentul ori de câte ori este sub 100% și numește domeniile lipsă. Cu mai puțin de 5 domenii evaluabile nu există TeraScore („Puține date”); companiile fără raport anual sunt afișate ca „Fără analiză” sau „Listare nouă”.",
  "estimates": "Cifre estimate. Când o companie nu raportează o linie de profit operațional, profitul operațional (EBIT) se aproximează ca profit înainte de impozitare plus cheltuieli cu dobânzile (nu pentru bănci și asigurători). O companie care nu a raportat împrumuturi sau cheltuieli cu dobânzile în ultimii doi ani fiscali și ale cărei datorii pe termen lung sunt sub 15% din active este considerată fără datorii. Pagina companiei enumeră aceste estimări; datele brute arată cifrele așa cum au fost raportate. Unele companii raportează cheltuielile de capital doar printr-un element XBRL propriu, pe care datele standard SEC nu îl conțin; atunci acestea se estimează din raportul propriu al companiei dintre cheltuielile de capital și venituri în anii cei mai apropiați în care au fost raportate ambele, altfel din amortizare.",
  "bands": "Intervale de notare:",
  "profiles": "Băncile, asigurătorii și brokerii (profil financiar) și REIT-urile (profil imobiliar) sunt evaluate cu indicatori și praguri adaptate, afișate mai jos acolo unde diferă.",
  "overall": "TeraScore (general)",
  "overallText": "Media ponderată a celor nouă domenii fundamentale (motor 2.1). Ponderile au fost ajustate pe baza testului retrospectiv de mai jos: domeniile care au separat mai bine viitorii câștigători și perdanți, precum și viitoarele pierderi, cântăresc mai mult (stabilitate, evaluare, flux de numerar); cele care au reușit mai puțin cântăresc mai puțin (lichiditate, bilanț – care își păstrează o pondere de 30% în scorul de risc). Pe pagina fiecărei companii, „Ce ridică și ce coboară TeraScore?” arată contribuția fiecărui domeniu: 50 + Σ pondere × (scor − 50).",
  "riskTitle": "Risc",
  "distressTitle": "Risc de dificultăți financiare",
  "distressText": "Puncte: Altman Z'' în zona de dificultate +3 / zona gri +1; capitaluri proprii negative fără FCF pozitiv +2; FCF negativ +1; pierdere netă +1; acoperirea dobânzilor < 1,5× +2; datorie netă fără EBITDA pozitiv +1; rata capitalurilor proprii < 5% (instituții financiare) +2. 2–3 puncte = crescut, 4+ = ridicat.",
  "trendTitle": "Tendință pe termen lung",
  "trendText": "70% creștere pe termen lung + 30% creșterea din ultimul an, ajustată cu până la ±5 puncte după tendința marjei operaționale. ≥ 65 în îmbunătățire, 40–64 stabil, < 40 în deteriorare. Descrie trecutul; nu este o prognoză.",
  "stylesTitle": "Profil de investiție",
  "stylesText": "Calitate: profitabilitate ≥ 70, stabilitate ≥ 70, bilanț ≥ 60, fără semnal critic. Creștere: creștere pe termen lung ≥ 70. Valoare: evaluare ≥ 65. Venit: randamentul dividendului ≥ 2% acoperit de FCF. Speculativă: semnal critic sau pierderi în majoritatea anilor.",
  "sectorTitle": "Comparație sectorială",
  "sectorText": "Fiecare scor este clasat și față de toate companiile analizate din același sector (percentilă).",
  "limitsTitle": "Limitări",
  "limitsText": "Scorurile se bazează doar pe datele financiare raportate și pe prețurile de piață. Nu surprind calitatea conducerii, poziția competitivă, știrile sau perspectivele companiei. Nu reprezintă recomandări de investiții.",
  "logosText": "Siglele companiilor provin din imaginile publice de sigle ale Financial Modeling Prep. Sunt mărci comerciale ale companiilor respective și sunt afișate doar pentru identificarea lor; o companie fără siglă este afișată cu inițiala sa.",
  "profileGeneral": "General",
  "profileFinancial": "Financiar",
  "profileRealEstate": "Imobiliare",
  "eventsTitle": "Evenimente corporative majore (8-K)",
  "eventsText": "Evenimentele importante provin din formularele 8-K depuse la SEC în ultimele 12 luni, păstrând doar punctele cu impact mare. Falimentul (1.03) și retratarea (4.02) sunt semnale critice; exigibilitatea anticipată a datoriei (2.04), notificarea de delistare (3.01) și schimbarea auditorului (4.01) sunt avertismente, iar toate cresc scorurile de risc și de dificultăți financiare.",
  "relativeTitle": "Evaluare relativă la sector",
  "relativeText": "Marjele, randamentele, structura capitalului, lichiditatea și multiplii de evaluare depind mult de ramură. Pentru acești indicatori scorul este 50% absolut (pragurile de mai sus) și 50% relativ: poziția companiei între percentila 10 și 90 a companiilor consacrate din sector (capitalizare ≥ $300M, venituri ≥ $50M, cel puțin 20 de companii comparabile). Mediana sectorului apare lângă fiecare indicator. Indicatorii de creștere, stabilitate și risc folosesc doar praguri absolute.",
  "insiderText": "Din seturile de date trimestriale ale formularelor 4 SEC din ultimele 12 luni. Contează doar cumpărările și vânzările pe piața deschisă. Cumpărările a cel puțin doi insideri în total de $100.000 sau mai mult sunt un punct forte; vânzările în afara planurilor 10b5-1 de peste 1% din capitalizare sunt un avertisment.",
  "currencyTitle": "Companii străine și monede",
  "currencyText": "Companiile străine listate în SUA (formularele 20-F / 40-F, IFRS) sunt analizate în moneda lor de raportare; indicatorii nu depind de monedă. Pentru evaluare, capitalizarea în dolari este convertită la cursul de referință BCE (alte surse pentru monedele pe care BCE nu le publică). Emitenții privați străini nu depun rapoarte trimestriale XBRL, așa că evaluarea lor folosește ultimul an fiscal.",
  "historyText": "Variațiile TeraScore evaluează fiecare companie la sfârșitul fiecărui an fiscal doar cu informațiile disponibile atunci: rapoartele anuale până în acel an, evenimentele 8-K din cele 12 luni anterioare și prețul acțiunii la acea dată (capitalizarea este estimată din capitalizarea de azi, variația prețului și variația numărului de acțiuni). Pentru anii trecuți nu se folosesc cifre TTM, date despre insideri sau date de piață actuale, iar reperele sectoriale de azi se aplică tuturor anilor. În plus, fiecare actualizare de luni salvează un instantaneu al TeraScore actual; variațiile pe 4 și 13 săptămâni se compară cu cel mai recent instantaneu cel puțin la fel de vechi.",
  "peersText": "Companiile similare sunt alese din același sector. Distanța fiecărui candidat este diferența logaritmilor capitalizării, plus o penalizare egală cu o diferență de mărime de 4,5× dacă aparține altei ramuri; astfel apar întâi companiile din aceeași ramură și de mărime apropiată, iar cele mai mari companii sunt comparate cu cele mai mari din sectorul lor. Sunt incluse doar companiile cu scor și o singură clasă de acțiuni pe companie.",
  "dividendText": "Siguranța dividendului estimează, de la 0 la 100, cât de probabil este ca dividendul actual să fie menținut: 75 sau mai mult este sigur, 55–74 moderat, 35–54 la risc, sub 35 nesigur. Componentele fără date sunt omise, iar ponderile rămase sunt rescalate.",
  "portfolioText": "TeraScore, riscul și randamentul dividendului portofoliului sunt medii ponderate cu valoarea pozițiilor; P/E este valoarea totală împărțită la profitul ce revine pozițiilor (fără companiile pe pierdere). Avertismente: o singură poziție peste {p}, un sector peste {s}, mai puțin de {n} poziții, avertismente critice, risc ridicat de dificultăți financiare și TeraScore slab.",
  "quarterlyText": "Cifrele trimestriale acoperă ultimele 12 trimestre din rapoartele 10-Q și 10-K. Fluxurile sunt sume pe trei luni: raportate direct sau deduse din cifrele cumulate de la începutul anului; trimestrul al patrulea este suma anuală minus primele nouă luni. Cifrele pe acțiune și numărul de acțiuni apar doar când sunt raportate pentru cele trei luni, ajustate pentru divizările ulterioare. Elementele de bilanț sunt la sfârșitul trimestrului.",
  "portfolioEtfText": "Se pot adăuga și ETF-uri (fonduri tranzacționate la bursă): sunt evaluate la prețul zilnic, nu au TeraScore și sunt excluse din verificările de poziție, sector și număr de poziții, deoarece un fond este deja diversificat. Randamentul dividendului lor provine de la Nasdaq când este publicat; altfel poate fi introdus manual.",
  "zero": "0 pct.",
  "hundred": "100 pct."
 },
 "ai": {
  "button": "Întreabă AI",
  "title": "Asistent AI",
  "intro": "Întreabă despre cifrele de pe această pagină sau despre metodologie – îți explic pe înțeles.",
  "placeholder": "Scrie întrebarea ta…",
  "send": "Trimite",
  "close": "Închide",
  "note": "Răspunsurile sunt scrise de AI și pot conține greșeli. Nu reprezintă consultanță de investiții.",
  "error": "Asistentul nu este disponibil acum. Încearcă din nou mai târziu.",
  "rate": "Prea multe întrebări de la această adresă. Încearcă din nou peste o oră.",
  "thinking": "Mă gândesc…",
  "qCompany1": "Ce înseamnă lichiditatea?",
  "qCompany2": "De ce scorul de risc este acesta?",
  "qCompany3": "Ce ridică și ce scade TeraScore?",
  "qMethod1": "Cum se calculează TeraScore?",
  "qMethod2": "Ce înseamnă scorul de risc?",
  "qMethod3": "Ce este o analiză parțială?"
 }
};
