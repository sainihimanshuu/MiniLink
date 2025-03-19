FROM node:19-alpine AS base
RUN npm install -g pnpm turbo

FROM base AS builder
WORKDIR /app
COPY . .
RUN turbo prune url-to-analytics-message-queue-service --docker

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
RUN turbo run build

FROM base AS runner
WORKDIR /app
COPY --from=installer ./app .
RUN pnpm install --prod
EXPOSE 8084
CMD ["node", "./apps/url-to-analytics-message-queue-service/dist/index.js"]