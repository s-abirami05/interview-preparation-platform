# 🎯 Interview Preparation Platform

A full-stack web application built using the MERN Stack to help students and job seekers prepare for technical interviews. The platform provides interview questions, company-wise preparation resources, mock tests, personal notes, bookmarks, and progress tracking.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Company-wise Interview Questions
- Technical Interview Preparation
- Mock Tests
- Personal Notes
- Bookmark Questions
- Progress Tracking
- Responsive User Interface
- RESTful APIs
- Secure Authentication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Tools
- Git
- GitHub
- Postman
- Visual Studio Code

---

## 📂 Project Structure

```
interview-preparation-platform
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/M-kanmani/interview-preparation-platform.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

---

## 📌 API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Questions

- GET `/api/questions`
- POST `/api/questions`

### Notes

- GET `/api/notes`
- POST `/api/notes`
- PUT `/api/notes/:id`
- DELETE `/api/notes/:id`

### Bookmarks

- GET `/api/bookmarks`
- POST `/api/bookmarks`

### Progress

- GET `/api/progress`
- POST `/api/progress`

### Mock Tests

- GET `/api/mocktests`
- POST `/api/mocktests`

---

## 👨‍💻 Team Members

- **Member 1** – Frontend Development
- **Member 2** – Backend Development
- **Member 3** – Integration, Testing & Deployment

---

## 📖 Project Objective

The Interview Preparation Platform is designed to help students prepare for placement and technical interviews through categorized interview questions, mock tests, company-specific resources, notes, bookmarks, and progress tracking.

---

## 📄 License

This project is developed for educational purposes.
