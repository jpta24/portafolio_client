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

# docker build -t test-docker-front .
# docker run --rm -p 8080:80 -v ${PWD}:/var/www/app --env-file ./.env --name portafolio-client-container test-docker-front
# docker run --rm -p 8080:80 -v ${PWD}/.env:/var/www/app/.env --name portafolio-client-container test-docker-front

