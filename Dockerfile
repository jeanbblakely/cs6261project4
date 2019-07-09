FROM node:8.10.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9
RUN npm install http-server -g

CMD http-server -p 4200
