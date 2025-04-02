# Build stage
FROM denoland/deno:latest AS builder
WORKDIR /app
COPY . .
RUN deno task build
RUN deno cache build/index.js

# Production stage
FROM denoland/deno:latest
WORKDIR /app
COPY --from=builder /app .
CMD ["deno", "run", "-REN", "build/index.js"]
