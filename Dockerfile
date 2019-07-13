FROM node:8.10.0

WORKDIR /app

RUN npm install
RUN npm install -g @angular/cli@7.3.9
RUN npm install http-server -g
RUN ng build

CMD http-server -p 4200
