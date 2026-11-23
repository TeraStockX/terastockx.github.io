// Simplified Chinese.
export default {
 "meta": {
  "name": "中文",
  "short": "中文",
  "locale": "zh-CN"
 },
 "ui": {
  "pfCurrency": "货币",
  "pfAllocTitle": "配置",
  "pfByHolding": "按持仓",
  "pfByCurrency": "按交易货币",
  "pfHistTitle": "投资组合走势",
  "pfHistLoading": "正在加载历史价格…",
  "pfHistValue": "当前持仓的价值",
  "pfHistValueSub": "按月，最近两年，以 {c} 计（外币价格按今日汇率换算）。",
  "pfHistMissing": "无历史价格，未计入：{list}。",
  "pfHistScoreWeekly": "投资组合的 TeraScore（每周）",
  "pfHistScoreYearly": "投资组合的 TeraScore（按财年）",
  "pfHistScoreSub": "公司按今日市值加权（ETF 没有 TeraScore）。",
  "etfAcc": "累积型",
  "etfDist": "分派型",
  "cmpPartialNote": "这些公司的财报缺少部分数据，因此分析不完整，评分的可靠性较低：{list}。标为“无数据”的维度不计入 TeraScore（不按零分计算）。",
  "showMore": "显示更多",
  "tagline": "清晰透明的基本面股票分析。",
  "heroText": "在纳斯达克、纽约证券交易所、NYSE American 和 Cboe 上市的每家公司，都依据经审计的 SEC 财报，从盈利能力、现金流质量、资产负债表实力、增长、估值和风险等十个投资维度进行评分，并与同行业公司比较。",
  "navCompanies": "公司",
  "navCompare": "比较",
  "navMethod": "方法论",
  "language": "语言",
  "searchPlaceholder": "搜索代码或公司名称（例如 AAPL、Apple）",
  "allSectors": "所有行业",
  "onlyAnalyzed": "已分析的公司",
  "allCompanies": "所有公司",
  "watchlist": "关注列表",
  "results": "{n} 个结果",
  "analyzedOf": "已分析 {a} 家 / 共 {n} 家公司",
  "updated": "更新于 {d}",
  "company": "公司",
  "noData": "无数据",
  "noResults": "没有符合搜索条件的公司。",
  "prev": "上一页",
  "next": "下一页",
  "demoBadge": "演示",
  "demoNote": "标有“演示”的公司显示的是近似示例数据，直到数据更新程序载入 SEC 官方数据。",
  "back": "返回列表",
  "tabAnalysis": "分析",
  "tabRaw": "财务报表",
  "demoNotice": "演示数据：近似示例数据。数据更新程序会用 SEC 官方财报替换。",
  "notFound": "找不到代码为 {t} 的公司。",
  "lastFy": "最近财年：{y}",
  "ttmBasis": "估值基于截至 {d} 的过去十二个月（TTM）数据",
  "annualBasis": "估值基于最近一个财年的数据",
  "overallScore": "TeraScore",
  "risk": "风险",
  "distress": "财务困境风险",
  "trend": "长期趋势",
  "coverage": "数据完整度",
  "watchEmpty": "关注列表为空。点击任意公司行中的 ☆ 星标即可加入。",
  "now": "刚刚",
  "today": "今天",
  "yesterday": "昨天",
  "updatedLabel": "更新",
  "searchFuzzy": "没有与“{q}”完全匹配的结果。相似名称：",
  "years": "{n} 年",
  "marketCap": "市值",
  "price": "价格",
  "sector": "行业",
  "industry": "细分行业",
  "sectionScores": "评分卡",
  "sectionFlags": "警示与优势",
  "sectionCharts": "历史表现",
  "sectionKey": "关键指标",
  "howCalculated": "计算明细",
  "weight": "权重",
  "points": "分",
  "notScored": "不适用",
  "sectorRank": "优于 {s} 中 {p}% 的公司",
  "sectorRankShort": "行业前 {p}%",
  "riskExplain": "风险 = 100 − 加权安全评分（资产负债表 30%、稳定性 25%、现金流 20%、盈利能力 15%、流动性 10%；有价格历史时与市场风险按 75/25 混合）+ 每个严重警示 {c} 分、每个一般警示 {w} 分。",
  "noFlags": "没有值得注意的警示。",
  "critical": "严重",
  "warningTag": "警示",
  "strength": "优势",
  "footer": "TeraStockX 的所有评分均来自向 SEC 提交的公开财务报表。评分描述的是历史基本面，不构成投资建议，也不预测股价。",
  "engine": "引擎 v{v}。评分基于历史公开数据计算，不构成投资建议。",
  "currencyNote": "金额单位：{cur}。",
  "source": "来源",
  "retrieved": "获取于 {d}",
  "downloadCsv": "下载 CSV",
  "downloadJson": "JSON（模板）",
  "fiscalYear": "财年",
  "ttm": "TTM",
  "computedRatios": "计算比率",
  "addWatch": "加入关注列表",
  "removeWatch": "从关注列表移除",
  "compareWith": "比较",
  "compareTitle": "比较公司",
  "compareHint": "最多选择六家公司并排比较。",
  "addCompany": "添加公司（名称或代码）…",
  "remove": "移除",
  "dimension": "维度",
  "metric": "指标",
  "chartRevenue": "营收",
  "chartNetIncome": "净利润",
  "chartFcf": "自由现金流",
  "chartMargin": "营业利润率",
  "chartPrice": "股价（月度，已调整）",
  "chartRevenueSub": "年度",
  "chartNetIncomeSub": "年度（红色 = 亏损）",
  "chartFcfSub": "经营现金流 − 资本支出",
  "chartMarginSub": "营业利润 / 营收",
  "chartPriceSub": "月末收盘价，最近 6 年",
  "notEnough": "数据不足。",
  "errorLoad": "出错了：{e}",
  "serveHint": "如果您直接打开了文件，请启动本地 Web 服务器（见 README）。",
  "profileFinancial": "金融机构类型：流动性、EBITDA 和自由现金流指标不适用于银行和保险公司，已排除。",
  "profileRealEstate": "房地产类型：杠杆和估值阈值已根据 REIT 较高的结构性负债进行调整。",
  "styles": "投资风格",
  "navNews": "市场与事件",
  "navData": "财务数据",
  "newsTitle": "市场与事件",
  "newsIntro": "美国上市公司在过去 12 个月内通过 8-K 表格向 SEC 正式报告的重大事件：高影响事件类型（破产、财报重述、退市通知、控制权变更、收购、重组、减值、更换审计师、网络安全事件）以及大公司的管理层变动；常规公告不包括在内。",
  "newsEmpty": "当前数据中没有重大事件。",
  "viewFiling": "查看公告",
  "sectionEvents": "重大事件（最近 12 个月）",
  "eventsNone": "最近 12 个月没有报告重大事件。",
  "latestEvents": "最新重大事件",
  "allNews": "所有重大事件",
  "dataTitle": "财务数据",
  "dataIntro": "TeraStockX 模板中的原始财务报表：最多十个财年及过去十二个月的利润表、现金流量表和资产负债表，并附计算比率。可下载为 CSV 或 JSON。",
  "dataPick": "选择公司（名称或代码）",
  "sev5": "严重",
  "sev4": "重大",
  "sev3": "重要",
  "sev2": "值得关注",
  "allSeverities": "所有事件类型",
  "onlyCritical": "仅严重和重大事件",
  "openAnalysis": "打开分析",
  "tabCompanies": "股票",
  "tabNews": "事件",
  "tabData": "数据",
  "tabCompare": "比较",
  "tabMethod": "方法",
  "newsTop": "最重要（严重事件；市值超过 10 亿美元公司的重大事件）",
  "filters": "筛选条件",
  "filtersActive": "{n} 个已启用",
  "reset": "重置筛选",
  "minScore": "最低 TeraScore",
  "maxRisk": "最高风险",
  "anyValue": "不限",
  "minCap": "最低市值",
  "minDividend": "最低股息率",
  "exchange": "交易所",
  "allExchanges": "所有交易所",
  "styleFilter": "投资风格：",
  "noCritical": "无严重警示",
  "pe": "市盈率",
  "dividendYieldShort": "股息率",
  "sectorMedian": "行业中位数",
  "insiderTitle": "内部人交易",
  "insiderBuys": "公开市场买入",
  "insiderSells": "公开市场卖出",
  "insiderNone": "最近 12 个月没有内部人在公开市场买入或卖出。",
  "insiderForeign": "外国私人发行人无需提交 Form 4 报告；没有内部人数据。",
  "insiderPlanned": "其中按 10b5-1 交易计划进行",
  "insiderPeriod": "SEC Form 4 申报，{from} – {to}。仅显示公开市场买入（代码 P）和卖出（代码 S）；授予、期权行权和代扣税不包括在内。",
  "insiderCount": "{n} 笔交易 · {p} 位内部人",
  "insiderDate": "日期",
  "insiderName": "内部人",
  "insiderType": "交易",
  "insiderShares": "股数",
  "insiderValue": "金额",
  "insiderPurchase": "买入",
  "insiderSale": "卖出",
  "insiderPlanTag": "10b5-1 计划",
  "alertsTitle": "关注列表提醒",
  "alertsSeen": "全部标为已读",
  "alertScore": "{t}：TeraScore 从 {from} 变为 {to}",
  "alertRisk": "{t}：风险从 {from} 升至 {to}",
  "alertDistress": "{t}：财务困境风险现为{level}",
  "alertEvent": "{t}：新的重大事件 – {event}（{date}）",
  "alertCritical": "{t}：新的严重警示 – {flag}",
  "fxNote": "报表货币为 {cur}，按 1 {cur} = {rate} 美元换算",
  "navTrend": "TeraScore 变化",
  "tabTrend": "变化",
  "trendIntro": "公司的 TeraScore 如何随时间变化。财年视图按每个财年末对每家公司评分，只使用当时已知的信息（年报、此前 12 个月的 8-K 事件以及当日股价）。每周一更新时会增加一次快照，因此 4 周和 13 周的变化会在最初几周后出现。",
  "trendPeriod": "期间",
  "trendPeriodFy": "与上一财年相比的变化",
  "trendPeriod4w": "4 周变化",
  "trendPeriod13w": "13 周变化",
  "trendUp": "改善最多",
  "trendDown": "下降最多",
  "trendChange": "变化",
  "trendFrom": "原为 {v}",
  "trendWeeklyEmpty": "每周快照随每周一的更新收集；最初几周后此视图会逐渐填充。",
  "trendNote": "变化以 TeraScore 分数计。财年评分对过去年份使用今天的行业基准。",
  "trendAnnualChart": "各财年的 TeraScore",
  "trendAnnualSub": "每个财年末的时点评分",
  "trendWeeklyChart": "TeraScore（每周）",
  "trendWeeklySub": "每次周一更新的快照",
  "trendAll": "所有变化",
  "navPortfolio": "投资组合",
  "tabPortfolio": "组合",
  "addPortfolio": "加入投资组合",
  "inPortfolio": "已在组合中",
  "pdfReport": "PDF 报告",
  "minDivSafety": "股息安全性",
  "peersTitle": "同类公司",
  "peersNone": "该行业没有可比较的已评分公司。",
  "peerMedian": "同类中位数",
  "peersSub": "{s} 中按细分行业和公司规模最接近的同类公司。",
  "peersRank": "按 TeraScore，{t} 在该组 {n} 家公司中排名第 {r}。",
  "peersCompare": "详细比较",
  "dividendTitle": "股息",
  "dividendSafety": "股息安全性",
  "dividendYield": "股息率",
  "dps": "每股股息",
  "dpsCagr": "股息增长（5 年复合增长率）",
  "yearsPaid": "连续派息",
  "yearsN": "{n} 年",
  "yearsRaised": "连续增加",
  "dividendCuts": "削减次数（10 年）",
  "earningsPayout": "派息率（盈利）",
  "fcfPayout": "派息率（自由现金流）",
  "payoutUncovered": "未覆盖",
  "dividendNone": "该公司不派发股息。",
  "dividendNoneShort": "无股息",
  "dividendNote": "每股股息由已支付现金股息除以稀释股数得出，因此特别股息会表现为跳升。有数据时派息率使用过去十二个月的数据。",
  "chartDps": "每股股息",
  "chartDpsSub": "已支付现金股息 / 稀释股数",
  "period": "期间",
  "periodAnnual": "年度",
  "periodQuarterly": "季度",
  "quarterEnd": "季度截至",
  "quarterlyNote": "三个月数据。若某季度只按年初至今报告，则为年初至今数据减去上一季度的数据；第四季度为全年数据减去前九个月。",
  "quarterlyNone": "没有季度数据。",
  "quarterlyForeign": "外国私人发行人只提交年报（20-F / 40-F）；没有季度数据。",
  "pfIntro": "输入您的持仓，即可查看投资组合按市值加权的 TeraScore、风险、股息收入、行业配置和集中度警示。投资组合只保存在此浏览器中。",
  "pfAdd": "添加",
  "pfFromWatch": "添加关注列表（各 1 股）",
  "pfNeedShares": "请输入股数。",
  "pfEmpty": "投资组合为空。请在上方添加公司和股数。",
  "pfValue": "组合价值",
  "pfScore": "加权 TeraScore",
  "pfIncome": "年度股息收入",
  "pfPe": "组合市盈率",
  "pfHoldings": "持仓数",
  "pfSectors": "行业配置",
  "pfOther": "其他",
  "pfChecks": "组合检查",
  "pfOk": "没有集中度或质量警示。",
  "pfInfo": "提示",
  "pfShares": "股数",
  "pfPrice": "价格",
  "pfValueCol": "价值",
  "pfWeight": "权重",
  "pfNote": "价格和评分以最近一次数据更新（{d}）为准。价值以 {c} 计；欧洲 ETF 以其交易货币计价，并按今日汇率换算。",
  "reportTitle": "公司报告",
  "printPdf": "打印 / 另存为 PDF",
  "printHint": "在打印对话框中选择“另存为 PDF”。",
  "reportFinancials": "五年财务摘要",
  "profile": "投资风格",
  "ratedCompanies": "有 TeraScore 的公司",
  "installFooter": "安装应用",
  "installBanner": "将 TeraStockX 作为应用安装到手机、平板或电脑上。",
  "installHow": "如何安装",
  "close": "关闭",
  "installTitle": "将 TeraStockX 安装为应用",
  "installIntro": "TeraStockX 可以直接从本网站安装，无需应用商店，下载量也微乎其微。之后它会像其他应用一样从自己的图标全屏打开，并始终显示最新数据。",
  "installDone": "您正在使用已安装的应用。",
  "installNow": "立即安装",
  "installYourDevice": "您的设备",
  "installIos": "iPhone 和 iPad",
  "installAndroid": "Android",
  "installDesktop": "电脑（Chrome、Edge）",
  "installNote": "应用与网站完全相同：数据更新会自动送达，您的关注列表和投资组合保存在此设备上。如需删除，像删除其他应用一样即可。",
  "pfAddPlaceholder": "公司或 ETF（名称或代码）…",
  "pfScoreCover": "覆盖组合的 {p}",
  "pfEtfs": "ETF",
  "etfExpense": "费用率 {v}",
  "etfNoScore": "ETF 没有 TeraScore：基金没有自己的财务报表。",
  "etfYieldInput": "股息率（%）",
  "etfNote": "ETF 没有 TeraScore；加权 TeraScore 和风险只涵盖公司。",
  "etfYieldMissing": "数据源未公布 {list} 的股息率。请在股息率一栏中填写（以 % 计），以将其计入股息收入。",
  "screensTitle": "快速搜索",
  "colChangeFy": "变化",
  "filtersAndScreens": "筛选和快速搜索",
  "maxPe": "最高市盈率",
  "minDrop": "低于 12 个月高点",
  "dropAtLeast": "至少 {p}",
  "colFromHigh": "距高点",
  "contact": "联系",
  "marketToday": "今日市场",
  "marketMore": "市场与事件",
  "eventsTitle": "重大公司事件（8-K）"
 },
 "pulse": {
  "themes": {
   "ai": "AI 股",
   "bigTech": "大型科技股",
   "semis": "半导体",
   "banks": "银行",
   "energy": "石油与天然气",
   "crypto": "加密货币概念股"
  },
  "hlIndex": "{n} 今日 {v}",
  "hlTheme": "{n} 今日 {v}（最佳 {b}，最弱 {w}）",
  "hlUp": "{n} 今日上涨 {v}",
  "hlDown": "{n} 今日下跌 {v}",
  "hlReport": "{n} 发布了{f}（{form}）",
  "annualReport": "年报",
  "quarterlyReport": "季报",
  "hlScore": "{n} 的 TeraScore 变化了 {v} 分（现为 {o}）",
  "hlListing": "新上市：{n}",
  "none": "今日暂无。",
  "notYet": "市场概览将在下次数据更新后显示。",
  "bestWorst": "最佳 {b} · 最弱 {w}",
  "asOf": "价格：{d}（约延迟 15 分钟）。工作日美股交易时段每 5 分钟、盘前盘后每 10 分钟更新价格、TeraScore、新闻和新报告。",
  "headlines": "今日大幅波动",
  "themesTitle": "主题（按市值加权的今日变化）",
  "sectorsTitle": "今日行业",
  "gainers": "涨幅最大（20 亿美元以上）",
  "losers": "跌幅最大（20 亿美元以上）",
  "today": "今日",
  "reports": "新的季报和年报",
  "filed": "提交",
  "scoreMoves": "自昨日以来 TeraScore 大幅变化",
  "newListings": "新上市",
  "listed": "上市",
  "note": "相对于前一收盘价的变化。主题和行业按市值加权。TeraScore 变化与前一日的评分比较。交易时段内，约 20 亿美元以上的公司和最大的基金显示当日变化；较小的公司在每日更新后显示。",
  "noFilings": "尚无提交给 SEC 的财务报告",
  "notScoredYet": "尚未评分",
  "notScoredText": "TeraScore 至少需要一份年报（10-K 或 20-F）。新上市公司在发布第一份年报后获得评分；在此之前显示价格、市值和已有的季度数据。",
  "lastReport": "最新报告",
  "storiesTitle": "要闻",
  "storiesNote": "大公司（市值超过 100 亿美元）最近几天的重要公告和大幅股价波动。标题来自公司提交给 SEC 的公告原文（英文）。",
  "kind": {
   "leadership": "管理层变动",
   "deal": "并购",
   "results": "业绩",
   "critical": "严重事件",
   "major": "重大事件",
   "restructuring": "重组",
   "cyber": "网络安全事件",
   "board": "董事会变动",
   "other": "公告",
   "move": "股价大幅波动"
  },
  "when": {
   "pre": "盘前",
   "post": "盘后",
   "day": "今日",
   "last": "上一交易日"
  },
  "preNote": "开盘前：下方的每日变化为上一交易日（{d}）的数据。大公司的盘前波动见“要闻”。",
  "postNote": "收盘后：下方的每日变化为今日交易时段的数据；大公司的盘后波动见“要闻”。",
  "readMore": "公告（SEC）",
  "extLabel": "{w}：{p}",
  "storiesNone": "目前大公司没有重大新闻。",
  "moreNews": "全部新闻",
  "asOfShort": "价格：{d}，约延迟 15 分钟"
 },
 "screens": {
  "top": {
   "name": "TeraScore 最高",
   "desc": "所有已评分公司，TeraScore 从高到低。"
  },
  "bestRiskReward": {
   "name": "评分最高、风险最低",
   "desc": "TeraScore 至少 70、风险不超过 30、无严重警示、市值 3 亿美元以上；按 TeraScore 减风险排序。"
  },
  "safeLongTerm": {
   "name": "长期最稳健",
   "desc": "TeraScore ≥ 65、风险 ≤ 25、稳定性 ≥ 70、资产负债表实力 ≥ 60、财务困境风险低、无严重警示、市值 20 亿美元以上；按低风险、稳定性和资产负债表排序。"
  },
  "lowRisk": {
   "name": "风险最低",
   "desc": "风险不超过 20 且无严重警示；风险从低到高。"
  },
  "improvers": {
   "name": "去年改善最多",
   "desc": "TeraScore 比上一财年至少提高 10 分、市值 3 亿美元以上；升幅最大者在前。"
  },
  "growth": {
   "name": "快速成长",
   "desc": "最近财年增长 ≥ 75、长期增长 ≥ 70，TeraScore 至少 55、市值 3 亿美元以上。"
  },
  "value": {
   "name": "被低估的优质股",
   "desc": "估值评分 ≥ 70（相对盈利和现金流便宜）、TeraScore ≥ 65、盈利能力 ≥ 60、无严重警示、市值 3 亿美元以上。"
  },
  "dividend": {
   "name": "安全股息",
   "desc": "股息安全性 ≥ 75 且股息率至少 2.5%、市值 3 亿美元以上；股息率最高者在前。"
  },
  "largeQuality": {
   "name": "大型优质公司",
   "desc": "市值至少 500 亿美元且 TeraScore 至少 70。"
  },
  "highRisk": {
   "name": "高风险",
   "desc": "风险至少 70，或财务困境风险高且风险至少 55，市值 3 亿美元以上；风险最高者在前。投机性股票：请谨慎对待。"
  },
  "decliners": {
   "name": "去年下降最多",
   "desc": "TeraScore 比上一财年至少下降 10 分、市值 3 亿美元以上；降幅最大者在前。"
  },
  "dip": {
   "name": "较高点回落，现在更便宜",
   "desc": "优质公司（TeraScore ≥ 65、风险 ≤ 40、无严重警示、市值 3 亿美元以上），股价比 12 个月高点（月末收盘价）低 20–50%；TeraScore 最高者在前。跌幅更大的不包括在内：那往往意味着麻烦而非折价。"
  },
  "lowPe": {
   "name": "低市盈率",
   "desc": "市盈率在 3–12 之间的盈利公司，且估值评分至少 60（EV/EBIT 和现金流收益率也证实其便宜）、TeraScore ≥ 60、稳定性 ≥ 50、无严重警示、市值 3 亿美元以上。市盈率低于 3 通常来自一次性收益，不包括在内。"
  }
 },
 "install": {
  "benefit1": "在主屏幕上拥有自己的图标，与其他应用并列",
  "benefit2": "全屏打开，没有浏览器地址栏",
  "benefit3": "启动更快，最近查看的公司离线也能打开",
  "benefit4": "自动更新：无需重新安装，无需应用商店",
  "iphone1": "在 Safari 中打开此页面。",
  "iphone2": "点击“分享”按钮（带向上箭头的方框）——iPhone 在底部，iPad 在右上角。",
  "iphone3": "向下滚动并点击“添加到主屏幕”。",
  "iphone4": "点击右上角的“添加”。TeraStockX 图标会出现在主屏幕上。",
  "android1": "在 Chrome 中打开此页面。",
  "android2": "点击上方的“立即安装”，或打开右上角的菜单（⋮）。",
  "android3": "选择“安装应用”（或“添加到主屏幕”）。",
  "android4": "点击“安装”确认。应用会出现在应用列表和主屏幕上。",
  "desktop1": "在 Chrome 或 Edge 中打开此页面。",
  "desktop2": "点击上方的“立即安装”，或地址栏右端的安装图标。",
  "desktop3": "点击“安装”确认。",
  "desktop4": "TeraStockX 会在独立窗口中打开，可从开始菜单、程序坞或启动台启动。"
 },
 "dividend": {
  "safe": "安全",
  "moderate": "中等",
  "risky": "有风险",
  "unsafe": "不安全",
  "na": "未评级",
  "safeText": "盈利和自由现金流充分覆盖，且历史记录良好。",
  "moderateText": "有覆盖，但余地有限；经济下行可能带来压力。",
  "riskyText": "覆盖较薄或资产负债表紧张；削减股息的可能性真实存在。",
  "unsafeText": "盈利或现金流无法覆盖，或最近已削减；进一步削减的可能性大。",
  "naText": "数据不足，无法评级。",
  "parts": {
   "fcfPayout": "自由现金流覆盖",
   "earningsPayout": "盈利覆盖",
   "leverage": "杠杆",
   "trackRecord": "历史记录",
   "stability": "盈利稳定性"
  },
  "partsText": {
   "fcfPayout": "已付股息 / 自由现金流：40% 或以下得 100 分（REIT：80%），120% 或以上（REIT：130%）或自由现金流为负得 0 分。",
   "earningsPayout": "已付股息 / 净利润：50% 或以下得 100 分，150% 或以上或亏损得 0 分。REIT 不评分。",
   "leverage": "净负债 / EBITDA：1 倍或以下得 100 分，5 倍或以上得 0 分。银行、保险公司和 REIT 不评分。",
   "trackRecord": "连续派息年数（60%）和连续增加年数（40%），最多 10 年；过去 10 年每次削减超过 10% 扣 35 分。",
   "stability": "最近五年中盈利年份的比例。"
  }
 },
 "pw": {
  "position": "{t} 占组合的 {w}（超过 {l}）。",
  "sector": "{s} 占组合的 {w}（超过 {l}）。",
  "few": "只有 {n} 个持仓：少于 {m} 个持仓会使组合暴露于单一公司风险。",
  "critical": "严重警示：{list}。",
  "distress": "财务困境风险高：{list}。",
  "weak": "TeraScore 低于 {s}：{list}。",
  "unscored": "未评分（数据不足）：{list}。"
 },
 "ocr": {
  "button": "从截图导入",
  "loading": "正在加载文字识别（一次性，约 7 MB）…",
  "reading": "正在读取图片… {p}%",
  "privacy": "图片不会离开您的设备：在您的浏览器中读取。",
  "found": "识别出的持仓：{n}",
  "check": "请检查代码和股数，如有需要请更正，然后添加。",
  "inPortfolio": "当前组合中：{n} 股（将被替换）",
  "add": "加入投资组合",
  "cancel": "取消",
  "close": "关闭",
  "none": "图片中没有找到股票。请尝试更清晰、更大的截图，确保代码或公司名称以及股数清晰可见，或手动添加。",
  "failed": "文字识别失败：{e}",
  "needShares": "请为每个勾选的行输入股数。",
  "hint": "提示：券商应用中持仓列表的截图效果最好；可以一次选择多张。",
  "readingN": "正在读取第 {i} 张图片（共 {n} 张）… {p}%",
  "foundImages": "识别出的持仓：{n}（来自 {k} 张图片）",
  "estimated": "≈ 市值 ÷ 价格，请核对"
 },
 "dq": {
  "partial": "部分",
  "partialTitle": "部分分析：TeraScore 的 {p}% 有数据支撑。因缺少数据未评分：{d}。",
  "partialTitleParts": "部分分析：TeraScore 的 {p}% 有数据支撑；缺少若干指标。",
  "little": "数据很少",
  "littleTitle": "数据不足以计算 TeraScore：9 个领域中至少需要 5 个可评分。",
  "none": "无分析",
  "noneTitle": "尚无包含财务数据的年报。",
  "newListing": "新上市",
  "newTitle": "最近上市：发布第一份年报后获得 TeraScore。",
  "newBadge": "新",
  "legend": "部分分析：TeraScore 中有数据支撑的比例。缺失部分不计入（不按零分计算），但评分的可靠性较低。",
  "noticePartialTitle": "部分分析：TeraScore 的 {p}% 有数据支撑。",
  "noticePartial": "由于公司财报缺少数据，这些领域无法评分：{d}。它们不计入评分（不按零分计算），其他领域的权重按比例提高，因此 TeraScore 不如完整分析的公司可靠。",
  "noticePartialParts": "公司财报中缺少部分指标。它们不计入评分（不按零分计算），其他指标的权重按比例提高，因此 TeraScore 不如完整分析的公司可靠。",
  "noticeLittle": "TeraScore 至少需要 5 个可评分的领域；该公司只有 {n} 个。下方显示可以评分的领域。",
  "estimated": "根据其他已报告数据估算：{list}。",
  "est": {
   "operatingIncome": "营业利润 ≈ 税前利润 + 利息费用（公司未报告营业利润一项）",
   "totalDebt": "负债 = 0（公司从未报告任何借款或利息费用）"
  }
 },
 "dims": {
  "profitability": {
   "name": "盈利能力",
   "q": "公司将营收和资本转化为利润的效率如何？",
   "summary": "营业利润率 {operatingMargin}，净利率 {netMargin}，ROIC {roic}，ROE {roe}。"
  },
  "cashFlow": {
   "name": "现金流质量",
   "q": "报告的盈利是否有现金支撑？",
   "summary": "自由现金流利润率 {fcfMargin}；自由现金流转化率为净利润的 {fcfConversion}；应计比率 {accrualRatio}；股权激励占营收的 {sbcToRevenue}。"
  },
  "balanceSheet": {
   "name": "资产负债表实力",
   "q": "相对于盈利和股东权益，公司的杠杆有多高？",
   "summary": "净负债/EBITDA {netDebtToEbitda}，负债/股东权益 {debtToEquity}，利息保障倍数 {interestCoverage}，Altman Z'' {altmanZ}。"
  },
  "liquidity": {
   "name": "流动性",
   "q": "短期资产能否覆盖短期债务？",
   "summary": "流动比率 {currentRatio}，速动比率 {quickRatio}，现金比率 {cashRatio}。"
  },
  "growth1y": {
   "name": "增长（最近财年）",
   "q": "销售、盈利和现金流的同比势头。",
   "summary": "同比：营收 {revenueYoY}，营业利润 {operatingIncomeYoY}，每股收益 {epsYoY}，自由现金流 {fcfYoY}。"
  },
  "growthLong": {
   "name": "长期增长",
   "q": "最多五年的复合增长。",
   "summary": "{windowYears} 年复合增长率：营收 {revenueCagr}，每股收益 {epsCagr}，自由现金流 {fcfCagr}，每股账面价值 {bookValuePerShareCagr}。"
  },
  "consistency": {
   "name": "稳定性",
   "q": "业绩的可预测性和韧性如何？",
   "summary": "{profitableYearsRatio} 的年份盈利，{fcfPositiveRatio} 的年份自由现金流为正；营收增长波动率 {revenueVolatility}；Piotroski F 分数 {piotroski}。"
  },
  "capitalAllocation": {
   "name": "资本配置",
   "q": "资本回报股东和再投资的情况如何？",
   "summary": "股本每年变化 {shareChangeYearly}；股东收益率 {shareholderYield}；股息占自由现金流的 {payoutRatio}；ROIC 变化 {roicChange}。"
  },
  "valuation": {
   "name": "估值",
   "q": "相对于基本面，股票有多贵？",
   "summary": "市盈率 {peRatio}，EV/EBIT {evToEbit}，自由现金流收益率 {fcfYield}，市销率 {psRatio}，PEG {pegRatio}。"
  },
  "risk": {
   "name": "风险",
   "q": "总体投资风险（越低越好）。",
   "summary": "财务困境风险：{distress}。年化波动率 {volatility}；最大回撤（5 年）{maxDrawdown}。"
  },
  "marketRisk": {
   "name": "市场风险",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "优秀",
  "strong": "强",
  "moderate": "中等",
  "weak": "弱",
  "poor": "差",
  "na": "无数据"
 },
 "riskGrades": {
  "excellent": "很低",
  "strong": "低",
  "moderate": "中等",
  "weak": "高",
  "poor": "很高",
  "na": "无数据"
 },
 "distress": {
  "low": "低",
  "medium": "偏高",
  "high": "高",
  "lowText": "当前数据中没有财务困境的迹象。",
  "mediumText": "存在一些警示信号，值得关注。",
  "highText": "多项指标显示存在重大财务困境。"
 },
 "outlook": {
  "up": "改善中",
  "flat": "稳定",
  "down": "恶化中",
  "unknown": "历史数据不足",
  "upText": "近年来基本面持续改善。",
  "flatText": "基本面大体持平。",
  "downText": "近年来基本面有所恶化。",
  "unknownText": "至少需要三个财年的数据。"
 },
 "verdict": {
  "excellent": "大多数维度的基本面都非常强劲。",
  "strong": "财务稳健、基本面扎实的公司。",
  "moderate": "基本面喜忧参半，优势和弱点都很明显。",
  "weak": "基本面较弱；需要提高警惕。",
  "poor": "基本面存在严重弱点。",
  "na": "数据不足，无法进行总体评估。"
 },
 "styles": {
  "quality": "优质",
  "growth": "成长",
  "value": "价值",
  "income": "收益",
  "speculative": "投机"
 },
 "sectors": {
  "technology": "科技",
  "healthcare": "医疗保健",
  "financials": "金融",
  "realEstate": "房地产",
  "consumerDiscretionary": "可选消费",
  "consumerStaples": "必需消费",
  "industrials": "工业",
  "energy": "能源",
  "utilities": "公用事业",
  "communication": "通信服务",
  "materials": "原材料",
  "shell": "空壳公司 / SPAC",
  "other": "其他"
 },
 "metrics": {
  "grossMargin": [
   "毛利率",
   "毛利 / 营收。"
  ],
  "operatingMargin": [
   "营业利润率",
   "营业利润（EBIT）/ 营收。"
  ],
  "netMargin": [
   "净利率",
   "净利润 / 营收。"
  ],
  "fcfMargin": [
   "自由现金流利润率",
   "自由现金流（经营现金流 − 资本支出）/ 营收。"
  ],
  "roe": [
   "净资产收益率（ROE）",
   "净利润 / 平均股东权益。股东权益为负时不评分。"
  ],
  "roa": [
   "总资产收益率（ROA）",
   "净利润 / 平均总资产。"
  ],
  "roic": [
   "投入资本回报率（ROIC）",
   "NOPAT（EBIT × (1 − 有效税率)）/ 平均投入资本（股东权益 + 负债 − 现金）。"
  ],
  "fcfConversion": [
   "自由现金流转化率",
   "自由现金流 / 净利润。净亏损时，自由现金流为正得 60 分。"
  ],
  "accrualRatio": [
   "应计比率",
   "（净利润 − 经营现金流）/ 平均总资产。数值高说明盈利缺乏现金支撑。"
  ],
  "sbcToRevenue": [
   "股权激励 / 营收",
   "稀释股东权益的非现金薪酬。"
  ],
  "capexToRevenue": [
   "资本支出强度",
   "资本支出 / 营收。"
  ],
  "currentRatio": [
   "流动比率",
   "流动资产 / 流动负债。"
  ],
  "quickRatio": [
   "速动比率",
   "（流动资产 − 存货）/ 流动负债。"
  ],
  "cashRatio": [
   "现金比率",
   "现金及等价物 / 流动负债。"
  ],
  "debtToEquity": [
   "负债 / 股东权益",
   "金融负债 / 股东权益。股东权益为负得 0 分。"
  ],
  "equityRatio": [
   "股东权益比率",
   "股东权益 / 总资产。"
  ],
  "liabilitiesToAssets": [
   "负债 / 资产",
   "总负债 / 总资产。"
  ],
  "netDebt": [
   "净负债",
   "金融负债 − 现金。负值 = 净现金。"
  ],
  "netDebtToEbitda": [
   "净负债 / EBITDA",
   "偿还净负债所需的 EBITDA 年数。净现金得 100 分；EBITDA 为负且有净负债得 0 分。"
  ],
  "interestCoverage": [
   "利息保障倍数",
   "EBIT / 利息费用。没有利息费用得 100 分。"
  ],
  "goodwillToAssets": [
   "商誉和无形资产 / 资产",
   "来自收购的资产比例；存在减值风险。"
  ],
  "payoutRatio": [
   "派息率（占自由现金流）",
   "已付股息 / 自由现金流。不派息则不评分。"
  ],
  "bookValuePerShare": [
   "每股账面价值",
   "股东权益 / 流通股数。"
  ],
  "altmanZ": [
   "Altman Z'' 分数",
   "6.56·(营运资本/资产) + 3.26·(留存收益/资产) + 6.72·(EBIT/资产) + 1.05·(股东权益/负债)。< 1.1 困境区，> 2.6 安全区。"
  ],
  "piotroski": [
   "Piotroski F 分数",
   "关于盈利能力、杠杆、流动性和经营效率的九项二元测试（0–9）。"
  ],
  "revenueYoY": [
   "营收增长（同比）",
   "与上一财年相比的变化。"
  ],
  "operatingIncomeYoY": [
   "营业利润增长（同比）",
   "与上一财年相比的变化；基数为负时无定义。"
  ],
  "netIncomeYoY": [
   "净利润增长（同比）",
   "与上一财年相比的变化；基数为负时无定义。"
  ],
  "epsYoY": [
   "每股收益增长（同比）",
   "稀释每股收益与上一年相比。最近一年亏损得 0 分。"
  ],
  "fcfYoY": [
   "自由现金流增长（同比）",
   "自由现金流与上一年相比。"
  ],
  "revenueCagr": [
   "营收复合增长率",
   "最多五年的年复合增长率。"
  ],
  "epsCagr": [
   "每股收益复合增长率",
   "稀释每股收益最多五年的年复合增长率。"
  ],
  "fcfCagr": [
   "自由现金流复合增长率",
   "自由现金流最多五年的年复合增长率。"
  ],
  "bookValuePerShareCagr": [
   "每股账面价值复合增长率",
   "每股股东权益的年复合增长率。"
  ],
  "revenueGrowthYearsRatio": [
   "营收增长的年份",
   "期间内营收高于上一年的年份比例。"
  ],
  "marginTrend": [
   "营业利润率变化",
   "期间首年到末年营业利润率的变化（百分点）。"
  ],
  "roicChange": [
   "ROIC 变化",
   "期间首年到末年 ROIC 的变化（百分点）。"
  ],
  "profitableYearsRatio": [
   "盈利年份",
   "期间内净利润为正的年份比例。"
  ],
  "fcfPositiveRatio": [
   "自由现金流为正的年份",
   "期间内自由现金流为正的年份比例。"
  ],
  "revenueVolatility": [
   "营收增长波动率",
   "年度营收增长的标准差。"
  ],
  "marginVolatility": [
   "利润率波动率",
   "营业利润率的标准差（金融公司为净利率）。"
  ],
  "shareChangeYearly": [
   "股本变化（年度）",
   "正值 = 稀释，负值 = 回购。"
  ],
  "marketCap": [
   "市值",
   "股价 × 流通股数。"
  ],
  "enterpriseValue": [
   "企业价值",
   "市值 + 金融负债 − 现金。"
  ],
  "peRatio": [
   "市盈率（P/E）",
   "市值 / 净利润（TTM）。亏损得 0 分。"
  ],
  "psRatio": [
   "市销率（P/S）",
   "市值 / 营收（TTM）。"
  ],
  "pbRatio": [
   "市净率（P/B）",
   "市值 / 股东权益。"
  ],
  "evToEbit": [
   "EV / EBIT",
   "企业价值 / 营业利润（TTM）。"
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "企业价值 / EBITDA（TTM）。"
  ],
  "fcfYield": [
   "自由现金流收益率",
   "自由现金流（TTM）/ 市值。"
  ],
  "pfcfRatio": [
   "股价 / 自由现金流",
   "市值 / 自由现金流（TTM）。"
  ],
  "pegRatio": [
   "PEG 比率",
   "市盈率除以每股收益复合增长率（%）。负增长或亏损得 0 分。"
  ],
  "dividendYield": [
   "股息率",
   "已付股息（TTM）/ 市值。"
  ],
  "shareholderYield": [
   "股东收益率",
   "（股息 + 股票回购，TTM）/ 市值。"
  ],
  "priceReturn1y": [
   "股价，1 年",
   "调整后股价 12 个月的总回报。"
  ],
  "priceCagr5y": [
   "股价复合增长率，5 年",
   "调整后股价的年化回报。"
  ],
  "volatility": [
   "波动率（年化）",
   "36 个月月度对数收益率的标准差 × √12。"
  ],
  "maxDrawdown": [
   "最大回撤（5 年）",
   "股价从峰值到谷底的最大跌幅。"
  ]
 },
 "flags": {
  "negativeEquity": [
   "股东权益为负",
   "负债超过资产。这可能源于激进的回购，但往往表明财务紧张。"
  ],
  "persistentLosses": [
   "持续亏损",
   "至少连续两个财年净亏损。"
  ],
  "lossLastYear": [
   "最近一年净亏损",
   "最近一个财年以净亏损收尾。"
  ],
  "negativeFcf": [
   "自由现金流为负",
   "经营和投资消耗的现金多于产生的现金；需要外部融资。"
  ],
  "lowCurrentRatio": [
   "流动比率低于 1.0",
   "流动负债超过流动资产（流动比率 {value}）。若经营现金流强劲则可控。"
  ],
  "interestCoverageCritical": [
   "利息保障不足",
   "EBIT 仅覆盖利息费用的 {value}——偿债存在风险。"
  ],
  "interestCoverageWeak": [
   "利息保障偏弱",
   "EBIT 仅覆盖利息费用的 {value}。"
  ],
  "altmanDistress": [
   "Altman Z'' 处于困境区",
   "Z'' 分数 {value} 低于 1.1 的困境阈值。"
  ],
  "altmanGrey": [
   "Altman Z'' 处于灰色区",
   "Z'' 分数 {value}：既非困境，也未进入安全区（> 2.6）。"
  ],
  "debtWithoutEbitda": [
   "有净负债但 EBITDA 不为正",
   "公司背负净负债，却没有正的 EBITDA 来偿付。"
  ],
  "highLeverage": [
   "高杠杆",
   "净负债相当于 EBITDA 的 {value}。"
  ],
  "revenueDecline": [
   "营收大幅下降",
   "营收同比变化 {value}。"
  ],
  "heavyDilution": [
   "股东被严重稀释",
   "股本平均每年增长 {value}。"
  ],
  "highSbc": [
   "股权激励过高",
   "股权激励相当于营收的 {value}。"
  ],
  "lowEarningsQuality": [
   "盈利质量低",
   "应计比率 {value}：盈利明显高于经营现金流。"
  ],
  "dividendUncovered": [
   "股息未被自由现金流覆盖",
   "股息超过自由现金流（派息率 {value}）。"
  ],
  "goodwillHeavy": [
   "商誉和无形资产过高",
   "总资产的 {value} 为商誉和无形资产，存在减值风险。"
  ],
  "staleData": [
   "财务数据过时",
   "最新年报覆盖截至 {value} 的期间。"
  ],
  "deepDrawdown": [
   "股价大幅回撤",
   "股价较 5 年高点下跌 {value}。"
  ],
  "netCash": [
   "净现金状态",
   "现金比金融负债多 {value}。"
  ],
  "highMargin": [
   "营业利润率高",
   "营业利润率为 {value}。"
  ],
  "highRoic": [
   "投入资本回报率高",
   "ROIC 为 {value}，远高于典型的资本成本。"
  ],
  "alwaysProfitable": [
   "分析的每一年都盈利",
   "全部 {years} 个财年净利润为正。"
  ],
  "strongGrowth": [
   "长期增长强劲",
   "营收复合增长率 {value}。"
  ],
  "buybacks": [
   "净回购股票",
   "股本平均每年减少 {value}。"
  ],
  "altmanSafe": [
   "Altman Z'' 处于安全区",
   "Z'' 分数 {value}。"
  ],
  "strongCashConversion": [
   "现金转化能力强",
   "自由现金流相当于净利润的 {value}。"
  ],
  "bankruptcyFiling": [
   "申请破产或接管",
   "于 {value} 提交 8-K 表格第 1.03 项。"
  ],
  "restatement": [
   "财务报表重述",
   "于 {value} 提交 8-K 表格第 4.02 项（此前发布的财务报表不可依赖）。"
  ],
  "debtAcceleration": [
   "债务提前到期",
   "于 {value} 提交 8-K 表格第 2.04 项（触发财务义务提前到期的事件）。"
  ],
  "delistingNotice": [
   "退市通知",
   "于 {value} 提交 8-K 表格第 3.01 项（未满足上市规则）。"
  ],
  "auditorChange": [
   "更换审计师",
   "于 {value} 提交 8-K 表格第 4.01 项（更换认证会计师）。"
  ],
  "insiderBuying": [
   "内部人买入",
   "过去 12 个月有 {count} 位内部人在公开市场买入股票，总额 {value}。"
  ],
  "insiderSelling": [
   "内部人大量卖出",
   "过去 12 个月内部人在预设交易计划之外卖出 {value}（占市值的 {share}）。"
  ]
 },
 "events": {
  "1.03": "破产或接管",
  "4.02": "财务报表重述",
  "2.04": "财务义务提前到期",
  "3.01": "退市通知 / 违反上市规则",
  "5.01": "控制权变更",
  "2.01": "完成收购或处置",
  "2.05": "重组 / 退出业务",
  "2.06": "重大减值",
  "4.01": "更换审计师",
  "1.01": "重大协议",
  "1.02": "终止重大协议",
  "1.05": "重大网络安全事件",
  "5.02": "管理层变动（首席执行官、首席财务官或董事长）"
 },
 "raw": {
  "income": "利润表",
  "cashflow": "现金流量表",
  "balance": "资产负债表",
  "revenue": "营收",
  "costOfRevenue": "营业成本",
  "grossProfit": "毛利",
  "researchAndDevelopment": "研发",
  "operatingIncome": "营业利润（EBIT）",
  "depreciationAndAmortization": "折旧与摊销",
  "interestExpense": "利息费用",
  "pretaxIncome": "税前利润",
  "incomeTaxExpense": "所得税费用",
  "netIncome": "净利润",
  "epsDiluted": "稀释每股收益（美元）",
  "sharesDiluted": "稀释股数（加权）",
  "operatingCashFlow": "经营现金流",
  "capex": "资本支出",
  "freeCashFlow": "自由现金流",
  "shareBasedCompensation": "股权激励",
  "dividendsPaid": "已付股息",
  "buybacks": "股票回购",
  "totalAssets": "总资产",
  "currentAssets": "流动资产",
  "cash": "现金及等价物",
  "inventory": "存货",
  "accountsReceivable": "应收账款",
  "goodwill": "商誉",
  "intangibleAssets": "无形资产",
  "totalLiabilities": "总负债",
  "currentLiabilities": "流动负债",
  "totalDebt": "金融负债",
  "equity": "股东权益",
  "retainedEarnings": "留存收益",
  "sharesOutstanding": "流通股数"
 },
 "method": {
  "title": "方法论",
  "intro": "每家公司都依据经审计的年报（10-K / 20-F）和最新季报（10-Q）映射到同一个数据模板中。每项指标都转换为 0–100 分；每个维度是其指标的加权平均。100 分为最佳——风险除外，风险越低越好。",
  "scaling": "评分在得 0 分的值与得 100 分的值之间线性计算，超出范围则封顶。缺失的指标会被跳过，其余权重重新归一化；数据完整度是 TeraScore 中（按权重）有数据支撑的比例。只有当某维度至少一半权重的指标可用时，才对该维度评分。",
  "partial": "部分分析。当公司财报缺少某部分分析所需的数据时，该部分不计入：不按零分计算，其他部分的权重按比例提高。数据完整度是 TeraScore 中（按权重）有数据支撑的比例；当某个领域无法评分或完整度低于 80% 时，列表会在 TeraScore 旁标注 ◐ 和百分比，公司页面会列出缺失的领域。可评分领域少于 5 个时没有 TeraScore（“数据很少”）；尚无年报的公司显示为“无分析”或“新上市”。",
  "estimates": "估算数据。当公司未报告营业利润一项时，营业利润（EBIT）近似为税前利润加利息费用（银行和保险公司除外）。从未报告任何借款或利息费用、且非流动负债低于资产 15% 的公司视为无负债。公司页面会列出此类估算；原始数据显示报告的数字。",
  "bands": "等级区间：",
  "profiles": "银行、保险公司和券商（金融类型）以及 REIT（房地产类型）使用调整后的指标和阈值评分，与一般情况不同之处见下文。",
  "overall": "TeraScore（总分）",
  "overallText": "九个基本面维度的加权平均：",
  "riskTitle": "风险",
  "distressTitle": "财务困境风险",
  "distressText": "计分：Altman Z'' 困境区 +3 / 灰色区 +1；股东权益为负且自由现金流不为正 +2；自由现金流为负 +1；净亏损 +1；利息保障倍数 < 1.5 倍 +2；有净负债但 EBITDA 不为正 +1；股东权益比率 < 5%（金融类）+2。2–3 分 = 偏高，4 分及以上 = 高。",
  "trendTitle": "长期趋势",
  "trendText": "70% 长期增长 + 30% 上一年增长，并根据营业利润率趋势调整最多 ±5 分。≥ 65 改善中，40–64 稳定，< 40 恶化中。描述的是过去，而非预测。",
  "stylesTitle": "投资风格",
  "stylesText": "优质：盈利能力 ≥ 70、稳定性 ≥ 70、资产负债表 ≥ 60、无严重警示。成长：长期增长 ≥ 70。价值：估值 ≥ 65。收益：股息率 ≥ 2% 且被自由现金流覆盖。投机：有严重警示或多数年份亏损。",
  "sectorTitle": "行业比较",
  "sectorText": "每项评分还会与同一行业所有已分析公司进行排名（百分位）。",
  "limitsTitle": "局限性",
  "limitsText": "评分仅依据报告的财务数据和市场价格，不反映管理质量、竞争地位、新闻或业绩指引。不构成投资建议。",
  "logosText": "公司标志来自 Financial Modeling Prep 的公开标志图片。它们是各公司的商标，仅用于识别公司；没有标志的公司显示其首字母。",
  "profileGeneral": "一般",
  "profileFinancial": "金融",
  "profileRealEstate": "房地产",
  "eventsTitle": "重大公司事件（8-K）",
  "eventsText": "重大事件取自过去 12 个月向 SEC 提交的 8-K 表格，只保留高影响的事项类型。破产（1.03）和财报重述（4.02）为严重警示；债务提前到期（2.04）、退市通知（3.01）和更换审计师（4.01）为一般警示，所有这些都会提高风险和财务困境评分。",
  "relativeTitle": "相对行业的评分",
  "relativeText": "利润率、回报率、资本结构、流动性和估值倍数在很大程度上取决于行业。对于这些指标，评分 50% 为绝对评分（上述阈值），50% 为相对评分：公司在成熟同行（市值 ≥ 3 亿美元、营收 ≥ 5000 万美元、至少 20 家同行）第 10 至第 90 百分位之间的位置。每项指标旁显示行业中位数。增长、稳定性和风险指标只使用绝对阈值。",
  "insiderText": "来自 SEC 过去 12 个月的季度 Form 4 数据集。只计算公开市场买入和卖出。至少两位内部人合计买入 10 万美元或以上视为优势；10b5-1 计划之外的卖出超过市值 1% 视为警示。",
  "currencyTitle": "外国公司与货币",
  "currencyText": "在美国上市的外国公司（20-F / 40-F 表格，IFRS）以其报告货币进行分析；比率与货币无关。估值时，美元市值按欧洲央行参考汇率换算（欧洲央行未公布的货币使用其他来源）。外国私人发行人不提交季度 XBRL 报告，因此其估值使用最近一个财年的数据。",
  "historyText": "“TeraScore 变化”按每个财年末对每家公司评分，只使用当时可获得的信息：截至该年的年报、此前 12 个月的 8-K 事件以及当日股价（市值根据今日市值、价格变化和股本变化估算）。过去年份不使用 TTM 数据、内部人数据和当前市场数据，所有年份都使用今天的行业基准。此外，每次周一更新都会保存当前 TeraScore 的快照；4 周和 13 周的变化与至少这么久之前的最新快照比较。",
  "peersText": "同类公司取自同一行业。每个候选公司的距离为对数市值之差，若属于不同细分行业，再加上相当于 4.5 倍规模差距的惩罚，因此同一细分行业、规模相近的公司排在前面，而最大的公司与其行业中最大的公司配对。只包含已评分的公司，每家公司只取一种股票类别。",
  "dividendText": "股息安全性评估当前股息得以维持的可能性，分数 0 到 100：75 分或以上为安全，55–74 为中等，35–54 为有风险，低于 35 为不安全。没有数据的部分不计入，其余权重重新调整。",
  "portfolioText": "投资组合的 TeraScore、风险和股息率是按持仓价值加权的平均值；市盈率是总价值除以持仓对应的盈利（不含亏损公司）。警示：单一持仓超过 {p}、单一行业超过 {s}、持仓少于 {n} 个、严重警示、财务困境风险高以及 TeraScore 偏低。",
  "quarterlyText": "季度数据涵盖来自 10-Q 和 10-K 的最近 12 个季度。流量数据为三个月金额：直接报告的，或由年初至今的数据推算；第四季度为全年金额减去前九个月。每股数据和股数只在按三个月报告时显示，并按之后的拆股调整。资产负债表项目为季度末的数据。",
  "portfolioEtfText": "也可以添加 ETF（交易所交易基金）：按每日价格估值，没有 TeraScore，也不参与持仓、行业和持仓数量的检查，因为基金本身已经分散。股息率取自纳斯达克公布的数据；如未公布，可手动输入。",
  "zero": "0 分",
  "hundred": "100 分"
 }
};
