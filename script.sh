#!/bin/bash
echo "hello from the script"
if [ -e "${HOME}/CS6261project4/.package.json" ]; then
    echo "successfully mounted"
else
    echo "not mounted"
fi
