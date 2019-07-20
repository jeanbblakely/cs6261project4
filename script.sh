#!/bin/bash

ng build
cd dist/cs6261project4
http-server -p 4200
