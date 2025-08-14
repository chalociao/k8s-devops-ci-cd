# build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
COPY test-runner.js .
COPY src ./src
COPY test ./test

# runtime stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app .
ENV PORT=8080
EXPOSE 8080
CMD ["node", "src/index.js"]
