FROM node:20-slim AS build-stage

WORKDIR /portfolio-frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:portfolio"]
