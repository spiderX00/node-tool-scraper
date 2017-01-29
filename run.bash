#!/usr/bin/env /bin/bash

find test/smart_crew/ | xargs -0 | ./main.js `grep htm`
