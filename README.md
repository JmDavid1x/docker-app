# Docker App — Node.js REST API

Hands-on DevOps project showcasing Docker containerization of a Node.js + MongoDB
REST API with Nginx as a reverse proxy, managed through Docker Compose.

## Tech Stack

- Node.js + Express — REST API
- MongoDB — Database
- Nginx — Reverse proxy
- Docker + Docker Compose — Containerization

## Project Structure
```
docker-app/
├── app/
│   ├── src/
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- Docker Desktop installed
- Git

### Run the project
```bash
docker compose up --build
```

### Stop the project
```bash
docker compose down
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Check API status |
| GET | /items | Get all items |
| POST | /items | Create a new item |

## How it works

The request flow goes through three services:

1. Nginx listens on port 80 and acts as a reverse proxy
2. Node.js processes the request on port 3000
3. MongoDB stores and retrieves the data

All three services are orchestrated by Docker Compose and communicate
through an internal Docker network.

## Progress Log

### Day 1 — Base API
- Project structure created
- Express API with MongoDB connection
- Basic CRUD endpoints implemented

### Day 2 — Dockerization
- Dockerfile created for Node.js app using node:18-alpine
- Docker Compose configured to orchestrate 3 services: Node.js, MongoDB and Nginx
- Nginx configured as reverse proxy with security best practices (server_tokens off)
- Successfully ran all 3 containers with a single command: docker compose up --build
- API tested and verified at http://localhost/health

### Day 3 — Environment Variables
- Created .env file to manage sensitive configuration
- Updated docker-compose.yml to read variables from .env file
- Updated index.js to use environment variables
- .env file excluded from Git for security reasons
- API now returns current environment in /health endpoint

## Author
Jose David Mayor Lopez — [GitHub](https://github.com/JmDavid1x)