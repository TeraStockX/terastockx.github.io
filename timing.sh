#!/bin/bash
# Phase timings of today's daily run (job log with timestamps).
repo=TeraStockX/terastockx.github.io
curl -sSL -H "Authorization: Bearer $GH_TOKEN" "https://api.github.com/repos/$repo/actions/jobs/139065636036/logs" -o job.log
echo "log lines $(wc -l < job.log)"
grep -nE "Downloading listings|common stocks|screener:|processed|removed |insider|price histor|logos|ETF|European|data/index.json|search pages|Done:|top stories|backtest|news" job.log | grep -vE "\./data/|\./scripts/|\./tests/|\./assets/" | cut -c1-200 | head -80
