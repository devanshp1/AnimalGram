# AnimalGram

AnimalGram is a modular fullstack social media app for animals, built with Vite (React) frontend and Node.js/Express/Mongoose backend.

## Features
- User authentication (sign up, login, logout)
- Animal photo upload and sharing
- Like and comment on posts
- Follow/unfollow users
- Real-time feed updates
- Responsive design

## Tech Stack
- **Frontend:** Vite, React, TypeScript
- **Backend:** Node.js, Express, Mongoose, TypeScript
- **Database:** MongoDB

## Getting Started

### 1. Install Dependencies
```sh
cd client
pnpm install

cd ../server
pnpm install
```

### 2. Set Up Environment Variables
- In `client/.env` and `server/.env`, add your required variables (e.g., MongoDB URI, API endpoints).

### 3. Start the Backend
```sh
cd server
pnpm run dev
```

### 4. Start the Frontend
```sh
cd client
pnpm run dev
```

### 5. Access the App
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
