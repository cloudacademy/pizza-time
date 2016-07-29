#!/bin/bash
mkdir /monitoring
cd /monitoring
wget http://aws-cloudwatch.s3.amazonaws.com/downloads/CloudWatchMonitoringScripts-1.2.1.zip
unzip CloudWatchMonitoringScripts-1.2.1.zip
rm CloudWatchMonitoringScripts-1.2.1.zip
cd aws-scripts-mon
echo "*/5 * * * * /monitoring/aws-scripts-mon/mon-put-instance-data.pl --mem-util --swap-util --disk-space-util --disk-space-used --disk-path=/ --from-cron" > crontab.txt
crontab crontab.txt
