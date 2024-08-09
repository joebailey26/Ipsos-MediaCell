# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install Flask
RUN pip install Flask pytest

# Run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=3000"]
