FROM mcr.microsoft.com/playwright:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all project files into the container
COPY . .

# Copy auth.json into the container
COPY auth.json /app/auth.json

# Install Playwright dependencies
RUN npx playwright install --with-deps

# Run Playwright tests
CMD ["npx", "playwright", "test"]
