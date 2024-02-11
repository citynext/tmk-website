
FROM node:21.2.0-alpine as builder

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:21.2.0-alpine as runner

WORKDIR /code

# Copy the built application from the builder stage
COPY --from=builder /code/next.config.mjs ./
COPY --from=builder /code/public ./public
COPY --from=builder /code/.next ./.next
COPY --from=builder /code/node_modules ./node_modules

