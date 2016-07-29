#!/bin/bash

ADDRESS="pizza.clouda.rocks"
CURL=$(curl -w %{time_total} -o /dev/null -s $ADDRESS)

aws cloudwatch put-metric-data --metric-name LoadTime --namespace "Pizza time" --value $CURL --unit 'Seconds' --dimensions Env=Prod --region us-west-2
