# Build the Vite/React SPA, then serve with nginx.
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Site serves /zone/map.jpg; source of truth is work_images/map.jpg in git.
RUN mkdir -p public/zone && cp work_images/map.jpg public/zone/map.jpg

ARG VITE_SITE_URL=https://ds-dekor.eu
ENV VITE_SITE_URL=$VITE_SITE_URL

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
