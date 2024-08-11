# Use the official Node image from the Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm
RUN corepack enable

# Install dependencies and run the application
CMD pnpm install && pnpm dev

# Healthcheck to verify that the service is running and responding on port 8000
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:8000/ || exit 1
