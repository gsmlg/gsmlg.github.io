#!/bin/bash

cd /app

rm -rf _build deps

export MIX_ENV=prod

mix deps.get
mix compile
mix release

