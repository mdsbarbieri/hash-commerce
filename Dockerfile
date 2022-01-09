FROM node:16.13.1-alpine AS build
WORKDIR ./app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:16.13.1-alpine AS runner
WORKDIR ./app

ENV NODE_ENV=production

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

RUN yarn install --production

CMD ["yarn", "start"]