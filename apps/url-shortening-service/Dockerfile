FROM node:19-alpine as Base
RUN npm install -g pnpm

FROM Base as builder

WORKDIR /app

COPY . .

RUN pnpm dlx turbo prune url-shortening-service --docker

FROM Base as installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

COPY --from=builder /app/out/full/ .

RUN pnpm build

FROM Base as runner

WORKDIR /app

COPY --from=installer /app/dist ./dist
COPY --from=installer /app/package.json .

RUN pnpm install --prod

EXPOSE 8082

CMD ["node", "dist/index.js"]