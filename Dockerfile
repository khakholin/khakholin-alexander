FROM node:latest as build

WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx

COPY ./custom.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/khakholin-alexander /usr/share/nginx/html