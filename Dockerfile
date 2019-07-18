FROM node:8.10.0
LABEL "maintainer"="jeanbblakely@gmail.com"

RUN mkdir /work
WORKDIR /work

RUN npm i npm@latest -g
RUN npm install -g @angular/cli@7.3.9
RUN npm install http-server -g
COPY ./script.sh /
RUN chmod +x /script.sh
CMD ["/script.sh"]


