FROM node:8.10.0
LABEL "maintainer"="jeanbblakely@gmail.com"

RUN mkdir /cs6261project4
WORKDIR /cs6261project4

RUN npm i npm@latest -g
RUN npm install -g @angular/cli@7.3.9
RUN npm install http-server -g
RUN http-server -p 4200
