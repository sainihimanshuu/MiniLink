FROM node:19-alpine AS base
RUN npm install -g pnpm turbo

FROM base AS builder
WORKDIR /app
COPY . .
RUN turbo prune api-gateway --docker

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
COPY --from=installer /app/apps/api-gateway/package.json .
COPY --from=installer /app/apps/api-gateway/dist ./dist
RUN pnpm install --prod
EXPOSE 8080
CMD ["node", "dist/index.js"]
