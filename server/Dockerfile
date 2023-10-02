FROM node:18-alpine as dependencies

WORKDIR /usr/src/service/server

COPY package*.json ./
COPY src ./src
COPY tsconfig.json ./

RUN npm ci

FROM node:18-alpine as builder

WORKDIR /usr/src/service/server

COPY --from=dependencies /usr/src/service/server ./

RUN npm run build

FROM node:18-alpine

WORKDIR /usr/src/service/server

COPY --from=builder /usr/src/service/server/node_modules ./node_modules
COPY --from=builder /usr/src/service/server/package.json ./package.json
COPY --from=builder /usr/src/service/server/package-lock.json ./package-lock.json

RUN npm prune --production

COPY --from=builder /usr/src/service/server/dist ./dist

CMD ["npm", "run", "start"]