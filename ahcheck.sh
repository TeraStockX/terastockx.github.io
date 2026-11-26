#!/bin/bash
# After-hours quotes kept overnight: logs of the last after-hours run and the runs after 20:00 New York time.
repo=TeraStockX/terastockx.github.io
for run in 45731865050 45733015774 45739784371; do
  info=$(gh run view $run --repo $repo --json createdAt,status,conclusion,jobs -q '"\(.createdAt) \(.status) \(.conclusion)"')
  job=$(gh run view $run --repo $repo --json jobs -q '.jobs[] | select(.name=="build") | .databaseId')
  echo "=== run $run ($info), build job $job"
  curl -sSL -H "Authorization: Bearer $GH_TOKEN" "https://api.github.com/repos/$repo/actions/jobs/$job/logs" -o job.log
  grep -E "quotes updated|after-hours|session|skipped|rror|arning|ETF prices|European|top stories|new filings|news" job.log | grep -vE "Node.js 20|DEP0|trace-deprecation|##\[group\]|\[36;1m" | sed -E 's/^[0-9T:.-]+Z //' | cut -c1-260 | head -25
done
