### STAGE 1 ###
FROM node:21-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

### STAGE 2 ###
FROM nginx:1.25.3-alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /var/www/app
EXPOSE 80
CMD [ "nginx","--g","daemon off;" ]