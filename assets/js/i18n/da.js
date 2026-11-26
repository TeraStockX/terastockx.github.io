// Danish.
export default {
 "meta": {
  "name": "Dansk",
  "short": "DA",
  "locale": "da-DK"
 },
 "ui": {
  "classTitle": "Selskabet har flere børsnoterede aktieklasser, som primært adskiller sig ved stemmeretten. Regnskabstallene og TeraScore er de samme for dem alle.",
  "classNonVoting": "Uden stemmeret",
  "classVoting": "Med stemmeret",
  "classLetter": "Klasse {c}",
  "slogan": "Det smarte værktøj til investorer.",
  "notApplicable": "ikke relevant",
  "bdMissing": "◐ = område, der ikke kunne vurderes på grund af manglende data: det tæller som neutrale {s}, eller som gennemsnittet af selskabets øvrige områder, hvis det er lavere, så manglende data aldrig kan løfte scoren.",
  "bdNote": "Med udgangspunkt i 50 lægger hvert område sin vægt × (sin score − 50) til eller trækker den fra; summen er TeraScore ({s}, afrundet).",
  "bdMissingShort": "ingen data → {s}",
  "bdLowers": "Trækker ned",
  "bdLifts": "Løfter",
  "bdTitle": "Hvad løfter, og hvad trækker TeraScore ned?",
  "basis3y": "3-årig basis",
  "netCashLoss": "nettokontanter, underskud: {s} point",
  "runwayCap": "begrænser likviditeten, mens selskabet brænder penge af",
  "capLabel": "loft",
  "yearsUnit": "{n} år",
  "pfCurrency": "Valuta",
  "pfAllocTitle": "Fordeling",
  "pfByHolding": "Pr. beholdning",
  "pfByCurrency": "Pr. handelsvaluta",
  "pfHistTitle": "Porteføljens udvikling",
  "pfHistLoading": "Indlæser kurshistorik…",
  "pfHistValue": "Værdi af nuværende beholdninger",
  "pfHistValueSub": "Månedligt, de seneste to år, i {c} (udenlandske kurser til dagens valutakurs).",
  "pfHistMissing": "Uden kurshistorik, ikke medregnet: {list}.",
  "pfHistScoreWeekly": "Porteføljens TeraScore, uge for uge",
  "pfHistScoreYearly": "Porteføljens TeraScore pr. regnskabsår",
  "pfHistScoreSub": "Selskaberne er vægtet efter dagens værdi (ETF'er har ingen TeraScore).",
  "etfAcc": "akkumulerende",
  "etfDist": "udloddende",
  "cmpPartialNote": "Der mangler data i disse selskabers indberetninger, så analysen er delvis og scorerne mindre sikre: {list}. Områder markeret »ingen data« tæller højst som neutrale 50, så manglende data løfter aldrig TeraScore.",
  "showMore": "Vis flere",
  "tagline": "Fundamental aktieanalyse, gjort klar.",
  "heroText": "Hvert selskab noteret på Nasdaq, NYSE, NYSE American og Cboe vurderes på ti investeringsdimensioner — rentabilitet, pengestrømmens kvalitet, balancens styrke, vækst, værdiansættelse og risiko — ud fra reviderede SEC-indberetninger og sammenlignes med selskaber i samme sektor.",
  "navCompanies": "Selskaber",
  "navCompare": "Sammenlign",
  "navMethod": "Metode",
  "language": "Sprog",
  "searchPlaceholder": "Søg ticker eller selskabsnavn (fx AAPL, Apple)",
  "allSectors": "Alle sektorer",
  "onlyAnalyzed": "Analyserede selskaber",
  "allCompanies": "Alle selskaber",
  "watchlist": "Overvågningsliste",
  "results": "{n} resultater",
  "analyzedOf": "{a} analyseret / {n} selskaber",
  "updated": "Opdateret {d}",
  "company": "Selskab",
  "noData": "ingen data",
  "noResults": "Ingen selskaber matcher din søgning.",
  "prev": "Forrige",
  "next": "Næste",
  "demoBadge": "DEMO",
  "demoNote": "Selskaber markeret DEMO viser omtrentlige eksempeltal, indtil dataopdateringen indlæser officielle SEC-data.",
  "back": "Tilbage til listen",
  "tabAnalysis": "Analyse",
  "tabRaw": "Regnskaber",
  "demoNotice": "Demodata: omtrentlige eksempeltal. Dataopdateringen erstatter dem med officielle SEC-indberetninger.",
  "notFound": "Intet selskab fundet med tickeren {t}.",
  "lastFy": "Seneste regnskabsår: {y}",
  "ttmBasis": "Værdiansættelse på tal for de seneste tolv måneder (TTM) til {d}",
  "annualBasis": "Værdiansættelse på tal for seneste regnskabsår",
  "overallScore": "TeraScore",
  "risk": "Risiko",
  "distress": "Risiko for finansielle problemer",
  "trend": "Langsigtet tendens",
  "coverage": "Datadækning",
  "watchEmpty": "Din overvågningsliste er tom. Tryk på stjernen ☆ i et selskabs række for at tilføje det her.",
  "now": "Nu",
  "today": "I dag",
  "yesterday": "I går",
  "updatedLabel": "Opdateret",
  "searchFuzzy": "Intet eksakt match for »{q}«. Lignende navne:",
  "years": "{n} år",
  "marketCap": "Markedsværdi",
  "price": "Kurs",
  "sector": "Sektor",
  "industry": "Branche",
  "sectionScores": "Scorekort",
  "sectionFlags": "Advarselstegn og styrker",
  "sectionCharts": "Historisk udvikling",
  "sectionKey": "Nøgletal",
  "howCalculated": "Beregningsdetaljer",
  "weight": "vægt",
  "points": "point",
  "notScored": "i/r",
  "sectorRank": "Bedre end {p} % af selskaberne i {s}",
  "sectorRankShort": "Top {p} % i sektoren",
  "riskExplain": "Risiko = 100 − sikkerhedsscore. Sikkerheden består for {f} % af fundamentale forhold (balance {bs} %, stabilitet {co} %, pengestrøm {cf} %, rentabilitet {pr} %, likviditet {li} %) og for {m} % af aktiekursens volatilitet og største fald (når kurshistorik findes). Advarselstegn øger risikoen ({c} point pr. kritisk og {w} pr. anden advarsel) langs en mættende kurve: hvert point lukker en del af den resterende afstand til 100, så selv de mest risikable selskaber stadig adskiller sig fra hinanden.",
  "noFlags": "Ingen væsentlige advarselstegn.",
  "critical": "Kritisk",
  "warningTag": "Advarsel",
  "strength": "Styrke",
  "footer": "TeraStockX beregner alle scorer ud fra offentlige regnskaber indberettet til SEC. Scorerne beskriver historiske fundamentale forhold; de er ikke investeringsrådgivning og forudsiger ikke aktiekurser.",
  "engine": "Motor v{v}. Scorerne er beregnet ud fra historiske, offentligt indberettede data; ikke investeringsrådgivning.",
  "currencyNote": "Beløb i {cur}.",
  "source": "Kilde",
  "retrieved": "hentet {d}",
  "downloadCsv": "Download CSV",
  "downloadJson": "JSON (skabelon)",
  "fiscalYear": "Regnskabsår",
  "ttm": "TTM",
  "computedRatios": "Beregnede nøgletal",
  "addWatch": "Føj til overvågningslisten",
  "removeWatch": "Fjern fra overvågningslisten",
  "compareWith": "Sammenlign",
  "compareTitle": "Sammenlign selskaber",
  "compareHint": "Vælg op til seks selskaber, der skal sammenlignes side om side.",
  "addCompany": "Tilføj selskab (navn eller ticker)…",
  "remove": "Fjern",
  "dimension": "Dimension",
  "metric": "Nøgletal",
  "chartRevenue": "Omsætning",
  "chartNetIncome": "Nettoresultat",
  "chartFcf": "Fri pengestrøm",
  "chartMargin": "Overskudsgrad",
  "chartPrice": "Aktiekurs (månedlig, justeret)",
  "chartRevenueSub": "årligt",
  "chartNetIncomeSub": "årligt (rød = underskud)",
  "chartFcfSub": "pengestrøm fra drift − investeringer",
  "chartMarginSub": "driftsresultat / omsætning",
  "chartPriceSub": "månedlige lukkekurser, seneste 6 år", "chartPriceDaily": "Aktiekurs (daglig)", "chartPriceDailySub": "daglige lukkekurser siden {d}", "pfCost": "Købspris", "pfCostHint": "Gennemsnitlig pris pr. aktie, i handelsvalutaen (valgfrit)", "pfGain": "Gevinst/tab", "pfGainPartial": "{n} af {m} beholdninger med købspris", "pfGainHint": "Indtast købspriserne for dine beholdninger", "pfGainNote": "Gevinst/tab: dagens kurs mod købsprisen (gennemsnit pr. aktie, i handelsvalutaen), til dagens valutakurs, uden udbytte.", "pfBench": "S&P 500 i samme periode", "pfBenchBetter": "Din portefølje: {d} procentpoint bedre", "pfBenchWorse": "Din portefølje: {d} procentpoint dårligere", "pfBenchSame": "Din portefølje bevægede sig lige meget", "pfRiskTitle": "Risiko og spredning", "pfVol": "Udsving (årligt)", "pfVolBench": "S&P 500: {v}", "pfDivers": "Spredning", "pfDiversUnit": "uafhængige beholdninger", "pfDiversSub": "af {n} beholdninger · gennemsnitlig korrelation: {c}", "pfTopRisk": "Største risikokilde", "pfTopRiskSub": "{r} af risikoen, {w} af værdien", "pfRiskShare": "Andel af risikoen", "pfRiskNote": "Ud fra daglige lukkekurser siden {d}: hvor meget porteføljens værdi svinger, og hvor meget hver beholdning bidrager. En beholdning, hvis andel af risikoen er klart større end dens vægt, svinger meget eller bevæger sig sammen med de andre. Spredningen viser, hvor mange uafhængige beholdninger porteføljen svarer til.", "pfRiskShort": "Udeladt på grund af kort eller manglende kurshistorik: {list}.", "pfDivTitle": "Udbyttekalender", "pfDivTotal": "Forventet udbytte de næste 12 måneder: {v}", "pfDivKnown": "efter udbetalingsdatoer", "pfDivEst": "anslået", "pfDivNote": "Nasdaq-noterede: annoncerede udbetalinger og sidste års udbetalingsdatoer, med det seneste beløb. Øvrige (*): anslået ud fra udbytteafkastet, fordelt som selskabets kvartalsvise udbetalinger (eller jævnt). Beløb før skat, til dagens valutakurs.", "pfDivNone": "Ingen af dine beholdninger betaler udbytte.", "alertDividendCut": "{t}: udbytte sænket ({date})", "pfAlertsTitle": "Notifikationer", "pfAlertsNone": "Ingen nye notifikationer om dine beholdninger siden {d}.", "pfAlertsFirst": "Fra nu af holdes øje med dine beholdninger: hvis en TeraScore ændrer sig meget, risikoen stiger, et udbytte sænkes, eller et kritisk signal eller en vigtig begivenhed dukker op, ser du det her.", "pfAlertsNote": "Notifikationer virker i denne browser; via e-mail og på telefonen kommer de med login.",
  "notEnough": "Ikke nok data.",
  "errorLoad": "Noget gik galt: {e}",
  "serveHint": "Hvis du har åbnet filen direkte, så start en lokal webserver (se README).",
  "profileFinancial": "Profil for finansielle virksomheder: nøgletal for likviditet, EBITDA og fri pengestrøm gælder ikke for banker og forsikringsselskaber og er udeladt.",
  "profileRealEstate": "Ejendomsprofil: grænserne for gæld og værdiansættelse er tilpasset REIT'ers strukturelt højere gæld.",
  "styles": "Investeringsprofil",
  "navNews": "Marked og begivenheder",
  "navData": "Finansielle data",
  "newsTitle": "Marked og begivenheder",
  "newsIntro": "Væsentlige begivenheder, som USA-noterede selskaber officielt har indberettet til SEC på formular 8-K de seneste 12 måneder: begivenhedstyper med stor betydning (konkurs, omarbejdede regnskaber, varsler om afnotering, ændret kontrol, opkøb, omstruktureringer, nedskrivninger, skift af revisor, cybersikkerhedshændelser) og ledelsesskift i store selskaber; rutineindberetninger er udeladt.",
  "newsEmpty": "Ingen større begivenheder i de aktuelle data.",
  "viewFiling": "Se indberetningen",
  "sectionEvents": "Større begivenheder (seneste 12 måneder)",
  "eventsNone": "Ingen større begivenheder indberettet de seneste 12 måneder.",
  "latestEvents": "Seneste større begivenheder",
  "allNews": "Alle større begivenheder",
  "dataTitle": "Finansielle data",
  "dataIntro": "Rå regnskaber i TeraStockX-skabelonen: resultatopgørelse, pengestrømsopgørelse og balance for op til ti regnskabsår plus de seneste tolv måneder, med beregnede nøgletal. Download som CSV eller JSON.",
  "dataPick": "Vælg et selskab (navn eller ticker)",
  "sev5": "Kritisk",
  "sev4": "Større",
  "sev3": "Betydelig",
  "sev2": "Bemærkelsesværdig",
  "allSeverities": "Alle begivenhedstyper",
  "onlyCritical": "Kun kritiske og større",
  "openAnalysis": "Åbn analysen",
  "tabCompanies": "Aktier",
  "tabNews": "Nyheder",
  "tabData": "Data",
  "tabCompare": "Sammenlign",
  "tabMethod": "Metode",
  "newsTop": "Vigtigst (kritiske begivenheder; større begivenheder i selskaber over $1B)",
  "filters": "Screener-filtre",
  "filtersActive": "{n} aktive",
  "reset": "Nulstil filtre",
  "minScore": "Mindste TeraScore",
  "maxRisk": "Højeste risiko",
  "anyValue": "Alle",
  "minCap": "Mindste markedsværdi",
  "minDividend": "Mindste udbytteafkast",
  "exchange": "Børs",
  "allExchanges": "Alle børser",
  "styleFilter": "Investeringsprofil:",
  "noCritical": "Ingen kritiske advarsler",
  "pe": "P/E",
  "dividendYieldShort": "Udb.afkast",
  "sectorMedian": "Sektormedian",
  "insiderTitle": "Insiderhandler",
  "insiderBuys": "Køb på det åbne marked",
  "insiderSells": "Salg på det åbne marked",
  "insiderNone": "Ingen insiderkøb eller -salg på det åbne marked de seneste 12 måneder.",
  "insiderForeign": "Udenlandske private udstedere er fritaget for Form 4-indberetning; der findes ingen insiderdata.",
  "insiderPlanned": "Heraf under handelsplaner efter 10b5-1",
  "insiderPeriod": "SEC Form 4-indberetninger, {from} – {to}. Kun køb (kode P) og salg (kode S) på det åbne marked vises; tildelinger, udnyttelse af optioner og skattetilbageholdelser er udeladt.",
  "insiderCount": "{n} handler · {p} insidere",
  "insiderDate": "Dato",
  "insiderName": "Insider",
  "insiderType": "Handel",
  "insiderShares": "Aktier",
  "insiderValue": "Værdi",
  "insiderPurchase": "Køb",
  "insiderSale": "Salg",
  "insiderPlanTag": "10b5-1-plan",
  "alertsTitle": "Overvågningsalarmer",
  "alertsSeen": "Markér alle som set",
  "alertScore": "{t}: TeraScore ændret fra {from} til {to}",
  "alertRisk": "{t}: risikoen steg fra {from} til {to}",
  "alertDistress": "{t}: risikoen for finansielle problemer er nu {level}",
  "alertEvent": "{t}: ny større begivenhed – {event} ({date})",
  "alertCritical": "{t}: nyt kritisk advarselstegn – {flag}",
  "fxNote": "regnskaber i {cur}, omregnet til 1 {cur} = {rate} USD",
  "navTrend": "TeraScore-ændringer",
  "tabTrend": "Ændringer",
  "trendIntro": "Hvordan selskabernes TeraScore ændrer sig over tid. Visningen pr. regnskabsår vurderer hvert selskab ved udgangen af hvert regnskabsår kun med det, der var kendt dengang (årsrapporter, 8-K-begivenheder fra de foregående 12 måneder og aktiekursen på datoen). Ugentlige øjebliksbilleder tilføjes ved hver mandagsopdatering, så ændringer over 4 og 13 uger vises efter de første uger.",
  "trendPeriod": "Periode",
  "trendPeriodFy": "Ændring i forhold til forrige regnskabsår",
  "trendPeriod4w": "Ændring over 4 uger",
  "trendPeriod13w": "Ændring over 13 uger",
  "trendUp": "Største forbedringer",
  "trendDown": "Største forværringer",
  "trendChange": "Ændring",
  "trendFrom": "fra {v}",
  "trendWeeklyEmpty": "Ugentlige øjebliksbilleder indsamles ved hver mandagsopdatering; visningen fyldes op efter de første uger.",
  "trendNote": "Ændringerne er i TeraScore-point. Scorerne pr. regnskabsår anvender dagens sektorbenchmarks også på tidligere år.",
  "trendAnnualChart": "TeraScore pr. regnskabsår",
  "trendAnnualSub": "daværende score ved hvert regnskabsårs udgang",
  "trendWeeklyChart": "TeraScore, ugentligt",
  "trendWeeklySub": "øjebliksbillede fra hver mandagsopdatering",
  "trendAll": "Alle ændringer",
  "navPortfolio": "Portefølje",
  "tabPortfolio": "Portefølje",
  "addPortfolio": "Føj til porteføljen",
  "inPortfolio": "I porteføljen",
  "pdfReport": "PDF-rapport",
  "minDivSafety": "Udbyttesikkerhed",
  "peersTitle": "Lignende selskaber",
  "peersNone": "Ingen sammenlignelige selskaber med score i denne sektor.",
  "peerMedian": "Median for sammenlignelige",
  "peersSub": "De mest sammenlignelige selskaber i {s} efter branche og størrelse.",
  "peersRank": "{t} ligger nr. #{r} af {n} i gruppen efter TeraScore.",
  "peersCompare": "Sammenlign i detaljer",
  "dividendTitle": "Udbytte",
  "dividendSafety": "Udbyttesikkerhed",
  "dividendYield": "Udbytteafkast",
  "dps": "Udbytte pr. aktie",
  "dpsCagr": "Udbyttevækst (5-årig CAGR)",
  "yearsPaid": "Udbetalt uden afbrydelse",
  "yearsN": "{n} år",
  "yearsRaised": "Forhøjelser i træk",
  "dividendCuts": "Nedsættelser (10 år)",
  "earningsPayout": "Udbytteandel (indtjening)",
  "fcfPayout": "Udbytteandel (fri pengestrøm)",
  "payoutUncovered": "ikke dækket",
  "dividendNone": "Selskabet udbetaler ikke udbytte.",
  "dividendNoneShort": "intet udbytte",
  "dividendNote": "Udbytte pr. aktie beregnes som udbetalt kontantudbytte divideret med udvandede aktier, så ekstraordinære udbytter ses som spring. Udbytteandelene bruger de seneste tolv måneder, når de findes.",
  "chartDps": "Udbytte pr. aktie",
  "chartDpsSub": "udbetalt kontantudbytte / udvandede aktier",
  "period": "Periode",
  "periodAnnual": "Årligt",
  "periodQuarterly": "Kvartalsvis",
  "quarterEnd": "Kvartal sluttende",
  "quarterlyNote": "Tremånederstal. Når et kvartal kun indberettes som år-til-dato, er tallet år-til-dato-tallet minus det foregående kvartals; fjerde kvartal er årstallet minus de første ni måneder.",
  "quarterlyNone": "Der findes ingen kvartalstal.",
  "quarterlyForeign": "Udenlandske private udstedere indberetter kun årsrapporter (20-F / 40-F); kvartalstal findes ikke.",
  "pfIntro": "Indtast dine beholdninger for at se porteføljens værdivægtede TeraScore, risiko, udbytteindtægt, sektorfordeling og advarsler om koncentration. Porteføljen gemmes kun i denne browser.",
  "pfAdd": "Tilføj",
  "pfFromWatch": "Tilføj overvågningslisten (1 aktie hver)",
  "pfNeedShares": "Indtast antal aktier.",
  "pfEmpty": "Porteføljen er tom. Tilføj et selskab og antal aktier ovenfor.",
  "pfValue": "Porteføljens værdi",
  "pfScore": "Vægtet TeraScore",
  "pfIncome": "Årlig udbytteindtægt",
  "pfPe": "Porteføljens P/E",
  "pfHoldings": "Beholdninger",
  "pfSectors": "Sektorfordeling",
  "pfOther": "Andet",
  "pfChecks": "Porteføljetjek",
  "pfOk": "Ingen advarsler om koncentration eller kvalitet.",
  "pfInfo": "Bemærk",
  "pfShares": "Aktier",
  "pfPrice": "Kurs",
  "pfValueCol": "Værdi",
  "pfWeight": "Vægt",
  "pfNote": "Kurser og scorer pr. seneste dataopdatering ({d}). Værdier i {c}; europæiske ETF'er prissættes i deres egen handelsvaluta og omregnes til dagens valutakurs.",
  "reportTitle": "Selskabsrapport",
  "printPdf": "Udskriv / gem som PDF",
  "printHint": "Vælg »Gem som PDF« i udskriftsdialogen.",
  "reportFinancials": "Femårigt regnskabsoverblik",
  "profile": "Investeringsprofil",
  "ratedCompanies": "Selskaber med TeraScore",
  "installFooter": "Installer appen",
  "installBanner": "Installer TeraStockX som app på din telefon, tablet eller computer.",
  "installHow": "Sådan installerer du",
  "close": "Luk",
  "installTitle": "Installer TeraStockX som app",
  "installIntro": "TeraStockX kan installeres direkte fra denne hjemmeside, uden app-butik og med en ubetydelig downloadstørrelse. Den åbner derefter fra sit eget ikon i fuld skærm som enhver anden app og viser altid de nyeste data.",
  "installDone": "Du bruger den installerede app.",
  "installNow": "Installer nu",
  "installYourDevice": "Din enhed",
  "installIos": "iPhone og iPad",
  "installAndroid": "Android",
  "installDesktop": "Computer (Chrome, Edge)",
  "installNote": "Appen er den samme som hjemmesiden: dataopdateringer kommer automatisk, og din overvågningsliste og portefølje bliver på denne enhed. Fjern den som enhver anden app.",
  "pfAddPlaceholder": "Selskab eller ETF (navn eller ticker)…",
  "pfScoreCover": "dækker {p} af porteføljen",
  "pfEtfs": "ETF'er",
  "etfExpense": "Årlige omkostninger {v}",
  "etfNoScore": "ETF'er har ingen TeraScore: en fond har ingen egne regnskaber.",
  "etfYieldInput": "Udbytteafkast (%)",
  "etfNote": "ETF'er har ingen TeraScore; den vægtede TeraScore og risiko omfatter kun selskaberne.",
  "etfYieldMissing": "Datakilden offentliggør intet udbytteafkast for {list}. Indtast det i afkastkolonnen (i %) for at medregne det i udbytteindtægten.",
  "screensTitle": "Hurtigsøgninger",
  "colChangeFy": "Ændring",
  "filtersAndScreens": "Filtre og hurtigsøgninger",
  "maxPe": "Maks. P/E",
  "minDrop": "Under 12-måneders top",
  "dropAtLeast": "mindst {p}",
  "colFromHigh": "Fra toppen",
  "contact": "Kontakt",
  "marketToday": "Markedet i dag",
  "marketMore": "Marked og begivenheder",
  "eventsTitle": "Større selskabsbegivenheder (8-K)",
  "pfMax": "Maks.",
  "pfSince": "siden {d}",
  "pfMoveValue": "Værdiændring",
  "pfMoveScore": "TeraScore-ændring",
  "pfMoveNoScore": "Endnu ikke nok historik: de ugentlige TeraScores efter den nuværende metode registreres fra {d}.",
  "pfMoveFy": "Seneste regnskabsår mod året før (med de data, der var kendt dengang).",
  "pfMoveFyRange": "Regnskabsår {a} → {b} (med de data, der var kendt dengang).",
  "pfMoveChartSub": "I {c}; udenlandske kurser til dagens valutakurs.",
  "pfMoveTop": "Hvad flyttede porteføljen",
  "pfMoveTopSub": "For hver beholdning: kursændring, dens effekt på porteføljens værdi og TeraScore-ændringen i perioden.",
  "pfMoveMonthly": "Med kurser ved månedens udgang (endnu ingen daglige lukkekurser): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "AI-aktier",
   "bigTech": "Big Tech",
   "semis": "Halvledere",
   "banks": "Banker",
   "energy": "Olie og gas",
   "crypto": "Kryptoaktier"
  },
  "hlIndex": "{n} {v} i dag",
  "hlTheme": "{n} {v} i dag (bedst {b}, svagest {w})",
  "hlUp": "{n} op {v} i dag",
  "hlDown": "{n} ned {v} i dag",
  "hlReport": "{n} offentliggjorde sin {f} ({form})",
  "annualReport": "årsrapport",
  "quarterlyReport": "kvartalsrapport",
  "hlScore": "TeraScore for {n} ændret med {v} point (nu {o})",
  "hlListing": "Nyt på børsen: {n}",
  "none": "Intet at vise i dag.",
  "notYet": "Markedsoverblikket vises efter næste dataopdatering.",
  "bestWorst": "bedst {b} · svagest {w}",
  "asOf": "Kurser: {d} (forsinket ca. 15 minutter). På hverdage opdateres kurser, TeraScore, nyheder og nye rapporter hvert 5. minut i amerikansk åbningstid og hvert 10. minut før og efter.",
  "headlines": "Dagens store bevægelser",
  "themesTitle": "Temaer (dagens ændring vægtet efter markedsværdi)",
  "sectorsTitle": "Sektorer i dag",
  "gainers": "Største stigninger (fra $2B)",
  "losers": "Største fald (fra $2B)",
  "today": "I dag",
  "reports": "Nye kvartals- og årsrapporter",
  "filed": "Indberettet",
  "scoreMoves": "Store TeraScore-ændringer siden i går",
  "newListings": "Nyt på børsen",
  "listed": "Noteret",
  "note": "Ændringer siden forrige lukning. Temaer og sektorer er vægtet efter markedsværdi. TeraScore-ændringer sammenlignes med forrige dags score. I åbningstiden vises dagens ændring for selskaber over ca. 2 mia. dollar og de største fonde; for mindre selskaber efter den daglige opdatering.",
  "noFilings": "Endnu ingen SEC-regnskabsrapporter",
  "notScoredYet": "Endnu ikke vurderet",
  "notScoredText": "En TeraScore kræver mindst én årsrapport (10-K eller 20-F). Nynoterede selskaber får en efter deres første årsrapport; indtil da vises kurs, markedsværdi og eventuelle kvartalstal.",
  "lastReport": "Seneste rapport",
  "storiesTitle": "Topnyheder",
  "storiesNote": "Vigtige meddelelser og store kursbevægelser i store selskaber (markedsværdi over 10 mia. dollar) fra de seneste dage. Overskrifterne kommer fra selskabernes egne indberetninger til SEC, på originalsproget engelsk.",
  "kind": {
   "leadership": "Ledelsesskift",
   "deal": "Fusion eller opkøb",
   "results": "Resultater",
   "critical": "Kritisk begivenhed",
   "major": "Større begivenhed",
   "restructuring": "Omstrukturering",
   "cyber": "Cybersikkerhedshændelse",
   "board": "Ændring i bestyrelsen",
   "other": "Meddelelse",
   "move": "Stor kursbevægelse"
  },
  "when": {
   "pre": "før åbning",
   "post": "efter lukning",
   "day": "i dag",
   "last": "seneste handelsdag"
  , "lastPost": "efter seneste lukning"},
  "preNote": "Før åbning: de daglige ændringer nedenfor er fra forrige handelsdag ({d}). Store selskabers bevægelser før åbning findes under Topnyheder.",
  "postNote": "Efter lukning: de daglige ændringer nedenfor er fra dagens handel; store selskabers bevægelser efter lukning findes under Topnyheder.",
  "readMore": "Pressemeddelelse (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Ingen store nyheder fra store selskaber lige nu.", "holidayNote": "I dag er der helligdag i USA: børsen er lukket, og SEC modtager ingen indberetninger, så der er ingen nye virksomhedsnyheder. De næste indberetninger kan komme fra {d}.", "weekendNote": "I weekenden er børsen lukket, og SEC modtager ingen indberetninger, så der er ingen nye virksomhedsnyheder. De næste indberetninger kan komme fra {d}.", "marketHolidayNote": "Den amerikanske børs er lukket i dag på grund af helligdag; virksomhedernes indberetninger kommer stadig ind.", "secHolidayNote": "SEC modtager ingen indberetninger i dag (føderal helligdag), så der er ingen nye virksomhedsnyheder; børsen er åben. De næste indberetninger kan komme fra {d}.", "holidayShort": "Helligdag i USA: børsen lukket, ingen nye virksomhedsnyheder.", "weekendShort": "Weekend: børsen lukket, ingen nye virksomhedsnyheder.", "checked": "Senest tjekket: {d}", "nextFilings": "næste indberetninger fra {d}",
  "moreNews": "Alle nyheder",
  "asOfShort": "Kurser: {d}, forsinket ca. 15 minutter",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "siden nyheden",
  "sinceNote": "Ved en nyhed: kursændringen siden nyheden, målt fra den seneste lukkekurs før den (handel før åbning og efter lukning medregnet). Ved en stor kursbevægelse: dagens bevægelse, før åbning eller efter lukning."
 },
 "screens": {
  "top": {
   "name": "Højeste TeraScore",
   "desc": "Alle vurderede selskaber, højeste TeraScore først."
  },
  "bestRiskReward": {
   "name": "Bedste score, laveste risiko",
   "desc": "TeraScore på mindst 70 og risiko på højst 30, ingen kritisk advarsel, markedsværdi fra $300M; sorteret efter TeraScore minus risiko."
  },
  "safeLongTerm": {
   "name": "Sikrest på lang sigt",
   "desc": "TeraScore ≥ 65, risiko ≤ 25, stabilitet ≥ 70, balancens styrke ≥ 60, lav risiko for finansielle problemer, ingen kritisk advarsel, markedsværdi fra $2B; sorteret efter lav risiko, stabilitet og balance."
  },
  "lowRisk": {
   "name": "Laveste risiko",
   "desc": "Risiko på højst 20 og ingen kritisk advarsel; laveste risiko først."
  },
  "improvers": {
   "name": "Største forbedring sidste år",
   "desc": "TeraScore op med mindst 10 point i forhold til forrige regnskabsår, markedsværdi fra $300M; største stigning først."
  },
  "growth": {
   "name": "Hurtigt voksende",
   "desc": "Vækst i seneste regnskabsår ≥ 75 og langsigtet vækst ≥ 70, med TeraScore på mindst 55, markedsværdi fra $300M."
  },
  "value": {
   "name": "Undervurderet kvalitet",
   "desc": "Værdiansættelsesscore ≥ 70 (billig i forhold til indtjening og pengestrøm), TeraScore ≥ 65, rentabilitet ≥ 60, ingen kritisk advarsel, markedsværdi fra $300M."
  },
  "dividend": {
   "name": "Sikre udbytter",
   "desc": "Udbyttesikkerhed ≥ 75 og udbytteafkast på mindst 2,5 %, markedsværdi fra $300M; højeste afkast først."
  },
  "largeQuality": {
   "name": "Store kvalitetsselskaber",
   "desc": "Markedsværdi på mindst $50B og TeraScore på mindst 70."
  },
  "highRisk": {
   "name": "Høj risiko",
   "desc": "Risiko på mindst 70, eller høj risiko for finansielle problemer med risiko på mindst 55, markedsværdi fra $300M; mest risikable først. Spekulative aktier: vær forsigtig."
  },
  "decliners": {
   "name": "Største forværring sidste år",
   "desc": "TeraScore ned med mindst 10 point i forhold til forrige regnskabsår, markedsværdi fra $300M; største fald først."
  },
  "dip": {
   "name": "Under toppen, billigere nu",
   "desc": "Kvalitetsselskaber (TeraScore ≥ 65, risiko ≤ 40, ingen kritisk advarsel, markedsværdi fra $300M), hvis aktiekurs ligger 20–50 % under 12-måneders toppen (månedlige lukkekurser); bedste TeraScore først. Større fald udelades: de er oftere tegn på problemer end på rabat."
  },
  "lowPe": {
   "name": "Lav P/E",
   "desc": "Profitable selskaber med P/E på 3–12, hvis værdiansættelsesscore også er mindst 60 (EV/EBIT og pengestrømsafkast bekræfter, at aktien er billig), TeraScore ≥ 60, stabilitet ≥ 50, ingen kritisk advarsel, markedsværdi fra $300M. En P/E under 3 skyldes som regel en engangsgevinst og udelades."
  }
 },
 "install": {
  "benefit1": "Sit eget ikon på hjemmeskærmen ved siden af dine andre apps",
  "benefit2": "Åbner i fuld skærm uden browserens adresselinje",
  "benefit3": "Starter hurtigere, og de selskaber, du så sidst, åbner også offline",
  "benefit4": "Opdaterer sig selv: ingen geninstallation, ingen app-butik",
  "iphone1": "Åbn siden i Safari.",
  "iphone2": "Tryk på knappen Del (firkanten med en pil opad) – på iPhone nederst, på iPad øverst til højre.",
  "iphone3": "Rul ned, og tryk på »Føj til hjemmeskærm«.",
  "iphone4": "Tryk på »Tilføj« øverst til højre. TeraStockX-ikonet vises på hjemmeskærmen.",
  "android1": "Åbn siden i Chrome.",
  "android2": "Tryk på »Installer nu« ovenfor, eller åbn menuen (⋮) øverst til højre.",
  "android3": "Vælg »Installer app« (eller »Føj til startskærm«).",
  "android4": "Bekræft med »Installer«. Appen vises blandt dine apps og på hjemmeskærmen.",
  "desktop1": "Åbn siden i Chrome eller Edge.",
  "desktop2": "Klik på »Installer nu« ovenfor eller på installationsikonet yderst til højre i adresselinjen.",
  "desktop3": "Bekræft med »Installer«.",
  "desktop4": "TeraStockX åbner i sit eget vindue og kan startes fra menuen Start, Dock eller Launchpad."
 },
 "dividend": {
  "safe": "Sikker",
  "moderate": "Moderat",
  "risky": "I fare",
  "unsafe": "Usikker",
  "na": "Ikke vurderet",
  "safeText": "Godt dækket af indtjening og fri pengestrøm, med en solid historik.",
  "moderateText": "Dækket, men med begrænset luft; en afmatning kan lægge pres på det.",
  "riskyText": "Dækningen er tynd, eller balancen er presset; en nedsættelse er en reel mulighed.",
  "unsafeText": "Ikke dækket af indtjening eller pengestrøm, eller for nylig nedsat; yderligere nedsættelse er sandsynlig.",
  "naText": "Ikke nok data til en vurdering.",
  "parts": {
   "priceStability": "Kursstabilitet",
   "fcfPayout": "Dækning af fri pengestrøm",
   "earningsPayout": "Dækning af indtjening",
   "leverage": "Gearing",
   "trackRecord": "Historik",
   "stability": "Indtjeningsstabilitet"
  },
  "partsText": {
   "priceStability": "Markedsrisikoscoren (aktiekursens volatilitet og største fald): et kraftigt fald kommer ofte før en udbyttenedsættelse.",
   "fcfPayout": "Udbetalt udbytte / fri pengestrøm: 100 point ved 40 % eller mindre (REIT'er: 80 %), 0 point ved 120 % eller mere (REIT'er: 130 %) eller ved negativ fri pengestrøm.",
   "earningsPayout": "Udbetalt udbytte / nettoresultat: 100 point ved 50 % eller mindre, 0 point ved 150 % eller mere eller ved underskud. Vurderes ikke for REIT'er.",
   "leverage": "Nettogæld / EBITDA: 100 point ved 1× eller mindre, 0 point ved 5× eller mere. Vurderes ikke for banker, forsikringsselskaber og REIT'er.",
   "trackRecord": "År med udbytte uden afbrydelse (60 %) og forhøjelser i træk (40 %), op til 10 år; minus 35 point for hver nedsættelse på over 10 % de seneste 10 år.",
   "stability": "Andel af overskudsår blandt de seneste fem."
  }
 },
 "pw": {
  "position": "{t} udgør {w} af porteføljen (over {l}).",
  "sector": "{s} udgør {w} af porteføljen (over {l}).",
  "few": "Kun {n} beholdninger: færre end {m} positioner gør porteføljen sårbar over for det enkelte selskabs risiko.",
  "critical": "Kritisk advarsel: {list}.",
  "distress": "Høj risiko for finansielle problemer: {list}.",
  "weak": "TeraScore under {s}: {list}.",
  "unscored": "Ikke vurderet (utilstrækkelige data): {list}."
 },
 "ocr": {
  "button": "Fra et skærmbillede",
  "loading": "Indlæser tekstgenkendelse (én gang, ca. 7 MB)…",
  "reading": "Læser billedet… {p} %",
  "privacy": "Billedet forlader ikke din enhed: det læses i din browser.",
  "found": "Genkendte beholdninger: {n}",
  "check": "Kontrollér tickere og antal aktier, ret dem om nødvendigt, og tilføj dem derefter.",
  "inPortfolio": "I din portefølje nu: {n} aktier (bliver erstattet)",
  "add": "Føj til porteføljen",
  "cancel": "Annuller",
  "close": "Luk",
  "none": "Der blev ikke fundet aktier i billedet. Prøv et skarpere og større skærmbillede, hvor ticker eller selskabsnavn og antal aktier står tydeligt, eller tilføj dem manuelt.",
  "failed": "Tekstgenkendelsen mislykkedes: {e}",
  "needShares": "Indtast antal aktier for hver markeret række.",
  "hint": "Tip: skærmbilleder af beholdningslisten i din mægler-app virker bedst; du kan vælge flere på én gang.",
  "readingN": "Læser billede {i} af {n}… {p} %",
  "foundImages": "Genkendte beholdninger: {n} (fra {k} billeder)",
  "estimated": "≈ værdi ÷ kurs, kontrollér venligst"
 },
 "dq": {
  "partial": "Delvis",
  "partialTitle": "Delvis analyse: {p} % af TeraScore bygger på data. Ikke vurderet på grund af manglende data (tæller højst som 50): {d}.",
  "partialTitleParts": "Delvis analyse: {p} % af TeraScore bygger på data; flere nøgletal mangler.",
  "little": "Få data",
  "littleTitle": "Ikke nok data til en TeraScore: mindst 5 af de 9 områder skal kunne vurderes.",
  "none": "Ingen analyse",
  "noneTitle": "Der findes endnu ingen årsrapport med regnskabstal.",
  "newListing": "Nynoteret",
  "newTitle": "For nylig noteret: får en TeraScore efter sin første årsrapport.",
  "newBadge": "NY",
  "legend": "»Delvis · 65 %« = analysen er ufuldstændig: kun denne andel af TeraScore bygger på data. Markeres under 80 %. Et område uden data tæller højst som neutrale {s}, så et hul aldrig kan løfte scoren, men resultatet er mindre sikkert.",
  "noticePartialTitle": "Delvis analyse: {p} % af TeraScore bygger på data.",
  "noticePartial": "Disse områder kunne ikke vurderes, fordi selskabets indberetninger mangler data: {d}. De tæller som neutrale {s}, eller som gennemsnittet af selskabets øvrige områder, hvis det er lavere, så manglende data aldrig kan løfte TeraScore; scoren er mindre sikker end for et fuldt analyseret selskab.",
  "noticePartialParts": "Nogle nøgletal mangler i selskabets indberetninger. Inden for hvert område udelades de, og de øvrige nøgletals vægte øges forholdsmæssigt, så TeraScore er mindre sikker end for et fuldt analyseret selskab.",
  "noticeLittle": "en TeraScore kræver mindst 5 områder, der kan vurderes; dette selskab har {n}. De områder, der kunne vurderes, vises nedenfor.",
  "estimated": "Estimeret ud fra andre indberettede tal: {list}.",
  "est": {
   "capex": "investeringer ≈ selskabets sædvanlige investeringer i forhold til omsætningen eller afskrivningerne (selskabet indberetter dem kun under sit eget XBRL-element)",
   "operatingIncome": "driftsresultat ≈ resultat før skat (eller nettoresultat + skat) + renteudgifter (selskabet indberetter ingen linje for driftsresultat)",
   "totalDebt": "gæld = 0 (ingen lån eller renteudgifter indberettet de seneste to år)"
  },
  "partialShort": "Delvis · {p} %",
  "coverageBadge": "Analysen er {p} % komplet (nogle data mangler)",
  "partialMobile": "{p} % data"
 },
 "dims": {
  "profitability": {
   "name": "Rentabilitet",
   "q": "Hvor effektivt omsætter selskabet omsætning og kapital til overskud?",
   "summary": "Overskudsgrad {operatingMargin}, nettomargin {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Pengestrømmens kvalitet",
   "q": "Er det indberettede overskud dækket af kontanter?",
   "summary": "FCF-margin {fcfMargin}; FCF-konvertering på {fcfConversion} af nettoresultatet; periodiseringsgrad {accrualRatio}; aktiebaseret aflønning på {sbcToRevenue} af omsætningen."
  },
  "balanceSheet": {
   "name": "Balancens styrke",
   "q": "Hvor stor gæld bærer selskabet i forhold til indtjening og egenkapital?",
   "summary": "Nettogæld/EBITDA {netDebtToEbitda}, gæld/egenkapital {debtToEquity}, rentedækning {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Likviditet",
   "q": "Kan kortfristede forpligtelser dækkes af kortfristede aktiver?",
   "summary": "Likviditetsgrad {currentRatio}, hurtig likviditetsgrad {quickRatio}, kontantgrad {cashRatio}."
  },
  "growth1y": {
   "name": "Vækst (seneste regnskabsår)",
   "q": "Årlig udvikling i salg, indtjening og pengestrøm.",
   "summary": "Omsætning {revenueYoY}, driftsresultat {operatingIncomeYoY}, EPS {epsYoY}, fri pengestrøm {fcfYoY} i forhold til året før."
  },
  "growthLong": {
   "name": "Langsigtet vækst",
   "q": "Gennemsnitlig årlig vækst over op til fem år.",
   "summary": "{windowYears}-årig CAGR: omsætning {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, indre værdi pr. aktie {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilitet",
   "q": "Hvor forudsigelige og robuste er resultaterne?",
   "summary": "Overskud i {profitableYearsRatio} af årene, positiv FCF i {fcfPositiveRatio}; volatilitet i omsætningsvæksten {revenueVolatility}; Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "Kapitalallokering",
   "q": "Hvor godt bliver kapitalen givet tilbage til aktionærerne og geninvesteret?",
   "summary": "Antal aktier {shareChangeYearly} om året; aktionærafkast {shareholderYield}; udbytte på {payoutRatio} af FCF; ændring i ROIC {roicChange}."
  },
  "valuation": {
   "name": "Værdiansættelse",
   "q": "Hvor dyr er aktien i forhold til de fundamentale forhold?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, FCF-afkast {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Risiko",
   "q": "Samlet investeringsrisiko (lavere er bedre).",
   "summary": "Risiko for finansielle problemer: {distress}. Årlig volatilitet {volatility}; største fald (5 år) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Markedsrisiko",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Fremragende",
  "strong": "Stærk",
  "moderate": "Moderat",
  "weak": "Svag",
  "poor": "Dårlig",
  "na": "Ingen data"
 },
 "riskGrades": {
  "excellent": "Meget lav",
  "strong": "Lav",
  "moderate": "Moderat",
  "weak": "Høj",
  "poor": "Meget høj",
  "na": "Ingen data"
 },
 "distress": {
  "low": "Lav",
  "medium": "Forhøjet",
  "high": "Høj",
  "lowText": "Ingen tegn på finansielle problemer i de aktuelle data.",
  "mediumText": "Enkelte advarselstegn; situationen bør følges.",
  "highText": "Flere indikatorer peger på væsentlige finansielle problemer."
 },
 "outlook": {
  "up": "I bedring",
  "flat": "Stabil",
  "down": "I forværring",
  "unknown": "Utilstrækkelig historik",
  "upText": "De fundamentale forhold er forbedret støt de seneste år.",
  "flatText": "De fundamentale forhold har overordnet ligget stille.",
  "downText": "De fundamentale forhold er forværret de seneste år.",
  "unknownText": "Der kræves mindst tre regnskabsår."
 },
 "verdict": {
  "excellent": "Usædvanligt stærke fundamentale forhold på de fleste dimensioner.",
  "strong": "Økonomisk sundt selskab med solide fundamentale forhold.",
  "moderate": "Blandet fundamental profil med tydelige styrker og svagheder.",
  "weak": "Svage fundamentale forhold; skærpet forsigtighed er på sin plads.",
  "poor": "Alvorlige fundamentale svagheder.",
  "na": "Utilstrækkelige data til en samlet vurdering."
 },
 "styles": {
  "quality": "Kvalitet",
  "growth": "Vækst",
  "value": "Værdi",
  "income": "Udbytte",
  "speculative": "Spekulativ"
 },
 "sectors": {
  "technology": "Teknologi",
  "healthcare": "Sundhed",
  "financials": "Finans",
  "realEstate": "Ejendomme",
  "consumerDiscretionary": "Cyklisk forbrug",
  "consumerStaples": "Dagligvarer",
  "industrials": "Industri",
  "energy": "Energi",
  "utilities": "Forsyning",
  "communication": "Kommunikationstjenester",
  "materials": "Råvarer",
  "shell": "Skalselskaber / SPAC'er",
  "other": "Andet"
 },
 "metrics": {
  "cashRunway": [
   "Likviditetshorisont",
   "Antal år, de likvide aktiver (kontanter eller omsætningsaktiver minus varebeholdninger og tilgodehavender) kan finansiere den nuværende negative frie pengestrøm. Sætter loft over likviditetsscoren: 0,75 år eller mindre = 0 point, 3 år eller mere = 100."
  ],
  "grossMargin": [
   "Bruttomargin",
   "Bruttoresultat / omsætning."
  ],
  "operatingMargin": [
   "Overskudsgrad",
   "Driftsresultat (EBIT) / omsætning."
  ],
  "netMargin": [
   "Nettomargin",
   "Nettoresultat / omsætning."
  ],
  "fcfMargin": [
   "FCF-margin",
   "Fri pengestrøm (pengestrøm fra drift − investeringer) / omsætning."
  ],
  "roe": [
   "Egenkapitalforrentning (ROE)",
   "Nettoresultat / gennemsnitlig egenkapital. Vurderes ikke, når egenkapitalen er negativ."
  ],
  "roa": [
   "Afkast af aktiver (ROA)",
   "Nettoresultat / gennemsnitlige samlede aktiver."
  ],
  "roic": [
   "Afkast af investeret kapital (ROIC)",
   "NOPAT (EBIT × (1 − effektiv skattesats)) / gennemsnitlig investeret kapital (egenkapital + gæld − kontanter)."
  ],
  "fcfConversion": [
   "FCF-konvertering",
   "Fri pengestrøm / nettoresultat. Ved nettounderskud giver positiv FCF 60 point."
  ],
  "accrualRatio": [
   "Periodiseringsgrad",
   "(Nettoresultat − pengestrøm fra drift) / gennemsnitlige samlede aktiver. Høje værdier tyder på overskud, der ikke er dækket af kontanter."
  ],
  "sbcToRevenue": [
   "Aktiebaseret aflønning / omsætning",
   "Ikke-kontant aflønning, der udvander aktionærerne."
  ],
  "capexToRevenue": [
   "Investeringsintensitet",
   "Investeringer / omsætning."
  ],
  "currentRatio": [
   "Likviditetsgrad",
   "Omsætningsaktiver / kortfristede forpligtelser."
  ],
  "quickRatio": [
   "Hurtig likviditetsgrad",
   "(Omsætningsaktiver − varebeholdninger) / kortfristede forpligtelser."
  ],
  "cashRatio": [
   "Kontantgrad",
   "Likvide beholdninger / kortfristede forpligtelser."
  ],
  "debtToEquity": [
   "Gæld / egenkapital",
   "Finansiel gæld / egenkapital. Negativ egenkapital giver 0."
  ],
  "equityRatio": [
   "Soliditetsgrad",
   "Egenkapital / samlede aktiver."
  ],
  "liabilitiesToAssets": [
   "Forpligtelser / aktiver",
   "Forpligtelser i alt / aktiver i alt."
  ],
  "netDebt": [
   "Nettogæld",
   "Finansiel gæld − kontanter. Negativ = nettokontanter."
  ],
  "netDebtToEbitda": [
   "Nettogæld / EBITDA",
   "Antal års EBITDA, der kræves for at betale nettogælden. Nettokontanter giver 100, når EBITDA er positiv, og 50, når den ikke er (kontanterne bruges op); nettogæld med negativ EBITDA giver 0."
  ],
  "interestCoverage": [
   "Rentedækning",
   "EBIT / renteudgifter. Ingen renteudgifter giver 100."
  ],
  "goodwillToAssets": [
   "Goodwill og immaterielle aktiver / aktiver",
   "Andel af aktiverne fra opkøb; risiko for nedskrivning."
  ],
  "payoutRatio": [
   "Udbytteandel (af FCF)",
   "Udbetalt udbytte / fri pengestrøm. Vurderes ikke, hvis der ikke udbetales udbytte."
  ],
  "bookValuePerShare": [
   "Indre værdi pr. aktie",
   "Egenkapital / udestående aktier."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(arbejdskapital/aktiver) + 3,26·(overført resultat/aktiver) + 6,72·(EBIT/aktiver) + 1,05·(egenkapital/forpligtelser). < 1,1 krise, > 2,6 sikker."
  ],
  "piotroski": [
   "Piotroski F-score",
   "Ni ja/nej-test af rentabilitet, gearing, likviditet og driftseffektivitet (0–9)."
  ],
  "revenueYoY": [
   "Omsætningsvækst (år/år)",
   "Ændring i forhold til forrige regnskabsår."
  ],
  "operatingIncomeYoY": [
   "Vækst i driftsresultat (år/år)",
   "Ændring i forhold til forrige regnskabsår; udefineret fra en negativ basis."
  ],
  "netIncomeYoY": [
   "Vækst i nettoresultat (år/år)",
   "Ændring i forhold til forrige regnskabsår; udefineret fra en negativ basis."
  ],
  "epsYoY": [
   "EPS-vækst (år/år)",
   "Udvandet indtjening pr. aktie i forhold til året før. 0 point, hvis seneste år gav underskud."
  ],
  "fcfYoY": [
   "FCF-vækst (år/år)",
   "Fri pengestrøm i forhold til året før."
  ],
  "revenueCagr": [
   "Omsætningens CAGR",
   "Gennemsnitlig årlig vækstrate over op til fem år."
  ],
  "epsCagr": [
   "EPS-CAGR",
   "Gennemsnitlig årlig vækst i udvandet EPS over op til fem år."
  ],
  "fcfCagr": [
   "FCF-CAGR",
   "Gennemsnitlig årlig vækst i fri pengestrøm over op til fem år."
  ],
  "bookValuePerShareCagr": [
   "CAGR for indre værdi pr. aktie",
   "Gennemsnitlig årlig vækst i egenkapital pr. aktie."
  ],
  "revenueGrowthYearsRatio": [
   "År med omsætningsvækst",
   "Andel af årene i perioden med højere omsætning end året før."
  ],
  "marginTrend": [
   "Ændring i overskudsgrad",
   "Ændring i overskudsgraden fra periodens første til sidste år (procentpoint)."
  ],
  "roicChange": [
   "Ændring i ROIC",
   "Ændring i ROIC fra periodens første til sidste år (procentpoint)."
  ],
  "profitableYearsRatio": [
   "Overskudsår",
   "Andel af årene i perioden med positivt nettoresultat."
  ],
  "fcfPositiveRatio": [
   "År med positiv FCF",
   "Andel af årene i perioden med positiv fri pengestrøm."
  ],
  "revenueVolatility": [
   "Volatilitet i omsætningsvækst",
   "Standardafvigelse for den årlige omsætningsvækst."
  ],
  "marginVolatility": [
   "Marginvolatilitet",
   "Standardafvigelse for overskudsgraden (nettomargin for finansielle selskaber)."
  ],
  "shareChangeYearly": [
   "Ændring i antal aktier (årlig)",
   "Positiv = udvanding, negativ = tilbagekøb."
  ],
  "marketCap": [
   "Markedsværdi",
   "Aktiekurs × udestående aktier."
  ],
  "enterpriseValue": [
   "Virksomhedsværdi (EV)",
   "Markedsværdi + finansiel gæld − kontanter."
  ],
  "peRatio": [
   "Kurs / indtjening (P/E)",
   "Markedsværdi / nettoresultat (TTM). Underskud giver 0."
  ],
  "psRatio": [
   "Kurs / omsætning (P/S)",
   "Markedsværdi / omsætning (TTM)."
  ],
  "pbRatio": [
   "Kurs / indre værdi (P/B)",
   "Markedsværdi / egenkapital."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Virksomhedsværdi / driftsresultat (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Virksomhedsværdi / EBITDA (TTM)."
  ],
  "fcfYield": [
   "FCF-afkast",
   "Fri pengestrøm (TTM) / markedsværdi."
  ],
  "pfcfRatio": [
   "Kurs / FCF",
   "Markedsværdi / fri pengestrøm (TTM)."
  ],
  "pegRatio": [
   "PEG-tal",
   "P/E divideret med EPS-CAGR (i %). Negativ vækst eller underskud giver 0."
  ],
  "dividendYield": [
   "Udbytteafkast",
   "Udbetalt udbytte (TTM) / markedsværdi."
  ],
  "shareholderYield": [
   "Aktionærafkast",
   "(Udbytte + aktietilbagekøb, TTM) / markedsværdi."
  ],
  "priceReturn1y": [
   "Aktiekurs, 1 år",
   "Samlet afkast af den justerede aktiekurs over 12 måneder."
  ],
  "priceCagr5y": [
   "Aktiekursens CAGR, 5 år",
   "Årligt afkast af den justerede aktiekurs."
  ],
  "volatility": [
   "Volatilitet (årlig)",
   "Standardafvigelse for månedlige logaritmiske afkast over 36 måneder × √12."
  ],
  "maxDrawdown": [
   "Største fald (5 år)",
   "Aktiekursens største fald fra top til bund."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Negativ egenkapital",
   "Forpligtelserne overstiger aktiverne. Det kan skyldes aggressive tilbagekøb, men tyder ofte på økonomisk pres."
  ],
  "persistentLosses": [
   "Vedvarende underskud",
   "Nettounderskud i mindst to regnskabsår i træk."
  ],
  "lossLastYear": [
   "Nettounderskud i seneste år",
   "Seneste regnskabsår sluttede med nettounderskud."
  ],
  "negativeFcf": [
   "Negativ fri pengestrøm",
   "Drift og investeringer bruger flere penge, end de skaber; ekstern finansiering er nødvendig."
  ],
  "lowCurrentRatio": [
   "Likviditetsgrad under 1,0",
   "De kortfristede forpligtelser overstiger omsætningsaktiverne (likviditetsgrad {value}). Kan håndteres med en stærk pengestrøm fra driften."
  ],
  "interestCoverageCritical": [
   "Utilstrækkelig rentedækning",
   "EBIT dækker kun renteudgifterne {value} — gældsbetjeningen er i fare."
  ],
  "interestCoverageWeak": [
   "Svag rentedækning",
   "EBIT dækker kun renteudgifterne {value}."
  ],
  "altmanDistress": [
   "Altman Z'' i krisezonen",
   "Z''-score på {value} ligger under krisegrænsen på 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' i gråzonen",
   "Z''-score på {value}: hverken i krise eller i den sikre zone (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Nettogæld uden positiv EBITDA",
   "Selskabet har nettogæld, men skaber ingen positiv EBITDA til at betjene den."
  ],
  "highLeverage": [
   "Høj gearing",
   "Nettogælden svarer til {value} EBITDA."
  ],
  "revenueDecline": [
   "Betydeligt omsætningsfald",
   "Omsætningen ændrede sig med {value} i forhold til året før."
  ],
  "heavyDilution": [
   "Kraftig udvanding af aktionærerne",
   "Antallet af aktier stiger i gennemsnit med {value} om året."
  ],
  "highSbc": [
   "Høj aktiebaseret aflønning",
   "Den aktiebaserede aflønning svarer til {value} af omsætningen."
  ],
  "lowEarningsQuality": [
   "Lav indtjeningskvalitet",
   "Periodiseringsgrad på {value}: overskuddet overstiger klart pengestrømmen fra driften."
  ],
  "dividendUncovered": [
   "Udbyttet er ikke dækket af FCF",
   "Udbyttet overstiger den frie pengestrøm (udbytteandel {value})."
  ],
  "goodwillHeavy": [
   "Høj goodwill og mange immaterielle aktiver",
   "{value} af de samlede aktiver er goodwill og immaterielle aktiver, der risikerer nedskrivning."
  ],
  "staleData": [
   "Forældede regnskabsdata",
   "Den seneste årsrapport dækker perioden, der sluttede {value}."
  ],
  "deepDrawdown": [
   "Kraftigt kursfald",
   "Aktiekursen er faldet {value} fra sin 5-årige top."
  ],
  "netCash": [
   "Nettokontanter",
   "Kontanterne overstiger den finansielle gæld med {value}."
  ],
  "highMargin": [
   "Høj overskudsgrad",
   "Overskudsgrad på {value}."
  ],
  "highRoic": [
   "Højt afkast af investeret kapital",
   "ROIC på {value}, langt over de typiske kapitalomkostninger."
  ],
  "alwaysProfitable": [
   "Overskud i hvert analyseret år",
   "Positivt nettoresultat i alle {years} regnskabsår."
  ],
  "strongGrowth": [
   "Stærk langsigtet vækst",
   "Omsætningens CAGR på {value}."
  ],
  "buybacks": [
   "Nettotilbagekøb af aktier",
   "Antallet af aktier falder i gennemsnit med {value} om året."
  ],
  "altmanSafe": [
   "Altman Z'' i den sikre zone",
   "Z''-score på {value}."
  ],
  "strongCashConversion": [
   "Stærk konvertering til kontanter",
   "Den frie pengestrøm svarer til {value} af nettoresultatet."
  ],
  "bankruptcyFiling": [
   "Konkursbegæring eller rekonstruktion",
   "Formular 8-K punkt 1.03 indberettet {value}."
  ],
  "restatement": [
   "Regnskaber omarbejdet",
   "Formular 8-K punkt 4.02 (tidligere offentliggjorte regnskaber kan ikke længere lægges til grund) indberettet {value}."
  ],
  "debtAcceleration": [
   "Gæld forfaldet før tid",
   "Formular 8-K punkt 2.04 (hændelse, der fremskynder en finansiel forpligtelse) indberettet {value}."
  ],
  "delistingNotice": [
   "Varsel om afnotering",
   "Formular 8-K punkt 3.01 (en noteringsregel er ikke opfyldt) indberettet {value}."
  ],
  "auditorChange": [
   "Skift af revisor",
   "Formular 8-K punkt 4.01 (skift af påtegnende revisor) indberettet {value}."
  ],
  "insiderBuying": [
   "Insiderkøb",
   "{count} insidere købte aktier på det åbne marked for i alt {value} de seneste 12 måneder."
  ],
  "insiderSelling": [
   "Omfattende insidersalg",
   "Insidere solgte for {value} uden for forudaftalte handelsplaner de seneste 12 måneder ({share} af markedsværdien)."
  ]
 },
 "events": {
  "1.03": "Konkurs eller rekonstruktion",
  "4.02": "Omarbejdning af regnskaber",
  "2.04": "Fremskyndet forfald af en finansiel forpligtelse",
  "3.01": "Varsel om afnotering / brud på noteringsregler",
  "5.01": "Ændret kontrol",
  "2.01": "Gennemført opkøb eller frasalg",
  "2.05": "Omstrukturering / afvikling af aktiviteter",
  "2.06": "Væsentlig nedskrivning",
  "4.01": "Skift af revisor",
  "1.01": "Væsentlig aftale",
  "1.02": "Opsigelse af væsentlig aftale",
  "1.05": "Væsentlig cybersikkerhedshændelse",
  "5.02": "Ledelsesskift (administrerende direktør, finansdirektør eller bestyrelsesformand)"
 },
 "raw": {
  "income": "Resultatopgørelse",
  "cashflow": "Pengestrømsopgørelse",
  "balance": "Balance",
  "revenue": "Omsætning",
  "costOfRevenue": "Produktionsomkostninger",
  "grossProfit": "Bruttoresultat",
  "researchAndDevelopment": "Forskning og udvikling",
  "operatingIncome": "Driftsresultat (EBIT)",
  "depreciationAndAmortization": "Af- og nedskrivninger",
  "interestExpense": "Renteudgifter",
  "pretaxIncome": "Resultat før skat",
  "incomeTaxExpense": "Skat af årets resultat",
  "netIncome": "Nettoresultat",
  "epsDiluted": "EPS, udvandet ($)",
  "sharesDiluted": "Udvandede aktier (vægtet)",
  "operatingCashFlow": "Pengestrøm fra drift",
  "capex": "Investeringer",
  "freeCashFlow": "Fri pengestrøm",
  "shareBasedCompensation": "Aktiebaseret aflønning",
  "dividendsPaid": "Udbetalt udbytte",
  "buybacks": "Aktietilbagekøb",
  "totalAssets": "Aktiver i alt",
  "currentAssets": "Omsætningsaktiver",
  "cash": "Likvide beholdninger",
  "inventory": "Varebeholdninger",
  "accountsReceivable": "Tilgodehavender fra salg",
  "goodwill": "Goodwill",
  "intangibleAssets": "Immaterielle aktiver",
  "totalLiabilities": "Forpligtelser i alt",
  "currentLiabilities": "Kortfristede forpligtelser",
  "totalDebt": "Finansiel gæld",
  "equity": "Egenkapital",
  "retainedEarnings": "Overført resultat",
  "sharesOutstanding": "Udestående aktier"
 },
 "method": {
  "btPending": "Backtestresultaterne vises efter næste dataopdatering.",
  "btCaveats": "Forbehold: kun selskaber, der er noteret i dag, indgår (konkursramte og afnoterede mangler, så de svageste scorer klarede sig i virkeligheden endnu dårligere); kurserne er uden udbytte; dagens sektorbenchmarks bruges for hvert år; vægtene er finjusteret på samme periode, så den reelle forudsigelseskraft kan være noget lavere. Tidligere resultater er ingen garanti for fremtiden, og dette er ikke investeringsrådgivning.",
  "btDividend": "Udbyttesikkerhed: året efter nedsatte {safe} af de »sikre«, {moderate} af de »moderate«, {risky} af dem »i fare« og {unsafe} af de »usikre« udbetalere deres udbytte.",
  "btRisk": "Risiko: i femtedelen med lavest risiko var det største fald inden for 12 måneder i gennemsnit {lo}, og {blo} af aktierne faldt mere end halvdelen; i den mest risikable femtedel {hi} og {bhi}.",
  "btLoss": "Underskud året efter: af to selskaber, hvor det ene fik underskud året efter og det andet ikke, havde det underskudsgivende den laveste TeraScore med sandsynligheden {p} ({y} selskabsår; 50 % = gæt, 100 % = perfekt).",
  "btIc": "Ved {share} af de {k} testede datoer fulgtes en højere TeraScore i gennemsnit af bedre efterfølgende 12 måneder (gennemsnitlig rangkorrelation {ic}; 0 = ingen sammenhæng, 1 = perfekt).",
  "btWorst": "svageste 20 %",
  "btBest": "bedste 20 %",
  "btDrawdown": "Gns. største fald",
  "btBigLoss": "Faldt >50 %",
  "btExcess": "Merafkast (12 mdr.)",
  "btAvg": "gns. score",
  "btQuintile": "Femtedel",
  "btIntro": "Metoden er også målt på historiske data. Hvert kvartal fra {from} til {to} blev hvert selskab vurderet, som det kunne være sket dengang – kun med allerede offentliggjorte årsrapporter og til dagens aktiekurs – og sammenlignet med, hvad der skete de følgende 12 måneder. {n} observationer, {c} selskaber, markedsværdi på mindst {mc}. Merafkast: selskabets kursændring over 12 måneder minus medianselskabets på samme dato.",
  "btTitle": "Hvor pålideligt er det? Backtest",
  "runwayText": "Hvis den frie pengestrøm er negativ (selskabet brænder penge af), kan likviditeten højst få den score, som likviditetshorisonten berettiger: hvor mange år de likvide aktiver dækker det nuværende forbrug ({bad} år eller mindre = 0 point, {good} år eller mere = 100).",
  "smoothText": "Marginer og kapitalafkast (ROIC, ROE, ROA) vurderes med {a} % på seneste år og {b} % på gennemsnittet af de to foregående år, så et enkelt usædvanligt år ikke får scoren til at svinge. Selskabssiden viser denne 3-årige basis under den seneste værdi.",
  "title": "Metode",
  "intro": "Hvert selskab bringes på samme dataskabelon ud fra de reviderede årsrapporter (10-K / 20-F) og de seneste kvartalsrapporter (10-Q). Hvert nøgletal omregnes til en score på 0–100; hver dimension er det vægtede gennemsnit af sine nøgletal. 100 er bedst — undtagen for Risiko, hvor lavere er bedre.",
  "scaling": "Skalaen er lineær mellem værdien, der giver 0 point, og værdien, der giver 100 point, og begrænses uden for dette interval. Inden for et område springes manglende nøgletal over, og de resterende vægte normaliseres igen; et område vurderes kun, når nøgletal med mindst halvdelen af dets vægt findes. Datadækningen er den andel af TeraScore, målt på vægt, der bygger på data.",
  "partial": "Delvis analyse. Når et selskabs indberetninger mangler data for et område, tæller området i TeraScore som neutrale {s}, eller som gennemsnittet af selskabets øvrige områder, hvis det er lavere – så manglende data aldrig kan løfte scoren (i backtesten klarede selskaber med huller sig dårligere end fuldstændige selskaber med samme score). Tal, der ikke mangler, men er udefinerede – vækst fra en nul- eller negativ basis, ROIC med negativ investeret kapital, udbytteandelen for et selskab, der ikke udbetaler udbytte – udelades i stedet af området. Datadækningen er den andel af TeraScore (målt på vægt), der bygger på data. Under 80 % viser listerne »◐ Delvis · 65 %« mellem selskabets navn og dets TeraScore; selskabssiden viser procenten, så snart den er under 100 %, og nævner de manglende områder. Med færre end 5 områder, der kan vurderes, er der ingen TeraScore (»Få data«); selskaber uden årsrapport endnu vises som »Ingen analyse« eller »Nynoteret«.",
  "estimates": "Estimerede tal. Når et selskab ikke indberetter en linje for driftsresultat, anslås driftsresultatet (EBIT) som resultat før skat plus renteudgifter (ikke for banker og forsikringsselskaber). Et selskab, der ikke har indberettet lån eller renteudgifter i de seneste to regnskabsår, og hvis langfristede forpligtelser er under 15 % af aktiverne, betragtes som gældfrit. Selskabssiden oplister sådanne estimater; rådata viser tallene, som de er indberettet. Nogle selskaber indberetter investeringer kun under deres eget XBRL-element, som SEC's standarddata ikke indeholder; så estimeres de ud fra selskabets egen andel af investeringer i omsætningen i de nærmeste år, hvor begge er indberettet, ellers ud fra af- og nedskrivninger.",
  "bands": "Karakterintervaller:",
  "profiles": "Banker, forsikringsselskaber og mæglere (finansiel profil) samt REIT'er (ejendomsprofil) vurderes med tilpassede nøgletal og grænser, som vises nedenfor, hvor de afviger.",
  "overall": "TeraScore (samlet)",
  "overallText": "Vægtet gennemsnit af de ni fundamentale områder (motor 2.1). Vægtene er finjusteret ud fra backtesten nedenfor: områder, der bedre adskilte senere vindere og tabere samt senere underskud, vægter mere (stabilitet, værdiansættelse, pengestrøm); dem, der gjorde det dårligere, vægter mindre (likviditet, balance – som beholder en andel på 30 % i risikoscoren). På hver selskabsside viser »Hvad løfter, og hvad trækker TeraScore ned?« hvert områdes bidrag: 50 + Σ vægt × (score − 50).",
  "riskTitle": "Risiko",
  "distressTitle": "Risiko for finansielle problemer",
  "distressText": "Point: Altman Z'' i krisezonen +3 / gråzonen +1; negativ egenkapital uden positiv FCF +2; negativ FCF +1; nettounderskud +1; rentedækning < 1,5× +2; nettogæld uden positiv EBITDA +1; soliditetsgrad < 5 % (finansielle selskaber) +2. 2–3 point = forhøjet, 4+ = høj.",
  "trendTitle": "Langsigtet tendens",
  "trendText": "70 % langsigtet vækst + 30 % vækst i seneste år, justeret med op til ±5 point for overskudsgradens tendens. ≥ 65 i bedring, 40–64 stabil, < 40 i forværring. Beskriver fortiden; ingen prognose.",
  "stylesTitle": "Investeringsprofil",
  "stylesText": "Kvalitet: rentabilitet ≥ 70, stabilitet ≥ 70, balance ≥ 60, ingen kritiske advarsler. Vækst: langsigtet vækst ≥ 70. Værdi: værdiansættelse ≥ 65. Udbytte: udbytteafkast ≥ 2 % dækket af FCF. Spekulativ: kritisk advarsel eller underskud i de fleste år.",
  "sectorTitle": "Sektorsammenligning",
  "sectorText": "Hver score rangeres også i forhold til alle analyserede selskaber i samme sektor (percentil).",
  "limitsTitle": "Begrænsninger",
  "limitsText": "Scorerne bygger udelukkende på indberettede regnskabstal og markedskurser. De afspejler ikke ledelsens kvalitet, konkurrenceposition, nyheder eller forventninger. Ikke investeringsrådgivning.",
  "logosText": "Selskabernes logoer kommer fra Financial Modeling Preps offentlige logobilleder. De er de pågældende selskabers varemærker og vises kun for at identificere dem; et selskab uden logo vises med sit forbogstav.",
  "profileGeneral": "Generel",
  "profileFinancial": "Finansiel",
  "profileRealEstate": "Ejendomme",
  "eventsTitle": "Større selskabsbegivenheder (8-K)",
  "eventsText": "Væsentlige begivenheder hentes fra SEC-formular 8-K fra de seneste 12 måneder, hvor kun punkttyper med stor betydning beholdes. Konkurs (1.03) og omarbejdning (4.02) er kritiske advarsler; fremskyndet forfald af gæld (2.04), varsel om afnotering (3.01) og skift af revisor (4.01) er advarsler, og de øger alle risiko- og krisescoren.",
  "relativeTitle": "Sektorrelativ vurdering",
  "relativeText": "Marginer, afkast, kapitalstruktur, likviditet og værdiansættelsesmultipler afhænger stærkt af branchen. For disse nøgletal er scoren 50 % absolut (grænserne ovenfor) og 50 % relativ: selskabets placering mellem 10. og 90. percentil blandt etablerede sammenlignelige selskaber i sektoren (markedsværdi ≥ $300M, omsætning ≥ $50M, mindst 20 sammenlignelige). Sektormedianen vises ved siden af hvert nøgletal. Nøgletal for vækst, stabilitet og risiko bruger kun absolutte grænser.",
  "insiderText": "Fra SEC's kvartalsvise Form 4-datasæt for de seneste 12 måneder. Kun køb og salg på det åbne marked tæller. Køb fra mindst to insidere på i alt $100.000 eller mere er en styrke; salg uden for 10b5-1-planer på over 1 % af markedsværdien er en advarsel.",
  "currencyTitle": "Udenlandske selskaber og valutaer",
  "currencyText": "Udenlandske selskaber noteret i USA (formular 20-F / 40-F, IFRS) analyseres i deres regnskabsvaluta; nøgletallene er valutaneutrale. Til værdiansættelsen omregnes markedsværdien i dollar til ECB's referencekurs (andre kilder for valutaer, som ECB ikke offentliggør). Udenlandske private udstedere indberetter ikke kvartalsrapporter i XBRL, så deres værdiansættelse bygger på seneste regnskabsår.",
  "historyText": "TeraScore-ændringer vurderer hvert selskab ved udgangen af hvert regnskabsår kun med de oplysninger, der var tilgængelige dengang: årsrapporter frem til det år, 8-K-begivenheder fra de foregående 12 måneder og aktiekursen på datoen (markedsværdien anslås ud fra dagens markedsværdi, kursændringen og ændringen i antal aktier). TTM-tal, insiderdata og aktuelle markedsdata bruges ikke for tidligere år, og dagens sektorbenchmarks anvendes på alle år. Desuden gemmer hver mandagsopdatering et øjebliksbillede af den aktuelle TeraScore; ændringer over 4 og 13 uger sammenlignes med det seneste øjebliksbillede, der er mindst så gammelt.",
  "peersText": "Lignende selskaber hentes fra samme sektor. Hver kandidats afstand er forskellen i logaritmen af markedsværdien plus et tillæg svarende til en størrelsesforskel på 4,5×, hvis den tilhører en anden branche, så selskaber i samme branche og af lignende størrelse kommer først, mens de største selskaber matches med de største i deres sektor. Kun vurderede selskaber indgår, og én aktieklasse pr. selskab.",
  "dividendText": "Udbyttesikkerheden vurderer på en skala fra 0 til 100, hvor sandsynligt det er, at det nuværende udbytte fastholdes: 75 eller mere er sikkert, 55–74 moderat, 35–54 i fare, under 35 usikkert. Komponenter uden data udelades, og de resterende vægte skaleres om.",
  "portfolioText": "Porteføljens TeraScore, risiko og udbytteafkast er gennemsnit vægtet efter positionernes værdi; P/E er den samlede værdi divideret med den indtjening, der tilfalder beholdningerne (underskudsgivende selskaber udeladt). Advarsler: en enkelt position over {p}, en sektor over {s}, færre end {n} beholdninger, kritiske advarsler, høj risiko for finansielle problemer og svage TeraScores.",
  "quarterlyText": "Kvartalstallene dækker de seneste 12 kvartaler fra 10-Q- og 10-K-indberetninger. Strømme er tremånedersbeløb: indberettet direkte eller udledt af år-til-dato-tal; fjerde kvartal er årsbeløbet minus de første ni måneder. Tal pr. aktie og antal aktier vises kun, når de er indberettet for de tre måneder, justeret for senere aktiesplit. Balanceposter er opgjort ved kvartalets udgang.",
  "portfolioEtfText": "ETF'er (børshandlede fonde) kan også tilføjes: de værdiansættes til dagskursen, har ingen TeraScore og indgår ikke i tjekket af positioner, sektorer og antal beholdninger, da en fond allerede er diversificeret. Deres udbytteafkast hentes fra Nasdaq, når det offentliggøres; ellers kan det indtastes manuelt.",
  "zero": "0 point",
  "hundred": "100 point"
 },
 "ai": {
  "button": "Spørg AI",
  "title": "AI-assistent",
  "intro": "Spørg om tallene på denne side eller om metoden – jeg forklarer det i enkle ord.",
  "placeholder": "Skriv dit spørgsmål…",
  "send": "Send",
  "close": "Luk",
  "note": "Svarene skrives af AI og kan indeholde fejl. Ikke investeringsrådgivning.",
  "error": "Assistenten er ikke tilgængelig lige nu. Prøv igen senere.",
  "rate": "For mange spørgsmål fra denne adresse. Prøv igen om en time.",
  "thinking": "Tænker…",
  "qCompany1": "Hvad betyder likviditet?",
  "qCompany2": "Hvorfor er risikoscoren, som den er?",
  "qCompany3": "Hvad hæver og hvad sænker TeraScore?",
  "qMethod1": "Hvordan beregnes TeraScore?",
  "qMethod2": "Hvad betyder risikoscoren?",
  "qMethod3": "Hvad er en delvis analyse?"
 }
};
