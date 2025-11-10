# ----------------------
# Stage 1: Build Angular App
# ----------------------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 👇 Correct command for Angular 18 production build
RUN npm run build -- --configuration production

# ----------------------
# Stage 2: Serve using Nginx
# ----------------------
FROM nginx:stable-alpine

# Clean default Nginx html files
RUN rm -rf /usr/share/nginx/html/*

# Copy the Angular build output
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Add Angular routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
