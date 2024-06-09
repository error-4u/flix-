# FROM node:14

# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY jsconfig*.json ./

# RUN npm install

# COPY . .


# CMD [ "npm", "start" ]

# EXPOSE 3000

# Stage 1: Build the frontend
FROM node:16 as frontend

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy frontend code into the container
COPY . .

# Install frontend dependencies
RUN npm install

# Build the frontend code
RUN npm run build

# Stage 2: Build the backend
FROM node:16 as backend

# Set the working directory for the backend
WORKDIR /app/server

# Copy backend code into the container
COPY ./server .

# Install backend dependencies
RUN npm install

# Expose the port where the backend will run
EXPOSE 3000

# Set the command to start the backend
CMD ["npm", "run", "start"]
