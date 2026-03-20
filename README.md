# 🐳 Docker App — Node.js REST API

Hands-on DevOps project showcasing Docker containerization of a Node.js + MongoDB REST API with Nginx as a reverse proxy, managed through Docker Compose.

## 🛠️ Tech Stack

- **Node.js + Express** — REST API
- **MongoDB** — Database
- **Nginx** — Reverse proxy
- **Docker + Docker Compose** — Containerization

## 📁 Project Structure
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

## 🚀 Getting Started

### Prerequisites
- Docker Desktop installed
- Git

### Run the project
```bash
docker compose up --build
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Check API status |
| GET | /items | Get all items |
| POST | /items | Create a new item |

## 📅 Progress Log

### Day 1 — Base API
- Project structure created
- Express API with MongoDB connection
- Basic CRUD endpoints

## 👤 Author
**JmDavid1x** — [GitHub](https://github.com/JmDavid1x)