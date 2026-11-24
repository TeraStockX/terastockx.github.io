// Portuguese.
export default {
 "meta": {
  "name": "Português",
  "short": "PT",
  "locale": "pt-BR"
 },
 "ui": {
  "classTitle": "A empresa tem várias classes de ações listadas, que diferem principalmente no direito a voto. Os números financeiros e o TeraScore são os mesmos para todas.",
  "classNonVoting": "Sem direito a voto",
  "classVoting": "Com direito a voto",
  "classLetter": "Classe {c}",
  "slogan": "A ferramenta inteligente do investidor.",
  "notApplicable": "não se aplica",
  "bdMissing": "◐ = área que não pôde ser pontuada por falta de dados: conta como um {s} neutro, ou como a média das outras áreas da empresa se esta for menor, de modo que dados ausentes nunca elevam a nota.",
  "bdNote": "Partindo de 50, cada área soma ou subtrai seu peso × (sua nota − 50); a soma é o TeraScore ({s}, arredondado).",
  "bdMissingShort": "sem dados → {s}",
  "bdLowers": "Reduzem",
  "bdLifts": "Elevam",
  "bdTitle": "O que eleva e o que reduz o TeraScore?",
  "basis3y": "base de 3 anos",
  "netCashLoss": "caixa líquido, com prejuízo: {s} pts",
  "runwayCap": "limita a liquidez enquanto a empresa queima caixa",
  "capLabel": "limite",
  "yearsUnit": "{n} anos",
  "pfCurrency": "Moeda",
  "pfAllocTitle": "Alocação",
  "pfByHolding": "Por ativo",
  "pfByCurrency": "Por moeda de negociação",
  "pfHistTitle": "Evolução da carteira",
  "pfHistLoading": "Carregando o histórico de preços…",
  "pfHistValue": "Valor das posições atuais",
  "pfHistValueSub": "Mensal, últimos dois anos, em {c} (preços estrangeiros ao câmbio de hoje).",
  "pfHistMissing": "Sem histórico de preços, não incluídos: {list}.",
  "pfHistScoreWeekly": "TeraScore da carteira, semana a semana",
  "pfHistScoreYearly": "TeraScore da carteira, por ano fiscal",
  "pfHistScoreSub": "Empresas ponderadas pelo valor de hoje (ETFs não têm TeraScore).",
  "etfAcc": "acumulação",
  "etfDist": "distribuição",
  "cmpPartialNote": "Faltam dados nos documentos destas empresas, por isso a análise é parcial e as notas são menos confiáveis: {list}. Áreas marcadas como “sem dados” contam no máximo como um 50 neutro, de modo que dados ausentes nunca elevam o TeraScore.",
  "showMore": "Mostrar mais",
  "tagline": "Análise fundamentalista, com clareza.",
  "heroText": "Todas as empresas listadas na Nasdaq, NYSE, NYSE American e Cboe avaliadas em dez dimensões de investimento — rentabilidade, qualidade do fluxo de caixa, solidez do balanço, crescimento, valuation e risco — com base em documentos auditados enviados à SEC e comparadas com empresas do mesmo setor.",
  "navCompanies": "Empresas",
  "navCompare": "Comparar",
  "navMethod": "Metodologia",
  "language": "Idioma",
  "searchPlaceholder": "Buscar ticker ou nome da empresa (ex.: AAPL, Apple)",
  "allSectors": "Todos os setores",
  "onlyAnalyzed": "Empresas analisadas",
  "allCompanies": "Todas as empresas",
  "watchlist": "Favoritos",
  "results": "{n} resultados",
  "analyzedOf": "{a} analisadas / {n} empresas",
  "updated": "Atualizado em {d}",
  "company": "Empresa",
  "noData": "sem dados",
  "noResults": "Nenhuma empresa corresponde à sua busca.",
  "prev": "Anterior",
  "next": "Próxima",
  "demoBadge": "DEMO",
  "demoNote": "Empresas marcadas como DEMO mostram números de exemplo aproximados até que o atualizador carregue os dados oficiais da SEC.",
  "back": "Voltar à lista",
  "tabAnalysis": "Análise",
  "tabRaw": "Demonstrações financeiras",
  "demoNotice": "Dados de demonstração: números de exemplo aproximados. O atualizador os substitui pelos documentos oficiais da SEC.",
  "notFound": "Nenhuma empresa encontrada para o ticker {t}.",
  "lastFy": "Último ano fiscal: {y}",
  "ttmBasis": "Valuation com números dos últimos doze meses (12M) até {d}",
  "annualBasis": "Valuation com números do último ano fiscal",
  "overallScore": "TeraScore",
  "risk": "Risco",
  "distress": "Risco de insolvência",
  "trend": "Tendência de longo prazo",
  "coverage": "Completude dos dados",
  "watchEmpty": "Seus favoritos estão vazios. Toque na estrela ☆ na linha de qualquer empresa para adicioná-la aqui.",
  "now": "Agora",
  "today": "Hoje",
  "yesterday": "Ontem",
  "updatedLabel": "Atualizado",
  "searchFuzzy": "Nenhuma correspondência exata para “{q}”. Nomes semelhantes:",
  "years": "{n} anos",
  "marketCap": "Valor de mercado",
  "price": "Preço",
  "sector": "Setor",
  "industry": "Segmento",
  "sectionScores": "Painel de notas",
  "sectionFlags": "Alertas e pontos fortes",
  "sectionCharts": "Desempenho histórico",
  "sectionKey": "Indicadores principais",
  "howCalculated": "Detalhes do cálculo",
  "weight": "peso",
  "points": "pts",
  "notScored": "n/d",
  "sectorRank": "Melhor que {p}% de {s}",
  "sectorRankShort": "Top {p}% do setor",
  "riskExplain": "Risco = 100 − nota de segurança. A segurança é {f}% fundamentos (balanço {bs}%, consistência {co}%, fluxo de caixa {cf}%, rentabilidade {pr}%, liquidez {li}%) e {m}% a volatilidade e a maior queda da cotação (quando há histórico de preços). Os alertas elevam o risco ({c} pontos por alerta crítico e {w} por outro alerta) numa curva saturante: cada ponto fecha uma parte da distância restante até 100, de modo que as empresas mais arriscadas ainda se diferenciam entre si.",
  "noFlags": "Nenhum alerta relevante.",
  "critical": "Crítico",
  "warningTag": "Alerta",
  "strength": "Ponto forte",
  "footer": "O TeraStockX calcula todas as notas a partir das demonstrações financeiras públicas enviadas à SEC. As notas descrevem fundamentos históricos; não são recomendação de investimento nem preveem cotações.",
  "engine": "Motor v{v}. Notas calculadas a partir de dados históricos divulgados publicamente; não é recomendação de investimento.",
  "currencyNote": "Valores em {cur}.",
  "source": "Fonte",
  "retrieved": "obtido em {d}",
  "downloadCsv": "Baixar CSV",
  "downloadJson": "JSON (modelo)",
  "fiscalYear": "Ano fiscal",
  "ttm": "12M",
  "computedRatios": "Indicadores calculados",
  "addWatch": "Adicionar aos favoritos",
  "removeWatch": "Remover dos favoritos",
  "compareWith": "Comparar",
  "compareTitle": "Comparar empresas",
  "compareHint": "Selecione até seis empresas para comparar lado a lado.",
  "addCompany": "Adicionar empresa (nome ou ticker)…",
  "remove": "Remover",
  "dimension": "Dimensão",
  "metric": "Indicador",
  "chartRevenue": "Receita",
  "chartNetIncome": "Lucro líquido",
  "chartFcf": "Fluxo de caixa livre",
  "chartMargin": "Margem operacional",
  "chartPrice": "Cotação (mensal, ajustada)",
  "chartRevenueSub": "anual",
  "chartNetIncomeSub": "anual (vermelho = prejuízo)",
  "chartFcfSub": "fluxo de caixa operacional − capex",
  "chartMarginSub": "lucro operacional / receita",
  "chartPriceSub": "fechamentos mensais, últimos 6 anos",
  "notEnough": "Dados insuficientes.",
  "errorLoad": "Algo deu errado: {e}",
  "serveHint": "Se você abriu o arquivo diretamente, inicie um servidor web local (veja o README).",
  "profileFinancial": "Perfil de instituição financeira: os indicadores de liquidez, EBITDA e fluxo de caixa livre não se aplicam a bancos e seguradoras e são excluídos.",
  "profileRealEstate": "Perfil imobiliário: os limites de alavancagem e valuation são ajustados ao maior endividamento estrutural dos REITs.",
  "styles": "Perfil de investimento",
  "navNews": "Mercado e eventos",
  "navData": "Dados financeiros",
  "newsTitle": "Mercado e eventos",
  "newsIntro": "Eventos relevantes que empresas listadas nos EUA comunicaram oficialmente à SEC no Formulário 8-K nos últimos 12 meses: tipos de evento de alto impacto (falência, reapresentação de demonstrações, avisos de deslistagem, mudança de controle, aquisições, reestruturações, baixas contábeis, troca de auditor, incidentes de cibersegurança) e mudanças na liderança de grandes empresas; documentos de rotina são excluídos.",
  "newsEmpty": "Nenhum evento relevante nos dados atuais.",
  "viewFiling": "Ver documento",
  "sectionEvents": "Eventos relevantes (últimos 12 meses)",
  "eventsNone": "Nenhum evento relevante comunicado nos últimos 12 meses.",
  "latestEvents": "Eventos relevantes recentes",
  "allNews": "Todos os eventos relevantes",
  "dataTitle": "Dados financeiros",
  "dataIntro": "Demonstrações financeiras brutas no modelo TeraStockX: demonstração de resultados, fluxo de caixa e balanço patrimonial de até dez anos fiscais mais os últimos doze meses, com indicadores calculados. Baixe em CSV ou JSON.",
  "dataPick": "Selecione uma empresa (nome ou ticker)",
  "sev5": "Crítico",
  "sev4": "Grave",
  "sev3": "Significativo",
  "sev2": "Notável",
  "allSeverities": "Todos os tipos de evento",
  "onlyCritical": "Somente críticos e graves",
  "openAnalysis": "Abrir análise",
  "tabCompanies": "Ações",
  "tabNews": "Eventos",
  "tabData": "Dados",
  "tabCompare": "Comparar",
  "tabMethod": "Método",
  "newsTop": "Mais importantes (eventos críticos; eventos graves de empresas acima de US$ 1 bi)",
  "filters": "Filtros do screener",
  "filtersActive": "{n} ativos",
  "reset": "Limpar filtros",
  "minScore": "TeraScore mínimo",
  "maxRisk": "Risco máximo",
  "anyValue": "Qualquer",
  "minCap": "Valor de mercado mínimo",
  "minDividend": "Dividend yield mínimo",
  "exchange": "Bolsa",
  "allExchanges": "Todas as bolsas",
  "styleFilter": "Perfil de investimento:",
  "noCritical": "Sem alertas críticos",
  "pe": "P/L",
  "dividendYieldShort": "DY",
  "sectorMedian": "Mediana do setor",
  "insiderTitle": "Transações de insiders",
  "insiderBuys": "Compras no mercado aberto",
  "insiderSells": "Vendas no mercado aberto",
  "insiderNone": "Nenhuma compra ou venda de insiders no mercado aberto nos últimos 12 meses.",
  "insiderForeign": "Emissores privados estrangeiros estão dispensados do Formulário 4; não há dados de insiders.",
  "insiderPlanned": "Das quais sob planos de negociação 10b5-1",
  "insiderPeriod": "Formulários 4 da SEC, {from} – {to}. Somente compras (código P) e vendas (código S) no mercado aberto são mostradas; concessões, exercícios de opções e retenções de impostos são excluídos.",
  "insiderCount": "{n} transações · {p} insiders",
  "insiderDate": "Data",
  "insiderName": "Insider",
  "insiderType": "Transação",
  "insiderShares": "Ações",
  "insiderValue": "Valor",
  "insiderPurchase": "Compra",
  "insiderSale": "Venda",
  "insiderPlanTag": "Plano 10b5-1",
  "alertsTitle": "Alertas dos favoritos",
  "alertsSeen": "Marcar todos como vistos",
  "alertScore": "{t}: TeraScore mudou de {from} para {to}",
  "alertRisk": "{t}: risco subiu de {from} para {to}",
  "alertDistress": "{t}: risco de insolvência agora é {level}",
  "alertEvent": "{t}: novo evento relevante – {event} ({date})",
  "alertCritical": "{t}: novo alerta crítico – {flag}",
  "fxNote": "demonstrações em {cur}, convertidas a 1 {cur} = {rate} USD",
  "navTrend": "Variações do TeraScore",
  "tabTrend": "Variações",
  "trendIntro": "Como o TeraScore das empresas muda ao longo do tempo. A visão por ano fiscal avalia cada empresa no fim de cada ano fiscal, usando apenas o que se sabia na época (relatórios anuais, eventos 8-K dos 12 meses anteriores e a cotação naquela data). Instantâneos semanais são adicionados a cada atualização de segunda-feira, por isso as variações de 4 e 13 semanas aparecem após as primeiras semanas.",
  "trendPeriod": "Período",
  "trendPeriodFy": "Variação vs. ano fiscal anterior",
  "trendPeriod4w": "Variação em 4 semanas",
  "trendPeriod13w": "Variação em 13 semanas",
  "trendUp": "Maiores melhoras",
  "trendDown": "Maiores quedas",
  "trendChange": "Variação",
  "trendFrom": "de {v}",
  "trendWeeklyEmpty": "Os instantâneos semanais são coletados a cada atualização de segunda-feira; esta visão se completa após as primeiras semanas.",
  "trendNote": "As variações estão em pontos de TeraScore. As notas por ano fiscal aplicam as referências setoriais de hoje aos anos anteriores.",
  "trendAnnualChart": "TeraScore por ano fiscal",
  "trendAnnualSub": "nota da época, no fim de cada ano fiscal",
  "trendWeeklyChart": "TeraScore, semanal",
  "trendWeeklySub": "instantâneo de cada atualização de segunda-feira",
  "trendAll": "Todas as variações",
  "navPortfolio": "Carteira",
  "tabPortfolio": "Carteira",
  "addPortfolio": "Adicionar à carteira",
  "inPortfolio": "Na carteira",
  "pdfReport": "Relatório PDF",
  "minDivSafety": "Segurança do dividendo",
  "peersTitle": "Empresas semelhantes",
  "peersNone": "Não há empresas comparáveis com nota neste setor.",
  "peerMedian": "Mediana dos pares",
  "peersSub": "Os pares mais próximos em {s}, por segmento e porte da empresa.",
  "peersRank": "{t} ocupa a posição #{r} de {n} neste grupo pelo TeraScore.",
  "peersCompare": "Comparar em detalhe",
  "dividendTitle": "Dividendo",
  "dividendSafety": "Segurança do dividendo",
  "dividendYield": "Dividend yield",
  "dps": "Dividendo por ação",
  "dpsCagr": "Crescimento do dividendo (CAGR de 5 anos)",
  "yearsPaid": "Pago sem interrupção",
  "yearsN": "{n} anos",
  "yearsRaised": "Aumentos consecutivos",
  "dividendCuts": "Cortes (10 anos)",
  "earningsPayout": "Payout (lucro)",
  "fcfPayout": "Payout (fluxo de caixa livre)",
  "payoutUncovered": "não coberto",
  "dividendNone": "A empresa não paga dividendos.",
  "dividendNoneShort": "sem dividendo",
  "dividendNote": "O dividendo por ação é calculado como dividendos em dinheiro pagos divididos pelas ações diluídas, por isso dividendos extraordinários aparecem como saltos. O payout usa os últimos doze meses quando disponíveis.",
  "chartDps": "Dividendo por ação",
  "chartDpsSub": "dividendos em dinheiro pagos / ações diluídas",
  "period": "Período",
  "periodAnnual": "Anual",
  "periodQuarterly": "Trimestral",
  "quarterEnd": "Trimestre encerrado em",
  "quarterlyNote": "Números de três meses. Quando um trimestre é divulgado apenas como acumulado no ano, ele é o acumulado menos o do trimestre anterior; o quarto trimestre é o número anual menos os primeiros nove meses.",
  "quarterlyNone": "Não há números trimestrais disponíveis.",
  "quarterlyForeign": "Emissores privados estrangeiros enviam apenas relatórios anuais (20-F / 40-F); números trimestrais não estão disponíveis.",
  "pfIntro": "Informe suas posições para ver o TeraScore ponderado pelo valor, o risco, a renda de dividendos, a alocação por setor e os alertas de concentração da carteira. A carteira fica salva apenas neste navegador.",
  "pfAdd": "Adicionar",
  "pfFromWatch": "Adicionar favoritos (1 ação cada)",
  "pfNeedShares": "Informe a quantidade de ações.",
  "pfEmpty": "A carteira está vazia. Adicione acima uma empresa e a quantidade de ações.",
  "pfValue": "Valor da carteira",
  "pfScore": "TeraScore ponderado",
  "pfIncome": "Renda anual de dividendos",
  "pfPe": "P/L da carteira",
  "pfHoldings": "Posições",
  "pfSectors": "Alocação por setor",
  "pfOther": "Outros",
  "pfChecks": "Verificações da carteira",
  "pfOk": "Nenhum alerta de concentração ou qualidade.",
  "pfInfo": "Observação",
  "pfShares": "Ações",
  "pfPrice": "Preço",
  "pfValueCol": "Valor",
  "pfWeight": "Peso",
  "pfNote": "Preços e notas da última atualização de dados ({d}). Valores em {c}; ETFs europeus são cotados na própria moeda de negociação e convertidos ao câmbio de hoje.",
  "reportTitle": "Relatório da empresa",
  "printPdf": "Imprimir / salvar em PDF",
  "printHint": "Na janela de impressão, escolha “Salvar como PDF”.",
  "reportFinancials": "Resumo financeiro de cinco anos",
  "profile": "Perfil de investimento",
  "ratedCompanies": "Empresas com TeraScore",
  "installFooter": "Instalar o app",
  "installBanner": "Instale o TeraStockX como app no seu celular, tablet ou computador.",
  "installHow": "Como instalar",
  "close": "Fechar",
  "installTitle": "Instale o TeraStockX como app",
  "installIntro": "O TeraStockX pode ser instalado diretamente deste site, sem loja de apps e com um download mínimo. Depois ele abre pelo próprio ícone, em tela cheia, como qualquer outro app, e sempre mostra os dados mais recentes.",
  "installDone": "Você está usando o app instalado.",
  "installNow": "Instalar agora",
  "installYourDevice": "Seu dispositivo",
  "installIos": "iPhone e iPad",
  "installAndroid": "Android",
  "installDesktop": "Computador (Chrome, Edge)",
  "installNote": "O app é igual ao site: as atualizações de dados chegam automaticamente, e seus favoritos e sua carteira ficam neste dispositivo. Para removê-lo, exclua-o como qualquer outro app.",
  "pfAddPlaceholder": "Empresa ou ETF (nome ou ticker)…",
  "pfScoreCover": "cobre {p} da carteira",
  "pfEtfs": "ETFs",
  "etfExpense": "Taxa de administração {v}",
  "etfNoScore": "ETFs não têm TeraScore: um fundo não tem demonstrações financeiras próprias.",
  "etfYieldInput": "Dividend yield (%)",
  "etfNote": "ETFs não têm TeraScore; o TeraScore ponderado e o risco consideram apenas as empresas.",
  "etfYieldMissing": "A fonte de dados não publica dividend yield para {list}. Informe-o na coluna de yield (em %) para incluí-lo na renda de dividendos.",
  "screensTitle": "Buscas rápidas",
  "colChangeFy": "Variação",
  "filtersAndScreens": "Filtros e buscas rápidas",
  "maxPe": "P/L máx.",
  "minDrop": "Abaixo da máxima de 12 meses",
  "dropAtLeast": "pelo menos {p}",
  "colFromHigh": "Da máxima",
  "contact": "Contato",
  "marketToday": "Mercado hoje",
  "marketMore": "Mercado e eventos",
  "eventsTitle": "Eventos corporativos relevantes (8-K)"
 },
 "pulse": {
  "themes": {
   "ai": "Ações de IA",
   "bigTech": "Big Techs",
   "semis": "Semicondutores",
   "banks": "Bancos",
   "energy": "Petróleo e gás",
   "crypto": "Ações cripto"
  },
  "hlIndex": "{n} {v} hoje",
  "hlTheme": "{n} {v} hoje (melhor {b}, pior {w})",
  "hlUp": "{n} sobe {v} hoje",
  "hlDown": "{n} cai {v} hoje",
  "hlReport": "{n} publicou seu {f} ({form})",
  "annualReport": "relatório anual",
  "quarterlyReport": "relatório trimestral",
  "hlScore": "O TeraScore de {n} mudou {v} pontos (agora {o})",
  "hlListing": "Novidade no mercado: {n}",
  "none": "Nada para mostrar hoje.",
  "notYet": "O resumo do mercado aparece após a próxima atualização de dados.",
  "bestWorst": "melhor {b} · pior {w}",
  "asOf": "Preços: {d} (com atraso de cerca de 15 minutos). Em dias úteis, preços, TeraScores, notícias e novos relatórios são atualizados a cada 5 minutos durante o pregão dos EUA e a cada 10 minutos antes e depois.",
  "headlines": "Grandes movimentos de hoje",
  "themesTitle": "Temas (variação de hoje ponderada pelo valor de mercado)",
  "sectorsTitle": "Setores hoje",
  "gainers": "Maiores altas (a partir de US$ 2 bi)",
  "losers": "Maiores baixas (a partir de US$ 2 bi)",
  "today": "Hoje",
  "reports": "Novos relatórios trimestrais e anuais",
  "filed": "Enviado",
  "scoreMoves": "Grandes variações do TeraScore desde ontem",
  "newListings": "Novidades no mercado",
  "listed": "Listada",
  "note": "Variações desde o fechamento anterior. Temas e setores são ponderados pelo valor de mercado. As variações do TeraScore comparam com a nota do dia anterior. Durante o pregão, a variação do dia aparece para empresas acima de cerca de US$ 2 bilhões e para os maiores fundos; para as menores, após a atualização diária.",
  "noFilings": "Ainda sem relatórios financeiros na SEC",
  "notScoredYet": "Ainda sem nota",
  "notScoredText": "Um TeraScore exige pelo menos um relatório anual (10-K ou 20-F). Empresas recém-listadas recebem nota após o primeiro relatório anual; até lá, mostram-se o preço, o valor de mercado e os números trimestrais disponíveis.",
  "lastReport": "Último relatório",
  "storiesTitle": "Destaques",
  "storiesNote": "Anúncios importantes e grandes variações de preço de grandes empresas (valor de mercado acima de US$ 10 bilhões) nos últimos dias. As manchetes vêm dos próprios documentos das empresas enviados à SEC, no inglês original.",
  "kind": {
   "leadership": "Mudança na liderança",
   "deal": "Fusão ou aquisição",
   "results": "Resultados",
   "critical": "Evento crítico",
   "major": "Evento grave",
   "restructuring": "Reestruturação",
   "cyber": "Incidente de cibersegurança",
   "board": "Mudança no conselho",
   "other": "Comunicado",
   "move": "Grande variação de preço"
  },
  "when": {
   "pre": "pré-mercado",
   "post": "after-market",
   "day": "hoje",
   "last": "último pregão"
  },
  "preNote": "Antes da abertura: as variações diárias abaixo são as do pregão anterior ({d}). Os movimentos de pré-mercado das grandes empresas estão em Destaques.",
  "postNote": "Após o fechamento: as variações diárias abaixo são as do pregão de hoje; os movimentos de after-market das grandes empresas estão em Destaques.",
  "readMore": "Comunicado à imprensa (SEC)",
  "extLabel": "{w}: {p}",
  "storiesNone": "Nenhuma grande notícia de grandes empresas no momento.",
  "moreNews": "Todas as notícias",
  "asOfShort": "Preços: {d}, com atraso de cerca de 15 minutos",
  "themesShort": {
   "ai": "IA"
  }
 },
 "screens": {
  "top": {
   "name": "Maior TeraScore",
   "desc": "Todas as empresas com nota, maior TeraScore primeiro."
  },
  "bestRiskReward": {
   "name": "Melhor nota, menor risco",
   "desc": "TeraScore de pelo menos 70 e risco de no máximo 30, sem alerta crítico, valor de mercado a partir de US$ 300 mi; ordenadas por TeraScore menos risco."
  },
  "safeLongTerm": {
   "name": "Mais seguras para o longo prazo",
   "desc": "TeraScore ≥ 65, risco ≤ 25, consistência ≥ 70, solidez do balanço ≥ 60, baixo risco de insolvência, sem alerta crítico, valor de mercado a partir de US$ 2 bi; ordenadas por baixo risco, consistência e balanço."
  },
  "lowRisk": {
   "name": "Menor risco",
   "desc": "Risco de no máximo 20 e nenhum alerta crítico; menor risco primeiro."
  },
  "improvers": {
   "name": "Maior melhora no último ano",
   "desc": "TeraScore pelo menos 10 pontos acima do ano fiscal anterior, valor de mercado a partir de US$ 300 mi; maior alta primeiro."
  },
  "growth": {
   "name": "Crescimento rápido",
   "desc": "Crescimento no último ano fiscal ≥ 75 e crescimento de longo prazo ≥ 70, com TeraScore de pelo menos 55, valor de mercado a partir de US$ 300 mi."
  },
  "value": {
   "name": "Qualidade descontada",
   "desc": "Nota de valuation ≥ 70 (barata em relação ao lucro e ao fluxo de caixa), TeraScore ≥ 65, rentabilidade ≥ 60, sem alerta crítico, valor de mercado a partir de US$ 300 mi."
  },
  "dividend": {
   "name": "Dividendos seguros",
   "desc": "Segurança do dividendo ≥ 75 e dividend yield de pelo menos 2,5%, valor de mercado a partir de US$ 300 mi; maior yield primeiro."
  },
  "largeQuality": {
   "name": "Grandes empresas de qualidade",
   "desc": "Valor de mercado de pelo menos US$ 50 bi e TeraScore de pelo menos 70."
  },
  "highRisk": {
   "name": "Alto risco",
   "desc": "Risco de pelo menos 70, ou alto risco de insolvência com risco de pelo menos 55, valor de mercado a partir de US$ 300 mi; mais arriscadas primeiro. Ações especulativas: cautela."
  },
  "decliners": {
   "name": "Maior queda no último ano",
   "desc": "TeraScore pelo menos 10 pontos abaixo do ano fiscal anterior, valor de mercado a partir de US$ 300 mi; maior queda primeiro."
  },
  "dip": {
   "name": "Abaixo da máxima, mais barata agora",
   "desc": "Empresas de qualidade (TeraScore ≥ 65, risco ≤ 40, sem alerta crítico, valor de mercado a partir de US$ 300 mi) cuja cotação está 20–50% abaixo da máxima de 12 meses (fechamentos mensais); melhor TeraScore primeiro. Quedas maiores ficam de fora: costumam sinalizar problemas mais do que desconto."
  },
  "lowPe": {
   "name": "P/L baixo",
   "desc": "Empresas lucrativas com P/L de 3–12 cuja nota de valuation também é de pelo menos 60 (EV/EBIT e o rendimento do fluxo de caixa confirmam que é barata), TeraScore ≥ 60, consistência ≥ 50, sem alerta crítico, valor de mercado a partir de US$ 300 mi. Um P/L abaixo de 3 costuma vir de um ganho não recorrente e fica de fora."
  }
 },
 "install": {
  "benefit1": "Ícone próprio na tela inicial, ao lado dos seus outros apps",
  "benefit2": "Abre em tela cheia, sem a barra de endereço do navegador",
  "benefit3": "Inicia mais rápido, e as últimas empresas vistas abrem até offline",
  "benefit4": "Atualiza-se sozinho: sem reinstalar, sem loja de apps",
  "iphone1": "Abra esta página no Safari.",
  "iphone2": "Toque no botão Compartilhar (o quadrado com uma seta para cima) – no iPhone embaixo, no iPad no canto superior direito.",
  "iphone3": "Role para baixo e toque em “Adicionar à Tela de Início”.",
  "iphone4": "Toque em “Adicionar” no canto superior direito. O ícone do TeraStockX aparece na tela inicial.",
  "android1": "Abra esta página no Chrome.",
  "android2": "Toque em “Instalar agora” acima, ou abra o menu (⋮) no canto superior direito.",
  "android3": "Escolha “Instalar app” (ou “Adicionar à tela inicial”).",
  "android4": "Confirme com “Instalar”. O app aparece entre seus apps e na tela inicial.",
  "desktop1": "Abra esta página no Chrome ou no Edge.",
  "desktop2": "Clique em “Instalar agora” acima, ou no ícone de instalação no fim da barra de endereço.",
  "desktop3": "Confirme com “Instalar”.",
  "desktop4": "O TeraStockX abre em janela própria e pode ser iniciado pelo menu Iniciar, pelo Dock ou pelo Launchpad."
 },
 "dividend": {
  "safe": "Seguro",
  "moderate": "Moderado",
  "risky": "Em risco",
  "unsafe": "Inseguro",
  "na": "Sem nota",
  "safeText": "Bem coberto pelo lucro e pelo fluxo de caixa livre, com um histórico sólido.",
  "moderateText": "Coberto, mas com pouca folga; uma desaceleração poderia pressioná-lo.",
  "riskyText": "A cobertura é estreita ou o balanço está pressionado; um corte é uma possibilidade real.",
  "unsafeText": "Não coberto pelo lucro nem pelo fluxo de caixa, ou cortado recentemente; um novo corte é provável.",
  "naText": "Dados insuficientes para uma nota.",
  "parts": {
   "priceStability": "Estabilidade da cotação",
   "fcfPayout": "Cobertura pelo fluxo de caixa livre",
   "earningsPayout": "Cobertura pelo lucro",
   "leverage": "Alavancagem",
   "trackRecord": "Histórico",
   "stability": "Estabilidade do lucro"
  },
  "partsText": {
   "priceStability": "A nota de risco de mercado (volatilidade e maior queda da cotação): uma queda forte costuma vir antes de um corte de dividendo.",
   "fcfPayout": "Dividendos pagos / fluxo de caixa livre: 100 pontos com 40% ou menos (REITs: 80%), 0 pontos com 120% ou mais (REITs: 130%) ou com fluxo de caixa livre negativo.",
   "earningsPayout": "Dividendos pagos / lucro líquido: 100 pontos com 50% ou menos, 0 pontos com 150% ou mais ou com prejuízo. Não avaliado para REITs.",
   "leverage": "Dívida líquida / EBITDA: 100 pontos com 1× ou menos, 0 pontos com 5× ou mais. Não avaliado para bancos, seguradoras e REITs.",
   "trackRecord": "Anos pagos sem interrupção (60%) e aumentos consecutivos (40%), até 10 anos; menos 35 pontos por cada corte de mais de 10% nos últimos 10 anos.",
   "stability": "Proporção de anos lucrativos nos últimos cinco."
  }
 },
 "pw": {
  "position": "{t} representa {w} da carteira (acima de {l}).",
  "sector": "{s} representa {w} da carteira (acima de {l}).",
  "few": "Apenas {n} posições: menos de {m} posições deixam a carteira exposta ao risco de uma única empresa.",
  "critical": "Alerta crítico: {list}.",
  "distress": "Alto risco de insolvência: {list}.",
  "weak": "TeraScore abaixo de {s}: {list}.",
  "unscored": "Sem nota (dados insuficientes): {list}."
 },
 "ocr": {
  "button": "A partir de uma captura de tela",
  "loading": "Carregando o reconhecimento de texto (uma única vez, cerca de 7 MB)…",
  "reading": "Lendo a imagem… {p}%",
  "privacy": "A imagem não sai do seu dispositivo: ela é lida no seu navegador.",
  "found": "Posições reconhecidas: {n}",
  "check": "Confira os tickers e as quantidades de ações, corrija se necessário e depois adicione.",
  "inPortfolio": "Na sua carteira agora: {n} ações (serão substituídas)",
  "add": "Adicionar à carteira",
  "cancel": "Cancelar",
  "close": "Fechar",
  "none": "Nenhuma ação foi encontrada na imagem. Tente uma captura de tela mais nítida e maior, em que o ticker ou o nome da empresa e a quantidade de ações apareçam claramente, ou adicione-as manualmente.",
  "failed": "O reconhecimento de texto falhou: {e}",
  "needShares": "Informe a quantidade de ações em todas as linhas marcadas.",
  "hint": "Dica: capturas de tela da lista de posições do app da sua corretora funcionam melhor; você pode selecionar várias de uma vez.",
  "readingN": "Lendo a imagem {i} de {n}… {p}%",
  "foundImages": "Posições reconhecidas: {n} (de {k} imagens)",
  "estimated": "≈ valor ÷ preço, confira"
 },
 "dq": {
  "partial": "Parcial",
  "partialTitle": "Análise parcial: {p}% do TeraScore se baseia em dados. Não avaliado por falta de dados (conta no máximo como 50): {d}.",
  "partialTitleParts": "Análise parcial: {p}% do TeraScore se baseia em dados; faltam vários indicadores.",
  "little": "Poucos dados",
  "littleTitle": "Dados insuficientes para um TeraScore: pelo menos 5 das 9 áreas precisam ser avaliáveis.",
  "none": "Sem análise",
  "noneTitle": "Ainda não há relatório anual com dados financeiros.",
  "newListing": "Nova listagem",
  "newTitle": "Listada recentemente: recebe um TeraScore após o primeiro relatório anual.",
  "newBadge": "NOVA",
  "legend": "“Parcial · 65%” = a análise está incompleta: só essa parte do TeraScore se baseia em dados. Marcado abaixo de 80%. Uma área sem dados conta no máximo como um {s} neutro, de modo que uma lacuna nunca eleva a nota, mas o resultado é menos confiável.",
  "noticePartialTitle": "Análise parcial: {p}% do TeraScore se baseia em dados.",
  "noticePartial": "Estas áreas não puderam ser avaliadas porque os documentos da empresa não trazem os dados: {d}. Elas contam como um {s} neutro, ou como a média das outras áreas da empresa se esta for menor, de modo que dados ausentes nunca elevam o TeraScore; a nota é menos confiável do que a de uma empresa totalmente analisada.",
  "noticePartialParts": "Alguns indicadores faltam nos documentos da empresa. Dentro de cada área eles ficam de fora e os pesos dos demais indicadores aumentam proporcionalmente, por isso o TeraScore é menos confiável do que o de uma empresa totalmente analisada.",
  "noticeLittle": "um TeraScore exige pelo menos 5 áreas avaliáveis; esta empresa tem {n}. As áreas que puderam ser avaliadas aparecem abaixo.",
  "estimated": "Estimado a partir de outros números divulgados: {list}.",
  "est": {
   "capex": "capex ≈ a relação usual entre capex e receita da empresa, ou a depreciação (a empresa só o divulga em um elemento XBRL próprio)",
   "operatingIncome": "lucro operacional ≈ lucro antes dos impostos (ou lucro líquido + imposto de renda) + despesa de juros (a empresa não divulga uma linha de lucro operacional)",
   "totalDebt": "dívida = 0 (nenhum empréstimo nem despesa de juros divulgados nos últimos dois anos)"
  },
  "partialShort": "Parcial · {p}%",
  "coverageBadge": "Análise {p}% completa (faltam alguns dados)",
  "partialMobile": "{p}% dos dados"
 },
 "dims": {
  "profitability": {
   "name": "Rentabilidade",
   "q": "Com que eficiência a empresa transforma receita e capital em lucro?",
   "summary": "Margem operacional {operatingMargin}, margem líquida {netMargin}, ROIC {roic}, ROE {roe}."
  },
  "cashFlow": {
   "name": "Qualidade do fluxo de caixa",
   "q": "O lucro divulgado é sustentado por caixa?",
   "summary": "Margem FCF {fcfMargin}; conversão em FCF de {fcfConversion} do lucro líquido; índice de accruals {accrualRatio}; remuneração em ações {sbcToRevenue} da receita."
  },
  "balanceSheet": {
   "name": "Solidez do balanço",
   "q": "Quanta alavancagem a empresa carrega em relação ao lucro e ao patrimônio?",
   "summary": "Dívida líquida/EBITDA {netDebtToEbitda}, dívida/patrimônio {debtToEquity}, cobertura de juros {interestCoverage}, Altman Z'' {altmanZ}."
  },
  "liquidity": {
   "name": "Liquidez",
   "q": "As obrigações de curto prazo podem ser cobertas com ativos de curto prazo?",
   "summary": "Liquidez corrente {currentRatio}, liquidez seca {quickRatio}, liquidez imediata {cashRatio}."
  },
  "growth1y": {
   "name": "Crescimento (último ano fiscal)",
   "q": "Ritmo anual de vendas, lucro e fluxo de caixa.",
   "summary": "Receita {revenueYoY}, lucro operacional {operatingIncomeYoY}, LPA {epsYoY}, fluxo de caixa livre {fcfYoY} em relação ao ano anterior."
  },
  "growthLong": {
   "name": "Crescimento de longo prazo",
   "q": "Crescimento composto em até cinco anos.",
   "summary": "CAGR de {windowYears} anos: receita {revenueCagr}, LPA {epsCagr}, FCF {fcfCagr}, valor patrimonial por ação {bookValuePerShareCagr}."
  },
  "consistency": {
   "name": "Consistência",
   "q": "Quão previsíveis e resilientes são os resultados?",
   "summary": "Lucrativa em {profitableYearsRatio} dos anos, FCF positivo em {fcfPositiveRatio}; volatilidade do crescimento da receita {revenueVolatility}; Piotroski F-score {piotroski}."
  },
  "capitalAllocation": {
   "name": "Alocação de capital",
   "q": "Quão bem o capital é devolvido aos acionistas e reinvestido?",
   "summary": "Número de ações {shareChangeYearly} ao ano; shareholder yield {shareholderYield}; payout de {payoutRatio} do FCF; variação do ROIC {roicChange}."
  },
  "valuation": {
   "name": "Valuation",
   "q": "Quão cara está a ação em relação aos fundamentos?",
   "summary": "P/L {peRatio}, EV/EBIT {evToEbit}, FCF yield {fcfYield}, P/Receita {psRatio}, PEG {pegRatio}."
  },
  "risk": {
   "name": "Risco",
   "q": "Risco geral do investimento (quanto menor, melhor).",
   "summary": "Risco de insolvência: {distress}. Volatilidade anualizada {volatility}; queda máxima (5 anos) {maxDrawdown}."
  },
  "marketRisk": {
   "name": "Risco de mercado",
   "q": "",
   "summary": ""
  }
 },
 "grades": {
  "excellent": "Excelente",
  "strong": "Forte",
  "moderate": "Moderado",
  "weak": "Fraco",
  "poor": "Ruim",
  "na": "Sem dados"
 },
 "riskGrades": {
  "excellent": "Muito baixo",
  "strong": "Baixo",
  "moderate": "Moderado",
  "weak": "Alto",
  "poor": "Muito alto",
  "na": "Sem dados"
 },
 "distress": {
  "low": "Baixo",
  "medium": "Elevado",
  "high": "Alto",
  "lowText": "Nenhum sinal de dificuldade financeira nos dados atuais.",
  "mediumText": "Alguns sinais de alerta; a situação merece acompanhamento.",
  "highText": "Vários indicadores apontam para dificuldades financeiras relevantes."
 },
 "outlook": {
  "up": "Melhorando",
  "flat": "Estável",
  "down": "Piorando",
  "unknown": "Histórico insuficiente",
  "upText": "Os fundamentos melhoraram de forma constante nos últimos anos.",
  "flatText": "Os fundamentos ficaram, em geral, estáveis.",
  "downText": "Os fundamentos pioraram nos últimos anos.",
  "unknownText": "São necessários pelo menos três anos fiscais."
 },
 "verdict": {
  "excellent": "Fundamentos excepcionalmente fortes na maioria das dimensões.",
  "strong": "Empresa financeiramente saudável, com fundamentos sólidos.",
  "moderate": "Perfil fundamentalista misto, com pontos fortes e fracos claros.",
  "weak": "Fundamentos fracos; recomenda-se cautela redobrada.",
  "poor": "Fraquezas fundamentais graves.",
  "na": "Dados insuficientes para uma avaliação geral."
 },
 "styles": {
  "quality": "Qualidade",
  "growth": "Crescimento",
  "value": "Valor",
  "income": "Renda",
  "speculative": "Especulativa"
 },
 "sectors": {
  "technology": "Tecnologia",
  "healthcare": "Saúde",
  "financials": "Financeiro",
  "realEstate": "Imobiliário",
  "consumerDiscretionary": "Consumo discricionário",
  "consumerStaples": "Consumo básico",
  "industrials": "Industrial",
  "energy": "Energia",
  "utilities": "Utilidades públicas",
  "communication": "Serviços de comunicação",
  "materials": "Materiais básicos",
  "shell": "Empresas de fachada / SPACs",
  "other": "Outros"
 },
 "metrics": {
  "cashRunway": [
   "Fôlego de caixa",
   "Anos em que os ativos líquidos (caixa, ou ativo circulante menos estoques e contas a receber) financiariam o fluxo de caixa livre negativo atual. Limita a nota de liquidez: 0,75 ano ou menos = 0 pontos, 3 anos ou mais = 100."
  ],
  "grossMargin": [
   "Margem bruta",
   "Lucro bruto / receita."
  ],
  "operatingMargin": [
   "Margem operacional",
   "Lucro operacional (EBIT) / receita."
  ],
  "netMargin": [
   "Margem líquida",
   "Lucro líquido / receita."
  ],
  "fcfMargin": [
   "Margem FCF",
   "Fluxo de caixa livre (fluxo de caixa operacional − capex) / receita."
  ],
  "roe": [
   "Retorno sobre o patrimônio (ROE)",
   "Lucro líquido / patrimônio líquido médio. Não avaliado quando o patrimônio é negativo."
  ],
  "roa": [
   "Retorno sobre os ativos (ROA)",
   "Lucro líquido / ativo total médio."
  ],
  "roic": [
   "Retorno sobre o capital investido (ROIC)",
   "NOPAT (EBIT × (1 − alíquota efetiva de imposto)) / capital investido médio (patrimônio + dívida − caixa)."
  ],
  "fcfConversion": [
   "Conversão em FCF",
   "Fluxo de caixa livre / lucro líquido. Com prejuízo líquido, um FCF positivo vale 60 pontos."
  ],
  "accrualRatio": [
   "Índice de accruals",
   "(Lucro líquido − fluxo de caixa operacional) / ativo total médio. Valores altos indicam lucro não sustentado por caixa."
  ],
  "sbcToRevenue": [
   "Remuneração em ações / receita",
   "Remuneração não monetária que dilui os acionistas."
  ],
  "capexToRevenue": [
   "Intensidade de capex",
   "Capex / receita."
  ],
  "currentRatio": [
   "Liquidez corrente",
   "Ativo circulante / passivo circulante."
  ],
  "quickRatio": [
   "Liquidez seca",
   "(Ativo circulante − estoques) / passivo circulante."
  ],
  "cashRatio": [
   "Liquidez imediata",
   "Caixa e equivalentes / passivo circulante."
  ],
  "debtToEquity": [
   "Dívida / patrimônio",
   "Dívida financeira / patrimônio líquido. Patrimônio negativo vale 0."
  ],
  "equityRatio": [
   "Índice de patrimônio",
   "Patrimônio líquido / ativo total."
  ],
  "liabilitiesToAssets": [
   "Passivo / ativo",
   "Passivo total / ativo total."
  ],
  "netDebt": [
   "Dívida líquida",
   "Dívida financeira − caixa. Negativo = caixa líquido."
  ],
  "netDebtToEbitda": [
   "Dívida líquida / EBITDA",
   "Anos de EBITDA necessários para pagar a dívida líquida. Caixa líquido vale 100 quando o EBITDA é positivo e 50 quando não é (o caixa está sendo consumido); dívida líquida com EBITDA negativo vale 0."
  ],
  "interestCoverage": [
   "Cobertura de juros",
   "EBIT / despesa de juros. Sem despesa de juros vale 100."
  ],
  "goodwillToAssets": [
   "Ágio e intangíveis / ativo",
   "Parte do ativo vinda de aquisições; sujeita a baixas contábeis."
  ],
  "payoutRatio": [
   "Payout (do FCF)",
   "Dividendos pagos / fluxo de caixa livre. Não avaliado se não há pagamento de dividendos."
  ],
  "bookValuePerShare": [
   "Valor patrimonial por ação",
   "Patrimônio líquido / ações em circulação."
  ],
  "altmanZ": [
   "Altman Z''-score",
   "6,56·(capital de giro/ativo) + 3,26·(lucros retidos/ativo) + 6,72·(EBIT/ativo) + 1,05·(patrimônio/passivo). < 1,1 dificuldade, > 2,6 seguro."
  ],
  "piotroski": [
   "Piotroski F-score",
   "Nove testes binários de rentabilidade, alavancagem, liquidez e eficiência operacional (0–9)."
  ],
  "revenueYoY": [
   "Crescimento da receita (anual)",
   "Variação em relação ao ano fiscal anterior."
  ],
  "operatingIncomeYoY": [
   "Crescimento do lucro operacional (anual)",
   "Variação em relação ao ano fiscal anterior; indefinido a partir de uma base negativa."
  ],
  "netIncomeYoY": [
   "Crescimento do lucro líquido (anual)",
   "Variação em relação ao ano fiscal anterior; indefinido a partir de uma base negativa."
  ],
  "epsYoY": [
   "Crescimento do LPA (anual)",
   "Lucro diluído por ação em relação ao ano anterior. 0 pontos se o último ano teve prejuízo."
  ],
  "fcfYoY": [
   "Crescimento do FCF (anual)",
   "Fluxo de caixa livre em relação ao ano anterior."
  ],
  "revenueCagr": [
   "CAGR da receita",
   "Taxa de crescimento anual composta em até cinco anos."
  ],
  "epsCagr": [
   "CAGR do LPA",
   "Crescimento anual composto do LPA diluído em até cinco anos."
  ],
  "fcfCagr": [
   "CAGR do FCF",
   "Crescimento anual composto do fluxo de caixa livre em até cinco anos."
  ],
  "bookValuePerShareCagr": [
   "CAGR do valor patrimonial por ação",
   "Crescimento anual composto do patrimônio por ação."
  ],
  "revenueGrowthYearsRatio": [
   "Anos com crescimento da receita",
   "Proporção de anos do período com receita maior que a do ano anterior."
  ],
  "marginTrend": [
   "Variação da margem operacional",
   "Variação da margem operacional do primeiro ao último ano do período (pontos percentuais)."
  ],
  "roicChange": [
   "Variação do ROIC",
   "Variação do ROIC do primeiro ao último ano do período (pontos percentuais)."
  ],
  "profitableYearsRatio": [
   "Anos lucrativos",
   "Proporção de anos do período com lucro líquido positivo."
  ],
  "fcfPositiveRatio": [
   "Anos com FCF positivo",
   "Proporção de anos do período com fluxo de caixa livre positivo."
  ],
  "revenueVolatility": [
   "Volatilidade do crescimento da receita",
   "Desvio padrão do crescimento anual da receita."
  ],
  "marginVolatility": [
   "Volatilidade da margem",
   "Desvio padrão da margem operacional (margem líquida para financeiras)."
  ],
  "shareChangeYearly": [
   "Variação do número de ações (anual)",
   "Positivo = diluição, negativo = recompras."
  ],
  "marketCap": [
   "Valor de mercado",
   "Cotação × ações em circulação."
  ],
  "enterpriseValue": [
   "Valor da firma (EV)",
   "Valor de mercado + dívida financeira − caixa."
  ],
  "peRatio": [
   "Preço / lucro (P/L)",
   "Valor de mercado / lucro líquido (12M). Prejuízo vale 0."
  ],
  "psRatio": [
   "Preço / receita (P/Receita)",
   "Valor de mercado / receita (12M)."
  ],
  "pbRatio": [
   "Preço / valor patrimonial (P/VP)",
   "Valor de mercado / patrimônio líquido."
  ],
  "evToEbit": [
   "EV / EBIT",
   "Valor da firma / lucro operacional (12M)."
  ],
  "evToEbitda": [
   "EV / EBITDA",
   "Valor da firma / EBITDA (12M)."
  ],
  "fcfYield": [
   "FCF yield",
   "Fluxo de caixa livre (12M) / valor de mercado."
  ],
  "pfcfRatio": [
   "Preço / FCF",
   "Valor de mercado / fluxo de caixa livre (12M)."
  ],
  "pegRatio": [
   "Índice PEG",
   "P/L dividido pelo CAGR do LPA (em %). Crescimento negativo ou prejuízo vale 0."
  ],
  "dividendYield": [
   "Dividend yield",
   "Dividendos pagos (12M) / valor de mercado."
  ],
  "shareholderYield": [
   "Shareholder yield",
   "(Dividendos + recompras de ações, 12M) / valor de mercado."
  ],
  "priceReturn1y": [
   "Cotação, 1 ano",
   "Retorno total da cotação ajustada em 12 meses."
  ],
  "priceCagr5y": [
   "CAGR da cotação, 5 anos",
   "Retorno anualizado da cotação ajustada."
  ],
  "volatility": [
   "Volatilidade (anualizada)",
   "Desvio padrão dos retornos logarítmicos mensais em 36 meses × √12."
  ],
  "maxDrawdown": [
   "Queda máxima (5 anos)",
   "Maior queda da cotação, do pico ao vale."
  ]
 },
 "flags": {
  "negativeEquity": [
   "Patrimônio líquido negativo",
   "O passivo supera o ativo. Pode resultar de recompras agressivas, mas muitas vezes indica aperto financeiro."
  ],
  "persistentLosses": [
   "Prejuízos persistentes",
   "Prejuízo líquido em pelo menos dois anos fiscais consecutivos."
  ],
  "lossLastYear": [
   "Prejuízo líquido no último ano",
   "O ano fiscal mais recente fechou com prejuízo líquido."
  ],
  "negativeFcf": [
   "Fluxo de caixa livre negativo",
   "As operações e os investimentos consomem mais caixa do que geram; é preciso financiamento externo."
  ],
  "lowCurrentRatio": [
   "Liquidez corrente abaixo de 1,0",
   "O passivo circulante supera o ativo circulante (liquidez corrente {value}). Administrável com um fluxo de caixa operacional forte."
  ],
  "interestCoverageCritical": [
   "Cobertura de juros insuficiente",
   "O EBIT cobre a despesa de juros apenas {value} — o serviço da dívida está em risco."
  ],
  "interestCoverageWeak": [
   "Cobertura de juros fraca",
   "O EBIT cobre a despesa de juros apenas {value}."
  ],
  "altmanDistress": [
   "Altman Z'' na zona de dificuldade",
   "Z''-score de {value}, abaixo do limite de dificuldade de 1,1."
  ],
  "altmanGrey": [
   "Altman Z'' na zona cinzenta",
   "Z''-score de {value}: nem em dificuldade, nem na zona segura (> 2,6)."
  ],
  "debtWithoutEbitda": [
   "Dívida líquida sem EBITDA positivo",
   "A empresa tem dívida líquida, mas não gera EBITDA positivo para pagá-la."
  ],
  "highLeverage": [
   "Alavancagem alta",
   "A dívida líquida equivale a {value} do EBITDA."
  ],
  "revenueDecline": [
   "Queda significativa da receita",
   "A receita variou {value} em relação ao ano anterior."
  ],
  "heavyDilution": [
   "Forte diluição dos acionistas",
   "O número de ações cresce em média {value} ao ano."
  ],
  "highSbc": [
   "Remuneração em ações elevada",
   "A remuneração em ações equivale a {value} da receita."
  ],
  "lowEarningsQuality": [
   "Baixa qualidade do lucro",
   "Índice de accruals de {value}: o lucro supera significativamente o fluxo de caixa operacional."
  ],
  "dividendUncovered": [
   "Dividendo não coberto pelo FCF",
   "Os dividendos superam o fluxo de caixa livre (payout {value})."
  ],
  "goodwillHeavy": [
   "Ágio e intangíveis elevados",
   "{value} do ativo total são ágio e intangíveis, sujeitos a baixas contábeis."
  ],
  "staleData": [
   "Dados financeiros desatualizados",
   "O último relatório anual cobre o período encerrado em {value}."
  ],
  "deepDrawdown": [
   "Queda profunda da cotação",
   "A cotação caiu {value} desde o pico de 5 anos."
  ],
  "netCash": [
   "Posição de caixa líquido",
   "O caixa supera a dívida financeira em {value}."
  ],
  "highMargin": [
   "Margem operacional alta",
   "Margem operacional de {value}."
  ],
  "highRoic": [
   "Retorno alto sobre o capital investido",
   "ROIC de {value}, bem acima do custo de capital típico."
  ],
  "alwaysProfitable": [
   "Lucrativa em todos os anos analisados",
   "Lucro líquido positivo em todos os {years} anos fiscais."
  ],
  "strongGrowth": [
   "Forte crescimento de longo prazo",
   "CAGR da receita de {value}."
  ],
  "buybacks": [
   "Recompras líquidas de ações",
   "O número de ações cai em média {value} ao ano."
  ],
  "altmanSafe": [
   "Altman Z'' na zona segura",
   "Z''-score de {value}."
  ],
  "strongCashConversion": [
   "Forte conversão em caixa",
   "O fluxo de caixa livre equivale a {value} do lucro líquido."
  ],
  "bankruptcyFiling": [
   "Pedido de falência ou recuperação judicial",
   "Formulário 8-K item 1.03 enviado em {value}."
  ],
  "restatement": [
   "Demonstrações financeiras reapresentadas",
   "Formulário 8-K item 4.02 (as demonstrações financeiras já divulgadas não devem mais ser consideradas confiáveis) enviado em {value}."
  ],
  "debtAcceleration": [
   "Vencimento antecipado de dívida",
   "Formulário 8-K item 2.04 (evento que antecipa uma obrigação financeira) enviado em {value}."
  ],
  "delistingNotice": [
   "Aviso de deslistagem",
   "Formulário 8-K item 3.01 (descumprimento de uma regra de listagem) enviado em {value}."
  ],
  "auditorChange": [
   "Troca de auditor",
   "Formulário 8-K item 4.01 (troca do auditor independente) enviado em {value}."
  ],
  "insiderBuying": [
   "Compras de insiders",
   "{count} insiders compraram ações no mercado aberto, num total de {value}, nos últimos 12 meses."
  ],
  "insiderSelling": [
   "Vendas intensas de insiders",
   "Insiders venderam {value} fora de planos de negociação pré-agendados nos últimos 12 meses ({share} do valor de mercado)."
  ]
 },
 "events": {
  "1.03": "Falência ou recuperação judicial",
  "4.02": "Reapresentação das demonstrações financeiras",
  "2.04": "Vencimento antecipado de uma obrigação financeira",
  "3.01": "Aviso de deslistagem / violação de regra de listagem",
  "5.01": "Mudança de controle",
  "2.01": "Aquisição ou venda concluída",
  "2.05": "Reestruturação / encerramento de atividades",
  "2.06": "Baixa contábil relevante",
  "4.01": "Troca de auditor",
  "1.01": "Contrato relevante",
  "1.02": "Rescisão de um contrato relevante",
  "1.05": "Incidente de cibersegurança relevante",
  "5.02": "Mudança na liderança (CEO, CFO ou presidente do conselho)"
 },
 "raw": {
  "income": "Demonstração de resultados",
  "cashflow": "Demonstração do fluxo de caixa",
  "balance": "Balanço patrimonial",
  "revenue": "Receita",
  "costOfRevenue": "Custo da receita",
  "grossProfit": "Lucro bruto",
  "researchAndDevelopment": "Pesquisa e desenvolvimento",
  "operatingIncome": "Lucro operacional (EBIT)",
  "depreciationAndAmortization": "Depreciação e amortização",
  "interestExpense": "Despesa de juros",
  "pretaxIncome": "Lucro antes dos impostos",
  "incomeTaxExpense": "Imposto de renda",
  "netIncome": "Lucro líquido",
  "epsDiluted": "LPA diluído ($)",
  "sharesDiluted": "Ações diluídas (média ponderada)",
  "operatingCashFlow": "Fluxo de caixa operacional",
  "capex": "Capex",
  "freeCashFlow": "Fluxo de caixa livre",
  "shareBasedCompensation": "Remuneração em ações",
  "dividendsPaid": "Dividendos pagos",
  "buybacks": "Recompras de ações",
  "totalAssets": "Ativo total",
  "currentAssets": "Ativo circulante",
  "cash": "Caixa e equivalentes",
  "inventory": "Estoques",
  "accountsReceivable": "Contas a receber",
  "goodwill": "Ágio (goodwill)",
  "intangibleAssets": "Ativos intangíveis",
  "totalLiabilities": "Passivo total",
  "currentLiabilities": "Passivo circulante",
  "totalDebt": "Dívida financeira",
  "equity": "Patrimônio líquido",
  "retainedEarnings": "Lucros retidos",
  "sharesOutstanding": "Ações em circulação"
 },
 "method": {
  "btPending": "Os resultados do backtest aparecem após a próxima atualização de dados.",
  "btCaveats": "Ressalvas: só entram as empresas listadas hoje (as falidas e deslistadas não aparecem, então as piores notas na verdade se saíram ainda pior); os preços não incluem dividendos; as referências setoriais de hoje são usadas para todos os anos; os pesos foram ajustados no mesmo período, então o poder preditivo real pode ser um pouco menor. Resultados passados não garantem resultados futuros, e isto não é recomendação de investimento.",
  "btDividend": "Segurança do dividendo: no ano seguinte, {safe} das pagadoras “seguras”, {moderate} das “moderadas”, {risky} das “em risco” e {unsafe} das “inseguras” cortaram o dividendo.",
  "btRisk": "Risco: no quinto de menor risco, a maior queda em 12 meses foi em média de {lo} e {blo} das ações caíram mais da metade; no quinto mais arriscado, {hi} e {bhi}.",
  "btLoss": "Prejuízo no ano seguinte: entre duas empresas, uma que teve prejuízo no ano seguinte e outra que não, a que teve prejuízo tinha o TeraScore menor com probabilidade de {p} ({y} empresas-ano; 50% = acaso, 100% = perfeito).",
  "btIc": "Em {share} das {k} datas testadas, um TeraScore maior veio acompanhado, em média, de 12 meses seguintes melhores (correlação média de ranking {ic}; 0 = nenhuma relação, 1 = perfeita).",
  "btWorst": "20% mais fracas",
  "btBest": "20% melhores",
  "btDrawdown": "Queda máx. média",
  "btBigLoss": "Caiu >50%",
  "btExcess": "Retorno excedente (12 meses)",
  "btAvg": "nota média",
  "btQuintile": "Quinto",
  "btIntro": "O método também foi medido com dados passados. A cada trimestre de {from} a {to}, cada empresa foi avaliada como poderia ter sido na época – só com os relatórios anuais já públicos, à cotação daquele dia – e comparada com o que aconteceu nos 12 meses seguintes. {n} observações, {c} empresas, valor de mercado de pelo menos {mc}. Retorno excedente: a variação de preço da empresa em 12 meses menos a da empresa mediana na mesma data.",
  "btTitle": "Quão confiável é? Backtest",
  "runwayText": "Se o fluxo de caixa livre é negativo (a empresa queima caixa), a liquidez pode ter no máximo a nota que o fôlego de caixa justifica: quantos anos os ativos líquidos cobrem a queima atual ({bad} anos ou menos = 0 pontos, {good} anos ou mais = 100).",
  "smoothText": "Margens e retornos sobre o capital (ROIC, ROE, ROA) são avaliados com {a}% do último ano e {b}% da média dos dois anos anteriores, para que um único ano excepcional não distorça a nota. A página da empresa mostra essa base de 3 anos abaixo do último valor.",
  "title": "Metodologia",
  "intro": "Cada empresa é mapeada no mesmo modelo de dados a partir dos relatórios anuais auditados (10-K / 20-F) e dos relatórios trimestrais mais recentes (10-Q). Cada indicador é convertido numa nota de 0–100; cada dimensão é a média ponderada dos seus indicadores. 100 é o melhor — exceto no Risco, em que quanto menor, melhor.",
  "scaling": "A escala é linear entre o valor que vale 0 pontos e o que vale 100 pontos, e limitada fora desse intervalo. Dentro de uma área, os indicadores ausentes são ignorados e os pesos restantes são renormalizados; uma área só é avaliada quando há indicadores que somem pelo menos metade do seu peso. A completude dos dados é a parte do TeraScore, por peso, que se baseia em dados.",
  "partial": "Análise parcial. Quando faltam nos documentos de uma empresa os dados de uma área, essa área conta no TeraScore como um {s} neutro, ou como a média das outras áreas da empresa se esta for menor – de modo que dados ausentes nunca elevam a nota (no backtest, empresas com lacunas foram pior do que as completas com a mesma nota). Números que não estão ausentes mas sim indefinidos – crescimento a partir de base zero ou negativa, ROIC com capital investido negativo, o payout de uma empresa que não paga dividendos – ficam simplesmente fora da área. A completude dos dados é a parte do TeraScore (por peso) que se baseia em dados. Abaixo de 80%, as listas mostram “◐ Parcial · 65%” entre o nome da empresa e o TeraScore; a página da empresa mostra a porcentagem sempre que ela fica abaixo de 100% e indica as áreas ausentes. Com menos de 5 áreas avaliáveis não há TeraScore (“Poucos dados”); empresas ainda sem relatório anual aparecem como “Sem análise” ou “Nova listagem”.",
  "estimates": "Números estimados. Quando uma empresa não divulga uma linha de lucro operacional, o lucro operacional (EBIT) é aproximado como lucro antes dos impostos mais despesa de juros (não para bancos e seguradoras). Uma empresa que não divulgou empréstimos nem despesa de juros nos dois últimos anos fiscais e cujo passivo não circulante é inferior a 15% do ativo é tratada como sem dívida. A página da empresa lista essas estimativas; os dados brutos mostram os números como divulgados. Algumas empresas divulgam o capex apenas num elemento XBRL próprio, que os dados padrão da SEC não incluem; nesse caso ele é estimado pela relação entre capex e receita da própria empresa nos anos mais próximos que divulgam ambos, ou então pela depreciação e amortização.",
  "bands": "Faixas de classificação:",
  "profiles": "Bancos, seguradoras e corretoras (perfil financeiro) e REITs (perfil imobiliário) são avaliados com indicadores e limites adaptados, mostrados abaixo quando diferem.",
  "overall": "TeraScore (geral)",
  "overallText": "Média ponderada das nove áreas fundamentalistas (motor 2.1). Os pesos foram ajustados com base no backtest abaixo: as áreas que melhor separaram os futuros vencedores e perdedores, e os futuros prejuízos, pesam mais (consistência, valuation, fluxo de caixa); as que separaram menos pesam menos (liquidez, balanço – que mantém uma participação de 30% na nota de risco). Na página de cada empresa, “O que eleva e o que reduz o TeraScore?” mostra a contribuição de cada área: 50 + Σ peso × (nota − 50).",
  "riskTitle": "Risco",
  "distressTitle": "Risco de insolvência",
  "distressText": "Pontos: Altman Z'' na zona de dificuldade +3 / zona cinzenta +1; patrimônio negativo sem FCF positivo +2; FCF negativo +1; prejuízo líquido +1; cobertura de juros < 1,5× +2; dívida líquida sem EBITDA positivo +1; índice de patrimônio < 5% (financeiras) +2. 2–3 pontos = elevado, 4+ = alto.",
  "trendTitle": "Tendência de longo prazo",
  "trendText": "70% crescimento de longo prazo + 30% crescimento do último ano, ajustado em até ±5 pontos pela tendência da margem operacional. ≥ 65 melhorando, 40–64 estável, < 40 piorando. Descreve o passado; não é uma previsão.",
  "stylesTitle": "Perfil de investimento",
  "stylesText": "Qualidade: rentabilidade ≥ 70, consistência ≥ 70, balanço ≥ 60, sem alerta crítico. Crescimento: crescimento de longo prazo ≥ 70. Valor: valuation ≥ 65. Renda: dividend yield ≥ 2% coberto pelo FCF. Especulativa: alerta crítico ou prejuízo na maioria dos anos.",
  "sectorTitle": "Comparação setorial",
  "sectorText": "Cada nota também é classificada em relação a todas as empresas analisadas do mesmo setor (percentil).",
  "limitsTitle": "Limitações",
  "limitsText": "As notas se baseiam apenas nos números financeiros divulgados e nos preços de mercado. Não captam a qualidade da gestão, a posição competitiva, as notícias nem as projeções da empresa. Não é recomendação de investimento.",
  "logosText": "Os logotipos das empresas vêm das imagens públicas de logotipos da Financial Modeling Prep. São marcas registradas das empresas e aparecem apenas para identificá-las; uma empresa sem logotipo é mostrada com sua inicial.",
  "profileGeneral": "Geral",
  "profileFinancial": "Financeiro",
  "profileRealEstate": "Imobiliário",
  "eventsTitle": "Eventos corporativos relevantes (8-K)",
  "eventsText": "Os eventos relevantes vêm dos Formulários 8-K enviados à SEC nos últimos 12 meses, mantendo apenas os tipos de item de alto impacto. Falência (1.03) e reapresentação (4.02) são alertas críticos; vencimento antecipado de dívida (2.04), aviso de deslistagem (3.01) e troca de auditor (4.01) são alertas, e todos elevam as notas de risco e de insolvência.",
  "relativeTitle": "Avaliação relativa ao setor",
  "relativeText": "Margens, retornos, estrutura de capital, liquidez e múltiplos de valuation dependem muito do segmento. Para esses indicadores, a nota é 50% absoluta (os limites acima) e 50% relativa: a posição da empresa entre o percentil 10 e o percentil 90 dos pares estabelecidos do setor (valor de mercado ≥ US$ 300 mi, receita ≥ US$ 50 mi, pelo menos 20 pares). A mediana do setor aparece ao lado de cada indicador. Os indicadores de crescimento, consistência e risco usam apenas limites absolutos.",
  "insiderText": "Dos conjuntos de dados trimestrais do Formulário 4 da SEC dos últimos 12 meses. Só contam as compras e vendas no mercado aberto. Compras de pelo menos dois insiders que somem US$ 100.000 ou mais são um ponto forte; vendas fora de planos 10b5-1 acima de 1% do valor de mercado são um alerta.",
  "currencyTitle": "Empresas estrangeiras e moedas",
  "currencyText": "Empresas estrangeiras listadas nos EUA (Formulário 20-F / 40-F, IFRS) são analisadas na moeda em que reportam; os indicadores são neutros em relação à moeda. Para o valuation, o valor de mercado em dólares é convertido pela taxa de referência do BCE (outras fontes para moedas que o BCE não publica). Emissores privados estrangeiros não enviam relatórios trimestrais em XBRL, por isso o valuation deles usa o último ano fiscal.",
  "historyText": "Variações do TeraScore avalia cada empresa no fim de cada ano fiscal apenas com as informações disponíveis na época: relatórios anuais até aquele ano, eventos 8-K dos 12 meses anteriores e a cotação naquela data (valor de mercado estimado a partir do valor de mercado de hoje, da variação de preço e da variação do número de ações). Números de 12M, dados de insiders e dados de mercado atuais não são usados para anos passados, e as referências setoriais de hoje se aplicam a todos os anos. Além disso, cada atualização de segunda-feira salva um instantâneo do TeraScore atual; as variações de 4 e 13 semanas comparam com o instantâneo mais recente que tenha pelo menos essa idade.",
  "peersText": "As empresas semelhantes vêm do mesmo setor. A distância de cada candidata é a diferença no logaritmo do valor de mercado, mais uma penalidade equivalente a uma diferença de porte de 4,5× quando pertence a outro segmento; assim, empresas do mesmo segmento e porte parecido vêm primeiro, enquanto as maiores empresas são comparadas com as maiores do seu setor. Só entram empresas com nota, e uma classe de ações por empresa.",
  "dividendText": "A segurança do dividendo avalia, de 0 a 100, a probabilidade de o dividendo atual ser mantido: 75 ou mais é seguro, 55–74 moderado, 35–54 em risco, abaixo de 35 inseguro. Componentes sem dados ficam de fora e os pesos restantes são reescalonados.",
  "portfolioText": "O TeraScore, o risco e o dividend yield da carteira são médias ponderadas pelo valor das posições; o P/L é o valor total dividido pelo lucro atribuível às posições (empresas com prejuízo excluídas). Alertas: uma única posição acima de {p}, um setor acima de {s}, menos de {n} posições, alertas críticos, alto risco de insolvência e TeraScores fracos.",
  "quarterlyText": "Os números trimestrais cobrem os últimos 12 trimestres dos Formulários 10-Q e 10-K. Os fluxos são valores de três meses: divulgados diretamente ou derivados dos números acumulados no ano; o quarto trimestre é o valor anual menos os primeiros nove meses. Números por ação e quantidades de ações aparecem só quando divulgados para os três meses, ajustados por desdobramentos posteriores. Os itens do balanço são da data de encerramento do trimestre.",
  "portfolioEtfText": "ETFs (fundos negociados em bolsa) também podem ser adicionados: são avaliados pelo preço diário, não têm TeraScore e ficam fora das verificações de posição, setor e número de posições, já que um fundo já é diversificado. O dividend yield vem da Nasdaq quando publicado; caso contrário, pode ser informado manualmente.",
  "zero": "0 pts",
  "hundred": "100 pts"
 }
};
