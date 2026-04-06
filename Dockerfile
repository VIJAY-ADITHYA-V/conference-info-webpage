# Dockerfile

# Use a lightweight web server image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the conference webpage files to the image
COPY . .

# Expose port 80
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]