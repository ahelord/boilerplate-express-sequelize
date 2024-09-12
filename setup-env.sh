#!/bin/bash

echo POSTGRES_PORT=$POSTGRES_PORT >> ./src/.env
echo POSTGRES_DB=$POSTGRES_DB >> ./src/.env
echo POSTGRES_USER=$POSTGRES_USER >> ./src/.env
echo POSTGRES_PASSWORD=$POSTGRES_PASSWORD >> ./src/.env
echo POSTGRES_HOST=$POSTGRES_HOST >> ./src/.env

