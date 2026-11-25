// Norwegian.
export default {
 "meta": {
  "name": "Norsk",
  "short": "NO",
  "locale": "nb-NO"
 },
 "ui": {
  "classTitle": "Selskapet har flere børsnoterte aksjeklasser, som hovedsakelig skiller seg i stemmerett. Regnskapstallene og TeraScore er de samme for alle.",
  "classNonVoting": "Uten stemmerett",
  "classVoting": "Med stemmerett",
  "classLetter": "Klasse {c}",
  "slogan": "Det smarte verktøyet for investorer.",
  "notApplicable": "ikke relevant",
  "bdMissing": "◐ = område som ikke kunne vurderes på grunn av manglende data: det teller som nøytrale {s}, eller som gjennomsnittet av selskapets øvrige områder hvis det er lavere, så manglende data kan aldri løfte scoren.",
  "bdNote": "Med utgangspunkt i 50 legger hvert område til eller trekker fra sin vekt × (sin score − 50); summen er TeraScore ({s}, avrundet).",
  "bdMissingShort": "ingen data → {s}",
  "bdLowers": "Trekker ned",
  "bdLifts": "Løfter",
  "bdTitle": "Hva løfter og hva trekker ned TeraScore?",
  "basis3y": "3-årsgrunnlag",
  "netCashLoss": "netto kontanter, underskudd: {s} poeng",
  "runwayCap": "begrenser likviditeten mens selskapet brenner penger",
  "capLabel": "tak",
  "yearsUnit": "{n} år",
  "pfCurrency": "Valuta",
  "pfAllocTitle": "Fordeling",
  "pfByHolding": "Per beholdning",
  "pfByCurrency": "Per handelsvaluta",
  "pfHistTitle": "Porteføljens utvikling",
  "pfHistLoading": "Laster inn kurshistorikk…",
  "pfHistValue": "Verdien av nåværende beholdninger",
  "pfHistValueSub": "Månedlig, siste to år, i {c} (utenlandske kurser til dagens valutakurs).",
  "pfHistMissing": "Uten kurshistorikk, ikke medregnet: {list}.",
  "pfHistScoreWeekly": "Porteføljens TeraScore, uke for uke",
  "pfHistScoreYearly": "Porteføljens TeraScore per regnskapsår",
  "pfHistScoreSub": "Selskapene er vektet etter dagens verdi (ETF-er har ingen TeraScore).",
  "etfAcc": "akkumulerende",
  "etfDist": "utbyttebetalende",
  "cmpPartialNote": "Det mangler data i disse selskapenes rapporter, så analysen er delvis og scorene mindre sikre: {list}. Områder merket «ingen data» teller høyst som nøytrale 50, så manglende data løfter aldri TeraScore.",
  "showMore": "Vis flere",
  "tagline": "Fundamental aksjeanalyse, gjort enkel.",
  "heroText": "Hvert selskap notert på Nasdaq, NYSE, NYSE American og Cboe vurderes på ti investeringsdimensjoner — lønnsomhet, kontantstrømmens kvalitet, balansens styrke, vekst, verdsettelse og risiko — basert på reviderte SEC-rapporter og sammenlignet med selskaper i samme sektor.",
  "navCompanies": "Selskaper",
  "navCompare": "Sammenlign",
  "navMethod": "Metode",
  "language": "Språk",
  "searchPlaceholder": "Søk ticker eller selskapsnavn (f.eks. AAPL, Apple)",
  "allSectors": "Alle sektorer",
  "onlyAnalyzed": "Analyserte selskaper",
  "allCompanies": "Alle selskaper",
  "watchlist": "Overvåkingsliste",
  "results": "{n} treff",
  "analyzedOf": "{a} analysert / {n} selskaper",
  "updated": "Oppdatert {d}",
  "company": "Selskap",
  "noData": "ingen data",
  "noResults": "Ingen selskaper samsvarer med søket ditt.",
  "prev": "Forrige",
  "next": "Neste",
  "demoBadge": "DEMO",
  "demoNote": "Selskaper merket DEMO viser omtrentlige eksempeltall til dataoppdateringen laster inn offisielle SEC-data.",
  "back": "Tilbake til listen",
  "tabAnalysis": "Analyse",
  "tabRaw": "Regnskap",
  "demoNotice": "Demodata: omtrentlige eksempeltall. Dataoppdateringen erstatter dem med offisielle SEC-rapporter.",
  "notFound": "Fant ikke noe selskap med tickeren {t}.",
  "lastFy": "Siste regnskapsår: {y}",
  "ttmBasis": "Verdsettelse basert på tall for de siste tolv månedene (TTM) til {d}",
  "annualBasis": "Verdsettelse basert på tall for siste regnskapsår",
  "overallScore": "TeraScore",
  "risk": "Risiko",
  "distress": "Risiko for finansielle problemer",
  "trend": "Langsiktig trend",
  "coverage": "Datadekning",
  "watchEmpty": "Overvåkingslisten din er tom. Trykk på stjernen ☆ i raden til et selskap for å legge det til her.",
  "now": "Nå",
  "today": "I dag",
  "yesterday": "I går",
  "updatedLabel": "Oppdatert",
  "searchFuzzy": "Ingen eksakte treff for «{q}». Lignende navn:",
  "years": "{n} år",
  "marketCap": "Markedsverdi",
  "price": "Kurs",
  "sector": "Sektor",
  "industry": "Bransje",
  "sectionScores": "Scorekort",
  "sectionFlags": "Faresignaler og styrker",
  "sectionCharts": "Historisk utvikling",
  "sectionKey": "Nøkkeltall",
  "howCalculated": "Beregningsdetaljer",
  "weight": "vekt",
  "points": "poeng",
  "notScored": "i.a.",
  "sectorRank": "Bedre enn {p} % av selskapene i {s}",
  "sectorRankShort": "Topp {p} % i sektoren",
  "riskExplain": "Risiko = 100 − sikkerhetsscore. Sikkerheten består av {f} % fundamentale forhold (balanse {bs} %, stabilitet {co} %, kontantstrøm {cf} %, lønnsomhet {pr} %, likviditet {li} %) og {m} % aksjekursens volatilitet og største fall (når kurshistorikk finnes). Faresignaler øker risikoen ({c} poeng per kritisk og {w} per annen advarsel) langs en mettende kurve: hvert poeng lukker en del av den gjenværende avstanden til 100, så selv de mest risikable selskapene fortsatt skiller seg fra hverandre.",
  "noFlags": "Ingen vesentlige faresignaler.",
  "critical": "Kritisk",
  "warningTag": "Advarsel",
  "strength": "Styrke",
  "footer": "TeraStockX beregner alle scorer fra offentlige regnskaper rapportert til SEC. Scorene beskriver historiske fundamentale forhold; de er ikke investeringsråd og spår ikke aksjekurser.",
  "engine": "Motor v{v}. Scorene er beregnet fra historiske, offentlig rapporterte data; ikke investeringsråd.",
  "currencyNote": "Beløp i {cur}.",
  "source": "Kilde",
  "retrieved": "hentet {d}",
  "downloadCsv": "Last ned CSV",
  "downloadJson": "JSON (mal)",
  "fiscalYear": "Regnskapsår",
  "ttm": "TTM",
  "computedRatios": "Beregnede nøkkeltall",
  "addWatch": "Legg til i overvåkingslisten",
  "removeWatch": "Fjern fra overvåkingslisten",
  "compareWith": "Sammenlign",
  "compareTitle": "Sammenlign selskaper",
  "compareHint": "Velg opptil seks selskaper for å sammenligne dem side om side.",
  "addCompany": "Legg til selskap (navn eller ticker)…",
  "remove": "Fjern",
  "dimension": "Dimensjon",
  "metric": "Nøkkeltall",
  "chartRevenue": "Omsetning",
  "chartNetIncome": "Nettoresultat",
  "chartFcf": "Fri kontantstrøm",
  "chartMargin": "Driftsmargin",
  "chartPrice": "Aksjekurs (månedlig, justert)",
  "chartRevenueSub": "årlig",
  "chartNetIncomeSub": "årlig (rød = underskudd)",
  "chartFcfSub": "kontantstrøm fra drift − investeringer",
  "chartMarginSub": "driftsresultat / omsetning",
  "chartPriceSub": "månedlige sluttkurser, siste 6 år", "chartPriceDaily": "Aksjekurs (daglig)", "chartPriceDailySub": "daglige sluttkurser siden {d}", "pfCost": "Kjøpspris", "pfCostHint": "Gjennomsnittlig pris per aksje, i handelsvalutaen (valgfritt)", "pfGain": "Gevinst/tap", "pfGainPartial": "{n} av {m} beholdninger med kjøpspris", "pfGainHint": "Legg inn kjøpsprisene for beholdningene dine", "pfGainNote": "Gevinst/tap: dagens kurs mot kjøpsprisen (snitt per aksje, i handelsvalutaen), til dagens valutakurs, uten utbytte.", "pfBench": "S&P 500 i samme periode", "pfBenchBetter": "Porteføljen din: {d} prosentpoeng bedre", "pfBenchWorse": "Porteføljen din: {d} prosentpoeng svakere", "pfBenchSame": "Porteføljen din beveget seg like mye", "pfRiskTitle": "Risiko og spredning", "pfVol": "Svingninger (årlig)", "pfVolBench": "S&P 500: {v}", "pfDivers": "Spredning", "pfDiversUnit": "uavhengige beholdninger", "pfDiversSub": "av {n} beholdninger · gjennomsnittlig korrelasjon: {c}", "pfTopRisk": "Største risikokilde", "pfTopRiskSub": "{r} av risikoen, {w} av verdien", "pfRiskShare": "Andel av risikoen", "pfRiskNote": "Ut fra daglige sluttkurser siden {d}: hvor mye porteføljens verdi svinger, og hvor mye hver beholdning bidrar. En beholdning med en andel av risikoen godt over vekten sin svinger mye eller beveger seg sammen med de andre. Spredningen viser hvor mange uavhengige beholdninger porteføljen tilsvarer.", "pfRiskShort": "Utelatt på grunn av kort eller manglende kurshistorikk: {list}.", "pfDivTitle": "Utbyttekalender", "pfDivTotal": "Forventet utbytte de neste 12 månedene: {v}", "pfDivKnown": "etter utbetalingsdatoer", "pfDivEst": "anslått", "pfDivNote": "Nasdaq-noterte: annonserte utbetalinger og fjorårets utbetalingsdatoer, med siste beløp. Øvrige (*): anslått fra utbytteavkastningen, fordelt som selskapets kvartalsvise utbetalinger (eller jevnt). Beløp før skatt, til dagens valutakurs.", "pfDivNone": "Ingen av beholdningene dine betaler utbytte.", "alertDividendCut": "{t}: utbyttet kuttet ({date})", "pfAlertsTitle": "Varsler", "pfAlertsNone": "Ingen nye varsler om beholdningene dine siden {d}.", "pfAlertsFirst": "Fra nå av følges beholdningene dine: hvis en TeraScore endrer seg mye, risikoen øker, et utbytte kuttes, eller et kritisk signal eller en viktig hendelse dukker opp, ser du det her.", "pfAlertsNote": "Varsler fungerer i denne nettleseren; på e-post og på telefonen kommer de med innlogging.",
  "notEnough": "Ikke nok data.",
  "errorLoad": "Noe gikk galt: {e}",
  "serveHint": "Hvis du åpnet filen direkte, start en lokal webserver (se README).",
  "profileFinancial": "Profil for finansinstitusjoner: nøkkeltall for likviditet, EBITDA og fri kontantstrøm gjelder ikke for banker og forsikringsselskaper og er utelatt.",
  "profileRealEstate": "Eiendomsprofil: grensene for gjeldsgrad og verdsettelse er tilpasset REIT-enes strukturelt høyere gjeld.",
  "styles": "Investeringsprofil",
  "navNews": "Marked og hendelser",
  "navData": "Finansdata",
  "newsTitle": "Marked og hendelser",
  "newsIntro": "Vesentlige hendelser som USA-noterte selskaper offisielt har rapportert til SEC på skjema 8-K de siste 12 månedene: hendelsestyper med stor betydning (konkurs, omarbeidede regnskaper, varsler om strykning, kontrollskifte, oppkjøp, omstruktureringer, nedskrivninger, revisorbytte, cybersikkerhetshendelser) og lederskifter i store selskaper; rutinerapporter er utelatt.",
  "newsEmpty": "Ingen større hendelser i de nåværende dataene.",
  "viewFiling": "Se rapporten",
  "sectionEvents": "Større hendelser (siste 12 måneder)",
  "eventsNone": "Ingen større hendelser rapportert de siste 12 månedene.",
  "latestEvents": "Siste større hendelser",
  "allNews": "Alle større hendelser",
  "dataTitle": "Finansdata",
  "dataIntro": "Rå regnskapstall i TeraStockX-malen: resultatregnskap, kontantstrømoppstilling og balanse for opptil ti regnskapsår pluss de siste tolv månedene, med beregnede nøkkeltall. Last ned som CSV eller JSON.",
  "dataPick": "Velg et selskap (navn eller ticker)",
  "sev5": "Kritisk",
  "sev4": "Større",
  "sev3": "Betydelig",
  "sev2": "Verdt å merke seg",
  "allSeverities": "Alle hendelsestyper",
  "onlyCritical": "Bare kritiske og større",
  "openAnalysis": "Åpne analysen",
  "tabCompanies": "Aksjer",
  "tabNews": "Nyheter",
  "tabData": "Data",
  "tabCompare": "Sammenlign",
  "tabMethod": "Metode",
  "newsTop": "Viktigst (kritiske hendelser; større hendelser i selskaper over $1B)",
  "filters": "Screener-filtre",
  "filtersActive": "{n} aktive",
  "reset": "Nullstill filtre",
  "minScore": "Minste TeraScore",
  "maxRisk": "Høyeste risiko",
  "anyValue": "Alle",
  "minCap": "Minste markedsverdi",
  "minDividend": "Minste direkteavkastning",
  "exchange": "Børs",
  "allExchanges": "Alle børser",
  "styleFilter": "Investeringsprofil:",
  "noCritical": "Ingen kritiske faresignaler",
  "pe": "P/E",
  "dividendYieldShort": "Dir.avk.",
  "sectorMedian": "Sektormedian",
  "insiderTitle": "Innsidehandler",
  "insiderBuys": "Kjøp i det åpne markedet",
  "insiderSells": "Salg i det åpne markedet",
  "insiderNone": "Ingen innsidekjøp eller -salg i det åpne markedet de siste 12 månedene.",
  "insiderForeign": "Utenlandske private utstedere er unntatt fra Form 4-rapportering; ingen innsidedata finnes.",
  "insiderPlanned": "Herav under handelsplaner etter 10b5-1",
  "insiderPeriod": "SEC Form 4-rapporter, {from} – {to}. Bare kjøp (kode P) og salg (kode S) i det åpne markedet vises; tildelinger, opsjonsinnløsninger og skattetrekk er utelatt.",
  "insiderCount": "{n} handler · {p} innsidere",
  "insiderDate": "Dato",
  "insiderName": "Innsider",
  "insiderType": "Handel",
  "insiderShares": "Aksjer",
  "insiderValue": "Verdi",
  "insiderPurchase": "Kjøp",
  "insiderSale": "Salg",
  "insiderPlanTag": "10b5-1-plan",
  "alertsTitle": "Varsler for overvåkingslisten",
  "alertsSeen": "Merk alle som sett",
  "alertScore": "{t}: TeraScore endret fra {from} til {to}",
  "alertRisk": "{t}: risikoen steg fra {from} til {to}",
  "alertDistress": "{t}: risikoen for finansielle problemer er nå {level}",
  "alertEvent": "{t}: ny større hendelse – {event} ({date})",
  "alertCritical": "{t}: nytt kritisk faresignal – {flag}",
  "fxNote": "regnskap i {cur}, omregnet til 1 {cur} = {rate} USD",
  "navTrend": "TeraScore-endringer",
  "tabTrend": "Endringer",
  "trendIntro": "Hvordan selskapenes TeraScore endrer seg over tid. Visningen per regnskapsår vurderer hvert selskap ved utgangen av hvert regnskapsår med bare det som var kjent da (årsrapporter, 8-K-hendelser fra de foregående 12 månedene og aksjekursen på datoen). Ukentlige øyeblikksbilder legges til ved hver mandagsoppdatering, så endringer over 4 og 13 uker vises etter de første ukene.",
  "trendPeriod": "Periode",
  "trendPeriodFy": "Endring fra forrige regnskapsår",
  "trendPeriod4w": "Endring over 4 uker",
  "trendPeriod13w": "Endring over 13 uker",
  "trendUp": "Største forbedringer",
  "trendDown": "Største forverringer",
  "trendChange": "Endring",
  "trendFrom": "fra {v}",
  "trendWeeklyEmpty": "Ukentlige øyeblikksbilder samles inn ved hver mandagsoppdatering; visningen fylles opp etter de første ukene.",
  "trendNote": "Endringene er i TeraScore-poeng. Scorene per regnskapsår bruker dagens sektorsammenligninger også for tidligere år.",
  "trendAnnualChart": "TeraScore per regnskapsår",
  "trendAnnualSub": "daværende score ved utgangen av hvert regnskapsår",
  "trendWeeklyChart": "TeraScore, ukentlig",
  "trendWeeklySub": "øyeblikksbilde fra hver mandagsoppdatering",
  "trendAll": "Alle endringer",
  "navPortfolio": "Portefølje",
  "tabPortfolio": "Portefølje",
  "addPortfolio": "Legg til i porteføljen",
  "inPortfolio": "I porteføljen",
  "pdfReport": "PDF-rapport",
  "minDivSafety": "Utbyttesikkerhet",
  "peersTitle": "Lignende selskaper",
  "peersNone": "Ingen sammenlignbare selskaper med score i denne sektoren.",
  "peerMedian": "Median for sammenlignbare",
  "peersSub": "De mest sammenlignbare selskapene i {s} etter bransje og størrelse.",
  "peersRank": "{t} er nr. #{r} av {n} i gruppen etter TeraScore.",
  "peersCompare": "Sammenlign i detalj",
  "dividendTitle": "Utbytte",
  "dividendSafety": "Utbyttesikkerhet",
  "dividendYield": "Direkteavkastning",
  "dps": "Utbytte per aksje",
  "dpsCagr": "Utbyttevekst (5-årig CAGR)",
  "yearsPaid": "Utbetalt uten avbrudd",
  "yearsN": "{n} år",
  "yearsRaised": "Økninger på rad",
  "dividendCuts": "Kutt (10 år)",
  "earningsPayout": "Utbyttegrad (resultat)",
  "fcfPayout": "Utbyttegrad (fri kontantstrøm)",
  "payoutUncovered": "ikke dekket",
  "dividendNone": "Selskapet betaler ikke utbytte.",
  "dividendNoneShort": "intet utbytte",
  "dividendNote": "Utbytte per aksje beregnes som utbetalt kontantutbytte delt på utvannede aksjer, så ekstraordinære utbytter vises som hopp. Utbyttegradene bruker de siste tolv månedene når de finnes.",
  "chartDps": "Utbytte per aksje",
  "chartDpsSub": "utbetalt kontantutbytte / utvannede aksjer",
  "period": "Periode",
  "periodAnnual": "Årlig",
  "periodQuarterly": "Kvartalsvis",
  "quarterEnd": "Kvartal avsluttet",
  "quarterlyNote": "Tremånederstall. Når et kvartal bare rapporteres hittil i år, er tallet hittil-i-år-tallet minus forrige kvartals; fjerde kvartal er årstallet minus de første ni månedene.",
  "quarterlyNone": "Ingen kvartalstall tilgjengelig.",
  "quarterlyForeign": "Utenlandske private utstedere leverer bare årsrapporter (20-F / 40-F); kvartalstall finnes ikke.",
  "pfIntro": "Legg inn beholdningene dine for å se porteføljens verdivektede TeraScore, risiko, utbytteinntekt, sektorfordeling og varsler om konsentrasjon. Porteføljen lagres bare i denne nettleseren.",
  "pfAdd": "Legg til",
  "pfFromWatch": "Legg til overvåkingslisten (1 aksje hver)",
  "pfNeedShares": "Skriv inn antall aksjer.",
  "pfEmpty": "Porteføljen er tom. Legg til et selskap og antall aksjer ovenfor.",
  "pfValue": "Porteføljens verdi",
  "pfScore": "Vektet TeraScore",
  "pfIncome": "Årlig utbytteinntekt",
  "pfPe": "Porteføljens P/E",
  "pfHoldings": "Beholdninger",
  "pfSectors": "Sektorfordeling",
  "pfOther": "Annet",
  "pfChecks": "Porteføljesjekk",
  "pfOk": "Ingen varsler om konsentrasjon eller kvalitet.",
  "pfInfo": "Merk",
  "pfShares": "Aksjer",
  "pfPrice": "Kurs",
  "pfValueCol": "Verdi",
  "pfWeight": "Vekt",
  "pfNote": "Kurser og scorer per siste dataoppdatering ({d}). Verdier i {c}; europeiske ETF-er prises i sin egen handelsvaluta og regnes om til dagens valutakurs.",
  "reportTitle": "Selskapsrapport",
  "printPdf": "Skriv ut / lagre som PDF",
  "printHint": "Velg «Lagre som PDF» i utskriftsdialogen.",
  "reportFinancials": "Femårig finansiell oppsummering",
  "profile": "Investeringsprofil",
  "ratedCompanies": "Selskaper med TeraScore",
  "installFooter": "Installer appen",
  "installBanner": "Installer TeraStockX som app på telefonen, nettbrettet eller datamaskinen.",
  "installHow": "Slik installerer du",
  "close": "Lukk",
  "installTitle": "Installer TeraStockX som app",
  "installIntro": "TeraStockX kan installeres direkte fra dette nettstedet, uten appbutikk og med en ubetydelig nedlastingsstørrelse. Den åpnes deretter fra sitt eget ikon i fullskjerm som en hvilken som helst annen app, og viser alltid de nyeste dataene.",
  "installDone": "Du bruker den installerte appen.",
  "installNow": "Installer nå",
  "installYourDevice": "Din enhet",
  "installIos": "iPhone og iPad",
  "installAndroid": "Android",
  "installDesktop": "Datamaskin (Chrome, Edge)",
  "installNote": "Appen er den samme som nettstedet: dataoppdateringer kommer automatisk, og overvåkingslisten og porteføljen din blir på denne enheten. Fjern den som en hvilken som helst annen app.",
  "pfAddPlaceholder": "Selskap eller ETF (navn eller ticker)…",
  "pfScoreCover": "dekker {p} av porteføljen",
  "pfEtfs": "ETF-er",
  "etfExpense": "Årlige kostnader {v}",
  "etfNoScore": "ETF-er har ingen TeraScore: et fond har ingen egne regnskaper.",
  "etfYieldInput": "Direkteavkastning (%)",
  "etfNote": "ETF-er har ingen TeraScore; den vektede TeraScore og risikoen omfatter bare selskapene.",
  "etfYieldMissing": "Datakilden publiserer ingen direkteavkastning for {list}. Skriv den inn i avkastningskolonnen (i %) for å ta den med i utbytteinntekten.",
  "screensTitle": "Hurtigsøk",
  "colChangeFy": "Endring",
  "filtersAndScreens": "Filtre og hurtigsøk",
  "maxPe": "Maks. P/E",
  "minDrop": "Under 12-måneders toppen",
  "dropAtLeast": "minst {p}",
  "colFromHigh": "Fra toppen",
  "contact": "Kontakt",
  "marketToday": "Markedet i dag",
  "marketMore": "Marked og hendelser",
  "eventsTitle": "Større selskapshendelser (8-K)",
  "pfMax": "Maks",
  "pfSince": "siden {d}",
  "pfMoveValue": "Verdiendring",
  "pfMoveScore": "TeraScore-endring",
  "pfMoveNoScore": "Ikke nok historikk ennå: ukentlige TeraScore etter dagens metode registreres fra {d}.",
  "pfMoveFy": "Siste regnskapsår mot året før (med dataene som var kjent da).",
  "pfMoveFyRange": "Regnskapsår {a} → {b} (med dataene som var kjent da).",
  "pfMoveChartSub": "I {c}; utenlandske kurser til dagens valutakurs.",
  "pfMoveTop": "Hva som beveget porteføljen",
  "pfMoveTopSub": "Per beholdning: kursendring, effekten på porteføljens verdi og TeraScore-endringen i perioden.",
  "pfMoveMonthly": "Med kurser ved månedsslutt (ingen daglige sluttkurser ennå): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "KI-aksjer",
   "bigTech": "Big Tech",
   "semis": "Halvledere",
   "banks": "Banker",
   "energy": "Olje og gass",
   "crypto": "Kryptoaksjer"
  },
  "hlIndex": "{n} {v} i dag",
  "hlTheme": "{n} {v} i dag (best {b}, svakest {w})",
  "hlUp": "{n} opp {v} i dag",
  "hlDown": "{n} ned {v} i dag",
  "hlReport": "{n} publiserte sin {f} ({form})",
  "annualReport": "årsrapport",
  "quarterlyReport": "kvartalsrapport",
  "hlScore": "TeraScore for {n} endret med {v} poeng (nå {o})",
  "hlListing": "Nytt på børs: {n}",
  "none": "Ingenting å vise i dag.",
  "notYet": "Markedsoversikten vises etter neste dataoppdatering.",
  "bestWorst": "best {b} · svakest {w}",
  "asOf": "Kurser: {d} (forsinket ca. 15 minutter). På hverdager oppdateres kurser, TeraScore, nyheter og nye rapporter hvert 5. minutt i amerikansk åpningstid og hvert 10. minutt før og etter.",
  "headlines": "Dagens store bevegelser",
  "themesTitle": "Temaer (dagens endring vektet etter markedsverdi)",
  "sectorsTitle": "Sektorer i dag",
  "gainers": "Største økninger (fra $2B)",
  "losers": "Største fall (fra $2B)",
  "today": "I dag",
  "reports": "Nye kvartals- og årsrapporter",
  "filed": "Levert",
  "scoreMoves": "Store TeraScore-endringer siden i går",
  "newListings": "Nytt på børs",
  "listed": "Notert",
  "note": "Endringer siden forrige sluttkurs. Temaer og sektorer er vektet etter markedsverdi. TeraScore-endringer sammenlignes med forrige dags score. I åpningstiden vises dagens endring for selskaper over ca. 2 milliarder dollar og de største fondene; for mindre selskaper etter den daglige oppdateringen.",
  "noFilings": "Ingen SEC-regnskapsrapporter ennå",
  "notScoredYet": "Ikke vurdert ennå",
  "notScoredText": "En TeraScore krever minst én årsrapport (10-K eller 20-F). Nynoterte selskaper får en etter sin første årsrapport; inntil da vises kurs, markedsverdi og eventuelle kvartalstall.",
  "lastReport": "Siste rapport",
  "storiesTitle": "Toppsaker",
  "storiesNote": "Viktige meldinger og store kursbevegelser i store selskaper (markedsverdi over 10 milliarder dollar) fra de siste dagene. Overskriftene kommer fra selskapenes egne rapporter til SEC, på originalspråket engelsk.",
  "kind": {
   "leadership": "Lederskifte",
   "deal": "Fusjon eller oppkjøp",
   "results": "Resultater",
   "critical": "Kritisk hendelse",
   "major": "Større hendelse",
   "restructuring": "Omstrukturering",
   "cyber": "Cybersikkerhetshendelse",
   "board": "Endring i styret",
   "other": "Melding",
   "move": "Stor kursbevegelse"
  },
  "when": {
   "pre": "før åpning",
   "post": "etter stengning",
   "day": "i dag",
   "last": "siste handelsdag"
  },
  "preNote": "Før åpning: de daglige endringene nedenfor er fra forrige handelsdag ({d}). Store selskapers bevegelser før åpning finnes under Toppsaker.",
  "postNote": "Etter stengning: de daglige endringene nedenfor er fra dagens handel; store selskapers bevegelser etter stengning finnes under Toppsaker.",
  "readMore": "Pressemelding (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Ingen store nyheter fra store selskaper akkurat nå.",
  "moreNews": "Alle nyheter",
  "asOfShort": "Kurser: {d}, forsinket ca. 15 minutter",
  "themesShort": {
   "ai": "KI"
  },
  "sinceNews": "siden nyheten",
  "sinceNote": "Ved en nyhet: kursendringen siden nyheten, målt fra siste sluttkurs før den (handel før åpning og etter stengning medregnet). Ved en stor kursbevegelse: dagens bevegelse, før åpning eller etter stengning."
 },
 "screens": {
  "top": {
   "name": "Høyeste TeraScore",
   "desc": "Alle vurderte selskaper, høyeste TeraScore først."
  },
  "bestRiskReward": {
   "name": "Beste score, laveste risiko",
   "desc": "TeraScore på minst 70 og risiko på høyst 30, ingen kritisk advarsel, markedsverdi fra $300M; sortert etter TeraScore minus risiko."
  },
  "safeLongTerm": {
   "name": "Tryggest på lang sikt",
   "desc": "TeraScore ≥ 65, risiko ≤ 25, stabilitet ≥ 70, balansens styrke ≥ 60, lav risiko for finansielle problemer, ingen kritisk advarsel, markedsverdi fra $2B; sortert etter lav risiko, stabilitet og balanse."
  },
  "lowRisk": {
   "name": "Laveste risiko",
   "desc": "Risiko på høyst 20 og ingen kritisk advarsel; laveste risiko først."
  },
  "improvers": {
   "name": "Største forbedring i fjor",
   "desc": "TeraScore opp minst 10 poeng fra forrige regnskapsår, markedsverdi fra $300M; største økning først."
  },
  "growth": {
   "name": "Raske vekstselskaper",
   "desc": "Vekst i siste regnskapsår ≥ 75 og langsiktig vekst ≥ 70, med TeraScore på minst 55, markedsverdi fra $300M."
  },
  "value": {
   "name": "Undervurdert kvalitet",
   "desc": "Verdsettelsesscore ≥ 70 (billig i forhold til resultat og kontantstrøm), TeraScore ≥ 65, lønnsomhet ≥ 60, ingen kritisk advarsel, markedsverdi fra $300M."
  },
  "dividend": {
   "name": "Trygge utbytter",
   "desc": "Utbyttesikkerhet ≥ 75 og direkteavkastning på minst 2,5 %, markedsverdi fra $300M; høyeste avkastning først."
  },
  "largeQuality": {
   "name": "Store kvalitetsselskaper",
   "desc": "Markedsverdi på minst $50B og TeraScore på minst 70."
  },
  "highRisk": {
   "name": "Høy risiko",
   "desc": "Risiko på minst 70, eller høy risiko for finansielle problemer med risiko på minst 55, markedsverdi fra $300M; mest risikable først. Spekulative aksjer: vær forsiktig."
  },
  "decliners": {
   "name": "Største forverring i fjor",
   "desc": "TeraScore ned minst 10 poeng fra forrige regnskapsår, markedsverdi fra $300M; største fall først."
  },
  "dip": {
   "name": "Under toppen, billigere nå",
   "desc": "Kvalitetsselskaper (TeraScore ≥ 65, risiko ≤ 40, ingen kritisk advarsel, markedsverdi fra $300M) der aksjekursen ligger 20–50 % under 12-måneders toppen (månedlige sluttkurser); beste TeraScore først. Større fall utelates: de tyder oftere på problemer enn på rabatt."
  },
  "lowPe": {
   "name": "Lav P/E",
   "desc": "Lønnsomme selskaper med P/E på 3–12 der verdsettelsesscoren også er minst 60 (EV/EBIT og kontantstrømavkastning bekrefter at aksjen er billig), TeraScore ≥ 60, stabilitet ≥ 50, ingen kritisk advarsel, markedsverdi fra $300M. En P/E under 3 skyldes som regel en engangsgevinst og utelates."
  }
 },
 "install": {
  "benefit1": "Eget ikon på startskjermen ved siden av de andre appene dine",
  "benefit2": "Åpnes i fullskjerm, uten nettleserens adressefelt",
  "benefit3": "Starter raskere, og selskapene du så sist, åpnes også uten nett",
  "benefit4": "Oppdaterer seg selv: ingen ny installasjon, ingen appbutikk",
  "iphone1": "Åpne denne siden i Safari.",
  "iphone2": "Trykk på Del-knappen (firkanten med en pil oppover) – på iPhone nederst, på iPad øverst til høyre.",
  "iphone3": "Rull ned og trykk på «Legg til på Hjem-skjerm».",
  "iphone4": "Trykk på «Legg til» øverst til høyre. TeraStockX-ikonet vises på Hjem-skjermen.",
  "android1": "Åpne denne siden i Chrome.",
  "android2": "Trykk på «Installer nå» ovenfor, eller åpne menyen (⋮) øverst til høyre.",
  "android3": "Velg «Installer appen» (eller «Legg til på startskjermen»).",
  "android4": "Bekreft med «Installer». Appen vises blant appene dine og på startskjermen.",
  "desktop1": "Åpne denne siden i Chrome eller Edge.",
  "desktop2": "Klikk på «Installer nå» ovenfor, eller på installeringsikonet helt til høyre i adressefeltet.",
  "desktop3": "Bekreft med «Installer».",
  "desktop4": "TeraStockX åpnes i sitt eget vindu og kan startes fra Start-menyen, Dock eller Launchpad."
 },
 "dividend": {
  "safe": "Trygt",
  "moderate": "Moderat",
  "risky": "I faresonen",
  "unsafe": "Utrygt",
  "na": "Ikke vurdert",
  "safeText": "Godt dekket av resultat og fri kontantstrøm, med en solid historikk.",
  "moderateText": "Dekket, men med begrenset margin; en nedgang kan legge press på det.",
  "riskyText": "Dekningen er tynn eller balansen presset; et kutt er en reell mulighet.",
  "unsafeText": "Ikke dekket av resultat eller kontantstrøm, eller nylig kuttet; et nytt kutt er sannsynlig.",
  "naText": "Ikke nok data til en vurdering.",
  "parts": {
   "priceStability": "Kursstabilitet",
   "fcfPayout": "Dekning fra fri kontantstrøm",
   "earningsPayout": "Dekning fra resultat",
   "leverage": "Gjeldsgrad",
   "trackRecord": "Historikk",
   "stability": "Resultatstabilitet"
  },
  "partsText": {
   "priceStability": "Markedsrisikoscoren (aksjekursens volatilitet og største fall): et kraftig fall kommer ofte før et utbyttekutt.",
   "fcfPayout": "Utbetalt utbytte / fri kontantstrøm: 100 poeng ved 40 % eller mindre (REIT-er: 80 %), 0 poeng ved 120 % eller mer (REIT-er: 130 %) eller ved negativ fri kontantstrøm.",
   "earningsPayout": "Utbetalt utbytte / nettoresultat: 100 poeng ved 50 % eller mindre, 0 poeng ved 150 % eller mer eller ved underskudd. Vurderes ikke for REIT-er.",
   "leverage": "Netto gjeld / EBITDA: 100 poeng ved 1× eller mindre, 0 poeng ved 5× eller mer. Vurderes ikke for banker, forsikringsselskaper og REIT-er.",
   "trackRecord": "År med utbytte uten avbrudd (60 %) og økninger på rad (40 %), opptil 10 år; minus 35 poeng for hvert kutt på mer enn 10 % de siste 10 årene.",
   "stability": "Andelen lønnsomme år av de siste fem."
  }
 },
 "pw": {
  "position": "{t} utgjør {w} av porteføljen (over {l}).",
  "sector": "{s} utgjør {w} av porteføljen (over {l}).",
  "few": "Bare {n} beholdninger: færre enn {m} posisjoner gjør porteføljen sårbar for risikoen i enkeltselskaper.",
  "critical": "Kritisk advarsel: {list}.",
  "distress": "Høy risiko for finansielle problemer: {list}.",
  "weak": "TeraScore under {s}: {list}.",
  "unscored": "Ikke vurdert (utilstrekkelige data): {list}."
 },
 "ocr": {
  "button": "Fra et skjermbilde",
  "loading": "Laster inn tekstgjenkjenning (én gang, ca. 7 MB)…",
  "reading": "Leser bildet… {p} %",
  "privacy": "Bildet forlater ikke enheten din: det leses i nettleseren.",
  "found": "Gjenkjente beholdninger: {n}",
  "check": "Kontroller tickere og antall aksjer, rett om nødvendig, og legg dem deretter til.",
  "inPortfolio": "I porteføljen din nå: {n} aksjer (blir erstattet)",
  "add": "Legg til i porteføljen",
  "cancel": "Avbryt",
  "close": "Lukk",
  "none": "Fant ingen aksjer i bildet. Prøv et skarpere og større skjermbilde der ticker eller selskapsnavn og antall aksjer vises tydelig, eller legg dem til manuelt.",
  "failed": "Tekstgjenkjenningen mislyktes: {e}",
  "needShares": "Skriv inn antall aksjer for hver avkrysset rad.",
  "hint": "Tips: skjermbilder av beholdningslisten i meglerappen din fungerer best; du kan velge flere samtidig.",
  "readingN": "Leser bilde {i} av {n}… {p} %",
  "foundImages": "Gjenkjente beholdninger: {n} (fra {k} bilder)",
  "estimated": "≈ verdi ÷ kurs, kontroller"
 },
 "dq": {
  "partial": "Delvis",
  "partialTitle": "Delvis analyse: {p} % av TeraScore bygger på data. Ikke vurdert på grunn av manglende data (teller høyst som 50): {d}.",
  "partialTitleParts": "Delvis analyse: {p} % av TeraScore bygger på data; flere nøkkeltall mangler.",
  "little": "Lite data",
  "littleTitle": "Ikke nok data til en TeraScore: minst 5 av de 9 områdene må kunne vurderes.",
  "none": "Ingen analyse",
  "noneTitle": "Ingen årsrapport med regnskapstall er tilgjengelig ennå.",
  "newListing": "Nynotert",
  "newTitle": "Nylig notert: får en TeraScore etter sin første årsrapport.",
  "newBadge": "NY",
  "legend": "«Delvis · 65 %» = analysen er ufullstendig: bare denne andelen av TeraScore bygger på data. Merkes under 80 %. Et område uten data teller høyst som nøytrale {s}, så et hull aldri kan løfte scoren, men resultatet er mindre sikkert.",
  "noticePartialTitle": "Delvis analyse: {p} % av TeraScore bygger på data.",
  "noticePartial": "Disse områdene kunne ikke vurderes fordi selskapets rapporter mangler data: {d}. De teller som nøytrale {s}, eller som gjennomsnittet av selskapets øvrige områder hvis det er lavere, så manglende data aldri kan løfte TeraScore; scoren er mindre sikker enn for et fullt analysert selskap.",
  "noticePartialParts": "Noen nøkkeltall mangler i selskapets rapporter. Innenfor hvert område utelates de, og vektene til de øvrige nøkkeltallene øker forholdsmessig, så TeraScore er mindre sikker enn for et fullt analysert selskap.",
  "noticeLittle": "en TeraScore krever minst 5 områder som kan vurderes; dette selskapet har {n}. Områdene som kunne vurderes, vises nedenfor.",
  "estimated": "Anslått ut fra andre rapporterte tall: {list}.",
  "est": {
   "capex": "investeringer ≈ selskapets vanlige investeringer i forhold til omsetningen, eller avskrivninger (selskapet rapporterer dem bare under sitt eget XBRL-element)",
   "operatingIncome": "driftsresultat ≈ resultat før skatt (eller nettoresultat + skatt) + rentekostnader (selskapet rapporterer ingen linje for driftsresultat)",
   "totalDebt": "gjeld = 0 (ingen lån eller rentekostnader rapportert de siste to årene)"
  },
  "partialShort": "Delvis · {p} %",
  "coverageBadge": "Analysen er {p} % fullført (noen data mangler)",
  "partialMobile": "{p} % data"
 },
 "dims": {
  "profitability": {
   "name": "Lønnsomhet",
   "q": "Hvor effektivt gjør selskapet omsetning og kapital om til overskudd?",
   "summary": "Driftsmargin {operatingMargin}, nettomargin {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Kontantstrømmens kvalitet",
   "q": "Er det rapporterte overskuddet dekket av kontanter?",
   "summary": "FCF-margin {fcfMargin}; FCF-konvertering på {fcfConversion} av nettoresultatet; periodiseringsgrad {accrualRatio}; aksjebasert avlønning på {sbcToRevenue} av omsetningen."
  },
  "balanceSheet": {
   "name": "Balansens styrke",
   "q": "Hvor mye gjeld bærer selskapet i forhold til resultat og egenkapital?",
   "summary": "Netto gjeld/EBITDA {netDebtToEbitda}, gjeld/egenkapital {debtToEquity}, rentedekning {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Likviditet",
   "q": "Kan kortsiktige forpliktelser dekkes av kortsiktige eiendeler?",
   "summary": "Likviditetsgrad 1 {currentRatio}, likviditetsgrad 2 {quickRatio}, kontantgrad {cashRatio}."
  },
  "growth1y": {
   "name": "Vekst (siste regnskapsår)",
   "q": "Årlig utvikling i salg, resultat og kontantstrøm.",
   "summary": "Omsetning {revenueYoY}, driftsresultat {operatingIncomeYoY}, EPS {epsYoY}, fri kontantstrøm {fcfYoY} sammenlignet med året før."
  },
  "growthLong": {
   "name": "Langsiktig vekst",
   "q": "Gjennomsnittlig årlig vekst over opptil fem år.",
   "summary": "{windowYears}-årig CAGR: omsetning {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, bokført verdi per aksje {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilitet",
   "q": "Hvor forutsigbare og robuste er resultatene?",
   "summary": "Lønnsom {profitableYearsRatio} av årene, positiv FCF {fcfPositiveRatio}; volatilitet i omsetningsveksten {revenueVolatility}; Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "Kapitalallokering",
   "q": "Hvor godt blir kapitalen ført tilbake til aksjonærene og reinvestert?",
   "summary": "Antall aksjer {shareChangeYearly} per år; aksjonæravkastning {shareholderYield}; utbytte på {payoutRatio} av FCF; endring i ROIC {roicChange}."
  },
  "valuation": {
   "name": "Verdsettelse",
   "q": "Hvor dyr er aksjen i forhold til de fundamentale forholdene?",
   "summary": "P/E {peRatio}, EV/EBIT {evToEbit}, FCF-avkastning {fcfYield}, P/S {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Risiko",
   "q": "Samlet investeringsrisiko (lavere er bedre).",
   "summary": "Risiko for finansielle problemer: {distress}. Årlig volatilitet {volatility}; største fall (5 år) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Markedsrisiko",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Utmerket",
  "strong": "Sterk",
  "moderate": "Moderat",
  "weak": "Svak",
  "poor": "Dårlig",
  "na": "Ingen data"
 },
 "riskGrades": {
  "excellent": "Svært lav",
  "strong": "Lav",
  "moderate": "Moderat",
  "weak": "Høy",
  "poor": "Svært høy",
  "na": "Ingen data"
 },
 "distress": {
  "low": "Lav",
  "medium": "Forhøyet",
  "high": "Høy",
  "lowText": "Ingen tegn til finansielle problemer i de nåværende dataene.",
  "mediumText": "Enkelte faresignaler; situasjonen bør følges.",
  "highText": "Flere indikatorer peker mot betydelige finansielle problemer."
 },
 "outlook": {
  "up": "Bedres",
  "flat": "Stabil",
  "down": "Forverres",
  "unknown": "Utilstrekkelig historikk",
  "upText": "De fundamentale forholdene har blitt jevnt bedre de siste årene.",
  "flatText": "De fundamentale forholdene har stort sett ligget flatt.",
  "downText": "De fundamentale forholdene har blitt dårligere de siste årene.",
  "unknownText": "Minst tre regnskapsår kreves."
 },
 "verdict": {
  "excellent": "Usedvanlig sterke fundamentale forhold på de fleste dimensjoner.",
  "strong": "Økonomisk sunt selskap med solide fundamentale forhold.",
  "moderate": "Blandet fundamental profil med tydelige styrker og svakheter.",
  "weak": "Svake fundamentale forhold; skjerpet forsiktighet er på sin plass.",
  "poor": "Alvorlige fundamentale svakheter.",
  "na": "Utilstrekkelige data til en samlet vurdering."
 },
 "styles": {
  "quality": "Kvalitet",
  "growth": "Vekst",
  "value": "Verdi",
  "income": "Utbytte",
  "speculative": "Spekulativ"
 },
 "sectors": {
  "technology": "Teknologi",
  "healthcare": "Helse",
  "financials": "Finans",
  "realEstate": "Eiendom",
  "consumerDiscretionary": "Varige forbruksvarer",
  "consumerStaples": "Dagligvarer",
  "industrials": "Industri",
  "energy": "Energi",
  "utilities": "Forsyning",
  "communication": "Kommunikasjonstjenester",
  "materials": "Råvarer",
  "shell": "Skallselskaper / SPAC-er",
  "other": "Annet"
 },
 "metrics": {
  "cashRunway": [
   "Kontantrekkevidde",
   "Antall år de likvide eiendelene (kontanter, eller omløpsmidler minus varelager og fordringer) kan finansiere dagens negative frie kontantstrøm. Setter tak på likviditetsscoren: 0,75 år eller mindre = 0 poeng, 3 år eller mer = 100."
  ],
  "grossMargin": [
   "Bruttomargin",
   "Bruttofortjeneste / omsetning."
  ],
  "operatingMargin": [
   "Driftsmargin",
   "Driftsresultat (EBIT) / omsetning."
  ],
  "netMargin": [
   "Nettomargin",
   "Nettoresultat / omsetning."
  ],
  "fcfMargin": [
   "FCF-margin",
   "Fri kontantstrøm (kontantstrøm fra drift − investeringer) / omsetning."
  ],
  "roe": [
   "Egenkapitalavkastning (ROE)",
   "Nettoresultat / gjennomsnittlig egenkapital. Vurderes ikke når egenkapitalen er negativ."
  ],
  "roa": [
   "Totalkapitalavkastning (ROA)",
   "Nettoresultat / gjennomsnittlige samlede eiendeler."
  ],
  "roic": [
   "Avkastning på investert kapital (ROIC)",
   "NOPAT (EBIT × (1 − effektiv skattesats)) / gjennomsnittlig investert kapital (egenkapital + gjeld − kontanter)."
  ],
  "fcfConversion": [
   "FCF-konvertering",
   "Fri kontantstrøm / nettoresultat. Ved nettounderskudd gir positiv FCF 60 poeng."
  ],
  "accrualRatio": [
   "Periodiseringsgrad",
   "(Nettoresultat − kontantstrøm fra drift) / gjennomsnittlige samlede eiendeler. Høye verdier tyder på overskudd som ikke er dekket av kontanter."
  ],
  "sbcToRevenue": [
   "Aksjebasert avlønning / omsetning",
   "Ikke-kontant avlønning som utvanner aksjonærene."
  ],
  "capexToRevenue": [
   "Investeringsintensitet",
   "Investeringer / omsetning."
  ],
  "currentRatio": [
   "Likviditetsgrad 1",
   "Omløpsmidler / kortsiktig gjeld."
  ],
  "quickRatio": [
   "Likviditetsgrad 2",
   "(Omløpsmidler − varelager) / kortsiktig gjeld."
  ],
  "cashRatio": [
   "Kontantgrad",
   "Kontanter og kontantekvivalenter / kortsiktig gjeld."
  ],
  "debtToEquity": [
   "Gjeld / egenkapital",
   "Finansiell gjeld / egenkapital. Negativ egenkapital gir 0."
  ],
  "equityRatio": [
   "Egenkapitalandel",
   "Egenkapital / samlede eiendeler."
  ],
  "liabilitiesToAssets": [
   "Gjeld / eiendeler",
   "Sum gjeld / sum eiendeler."
  ],
  "netDebt": [
   "Netto gjeld",
   "Finansiell gjeld − kontanter. Negativ = netto kontanter."
  ],
  "netDebtToEbitda": [
   "Netto gjeld / EBITDA",
   "Antall år med EBITDA som trengs for å betale ned netto gjeld. Netto kontanter gir 100 når EBITDA er positiv og 50 når den ikke er det (kontantene brukes opp); netto gjeld med negativ EBITDA gir 0."
  ],
  "interestCoverage": [
   "Rentedekning",
   "EBIT / rentekostnader. Ingen rentekostnader gir 100."
  ],
  "goodwillToAssets": [
   "Goodwill og immaterielle eiendeler / eiendeler",
   "Andelen eiendeler fra oppkjøp; risiko for nedskrivning."
  ],
  "payoutRatio": [
   "Utbyttegrad (av FCF)",
   "Utbetalt utbytte / fri kontantstrøm. Vurderes ikke hvis det ikke betales utbytte."
  ],
  "bookValuePerShare": [
   "Bokført verdi per aksje",
   "Egenkapital / utestående aksjer."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(arbeidskapital/eiendeler) + 3,26·(opptjent egenkapital/eiendeler) + 6,72·(EBIT/eiendeler) + 1,05·(egenkapital/gjeld). < 1,1 krise, > 2,6 trygg."
  ],
  "piotroski": [
   "Piotroski F-score",
   "Ni ja/nei-tester av lønnsomhet, gjeldsgrad, likviditet og driftseffektivitet (0–9)."
  ],
  "revenueYoY": [
   "Omsetningsvekst (år/år)",
   "Endring fra forrige regnskapsår."
  ],
  "operatingIncomeYoY": [
   "Vekst i driftsresultat (år/år)",
   "Endring fra forrige regnskapsår; udefinert fra et negativt utgangspunkt."
  ],
  "netIncomeYoY": [
   "Vekst i nettoresultat (år/år)",
   "Endring fra forrige regnskapsår; udefinert fra et negativt utgangspunkt."
  ],
  "epsYoY": [
   "EPS-vekst (år/år)",
   "Utvannet resultat per aksje sammenlignet med året før. 0 poeng hvis siste år ga underskudd."
  ],
  "fcfYoY": [
   "FCF-vekst (år/år)",
   "Fri kontantstrøm sammenlignet med året før."
  ],
  "revenueCagr": [
   "Omsetningens CAGR",
   "Gjennomsnittlig årlig vekstrate over opptil fem år."
  ],
  "epsCagr": [
   "EPS-CAGR",
   "Gjennomsnittlig årlig vekst i utvannet EPS over opptil fem år."
  ],
  "fcfCagr": [
   "FCF-CAGR",
   "Gjennomsnittlig årlig vekst i fri kontantstrøm over opptil fem år."
  ],
  "bookValuePerShareCagr": [
   "CAGR for bokført verdi per aksje",
   "Gjennomsnittlig årlig vekst i egenkapital per aksje."
  ],
  "revenueGrowthYearsRatio": [
   "År med omsetningsvekst",
   "Andelen år i perioden med høyere omsetning enn året før."
  ],
  "marginTrend": [
   "Endring i driftsmargin",
   "Endring i driftsmarginen fra periodens første til siste år (prosentpoeng)."
  ],
  "roicChange": [
   "Endring i ROIC",
   "Endring i ROIC fra periodens første til siste år (prosentpoeng)."
  ],
  "profitableYearsRatio": [
   "Lønnsomme år",
   "Andelen år i perioden med positivt nettoresultat."
  ],
  "fcfPositiveRatio": [
   "År med positiv FCF",
   "Andelen år i perioden med positiv fri kontantstrøm."
  ],
  "revenueVolatility": [
   "Volatilitet i omsetningsvekst",
   "Standardavvik for den årlige omsetningsveksten."
  ],
  "marginVolatility": [
   "Marginvolatilitet",
   "Standardavvik for driftsmarginen (nettomargin for finansselskaper)."
  ],
  "shareChangeYearly": [
   "Endring i antall aksjer (årlig)",
   "Positiv = utvanning, negativ = tilbakekjøp."
  ],
  "marketCap": [
   "Markedsverdi",
   "Aksjekurs × utestående aksjer."
  ],
  "enterpriseValue": [
   "Virksomhetsverdi (EV)",
   "Markedsverdi + finansiell gjeld − kontanter."
  ],
  "peRatio": [
   "Kurs / resultat (P/E)",
   "Markedsverdi / nettoresultat (TTM). Underskudd gir 0."
  ],
  "psRatio": [
   "Kurs / omsetning (P/S)",
   "Markedsverdi / omsetning (TTM)."
  ],
  "pbRatio": [
   "Kurs / bokført verdi (P/B)",
   "Markedsverdi / egenkapital."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Virksomhetsverdi / driftsresultat (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Virksomhetsverdi / EBITDA (TTM)."
  ],
  "fcfYield": [
   "FCF-avkastning",
   "Fri kontantstrøm (TTM) / markedsverdi."
  ],
  "pfcfRatio": [
   "Kurs / FCF",
   "Markedsverdi / fri kontantstrøm (TTM)."
  ],
  "pegRatio": [
   "PEG-tall",
   "P/E delt på EPS-CAGR (i %). Negativ vekst eller underskudd gir 0."
  ],
  "dividendYield": [
   "Direkteavkastning",
   "Utbetalt utbytte (TTM) / markedsverdi."
  ],
  "shareholderYield": [
   "Aksjonæravkastning",
   "(Utbytte + tilbakekjøp av aksjer, TTM) / markedsverdi."
  ],
  "priceReturn1y": [
   "Aksjekurs, 1 år",
   "Totalavkastning for den justerte aksjekursen over 12 måneder."
  ],
  "priceCagr5y": [
   "Aksjekursens CAGR, 5 år",
   "Årlig avkastning for den justerte aksjekursen."
  ],
  "volatility": [
   "Volatilitet (årlig)",
   "Standardavvik for månedlige logaritmiske avkastninger over 36 måneder × √12."
  ],
  "maxDrawdown": [
   "Største fall (5 år)",
   "Aksjekursens største fall fra topp til bunn."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Negativ egenkapital",
   "Gjelden overstiger eiendelene. Det kan skyldes aggressive tilbakekjøp, men tyder ofte på økonomisk press."
  ],
  "persistentLosses": [
   "Vedvarende underskudd",
   "Nettounderskudd i minst to regnskapsår på rad."
  ],
  "lossLastYear": [
   "Nettounderskudd siste år",
   "Siste regnskapsår endte med nettounderskudd."
  ],
  "negativeFcf": [
   "Negativ fri kontantstrøm",
   "Drift og investeringer bruker mer penger enn de skaper; ekstern finansiering trengs."
  ],
  "lowCurrentRatio": [
   "Likviditetsgrad 1 under 1,0",
   "Kortsiktig gjeld overstiger omløpsmidlene (likviditetsgrad 1 {value}). Håndterbart med sterk kontantstrøm fra driften."
  ],
  "interestCoverageCritical": [
   "Utilstrekkelig rentedekning",
   "EBIT dekker rentekostnadene bare {value} — betjeningen av gjelden er i fare."
  ],
  "interestCoverageWeak": [
   "Svak rentedekning",
   "EBIT dekker rentekostnadene bare {value}."
  ],
  "altmanDistress": [
   "Altman Z'' i krisesonen",
   "Z''-score på {value} ligger under krisegrensen på 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' i gråsonen",
   "Z''-score på {value}: verken i krise eller i den trygge sonen (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Netto gjeld uten positiv EBITDA",
   "Selskapet har netto gjeld, men skaper ingen positiv EBITDA til å betjene den."
  ],
  "highLeverage": [
   "Høy gjeldsgrad",
   "Netto gjeld tilsvarer {value} EBITDA."
  ],
  "revenueDecline": [
   "Betydelig omsetningsfall",
   "Omsetningen endret seg med {value} fra året før."
  ],
  "heavyDilution": [
   "Kraftig utvanning av aksjonærene",
   "Antall aksjer øker i gjennomsnitt med {value} per år."
  ],
  "highSbc": [
   "Høy aksjebasert avlønning",
   "Den aksjebaserte avlønningen tilsvarer {value} av omsetningen."
  ],
  "lowEarningsQuality": [
   "Lav resultatkvalitet",
   "Periodiseringsgrad på {value}: overskuddet overstiger kontantstrømmen fra driften betydelig."
  ],
  "dividendUncovered": [
   "Utbyttet er ikke dekket av FCF",
   "Utbyttet overstiger den frie kontantstrømmen (utbyttegrad {value})."
  ],
  "goodwillHeavy": [
   "Mye goodwill og immaterielle eiendeler",
   "{value} av de samlede eiendelene er goodwill og immaterielle eiendeler, som risikerer nedskrivning."
  ],
  "staleData": [
   "Utdaterte regnskapstall",
   "Siste årsrapport dekker perioden som endte {value}."
  ],
  "deepDrawdown": [
   "Kraftig kursfall",
   "Aksjekursen har falt {value} fra femårstoppen."
  ],
  "netCash": [
   "Netto kontanter",
   "Kontantene overstiger den finansielle gjelden med {value}."
  ],
  "highMargin": [
   "Høy driftsmargin",
   "Driftsmargin på {value}."
  ],
  "highRoic": [
   "Høy avkastning på investert kapital",
   "ROIC på {value}, godt over de typiske kapitalkostnadene."
  ],
  "alwaysProfitable": [
   "Lønnsom hvert analysert år",
   "Positivt nettoresultat i alle {years} regnskapsår."
  ],
  "strongGrowth": [
   "Sterk langsiktig vekst",
   "Omsetningens CAGR på {value}."
  ],
  "buybacks": [
   "Netto tilbakekjøp av aksjer",
   "Antall aksjer faller i gjennomsnitt med {value} per år."
  ],
  "altmanSafe": [
   "Altman Z'' i den trygge sonen",
   "Z''-score på {value}."
  ],
  "strongCashConversion": [
   "Sterk konvertering til kontanter",
   "Den frie kontantstrømmen tilsvarer {value} av nettoresultatet."
  ],
  "bankruptcyFiling": [
   "Konkursbegjæring eller rekonstruksjon",
   "Skjema 8-K punkt 1.03 levert {value}."
  ],
  "restatement": [
   "Regnskaper omarbeidet",
   "Skjema 8-K punkt 4.02 (tidligere publiserte regnskaper kan ikke lenger legges til grunn) levert {value}."
  ],
  "debtAcceleration": [
   "Gjeld forfalt før tiden",
   "Skjema 8-K punkt 2.04 (hendelse som fremskynder en finansiell forpliktelse) levert {value}."
  ],
  "delistingNotice": [
   "Varsel om strykning",
   "Skjema 8-K punkt 3.01 (en noteringsregel er ikke oppfylt) levert {value}."
  ],
  "auditorChange": [
   "Revisorbytte",
   "Skjema 8-K punkt 4.01 (bytte av revisor) levert {value}."
  ],
  "insiderBuying": [
   "Innsidekjøp",
   "{count} innsidere kjøpte aksjer i det åpne markedet for til sammen {value} de siste 12 månedene."
  ],
  "insiderSelling": [
   "Omfattende innsidesalg",
   "Innsidere solgte for {value} utenom forhåndsavtalte handelsplaner de siste 12 månedene ({share} av markedsverdien)."
  ]
 },
 "events": {
  "1.03": "Konkurs eller rekonstruksjon",
  "4.02": "Omarbeidelse av regnskaper",
  "2.04": "Fremskyndet forfall av en finansiell forpliktelse",
  "3.01": "Varsel om strykning / brudd på noteringsregler",
  "5.01": "Kontrollskifte",
  "2.01": "Gjennomført oppkjøp eller salg",
  "2.05": "Omstrukturering / avvikling",
  "2.06": "Vesentlig nedskrivning",
  "4.01": "Revisorbytte",
  "1.01": "Vesentlig avtale",
  "1.02": "Oppsigelse av vesentlig avtale",
  "1.05": "Vesentlig cybersikkerhetshendelse",
  "5.02": "Lederskifte (administrerende direktør, finansdirektør eller styreleder)"
 },
 "raw": {
  "income": "Resultatregnskap",
  "cashflow": "Kontantstrømoppstilling",
  "balance": "Balanse",
  "revenue": "Omsetning",
  "costOfRevenue": "Varekostnad",
  "grossProfit": "Bruttofortjeneste",
  "researchAndDevelopment": "Forskning og utvikling",
  "operatingIncome": "Driftsresultat (EBIT)",
  "depreciationAndAmortization": "Av- og nedskrivninger",
  "interestExpense": "Rentekostnader",
  "pretaxIncome": "Resultat før skatt",
  "incomeTaxExpense": "Skattekostnad",
  "netIncome": "Nettoresultat",
  "epsDiluted": "EPS, utvannet ($)",
  "sharesDiluted": "Utvannede aksjer (vektet)",
  "operatingCashFlow": "Kontantstrøm fra drift",
  "capex": "Investeringer",
  "freeCashFlow": "Fri kontantstrøm",
  "shareBasedCompensation": "Aksjebasert avlønning",
  "dividendsPaid": "Utbetalt utbytte",
  "buybacks": "Tilbakekjøp av aksjer",
  "totalAssets": "Sum eiendeler",
  "currentAssets": "Omløpsmidler",
  "cash": "Kontanter og kontantekvivalenter",
  "inventory": "Varelager",
  "accountsReceivable": "Kundefordringer",
  "goodwill": "Goodwill",
  "intangibleAssets": "Immaterielle eiendeler",
  "totalLiabilities": "Sum gjeld",
  "currentLiabilities": "Kortsiktig gjeld",
  "totalDebt": "Finansiell gjeld",
  "equity": "Egenkapital",
  "retainedEarnings": "Opptjent egenkapital",
  "sharesOutstanding": "Utestående aksjer"
 },
 "method": {
  "btPending": "Resultatene fra den historiske testen vises etter neste dataoppdatering.",
  "btCaveats": "Forbehold: bare selskaper som er notert i dag, er med (konkursrammede og strøkne selskaper mangler, så de svakeste scorene gjorde det i virkeligheten enda dårligere); kursene er uten utbytte; dagens sektorsammenligninger brukes for hvert år; vektene ble finjustert på samme periode, så den reelle prognoseevnen kan være noe lavere. Historisk avkastning er ingen garanti for fremtiden, og dette er ikke investeringsråd.",
  "btDividend": "Utbyttesikkerhet: året etter kuttet {safe} av de «trygge», {moderate} av de «moderate», {risky} av dem «i faresonen» og {unsafe} av de «utrygge» utbyttet sitt.",
  "btRisk": "Risiko: i femtedelen med lavest risiko var det største fallet innen 12 måneder i snitt {lo}, og {blo} av aksjene falt mer enn halvparten; i den mest risikable femtedelen {hi} og {bhi}.",
  "btLoss": "Underskudd året etter: av to selskaper der det ene fikk underskudd året etter og det andre ikke, hadde det med underskudd lavest TeraScore med sannsynligheten {p} ({y} selskapsår; 50 % = gjetting, 100 % = perfekt).",
  "btIc": "Ved {share} av de {k} testede datoene fulgte en høyere TeraScore i snitt av bedre påfølgende 12 måneder (gjennomsnittlig rangkorrelasjon {ic}; 0 = ingen sammenheng, 1 = perfekt).",
  "btWorst": "svakeste 20 %",
  "btBest": "beste 20 %",
  "btDrawdown": "Snitt største fall",
  "btBigLoss": "Falt >50 %",
  "btExcess": "Meravkastning (12 mnd.)",
  "btAvg": "snittscore",
  "btQuintile": "Femtedel",
  "btIntro": "Metoden er også målt på historiske data. Hvert kvartal fra {from} til {to} ble hvert selskap vurdert slik det kunne vært gjort da – bare med årsrapporter som allerede var offentlige, til dagens aksjekurs – og sammenlignet med det som skjedde de neste 12 månedene. {n} observasjoner, {c} selskaper, markedsverdi på minst {mc}. Meravkastning: selskapets kursendring over 12 måneder minus mediane selskaps på samme dato.",
  "btTitle": "Hvor pålitelig er det? Historisk test",
  "runwayText": "Hvis den frie kontantstrømmen er negativ (selskapet brenner penger), kan likviditeten høyst få den scoren kontantrekkevidden tilsier: hvor mange år de likvide eiendelene dekker dagens forbruk ({bad} år eller mindre = 0 poeng, {good} år eller mer = 100).",
  "smoothText": "Marginer og kapitalavkastning (ROIC, ROE, ROA) vurderes med {a} % på siste år og {b} % på snittet av de to foregående årene, slik at ett enkelt uvanlig år ikke får scoren til å svinge. Selskapssiden viser dette 3-årsgrunnlaget under den siste verdien.",
  "title": "Metode",
  "intro": "Hvert selskap føres inn i samme datamal fra de reviderte årsrapportene (10-K / 20-F) og de siste kvartalsrapportene (10-Q). Hvert nøkkeltall omregnes til en score fra 0 til 100; hver dimensjon er det vektede snittet av sine nøkkeltall. 100 er best — unntatt for Risiko, der lavere er bedre.",
  "scaling": "Skalaen er lineær mellom verdien som gir 0 poeng og verdien som gir 100 poeng, og begrenses utenfor dette intervallet. Innenfor et område hoppes manglende nøkkeltall over, og de gjenværende vektene normaliseres på nytt; et område vurderes bare når nøkkeltall med minst halvparten av vekten finnes. Datadekningen er den andelen av TeraScore, målt i vekt, som bygger på data.",
  "partial": "Delvis analyse. Når et selskaps rapporter mangler data for et område, teller området i TeraScore som nøytrale {s}, eller som gjennomsnittet av selskapets øvrige områder hvis det er lavere – så manglende data aldri kan løfte scoren (i den historiske testen gjorde selskaper med hull det dårligere enn fullstendige selskaper med samme score). Tall som ikke mangler, men er udefinerte – vekst fra et null- eller negativt utgangspunkt, ROIC med negativ investert kapital, utbyttegraden til et selskap uten utbytte – holdes i stedet utenfor området. Datadekningen er den andelen av TeraScore (målt i vekt) som bygger på data. Under 80 % viser listene «◐ Delvis · 65 %» mellom selskapets navn og dets TeraScore; selskapssiden viser prosenten så snart den er under 100 %, og nevner områdene som mangler. Med færre enn 5 områder som kan vurderes, finnes ingen TeraScore («Lite data»); selskaper uten årsrapport ennå vises som «Ingen analyse» eller «Nynotert».",
  "estimates": "Anslåtte tall. Når et selskap ikke rapporterer en linje for driftsresultat, anslås driftsresultatet (EBIT) som resultat før skatt pluss rentekostnader (ikke for banker og forsikringsselskaper). Et selskap som ikke har rapportert lån eller rentekostnader de to siste regnskapsårene, og der langsiktig gjeld er under 15 % av eiendelene, regnes som gjeldfritt. Selskapssiden lister slike anslag; rådataene viser tallene slik de er rapportert. Noen selskaper rapporterer investeringer bare under sitt eget XBRL-element, som SECs standarddata ikke inneholder; da anslås de ut fra selskapets egne investeringer i forhold til omsetningen i de nærmeste årene der begge er rapportert, ellers ut fra av- og nedskrivninger.",
  "bands": "Karakterintervaller:",
  "profiles": "Banker, forsikringsselskaper og meglere (finansprofil) samt REIT-er (eiendomsprofil) vurderes med tilpassede nøkkeltall og grenser, som vises nedenfor der de avviker.",
  "overall": "TeraScore (samlet)",
  "overallText": "Vektet snitt av de ni fundamentale områdene (motor 2.1). Vektene er finjustert ut fra den historiske testen nedenfor: områder som bedre skilte senere vinnere og tapere, og senere underskudd, veier mer (stabilitet, verdsettelse, kontantstrøm); de som gjorde det dårligere, veier mindre (likviditet, balanse – som beholder en andel på 30 % i risikoscoren). På hver selskapsside viser «Hva løfter og hva trekker ned TeraScore?» hvert områdes bidrag: 50 + Σ vekt × (score − 50).",
  "riskTitle": "Risiko",
  "distressTitle": "Risiko for finansielle problemer",
  "distressText": "Poeng: Altman Z'' i krisesonen +3 / gråsonen +1; negativ egenkapital uten positiv FCF +2; negativ FCF +1; nettounderskudd +1; rentedekning < 1,5× +2; netto gjeld uten positiv EBITDA +1; egenkapitalandel < 5 % (finansselskaper) +2. 2–3 poeng = forhøyet, 4+ = høy.",
  "trendTitle": "Langsiktig trend",
  "trendText": "70 % langsiktig vekst + 30 % vekst siste år, justert med opptil ±5 poeng for driftsmarginens trend. ≥ 65 bedres, 40–64 stabil, < 40 forverres. Beskriver fortiden; ingen prognose.",
  "stylesTitle": "Investeringsprofil",
  "stylesText": "Kvalitet: lønnsomhet ≥ 70, stabilitet ≥ 70, balanse ≥ 60, ingen kritiske faresignaler. Vekst: langsiktig vekst ≥ 70. Verdi: verdsettelse ≥ 65. Utbytte: direkteavkastning ≥ 2 % dekket av FCF. Spekulativ: kritisk faresignal eller underskudd de fleste år.",
  "sectorTitle": "Sektorsammenligning",
  "sectorText": "Hver score rangeres også mot alle analyserte selskaper i samme sektor (persentil).",
  "limitsTitle": "Begrensninger",
  "limitsText": "Scorene bygger bare på rapporterte regnskapstall og markedskurser. De fanger ikke opp ledelsens kvalitet, konkurranseposisjon, nyheter eller selskapets prognoser. Ikke investeringsråd.",
  "logosText": "Selskapenes logoer kommer fra Financial Modeling Preps offentlige logobilder. De er varemerkene til de respektive selskapene og vises bare for å identifisere dem; et selskap uten logo vises med forbokstaven sin.",
  "profileGeneral": "Generell",
  "profileFinancial": "Finans",
  "profileRealEstate": "Eiendom",
  "eventsTitle": "Større selskapshendelser (8-K)",
  "eventsText": "Vesentlige hendelser hentes fra SEC-skjema 8-K de siste 12 månedene, der bare punkttyper med stor betydning beholdes. Konkurs (1.03) og omarbeidelse (4.02) er kritiske faresignaler; fremskyndet forfall av gjeld (2.04), varsel om strykning (3.01) og revisorbytte (4.01) er advarsler, og alle øker risiko- og krisescoren.",
  "relativeTitle": "Sektorrelativ vurdering",
  "relativeText": "Marginer, avkastning, kapitalstruktur, likviditet og verdsettelsesmultipler avhenger sterkt av bransjen. For disse nøkkeltallene er scoren 50 % absolutt (grensene ovenfor) og 50 % relativ: selskapets plassering mellom 10. og 90. persentil blant etablerte sammenlignbare selskaper i sektoren (markedsverdi ≥ $300M, omsetning ≥ $50M, minst 20 sammenlignbare). Sektormedianen vises ved siden av hvert nøkkeltall. Nøkkeltall for vekst, stabilitet og risiko bruker bare absolutte grenser.",
  "insiderText": "Fra SECs kvartalsvise Form 4-datasett for de siste 12 månedene. Bare kjøp og salg i det åpne markedet teller. Kjøp fra minst to innsidere på til sammen $100 000 eller mer er en styrke; salg utenom 10b5-1-planer på over 1 % av markedsverdien er en advarsel.",
  "currencyTitle": "Utenlandske selskaper og valutaer",
  "currencyText": "Utenlandske selskaper notert i USA (skjema 20-F / 40-F, IFRS) analyseres i sin rapporteringsvaluta; nøkkeltallene er valutanøytrale. Til verdsettelsen regnes markedsverdien i dollar om til ESBs referansekurs (andre kilder for valutaer ESB ikke publiserer). Utenlandske private utstedere leverer ikke kvartalsrapporter i XBRL, så verdsettelsen deres bygger på siste regnskapsår.",
  "historyText": "TeraScore-endringer vurderer hvert selskap ved utgangen av hvert regnskapsår med bare den informasjonen som var tilgjengelig da: årsrapporter frem til det året, 8-K-hendelser fra de foregående 12 månedene og aksjekursen på datoen (markedsverdien anslås ut fra dagens markedsverdi, kursendringen og endringen i antall aksjer). TTM-tall, innsidedata og aktuelle markedsdata brukes ikke for tidligere år, og dagens sektorsammenligninger brukes for alle år. I tillegg lagrer hver mandagsoppdatering et øyeblikksbilde av dagens TeraScore; endringer over 4 og 13 uker sammenlignes med det siste øyeblikksbildet som er minst så gammelt.",
  "peersText": "Lignende selskaper hentes fra samme sektor. Hver kandidats avstand er forskjellen i logaritmen av markedsverdien, pluss et tillegg tilsvarende en størrelsesforskjell på 4,5× hvis den hører til en annen bransje, så selskaper i samme bransje og av lignende størrelse kommer først, mens de største selskapene sammenlignes med de største i sin sektor. Bare vurderte selskaper er med, og én aksjeklasse per selskap.",
  "dividendText": "Utbyttesikkerheten vurderer fra 0 til 100 hvor sannsynlig det er at dagens utbytte opprettholdes: 75 eller mer er trygt, 55–74 moderat, 35–54 i faresonen, under 35 utrygt. Komponenter uten data utelates, og de gjenværende vektene skaleres om.",
  "portfolioText": "Porteføljens TeraScore, risiko og direkteavkastning er snitt vektet etter posisjonenes verdi; P/E er samlet verdi delt på resultatet som tilfaller beholdningene (selskaper med underskudd utelatt). Varsler: én posisjon over {p}, én sektor over {s}, færre enn {n} beholdninger, kritiske advarsler, høy risiko for finansielle problemer og svake TeraScore.",
  "quarterlyText": "Kvartalstallene dekker de siste 12 kvartalene fra 10-Q- og 10-K-rapporter. Strømmer er tremånedersbeløp: rapportert direkte eller utledet av hittil-i-år-tall; fjerde kvartal er årsbeløpet minus de første ni månedene. Tall per aksje og antall aksjer vises bare når de er rapportert for de tre månedene, justert for senere aksjesplitter. Balanseposter gjelder ved kvartalets utgang.",
  "portfolioEtfText": "ETF-er (børshandlede fond) kan også legges til: de verdsettes til dagskursen, har ingen TeraScore og holdes utenfor sjekkene av posisjoner, sektorer og antall beholdninger, siden et fond allerede er diversifisert. Direkteavkastningen deres hentes fra Nasdaq når den publiseres; ellers kan den legges inn manuelt.",
  "zero": "0 poeng",
  "hundred": "100 poeng"
 },
 "ai": {
  "button": "Spør AI",
  "title": "AI-assistent",
  "intro": "Spør om tallene på denne siden eller om metoden – jeg forklarer det med enkle ord.",
  "placeholder": "Skriv spørsmålet ditt…",
  "send": "Send",
  "close": "Lukk",
  "note": "Svarene skrives av AI og kan inneholde feil. Ikke investeringsråd.",
  "error": "Assistenten er ikke tilgjengelig akkurat nå. Prøv igjen senere.",
  "rate": "For mange spørsmål fra denne adressen. Prøv igjen om en time.",
  "thinking": "Tenker…",
  "qCompany1": "Hva betyr likviditet?",
  "qCompany2": "Hvorfor er risikoscoren som den er?",
  "qCompany3": "Hva hever og hva senker TeraScore?",
  "qMethod1": "Hvordan beregnes TeraScore?",
  "qMethod2": "Hva betyr risikoscoren?",
  "qMethod3": "Hva er en delvis analyse?"
 }
};
