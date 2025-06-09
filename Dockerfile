# Nginx base image with Alpine
FROM nginx:alpine

# HTML/CSS/JS files to Nginx directory
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
