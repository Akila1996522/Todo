FROM node:20.0.0-alpine AS node

FROM node AS builder
WORKDIR /app
COPY . .
RUN npm i

FROM node AS runner
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app /app

USER node
EXPOSE 3000
CMD ["node", "src/server.js"]