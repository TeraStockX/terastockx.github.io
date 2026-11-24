// Polish.
export default {
 "meta": {
  "name": "Polski",
  "short": "PL",
  "locale": "pl-PL"
 },
 "ui": {
  "classTitle": "Spółka ma kilka notowanych serii akcji, które różnią się głównie prawem głosu. Dane finansowe i TeraScore są takie same dla wszystkich.",
  "classNonVoting": "Bez prawa głosu",
  "classVoting": "Z prawem głosu",
  "classLetter": "Seria {c}",
  "slogan": "Inteligentne narzędzie dla inwestorów.",
  "notApplicable": "nie dotyczy",
  "bdMissing": "◐ = obszar, którego nie dało się ocenić z powodu braku danych: liczy się jako neutralne {s} albo jako średnia pozostałych obszarów spółki, jeśli jest niższa, więc brakujące dane nigdy nie podnoszą oceny.",
  "bdNote": "Zaczynając od 50, każdy obszar dodaje lub odejmuje swoją wagę × (swoja ocena − 50); suma to TeraScore ({s}, po zaokrągleniu).",
  "bdMissingShort": "brak danych → {s}",
  "bdLowers": "Obniżają",
  "bdLifts": "Podnoszą",
  "bdTitle": "Co podnosi, a co obniża TeraScore?",
  "basis3y": "podstawa 3-letnia",
  "netCashLoss": "gotówka netto, strata: {s} pkt",
  "runwayCap": "ogranicza płynność, dopóki spółka spala gotówkę",
  "capLabel": "limit",
  "yearsUnit": "{n} l.",
  "pfCurrency": "Waluta",
  "pfAllocTitle": "Struktura",
  "pfByHolding": "Według pozycji",
  "pfByCurrency": "Według waluty notowań",
  "pfHistTitle": "Wyniki portfela",
  "pfHistLoading": "Wczytywanie historii notowań…",
  "pfHistValue": "Wartość obecnych pozycji",
  "pfHistValueSub": "Miesięcznie, ostatnie dwa lata, w {c} (ceny zagraniczne po dzisiejszym kursie).",
  "pfHistMissing": "Bez historii notowań, nieuwzględnione: {list}.",
  "pfHistScoreWeekly": "TeraScore portfela tydzień po tygodniu",
  "pfHistScoreYearly": "TeraScore portfela według lat obrotowych",
  "pfHistScoreSub": "Spółki ważone dzisiejszą wartością (ETF-y nie mają TeraScore).",
  "etfAcc": "akumulujący",
  "etfDist": "dystrybuujący",
  "cmpPartialNote": "W raportach tych spółek brakuje danych, więc ich analiza jest częściowa, a oceny mniej pewne: {list}. Obszary oznaczone jako „brak danych” liczą się najwyżej jako neutralne 50, więc brakujące dane nigdy nie podnoszą TeraScore.",
  "showMore": "Pokaż więcej",
  "tagline": "Analiza fundamentalna akcji, przejrzyście.",
  "heroText": "Każda spółka notowana na Nasdaq, NYSE, NYSE American i Cboe oceniana w dziesięciu wymiarach inwestycyjnych — rentowność, jakość przepływów pieniężnych, siła bilansu, wzrost, wycena i ryzyko — na podstawie zbadanych przez biegłych rewidentów raportów do SEC i porównywana ze spółkami z tego samego sektora.",
  "navCompanies": "Spółki",
  "navCompare": "Porównaj",
  "navMethod": "Metodologia",
  "language": "Język",
  "searchPlaceholder": "Szukaj tickera lub nazwy spółki (np. AAPL, Apple)",
  "allSectors": "Wszystkie sektory",
  "onlyAnalyzed": "Przeanalizowane spółki",
  "allCompanies": "Wszystkie spółki",
  "watchlist": "Obserwowane",
  "results": "Wyniki: {n}",
  "analyzedOf": "Przeanalizowane: {a} / spółek: {n}",
  "updated": "Zaktualizowano {d}",
  "company": "Spółka",
  "noData": "brak danych",
  "noResults": "Żadna spółka nie pasuje do wyszukiwania.",
  "prev": "Poprzednia",
  "next": "Następna",
  "demoBadge": "DEMO",
  "demoNote": "Spółki oznaczone DEMO pokazują przybliżone dane przykładowe, dopóki aktualizacja nie wczyta oficjalnych danych SEC.",
  "back": "Wróć do listy",
  "tabAnalysis": "Analiza",
  "tabRaw": "Sprawozdania finansowe",
  "demoNotice": "Dane demonstracyjne: przybliżone wartości przykładowe. Aktualizacja zastępuje je oficjalnymi raportami SEC.",
  "notFound": "Nie znaleziono spółki o tickerze {t}.",
  "lastFy": "Ostatni rok obrotowy: {y}",
  "ttmBasis": "Wycena na danych z ostatnich dwunastu miesięcy (TTM) do {d}",
  "annualBasis": "Wycena na danych z ostatniego roku obrotowego",
  "overallScore": "TeraScore",
  "risk": "Ryzyko",
  "distress": "Ryzyko kłopotów finansowych",
  "trend": "Trend długoterminowy",
  "coverage": "Kompletność danych",
  "watchEmpty": "Lista obserwowanych jest pusta. Stuknij gwiazdkę ☆ w wierszu spółki, aby ją tu dodać.",
  "now": "Teraz",
  "today": "Dziś",
  "yesterday": "Wczoraj",
  "updatedLabel": "Zaktualizowano",
  "searchFuzzy": "Brak dokładnego dopasowania do „{q}”. Podobne nazwy:",
  "years": "{n} l.",
  "marketCap": "Kapitalizacja",
  "price": "Kurs",
  "sector": "Sektor",
  "industry": "Branża",
  "sectionScores": "Karta ocen",
  "sectionFlags": "Sygnały ostrzegawcze i mocne strony",
  "sectionCharts": "Wyniki historyczne",
  "sectionKey": "Kluczowe wskaźniki",
  "howCalculated": "Szczegóły obliczeń",
  "weight": "waga",
  "points": "pkt",
  "notScored": "b.d.",
  "sectorRank": "Lepiej niż {p}% spółek z sektora {s}",
  "sectorRankShort": "Top {p}% w sektorze",
  "riskExplain": "Ryzyko = 100 − ocena bezpieczeństwa. Bezpieczeństwo w {f}% wynika z fundamentów (bilans {bs}%, stabilność {co}%, przepływy pieniężne {cf}%, rentowność {pr}%, płynność {li}%), a w {m}% ze zmienności i największego spadku kursu akcji (jeśli jest historia notowań). Sygnały ostrzegawcze zwiększają ryzyko ({c} pkt za każdy krytyczny i {w} za każdy inny) wzdłuż krzywej nasycenia: każdy punkt zamyka część pozostałej odległości do 100, więc nawet najbardziej ryzykowne spółki nadal się od siebie różnią.",
  "noFlags": "Brak istotnych sygnałów.",
  "critical": "Krytyczne",
  "warningTag": "Ostrzeżenie",
  "strength": "Mocna strona",
  "footer": "TeraStockX wylicza wszystkie oceny z publicznych sprawozdań finansowych złożonych w SEC. Oceny opisują historyczne fundamenty; nie są rekomendacją inwestycyjną i nie prognozują kursów akcji.",
  "engine": "Silnik v{v}. Oceny obliczone na podstawie historycznych, publicznie raportowanych danych; to nie jest rekomendacja inwestycyjna.",
  "currencyNote": "Kwoty w {cur}.",
  "source": "Źródło",
  "retrieved": "pobrano {d}",
  "downloadCsv": "Pobierz CSV",
  "downloadJson": "JSON (szablon)",
  "fiscalYear": "Rok obrotowy",
  "ttm": "TTM",
  "computedRatios": "Obliczone wskaźniki",
  "addWatch": "Dodaj do obserwowanych",
  "removeWatch": "Usuń z obserwowanych",
  "compareWith": "Porównaj",
  "compareTitle": "Porównaj spółki",
  "compareHint": "Wybierz do sześciu spółek, aby porównać je obok siebie.",
  "addCompany": "Dodaj spółkę (nazwa lub ticker)…",
  "remove": "Usuń",
  "dimension": "Wymiar",
  "metric": "Wskaźnik",
  "chartRevenue": "Przychody",
  "chartNetIncome": "Zysk netto",
  "chartFcf": "Wolne przepływy pieniężne",
  "chartMargin": "Marża operacyjna",
  "chartPrice": "Kurs akcji (miesięcznie, skorygowany)",
  "chartRevenueSub": "rocznie",
  "chartNetIncomeSub": "rocznie (czerwony = strata)",
  "chartFcfSub": "przepływy operacyjne − nakłady inwestycyjne",
  "chartMarginSub": "zysk operacyjny / przychody",
  "chartPriceSub": "kursy zamknięcia miesięcy, ostatnie 6 lat",
  "notEnough": "Za mało danych.",
  "errorLoad": "Coś poszło nie tak: {e}",
  "serveHint": "Jeśli plik otwarto bezpośrednio, uruchom lokalny serwer WWW (zob. README).",
  "profileFinancial": "Profil instytucji finansowej: wskaźniki płynności, EBITDA i wolnych przepływów pieniężnych nie dotyczą banków i ubezpieczycieli, dlatego są pominięte.",
  "profileRealEstate": "Profil nieruchomości: progi zadłużenia i wyceny dostosowano do strukturalnie wyższego zadłużenia REIT-ów.",
  "styles": "Profil inwestycyjny",
  "navNews": "Rynek i wydarzenia",
  "navData": "Dane finansowe",
  "newsTitle": "Rynek i wydarzenia",
  "newsIntro": "Istotne wydarzenia, które spółki notowane w USA oficjalnie zgłosiły do SEC na formularzu 8-K w ciągu ostatnich 12 miesięcy: wydarzenia o dużym znaczeniu (upadłość, korekta sprawozdań, ostrzeżenia o wycofaniu z obrotu, zmiana kontroli, przejęcia, restrukturyzacje, odpisy aktualizujące, zmiana biegłego rewidenta, incydenty cyberbezpieczeństwa) oraz zmiany w kierownictwie dużych spółek; rutynowe raporty pominięto.",
  "newsEmpty": "Brak dużych wydarzeń w bieżących danych.",
  "viewFiling": "Zobacz raport",
  "sectionEvents": "Duże wydarzenia (ostatnie 12 miesięcy)",
  "eventsNone": "W ostatnich 12 miesiącach nie zgłoszono dużych wydarzeń.",
  "latestEvents": "Najnowsze duże wydarzenia",
  "allNews": "Wszystkie duże wydarzenia",
  "dataTitle": "Dane finansowe",
  "dataIntro": "Surowe sprawozdania finansowe w szablonie TeraStockX: rachunek zysków i strat, rachunek przepływów pieniężnych i bilans za maksymalnie dziesięć lat obrotowych oraz ostatnie dwanaście miesięcy, z obliczonymi wskaźnikami. Pobierz jako CSV lub JSON.",
  "dataPick": "Wybierz spółkę (nazwa lub ticker)",
  "sev5": "Krytyczne",
  "sev4": "Duże",
  "sev3": "Znaczące",
  "sev2": "Godne uwagi",
  "allSeverities": "Wszystkie rodzaje wydarzeń",
  "onlyCritical": "Tylko krytyczne i duże",
  "openAnalysis": "Otwórz analizę",
  "tabCompanies": "Akcje",
  "tabNews": "Wydarzenia",
  "tabData": "Dane",
  "tabCompare": "Porównaj",
  "tabMethod": "Metoda",
  "newsTop": "Najważniejsze (wydarzenia krytyczne; duże wydarzenia spółek powyżej $1B)",
  "filters": "Filtry wyszukiwarki",
  "filtersActive": "Aktywne: {n}",
  "reset": "Wyczyść filtry",
  "minScore": "Minimalny TeraScore",
  "maxRisk": "Maksymalne ryzyko",
  "anyValue": "Dowolne",
  "minCap": "Minimalna kapitalizacja",
  "minDividend": "Minimalna stopa dywidendy",
  "exchange": "Giełda",
  "allExchanges": "Wszystkie giełdy",
  "styleFilter": "Profil inwestycyjny:",
  "noCritical": "Bez sygnałów krytycznych",
  "pe": "C/Z",
  "dividendYieldShort": "St. dyw.",
  "sectorMedian": "Mediana sektora",
  "insiderTitle": "Transakcje insiderów",
  "insiderBuys": "Zakupy na rynku",
  "insiderSells": "Sprzedaże na rynku",
  "insiderNone": "W ostatnich 12 miesiącach insiderzy nie kupowali ani nie sprzedawali akcji na rynku.",
  "insiderForeign": "Zagraniczni emitenci prywatni są zwolnieni z raportowania na formularzu 4; brak danych o insiderach.",
  "insiderPlanned": "W tym w ramach planów transakcyjnych 10b5-1",
  "insiderPeriod": "Formularze 4 SEC, {from} – {to}. Pokazano tylko zakupy (kod P) i sprzedaże (kod S) na rynku; przydziały, wykonanie opcji i potrącenia podatkowe pominięto.",
  "insiderCount": "Transakcje: {n} · insiderzy: {p}",
  "insiderDate": "Data",
  "insiderName": "Insider",
  "insiderType": "Transakcja",
  "insiderShares": "Akcje",
  "insiderValue": "Wartość",
  "insiderPurchase": "Zakup",
  "insiderSale": "Sprzedaż",
  "insiderPlanTag": "Plan 10b5-1",
  "alertsTitle": "Alerty obserwowanych",
  "alertsSeen": "Oznacz wszystkie jako przeczytane",
  "alertScore": "{t}: TeraScore zmienił się z {from} na {to}",
  "alertRisk": "{t}: ryzyko wzrosło z {from} do {to}",
  "alertDistress": "{t}: ryzyko kłopotów finansowych wynosi teraz: {level}",
  "alertEvent": "{t}: nowe duże wydarzenie – {event} ({date})",
  "alertCritical": "{t}: nowy sygnał krytyczny – {flag}",
  "fxNote": "sprawozdania w {cur}, przeliczone po 1 {cur} = {rate} USD",
  "navTrend": "Zmiany TeraScore",
  "tabTrend": "Zmiany",
  "trendIntro": "Jak zmienia się TeraScore spółek w czasie. Widok według lat obrotowych ocenia każdą spółkę na koniec każdego roku obrotowego wyłącznie na podstawie tego, co było wtedy wiadome (raporty roczne, wydarzenia 8-K z poprzednich 12 miesięcy i kurs akcji z tego dnia). Przy każdej poniedziałkowej aktualizacji dochodzą cotygodniowe migawki, więc zmiany z 4 i 13 tygodni pojawiają się po pierwszych tygodniach.",
  "trendPeriod": "Okres",
  "trendPeriodFy": "Zmiana r/r (rok obrotowy)",
  "trendPeriod4w": "Zmiana w 4 tygodnie",
  "trendPeriod13w": "Zmiana w 13 tygodni",
  "trendUp": "Największe poprawy",
  "trendDown": "Największe pogorszenia",
  "trendChange": "Zmiana",
  "trendFrom": "z {v}",
  "trendWeeklyEmpty": "Cotygodniowe migawki są zbierane przy każdej poniedziałkowej aktualizacji; ten widok wypełni się po pierwszych tygodniach.",
  "trendNote": "Zmiany podano w punktach TeraScore. Oceny według lat obrotowych stosują dzisiejsze punkty odniesienia sektora także do lat ubiegłych.",
  "trendAnnualChart": "TeraScore według lat obrotowych",
  "trendAnnualSub": "ocena z końca każdego roku obrotowego",
  "trendWeeklyChart": "TeraScore, tygodniowo",
  "trendWeeklySub": "migawka z każdej poniedziałkowej aktualizacji",
  "trendAll": "Wszystkie zmiany",
  "navPortfolio": "Portfel",
  "tabPortfolio": "Portfel",
  "addPortfolio": "Dodaj do portfela",
  "inPortfolio": "W portfelu",
  "pdfReport": "Raport PDF",
  "minDivSafety": "Bezpieczeństwo dywidendy",
  "peersTitle": "Podobne spółki",
  "peersNone": "Brak porównywalnych spółek z oceną w tym sektorze.",
  "peerMedian": "Mediana konkurentów",
  "peersSub": "Najbliżsi konkurenci w sektorze {s} według branży i wielkości spółki.",
  "peersRank": "{t} zajmuje #{r} miejsce na {n} w tej grupie według TeraScore.",
  "peersCompare": "Porównaj szczegółowo",
  "dividendTitle": "Dywidenda",
  "dividendSafety": "Bezpieczeństwo dywidendy",
  "dividendYield": "Stopa dywidendy",
  "dps": "Dywidenda na akcję",
  "dpsCagr": "Wzrost dywidendy (CAGR 5 lat)",
  "yearsPaid": "Wypłacana bez przerw",
  "yearsN": "{n} l.",
  "yearsRaised": "Podwyżki z rzędu",
  "dividendCuts": "Obniżki (10 lat)",
  "earningsPayout": "Wskaźnik wypłaty (zysk)",
  "fcfPayout": "Wskaźnik wypłaty (wolne przepływy)",
  "payoutUncovered": "niepokryta",
  "dividendNone": "Spółka nie wypłaca dywidendy.",
  "dividendNoneShort": "brak dywidendy",
  "dividendNote": "Dywidenda na akcję to wypłacone dywidendy pieniężne podzielone przez rozwodnioną liczbę akcji, więc dywidendy nadzwyczajne widać jako skoki. Wskaźniki wypłaty opierają się na ostatnich dwunastu miesiącach, gdy są dostępne.",
  "chartDps": "Dywidenda na akcję",
  "chartDpsSub": "wypłacone dywidendy pieniężne / akcje rozwodnione",
  "period": "Okres",
  "periodAnnual": "Rocznie",
  "periodQuarterly": "Kwartalnie",
  "quarterEnd": "Kwartał zakończony",
  "quarterlyNote": "Dane trzymiesięczne. Gdy kwartał jest raportowany tylko narastająco od początku roku, wartość to dane narastające minus dane poprzedniego kwartału; czwarty kwartał to dane roczne minus pierwsze dziewięć miesięcy.",
  "quarterlyNone": "Brak danych kwartalnych.",
  "quarterlyForeign": "Zagraniczni emitenci prywatni składają tylko raporty roczne (20-F / 40-F); dane kwartalne są niedostępne.",
  "pfIntro": "Wpisz swoje pozycje, aby zobaczyć ważony wartością TeraScore portfela, ryzyko, dochód z dywidend, strukturę sektorową i ostrzeżenia o koncentracji. Portfel jest zapisywany tylko w tej przeglądarce.",
  "pfAdd": "Dodaj",
  "pfFromWatch": "Dodaj obserwowane (po 1 akcji)",
  "pfNeedShares": "Wpisz liczbę akcji.",
  "pfEmpty": "Portfel jest pusty. Dodaj powyżej spółkę i liczbę akcji.",
  "pfValue": "Wartość portfela",
  "pfScore": "Ważony TeraScore",
  "pfIncome": "Roczny dochód z dywidend",
  "pfPe": "C/Z portfela",
  "pfHoldings": "Pozycje",
  "pfSectors": "Struktura sektorowa",
  "pfOther": "Inne",
  "pfChecks": "Kontrola portfela",
  "pfOk": "Brak ostrzeżeń o koncentracji lub jakości.",
  "pfInfo": "Uwaga",
  "pfShares": "Akcje",
  "pfPrice": "Kurs",
  "pfValueCol": "Wartość",
  "pfWeight": "Udział",
  "pfNote": "Kursy i oceny według ostatniej aktualizacji danych ({d}). Wartości w {c}; europejskie ETF-y są wyceniane we własnej walucie notowań i przeliczane po dzisiejszym kursie.",
  "reportTitle": "Raport o spółce",
  "printPdf": "Drukuj / zapisz jako PDF",
  "printHint": "W oknie drukowania wybierz „Zapisz jako PDF”.",
  "reportFinancials": "Pięcioletnie podsumowanie finansowe",
  "profile": "Profil inwestycyjny",
  "ratedCompanies": "Spółki z TeraScore",
  "installFooter": "Zainstaluj aplikację",
  "installBanner": "Zainstaluj TeraStockX jako aplikację na telefonie, tablecie lub komputerze.",
  "installHow": "Jak zainstalować",
  "close": "Zamknij",
  "installTitle": "Zainstaluj TeraStockX jako aplikację",
  "installIntro": "TeraStockX można zainstalować bezpośrednio z tej strony, bez sklepu z aplikacjami i bez obciążającego pobierania. Potem otwiera się z własnej ikony na pełnym ekranie, jak każda inna aplikacja, i zawsze pokazuje najnowsze dane.",
  "installDone": "Korzystasz z zainstalowanej aplikacji.",
  "installNow": "Zainstaluj teraz",
  "installYourDevice": "Twoje urządzenie",
  "installIos": "iPhone i iPad",
  "installAndroid": "Android",
  "installDesktop": "Komputer (Chrome, Edge)",
  "installNote": "Aplikacja działa tak samo jak strona: aktualizacje danych przychodzą automatycznie, a obserwowane i portfel pozostają na tym urządzeniu. Aby ją usunąć, usuń ją jak każdą inną aplikację.",
  "pfAddPlaceholder": "Spółka lub ETF (nazwa lub ticker)…",
  "pfScoreCover": "obejmuje {p} portfela",
  "pfEtfs": "ETF-y",
  "etfExpense": "Opłata roczna {v}",
  "etfNoScore": "ETF-y nie mają TeraScore: fundusz nie ma własnych sprawozdań finansowych.",
  "etfYieldInput": "Stopa dywidendy (%)",
  "etfNote": "ETF-y nie mają TeraScore; ważony TeraScore i ryzyko dotyczą tylko spółek.",
  "etfYieldMissing": "Źródło danych nie publikuje stopy dywidendy dla {list}. Wpisz ją w kolumnie stopy (w %), aby uwzględnić ją w dochodzie z dywidend.",
  "screensTitle": "Szybkie wyszukiwania",
  "colChangeFy": "Zmiana",
  "filtersAndScreens": "Filtry i szybkie wyszukiwania",
  "maxPe": "Maks. C/Z",
  "minDrop": "Poniżej szczytu z 12 miesięcy",
  "dropAtLeast": "co najmniej {p}",
  "colFromHigh": "Od szczytu",
  "contact": "Kontakt",
  "marketToday": "Rynek dziś",
  "marketMore": "Rynek i wydarzenia",
  "eventsTitle": "Duże wydarzenia korporacyjne (8-K)",
  "pfMax": "Maks.",
  "pfSince": "od {d}",
  "pfMoveValue": "Zmiana wartości",
  "pfMoveScore": "Zmiana TeraScore",
  "pfMoveNoScore": "Za mało historii: tygodniowe TeraScore według obecnej metody są zapisywane od {d}.",
  "pfMoveFy": "Ostatni rok obrotowy w porównaniu z poprzednim (na podstawie danych znanych w tamtym czasie).",
  "pfMoveFyRange": "Lata obrotowe {a} → {b} (na podstawie danych znanych w tamtym czasie).",
  "pfMoveChartSub": "W {c}; ceny zagraniczne po dzisiejszym kursie.",
  "pfMoveTop": "Co poruszyło portfelem",
  "pfMoveTopSub": "Dla każdej pozycji: zmiana ceny, jej wpływ na wartość portfela i zmiana TeraScore w okresie.",
  "pfMoveMonthly": "Według cen z końca miesiąca (brak jeszcze dziennych cen zamknięcia): {list}."
 },
 "pulse": {
  "themes": {
   "ai": "Akcje AI",
   "bigTech": "Big Tech",
   "semis": "Półprzewodniki",
   "banks": "Banki",
   "energy": "Ropa i gaz",
   "crypto": "Akcje kryptowalutowe"
  },
  "hlIndex": "{n} {v} dziś",
  "hlTheme": "{n} {v} dziś (najlepsza {b}, najsłabsza {w})",
  "hlUp": "{n}: wzrost o {v} dziś",
  "hlDown": "{n}: spadek o {v} dziś",
  "hlReport": "{n} opublikowała {f} ({form})",
  "annualReport": "raport roczny",
  "quarterlyReport": "raport kwartalny",
  "hlScore": "TeraScore spółki {n} zmienił się o {v} pkt (teraz {o})",
  "hlListing": "Nowość na giełdzie: {n}",
  "none": "Dziś nic do pokazania.",
  "notYet": "Podsumowanie rynku pojawi się po następnej aktualizacji danych.",
  "bestWorst": "najlepsza {b} · najsłabsza {w}",
  "asOf": "Kursy: {d} (opóźnione o ok. 15 minut). W dni robocze kursy, TeraScore, wiadomości i nowe raporty są aktualizowane co 5 minut w godzinach sesji w USA oraz co 10 minut przed nią i po niej.",
  "headlines": "Duże ruchy dnia",
  "themesTitle": "Tematy (dzisiejsza zmiana ważona kapitalizacją)",
  "sectorsTitle": "Sektory dziś",
  "gainers": "Największe wzrosty (od $2B)",
  "losers": "Największe spadki (od $2B)",
  "today": "Dziś",
  "reports": "Nowe raporty kwartalne i roczne",
  "filed": "Złożono",
  "scoreMoves": "Duże zmiany TeraScore od wczoraj",
  "newListings": "Nowości na giełdzie",
  "listed": "Debiut",
  "note": "Zmiany od poprzedniego zamknięcia. Tematy i sektory są ważone kapitalizacją. Zmiany TeraScore porównuje się z oceną z poprzedniego dnia. W trakcie sesji zmiana dzienna jest pokazywana dla spółek powyżej ok. 2 mld dolarów i największych funduszy; dla mniejszych po codziennej aktualizacji.",
  "noFilings": "Brak jeszcze raportów finansowych w SEC",
  "notScoredYet": "Jeszcze bez oceny",
  "notScoredText": "TeraScore wymaga co najmniej jednego raportu rocznego (10-K lub 20-F). Nowo notowane spółki otrzymują go po pierwszym raporcie rocznym; do tego czasu pokazywane są kurs, kapitalizacja i ewentualne dane kwartalne.",
  "lastReport": "Ostatni raport",
  "storiesTitle": "Najważniejsze",
  "storiesNote": "Ważne komunikaty i duże ruchy kursów dużych spółek (kapitalizacja powyżej 10 mld dolarów) z ostatnich dni. Nagłówki pochodzą z raportów, które spółki same złożyły w SEC, w oryginale po angielsku.",
  "kind": {
   "leadership": "Zmiana w kierownictwie",
   "deal": "Fuzja lub przejęcie",
   "results": "Wyniki",
   "critical": "Wydarzenie krytyczne",
   "major": "Duże wydarzenie",
   "restructuring": "Restrukturyzacja",
   "cyber": "Incydent cyberbezpieczeństwa",
   "board": "Zmiana w zarządzie",
   "other": "Komunikat",
   "move": "Duży ruch kursu"
  },
  "when": {
   "pre": "przed sesją",
   "post": "po sesji",
   "day": "dziś",
   "last": "ostatnia sesja"
  },
  "preNote": "Przed otwarciem: dzienne zmiany poniżej dotyczą poprzedniej sesji ({d}). Ruchy dużych spółek przed sesją są w sekcji Najważniejsze.",
  "postNote": "Po zamknięciu: dzienne zmiany poniżej dotyczą dzisiejszej sesji; ruchy dużych spółek po sesji są w sekcji Najważniejsze.",
  "readMore": "Komunikat prasowy (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "W tej chwili brak dużych wiadomości od dużych spółek.",
  "moreNews": "Wszystkie wiadomości",
  "asOfShort": "Kursy: {d}, opóźnione o ok. 15 minut",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "od publikacji",
  "sinceNote": "Przy wiadomości: zmiana kursu od publikacji, liczona od ostatniego kursu zamknięcia przed nią (z handlem przed sesją i po sesji). Przy dużym ruchu kursu: ruch z danego dnia, przed sesją lub po sesji."
 },
 "screens": {
  "top": {
   "name": "Najwyższy TeraScore",
   "desc": "Wszystkie ocenione spółki, od najwyższego TeraScore."
  },
  "bestRiskReward": {
   "name": "Najlepsza ocena, najniższe ryzyko",
   "desc": "TeraScore co najmniej 70 i ryzyko najwyżej 30, bez ostrzeżeń krytycznych, kapitalizacja od $300M; sortowanie według TeraScore minus ryzyko."
  },
  "safeLongTerm": {
   "name": "Najbezpieczniejsze w długim terminie",
   "desc": "TeraScore ≥ 65, ryzyko ≤ 25, stabilność ≥ 70, siła bilansu ≥ 60, niskie ryzyko kłopotów finansowych, bez ostrzeżeń krytycznych, kapitalizacja od $2B; sortowanie według niskiego ryzyka, stabilności i bilansu."
  },
  "lowRisk": {
   "name": "Najniższe ryzyko",
   "desc": "Ryzyko najwyżej 20 i brak ostrzeżeń krytycznych; od najniższego ryzyka."
  },
  "improvers": {
   "name": "Największa poprawa w ubiegłym roku",
   "desc": "TeraScore wyższy o co najmniej 10 pkt niż w poprzednim roku obrotowym, kapitalizacja od $300M; od największego wzrostu."
  },
  "growth": {
   "name": "Szybko rosnące",
   "desc": "Wzrost w ostatnim roku obrotowym ≥ 75 i wzrost długoterminowy ≥ 70, TeraScore co najmniej 55, kapitalizacja od $300M."
  },
  "value": {
   "name": "Niedowartościowana jakość",
   "desc": "Ocena wyceny ≥ 70 (tanio względem zysków i przepływów), TeraScore ≥ 65, rentowność ≥ 60, bez ostrzeżeń krytycznych, kapitalizacja od $300M."
  },
  "dividend": {
   "name": "Bezpieczne dywidendy",
   "desc": "Bezpieczeństwo dywidendy ≥ 75 i stopa dywidendy co najmniej 2,5%, kapitalizacja od $300M; od najwyższej stopy."
  },
  "largeQuality": {
   "name": "Duże spółki wysokiej jakości",
   "desc": "Kapitalizacja co najmniej $50B i TeraScore co najmniej 70."
  },
  "highRisk": {
   "name": "Wysokie ryzyko",
   "desc": "Ryzyko co najmniej 70 albo wysokie ryzyko kłopotów finansowych przy ryzyku co najmniej 55, kapitalizacja od $300M; od najbardziej ryzykownych. Akcje spekulacyjne: zachowaj ostrożność."
  },
  "decliners": {
   "name": "Największe pogorszenie w ubiegłym roku",
   "desc": "TeraScore niższy o co najmniej 10 pkt niż w poprzednim roku obrotowym, kapitalizacja od $300M; od największego spadku."
  },
  "dip": {
   "name": "Poniżej szczytu, teraz taniej",
   "desc": "Spółki wysokiej jakości (TeraScore ≥ 65, ryzyko ≤ 40, bez ostrzeżeń krytycznych, kapitalizacja od $300M), których kurs jest 20–50% poniżej szczytu z 12 miesięcy (zamknięcia miesięczne); od najlepszego TeraScore. Większe spadki pominięto: częściej sygnalizują kłopoty niż okazję."
  },
  "lowPe": {
   "name": "Niski C/Z",
   "desc": "Rentowne spółki z C/Z 3–12, których ocena wyceny też wynosi co najmniej 60 (EV/EBIT i stopa przepływów pieniężnych potwierdzają, że są tanie), TeraScore ≥ 60, stabilność ≥ 50, bez ostrzeżeń krytycznych, kapitalizacja od $300M. C/Z poniżej 3 zwykle wynika z jednorazowego zysku i jest pomijany."
  }
 },
 "install": {
  "benefit1": "Własna ikona na ekranie głównym, obok innych aplikacji",
  "benefit2": "Otwiera się na pełnym ekranie, bez paska adresu przeglądarki",
  "benefit3": "Uruchamia się szybciej, a ostatnio oglądane spółki otwierają się także offline",
  "benefit4": "Aktualizuje się sama: bez ponownej instalacji i bez sklepu z aplikacjami",
  "iphone1": "Otwórz tę stronę w Safari.",
  "iphone2": "Stuknij przycisk Udostępnij (kwadrat ze strzałką w górę) – na iPhonie na dole, na iPadzie w prawym górnym rogu.",
  "iphone3": "Przewiń w dół i stuknij „Do ekranu początk.”.",
  "iphone4": "Stuknij „Dodaj” w prawym górnym rogu. Ikona TeraStockX pojawi się na ekranie początkowym.",
  "android1": "Otwórz tę stronę w Chrome.",
  "android2": "Stuknij „Zainstaluj teraz” powyżej albo otwórz menu (⋮) w prawym górnym rogu.",
  "android3": "Wybierz „Zainstaluj aplikację” (lub „Dodaj do ekranu głównego”).",
  "android4": "Potwierdź, wybierając „Zainstaluj”. Aplikacja pojawi się wśród Twoich aplikacji i na ekranie głównym.",
  "desktop1": "Otwórz tę stronę w Chrome lub Edge.",
  "desktop2": "Kliknij „Zainstaluj teraz” powyżej albo ikonę instalacji na prawym końcu paska adresu.",
  "desktop3": "Potwierdź, wybierając „Zainstaluj”.",
  "desktop4": "TeraStockX otwiera się we własnym oknie i można go uruchamiać z menu Start, Docka lub Launchpada."
 },
 "dividend": {
  "safe": "Bezpieczna",
  "moderate": "Umiarkowana",
  "risky": "Zagrożona",
  "unsafe": "Niepewna",
  "na": "Bez oceny",
  "safeText": "Dobrze pokryta zyskami i wolnymi przepływami pieniężnymi, z solidną historią wypłat.",
  "moderateText": "Pokryta, ale z niewielkim zapasem; spowolnienie mogłoby wywrzeć na nią presję.",
  "riskyText": "Pokrycie jest słabe albo bilans napięty; obniżka jest realną możliwością.",
  "unsafeText": "Niepokryta zyskami ani przepływami albo niedawno obniżona; dalsza obniżka jest prawdopodobna.",
  "naText": "Za mało danych do oceny.",
  "parts": {
   "priceStability": "Stabilność kursu",
   "fcfPayout": "Pokrycie wolnymi przepływami",
   "earningsPayout": "Pokrycie zyskami",
   "leverage": "Zadłużenie",
   "trackRecord": "Historia wypłat",
   "stability": "Stabilność zysków"
  },
  "partsText": {
   "priceStability": "Ocena ryzyka rynkowego (zmienność i największy spadek kursu akcji): gwałtowny spadek często poprzedza obniżkę dywidendy.",
   "fcfPayout": "Wypłacone dywidendy / wolne przepływy pieniężne: 100 pkt przy 40% lub mniej (REIT-y: 80%), 0 pkt przy 120% lub więcej (REIT-y: 130%) albo przy ujemnych wolnych przepływach.",
   "earningsPayout": "Wypłacone dywidendy / zysk netto: 100 pkt przy 50% lub mniej, 0 pkt przy 150% lub więcej albo przy stracie. Nie oceniane dla REIT-ów.",
   "leverage": "Dług netto / EBITDA: 100 pkt przy 1× lub mniej, 0 pkt przy 5× lub więcej. Nie oceniane dla banków, ubezpieczycieli i REIT-ów.",
   "trackRecord": "Lata wypłat bez przerwy (60%) i podwyżki z rzędu (40%), do 10 lat; minus 35 pkt za każdą obniżkę o ponad 10% w ostatnich 10 latach.",
   "stability": "Udział lat z zyskiem w ostatnich pięciu."
  }
 },
 "pw": {
  "position": "{t} stanowi {w} portfela (powyżej {l}).",
  "sector": "{s} stanowi {w} portfela (powyżej {l}).",
  "few": "Tylko pozycje: {n}. Mniej niż {m} pozycji naraża portfel na ryzyko pojedynczej spółki.",
  "critical": "Ostrzeżenie krytyczne: {list}.",
  "distress": "Wysokie ryzyko kłopotów finansowych: {list}.",
  "weak": "TeraScore poniżej {s}: {list}.",
  "unscored": "Bez oceny (za mało danych): {list}."
 },
 "ocr": {
  "button": "Ze zrzutu ekranu",
  "loading": "Wczytywanie rozpoznawania tekstu (jednorazowo, ok. 7 MB)…",
  "reading": "Odczytywanie obrazu… {p}%",
  "privacy": "Obraz nie opuszcza urządzenia: jest odczytywany w przeglądarce.",
  "found": "Rozpoznane pozycje: {n}",
  "check": "Sprawdź tickery i liczbę akcji, w razie potrzeby popraw, a potem dodaj.",
  "inPortfolio": "Obecnie w portfelu: {n} akcji (zostaną zastąpione)",
  "add": "Dodaj do portfela",
  "cancel": "Anuluj",
  "close": "Zamknij",
  "none": "Na obrazie nie znaleziono akcji. Spróbuj ostrzejszego, większego zrzutu ekranu, na którym ticker lub nazwa spółki i liczba akcji są dobrze widoczne, albo dodaj je ręcznie.",
  "failed": "Rozpoznawanie tekstu nie powiodło się: {e}",
  "needShares": "Wpisz liczbę akcji w każdym zaznaczonym wierszu.",
  "hint": "Wskazówka: najlepiej działają zrzuty listy pozycji z aplikacji maklerskiej; możesz wybrać kilka naraz.",
  "readingN": "Odczytywanie obrazu {i} z {n}… {p}%",
  "foundImages": "Rozpoznane pozycje: {n} (z obrazów: {k})",
  "estimated": "≈ wartość ÷ kurs, sprawdź"
 },
 "dq": {
  "partial": "Częściowa",
  "partialTitle": "Analiza częściowa: {p}% TeraScore opiera się na danych. Nieocenione z powodu braku danych (liczą się najwyżej jako 50): {d}.",
  "partialTitleParts": "Analiza częściowa: {p}% TeraScore opiera się na danych; brakuje kilku wskaźników.",
  "little": "Mało danych",
  "littleTitle": "Za mało danych na TeraScore: co najmniej 5 z 9 obszarów musi dać się ocenić.",
  "none": "Brak analizy",
  "noneTitle": "Nie ma jeszcze raportu rocznego z danymi finansowymi.",
  "newListing": "Nowy debiut",
  "newTitle": "Niedawno zadebiutowała: otrzyma TeraScore po pierwszym raporcie rocznym.",
  "newBadge": "NOWA",
  "legend": "„Częściowa · 65%” = analiza jest niepełna: tylko taka część TeraScore opiera się na danych. Oznaczane poniżej 80%. Obszar bez danych liczy się najwyżej jako neutralne {s}, więc luka nigdy nie podnosi oceny, ale wynik jest mniej pewny.",
  "noticePartialTitle": "Analiza częściowa: {p}% TeraScore opiera się na danych.",
  "noticePartial": "Tych obszarów nie dało się ocenić, bo w raportach spółki brakuje danych: {d}. Liczą się jako neutralne {s} albo jako średnia pozostałych obszarów spółki, jeśli jest niższa, więc brakujące dane nigdy nie podnoszą TeraScore; ocena jest mniej pewna niż dla spółki przeanalizowanej w pełni.",
  "noticePartialParts": "W raportach spółki brakuje niektórych wskaźników. W każdym obszarze są one pomijane, a wagi pozostałych wskaźników proporcjonalnie rosną, więc TeraScore jest mniej pewny niż dla spółki przeanalizowanej w pełni.",
  "noticeLittle": "TeraScore wymaga co najmniej 5 obszarów możliwych do oceny; ta spółka ma ich {n}. Obszary, które udało się ocenić, pokazano poniżej.",
  "estimated": "Oszacowano na podstawie innych raportowanych danych: {list}.",
  "est": {
   "capex": "nakłady inwestycyjne ≈ zwykły dla spółki stosunek nakładów do przychodów albo amortyzacja (spółka raportuje je tylko we własnym elemencie XBRL)",
   "operatingIncome": "zysk operacyjny ≈ zysk przed opodatkowaniem (albo zysk netto + podatek) + koszty odsetek (spółka nie raportuje pozycji zysku operacyjnego)",
   "totalDebt": "dług = 0 (brak raportowanych kredytów i kosztów odsetek w ostatnich dwóch latach)"
  },
  "partialShort": "Częściowa · {p}%",
  "coverageBadge": "Analiza ukończona w {p}% (brakuje części danych)",
  "partialMobile": "{p}% danych"
 },
 "dims": {
  "profitability": {
   "name": "Rentowność",
   "q": "Jak efektywnie spółka zamienia przychody i kapitał w zysk?",
   "summary": "Marża operacyjna {operatingMargin}, marża netto {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Jakość przepływów pieniężnych",
   "q": "Czy raportowany zysk ma pokrycie w gotówce?",
   "summary": "Marża FCF {fcfMargin}; konwersja zysku netto na FCF {fcfConversion}; wskaźnik memoriałowy {accrualRatio}; wynagrodzenie w akcjach {sbcToRevenue} przychodów."
  },
  "balanceSheet": {
   "name": "Siła bilansu",
   "q": "Jakie zadłużenie ma spółka w relacji do zysków i kapitału własnego?",
   "summary": "Dług netto/EBITDA {netDebtToEbitda}, dług/kapitał własny {debtToEquity}, pokrycie odsetek {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Płynność",
   "q": "Czy zobowiązania krótkoterminowe da się pokryć aktywami krótkoterminowymi?",
   "summary": "Płynność bieżąca {currentRatio}, płynność szybka {quickRatio}, płynność gotówkowa {cashRatio}."
  },
  "growth1y": {
   "name": "Wzrost (ostatni rok obrotowy)",
   "q": "Roczna dynamika sprzedaży, zysków i przepływów pieniężnych.",
   "summary": "Przychody {revenueYoY}, zysk operacyjny {operatingIncomeYoY}, EPS {epsYoY}, wolne przepływy {fcfYoY} rok do roku."
  },
  "growthLong": {
   "name": "Wzrost długoterminowy",
   "q": "Średnioroczny wzrost w okresie do pięciu lat.",
   "summary": "CAGR za {windowYears} l.: przychody {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, wartość księgowa na akcję {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Stabilność",
   "q": "Na ile przewidywalne i odporne są wyniki?",
   "summary": "Zysk w {profitableYearsRatio} lat, dodatni FCF w {fcfPositiveRatio}; zmienność wzrostu przychodów {revenueVolatility}; F-score Piotroskiego {piotroski}."
  },
  "capitalAllocation": {
   "name": "Alokacja kapitału",
   "q": "Jak dobrze kapitał wraca do akcjonariuszy i jest reinwestowany?",
   "summary": "Liczba akcji {shareChangeYearly} rocznie; stopa zwrotu dla akcjonariuszy {shareholderYield}; wypłata dywidendy {payoutRatio} FCF; zmiana ROIC {roicChange}."
  },
  "valuation": {
   "name": "Wycena",
   "q": "Jak droga jest akcja w relacji do fundamentów?",
   "summary": "C/Z {peRatio}, EV/EBIT {evToEbit}, stopa FCF {fcfYield}, C/P {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Ryzyko",
   "q": "Łączne ryzyko inwestycji (im niższe, tym lepiej).",
   "summary": "Ryzyko kłopotów finansowych: {distress}. Zmienność roczna {volatility}; maksymalny spadek (5 lat) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Ryzyko rynkowe",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Doskonała",
  "strong": "Mocna",
  "moderate": "Umiarkowana",
  "weak": "Słaba",
  "poor": "Zła",
  "na": "Brak danych"
 },
 "riskGrades": {
  "excellent": "Bardzo niskie",
  "strong": "Niskie",
  "moderate": "Umiarkowane",
  "weak": "Wysokie",
  "poor": "Bardzo wysokie",
  "na": "Brak danych"
 },
 "distress": {
  "low": "Niskie",
  "medium": "Podwyższone",
  "high": "Wysokie",
  "lowText": "Bieżące dane nie wskazują na kłopoty finansowe.",
  "mediumText": "Kilka sygnałów ostrzegawczych; sytuację warto obserwować.",
  "highText": "Kilka wskaźników wskazuje na poważne kłopoty finansowe."
 },
 "outlook": {
  "up": "Poprawa",
  "flat": "Stabilnie",
  "down": "Pogorszenie",
  "unknown": "Za krótka historia",
  "upText": "Fundamenty stale się poprawiały w ostatnich latach.",
  "flatText": "Fundamenty pozostawały w zasadzie bez zmian.",
  "downText": "Fundamenty pogorszyły się w ostatnich latach.",
  "unknownText": "Potrzebne są co najmniej trzy lata obrotowe."
 },
 "verdict": {
  "excellent": "Wyjątkowo mocne fundamenty w większości wymiarów.",
  "strong": "Spółka w dobrej kondycji finansowej z solidnymi fundamentami.",
  "moderate": "Mieszany profil fundamentalny z wyraźnymi mocnymi i słabymi stronami.",
  "weak": "Słabe fundamenty; wskazana szczególna ostrożność.",
  "poor": "Poważne słabości fundamentalne.",
  "na": "Za mało danych do oceny ogólnej."
 },
 "styles": {
  "quality": "Jakość",
  "growth": "Wzrost",
  "value": "Wartość",
  "income": "Dochód",
  "speculative": "Spekulacyjna"
 },
 "sectors": {
  "technology": "Technologie",
  "healthcare": "Ochrona zdrowia",
  "financials": "Finanse",
  "realEstate": "Nieruchomości",
  "consumerDiscretionary": "Dobra cykliczne",
  "consumerStaples": "Dobra podstawowe",
  "industrials": "Przemysł",
  "energy": "Energia",
  "utilities": "Użyteczność publiczna",
  "communication": "Usługi komunikacyjne",
  "materials": "Surowce",
  "shell": "Spółki-wydmuszki / SPAC-i",
  "other": "Inne"
 },
 "metrics": {
  "cashRunway": [
   "Zapas gotówki",
   "Liczba lat, przez które aktywa płynne (gotówka albo aktywa obrotowe pomniejszone o zapasy i należności) sfinansowałyby obecne ujemne wolne przepływy. Ogranicza ocenę płynności: 0,75 roku lub mniej = 0 pkt, 3 lata lub więcej = 100."
  ],
  "grossMargin": [
   "Marża brutto",
   "Zysk brutto / przychody."
  ],
  "operatingMargin": [
   "Marża operacyjna",
   "Zysk operacyjny (EBIT) / przychody."
  ],
  "netMargin": [
   "Marża netto",
   "Zysk netto / przychody."
  ],
  "fcfMargin": [
   "Marża FCF",
   "Wolne przepływy pieniężne (przepływy operacyjne − nakłady inwestycyjne) / przychody."
  ],
  "roe": [
   "Rentowność kapitału własnego (ROE)",
   "Zysk netto / średni kapitał własny. Nie oceniane, gdy kapitał własny jest ujemny."
  ],
  "roa": [
   "Rentowność aktywów (ROA)",
   "Zysk netto / średnie aktywa razem."
  ],
  "roic": [
   "Zwrot z zainwestowanego kapitału (ROIC)",
   "NOPAT (EBIT × (1 − efektywna stopa podatkowa)) / średni zainwestowany kapitał (kapitał własny + dług − gotówka)."
  ],
  "fcfConversion": [
   "Konwersja na FCF",
   "Wolne przepływy pieniężne / zysk netto. Przy stracie netto dodatni FCF daje 60 pkt."
  ],
  "accrualRatio": [
   "Wskaźnik memoriałowy",
   "(Zysk netto − przepływy operacyjne) / średnie aktywa razem. Wysokie wartości wskazują na zysk bez pokrycia w gotówce."
  ],
  "sbcToRevenue": [
   "Wynagrodzenie w akcjach / przychody",
   "Niegotówkowe wynagrodzenie, które rozwadnia akcjonariuszy."
  ],
  "capexToRevenue": [
   "Intensywność nakładów",
   "Nakłady inwestycyjne / przychody."
  ],
  "currentRatio": [
   "Płynność bieżąca",
   "Aktywa obrotowe / zobowiązania krótkoterminowe."
  ],
  "quickRatio": [
   "Płynność szybka",
   "(Aktywa obrotowe − zapasy) / zobowiązania krótkoterminowe."
  ],
  "cashRatio": [
   "Płynność gotówkowa",
   "Środki pieniężne / zobowiązania krótkoterminowe."
  ],
  "debtToEquity": [
   "Dług / kapitał własny",
   "Dług finansowy / kapitał własny. Ujemny kapitał własny daje 0."
  ],
  "equityRatio": [
   "Wskaźnik kapitału własnego",
   "Kapitał własny / aktywa razem."
  ],
  "liabilitiesToAssets": [
   "Zobowiązania / aktywa",
   "Zobowiązania razem / aktywa razem."
  ],
  "netDebt": [
   "Dług netto",
   "Dług finansowy − gotówka. Ujemny = gotówka netto."
  ],
  "netDebtToEbitda": [
   "Dług netto / EBITDA",
   "Ile lat EBITDA potrzeba na spłatę długu netto. Gotówka netto daje 100 przy dodatniej EBITDA i 50 przy niedodatniej (gotówka się kurczy); dług netto przy ujemnej EBITDA daje 0."
  ],
  "interestCoverage": [
   "Pokrycie odsetek",
   "EBIT / koszty odsetek. Brak kosztów odsetek daje 100."
  ],
  "goodwillToAssets": [
   "Wartość firmy i wartości niematerialne / aktywa",
   "Udział aktywów z przejęć; narażony na odpisy aktualizujące."
  ],
  "payoutRatio": [
   "Wypłata dywidendy (z FCF)",
   "Wypłacone dywidendy / wolne przepływy pieniężne. Nie oceniane, gdy dywidenda nie jest wypłacana."
  ],
  "bookValuePerShare": [
   "Wartość księgowa na akcję",
   "Kapitał własny / akcje w obrocie."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(kapitał obrotowy/aktywa) + 3,26·(zyski zatrzymane/aktywa) + 6,72·(EBIT/aktywa) + 1,05·(kapitał własny/zobowiązania). < 1,1 zagrożenie, > 2,6 bezpiecznie."
  ],
  "piotroski": [
   "F-score Piotroskiego",
   "Dziewięć testów tak/nie dotyczących rentowności, zadłużenia, płynności i efektywności operacyjnej (0–9)."
  ],
  "revenueYoY": [
   "Wzrost przychodów (r/r)",
   "Zmiana względem poprzedniego roku obrotowego."
  ],
  "operatingIncomeYoY": [
   "Wzrost zysku operacyjnego (r/r)",
   "Zmiana względem poprzedniego roku obrotowego; nieokreślona przy ujemnej bazie."
  ],
  "netIncomeYoY": [
   "Wzrost zysku netto (r/r)",
   "Zmiana względem poprzedniego roku obrotowego; nieokreślona przy ujemnej bazie."
  ],
  "epsYoY": [
   "Wzrost EPS (r/r)",
   "Rozwodniony zysk na akcję względem poprzedniego roku. 0 pkt, jeśli ostatni rok zakończył się stratą."
  ],
  "fcfYoY": [
   "Wzrost FCF (r/r)",
   "Wolne przepływy pieniężne względem poprzedniego roku."
  ],
  "revenueCagr": [
   "CAGR przychodów",
   "Średnioroczna stopa wzrostu w okresie do pięciu lat."
  ],
  "epsCagr": [
   "CAGR EPS",
   "Średnioroczny wzrost rozwodnionego EPS w okresie do pięciu lat."
  ],
  "fcfCagr": [
   "CAGR FCF",
   "Średnioroczny wzrost wolnych przepływów pieniężnych w okresie do pięciu lat."
  ],
  "bookValuePerShareCagr": [
   "CAGR wartości księgowej na akcję",
   "Średnioroczny wzrost kapitału własnego na akcję."
  ],
  "revenueGrowthYearsRatio": [
   "Lata ze wzrostem przychodów",
   "Udział lat w okresie z przychodami wyższymi niż rok wcześniej."
  ],
  "marginTrend": [
   "Zmiana marży operacyjnej",
   "Zmiana marży operacyjnej od pierwszego do ostatniego roku okresu (punkty procentowe)."
  ],
  "roicChange": [
   "Zmiana ROIC",
   "Zmiana ROIC od pierwszego do ostatniego roku okresu (punkty procentowe)."
  ],
  "profitableYearsRatio": [
   "Lata z zyskiem",
   "Udział lat w okresie z dodatnim zyskiem netto."
  ],
  "fcfPositiveRatio": [
   "Lata z dodatnim FCF",
   "Udział lat w okresie z dodatnimi wolnymi przepływami pieniężnymi."
  ],
  "revenueVolatility": [
   "Zmienność wzrostu przychodów",
   "Odchylenie standardowe rocznego wzrostu przychodów."
  ],
  "marginVolatility": [
   "Zmienność marży",
   "Odchylenie standardowe marży operacyjnej (marży netto w instytucjach finansowych)."
  ],
  "shareChangeYearly": [
   "Zmiana liczby akcji (roczna)",
   "Dodatnia = rozwodnienie, ujemna = skup akcji."
  ],
  "marketCap": [
   "Kapitalizacja rynkowa",
   "Kurs akcji × akcje w obrocie."
  ],
  "enterpriseValue": [
   "Wartość przedsiębiorstwa (EV)",
   "Kapitalizacja + dług finansowy − gotówka."
  ],
  "peRatio": [
   "Cena / zysk (C/Z)",
   "Kapitalizacja / zysk netto (TTM). Strata daje 0."
  ],
  "psRatio": [
   "Cena / przychody (C/P)",
   "Kapitalizacja / przychody (TTM)."
  ],
  "pbRatio": [
   "Cena / wartość księgowa (C/WK)",
   "Kapitalizacja / kapitał własny."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Wartość przedsiębiorstwa / zysk operacyjny (TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Wartość przedsiębiorstwa / EBITDA (TTM)."
  ],
  "fcfYield": [
   "Stopa FCF",
   "Wolne przepływy pieniężne (TTM) / kapitalizacja."
  ],
  "pfcfRatio": [
   "Cena / FCF",
   "Kapitalizacja / wolne przepływy pieniężne (TTM)."
  ],
  "pegRatio": [
   "Wskaźnik PEG",
   "C/Z podzielone przez CAGR EPS (w %). Ujemny wzrost lub strata dają 0."
  ],
  "dividendYield": [
   "Stopa dywidendy",
   "Wypłacone dywidendy (TTM) / kapitalizacja."
  ],
  "shareholderYield": [
   "Stopa zwrotu dla akcjonariuszy",
   "(Dywidendy + skup akcji własnych, TTM) / kapitalizacja."
  ],
  "priceReturn1y": [
   "Kurs akcji, 1 rok",
   "Całkowita stopa zwrotu skorygowanego kursu w ciągu 12 miesięcy."
  ],
  "priceCagr5y": [
   "CAGR kursu, 5 lat",
   "Średnioroczna stopa zwrotu skorygowanego kursu."
  ],
  "volatility": [
   "Zmienność (roczna)",
   "Odchylenie standardowe miesięcznych logarytmicznych stóp zwrotu z 36 miesięcy × √12."
  ],
  "maxDrawdown": [
   "Maksymalny spadek (5 lat)",
   "Największy spadek kursu akcji od szczytu do dołka."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Ujemny kapitał własny",
   "Zobowiązania przewyższają aktywa. Może to wynikać z agresywnego skupu akcji, ale często świadczy o napięciu finansowym."
  ],
  "persistentLosses": [
   "Utrzymujące się straty",
   "Strata netto w co najmniej dwóch kolejnych latach obrotowych."
  ],
  "lossLastYear": [
   "Strata netto w ostatnim roku",
   "Ostatni rok obrotowy zakończył się stratą netto."
  ],
  "negativeFcf": [
   "Ujemne wolne przepływy pieniężne",
   "Działalność operacyjna i inwestycje pochłaniają więcej gotówki, niż generują; potrzebne jest finansowanie zewnętrzne."
  ],
  "lowCurrentRatio": [
   "Płynność bieżąca poniżej 1,0",
   "Zobowiązania krótkoterminowe przewyższają aktywa obrotowe (płynność bieżąca {value}). Do opanowania przy silnych przepływach operacyjnych."
  ],
  "interestCoverageCritical": [
   "Niewystarczające pokrycie odsetek",
   "EBIT pokrywa koszty odsetek tylko {value} — obsługa długu jest zagrożona."
  ],
  "interestCoverageWeak": [
   "Słabe pokrycie odsetek",
   "EBIT pokrywa koszty odsetek tylko {value}."
  ],
  "altmanDistress": [
   "Altman Z'' w strefie zagrożenia",
   "Z''-score {value} jest poniżej progu zagrożenia 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' w szarej strefie",
   "Z''-score {value}: ani zagrożenie, ani strefa bezpieczna (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Dług netto bez dodatniej EBITDA",
   "Spółka ma dług netto, ale nie wypracowuje dodatniej EBITDA na jego obsługę."
  ],
  "highLeverage": [
   "Wysokie zadłużenie",
   "Dług netto odpowiada {value} EBITDA."
  ],
  "revenueDecline": [
   "Znaczny spadek przychodów",
   "Przychody zmieniły się o {value} rok do roku."
  ],
  "heavyDilution": [
   "Silne rozwodnienie akcjonariuszy",
   "Liczba akcji rośnie średnio o {value} rocznie."
  ],
  "highSbc": [
   "Wysokie wynagrodzenie w akcjach",
   "Wynagrodzenie w akcjach odpowiada {value} przychodów."
  ],
  "lowEarningsQuality": [
   "Niska jakość zysków",
   "Wskaźnik memoriałowy {value}: zysk wyraźnie przewyższa przepływy operacyjne."
  ],
  "dividendUncovered": [
   "Dywidenda bez pokrycia w FCF",
   "Dywidendy przewyższają wolne przepływy pieniężne (wskaźnik wypłaty {value})."
  ],
  "goodwillHeavy": [
   "Wysoka wartość firmy i wartości niematerialne",
   "{value} aktywów razem to wartość firmy i wartości niematerialne narażone na odpisy."
  ],
  "staleData": [
   "Nieaktualne dane finansowe",
   "Ostatni raport roczny obejmuje okres zakończony {value}."
  ],
  "deepDrawdown": [
   "Głęboki spadek kursu",
   "Kurs akcji spadł o {value} od 5-letniego szczytu."
  ],
  "netCash": [
   "Pozycja gotówki netto",
   "Gotówka przewyższa dług finansowy o {value}."
  ],
  "highMargin": [
   "Wysoka marża operacyjna",
   "Marża operacyjna {value}."
  ],
  "highRoic": [
   "Wysoki zwrot z zainwestowanego kapitału",
   "ROIC {value}, znacznie powyżej typowego kosztu kapitału."
  ],
  "alwaysProfitable": [
   "Zysk w każdym analizowanym roku",
   "Dodatni zysk netto we wszystkich latach obrotowych ({years})."
  ],
  "strongGrowth": [
   "Silny wzrost długoterminowy",
   "CAGR przychodów {value}."
  ],
  "buybacks": [
   "Skup akcji netto",
   "Liczba akcji spada średnio o {value} rocznie."
  ],
  "altmanSafe": [
   "Altman Z'' w strefie bezpiecznej",
   "Z''-score {value}."
  ],
  "strongCashConversion": [
   "Silna konwersja na gotówkę",
   "Wolne przepływy pieniężne odpowiadają {value} zysku netto."
  ],
  "bankruptcyFiling": [
   "Wniosek o upadłość lub zarząd komisaryczny",
   "Formularz 8-K, punkt 1.03, złożony {value}."
  ],
  "restatement": [
   "Korekta sprawozdań finansowych",
   "Formularz 8-K, punkt 4.02 (na wcześniej opublikowanych sprawozdaniach nie można już polegać), złożony {value}."
  ],
  "debtAcceleration": [
   "Przyspieszona wymagalność długu",
   "Formularz 8-K, punkt 2.04 (zdarzenie przyspieszające wymagalność zobowiązania finansowego), złożony {value}."
  ],
  "delistingNotice": [
   "Ostrzeżenie o wycofaniu z obrotu",
   "Formularz 8-K, punkt 3.01 (niespełnienie zasady notowań), złożony {value}."
  ],
  "auditorChange": [
   "Zmiana biegłego rewidenta",
   "Formularz 8-K, punkt 4.01 (zmiana biegłego rewidenta), złożony {value}."
  ],
  "insiderBuying": [
   "Zakupy insiderów",
   "W ostatnich 12 miesiącach insiderzy ({count}) kupili akcje na rynku łącznie za {value}."
  ],
  "insiderSelling": [
   "Duża sprzedaż przez insiderów",
   "W ostatnich 12 miesiącach insiderzy sprzedali akcje za {value} poza wcześniej ustalonymi planami transakcyjnymi ({share} kapitalizacji)."
  ]
 },
 "events": {
  "1.03": "Upadłość lub zarząd komisaryczny",
  "4.02": "Korekta sprawozdań finansowych",
  "2.04": "Przyspieszona wymagalność zobowiązania finansowego",
  "3.01": "Ostrzeżenie o wycofaniu z obrotu / naruszenie zasad notowań",
  "5.01": "Zmiana kontroli",
  "2.01": "Zakończone przejęcie lub zbycie",
  "2.05": "Restrukturyzacja / zakończenie działalności",
  "2.06": "Istotny odpis aktualizujący",
  "4.01": "Zmiana biegłego rewidenta",
  "1.01": "Istotna umowa",
  "1.02": "Rozwiązanie istotnej umowy",
  "1.05": "Istotny incydent cyberbezpieczeństwa",
  "5.02": "Zmiana w kierownictwie (prezes, dyrektor finansowy lub przewodniczący rady)"
 },
 "raw": {
  "income": "Rachunek zysków i strat",
  "cashflow": "Rachunek przepływów pieniężnych",
  "balance": "Bilans",
  "revenue": "Przychody",
  "costOfRevenue": "Koszt sprzedaży",
  "grossProfit": "Zysk brutto",
  "researchAndDevelopment": "Badania i rozwój",
  "operatingIncome": "Zysk operacyjny (EBIT)",
  "depreciationAndAmortization": "Amortyzacja",
  "interestExpense": "Koszty odsetek",
  "pretaxIncome": "Zysk przed opodatkowaniem",
  "incomeTaxExpense": "Podatek dochodowy",
  "netIncome": "Zysk netto",
  "epsDiluted": "EPS rozwodniony ($)",
  "sharesDiluted": "Akcje rozwodnione (średnia ważona)",
  "operatingCashFlow": "Przepływy operacyjne",
  "capex": "Nakłady inwestycyjne",
  "freeCashFlow": "Wolne przepływy pieniężne",
  "shareBasedCompensation": "Wynagrodzenie w akcjach",
  "dividendsPaid": "Wypłacone dywidendy",
  "buybacks": "Skup akcji własnych",
  "totalAssets": "Aktywa razem",
  "currentAssets": "Aktywa obrotowe",
  "cash": "Środki pieniężne",
  "inventory": "Zapasy",
  "accountsReceivable": "Należności handlowe",
  "goodwill": "Wartość firmy",
  "intangibleAssets": "Wartości niematerialne",
  "totalLiabilities": "Zobowiązania razem",
  "currentLiabilities": "Zobowiązania krótkoterminowe",
  "totalDebt": "Dług finansowy",
  "equity": "Kapitał własny",
  "retainedEarnings": "Zyski zatrzymane",
  "sharesOutstanding": "Akcje w obrocie"
 },
 "method": {
  "btPending": "Wyniki testu historycznego pojawią się po następnej aktualizacji danych.",
  "btCaveats": "Zastrzeżenia: uwzględniono tylko spółki notowane dziś (brakuje upadłych i wycofanych z obrotu, więc najsłabsze oceny w rzeczywistości wypadły jeszcze gorzej); kursy nie uwzględniają dywidend; dla każdego roku użyto dzisiejszych punktów odniesienia sektora; wagi dopracowano na tym samym okresie, więc faktyczna moc prognostyczna może być nieco niższa. Wyniki z przeszłości nie gwarantują przyszłych, a to nie jest rekomendacja inwestycyjna.",
  "btDividend": "Bezpieczeństwo dywidendy: w kolejnym roku dywidendę obniżyło {safe} płatników „bezpiecznych”, {moderate} „umiarkowanych”, {risky} „zagrożonych” i {unsafe} „niepewnych”.",
  "btRisk": "Ryzyko: w piątej części o najniższym ryzyku największy spadek w ciągu 12 miesięcy wyniósł średnio {lo}, a {blo} akcji straciło ponad połowę; w najbardziej ryzykownej piątej części {hi} i {bhi}.",
  "btLoss": "Strata w kolejnym roku: z dwóch spółek, z których jedna w kolejnym roku miała stratę, a druga nie, spółka ze stratą miała niższy TeraScore z prawdopodobieństwem {p} (lata-spółki: {y}; 50% = zgadywanie, 100% = ideał).",
  "btIc": "W {share} z {k} badanych dat wyższy TeraScore szedł średnio w parze z lepszymi kolejnymi 12 miesiącami (średnia korelacja rang {ic}; 0 = brak związku, 1 = ideał).",
  "btWorst": "najsłabsze 20%",
  "btBest": "najlepsze 20%",
  "btDrawdown": "Śr. maks. spadek",
  "btBigLoss": "Spadek >50%",
  "btExcess": "Nadwyżkowa stopa zwrotu (12 mies.)",
  "btAvg": "śr. ocena",
  "btQuintile": "Piąta część",
  "btIntro": "Metodę sprawdzono także na danych historycznych. Co kwartał od {from} do {to} każdą spółkę oceniano tak, jak można było to zrobić wtedy – tylko na podstawie opublikowanych już raportów rocznych, po kursie z danego dnia – i porównywano z tym, co wydarzyło się w kolejnych 12 miesiącach. Obserwacje: {n}, spółki: {c}, kapitalizacja co najmniej {mc}. Nadwyżkowa stopa zwrotu: 12-miesięczna zmiana kursu spółki minus zmiana spółki medianowej w tym samym dniu.",
  "btTitle": "Na ile to wiarygodne? Test historyczny",
  "runwayText": "Jeśli wolne przepływy pieniężne są ujemne (spółka spala gotówkę), płynność może dostać najwyżej tyle, ile uzasadnia zapas gotówki: na ile lat aktywa płynne pokrywają obecne spalanie (≤ {bad} l. = 0 pkt, ≥ {good} l. = 100).",
  "smoothText": "Marże i zwroty z kapitału (ROIC, ROE, ROA) ocenia się w {a}% na podstawie ostatniego roku i w {b}% na podstawie średniej z dwóch wcześniejszych lat, aby jeden wyjątkowy rok nie zaburzał oceny. Strona spółki pokazuje tę 3-letnią podstawę pod najnowszą wartością.",
  "title": "Metodologia",
  "intro": "Każda spółka jest odwzorowywana w tym samym szablonie danych na podstawie zbadanych raportów rocznych (10-K / 20-F) i najnowszych raportów kwartalnych (10-Q). Każdy wskaźnik jest przeliczany na ocenę 0–100; każdy wymiar to średnia ważona jego wskaźników. 100 to najlepiej — z wyjątkiem ryzyka, gdzie im mniej, tym lepiej.",
  "scaling": "Skala jest liniowa między wartością dającą 0 pkt a wartością dającą 100 pkt i ograniczona poza tym przedziałem. W obrębie obszaru brakujące wskaźniki są pomijane, a pozostałe wagi normalizowane na nowo; obszar jest oceniany tylko wtedy, gdy dostępne są wskaźniki o łącznej wadze co najmniej połowy. Kompletność danych to część TeraScore (według wag), która opiera się na danych.",
  "partial": "Analiza częściowa. Gdy w raportach spółki brakuje danych dla jakiegoś obszaru, liczy się on w TeraScore jako neutralne {s} albo jako średnia pozostałych obszarów spółki, jeśli jest niższa – więc brakujące dane nigdy nie podnoszą oceny (w teście historycznym spółki z lukami wypadały gorzej niż kompletne spółki z tą samą oceną). Wartości, których nie brakuje, lecz są nieokreślone – wzrost od zerowej lub ujemnej bazy, ROIC przy ujemnym zainwestowanym kapitale, wskaźnik wypłaty spółki bez dywidendy – są po prostu wyłączane z obszaru. Kompletność danych to część TeraScore (według wag), która opiera się na danych. Poniżej 80% listy pokazują „◐ Częściowa · 65%” między nazwą spółki a jej TeraScore; strona spółki pokazuje procent zawsze, gdy jest niższy niż 100%, i wymienia brakujące obszary. Przy mniej niż 5 obszarach możliwych do oceny nie ma TeraScore („Mało danych”); spółki bez raportu rocznego są oznaczane jako „Brak analizy” lub „Nowy debiut”.",
  "estimates": "Wartości szacowane. Gdy spółka nie raportuje pozycji zysku operacyjnego, zysk operacyjny (EBIT) przybliża się jako zysk przed opodatkowaniem plus koszty odsetek (nie dotyczy banków i ubezpieczycieli). Spółka, która w ostatnich dwóch latach obrotowych nie raportowała kredytów ani kosztów odsetek i której zobowiązania długoterminowe są niższe niż 15% aktywów, jest traktowana jako niezadłużona. Strona spółki wymienia takie szacunki; dane surowe pokazują wartości tak, jak je zaraportowano. Niektóre spółki raportują nakłady inwestycyjne tylko we własnym elemencie XBRL, którego nie ma w standardowych danych SEC; wtedy szacuje się je na podstawie własnego stosunku nakładów do przychodów spółki w najbliższych latach, w których raportowano obie wielkości, a w przeciwnym razie na podstawie amortyzacji.",
  "bands": "Przedziały ocen:",
  "profiles": "Banki, ubezpieczyciele i domy maklerskie (profil finansowy) oraz REIT-y (profil nieruchomości) oceniane są dostosowanymi wskaźnikami i progami, pokazanymi poniżej tam, gdzie się różnią.",
  "overall": "TeraScore (ogólny)",
  "overallText": "Średnia ważona dziewięciu obszarów fundamentalnych (silnik 2.1). Wagi dopracowano na podstawie poniższego testu historycznego: obszary, które lepiej odróżniały późniejszych zwycięzców i przegranych oraz późniejsze straty, ważą więcej (stabilność, wycena, przepływy pieniężne); te, które radziły sobie gorzej, ważą mniej (płynność, bilans – który zachowuje 30% udziału w ocenie ryzyka). Na stronie każdej spółki sekcja „Co podnosi, a co obniża TeraScore?” pokazuje wkład każdego obszaru: 50 + Σ waga × (ocena − 50).",
  "riskTitle": "Ryzyko",
  "distressTitle": "Ryzyko kłopotów finansowych",
  "distressText": "Punkty: Altman Z'' w strefie zagrożenia +3 / w szarej strefie +1; ujemny kapitał własny bez dodatniego FCF +2; ujemny FCF +1; strata netto +1; pokrycie odsetek < 1,5× +2; dług netto bez dodatniej EBITDA +1; wskaźnik kapitału własnego < 5% (instytucje finansowe) +2. 2–3 pkt = podwyższone, 4+ = wysokie.",
  "trendTitle": "Trend długoterminowy",
  "trendText": "70% wzrostu długoterminowego + 30% wzrostu z ostatniego roku, z korektą do ±5 pkt zależnie od trendu marży operacyjnej. ≥ 65 poprawa, 40–64 stabilnie, < 40 pogorszenie. Opisuje przeszłość; to nie prognoza.",
  "stylesTitle": "Profil inwestycyjny",
  "stylesText": "Jakość: rentowność ≥ 70, stabilność ≥ 70, bilans ≥ 60, brak sygnałów krytycznych. Wzrost: wzrost długoterminowy ≥ 70. Wartość: wycena ≥ 65. Dochód: stopa dywidendy ≥ 2% pokryta przez FCF. Spekulacyjna: sygnał krytyczny lub straty w większości lat.",
  "sectorTitle": "Porównanie sektorowe",
  "sectorText": "Każda ocena jest też szeregowana na tle wszystkich przeanalizowanych spółek z tego samego sektora (percentyl).",
  "limitsTitle": "Ograniczenia",
  "limitsText": "Oceny opierają się wyłącznie na raportowanych danych finansowych i cenach rynkowych. Nie uwzględniają jakości zarządu, pozycji konkurencyjnej, wiadomości ani prognoz spółki. To nie jest rekomendacja inwestycyjna.",
  "logosText": "Logo spółek pochodzą z publicznych grafik Financial Modeling Prep. Są znakami towarowymi poszczególnych spółek i służą wyłącznie do ich identyfikacji; spółka bez logo jest pokazywana z pierwszą literą nazwy.",
  "profileGeneral": "Ogólny",
  "profileFinancial": "Finansowy",
  "profileRealEstate": "Nieruchomości",
  "eventsTitle": "Duże wydarzenia korporacyjne (8-K)",
  "eventsText": "Istotne wydarzenia pochodzą z formularzy 8-K złożonych w SEC w ostatnich 12 miesiącach; zachowano tylko punkty o dużym znaczeniu. Upadłość (1.03) i korekta sprawozdań (4.02) to sygnały krytyczne; przyspieszona wymagalność długu (2.04), ostrzeżenie o wycofaniu z obrotu (3.01) i zmiana biegłego rewidenta (4.01) to ostrzeżenia – wszystkie podnoszą oceny ryzyka i kłopotów finansowych.",
  "relativeTitle": "Ocena względem sektora",
  "relativeText": "Marże, zwroty, struktura kapitału, płynność i mnożniki wyceny silnie zależą od branży. Dla tych wskaźników ocena jest w 50% bezwzględna (progi powyżej), a w 50% względna: pozycja spółki między 10. a 90. percentylem ugruntowanych konkurentów z sektora (kapitalizacja ≥ $300M, przychody ≥ $50M, co najmniej 20 konkurentów). Mediana sektora jest pokazywana obok każdego wskaźnika. Wskaźniki wzrostu, stabilności i ryzyka korzystają tylko z progów bezwzględnych.",
  "insiderText": "Na podstawie kwartalnych zbiorów danych formularzy 4 SEC z ostatnich 12 miesięcy. Liczą się tylko zakupy i sprzedaże na rynku. Zakupy co najmniej dwóch insiderów o łącznej wartości $100 000 lub więcej to mocna strona; sprzedaże poza planami 10b5-1 powyżej 1% kapitalizacji to ostrzeżenie.",
  "currencyTitle": "Spółki zagraniczne i waluty",
  "currencyText": "Spółki zagraniczne notowane w USA (formularze 20-F / 40-F, MSSF) są analizowane w walucie sprawozdawczej; wskaźniki nie zależą od waluty. Do wyceny kapitalizację w dolarach przelicza się po kursie referencyjnym EBC (dla walut, których EBC nie publikuje – według innych źródeł). Zagraniczni emitenci prywatni nie składają kwartalnych raportów XBRL, więc ich wycena opiera się na ostatnim roku obrotowym.",
  "historyText": "Zmiany TeraScore oceniają każdą spółkę na koniec każdego roku obrotowego wyłącznie na podstawie informacji dostępnych w tamtym czasie: raportów rocznych do danego roku, wydarzeń 8-K z poprzedzających 12 miesięcy i kursu akcji z tego dnia (kapitalizację szacuje się z dzisiejszej kapitalizacji, zmiany kursu i zmiany liczby akcji). Dla lat ubiegłych nie używa się danych TTM, danych o insiderach ani bieżących danych rynkowych, a dzisiejsze punkty odniesienia sektora stosuje się do wszystkich lat. Ponadto każda poniedziałkowa aktualizacja zapisuje migawkę bieżącego TeraScore; zmiany z 4 i 13 tygodni porównuje się z najnowszą migawką co najmniej tak starą.",
  "peersText": "Podobne spółki wybiera się z tego samego sektora. Odległość każdego kandydata to różnica logarytmów kapitalizacji plus kara równa 4,5-krotnej różnicy wielkości, jeśli należy do innej branży; dzięki temu najpierw pojawiają się spółki z tej samej branży i o podobnej wielkości, a największe spółki są zestawiane z największymi w swoim sektorze. Uwzględnia się tylko spółki z oceną i jedną serię akcji na spółkę.",
  "dividendText": "Bezpieczeństwo dywidendy ocenia w skali 0–100, na ile prawdopodobne jest utrzymanie obecnej dywidendy: 75 lub więcej to bezpieczna, 55–74 umiarkowana, 35–54 zagrożona, poniżej 35 niepewna. Składniki bez danych są pomijane, a pozostałe wagi przeskalowywane.",
  "portfolioText": "TeraScore, ryzyko i stopa dywidendy portfela to średnie ważone wartością pozycji; C/Z to łączna wartość podzielona przez zysk przypadający na pozycje (bez spółek ze stratą). Ostrzeżenia: pojedyncza pozycja powyżej {p}, sektor powyżej {s}, mniej niż {n} pozycji, ostrzeżenia krytyczne, wysokie ryzyko kłopotów finansowych i słabe TeraScore.",
  "quarterlyText": "Dane kwartalne obejmują ostatnie 12 kwartałów z raportów 10-Q i 10-K. Przepływy to kwoty trzymiesięczne: raportowane bezpośrednio lub wyliczone z danych narastających od początku roku; czwarty kwartał to kwota roczna minus pierwsze dziewięć miesięcy. Dane na akcję i liczby akcji pokazuje się tylko wtedy, gdy zaraportowano je za trzy miesiące, z korektą o późniejsze splity. Pozycje bilansu są na koniec kwartału.",
  "portfolioEtfText": "Można dodawać także ETF-y (fundusze notowane na giełdzie): są wyceniane po kursie dziennym, nie mają TeraScore i nie biorą udziału w kontrolach pozycji, sektorów i liczby pozycji, bo fundusz jest już zdywersyfikowany. Ich stopa dywidendy pochodzi z Nasdaq, jeśli jest publikowana; w przeciwnym razie można ją wpisać ręcznie.",
  "zero": "0 pkt",
  "hundred": "100 pkt"
 },
 "ai": {
  "button": "Zapytaj AI",
  "title": "Asystent AI",
  "intro": "Zapytaj o liczby na tej stronie lub o metodologię – wyjaśnię to prostymi słowami.",
  "placeholder": "Wpisz pytanie…",
  "send": "Wyślij",
  "close": "Zamknij",
  "note": "Odpowiedzi pisze AI i mogą zawierać błędy. To nie jest porada inwestycyjna.",
  "error": "Asystent jest teraz niedostępny. Spróbuj ponownie później.",
  "rate": "Zbyt wiele pytań z tego adresu. Spróbuj ponownie za godzinę.",
  "thinking": "Myślę…",
  "qCompany1": "Co oznacza płynność?",
  "qCompany2": "Dlaczego ocena ryzyka jest taka?",
  "qCompany3": "Co podnosi, a co obniża TeraScore?",
  "qMethod1": "Jak obliczany jest TeraScore?",
  "qMethod2": "Co oznacza ocena ryzyka?",
  "qMethod3": "Czym jest analiza częściowa?"
 }
};
