// Korean.
export default {
 "meta": {
  "name": "한국어",
  "short": "KO",
  "locale": "ko-KR"
 },
 "ui": {
  "classTitle": "이 기업은 여러 주식 클래스가 상장되어 있으며, 주로 의결권에서 차이가 납니다. 재무 데이터와 TeraScore는 모든 클래스에서 동일합니다.",
  "classNonVoting": "무의결권",
  "classVoting": "의결권 있음",
  "classLetter": "클래스 {c}",
  "slogan": "투자자를 위한 스마트한 도구.",
  "notApplicable": "해당 없음",
  "bdMissing": "◐ = 데이터 부족으로 평가하지 못한 영역: 중립값 {s}로 계산하거나, 기업의 다른 영역 평균이 더 낮으면 그 평균으로 계산하므로, 누락된 데이터가 점수를 올리는 일은 없습니다.",
  "bdNote": "50에서 시작해 각 영역이 가중치 × (해당 점수 − 50)만큼 더하거나 뺍니다. 그 합계가 TeraScore입니다({s}, 반올림).",
  "bdMissingShort": "데이터 없음 → {s}",
  "bdLowers": "낮추는 요인",
  "bdLifts": "높이는 요인",
  "bdTitle": "TeraScore를 높이는 요인과 낮추는 요인은?",
  "basis3y": "3년 기준",
  "netCashLoss": "순현금, 적자: {s}점",
  "runwayCap": "기업이 현금을 소진하는 동안 유동성 점수에 상한을 둡니다",
  "capLabel": "상한",
  "yearsUnit": "{n}년",
  "pfCurrency": "통화",
  "pfAllocTitle": "배분",
  "pfByHolding": "보유 종목별",
  "pfByCurrency": "거래 통화별",
  "pfHistTitle": "포트폴리오 추이",
  "pfHistLoading": "가격 이력을 불러오는 중…",
  "pfHistValue": "현재 보유 자산 평가액",
  "pfHistValueSub": "월별, 최근 2년, {c} 기준(해외 가격은 오늘 환율로 환산).",
  "pfHistMissing": "가격 이력이 없어 제외됨: {list}.",
  "pfHistScoreWeekly": "포트폴리오의 TeraScore(주간)",
  "pfHistScoreYearly": "포트폴리오의 TeraScore(회계연도별)",
  "pfHistScoreSub": "기업은 오늘 평가액으로 가중됩니다(ETF는 TeraScore가 없습니다).",
  "etfAcc": "누적형",
  "etfDist": "분배형",
  "cmpPartialNote": "이 기업들은 공시에 데이터가 누락되어 분석이 부분적이며 점수의 확실성이 낮습니다: {list}. ‘데이터 없음’으로 표시된 영역은 최대 중립값 50으로 계산되므로, 누락된 데이터가 TeraScore를 올리는 일은 없습니다.",
  "showMore": "더 보기",
  "tagline": "펀더멘털 주식 분석을 명확하게.",
  "heroText": "Nasdaq, NYSE, NYSE American, Cboe에 상장된 모든 기업을 감사받은 SEC 공시를 바탕으로 수익성, 현금흐름의 질, 재무 건전성, 성장성, 밸류에이션, 리스크 등 10가지 투자 관점에서 평가하고 같은 섹터 기업과 비교합니다.",
  "navCompanies": "기업",
  "navCompare": "비교",
  "navMethod": "평가 방법",
  "language": "언어",
  "searchPlaceholder": "티커 또는 기업명 검색(예: AAPL, Apple)",
  "allSectors": "전체 섹터",
  "onlyAnalyzed": "분석된 기업",
  "allCompanies": "전체 기업",
  "watchlist": "관심 종목",
  "results": "결과 {n}건",
  "analyzedOf": "분석 {a} / 전체 {n}개 기업",
  "updated": "{d} 업데이트",
  "company": "기업",
  "noData": "데이터 없음",
  "noResults": "검색 조건에 맞는 기업이 없습니다.",
  "prev": "이전",
  "next": "다음",
  "demoBadge": "데모",
  "demoNote": "‘데모’로 표시된 기업은 데이터 업데이트 도구가 SEC 공식 데이터를 불러올 때까지 대략적인 샘플 수치를 보여 줍니다.",
  "back": "목록으로 돌아가기",
  "tabAnalysis": "분석",
  "tabRaw": "재무제표",
  "demoNotice": "데모 데이터: 대략적인 샘플 수치입니다. 데이터 업데이트 도구가 SEC 공식 공시로 대체합니다.",
  "notFound": "티커 {t}에 해당하는 기업이 없습니다.",
  "lastFy": "최근 회계연도: {y}",
  "ttmBasis": "{d}까지 최근 12개월(TTM) 수치 기준 밸류에이션",
  "annualBasis": "최근 회계연도 수치 기준 밸류에이션",
  "overallScore": "TeraScore",
  "risk": "리스크",
  "distress": "재무 부실 위험",
  "trend": "장기 추세",
  "coverage": "데이터 충실도",
  "watchEmpty": "관심 종목이 비어 있습니다. 기업 행의 ☆ 별표를 누르면 여기에 추가됩니다.",
  "now": "지금",
  "today": "오늘",
  "yesterday": "어제",
  "updatedLabel": "업데이트",
  "searchFuzzy": "“{q}”와 정확히 일치하는 결과가 없습니다. 비슷한 이름:",
  "years": "{n}년",
  "marketCap": "시가총액",
  "price": "주가",
  "sector": "섹터",
  "industry": "업종",
  "sectionScores": "점수표",
  "sectionFlags": "경고 신호와 강점",
  "sectionCharts": "과거 실적",
  "sectionKey": "핵심 지표",
  "howCalculated": "계산 세부 정보",
  "weight": "가중치",
  "points": "점",
  "notScored": "해당 없음",
  "sectorRank": "{s} 기업의 {p}%보다 우수",
  "sectorRankShort": "섹터 상위 {p}%",
  "riskExplain": "리스크 = 100 − 안전성 점수. 안전성은 {f}%가 펀더멘털(재무 건전성 {bs}%, 안정성 {co}%, 현금흐름 {cf}%, 수익성 {pr}%, 유동성 {li}%), {m}%가 주가의 변동성과 최대 하락(가격 이력이 있는 경우)으로 구성됩니다. 경고 신호는 포화 곡선을 따라 리스크를 높입니다(치명적 경고 1건당 {c}점, 기타 경고 1건당 {w}점). 각 점수는 100까지 남은 차이의 일부를 메우므로, 가장 위험한 기업들 사이에도 차이가 남습니다.",
  "noFlags": "주목할 만한 경고 신호가 없습니다.",
  "critical": "치명적",
  "warningTag": "경고",
  "strength": "강점",
  "footer": "TeraStockX는 모든 점수를 SEC에 제출된 공개 재무제표에서 산출합니다. 점수는 과거의 펀더멘털을 나타내며, 투자 조언이 아니고 주가를 예측하지도 않습니다.",
  "engine": "엔진 v{v}. 점수는 공개된 과거 데이터로 계산되었습니다. 투자 조언이 아닙니다.",
  "currencyNote": "금액 단위: {cur}.",
  "source": "출처",
  "retrieved": "{d} 수집",
  "downloadCsv": "CSV 다운로드",
  "downloadJson": "JSON(템플릿)",
  "fiscalYear": "회계연도",
  "ttm": "TTM",
  "computedRatios": "산출 지표",
  "addWatch": "관심 종목에 추가",
  "removeWatch": "관심 종목에서 삭제",
  "compareWith": "비교",
  "compareTitle": "기업 비교",
  "compareHint": "최대 6개 기업을 골라 나란히 비교하세요.",
  "addCompany": "기업 추가(기업명 또는 티커)…",
  "remove": "삭제",
  "dimension": "평가 관점",
  "metric": "지표",
  "chartRevenue": "매출액",
  "chartNetIncome": "순이익",
  "chartFcf": "잉여현금흐름",
  "chartMargin": "영업이익률",
  "chartPrice": "주가(월별, 수정 주가)",
  "chartRevenueSub": "연간",
  "chartNetIncomeSub": "연간(빨간색 = 적자)",
  "chartFcfSub": "영업현금흐름 − 설비투자",
  "chartMarginSub": "영업이익 / 매출액",
  "chartPriceSub": "월말 종가, 최근 6년",
  "notEnough": "데이터가 부족합니다.",
  "errorLoad": "문제가 발생했습니다: {e}",
  "serveHint": "파일을 직접 열었다면 로컬 웹 서버를 실행하세요(README 참고).",
  "profileFinancial": "금융기관 프로필: 유동성, EBITDA, 잉여현금흐름 지표는 은행과 보험사에 적용되지 않아 제외됩니다.",
  "profileRealEstate": "부동산 프로필: REIT의 구조적으로 높은 부채를 반영해 레버리지와 밸류에이션 기준을 조정했습니다.",
  "styles": "투자 프로필",
  "navNews": "시장 및 이벤트",
  "navData": "재무 데이터",
  "newsTitle": "시장 및 이벤트",
  "newsIntro": "미국 상장 기업이 최근 12개월 동안 Form 8-K로 SEC에 공식 보고한 중요 이벤트: 영향이 큰 이벤트(파산, 재무제표 재작성, 상장폐지 통지, 지배권 변경, 인수, 구조조정, 손상차손, 감사인 교체, 사이버 보안 사고)와 대기업의 경영진 교체. 일상적인 공시는 제외됩니다.",
  "newsEmpty": "현재 데이터에 주요 이벤트가 없습니다.",
  "viewFiling": "공시 보기",
  "sectionEvents": "주요 이벤트(최근 12개월)",
  "eventsNone": "최근 12개월 동안 보고된 주요 이벤트가 없습니다.",
  "latestEvents": "최근 주요 이벤트",
  "allNews": "전체 주요 이벤트",
  "dataTitle": "재무 데이터",
  "dataIntro": "TeraStockX 템플릿의 원천 재무제표: 최대 10개 회계연도와 최근 12개월의 손익계산서, 현금흐름표, 재무상태표 및 산출 지표. CSV 또는 JSON으로 다운로드하세요.",
  "dataPick": "기업 선택(기업명 또는 티커)",
  "sev5": "치명적",
  "sev4": "주요",
  "sev3": "중요",
  "sev2": "주목",
  "allSeverities": "모든 이벤트 유형",
  "onlyCritical": "치명적·주요만",
  "openAnalysis": "분석 열기",
  "tabCompanies": "종목",
  "tabNews": "이벤트",
  "tabData": "데이터",
  "tabCompare": "비교",
  "tabMethod": "방법",
  "newsTop": "가장 중요(치명적 이벤트, 시가총액 $1B 초과 기업의 주요 이벤트)",
  "filters": "스크리너 필터",
  "filtersActive": "{n}개 적용",
  "reset": "필터 초기화",
  "minScore": "최소 TeraScore",
  "maxRisk": "최대 리스크",
  "anyValue": "전체",
  "minCap": "최소 시가총액",
  "minDividend": "최소 배당수익률",
  "exchange": "거래소",
  "allExchanges": "전체 거래소",
  "styleFilter": "투자 프로필:",
  "noCritical": "치명적 경고 없음",
  "pe": "PER",
  "dividendYieldShort": "배당수익률",
  "sectorMedian": "섹터 중앙값",
  "insiderTitle": "내부자 거래",
  "insiderBuys": "장내 매수",
  "insiderSells": "장내 매도",
  "insiderNone": "최근 12개월 동안 내부자의 장내 매수나 매도가 없습니다.",
  "insiderForeign": "외국 민간 발행인은 Form 4 보고가 면제되므로 내부자 데이터가 없습니다.",
  "insiderPlanned": "그중 10b5-1 거래 계획에 따른 거래",
  "insiderPeriod": "SEC Form 4 공시, {from} – {to}. 장내 매수(코드 P)와 매도(코드 S)만 표시하며, 주식 부여, 옵션 행사, 세금 원천징수는 제외합니다.",
  "insiderCount": "거래 {n}건 · 내부자 {p}명",
  "insiderDate": "날짜",
  "insiderName": "내부자",
  "insiderType": "거래",
  "insiderShares": "주식 수",
  "insiderValue": "금액",
  "insiderPurchase": "매수",
  "insiderSale": "매도",
  "insiderPlanTag": "10b5-1 계획",
  "alertsTitle": "관심 종목 알림",
  "alertsSeen": "모두 읽음으로 표시",
  "alertScore": "{t}: TeraScore가 {from}에서 {to}(으)로 변경",
  "alertRisk": "{t}: 리스크가 {from}에서 {to}(으)로 상승",
  "alertDistress": "{t}: 재무 부실 위험이 이제 ‘{level}’",
  "alertEvent": "{t}: 새 주요 이벤트 – {event} ({date})",
  "alertCritical": "{t}: 새 치명적 경고 – {flag}",
  "fxNote": "재무제표 통화 {cur}, 1 {cur} = {rate} USD로 환산",
  "navTrend": "TeraScore 변화",
  "tabTrend": "변화",
  "trendIntro": "기업의 TeraScore가 시간에 따라 어떻게 바뀌었는지 보여 줍니다. 회계연도 보기는 각 회계연도 말 시점에 당시 알려진 정보(연간 보고서, 직전 12개월의 8-K 이벤트, 해당일 주가)만으로 각 기업을 평가합니다. 매주 월요일 업데이트마다 주간 스냅숏이 추가되므로 4주·13주 변화는 몇 주 뒤부터 표시됩니다.",
  "trendPeriod": "기간",
  "trendPeriodFy": "전 회계연도 대비 변화",
  "trendPeriod4w": "4주 변화",
  "trendPeriod13w": "13주 변화",
  "trendUp": "가장 크게 개선",
  "trendDown": "가장 크게 악화",
  "trendChange": "변화",
  "trendFrom": "{v}에서",
  "trendWeeklyEmpty": "주간 스냅숏은 매주 월요일 업데이트마다 기록되며, 이 화면은 몇 주 뒤에 채워집니다.",
  "trendNote": "변화는 TeraScore 점수 기준입니다. 회계연도별 점수에는 과거 연도에도 현재의 섹터 기준을 적용합니다.",
  "trendAnnualChart": "회계연도별 TeraScore",
  "trendAnnualSub": "각 회계연도 말 시점의 점수",
  "trendWeeklyChart": "TeraScore(주간)",
  "trendWeeklySub": "매주 월요일 업데이트 시점의 스냅숏",
  "trendAll": "전체 변화",
  "navPortfolio": "포트폴리오",
  "tabPortfolio": "포트폴리오",
  "addPortfolio": "포트폴리오에 추가",
  "inPortfolio": "포트폴리오에 있음",
  "pdfReport": "PDF 보고서",
  "minDivSafety": "배당 안정성",
  "peersTitle": "유사 기업",
  "peersNone": "이 섹터에는 비교할 수 있는 평가 완료 기업이 없습니다.",
  "peerMedian": "동종 기업 중앙값",
  "peersSub": "{s}에서 업종과 기업 규모가 가장 가까운 동종 기업.",
  "peersRank": "{t}은(는) 이 그룹 {n}개 기업 중 TeraScore 기준 #{r}위입니다.",
  "peersCompare": "자세히 비교",
  "dividendTitle": "배당",
  "dividendSafety": "배당 안정성",
  "dividendYield": "배당수익률",
  "dps": "주당 배당금",
  "dpsCagr": "배당 성장률(5년 CAGR)",
  "yearsPaid": "중단 없이 지급",
  "yearsN": "{n}년",
  "yearsRaised": "연속 증액",
  "dividendCuts": "감액(10년)",
  "earningsPayout": "배당성향(이익)",
  "fcfPayout": "배당성향(잉여현금흐름)",
  "payoutUncovered": "감당 못 함",
  "dividendNone": "이 기업은 배당을 지급하지 않습니다.",
  "dividendNoneShort": "무배당",
  "dividendNote": "주당 배당금은 지급한 현금배당을 희석 주식 수로 나누어 계산하므로 특별배당은 급등으로 나타납니다. 배당성향은 가능한 경우 최근 12개월 수치를 사용합니다.",
  "chartDps": "주당 배당금",
  "chartDpsSub": "지급한 현금배당 / 희석 주식 수",
  "period": "기간",
  "periodAnnual": "연간",
  "periodQuarterly": "분기",
  "quarterEnd": "분기 말",
  "quarterlyNote": "3개월 수치입니다. 분기가 연초 누적으로만 보고된 경우 누적 수치에서 직전 분기 수치를 뺀 값이며, 4분기는 연간 수치에서 처음 9개월을 뺀 값입니다.",
  "quarterlyNone": "분기 수치가 없습니다.",
  "quarterlyForeign": "외국 민간 발행인은 연간 보고서(20-F / 40-F)만 제출하므로 분기 수치가 없습니다.",
  "pfIntro": "보유 종목을 입력하면 평가액으로 가중한 포트폴리오의 TeraScore, 리스크, 배당 수입, 섹터 배분, 집중도 경고를 볼 수 있습니다. 포트폴리오는 이 브라우저에만 저장됩니다.",
  "pfAdd": "추가",
  "pfFromWatch": "관심 종목 추가(각 1주)",
  "pfNeedShares": "주식 수를 입력하세요.",
  "pfEmpty": "포트폴리오가 비어 있습니다. 위에서 기업과 주식 수를 추가하세요.",
  "pfValue": "포트폴리오 평가액",
  "pfScore": "가중 TeraScore",
  "pfIncome": "연간 배당 수입",
  "pfPe": "포트폴리오 PER",
  "pfHoldings": "보유 종목",
  "pfSectors": "섹터 배분",
  "pfOther": "기타",
  "pfChecks": "포트폴리오 점검",
  "pfOk": "집중도나 품질 관련 경고가 없습니다.",
  "pfInfo": "참고",
  "pfShares": "주식 수",
  "pfPrice": "주가",
  "pfValueCol": "평가액",
  "pfWeight": "비중",
  "pfNote": "주가와 점수는 최근 데이터 업데이트({d}) 기준입니다. 평가액은 {c} 기준이며, 유럽 ETF는 각자의 거래 통화로 가격이 매겨지고 오늘 환율로 환산됩니다.",
  "reportTitle": "기업 보고서",
  "printPdf": "인쇄 / PDF로 저장",
  "printHint": "인쇄 대화상자에서 ‘PDF로 저장’을 선택하세요.",
  "reportFinancials": "5년 재무 요약",
  "profile": "투자 프로필",
  "ratedCompanies": "TeraScore 보유 기업",
  "installFooter": "앱 설치",
  "installBanner": "휴대전화, 태블릿, 컴퓨터에 TeraStockX를 앱으로 설치하세요.",
  "installHow": "설치 방법",
  "close": "닫기",
  "installTitle": "TeraStockX를 앱으로 설치",
  "installIntro": "TeraStockX는 이 웹사이트에서 바로 설치할 수 있으며, 앱 스토어가 필요 없고 다운로드 용량도 매우 작습니다. 설치 후에는 다른 앱처럼 전용 아이콘으로 전체 화면에서 열리며 항상 최신 데이터를 보여 줍니다.",
  "installDone": "설치된 앱을 사용하고 있습니다.",
  "installNow": "지금 설치",
  "installYourDevice": "사용 중인 기기",
  "installIos": "iPhone 및 iPad",
  "installAndroid": "Android",
  "installDesktop": "컴퓨터(Chrome, Edge)",
  "installNote": "앱은 웹사이트와 같습니다. 데이터 업데이트는 자동으로 반영되고, 관심 종목과 포트폴리오는 이 기기에 저장됩니다. 삭제하려면 다른 앱처럼 삭제하세요.",
  "pfAddPlaceholder": "기업 또는 ETF(이름 또는 티커)…",
  "pfScoreCover": "포트폴리오의 {p} 차지",
  "pfEtfs": "ETF",
  "etfExpense": "총보수 {v}",
  "etfNoScore": "ETF는 TeraScore가 없습니다: 펀드에는 자체 재무제표가 없기 때문입니다.",
  "etfYieldInput": "배당수익률(%)",
  "etfNote": "ETF는 TeraScore가 없으며, 가중 TeraScore와 리스크는 기업만 대상으로 합니다.",
  "etfYieldMissing": "데이터 출처가 {list}의 배당수익률을 공개하지 않습니다. 배당 수입에 포함하려면 수익률 열에 입력하세요(% 단위).",
  "screensTitle": "빠른 검색",
  "colChangeFy": "변화",
  "filtersAndScreens": "필터 및 빠른 검색",
  "maxPe": "최대 PER",
  "minDrop": "12개월 고점 대비 하락",
  "dropAtLeast": "최소 {p}",
  "colFromHigh": "고점 대비",
  "contact": "문의",
  "marketToday": "오늘의 시장",
  "marketMore": "시장 및 이벤트",
  "eventsTitle": "기업 주요 이벤트(8-K)"
 },
 "pulse": {
  "themes": {
   "ai": "AI 관련주",
   "bigTech": "빅테크",
   "semis": "반도체",
   "banks": "은행",
   "energy": "석유·가스",
   "crypto": "암호화폐 관련주"
  },
  "hlIndex": "{n} 오늘 {v}",
  "hlTheme": "{n} 오늘 {v}(최고 {b}, 최저 {w})",
  "hlUp": "{n} 오늘 {v} 상승",
  "hlDown": "{n} 오늘 {v} 하락",
  "hlReport": "{n}, {f} 공시({form})",
  "annualReport": "연간 보고서",
  "quarterlyReport": "분기 보고서",
  "hlScore": "{n}의 TeraScore가 {v}점 변화(현재 {o})",
  "hlListing": "신규 상장: {n}",
  "none": "오늘은 표시할 내용이 없습니다.",
  "notYet": "시장 요약은 다음 데이터 업데이트 후에 표시됩니다.",
  "bestWorst": "최고 {b} · 최저 {w}",
  "asOf": "주가: {d}(약 15분 지연). 평일에는 주가, TeraScore, 뉴스, 새 보고서가 미국 정규장 중에는 5분마다, 그 전후에는 10분마다 업데이트됩니다.",
  "headlines": "오늘의 큰 움직임",
  "themesTitle": "테마(시가총액 가중 오늘 변동률)",
  "sectorsTitle": "오늘의 섹터",
  "gainers": "상승률 상위($2B 이상)",
  "losers": "하락률 상위($2B 이상)",
  "today": "오늘",
  "reports": "새 분기·연간 보고서",
  "filed": "제출일",
  "scoreMoves": "어제 대비 TeraScore 큰 변화",
  "newListings": "신규 상장",
  "listed": "상장일",
  "note": "전일 종가 대비 변화입니다. 테마와 섹터는 시가총액으로 가중합니다. TeraScore 변화는 전날 점수와 비교합니다. 장중에는 시가총액 약 20억 달러 이상 기업과 대형 펀드의 당일 변화를 표시하며, 그보다 작은 기업은 일일 업데이트 후에 표시합니다.",
  "noFilings": "아직 SEC 재무 보고서가 없음",
  "notScoredYet": "아직 평가되지 않음",
  "notScoredText": "TeraScore를 산출하려면 연간 보고서(10-K 또는 20-F)가 최소 1건 필요합니다. 신규 상장 기업은 첫 연간 보고서 이후 점수를 받으며, 그전까지는 주가, 시가총액, 확인 가능한 분기 수치를 표시합니다.",
  "lastReport": "최근 보고서",
  "storiesTitle": "주요 뉴스",
  "storiesNote": "대기업(시가총액 100억 달러 초과)의 최근 며칠간 중요 발표와 큰 주가 변동입니다. 제목은 각 기업이 SEC에 제출한 공시에서 가져오며 원문 영어 그대로 표시합니다.",
  "kind": {
   "leadership": "경영진 교체",
   "deal": "인수·합병",
   "results": "실적",
   "critical": "치명적 이벤트",
   "major": "주요 이벤트",
   "restructuring": "구조조정",
   "cyber": "사이버 보안 사고",
   "board": "이사회 변경",
   "other": "발표",
   "move": "큰 주가 변동"
  },
  "when": {
   "pre": "프리마켓",
   "post": "애프터마켓",
   "day": "오늘",
   "last": "직전 거래일"
  },
  "preNote": "개장 전: 아래 일일 변화는 직전 거래일({d})의 것입니다. 대기업의 프리마켓 움직임은 주요 뉴스에 있습니다.",
  "postNote": "장 마감 후: 아래 일일 변화는 오늘 정규장의 것입니다. 대기업의 애프터마켓 움직임은 주요 뉴스에 있습니다.",
  "readMore": "보도자료(SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "현재 대기업의 큰 뉴스가 없습니다.",
  "moreNews": "전체 뉴스",
  "asOfShort": "주가: {d}, 약 15분 지연",
  "themesShort": {
   "ai": "AI"
  },
  "sinceNews": "발표 이후",
  "sinceNote": "뉴스 옆 수치: 발표 이후의 주가 변동이며, 발표 전 마지막 종가가 기준입니다(프리마켓 및 애프터마켓 거래 포함). 큰 주가 변동 옆 수치: 당일, 프리마켓 또는 애프터마켓의 변동입니다."
 },
 "screens": {
  "top": {
   "name": "TeraScore 상위",
   "desc": "평가된 모든 기업, TeraScore 높은 순."
  },
  "bestRiskReward": {
   "name": "최고 점수, 최저 리스크",
   "desc": "TeraScore 70 이상, 리스크 30 이하, 치명적 경고 없음, 시가총액 $300M 이상. TeraScore에서 리스크를 뺀 값 순."
  },
  "safeLongTerm": {
   "name": "장기적으로 가장 안전한 기업",
   "desc": "TeraScore ≥ 65, 리스크 ≤ 25, 안정성 ≥ 70, 재무 건전성 ≥ 60, 낮은 재무 부실 위험, 치명적 경고 없음, 시가총액 $2B 이상. 낮은 리스크, 안정성, 재무 건전성 순."
  },
  "lowRisk": {
   "name": "최저 리스크",
   "desc": "리스크 20 이하이며 치명적 경고 없음. 리스크 낮은 순."
  },
  "improvers": {
   "name": "작년 대비 가장 크게 개선",
   "desc": "TeraScore가 전 회계연도보다 10점 이상 상승, 시가총액 $300M 이상. 상승 폭이 큰 순."
  },
  "growth": {
   "name": "고성장 기업",
   "desc": "최근 회계연도 성장성 ≥ 75, 장기 성장성 ≥ 70, TeraScore 55 이상, 시가총액 $300M 이상."
  },
  "value": {
   "name": "저평가 우량주",
   "desc": "밸류에이션 점수 ≥ 70(이익과 현금흐름 대비 저렴), TeraScore ≥ 65, 수익성 ≥ 60, 치명적 경고 없음, 시가총액 $300M 이상."
  },
  "dividend": {
   "name": "안전한 배당",
   "desc": "배당 안정성 ≥ 75, 배당수익률 2.5% 이상, 시가총액 $300M 이상. 수익률 높은 순."
  },
  "largeQuality": {
   "name": "대형 우량 기업",
   "desc": "시가총액 $50B 이상, TeraScore 70 이상."
  },
  "highRisk": {
   "name": "고위험",
   "desc": "리스크 70 이상, 또는 재무 부실 위험이 높고 리스크 55 이상, 시가총액 $300M 이상. 위험한 순. 투기적 종목이므로 주의하세요."
  },
  "decliners": {
   "name": "작년 대비 가장 크게 악화",
   "desc": "TeraScore가 전 회계연도보다 10점 이상 하락, 시가총액 $300M 이상. 하락 폭이 큰 순."
  },
  "dip": {
   "name": "고점 대비 하락, 지금은 더 저렴",
   "desc": "우량 기업(TeraScore ≥ 65, 리스크 ≤ 40, 치명적 경고 없음, 시가총액 $300M 이상) 중 주가가 12개월 고점보다 20–50% 낮은 기업(월말 종가 기준). TeraScore 높은 순. 그보다 큰 하락은 제외합니다. 할인보다는 문제의 신호인 경우가 많기 때문입니다."
  },
  "lowPe": {
   "name": "저PER",
   "desc": "PER 3–12인 흑자 기업 중 밸류에이션 점수도 60 이상(EV/EBIT과 현금흐름 수익률로 저평가 확인), TeraScore ≥ 60, 안정성 ≥ 50, 치명적 경고 없음, 시가총액 $300M 이상인 기업. PER 3 미만은 대개 일회성 이익 때문이므로 제외합니다."
  }
 },
 "install": {
  "benefit1": "홈 화면에 다른 앱과 나란히 전용 아이콘",
  "benefit2": "브라우저 주소창 없이 전체 화면으로 열림",
  "benefit3": "더 빨리 시작되고, 마지막으로 본 기업은 오프라인에서도 열림",
  "benefit4": "자동 업데이트: 재설치도 앱 스토어도 필요 없음",
  "iphone1": "이 페이지를 Safari에서 여세요.",
  "iphone2": "공유 버튼(위쪽 화살표가 있는 사각형)을 누르세요. iPhone은 하단, iPad는 오른쪽 위에 있습니다.",
  "iphone3": "아래로 스크롤해 ‘홈 화면에 추가’를 누르세요.",
  "iphone4": "오른쪽 위의 ‘추가’를 누르세요. 홈 화면에 TeraStockX 아이콘이 나타납니다.",
  "android1": "이 페이지를 Chrome에서 여세요.",
  "android2": "위의 ‘지금 설치’를 누르거나 오른쪽 위 메뉴(⋮)를 여세요.",
  "android3": "‘앱 설치’(또는 ‘홈 화면에 추가’)를 선택하세요.",
  "android4": "‘설치’를 눌러 확인하세요. 앱 목록과 홈 화면에 앱이 나타납니다.",
  "desktop1": "이 페이지를 Chrome 또는 Edge에서 여세요.",
  "desktop2": "위의 ‘지금 설치’ 또는 주소창 오른쪽 끝의 설치 아이콘을 클릭하세요.",
  "desktop3": "‘설치’를 눌러 확인하세요.",
  "desktop4": "TeraStockX는 별도 창에서 열리며 시작 메뉴, Dock 또는 Launchpad에서 실행할 수 있습니다."
 },
 "dividend": {
  "safe": "안전",
  "moderate": "보통",
  "risky": "위험",
  "unsafe": "불안",
  "na": "평가 없음",
  "safeText": "이익과 잉여현금흐름으로 충분히 감당되며, 탄탄한 지급 이력이 있습니다.",
  "moderateText": "감당은 되지만 여유가 제한적이어서 경기 둔화 시 압박을 받을 수 있습니다.",
  "riskyText": "감당 여력이 빠듯하거나 재무구조에 부담이 있어 감액 가능성이 현실적입니다.",
  "unsafeText": "이익이나 현금흐름으로 감당되지 않거나 최근 감액되었으며, 추가 감액 가능성이 높습니다.",
  "naText": "평가에 필요한 데이터가 부족합니다.",
  "parts": {
   "priceStability": "주가 안정성",
   "fcfPayout": "잉여현금흐름 대비 감당력",
   "earningsPayout": "이익 대비 감당력",
   "leverage": "레버리지",
   "trackRecord": "지급 이력",
   "stability": "이익 안정성"
  },
  "partsText": {
   "priceStability": "시장 리스크 점수(주가의 변동성과 최대 하락): 급락은 배당 감액에 앞서 나타나는 경우가 많습니다.",
   "fcfPayout": "지급 배당금 / 잉여현금흐름: 40% 이하면 100점(REIT: 80%), 120% 이상(REIT: 130%)이거나 잉여현금흐름이 마이너스면 0점.",
   "earningsPayout": "지급 배당금 / 순이익: 50% 이하면 100점, 150% 이상이거나 적자면 0점. REIT는 평가하지 않습니다.",
   "leverage": "순차입금 / EBITDA: 1배 이하면 100점, 5배 이상이면 0점. 은행, 보험사, REIT는 평가하지 않습니다.",
   "trackRecord": "중단 없는 지급 연수(60%)와 연속 증액(40%), 최대 10년. 최근 10년간 10% 넘게 감액할 때마다 35점 감점.",
   "stability": "최근 5년 중 흑자를 낸 해의 비율."
  }
 },
 "pw": {
  "position": "{t}이(가) 포트폴리오의 {w}를 차지합니다({l} 초과).",
  "sector": "{s}이(가) 포트폴리오의 {w}를 차지합니다({l} 초과).",
  "few": "보유 종목이 {n}개뿐입니다: {m}개 미만이면 포트폴리오가 개별 기업 리스크에 노출됩니다.",
  "critical": "치명적 경고: {list}.",
  "distress": "높은 재무 부실 위험: {list}.",
  "weak": "TeraScore {s} 미만: {list}.",
  "unscored": "평가 없음(데이터 부족): {list}."
 },
 "ocr": {
  "button": "스크린샷에서 가져오기",
  "loading": "문자 인식 기능을 불러오는 중(최초 1회, 약 7 MB)…",
  "reading": "이미지 읽는 중… {p}%",
  "privacy": "이미지는 기기 밖으로 전송되지 않으며 브라우저 안에서 읽습니다.",
  "found": "인식된 보유 종목: {n}",
  "check": "티커와 주식 수를 확인하고 필요하면 수정한 뒤 추가하세요.",
  "inPortfolio": "현재 포트폴리오 보유: {n}주(대체됨)",
  "add": "포트폴리오에 추가",
  "cancel": "취소",
  "close": "닫기",
  "none": "이미지에서 종목을 찾지 못했습니다. 티커나 기업명과 주식 수가 선명하게 보이는 더 크고 선명한 스크린샷을 사용하거나 직접 추가하세요.",
  "failed": "문자 인식 실패: {e}",
  "needShares": "체크한 모든 행에 주식 수를 입력하세요.",
  "hint": "팁: 증권사 앱의 보유 종목 목록 스크린샷이 가장 잘 인식됩니다. 여러 장을 한 번에 선택할 수 있습니다.",
  "readingN": "이미지 {i}/{n} 읽는 중… {p}%",
  "foundImages": "인식된 보유 종목: {n}(이미지 {k}장에서)",
  "estimated": "≈ 평가액 ÷ 주가, 확인하세요"
 },
 "dq": {
  "partial": "부분",
  "partialTitle": "부분 분석: TeraScore의 {p}%가 데이터에 근거합니다. 데이터 부족으로 평가하지 못한 영역(최대 50으로 계산): {d}.",
  "partialTitleParts": "부분 분석: TeraScore의 {p}%가 데이터에 근거합니다. 여러 지표가 누락되었습니다.",
  "little": "데이터 부족",
  "littleTitle": "TeraScore를 산출하기에 데이터가 부족합니다: 9개 영역 중 최소 5개를 평가할 수 있어야 합니다.",
  "none": "분석 없음",
  "noneTitle": "재무 데이터가 포함된 연간 보고서가 아직 없습니다.",
  "newListing": "신규 상장",
  "newTitle": "최근 상장: 첫 연간 보고서 이후 TeraScore가 부여됩니다.",
  "newBadge": "신규",
  "legend": "‘부분 · 65%’ = 분석이 불완전하며 TeraScore 중 이 비율만 데이터에 근거한다는 뜻입니다. 80% 미만일 때 표시됩니다. 데이터가 없는 영역은 최대 중립값 {s}로 계산되므로 누락이 점수를 올리는 일은 없지만, 결과의 확실성은 낮아집니다.",
  "noticePartialTitle": "부분 분석: TeraScore의 {p}%가 데이터에 근거합니다.",
  "noticePartial": "기업 공시에 데이터가 없어 다음 영역을 평가하지 못했습니다: {d}. 이 영역들은 중립값 {s}로 계산하거나, 기업의 다른 영역 평균이 더 낮으면 그 평균으로 계산하므로 누락된 데이터가 TeraScore를 올리는 일은 없습니다. 완전히 분석된 기업보다 점수의 확실성이 낮습니다.",
  "noticePartialParts": "기업 공시에 일부 지표가 없습니다. 각 영역 안에서 해당 지표는 제외되고 나머지 지표의 가중치가 비례해 커지므로, 완전히 분석된 기업보다 TeraScore의 확실성이 낮습니다.",
  "noticeLittle": "TeraScore에는 평가 가능한 영역이 최소 5개 필요하지만 이 기업은 {n}개입니다. 평가할 수 있었던 영역은 아래에 표시됩니다.",
  "estimated": "다른 공시 수치로 추정: {list}.",
  "est": {
   "capex": "설비투자 ≈ 기업의 통상적인 설비투자 대비 매출 비율 또는 감가상각비(기업이 자체 XBRL 항목으로만 보고함)",
   "operatingIncome": "영업이익 ≈ 법인세차감전이익(또는 순이익 + 법인세) + 이자비용(기업이 영업이익 항목을 보고하지 않음)",
   "totalDebt": "부채 = 0(최근 2년간 차입금이나 이자비용 보고 없음)"
  },
  "partialShort": "부분 · {p}%",
  "coverageBadge": "분석 {p}% 완료(일부 데이터 누락)",
  "partialMobile": "데이터 {p}%"
 },
 "dims": {
  "profitability": {
   "name": "수익성",
   "q": "기업은 매출과 자본을 얼마나 효율적으로 이익으로 바꾸는가?",
   "summary": "영업이익률 {operatingMargin}, 순이익률 {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "현금흐름의 질",
   "q": "보고된 이익이 현금으로 뒷받침되는가?",
   "summary": "FCF 마진 {fcfMargin}, 순이익의 FCF 전환율 {fcfConversion}, 발생액 비율 {accrualRatio}, 주식보상비용은 매출의 {sbcToRevenue}."
  },
  "balanceSheet": {
   "name": "재무 건전성",
   "q": "이익과 자기자본 대비 레버리지는 어느 정도인가?",
   "summary": "순차입금/EBITDA {netDebtToEbitda}, 부채비율 {debtToEquity}, 이자보상배율 {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "유동성",
   "q": "단기 채무를 단기 자산으로 감당할 수 있는가?",
   "summary": "유동비율 {currentRatio}, 당좌비율 {quickRatio}, 현금비율 {cashRatio}."
  },
  "growth1y": {
   "name": "성장성(최근 회계연도)",
   "q": "매출, 이익, 현금흐름의 전년 대비 모멘텀.",
   "summary": "전년 대비 매출액 {revenueYoY}, 영업이익 {operatingIncomeYoY}, EPS {epsYoY}, 잉여현금흐름 {fcfYoY}."
  },
  "growthLong": {
   "name": "장기 성장성",
   "q": "최대 5년간의 복합 성장.",
   "summary": "{windowYears}년 CAGR: 매출액 {revenueCagr}, EPS {epsCagr}, FCF {fcfCagr}, 주당순자산 {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "안정성",
   "q": "실적은 얼마나 예측 가능하고 견고한가?",
   "summary": "흑자 연도 비율 {profitableYearsRatio}, FCF 플러스 연도 비율 {fcfPositiveRatio}, 매출 성장률 변동성 {revenueVolatility}, Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "자본 배분",
   "q": "자본을 주주에게 얼마나 잘 환원하고 재투자하는가?",
   "summary": "연간 주식 수 변화 {shareChangeYearly}, 주주환원수익률 {shareholderYield}, FCF 대비 배당성향 {payoutRatio}, ROIC 변화 {roicChange}."
  },
  "valuation": {
   "name": "밸류에이션",
   "q": "펀더멘털 대비 주가는 얼마나 비싼가?",
   "summary": "PER {peRatio}, EV/EBIT {evToEbit}, FCF 수익률 {fcfYield}, PSR {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "리스크",
   "q": "전반적인 투자 리스크(낮을수록 좋음).",
   "summary": "재무 부실 위험: {distress}. 연환산 변동성 {volatility}, 최대 낙폭(5년) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "시장 리스크",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "매우 우수",
  "strong": "우수",
  "moderate": "보통",
  "weak": "취약",
  "poor": "부진",
  "na": "데이터 없음"
 },
 "riskGrades": {
  "excellent": "매우 낮음",
  "strong": "낮음",
  "moderate": "보통",
  "weak": "높음",
  "poor": "매우 높음",
  "na": "데이터 없음"
 },
 "distress": {
  "low": "낮음",
  "medium": "다소 높음",
  "high": "높음",
  "lowText": "현재 데이터에는 재무 부실의 징후가 없습니다.",
  "mediumText": "몇 가지 경고 신호가 있어 지켜볼 필요가 있습니다.",
  "highText": "여러 지표가 심각한 재무 부실을 가리킵니다."
 },
 "outlook": {
  "up": "개선 중",
  "flat": "안정",
  "down": "악화 중",
  "unknown": "이력 부족",
  "upText": "최근 몇 년간 펀더멘털이 꾸준히 개선되었습니다.",
  "flatText": "펀더멘털이 대체로 정체되어 있습니다.",
  "downText": "최근 몇 년간 펀더멘털이 악화되었습니다.",
  "unknownText": "최소 3개 회계연도가 필요합니다."
 },
 "verdict": {
  "excellent": "대부분의 관점에서 매우 강한 펀더멘털.",
  "strong": "탄탄한 펀더멘털을 갖춘 재무적으로 건전한 기업.",
  "moderate": "뚜렷한 강점과 약점이 섞인 펀더멘털.",
  "weak": "펀더멘털이 약하여 각별한 주의가 필요합니다.",
  "poor": "심각한 펀더멘털 약점.",
  "na": "종합 평가에 필요한 데이터가 부족합니다."
 },
 "styles": {
  "quality": "퀄리티",
  "growth": "성장",
  "value": "가치",
  "income": "인컴",
  "speculative": "투기적"
 },
 "sectors": {
  "technology": "기술",
  "healthcare": "헬스케어",
  "financials": "금융",
  "realEstate": "부동산",
  "consumerDiscretionary": "경기소비재",
  "consumerStaples": "필수소비재",
  "industrials": "산업재",
  "energy": "에너지",
  "utilities": "유틸리티",
  "communication": "커뮤니케이션 서비스",
  "materials": "소재",
  "shell": "페이퍼컴퍼니 / SPAC",
  "other": "기타"
 },
 "metrics": {
  "cashRunway": [
   "현금 소진 가능 기간",
   "유동성 자산(현금, 또는 유동자산에서 재고자산과 매출채권을 뺀 금액)으로 현재의 마이너스 잉여현금흐름을 몇 년간 감당할 수 있는지. 유동성 점수의 상한이 됩니다: 0.75년 이하 = 0점, 3년 이상 = 100점."
  ],
  "grossMargin": [
   "매출총이익률",
   "매출총이익 / 매출액."
  ],
  "operatingMargin": [
   "영업이익률",
   "영업이익(EBIT) / 매출액."
  ],
  "netMargin": [
   "순이익률",
   "순이익 / 매출액."
  ],
  "fcfMargin": [
   "FCF 마진",
   "잉여현금흐름(영업현금흐름 − 설비투자) / 매출액."
  ],
  "roe": [
   "자기자본이익률(ROE)",
   "순이익 / 평균 자기자본. 자기자본이 마이너스면 평가하지 않습니다."
  ],
  "roa": [
   "총자산이익률(ROA)",
   "순이익 / 평균 자산총계."
  ],
  "roic": [
   "투하자본이익률(ROIC)",
   "NOPAT(EBIT × (1 − 유효세율)) / 평균 투하자본(자기자본 + 차입금 − 현금)."
  ],
  "fcfConversion": [
   "FCF 전환율",
   "잉여현금흐름 / 순이익. 순손실일 때 FCF가 플러스면 60점."
  ],
  "accrualRatio": [
   "발생액 비율",
   "(순이익 − 영업현금흐름) / 평균 자산총계. 값이 높으면 이익이 현금으로 뒷받침되지 않음을 뜻합니다."
  ],
  "sbcToRevenue": [
   "주식보상비용 / 매출액",
   "주주 지분을 희석하는 비현금성 보상."
  ],
  "capexToRevenue": [
   "설비투자 강도",
   "설비투자 / 매출액."
  ],
  "currentRatio": [
   "유동비율",
   "유동자산 / 유동부채."
  ],
  "quickRatio": [
   "당좌비율",
   "(유동자산 − 재고자산) / 유동부채."
  ],
  "cashRatio": [
   "현금비율",
   "현금 및 현금성자산 / 유동부채."
  ],
  "debtToEquity": [
   "부채비율(차입금/자기자본)",
   "차입금 / 자기자본. 자기자본이 마이너스면 0점."
  ],
  "equityRatio": [
   "자기자본비율",
   "자기자본 / 자산총계."
  ],
  "liabilitiesToAssets": [
   "부채 / 자산",
   "부채총계 / 자산총계."
  ],
  "netDebt": [
   "순차입금",
   "차입금 − 현금. 마이너스 = 순현금."
  ],
  "netDebtToEbitda": [
   "순차입금 / EBITDA",
   "순차입금을 상환하는 데 필요한 EBITDA 연수. 순현금은 EBITDA가 플러스면 100점, 아니면 50점(현금이 줄어드는 중), EBITDA가 마이너스인데 순차입금이 있으면 0점."
  ],
  "interestCoverage": [
   "이자보상배율",
   "EBIT / 이자비용. 이자비용이 없으면 100점."
  ],
  "goodwillToAssets": [
   "영업권·무형자산 / 자산",
   "인수에서 생긴 자산의 비중. 손상 위험이 있습니다."
  ],
  "payoutRatio": [
   "배당성향(FCF 대비)",
   "지급 배당금 / 잉여현금흐름. 배당이 없으면 평가하지 않습니다."
  ],
  "bookValuePerShare": [
   "주당순자산",
   "자기자본 / 발행주식수."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6.56·(운전자본/자산) + 3.26·(이익잉여금/자산) + 6.72·(EBIT/자산) + 1.05·(자기자본/부채). < 1.1 부실, > 2.6 안전."
  ],
  "piotroski": [
   "Piotroski F-score",
   "수익성, 레버리지, 유동성, 운영 효율에 관한 9가지 예/아니요 테스트(0–9)."
  ],
  "revenueYoY": [
   "매출 성장률(전년 대비)",
   "전 회계연도 대비 변화."
  ],
  "operatingIncomeYoY": [
   "영업이익 성장률(전년 대비)",
   "전 회계연도 대비 변화. 기준값이 마이너스면 산출 불가."
  ],
  "netIncomeYoY": [
   "순이익 성장률(전년 대비)",
   "전 회계연도 대비 변화. 기준값이 마이너스면 산출 불가."
  ],
  "epsYoY": [
   "EPS 성장률(전년 대비)",
   "희석 주당순이익의 전년 대비 변화. 최근 연도가 적자면 0점."
  ],
  "fcfYoY": [
   "FCF 성장률(전년 대비)",
   "잉여현금흐름의 전년 대비 변화."
  ],
  "revenueCagr": [
   "매출 CAGR",
   "최대 5년간의 연평균 복합 성장률."
  ],
  "epsCagr": [
   "EPS CAGR",
   "최대 5년간 희석 EPS의 연평균 복합 성장률."
  ],
  "fcfCagr": [
   "FCF CAGR",
   "최대 5년간 잉여현금흐름의 연평균 복합 성장률."
  ],
  "bookValuePerShareCagr": [
   "주당순자산 CAGR",
   "주당 자기자본의 연평균 복합 성장률."
  ],
  "revenueGrowthYearsRatio": [
   "매출 성장 연도",
   "기간 중 매출이 전년보다 높았던 해의 비율."
  ],
  "marginTrend": [
   "영업이익률 변화",
   "기간 첫해부터 마지막 해까지의 영업이익률 변화(%p)."
  ],
  "roicChange": [
   "ROIC 변화",
   "기간 첫해부터 마지막 해까지의 ROIC 변화(%p)."
  ],
  "profitableYearsRatio": [
   "흑자 연도",
   "기간 중 순이익이 플러스였던 해의 비율."
  ],
  "fcfPositiveRatio": [
   "FCF 플러스 연도",
   "기간 중 잉여현금흐름이 플러스였던 해의 비율."
  ],
  "revenueVolatility": [
   "매출 성장률 변동성",
   "연간 매출 성장률의 표준편차."
  ],
  "marginVolatility": [
   "이익률 변동성",
   "영업이익률의 표준편차(금융사는 순이익률)."
  ],
  "shareChangeYearly": [
   "주식 수 변화(연간)",
   "플러스 = 희석, 마이너스 = 자사주 매입."
  ],
  "marketCap": [
   "시가총액",
   "주가 × 발행주식수."
  ],
  "enterpriseValue": [
   "기업가치(EV)",
   "시가총액 + 차입금 − 현금."
  ],
  "peRatio": [
   "주가수익비율(PER)",
   "시가총액 / 순이익(TTM). 적자는 0점."
  ],
  "psRatio": [
   "주가매출비율(PSR)",
   "시가총액 / 매출액(TTM)."
  ],
  "pbRatio": [
   "주가순자산비율(PBR)",
   "시가총액 / 자기자본."
  ],
  "evToEbit": [
   "EV / EBIT",
   "기업가치 / 영업이익(TTM)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "기업가치 / EBITDA(TTM)."
  ],
  "fcfYield": [
   "FCF 수익률",
   "잉여현금흐름(TTM) / 시가총액."
  ],
  "pfcfRatio": [
   "주가 / FCF",
   "시가총액 / 잉여현금흐름(TTM)."
  ],
  "pegRatio": [
   "PEG 비율",
   "PER을 EPS CAGR(%)로 나눈 값. 성장률이 마이너스이거나 적자면 0점."
  ],
  "dividendYield": [
   "배당수익률",
   "지급 배당금(TTM) / 시가총액."
  ],
  "shareholderYield": [
   "주주환원수익률",
   "(배당 + 자사주 매입, TTM) / 시가총액."
  ],
  "priceReturn1y": [
   "주가, 1년",
   "수정 주가의 12개월 총수익률."
  ],
  "priceCagr5y": [
   "주가 CAGR, 5년",
   "수정 주가의 연환산 수익률."
  ],
  "volatility": [
   "변동성(연환산)",
   "36개월간 월간 로그 수익률의 표준편차 × √12."
  ],
  "maxDrawdown": [
   "최대 낙폭(5년)",
   "주가의 고점 대비 저점까지 최대 하락폭."
  ]
 },
 "flags": {
  "negativeEquity": [
   "자기자본 마이너스",
   "부채가 자산을 초과합니다. 공격적인 자사주 매입의 결과일 수도 있지만, 재무적 압박을 뜻하는 경우가 많습니다."
  ],
  "persistentLosses": [
   "지속적인 적자",
   "최소 2개 회계연도 연속 순손실."
  ],
  "lossLastYear": [
   "최근 연도 순손실",
   "가장 최근 회계연도가 순손실로 마감했습니다."
  ],
  "negativeFcf": [
   "잉여현금흐름 마이너스",
   "영업과 투자에서 창출하는 것보다 많은 현금을 쓰고 있어 외부 자금 조달이 필요합니다."
  ],
  "lowCurrentRatio": [
   "유동비율 1.0 미만",
   "유동부채가 유동자산을 초과합니다(유동비율 {value}). 영업현금흐름이 강하면 감당할 수 있습니다."
  ],
  "interestCoverageCritical": [
   "이자보상배율 부족",
   "EBIT가 이자비용을 {value}밖에 감당하지 못해 부채 상환이 위태롭습니다."
  ],
  "interestCoverageWeak": [
   "낮은 이자보상배율",
   "EBIT가 이자비용을 {value}밖에 감당하지 못합니다."
  ],
  "altmanDistress": [
   "Altman Z'' 부실 구간",
   "Z''-score {value}는 부실 기준인 1.1보다 낮습니다."
  ],
  "altmanGrey": [
   "Altman Z'' 회색 구간",
   "Z''-score {value}: 부실 구간도 안전 구간(> 2.6)도 아닙니다."
  ],
  "debtWithoutEbitda": [
   "EBITDA 마이너스 상태의 순차입금",
   "순차입금이 있지만 이를 갚을 플러스 EBITDA를 내지 못하고 있습니다."
  ],
  "highLeverage": [
   "높은 레버리지",
   "순차입금이 EBITDA의 {value}에 해당합니다."
  ],
  "revenueDecline": [
   "큰 폭의 매출 감소",
   "매출액이 전년 대비 {value} 변했습니다."
  ],
  "heavyDilution": [
   "심각한 주주 지분 희석",
   "주식 수가 연평균 {value} 늘고 있습니다."
  ],
  "highSbc": [
   "높은 주식보상비용",
   "주식보상비용이 매출의 {value}에 해당합니다."
  ],
  "lowEarningsQuality": [
   "낮은 이익의 질",
   "발생액 비율 {value}: 이익이 영업현금흐름을 크게 웃돕니다."
  ],
  "dividendUncovered": [
   "FCF로 감당되지 않는 배당",
   "배당이 잉여현금흐름을 초과합니다(배당성향 {value})."
  ],
  "goodwillHeavy": [
   "높은 영업권·무형자산",
   "자산총계의 {value}가 손상 위험이 있는 영업권과 무형자산입니다."
  ],
  "staleData": [
   "오래된 재무 데이터",
   "최신 연간 보고서는 {value}에 끝나는 기간을 다룹니다."
  ],
  "deepDrawdown": [
   "주가의 큰 하락",
   "주가가 5년 고점 대비 {value} 하락했습니다."
  ],
  "netCash": [
   "순현금 상태",
   "현금이 차입금보다 {value} 많습니다."
  ],
  "highMargin": [
   "높은 영업이익률",
   "영업이익률 {value}."
  ],
  "highRoic": [
   "높은 투하자본이익률",
   "ROIC {value}, 일반적인 자본비용을 크게 웃돕니다."
  ],
  "alwaysProfitable": [
   "분석한 모든 연도에 흑자",
   "{years}개 회계연도 모두 순이익 플러스."
  ],
  "strongGrowth": [
   "강한 장기 성장",
   "매출 CAGR {value}."
  ],
  "buybacks": [
   "자사주 순매입",
   "주식 수가 연평균 {value} 줄고 있습니다."
  ],
  "altmanSafe": [
   "Altman Z'' 안전 구간",
   "Z''-score {value}."
  ],
  "strongCashConversion": [
   "강한 현금 전환",
   "잉여현금흐름이 순이익의 {value}에 해당합니다."
  ],
  "bankruptcyFiling": [
   "파산 또는 법정관리 신청",
   "Form 8-K 항목 1.03, {value} 제출."
  ],
  "restatement": [
   "재무제표 재작성",
   "Form 8-K 항목 4.02(이전에 발행한 재무제표를 더 이상 신뢰할 수 없음), {value} 제출."
  ],
  "debtAcceleration": [
   "채무 기한이익 상실",
   "Form 8-K 항목 2.04(금융 채무의 상환을 앞당기는 사유 발생), {value} 제출."
  ],
  "delistingNotice": [
   "상장폐지 통지",
   "Form 8-K 항목 3.01(상장 규정 미충족), {value} 제출."
  ],
  "auditorChange": [
   "감사인 교체",
   "Form 8-K 항목 4.01(감사인 변경), {value} 제출."
  ],
  "insiderBuying": [
   "내부자 매수",
   "최근 12개월 동안 내부자 {count}명이 장내에서 총 {value}어치 주식을 매수했습니다."
  ],
  "insiderSelling": [
   "대규모 내부자 매도",
   "최근 12개월 동안 내부자가 사전 거래 계획 밖에서 {value}어치를 매도했습니다(시가총액의 {share})."
  ]
 },
 "events": {
  "1.03": "파산 또는 법정관리",
  "4.02": "재무제표 재작성",
  "2.04": "금융 채무의 기한이익 상실",
  "3.01": "상장폐지 통지 / 상장 규정 위반",
  "5.01": "지배권 변경",
  "2.01": "인수 또는 매각 완료",
  "2.05": "구조조정 / 사업 철수",
  "2.06": "중대한 손상차손",
  "4.01": "감사인 교체",
  "1.01": "중요 계약",
  "1.02": "중요 계약 해지",
  "1.05": "중대한 사이버 보안 사고",
  "5.02": "경영진 교체(CEO, CFO 또는 이사회 의장)"
 },
 "raw": {
  "income": "손익계산서",
  "cashflow": "현금흐름표",
  "balance": "재무상태표",
  "revenue": "매출액",
  "costOfRevenue": "매출원가",
  "grossProfit": "매출총이익",
  "researchAndDevelopment": "연구개발비",
  "operatingIncome": "영업이익(EBIT)",
  "depreciationAndAmortization": "감가상각비",
  "interestExpense": "이자비용",
  "pretaxIncome": "법인세차감전이익",
  "incomeTaxExpense": "법인세비용",
  "netIncome": "순이익",
  "epsDiluted": "희석 EPS($)",
  "sharesDiluted": "희석 주식 수(가중평균)",
  "operatingCashFlow": "영업현금흐름",
  "capex": "설비투자",
  "freeCashFlow": "잉여현금흐름",
  "shareBasedCompensation": "주식보상비용",
  "dividendsPaid": "지급 배당금",
  "buybacks": "자사주 매입",
  "totalAssets": "자산총계",
  "currentAssets": "유동자산",
  "cash": "현금 및 현금성자산",
  "inventory": "재고자산",
  "accountsReceivable": "매출채권",
  "goodwill": "영업권",
  "intangibleAssets": "무형자산",
  "totalLiabilities": "부채총계",
  "currentLiabilities": "유동부채",
  "totalDebt": "차입금",
  "equity": "자기자본",
  "retainedEarnings": "이익잉여금",
  "sharesOutstanding": "발행주식수"
 },
 "method": {
  "btPending": "백테스트 결과는 다음 데이터 업데이트 후에 표시됩니다.",
  "btCaveats": "유의사항: 현재 상장된 기업만 포함됩니다(파산·상장폐지 기업이 빠져 있으므로 가장 낮은 점수의 기업은 실제로 더 나쁜 성과를 냈습니다). 주가에는 배당이 포함되지 않습니다. 모든 연도에 현재의 섹터 기준을 사용합니다. 가중치는 같은 기간으로 조정했으므로 실제 예측력은 다소 낮을 수 있습니다. 과거 결과가 미래를 보장하지 않으며, 투자 조언이 아닙니다.",
  "btDividend": "배당 안정성: 다음 해에 배당을 줄인 비율은 ‘안전’ {safe}, ‘보통’ {moderate}, ‘위험’ {risky}, ‘불안’ {unsafe}였습니다.",
  "btRisk": "리스크: 리스크가 가장 낮은 5분위에서 12개월 내 최대 하락폭은 평균 {lo}였고 {blo}의 종목이 절반 넘게 하락했습니다. 가장 위험한 5분위에서는 {hi}와 {bhi}였습니다.",
  "btLoss": "이듬해 적자: 이듬해 적자를 낸 기업과 내지 않은 기업을 짝지었을 때, 적자 기업의 TeraScore가 더 낮을 확률은 {p}였습니다({y}개 기업-연도. 50% = 무작위, 100% = 완벽).",
  "btIc": "검증한 {k}개 시점 중 {share}에서 TeraScore가 높을수록 이후 12개월 성과가 평균적으로 좋았습니다(평균 순위 상관계수 {ic}. 0 = 관계 없음, 1 = 완벽).",
  "btWorst": "하위 20%",
  "btBest": "상위 20%",
  "btDrawdown": "평균 최대 하락",
  "btBigLoss": "50% 넘게 하락",
  "btExcess": "초과 수익률(12개월)",
  "btAvg": "평균 점수",
  "btQuintile": "5분위",
  "btIntro": "이 방법은 과거 데이터로도 검증했습니다. {from}부터 {to}까지 분기마다 각 기업을 당시 가능했던 방식대로, 즉 이미 공개된 연간 보고서와 그날의 주가만으로 평가하고, 이후 12개월 동안 일어난 일과 비교했습니다. 관측치 {n}개, 기업 {c}개, 시가총액 {mc} 이상. 초과 수익률: 기업의 12개월 주가 변화에서 같은 날 중앙값 기업의 변화를 뺀 값.",
  "btTitle": "얼마나 신뢰할 수 있나? 백테스트",
  "runwayText": "잉여현금흐름이 마이너스(현금을 소진하는 중)이면 유동성 점수는 현금 소진 가능 기간이 정당화하는 수준까지만 받을 수 있습니다. 유동성 자산으로 현재의 현금 소진을 몇 년 감당할 수 있는지({bad}년 이하 = 0점, {good}년 이상 = 100점).",
  "smoothText": "이익률과 자본이익률(ROIC, ROE, ROA)은 최근 연도 {a}%와 그 이전 2년 평균 {b}%로 평가하므로, 예외적인 한 해가 점수를 크게 흔들지 않습니다. 기업 페이지에서는 이 3년 기준값을 최신 값 아래에 표시합니다.",
  "title": "평가 방법",
  "intro": "각 기업을 감사받은 연간 보고서(10-K / 20-F)와 최신 분기 보고서(10-Q)를 바탕으로 같은 데이터 템플릿에 정리합니다. 각 지표는 0–100점으로 환산하며, 각 평가 관점은 해당 지표들의 가중평균입니다. 100점이 가장 좋습니다. 단, 리스크는 낮을수록 좋습니다.",
  "scaling": "점수는 0점이 되는 값과 100점이 되는 값 사이에서 선형으로 매기며, 그 범위 밖은 상한·하한으로 제한합니다. 영역 안에서 누락된 지표는 제외하고 나머지 가중치를 다시 정규화합니다. 가중치의 절반 이상을 차지하는 지표가 있을 때만 그 영역을 평가합니다. 데이터 충실도는 TeraScore 중 데이터에 근거한 비율(가중치 기준)입니다.",
  "partial": "부분 분석. 기업 공시에 어떤 영역의 데이터가 없으면, 그 영역은 TeraScore에서 중립값 {s}로 계산하거나, 기업의 다른 영역 평균이 더 낮으면 그 평균으로 계산합니다. 따라서 누락된 데이터가 점수를 올리는 일은 없습니다(백테스트에서 데이터가 빠진 기업은 같은 점수의 완전한 기업보다 성과가 나빴습니다). 누락이 아니라 정의되지 않는 수치, 즉 0이나 마이너스 기준에서의 성장률, 투하자본이 마이너스인 ROIC, 무배당 기업의 배당성향은 대신 해당 영역에서 제외합니다. 데이터 충실도는 TeraScore 중 데이터에 근거한 비율(가중치 기준)입니다. 80% 미만이면 목록에서 기업명과 TeraScore 사이에 ‘◐ 부분 · 65%’를 표시하고, 기업 페이지에서는 100% 미만일 때 항상 비율과 누락된 영역을 보여 줍니다. 평가 가능한 영역이 5개 미만이면 TeraScore가 없으며(‘데이터 부족’), 아직 연간 보고서가 없는 기업은 ‘분석 없음’ 또는 ‘신규 상장’으로 표시합니다.",
  "estimates": "추정 수치. 영업이익 항목을 보고하지 않는 기업은 영업이익(EBIT)을 법인세차감전이익에 이자비용을 더한 값으로 추정합니다(은행·보험사 제외). 최근 2개 회계연도 동안 차입이나 이자비용을 보고하지 않았고 비유동부채가 자산의 15% 미만인 기업은 무차입 기업으로 봅니다. 기업 페이지에는 이런 추정을 나열하며, 원천 데이터에는 보고된 그대로의 수치를 보여 줍니다. 일부 기업은 설비투자를 SEC 표준 데이터에 없는 자체 XBRL 항목으로만 보고합니다. 이 경우 두 수치를 모두 보고한 가장 가까운 연도의 해당 기업 설비투자 대비 매출 비율로 추정하고, 그것도 없으면 감가상각비로 추정합니다.",
  "bands": "등급 구간:",
  "profiles": "은행, 보험사, 증권사(금융 프로필)와 REIT(부동산 프로필)는 조정된 지표와 기준으로 평가하며, 다른 부분은 아래에 표시합니다.",
  "overall": "TeraScore(종합)",
  "overallText": "9개 펀더멘털 영역의 가중평균(엔진 2.1). 가중치는 아래 백테스트를 바탕으로 조정했습니다. 이후의 승자와 패자, 그리고 이후의 적자를 더 잘 구분한 영역(안정성, 밸류에이션, 현금흐름)은 가중치가 높고, 덜 구분한 영역(유동성, 재무 건전성 – 리스크 점수에서는 30% 비중 유지)은 낮습니다. 각 기업 페이지의 ‘TeraScore를 높이는 요인과 낮추는 요인은?’에서 영역별 기여도를 보여 줍니다: 50 + Σ 가중치 × (점수 − 50).",
  "riskTitle": "리스크",
  "distressTitle": "재무 부실 위험",
  "distressText": "점수: Altman Z'' 부실 구간 +3 / 회색 구간 +1, FCF가 플러스가 아닌 상태의 자기자본 마이너스 +2, FCF 마이너스 +1, 순손실 +1, 이자보상배율 < 1.5배 +2, EBITDA가 플러스가 아닌 상태의 순차입금 +1, 자기자본비율 < 5%(금융사) +2. 2–3점 = 다소 높음, 4점 이상 = 높음.",
  "trendTitle": "장기 추세",
  "trendText": "장기 성장성 70% + 최근 연도 성장성 30%에, 영업이익률 추세에 따라 최대 ±5점을 조정합니다. ≥ 65 개선 중, 40–64 안정, < 40 악화 중. 과거를 설명할 뿐 예측이 아닙니다.",
  "stylesTitle": "투자 프로필",
  "stylesText": "퀄리티: 수익성 ≥ 70, 안정성 ≥ 70, 재무 건전성 ≥ 60, 치명적 경고 없음. 성장: 장기 성장성 ≥ 70. 가치: 밸류에이션 ≥ 65. 인컴: FCF로 감당되는 배당수익률 ≥ 2%. 투기적: 치명적 경고가 있거나 대부분의 해에 적자.",
  "sectorTitle": "섹터 비교",
  "sectorText": "각 점수는 같은 섹터의 분석된 모든 기업 가운데 순위(백분위)로도 표시됩니다.",
  "limitsTitle": "한계",
  "limitsText": "점수는 공시된 재무 수치와 시장 가격에만 근거합니다. 경영의 질, 경쟁 지위, 뉴스, 회사의 실적 전망은 반영하지 않습니다. 투자 조언이 아닙니다.",
  "logosText": "기업 로고는 Financial Modeling Prep의 공개 로고 이미지를 사용합니다. 로고는 각 기업의 상표이며 식별 목적으로만 표시합니다. 로고가 없는 기업은 첫 글자로 표시합니다.",
  "profileGeneral": "일반",
  "profileFinancial": "금융",
  "profileRealEstate": "부동산",
  "eventsTitle": "기업 주요 이벤트(8-K)",
  "eventsText": "중요 이벤트는 최근 12개월간 SEC에 제출된 Form 8-K에서 영향이 큰 항목만 추립니다. 파산(1.03)과 재무제표 재작성(4.02)은 치명적 경고이고, 채무 기한이익 상실(2.04), 상장폐지 통지(3.01), 감사인 교체(4.01)는 경고이며, 모두 리스크와 재무 부실 점수를 높입니다.",
  "relativeTitle": "섹터 상대 평가",
  "relativeText": "이익률, 자본이익률, 자본 구조, 유동성, 밸류에이션 배수는 업종에 따라 크게 다릅니다. 이 지표들의 점수는 50%가 절대 평가(위의 기준), 50%가 상대 평가입니다. 상대 평가는 섹터 내 자리 잡은 동종 기업(시가총액 ≥ $300M, 매출 ≥ $50M, 최소 20개 기업)의 10백분위와 90백분위 사이에서 기업이 어디에 있는지를 봅니다. 각 지표 옆에는 섹터 중앙값을 표시합니다. 성장성, 안정성, 리스크 지표는 절대 기준만 사용합니다.",
  "insiderText": "최근 12개월간 SEC Form 4 분기 데이터셋을 사용합니다. 장내 매수와 매도만 집계합니다. 내부자 2명 이상이 합계 $100,000 이상 매수하면 강점, 10b5-1 계획 밖에서 시가총액의 1%를 넘게 매도하면 경고입니다.",
  "currencyTitle": "해외 기업과 통화",
  "currencyText": "미국에 상장된 해외 기업(Form 20-F / 40-F, IFRS)은 보고 통화 그대로 분석하며, 비율 지표는 통화와 무관합니다. 밸류에이션에서는 달러 기준 시가총액을 ECB 기준환율로 환산합니다(ECB가 고시하지 않는 통화는 다른 출처 사용). 외국 민간 발행인은 분기 XBRL 보고서를 제출하지 않으므로 밸류에이션에 최근 회계연도를 사용합니다.",
  "historyText": "TeraScore 변화는 각 기업을 각 회계연도 말 시점에 당시 이용할 수 있었던 정보만으로 평가합니다. 그해까지의 연간 보고서, 직전 12개월의 8-K 이벤트, 그날의 주가입니다(시가총액은 현재 시가총액, 주가 변화, 주식 수 변화로 추정). 과거 연도에는 TTM 수치, 내부자 데이터, 현재 시장 데이터를 쓰지 않으며, 모든 연도에 현재의 섹터 기준을 적용합니다. 또한 매주 월요일 업데이트마다 현재 TeraScore의 스냅숏을 저장하며, 4주·13주 변화는 적어도 그만큼 오래된 가장 최근 스냅숏과 비교합니다.",
  "peersText": "유사 기업은 같은 섹터에서 고릅니다. 각 후보와의 거리는 시가총액 로그값의 차이이며, 업종이 다르면 규모 차이 4.5배에 해당하는 페널티를 더합니다. 그래서 같은 업종의 비슷한 규모 기업이 먼저 나오고, 초대형 기업은 섹터 내 초대형 기업과 비교됩니다. 평가 완료된 기업만 포함하며, 기업당 주식 클래스 하나만 넣습니다.",
  "dividendText": "배당 안정성은 현재 배당이 유지될 가능성을 0–100점으로 평가합니다. 75점 이상 안전, 55–74 보통, 35–54 위험, 35 미만 불안입니다. 데이터가 없는 요소는 제외하고 나머지 가중치를 다시 맞춥니다.",
  "portfolioText": "포트폴리오의 TeraScore, 리스크, 배당수익률은 보유 평가액으로 가중한 평균입니다. PER은 총 평가액을 보유분에 귀속되는 이익으로 나눈 값입니다(적자 기업 제외). 경고: 단일 종목 {p} 초과, 단일 섹터 {s} 초과, 보유 종목 {n}개 미만, 치명적 경고, 높은 재무 부실 위험, 낮은 TeraScore.",
  "quarterlyText": "분기 수치는 10-Q와 10-K 공시에서 최근 12개 분기를 다룹니다. 유량 항목은 3개월 금액으로, 직접 보고된 값이거나 연초 누적 수치에서 산출한 값입니다. 4분기는 연간 금액에서 처음 9개월을 뺀 값입니다. 주당 수치와 주식 수는 3개월 기준으로 보고된 경우에만 이후 주식 분할을 반영해 표시합니다. 재무상태표 항목은 분기 말 기준입니다.",
  "portfolioEtfText": "ETF(상장지수펀드)도 추가할 수 있습니다. 일별 가격으로 평가하고, TeraScore가 없으며, 펀드는 이미 분산되어 있으므로 종목 비중, 섹터, 보유 종목 수 점검에서 제외됩니다. 배당수익률은 Nasdaq이 공개하는 경우 그 값을 쓰고, 없으면 직접 입력할 수 있습니다.",
  "zero": "0점",
  "hundred": "100점"
 }
};
