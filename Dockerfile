FROM node:20-slim AS build

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY . ./
RUN npm run build


FROM node:20-slim

WORKDIR /usr/app

COPY --from=build /app/src/dist/portfolio ./
CMD ["node", "server/server.mjs"]
EXPOSE 4000

# CMD ["npm", "run", "serve:ssr:portfolio"]
