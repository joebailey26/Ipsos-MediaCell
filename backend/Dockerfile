# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

COPY ./requirements.txt .

# Install Flask
RUN pip install -r requirements.txt

# Run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=3000"]

# Healthcheck to verify that the service is running and responding on port 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1
