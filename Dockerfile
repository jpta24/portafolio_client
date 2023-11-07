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

# docker build --no-cache -t test-docker-front .
# docker run --rm -p 8080:80 -v ${PWD}/public/frontend.env.js:/var/www/app/public/frontend.env.js --name portafolio-client-container test-docker-front

