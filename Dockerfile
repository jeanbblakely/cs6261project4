FROM node:8.10.0
LABEL "maintainer"="jeanbblakely@gmail.com"

WORKDIR /work/cs6261project4

RUN npm i npm@latest -g
RUN npm install -g @angular/cli@7.3.5
RUN npm install http-server -g

CMD ["/work/cs6261project4/script.sh"]
