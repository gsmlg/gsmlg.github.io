#!/bin/bash
MIX_ENV=prod PORT=10088 elixir --detached -S mix phx.server
