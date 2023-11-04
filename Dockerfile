### STAGE 1 ###
FROM node:21-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

### STAGE 2 ###
FROM nginx:1.25.3-alpine
# ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /var/www/app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
