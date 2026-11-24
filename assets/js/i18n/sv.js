// Swedish.
export default {
 "meta": {
  "name": "Svenska",
  "short": "SV",
  "locale": "sv-SE"
 },
 "ui": {
  "classTitle": "Bolaget har flera noterade aktieslag som främst skiljer sig i rösträtt. Finansiella uppgifter och TeraScore är desamma för alla.",
  "classNonVoting": "Utan rösträtt",
  "classVoting": "Med rösträtt",
  "classLetter": "Serie {c}",
  "slogan": "Det smarta verktyget för investerare.",
  "notApplicable": "ej tillämpligt",
  "bdMissing": "◐ = område som inte kunde poängsättas på grund av brist på data: det räknas som neutrala {s}, eller som snittet av bolagets övriga områden om det är lägre, så saknade data kan aldrig höja poängen.",
  "bdNote": "Med start från 50 lägger varje område till eller drar ifrån sin vikt × (sin poäng − 50); summan är TeraScore ({s}, avrundat).",
  "bdMissingShort": "data saknas → {s}",
  "bdLowers": "Sänker",
  "bdLifts": "Höjer",
  "bdTitle": "Vad höjer och vad sänker TeraScore?",
  "basis3y": "3-årsbas",
  "netCashLoss": "nettokassa, förlustbringande: {s} p",
  "runwayCap": "begränsar likviditeten medan bolaget bränner kassa",
  "capLabel": "tak",
  "yearsUnit": "{n} år",
  "pfCurrency": "Valuta",
  "pfAllocTitle": "Fördelning",
  "pfByHolding": "Per innehav",
  "pfByCurrency": "Per handelsvaluta",
  "pfHistTitle": "Portföljens utveckling",
  "pfHistLoading": "Läser in kurshistorik…",
  "pfHistValue": "Värde på nuvarande innehav",
  "pfHistValueSub": "Månadsvis, senaste två åren, i {c} (utländska kurser till dagens växelkurs).",
  "pfHistMissing": "Ingen kurshistorik, ej medräknade: {list}.",
  "pfHistScoreWeekly": "Portföljens TeraScore, vecka för vecka",
  "pfHistScoreYearly": "Portföljens TeraScore, per räkenskapsår",
  "pfHistScoreSub": "Bolagen viktas efter dagens värde (ETF:er har inget TeraScore).",
  "etfAcc": "ackumulerande",
  "etfDist": "utdelande",
  "cmpPartialNote": "Data saknas i dessa bolags rapporter, så analysen är ofullständig och poängen mindre säkra: {list}. Områden markerade ”data saknas” räknas som högst neutrala 50, så saknade data höjer aldrig TeraScore.",
  "showMore": "Visa fler",
  "tagline": "Fundamental aktieanalys, tydligt.",
  "heroText": "Varje bolag noterat på Nasdaq, NYSE, NYSE American och Cboe poängsätts i tio investeringsdimensioner — lönsamhet, kassaflödets kvalitet, balansräkningens styrka, tillväxt, värdering och risk — utifrån reviderade SEC-rapporter och jämförs med bolag i samma sektor.",
  "navCompanies": "Bolag",
  "navCompare": "Jämför",
  "navMethod": "Metod",
  "language": "Språk",
  "searchPlaceholder": "Sök kortnamn eller bolagsnamn (t.ex. AAPL, Apple)",
  "allSectors": "Alla sektorer",
  "onlyAnalyzed": "Analyserade bolag",
  "allCompanies": "Alla bolag",
  "watchlist": "Bevakningslista",
  "results": "{n} träffar",
  "analyzedOf": "{a} analyserade / {n} bolag",
  "updated": "Uppdaterad {d}",
  "company": "Bolag",
  "noData": "data saknas",
  "noResults": "Inga bolag matchar din sökning.",
  "prev": "Föregående",
  "next": "Nästa",
  "demoBadge": "DEMO",
  "demoNote": "Bolag markerade DEMO visar ungefärliga exempelsiffror tills datauppdateringen läser in officiella SEC-uppgifter.",
  "back": "Tillbaka till listan",
  "tabAnalysis": "Analys",
  "tabRaw": "Finansiella rapporter",
  "demoNotice": "Demodata: ungefärliga exempelsiffror. Datauppdateringen ersätter dem med officiella SEC-rapporter.",
  "notFound": "Inget bolag hittades med kortnamnet {t}.",
  "lastFy": "Senaste räkenskapsår: {y}",
  "ttmBasis": "Värdering på siffror för de senaste tolv månaderna (TTM) till {d}",
  "annualBasis": "Värdering på siffror för det senaste räkenskapsåret",
  "overallScore": "TeraScore",
  "risk": "Risk",
  "distress": "Risk för finansiell kris",
  "trend": "Långsiktig trend",
  "coverage": "Datatäckning",
  "watchEmpty": "Din bevakningslista är tom. Tryck på stjärnan ☆ i ett bolags rad för att lägga till det här.",
  "now": "Nu",
  "today": "I dag",
  "yesterday": "I går",
  "updatedLabel": "Uppdaterad",
  "searchFuzzy": "Ingen exakt träff för ”{q}”. Liknande namn:",
  "years": "{n} år",
  "marketCap": "Börsvärde",
  "price": "Kurs",
  "sector": "Sektor",
  "industry": "Bransch",
  "sectionScores": "Poängkort",
  "sectionFlags": "Varningssignaler och styrkor",
  "sectionCharts": "Historisk utveckling",
  "sectionKey": "Nyckeltal",
  "howCalculated": "Beräkningsdetaljer",
  "weight": "vikt",
  "points": "p",
  "notScored": "e.t.",
  "sectorRank": "Bättre än {p} % av bolagen i {s}",
  "sectorRankShort": "Topp {p} % i sektorn",
  "riskExplain": "Risk = 100 − säkerhetspoäng. Säkerheten består till {f} % av fundamenta (balansräkning {bs} %, stabilitet {co} %, kassaflöde {cf} %, lönsamhet {pr} %, likviditet {li} %) och till {m} % av aktiekursens volatilitet och största fall (när kurshistorik finns). Varningssignaler höjer risken ({c} poäng per kritisk och {w} per annan varning) längs en mättande kurva: varje poäng stänger en del av det återstående avståndet till 100, så även de mest riskfyllda bolagen skiljer sig åt.",
  "noFlags": "Inga anmärkningsvärda signaler.",
  "critical": "Kritisk",
  "warningTag": "Varning",
  "strength": "Styrka",
  "footer": "TeraStockX beräknar alla poäng utifrån offentliga finansiella rapporter som lämnats in till SEC. Poängen beskriver historiska fundamenta; de är inte investeringsrådgivning och förutspår inte aktiekurser.",
  "engine": "Motor v{v}. Poängen beräknas från historiska, offentligt rapporterade data; inte investeringsrådgivning.",
  "currencyNote": "Belopp i {cur}.",
  "source": "Källa",
  "retrieved": "hämtad {d}",
  "downloadCsv": "Ladda ner CSV",
  "downloadJson": "JSON (mall)",
  "fiscalYear": "Räkenskapsår",
  "ttm": "TTM",
  "computedRatios": "Beräknade nyckeltal",
  "addWatch": "Lägg till i bevakningslistan",
  "removeWatch": "Ta bort från bevakningslistan",
  "compareWith": "Jämför",
  "compareTitle": "Jämför bolag",
  "compareHint": "Välj upp till sex bolag att jämföra sida vid sida.",
  "addCompany": "Lägg till bolag (namn eller kortnamn)…",
  "remove": "Ta bort",
  "dimension": "Dimension",
  "metric": "Nyckeltal",
  "chartRevenue": "Omsättning",
  "chartNetIncome": "Nettoresultat",
  "chartFcf": "Fritt kassaflöde",
  "chartMargin": "Rörelsemarginal",
  "chartPrice": "Aktiekurs (månadsvis, justerad)",
  "chartRevenueSub": "årsvis",
  "chartNetIncomeSub": "årsvis (röd = förlust)",
  "chartFcfSub": "operativt kassaflöde − investeringar",
  "chartMarginSub": "rörelseresultat / omsättning",
  "chartPriceSub": "månadsstängningar, senaste 6 åren",
  "notEnough": "Inte tillräckligt med data.",
  "errorLoad": "Något gick fel: {e}",
  "serveHint": "Om du öppnade filen direkt, starta en lokal webbserver (se README).",
  "profileFinancial": "Profil för finansiella institut: nyckeltal för likviditet, EBITDA och fritt kassaflöde gäller inte banker och försäkringsbolag och är exkluderade.",
  "profileRealEstate": "Fastighetsprofil: gränserna för skuldsättning och värdering är anpassade efter REIT:ers strukturellt högre skulder.",
  "styles": "Investeringsprofil",
  "navNews": "Marknad och händelser",
  "navData": "Finansiell data",
  "newsTitle": "Marknad och händelser",
  "newsIntro": "Väsentliga händelser som USA-noterade bolag officiellt rapporterat till SEC på formulär 8-K de senaste 12 månaderna: händelsetyper med stor påverkan (konkurs, omräknade rapporter, avnoteringsvarningar, ägarförändring, förvärv, omstruktureringar, nedskrivningar, byte av revisor, cybersäkerhetsincidenter) och ledningsbyten i stora bolag; rutinrapporter är exkluderade.",
  "newsEmpty": "Inga större händelser i nuvarande data.",
  "viewFiling": "Visa rapporten",
  "sectionEvents": "Större händelser (senaste 12 månaderna)",
  "eventsNone": "Inga större händelser rapporterade de senaste 12 månaderna.",
  "latestEvents": "Senaste större händelser",
  "allNews": "Alla större händelser",
  "dataTitle": "Finansiell data",
  "dataIntro": "Råa finansiella rapporter i TeraStockX-mallen: resultaträkning, kassaflödesanalys och balansräkning för upp till tio räkenskapsår plus de senaste tolv månaderna, med beräknade nyckeltal. Ladda ner som CSV eller JSON.",
  "dataPick": "Välj ett bolag (namn eller kortnamn)",
  "sev5": "Kritisk",
  "sev4": "Större",
  "sev3": "Betydande",
  "sev2": "Anmärkningsvärd",
  "allSeverities": "Alla händelsetyper",
  "onlyCritical": "Endast kritiska och större",
  "openAnalysis": "Öppna analysen",
  "tabCompanies": "Aktier",
  "tabNews": "Händelser",
  "tabData": "Data",
  "tabCompare": "Jämför",
  "tabMethod": "Metod",
  "newsTop": "Viktigast (kritiska händelser; större händelser i bolag över $1B)",
  "filters": "Filter för aktiescreening",
  "filtersActive": "{n} aktiva",
  "reset": "Återställ filter",
  "minScore": "Lägsta TeraScore",
  "maxRisk": "Högsta risk",
  "anyValue": "Alla",
  "minCap": "Lägsta börsvärde",
  "minDividend": "Lägsta direktavkastning",
  "exchange": "Börs",
  "allExchanges": "Alla börser",
  "styleFilter": "Investeringsprofil:",
  "noCritical": "Inga kritiska signaler",
  "pe": "P/E",
  "dividendYieldShort": "Dir.avk.",
  "sectorMedian": "Sektormedian",
  "insiderTitle": "Insynstransaktioner",
  "insiderBuys": "Köp på öppna marknaden",
  "insiderSells": "Försäljningar på öppna marknaden",
  "insiderNone": "Inga insynsköp eller -försäljningar på öppna marknaden de senaste 12 månaderna.",
  "insiderForeign": "Utländska privata emittenter är undantagna från Form 4-rapportering; inga insynsdata finns.",
  "insiderPlanned": "Varav enligt handelsplaner enligt 10b5-1",
  "insiderPeriod": "SEC Form 4-rapporter, {from} – {to}. Endast köp (kod P) och försäljningar (kod S) på öppna marknaden visas; tilldelningar, optionslösen och skatteavdrag är exkluderade.",
  "insiderCount": "{n} transaktioner · {p} insynspersoner",
  "insiderDate": "Datum",
  "insiderName": "Insynsperson",
  "insiderType": "Transaktion",
  "insiderShares": "Aktier",
  "insiderValue": "Värde",
  "insiderPurchase": "Köp",
  "insiderSale": "Försäljning",
  "insiderPlanTag": "10b5-1-plan",
  "alertsTitle": "Bevakningsaviseringar",
  "alertsSeen": "Markera alla som sedda",
  "alertScore": "{t}: TeraScore ändrades från {from} till {to}",
  "alertRisk": "{t}: risken steg från {from} till {to}",
  "alertDistress": "{t}: risken för finansiell kris är nu {level}",
  "alertEvent": "{t}: ny större händelse – {event} ({date})",
  "alertCritical": "{t}: ny kritisk signal – {flag}",
  "fxNote": "rapporter i {cur}, omräknade till 1 {cur} = {rate} USD",
  "navTrend": "TeraScore-förändringar",
  "tabTrend": "Trend",
  "trendIntro": "Hur bolagens TeraScore förändras över tid. Vyn per räkenskapsår poängsätter varje bolag vid slutet av varje räkenskapsår med enbart det som var känt då (årsredovisningar, 8-K-händelser under de föregående 12 månaderna och aktiekursen det datumet). Veckovisa ögonblicksbilder läggs till vid varje måndagsuppdatering, så förändringar över 4 och 13 veckor visas efter de första veckorna.",
  "trendPeriod": "Period",
  "trendPeriodFy": "Förändring mot föregående räkenskapsår",
  "trendPeriod4w": "Förändring över 4 veckor",
  "trendPeriod13w": "Förändring över 13 veckor",
  "trendUp": "Största förbättringar",
  "trendDown": "Största försämringar",
  "trendChange": "Förändring",
  "trendFrom": "från {v}",
  "trendWeeklyEmpty": "Veckovisa ögonblicksbilder samlas in vid varje måndagsuppdatering; vyn fylls på efter de första veckorna.",
  "trendNote": "Förändringarna anges i TeraScore-poäng. Poängen per räkenskapsår tillämpar dagens sektorjämförelser även på tidigare år.",
  "trendAnnualChart": "TeraScore per räkenskapsår",
  "trendAnnualSub": "dåvarande poäng vid varje räkenskapsårs slut",
  "trendWeeklyChart": "TeraScore, veckovis",
  "trendWeeklySub": "ögonblicksbild från varje måndagsuppdatering",
  "trendAll": "Alla förändringar",
  "navPortfolio": "Portfölj",
  "tabPortfolio": "Portfölj",
  "addPortfolio": "Lägg till i portföljen",
  "inPortfolio": "I portföljen",
  "pdfReport": "PDF-rapport",
  "minDivSafety": "Utdelningssäkerhet",
  "peersTitle": "Liknande bolag",
  "peersNone": "Inga jämförbara poängsatta bolag i den här sektorn.",
  "peerMedian": "Median för jämförbara bolag",
  "peersSub": "De mest jämförbara bolagen inom {s}, efter bransch och bolagsstorlek.",
  "peersRank": "{t} ligger på plats #{r} av {n} i gruppen efter TeraScore.",
  "peersCompare": "Jämför i detalj",
  "dividendTitle": "Utdelning",
  "dividendSafety": "Utdelningssäkerhet",
  "dividendYield": "Direktavkastning",
  "dps": "Utdelning per aktie",
  "dpsCagr": "Utdelningstillväxt (5-årig CAGR)",
  "yearsPaid": "Utbetald utan avbrott",
  "yearsN": "{n} år",
  "yearsRaised": "Höjningar i följd",
  "dividendCuts": "Sänkningar (10 år)",
  "earningsPayout": "Utdelningsandel (vinst)",
  "fcfPayout": "Utdelningsandel (fritt kassaflöde)",
  "payoutUncovered": "inte täckt",
  "dividendNone": "Bolaget lämnar ingen utdelning.",
  "dividendNoneShort": "ingen utdelning",
  "dividendNote": "Utdelning per aktie beräknas som utbetald kontantutdelning delat med antalet aktier efter utspädning, så extrautdelningar syns som hopp. Utdelningsandelarna använder de senaste tolv månaderna när de finns.",
  "chartDps": "Utdelning per aktie",
  "chartDpsSub": "utbetald kontantutdelning / aktier efter utspädning",
  "period": "Period",
  "periodAnnual": "Årsvis",
  "periodQuarterly": "Kvartalsvis",
  "quarterEnd": "Kvartal som slutade",
  "quarterlyNote": "Tremånaderssiffror. När ett kvartal bara rapporteras som ackumulerat hittills i år är siffran det ackumulerade beloppet minus föregående kvartals; fjärde kvartalet är helårssiffran minus de första nio månaderna.",
  "quarterlyNone": "Inga kvartalssiffror finns.",
  "quarterlyForeign": "Utländska privata emittenter lämnar bara årsredovisningar (20-F / 40-F); kvartalssiffror finns inte.",
  "pfIntro": "Ange dina innehav för att se portföljens värdeviktade TeraScore, risk, utdelningsintäkter, sektorfördelning och koncentrationsvarningar. Portföljen sparas bara i den här webbläsaren.",
  "pfAdd": "Lägg till",
  "pfFromWatch": "Lägg till bevakningslistan (1 aktie vardera)",
  "pfNeedShares": "Ange antal aktier.",
  "pfEmpty": "Portföljen är tom. Lägg till ett bolag och antal aktier ovan.",
  "pfValue": "Portföljvärde",
  "pfScore": "Viktat TeraScore",
  "pfIncome": "Årliga utdelningsintäkter",
  "pfPe": "Portföljens P/E",
  "pfHoldings": "Innehav",
  "pfSectors": "Sektorfördelning",
  "pfOther": "Övrigt",
  "pfChecks": "Portföljkontroller",
  "pfOk": "Inga varningar om koncentration eller kvalitet.",
  "pfInfo": "Obs",
  "pfShares": "Aktier",
  "pfPrice": "Kurs",
  "pfValueCol": "Värde",
  "pfWeight": "Vikt",
  "pfNote": "Kurser och poäng per senaste datauppdatering ({d}). Värden i {c}; europeiska ETF:er prissätts i sin egen handelsvaluta och räknas om till dagens växelkurs.",
  "reportTitle": "Bolagsrapport",
  "printPdf": "Skriv ut / spara som PDF",
  "printHint": "Välj ”Spara som PDF” i utskriftsdialogen.",
  "reportFinancials": "Finansiell sammanfattning för fem år",
  "profile": "Investeringsprofil",
  "ratedCompanies": "Bolag med TeraScore",
  "installFooter": "Installera appen",
  "installBanner": "Installera TeraStockX som app i din telefon, surfplatta eller dator.",
  "installHow": "Så installerar du",
  "close": "Stäng",
  "installTitle": "Installera TeraStockX som app",
  "installIntro": "TeraStockX kan installeras direkt från den här webbplatsen, utan appbutik och med en försumbar nedladdningsstorlek. Den öppnas sedan från sin egen ikon, i helskärm, som vilken app som helst, och visar alltid de senaste uppgifterna.",
  "installDone": "Du använder den installerade appen.",
  "installNow": "Installera nu",
  "installYourDevice": "Din enhet",
  "installIos": "iPhone och iPad",
  "installAndroid": "Android",
  "installDesktop": "Dator (Chrome, Edge)",
  "installNote": "Appen är densamma som webbplatsen: datauppdateringar kommer automatiskt, och din bevakningslista och portfölj stannar på den här enheten. Ta bort den som vilken app som helst.",
  "pfAddPlaceholder": "Bolag eller ETF (namn eller kortnamn)…",
  "pfScoreCover": "täcker {p} av portföljen",
  "pfEtfs": "ETF:er",
  "etfExpense": "Årlig avgift {v}",
  "etfNoScore": "ETF:er har inget TeraScore: en fond har inga egna finansiella rapporter.",
  "etfYieldInput": "Direktavkastning (%)",
  "etfNote": "ETF:er har inget TeraScore; det viktade TeraScore och risken avser bara bolagen.",
  "etfYieldMissing": "Datakällan publicerar ingen direktavkastning för {list}. Ange den i kolumnen för avkastning (i %) för att räkna in den i utdelningsintäkterna.",
  "screensTitle": "Snabbsökningar",
  "colChangeFy": "Förändring",
  "filtersAndScreens": "Filter och snabbsökningar",
  "maxPe": "Max P/E",
  "minDrop": "Under 12-månadershögsta",
  "dropAtLeast": "minst {p}",
  "colFromHigh": "Från högsta",
  "contact": "Kontakt",
  "marketToday": "Marknaden i dag",
  "marketMore": "Marknad och händelser",
  "eventsTitle": "Större bolagshändelser (8-K)"
 },
 "pulse": {
  "themes": {
   "ai": "AI-aktier",
   "bigTech": "Big Tech",
   "semis": "Halvledare",
   "banks": "Banker",
   "energy": "Olja och gas",
   "crypto": "Kryptoaktier"
  },
  "hlIndex": "{n} {v} i dag",
  "hlTheme": "{n} {v} i dag (bäst {b}, svagast {w})",
  "hlUp": "{n} upp {v} i dag",
  "hlDown": "{n} ned {v} i dag",
  "hlReport": "{n} publicerade sin {f} ({form})",
  "annualReport": "årsredovisning",
  "quarterlyReport": "kvartalsrapport",
  "hlScore": "TeraScore för {n} ändrades med {v} poäng (nu {o})",
  "hlListing": "Nytt på börsen: {n}",
  "none": "Inget att visa i dag.",
  "notYet": "Marknadssammanfattningen visas efter nästa datauppdatering.",
  "bestWorst": "bäst {b} · svagast {w}",
  "asOf": "Kurser: {d} (fördröjda cirka 15 minuter). Vardagar uppdateras kurser, TeraScore, nyheter och nya rapporter var 5:e minut under amerikansk handelstid och var 10:e minut före och efter.",
  "headlines": "Dagens stora rörelser",
  "themesTitle": "Teman (dagens förändring viktad efter börsvärde)",
  "sectorsTitle": "Sektorer i dag",
  "gainers": "Största vinnare (från $2B)",
  "losers": "Största förlorare (från $2B)",
  "today": "I dag",
  "reports": "Nya kvartals- och årsrapporter",
  "filed": "Inlämnad",
  "scoreMoves": "Stora TeraScore-förändringar sedan i går",
  "newListings": "Nytt på börsen",
  "listed": "Noterad",
  "note": "Förändringar sedan föregående stängning. Teman och sektorer viktas efter börsvärde. TeraScore-förändringar jämförs med föregående dags poäng. Under handelsdagen visas dagsförändringen för bolag över cirka 2 miljarder dollar och de största fonderna; för mindre bolag efter den dagliga uppdateringen.",
  "noFilings": "Inga finansiella SEC-rapporter ännu",
  "notScoredYet": "Inte poängsatt ännu",
  "notScoredText": "Ett TeraScore kräver minst en årsredovisning (10-K eller 20-F). Nynoterade bolag får ett efter sin första årsredovisning; fram till dess visas kurs, börsvärde och eventuella kvartalssiffror.",
  "lastReport": "Senaste rapport",
  "storiesTitle": "Toppnyheter",
  "storiesNote": "Viktiga besked och stora kursrörelser i stora bolag (börsvärde över 10 miljarder dollar) de senaste dagarna. Rubrikerna kommer från bolagens egna rapporter till SEC, på originalspråket engelska.",
  "kind": {
   "leadership": "Ledningsbyte",
   "deal": "Fusion eller förvärv",
   "results": "Resultat",
   "critical": "Kritisk händelse",
   "major": "Större händelse",
   "restructuring": "Omstrukturering",
   "cyber": "Cybersäkerhetsincident",
   "board": "Styrelseförändring",
   "other": "Meddelande",
   "move": "Stor kursrörelse"
  },
  "when": {
   "pre": "förhandel",
   "post": "efterhandel",
   "day": "i dag",
   "last": "senaste handelsdagen"
  },
  "preNote": "Före öppning: dagsförändringarna nedan gäller föregående handelsdag ({d}). Stora bolags rörelser i förhandeln finns under Toppnyheter.",
  "postNote": "Efter stängning: dagsförändringarna nedan gäller dagens handel; stora bolags rörelser i efterhandeln finns under Toppnyheter.",
  "readMore": "Pressmeddelande (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Inga stora nyheter från stora bolag just nu.",
  "moreNews": "Alla nyheter",
  "asOfShort": "Kurser: {d}, fördröjda cirka 15 minuter",
  "themesShort": {
   "ai": "AI"
  }
 },
 "screens": {
  "top": {
   "name": "Högst TeraScore",
   "desc": "Alla poängsatta bolag, högst TeraScore först."
  },
  "bestRiskReward": {
   "name": "Bäst poäng, lägst risk",
   "desc": "TeraScore på minst 70 och risk på högst 30, ingen kritisk varning, börsvärde från $300M; sorterade efter TeraScore minus risk."
  },
  "safeLongTerm": {
   "name": "Säkrast på lång sikt",
   "desc": "TeraScore ≥ 65, risk ≤ 25, stabilitet ≥ 70, balansräkningens styrka ≥ 60, låg risk för finansiell kris, ingen kritisk varning, börsvärde från $2B; sorterade efter låg risk, stabilitet och balansräkning."
  },
  "lowRisk": {
   "name": "Lägst risk",
   "desc": "Risk på högst 20 och ingen kritisk varning; lägst risk först."
  },
  "improvers": {
   "name": "Störst förbättring förra året",
   "desc": "TeraScore upp minst 10 poäng mot föregående räkenskapsår, börsvärde från $300M; störst ökning först."
  },
  "growth": {
   "name": "Snabbväxare",
   "desc": "Tillväxt senaste räkenskapsåret ≥ 75 och långsiktig tillväxt ≥ 70, med TeraScore på minst 55, börsvärde från $300M."
  },
  "value": {
   "name": "Undervärderad kvalitet",
   "desc": "Värderingspoäng ≥ 70 (billig i förhållande till vinst och kassaflöde), TeraScore ≥ 65, lönsamhet ≥ 60, ingen kritisk varning, börsvärde från $300M."
  },
  "dividend": {
   "name": "Säkra utdelningar",
   "desc": "Utdelningssäkerhet ≥ 75 och direktavkastning på minst 2,5 %, börsvärde från $300M; högst avkastning först."
  },
  "largeQuality": {
   "name": "Stora kvalitetsbolag",
   "desc": "Börsvärde på minst $50B och TeraScore på minst 70."
  },
  "highRisk": {
   "name": "Hög risk",
   "desc": "Risk på minst 70, eller hög risk för finansiell kris med risk på minst 55, börsvärde från $300M; mest riskfyllda först. Spekulativa aktier: var försiktig."
  },
  "decliners": {
   "name": "Störst försämring förra året",
   "desc": "TeraScore ned minst 10 poäng mot föregående räkenskapsår, börsvärde från $300M; störst nedgång först."
  },
  "dip": {
   "name": "Under toppen, billigare nu",
   "desc": "Kvalitetsbolag (TeraScore ≥ 65, risk ≤ 40, ingen kritisk varning, börsvärde från $300M) vars aktiekurs ligger 20–50 % under 12-månadershögsta (månadsstängningar); bäst TeraScore först. Större fall utesluts: de signalerar oftare problem än rabatt."
  },
  "lowPe": {
   "name": "Lågt P/E",
   "desc": "Lönsamma bolag med P/E 3–12 vars värderingspoäng också är minst 60 (EV/EBIT och kassaflödesavkastning bekräftar att aktien är billig), TeraScore ≥ 60, stabilitet ≥ 50, ingen kritisk varning, börsvärde från $300M. Ett P/E under 3 beror oftast på en engångsvinst och utesluts."
  }
 },
 "install": {
  "benefit1": "Egen ikon på hemskärmen, bredvid dina andra appar",
  "benefit2": "Öppnas i helskärm, utan webbläsarens adressfält",
  "benefit3": "Startar snabbare, och de bolag du såg senast öppnas även offline",
  "benefit4": "Uppdaterar sig själv: ingen ominstallation, ingen appbutik",
  "iphone1": "Öppna sidan i Safari.",
  "iphone2": "Tryck på Dela-knappen (fyrkanten med en pil uppåt) – på iPhone längst ned, på iPad uppe till höger.",
  "iphone3": "Scrolla ned och tryck på ”Lägg till på hemskärmen”.",
  "iphone4": "Tryck på ”Lägg till” uppe till höger. TeraStockX-ikonen visas på hemskärmen.",
  "android1": "Öppna sidan i Chrome.",
  "android2": "Tryck på ”Installera nu” ovan, eller öppna menyn (⋮) uppe till höger.",
  "android3": "Välj ”Installera app” (eller ”Lägg till på startskärmen”).",
  "android4": "Bekräfta med ”Installera”. Appen visas bland dina appar och på hemskärmen.",
  "desktop1": "Öppna sidan i Chrome eller Edge.",
  "desktop2": "Klicka på ”Installera nu” ovan, eller på installationsikonen längst till höger i adressfältet.",
  "desktop3": "Bekräfta med ”Installera”.",
  "desktop4": "TeraStockX öppnas i ett eget fönster och kan startas från Start-menyn, Dock eller Launchpad."
 },
 "dividend": {
  "safe": "Säker",
  "moderate": "Måttlig",
  "risky": "I riskzonen",
  "unsafe": "Osäker",
  "na": "Ej bedömd",
  "safeText": "Väl täckt av vinst och fritt kassaflöde, med en stabil historik.",
  "moderateText": "Täckt, men med begränsad marginal; en nedgång kan sätta press på den.",
  "riskyText": "Täckningen är tunn eller balansräkningen ansträngd; en sänkning är fullt möjlig.",
  "unsafeText": "Inte täckt av vinst eller kassaflöde, eller nyligen sänkt; ytterligare sänkning är trolig.",
  "naText": "Inte tillräckligt med data för en bedömning.",
  "parts": {
   "priceStability": "Kursstabilitet",
   "fcfPayout": "Täckning av fritt kassaflöde",
   "earningsPayout": "Täckning av vinst",
   "leverage": "Skuldsättning",
   "trackRecord": "Historik",
   "stability": "Vinststabilitet"
  },
  "partsText": {
   "priceStability": "Marknadsriskpoängen (aktiekursens volatilitet och största fall): ett kraftigt fall föregår ofta en utdelningssänkning.",
   "fcfPayout": "Utbetald utdelning / fritt kassaflöde: 100 poäng vid 40 % eller mindre (REIT:er: 80 %), 0 poäng vid 120 % eller mer (REIT:er: 130 %) eller vid negativt fritt kassaflöde.",
   "earningsPayout": "Utbetald utdelning / nettoresultat: 100 poäng vid 50 % eller mindre, 0 poäng vid 150 % eller mer eller vid förlust. Poängsätts inte för REIT:er.",
   "leverage": "Nettoskuld / EBITDA: 100 poäng vid 1× eller mindre, 0 poäng vid 5× eller mer. Poängsätts inte för banker, försäkringsbolag och REIT:er.",
   "trackRecord": "År med utdelning utan avbrott (60 %) och höjningar i följd (40 %), upp till 10 år; minus 35 poäng för varje sänkning på mer än 10 % de senaste 10 åren.",
   "stability": "Andel lönsamma år av de senaste fem."
  }
 },
 "pw": {
  "position": "{t} utgör {w} av portföljen (över {l}).",
  "sector": "{s} utgör {w} av portföljen (över {l}).",
  "few": "Bara {n} innehav: färre än {m} positioner gör portföljen sårbar för enskilda bolags risker.",
  "critical": "Kritisk varning: {list}.",
  "distress": "Hög risk för finansiell kris: {list}.",
  "weak": "TeraScore under {s}: {list}.",
  "unscored": "Ej bedömd (otillräckliga data): {list}."
 },
 "ocr": {
  "button": "Från en skärmbild",
  "loading": "Läser in textigenkänning (en gång, cirka 7 MB)…",
  "reading": "Läser bilden… {p} %",
  "privacy": "Bilden lämnar inte din enhet: den läses i webbläsaren.",
  "found": "Igenkända innehav: {n}",
  "check": "Kontrollera kortnamn och antal aktier, rätta vid behov och lägg sedan till dem.",
  "inPortfolio": "I din portfölj nu: {n} aktier (ersätts)",
  "add": "Lägg till i portföljen",
  "cancel": "Avbryt",
  "close": "Stäng",
  "none": "Inga aktier hittades i bilden. Prova en skarpare, större skärmbild där kortnamn eller bolagsnamn och antal aktier syns tydligt, eller lägg till dem manuellt.",
  "failed": "Textigenkänningen misslyckades: {e}",
  "needShares": "Ange antal aktier för varje markerad rad.",
  "hint": "Tips: skärmbilder av innehavslistan i din mäklarapp fungerar bäst; du kan välja flera samtidigt.",
  "readingN": "Läser bild {i} av {n}… {p} %",
  "foundImages": "Igenkända innehav: {n} (från {k} bilder)",
  "estimated": "≈ värde ÷ kurs, kontrollera"
 },
 "dq": {
  "partial": "Ofullständig",
  "partialTitle": "Ofullständig analys: {p} % av TeraScore bygger på data. Ej poängsatt på grund av brist på data (räknas som högst 50): {d}.",
  "partialTitleParts": "Ofullständig analys: {p} % av TeraScore bygger på data; flera nyckeltal saknas.",
  "little": "Lite data",
  "littleTitle": "Inte tillräckligt med data för ett TeraScore: minst 5 av de 9 områdena måste kunna poängsättas.",
  "none": "Ingen analys",
  "noneTitle": "Ingen årsredovisning med finansiella uppgifter finns ännu.",
  "newListing": "Nynoterad",
  "newTitle": "Nyligen noterad: får ett TeraScore efter sin första årsredovisning.",
  "newBadge": "NY",
  "legend": "”Ofullständig · 65 %” = analysen är ofullständig: bara den andelen av TeraScore bygger på data. Markeras under 80 %. Ett område utan data räknas som högst neutrala {s}, så en lucka kan aldrig höja poängen, men resultatet är mindre säkert.",
  "noticePartialTitle": "Ofullständig analys: {p} % av TeraScore bygger på data.",
  "noticePartial": "Dessa områden kunde inte poängsättas eftersom bolagets rapporter saknar data: {d}. De räknas som neutrala {s}, eller som snittet av bolagets övriga områden om det är lägre, så saknade data kan aldrig höja TeraScore; poängen är mindre säker än för ett fullständigt analyserat bolag.",
  "noticePartialParts": "Vissa nyckeltal saknas i bolagets rapporter. Inom varje område utelämnas de och de övriga nyckeltalens vikter ökar proportionellt, så TeraScore är mindre säkert än för ett fullständigt analyserat bolag.",
  "noticeLittle": "ett TeraScore kräver minst 5 områden som kan poängsättas; detta bolag har {n}. Områdena som kunde poängsättas visas nedan.",
  "estimated": "Uppskattat från andra rapporterade siffror: {list}.",
  "est": {
   "capex": "investeringar ≈ bolagets vanliga andel investeringar av omsättningen, eller avskrivningar (bolaget rapporterar dem bara under ett eget XBRL-element)",
   "operatingIncome": "rörelseresultat ≈ resultat före skatt (eller nettoresultat + inkomstskatt) + räntekostnader (bolaget redovisar ingen rad för rörelseresultat)",
   "totalDebt": "skuld = 0 (inga lån eller räntekostnader rapporterade de senaste två åren)"
  },
  "partialShort": "Ofullständig · {p} %",
  "coverageBadge": "Analysen {p} % klar (vissa data saknas)",
  "partialMobile": "{p} % data"
 },
 "dims": {
  "profitability": {
   "name": "Lönsamhet",
   "q": "Hur effektivt omvandlar bolaget omsättning och kapital till vinst?",
   "summary": "Rörelsemarginal {operatingMargin}, nettomarginal {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Kassaflödets kvalitet",
   "q": "Backas den rapporterade vinsten upp av kassa?",
   "summary": "FCF-marginal {fcfMargin}; FCF-konvertering {fcfConversion} av nettoresultatet; periodiseringsgrad {accrualRatio}; aktierelaterade ersättningar {sbcToRevenue} av omsättningen."
  },
  "balanceSheet": {
   "name": "Balansräkningens styrka",
   "q": "Hur stor skuldsättning bär bolaget i förhållande till vinst och eget kapital?",
   "summary": "Nettoskuld/EBITDA {netDebtToEbitda}, skuld/eget kapital {debtToEquity}, räntetäckningsgrad {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Likviditet",
   "q": "Kan kortfristiga åtaganden mötas med kortfristiga tillgångar?",
   "summary": "Balanslikviditet {currentRatio}, kassalikviditet {quickRatio}, likviditetsgrad {cashRatio}."
  },
  "growth1y": {
   "name": "Tillväxt (senaste räkenskapsåret)",
   "q": "Årlig utveckling i försäljning, vinst och kassaflöde.",
   "summary": "Omsättning {revenueYoY}, rörelseresultat {operatingIncomeYoY}, EPS {epsYoY}, fritt kassaflöde {fcfYoY} jämfört med föregående år."
  },
  "growthLong": {
   "name": "Långsiktig tillväxt",
   "q": "Genomsnittlig årlig tillväxt över upp till fem år.",
   "summary": "{windowYears}-årig CAGR: omsättning {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, eget kapital per aktie {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilitet",
   "q": "Hur förutsägbara och motståndskraftiga är resultaten?",
   "summary": "Lönsamt {profitableYearsRatio} av åren, positivt FCF {fcfPositiveRatio}; volatilitet i omsättningstillväxten {revenueVolatility}; Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "Kapitalallokering",
   "q": "Hur väl återförs kapital till aktieägarna och återinvesteras?",
   "summary": "Antal aktier {shareChangeYearly} per år; aktieägaravkastning {shareholderYield}; utdelning {payoutRatio} av FCF; förändring i ROIC {roicChange}."
  },
  "valuation": {
   "name": "Värdering",
   "q": "Hur dyr är aktien i förhållande till sina fundamenta?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, FCF-avkastning {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Risk",
   "q": "Samlad investeringsrisk (lägre är bättre).",
   "summary": "Risk för finansiell kris: {distress}. Årlig volatilitet {volatility}; största nedgång (5 år) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Marknadsrisk",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Utmärkt",
  "strong": "Stark",
  "moderate": "Måttlig",
  "weak": "Svag",
  "poor": "Dålig",
  "na": "Data saknas"
 },
 "riskGrades": {
  "excellent": "Mycket låg",
  "strong": "Låg",
  "moderate": "Måttlig",
  "weak": "Hög",
  "poor": "Mycket hög",
  "na": "Data saknas"
 },
 "distress": {
  "low": "Låg",
  "medium": "Förhöjd",
  "high": "Hög",
  "lowText": "Inga tecken på finansiell kris i nuvarande data.",
  "mediumText": "Vissa varningssignaler; läget bör bevakas.",
  "highText": "Flera indikatorer pekar på betydande finansiella problem."
 },
 "outlook": {
  "up": "Förbättras",
  "flat": "Stabil",
  "down": "Försämras",
  "unknown": "Otillräcklig historik",
  "upText": "Fundamenta har förbättrats stadigt de senaste åren.",
  "flatText": "Fundamenta har i stort sett stått still.",
  "downText": "Fundamenta har försämrats de senaste åren.",
  "unknownText": "Minst tre räkenskapsår krävs."
 },
 "verdict": {
  "excellent": "Exceptionellt starka fundamenta i de flesta dimensioner.",
  "strong": "Finansiellt sunt bolag med solida fundamenta.",
  "moderate": "Blandad fundamental profil med tydliga styrkor och svagheter.",
  "weak": "Svaga fundamenta; ökad försiktighet är befogad.",
  "poor": "Allvarliga fundamentala svagheter.",
  "na": "Otillräckliga data för en samlad bedömning."
 },
 "styles": {
  "quality": "Kvalitet",
  "growth": "Tillväxt",
  "value": "Värde",
  "income": "Utdelning",
  "speculative": "Spekulativ"
 },
 "sectors": {
  "technology": "Teknik",
  "healthcare": "Hälsovård",
  "financials": "Finans",
  "realEstate": "Fastigheter",
  "consumerDiscretionary": "Sällanköpsvaror",
  "consumerStaples": "Dagligvaror",
  "industrials": "Industri",
  "energy": "Energi",
  "utilities": "Kraftförsörjning",
  "communication": "Kommunikationstjänster",
  "materials": "Råvaror",
  "shell": "Skalbolag / SPAC",
  "other": "Övrigt"
 },
 "metrics": {
  "cashRunway": [
   "Kassans räckvidd",
   "Antal år som de likvida tillgångarna (kassa, eller omsättningstillgångar minus varulager och kundfordringar) skulle finansiera det nuvarande negativa fria kassaflödet. Sätter ett tak för likviditetspoängen: 0,75 år eller mindre = 0 poäng, 3 år eller mer = 100."
  ],
  "grossMargin": [
   "Bruttomarginal",
   "Bruttoresultat / omsättning."
  ],
  "operatingMargin": [
   "Rörelsemarginal",
   "Rörelseresultat (EBIT) / omsättning."
  ],
  "netMargin": [
   "Nettomarginal",
   "Nettoresultat / omsättning."
  ],
  "fcfMargin": [
   "FCF-marginal",
   "Fritt kassaflöde (operativt kassaflöde − investeringar) / omsättning."
  ],
  "roe": [
   "Avkastning på eget kapital (ROE)",
   "Nettoresultat / genomsnittligt eget kapital. Poängsätts inte när det egna kapitalet är negativt."
  ],
  "roa": [
   "Avkastning på totalt kapital (ROA)",
   "Nettoresultat / genomsnittliga totala tillgångar."
  ],
  "roic": [
   "Avkastning på investerat kapital (ROIC)",
   "NOPAT (EBIT × (1 − effektiv skattesats)) / genomsnittligt investerat kapital (eget kapital + skuld − kassa)."
  ],
  "fcfConversion": [
   "FCF-konvertering",
   "Fritt kassaflöde / nettoresultat. Vid nettoförlust ger positivt FCF 60 poäng."
  ],
  "accrualRatio": [
   "Periodiseringsgrad",
   "(Nettoresultat − operativt kassaflöde) / genomsnittliga totala tillgångar. Höga värden tyder på vinster som inte backas upp av kassa."
  ],
  "sbcToRevenue": [
   "Aktierelaterade ersättningar / omsättning",
   "Icke-kontant ersättning som späder ut aktieägarna."
  ],
  "capexToRevenue": [
   "Investeringsintensitet",
   "Investeringar / omsättning."
  ],
  "currentRatio": [
   "Balanslikviditet",
   "Omsättningstillgångar / kortfristiga skulder."
  ],
  "quickRatio": [
   "Kassalikviditet",
   "(Omsättningstillgångar − varulager) / kortfristiga skulder."
  ],
  "cashRatio": [
   "Likviditetsgrad",
   "Likvida medel / kortfristiga skulder."
  ],
  "debtToEquity": [
   "Skuld / eget kapital",
   "Finansiell skuld / eget kapital. Negativt eget kapital ger 0."
  ],
  "equityRatio": [
   "Soliditet",
   "Eget kapital / totala tillgångar."
  ],
  "liabilitiesToAssets": [
   "Skulder / tillgångar",
   "Summa skulder / summa tillgångar."
  ],
  "netDebt": [
   "Nettoskuld",
   "Finansiell skuld − kassa. Negativt = nettokassa."
  ],
  "netDebtToEbitda": [
   "Nettoskuld / EBITDA",
   "Antal år av EBITDA som krävs för att betala nettoskulden. Nettokassa ger 100 när EBITDA är positivt och 50 när det inte är det (kassan förbrukas); nettoskuld med negativt EBITDA ger 0."
  ],
  "interestCoverage": [
   "Räntetäckningsgrad",
   "EBIT / räntekostnader. Inga räntekostnader ger 100."
  ],
  "goodwillToAssets": [
   "Goodwill och immateriella tillgångar / tillgångar",
   "Andel tillgångar från förvärv; risk för nedskrivning."
  ],
  "payoutRatio": [
   "Utdelningsandel (av FCF)",
   "Utbetald utdelning / fritt kassaflöde. Poängsätts inte om ingen utdelning lämnas."
  ],
  "bookValuePerShare": [
   "Eget kapital per aktie",
   "Eget kapital / utestående aktier."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(rörelsekapital/tillgångar) + 3,26·(balanserade vinstmedel/tillgångar) + 6,72·(EBIT/tillgångar) + 1,05·(eget kapital/skulder). < 1,1 kris, > 2,6 säker."
  ],
  "piotroski": [
   "Piotroski F-score",
   "Nio ja/nej-tester av lönsamhet, skuldsättning, likviditet och operativ effektivitet (0–9)."
  ],
  "revenueYoY": [
   "Omsättningstillväxt (årlig)",
   "Förändring mot föregående räkenskapsår."
  ],
  "operatingIncomeYoY": [
   "Tillväxt i rörelseresultat (årlig)",
   "Förändring mot föregående räkenskapsår; odefinierad från en negativ bas."
  ],
  "netIncomeYoY": [
   "Tillväxt i nettoresultat (årlig)",
   "Förändring mot föregående räkenskapsår; odefinierad från en negativ bas."
  ],
  "epsYoY": [
   "EPS-tillväxt (årlig)",
   "Vinst per aktie efter utspädning mot föregående år. 0 poäng om senaste året är förlustbringande."
  ],
  "fcfYoY": [
   "FCF-tillväxt (årlig)",
   "Fritt kassaflöde mot föregående år."
  ],
  "revenueCagr": [
   "Omsättningens CAGR",
   "Genomsnittlig årlig tillväxttakt över upp till fem år."
  ],
  "epsCagr": [
   "EPS-CAGR",
   "Genomsnittlig årlig tillväxt i EPS efter utspädning över upp till fem år."
  ],
  "fcfCagr": [
   "FCF-CAGR",
   "Genomsnittlig årlig tillväxt i fritt kassaflöde över upp till fem år."
  ],
  "bookValuePerShareCagr": [
   "CAGR för eget kapital per aktie",
   "Genomsnittlig årlig tillväxt i eget kapital per aktie."
  ],
  "revenueGrowthYearsRatio": [
   "År med omsättningstillväxt",
   "Andel år i perioden med högre omsättning än året innan."
  ],
  "marginTrend": [
   "Förändring i rörelsemarginal",
   "Förändring i rörelsemarginalen från periodens första till sista år (procentenheter)."
  ],
  "roicChange": [
   "Förändring i ROIC",
   "Förändring i ROIC från periodens första till sista år (procentenheter)."
  ],
  "profitableYearsRatio": [
   "Lönsamma år",
   "Andel år i perioden med positivt nettoresultat."
  ],
  "fcfPositiveRatio": [
   "År med positivt FCF",
   "Andel år i perioden med positivt fritt kassaflöde."
  ],
  "revenueVolatility": [
   "Volatilitet i omsättningstillväxt",
   "Standardavvikelse för den årliga omsättningstillväxten."
  ],
  "marginVolatility": [
   "Marginalvolatilitet",
   "Standardavvikelse för rörelsemarginalen (nettomarginal för finansiella bolag)."
  ],
  "shareChangeYearly": [
   "Förändring i antal aktier (årlig)",
   "Positiv = utspädning, negativ = återköp."
  ],
  "marketCap": [
   "Börsvärde",
   "Aktiekurs × utestående aktier."
  ],
  "enterpriseValue": [
   "Företagsvärde (EV)",
   "Börsvärde + finansiell skuld − kassa."
  ],
  "peRatio": [
   "Pris / vinst (P/E)",
   "Börsvärde / nettoresultat (TTM). Förluster ger 0."
  ],
  "psRatio": [
   "Pris / omsättning (P/S)",
   "Börsvärde / omsättning (TTM)."
  ],
  "pbRatio": [
   "Pris / eget kapital (P/B)",
   "Börsvärde / eget kapital."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Företagsvärde / rörelseresultat (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Företagsvärde / EBITDA (TTM)."
  ],
  "fcfYield": [
   "FCF-avkastning",
   "Fritt kassaflöde (TTM) / börsvärde."
  ],
  "pfcfRatio": [
   "Pris / FCF",
   "Börsvärde / fritt kassaflöde (TTM)."
  ],
  "pegRatio": [
   "PEG-tal",
   "P/E delat med EPS-CAGR (i %). Negativ tillväxt eller förluster ger 0."
  ],
  "dividendYield": [
   "Direktavkastning",
   "Utbetald utdelning (TTM) / börsvärde."
  ],
  "shareholderYield": [
   "Aktieägaravkastning",
   "(Utdelningar + återköp av aktier, TTM) / börsvärde."
  ],
  "priceReturn1y": [
   "Aktiekurs, 1 år",
   "Totalavkastning för den justerade aktiekursen över 12 månader."
  ],
  "priceCagr5y": [
   "Aktiekursens CAGR, 5 år",
   "Årlig avkastning för den justerade aktiekursen."
  ],
  "volatility": [
   "Volatilitet (årlig)",
   "Standardavvikelse för månatliga logaritmiska avkastningar över 36 månader × √12."
  ],
  "maxDrawdown": [
   "Största nedgång (5 år)",
   "Aktiekursens största fall från topp till botten."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Negativt eget kapital",
   "Skulderna överstiger tillgångarna. Det kan bero på aggressiva återköp, men tyder ofta på finansiell press."
  ],
  "persistentLosses": [
   "Ihållande förluster",
   "Nettoförlust minst två räkenskapsår i rad."
  ],
  "lossLastYear": [
   "Nettoförlust senaste året",
   "Det senaste räkenskapsåret slutade med nettoförlust."
  ],
  "negativeFcf": [
   "Negativt fritt kassaflöde",
   "Verksamheten och investeringarna förbrukar mer kassa än de genererar; extern finansiering krävs."
  ],
  "lowCurrentRatio": [
   "Balanslikviditet under 1,0",
   "Kortfristiga skulder överstiger omsättningstillgångarna (balanslikviditet {value}). Hanterbart med starkt operativt kassaflöde."
  ],
  "interestCoverageCritical": [
   "Otillräcklig räntetäckning",
   "EBIT täcker räntekostnaderna bara {value} — räntebetalningarna är i fara."
  ],
  "interestCoverageWeak": [
   "Svag räntetäckning",
   "EBIT täcker räntekostnaderna bara {value}."
  ],
  "altmanDistress": [
   "Altman Z'' i krisområdet",
   "Z''-score på {value} ligger under krisgränsen 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' i gråzonen",
   "Z''-score på {value}: varken i kris eller i den säkra zonen (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Nettoskuld utan positivt EBITDA",
   "Bolaget har nettoskuld men genererar inget positivt EBITDA för att betala den."
  ],
  "highLeverage": [
   "Hög skuldsättning",
   "Nettoskulden motsvarar {value} EBITDA."
  ],
  "revenueDecline": [
   "Betydande omsättningsminskning",
   "Omsättningen förändrades med {value} jämfört med föregående år."
  ],
  "heavyDilution": [
   "Kraftig utspädning för aktieägarna",
   "Antalet aktier ökar med i genomsnitt {value} per år."
  ],
  "highSbc": [
   "Höga aktierelaterade ersättningar",
   "De aktierelaterade ersättningarna motsvarar {value} av omsättningen."
  ],
  "lowEarningsQuality": [
   "Låg vinstkvalitet",
   "Periodiseringsgrad på {value}: vinsten överstiger det operativa kassaflödet betydligt."
  ],
  "dividendUncovered": [
   "Utdelningen täcks inte av FCF",
   "Utdelningarna överstiger det fria kassaflödet (utdelningsandel {value})."
  ],
  "goodwillHeavy": [
   "Hög goodwill och höga immateriella tillgångar",
   "{value} av de totala tillgångarna är goodwill och immateriella tillgångar, som riskerar nedskrivning."
  ],
  "staleData": [
   "Inaktuella finansiella data",
   "Den senaste årsredovisningen avser perioden som slutade {value}."
  ],
  "deepDrawdown": [
   "Kraftigt kursfall",
   "Aktiekursen har fallit {value} från sin 5-årstopp."
  ],
  "netCash": [
   "Nettokassa",
   "Kassan överstiger den finansiella skulden med {value}."
  ],
  "highMargin": [
   "Hög rörelsemarginal",
   "Rörelsemarginal på {value}."
  ],
  "highRoic": [
   "Hög avkastning på investerat kapital",
   "ROIC på {value}, långt över den typiska kapitalkostnaden."
  ],
  "alwaysProfitable": [
   "Lönsamt varje analyserat år",
   "Positivt nettoresultat alla {years} räkenskapsår."
  ],
  "strongGrowth": [
   "Stark långsiktig tillväxt",
   "Omsättningens CAGR på {value}."
  ],
  "buybacks": [
   "Nettoåterköp av aktier",
   "Antalet aktier minskar med i genomsnitt {value} per år."
  ],
  "altmanSafe": [
   "Altman Z'' i den säkra zonen",
   "Z''-score på {value}."
  ],
  "strongCashConversion": [
   "Stark kassakonvertering",
   "Det fria kassaflödet motsvarar {value} av nettoresultatet."
  ],
  "bankruptcyFiling": [
   "Konkursansökan eller förvaltning",
   "Formulär 8-K punkt 1.03 inlämnad {value}."
  ],
  "restatement": [
   "Finansiella rapporter omräknade",
   "Formulär 8-K punkt 4.02 (tidigare publicerade finansiella rapporter kan inte längre användas) inlämnad {value}."
  ],
  "debtAcceleration": [
   "Skuld förfallen i förtid",
   "Formulär 8-K punkt 2.04 (händelse som påskyndar en finansiell förpliktelse) inlämnad {value}."
  ],
  "delistingNotice": [
   "Avnoteringsvarning",
   "Formulär 8-K punkt 3.01 (noteringsregel uppfylls inte) inlämnad {value}."
  ],
  "auditorChange": [
   "Byte av revisor",
   "Formulär 8-K punkt 4.01 (byte av granskande revisor) inlämnad {value}."
  ],
  "insiderBuying": [
   "Insynsköp",
   "{count} insynspersoner köpte aktier på öppna marknaden för totalt {value} de senaste 12 månaderna."
  ],
  "insiderSelling": [
   "Omfattande insynsförsäljning",
   "Insynspersoner sålde för {value} utanför förutbestämda handelsplaner de senaste 12 månaderna ({share} av börsvärdet)."
  ]
 },
 "events": {
  "1.03": "Konkurs eller förvaltning",
  "4.02": "Omräkning av finansiella rapporter",
  "2.04": "Förtida förfall av en finansiell förpliktelse",
  "3.01": "Avnoteringsvarning / brott mot noteringsregler",
  "5.01": "Ägarförändring",
  "2.01": "Genomfört förvärv eller avyttring",
  "2.05": "Omstrukturering / avveckling",
  "2.06": "Väsentlig nedskrivning",
  "4.01": "Byte av revisor",
  "1.01": "Väsentligt avtal",
  "1.02": "Uppsägning av väsentligt avtal",
  "1.05": "Väsentlig cybersäkerhetsincident",
  "5.02": "Ledningsbyte (vd, finanschef eller styrelseordförande)"
 },
 "raw": {
  "income": "Resultaträkning",
  "cashflow": "Kassaflödesanalys",
  "balance": "Balansräkning",
  "revenue": "Omsättning",
  "costOfRevenue": "Kostnad för sålda varor",
  "grossProfit": "Bruttoresultat",
  "researchAndDevelopment": "Forskning och utveckling",
  "operatingIncome": "Rörelseresultat (EBIT)",
  "depreciationAndAmortization": "Av- och nedskrivningar",
  "interestExpense": "Räntekostnader",
  "pretaxIncome": "Resultat före skatt",
  "incomeTaxExpense": "Inkomstskatt",
  "netIncome": "Nettoresultat",
  "epsDiluted": "EPS efter utspädning ($)",
  "sharesDiluted": "Aktier efter utspädning (vägt)",
  "operatingCashFlow": "Operativt kassaflöde",
  "capex": "Investeringar",
  "freeCashFlow": "Fritt kassaflöde",
  "shareBasedCompensation": "Aktierelaterade ersättningar",
  "dividendsPaid": "Utbetald utdelning",
  "buybacks": "Återköp av aktier",
  "totalAssets": "Summa tillgångar",
  "currentAssets": "Omsättningstillgångar",
  "cash": "Likvida medel",
  "inventory": "Varulager",
  "accountsReceivable": "Kundfordringar",
  "goodwill": "Goodwill",
  "intangibleAssets": "Immateriella tillgångar",
  "totalLiabilities": "Summa skulder",
  "currentLiabilities": "Kortfristiga skulder",
  "totalDebt": "Finansiell skuld",
  "equity": "Eget kapital",
  "retainedEarnings": "Balanserade vinstmedel",
  "sharesOutstanding": "Utestående aktier"
 },
 "method": {
  "btPending": "Backtestresultaten visas efter nästa datauppdatering.",
  "btCaveats": "Förbehåll: bara bolag som är noterade i dag ingår (konkursade och avnoterade bolag saknas, så de svagaste poängen gick i själva verket ännu sämre); kurserna exkluderar utdelningar; dagens sektorjämförelser används för varje år; vikterna förfinades på samma period, så den verkliga prognosförmågan kan vara något lägre. Historisk avkastning är ingen garanti för framtiden, och detta är inte investeringsrådgivning.",
  "btDividend": "Utdelningssäkerhet: året därpå sänkte {safe} av de ”säkra”, {moderate} av de ”måttliga”, {risky} av dem ”i riskzonen” och {unsafe} av de ”osäkra” sin utdelning.",
  "btRisk": "Risk: i femtedelen med lägst risk var det största fallet inom 12 månader i snitt {lo} och {blo} av aktierna föll mer än hälften; i den mest riskfyllda femtedelen {hi} och {bhi}.",
  "btLoss": "Förlust nästa år: av två bolag, där det ena gick med förlust nästa år och det andra inte, hade det förlustbringande lägre TeraScore med sannolikheten {p} ({y} bolagsår; 50 % = gissning, 100 % = perfekt).",
  "btIc": "Vid {share} av de {k} testade datumen gick ett högre TeraScore i snitt hand i hand med bättre följande 12 månader (genomsnittlig rangkorrelation {ic}; 0 = inget samband, 1 = perfekt).",
  "btWorst": "svagaste 20 %",
  "btBest": "bästa 20 %",
  "btDrawdown": "Snitt största fall",
  "btBigLoss": "Föll >50 %",
  "btExcess": "Överavkastning (12 mån)",
  "btAvg": "snittpoäng",
  "btQuintile": "Femtedel",
  "btIntro": "Metoden har också mätts på historiska data. Varje kvartal från {from} till {to} poängsattes varje bolag så som det kunde ha gjorts då – bara med redan publicerade årsredovisningar, till den dagens aktiekurs – och jämfördes med vad som hände de följande 12 månaderna. {n} observationer, {c} bolag, börsvärde på minst {mc}. Överavkastning: bolagets kursförändring över 12 månader minus medianbolagets samma datum.",
  "btTitle": "Hur pålitligt är det? Backtest",
  "runwayText": "Om det fria kassaflödet är negativt (bolaget bränner kassa) kan likviditeten högst få den poäng som kassans räckvidd motiverar: hur många år de likvida tillgångarna täcker den nuvarande förbrukningen ({bad} år eller mindre = 0 poäng, {good} år eller mer = 100).",
  "smoothText": "Marginaler och kapitalavkastning (ROIC, ROE, ROA) poängsätts till {a} % på det senaste året och till {b} % på snittet av de två åren innan, så att ett enstaka exceptionellt år inte svänger poängen. Bolagssidan visar den här 3-årsbasen under det senaste värdet.",
  "title": "Metod",
  "intro": "Varje bolag förs in i samma datamall utifrån sina reviderade årsredovisningar (10-K / 20-F) och senaste kvartalsrapporter (10-Q). Varje nyckeltal omvandlas till en poäng på 0–100; varje dimension är det viktade snittet av sina nyckeltal. 100 är bäst — utom för Risk, där lägre är bättre.",
  "scaling": "Skalningen är linjär mellan värdet som ger 0 poäng och värdet som ger 100 poäng, och begränsas utanför det intervallet. Inom ett område hoppas saknade nyckeltal över och de återstående vikterna normaliseras om; ett område poängsätts bara när nyckeltal som bär minst hälften av dess vikt finns. Datatäckningen är den andel av TeraScore, efter vikt, som bygger på data.",
  "partial": "Ofullständig analys. När ett bolags rapporter saknar data för ett område räknas området i TeraScore som neutrala {s}, eller som snittet av bolagets övriga områden om det är lägre – så saknade data kan aldrig höja poängen (i backtestet gick bolag med luckor sämre än fullständiga bolag med samma poäng). Siffror som inte saknas utan är odefinierade – tillväxt från en noll- eller negativ bas, ROIC med negativt investerat kapital, utdelningsandelen för ett bolag som inte lämnar utdelning – utelämnas i stället från området. Datatäckningen är den andel av TeraScore (efter vikt) som bygger på data. Under 80 % visar listorna ”◐ Ofullständig · 65 %” mellan bolagets namn och dess TeraScore; bolagssidan visar procentsatsen så snart den är under 100 % och anger vilka områden som saknas. Med färre än 5 områden som kan poängsättas finns inget TeraScore (”Lite data”); bolag utan årsredovisning ännu visas som ”Ingen analys” eller ”Nynoterad”.",
  "estimates": "Uppskattade siffror. När ett bolag inte redovisar någon rad för rörelseresultat uppskattas rörelseresultatet (EBIT) som resultat före skatt plus räntekostnader (inte för banker och försäkringsbolag). Ett bolag som inte rapporterat några lån eller räntekostnader de två senaste räkenskapsåren och vars långfristiga skulder är under 15 % av tillgångarna behandlas som skuldfritt. Bolagssidan listar sådana uppskattningar; rådata visar siffrorna som de rapporterats. Vissa bolag rapporterar investeringar bara under ett eget XBRL-element som SEC:s standarddata inte innehåller; då uppskattas de utifrån bolagets egen andel investeringar av omsättningen under de närmaste åren då båda rapporterats, annars utifrån av- och nedskrivningar.",
  "bands": "Betygsintervall:",
  "profiles": "Banker, försäkringsbolag och mäklare (finansiell profil) samt REIT:er (fastighetsprofil) poängsätts med anpassade nyckeltal och gränser, som visas nedan där de skiljer sig.",
  "overall": "TeraScore (totalt)",
  "overallText": "Viktat snitt av de nio fundamentala områdena (motor 2.1). Vikterna har förfinats utifrån backtestet nedan: områden som bättre skilde ut senare vinnare och förlorare, och senare förluster, väger tyngre (stabilitet, värdering, kassaflöde); de som gjorde det sämre väger lättare (likviditet, balansräkning – som behåller en andel på 30 % i riskpoängen). På varje bolagssida visar ”Vad höjer och vad sänker TeraScore?” varje områdes bidrag: 50 + Σ vikt × (poäng − 50).",
  "riskTitle": "Risk",
  "distressTitle": "Risk för finansiell kris",
  "distressText": "Poäng: Altman Z'' i krisområdet +3 / gråzon +1; negativt eget kapital utan positivt FCF +2; negativt FCF +1; nettoförlust +1; räntetäckningsgrad < 1,5× +2; nettoskuld utan positivt EBITDA +1; soliditet < 5 % (finansiella bolag) +2. 2–3 poäng = förhöjd, 4+ = hög.",
  "trendTitle": "Långsiktig trend",
  "trendText": "70 % långsiktig tillväxt + 30 % tillväxt senaste året, justerat med upp till ±5 poäng för rörelsemarginalens trend. ≥ 65 förbättras, 40–64 stabil, < 40 försämras. Beskriver det förflutna; ingen prognos.",
  "stylesTitle": "Investeringsprofil",
  "stylesText": "Kvalitet: lönsamhet ≥ 70, stabilitet ≥ 70, balansräkning ≥ 60, ingen kritisk signal. Tillväxt: långsiktig tillväxt ≥ 70. Värde: värdering ≥ 65. Utdelning: direktavkastning ≥ 2 % täckt av FCF. Spekulativ: kritisk signal eller förluster de flesta åren.",
  "sectorTitle": "Sektorjämförelse",
  "sectorText": "Varje poäng rangordnas också mot alla analyserade bolag i samma sektor (percentil).",
  "limitsTitle": "Begränsningar",
  "limitsText": "Poängen bygger enbart på rapporterade finansiella uppgifter och marknadskurser. De fångar inte ledningens kvalitet, konkurrensläge, nyheter eller prognoser. Inte investeringsrådgivning.",
  "logosText": "Bolagens logotyper kommer från Financial Modeling Preps offentliga logotypbilder. De är respektive bolags varumärken och visas endast för att identifiera dem; ett bolag utan logotyp visas med sin initial.",
  "profileGeneral": "Allmän",
  "profileFinancial": "Finansiell",
  "profileRealEstate": "Fastigheter",
  "eventsTitle": "Större bolagshändelser (8-K)",
  "eventsText": "Väsentliga händelser hämtas från SEC-formulär 8-K de senaste 12 månaderna, där bara punkttyper med stor påverkan behålls. Konkurs (1.03) och omräkning (4.02) är kritiska signaler; förtida skuldförfall (2.04), avnoteringsvarning (3.01) och byte av revisor (4.01) är varningar, och alla höjer risk- och krispoängen.",
  "relativeTitle": "Sektorrelativ poängsättning",
  "relativeText": "Marginaler, avkastning, kapitalstruktur, likviditet och värderingsmultiplar beror starkt på branschen. För dessa nyckeltal är poängen till 50 % absolut (gränserna ovan) och till 50 % relativ: bolagets läge mellan den 10:e och 90:e percentilen bland etablerade bolag i sektorn (börsvärde ≥ $300M, omsättning ≥ $50M, minst 20 jämförbara bolag). Sektormedianen visas bredvid varje nyckeltal. Nyckeltal för tillväxt, stabilitet och risk använder bara absoluta gränser.",
  "insiderText": "Från SEC:s kvartalsvisa Form 4-datamängder för de senaste 12 månaderna. Bara köp och försäljningar på öppna marknaden räknas. Köp av minst två insynspersoner på sammanlagt $100 000 eller mer är en styrka; försäljningar utanför 10b5-1-planer över 1 % av börsvärdet är en varning.",
  "currencyTitle": "Utländska bolag och valutor",
  "currencyText": "Utländska bolag noterade i USA (formulär 20-F / 40-F, IFRS) analyseras i sin rapportvaluta; nyckeltalen är valutaneutrala. För värderingen räknas börsvärdet i dollar om till ECB:s referenskurs (andra källor för valutor som ECB inte publicerar). Utländska privata emittenter lämnar inga kvartalsrapporter i XBRL, så deras värdering bygger på det senaste räkenskapsåret.",
  "historyText": "TeraScore-förändringar poängsätter varje bolag vid slutet av varje räkenskapsår med enbart den information som fanns då: årsredovisningar fram till det året, 8-K-händelser under de föregående 12 månaderna och aktiekursen det datumet (börsvärdet uppskattas från dagens börsvärde, kursförändringen och förändringen i antal aktier). TTM-siffror, insynsdata och aktuella marknadsdata används inte för tidigare år, och dagens sektorjämförelser tillämpas på alla år. Dessutom sparar varje måndagsuppdatering en ögonblicksbild av aktuellt TeraScore; förändringar över 4 och 13 veckor jämförs med den senaste ögonblicksbilden som är minst så gammal.",
  "peersText": "Liknande bolag hämtas från samma sektor. Varje kandidats avstånd är skillnaden i logaritmerat börsvärde, plus ett tillägg motsvarande en storleksskillnad på 4,5× om det tillhör en annan bransch, så bolag i samma bransch och av liknande storlek kommer först, medan de största bolagen matchas med de största i sin sektor. Bara poängsatta bolag ingår, och ett aktieslag per bolag.",
  "dividendText": "Utdelningssäkerheten bedömer hur sannolikt det är att den nuvarande utdelningen behålls, från 0 till 100: 75 eller mer är säker, 55–74 måttlig, 35–54 i riskzonen, under 35 osäker. Komponenter utan data utelämnas och de återstående vikterna skalas om.",
  "portfolioText": "Portföljens TeraScore, risk och direktavkastning är snitt viktade efter positionernas värde; P/E är det totala värdet delat med den vinst som tillfaller innehaven (förlustbolag exkluderade). Varningar: en enskild position över {p}, en sektor över {s}, färre än {n} innehav, kritiska varningar, hög risk för finansiell kris och svaga TeraScore.",
  "quarterlyText": "Kvartalssiffrorna omfattar de senaste 12 kvartalen från 10-Q- och 10-K-rapporter. Flöden är tremånadersbelopp: rapporterade direkt, eller härledda från ackumulerade siffror hittills i år; fjärde kvartalet är helårsbeloppet minus de första nio månaderna. Siffror per aktie och antal aktier visas bara när de rapporterats för de tre månaderna, justerade för senare aktiesplittar. Balansposter avser kvartalets slut.",
  "portfolioEtfText": "Även ETF:er (börshandlade fonder) kan läggas till: de värderas till sin dagskurs, har inget TeraScore och utelämnas från kontrollerna av positioner, sektorer och antal innehav, eftersom en fond redan är diversifierad. Deras direktavkastning kommer från Nasdaq när den publiceras; annars kan den anges manuellt.",
  "zero": "0 p",
  "hundred": "100 p"
 }
};
