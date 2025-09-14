# AnimalGram Fullstack Project Structure & Setup

## 📁 Project Structure

```
animalgram/
├── client/                # Frontend (Vite + React + TypeScript)
│   ├── src/
│   │   ├── components/    # UI and form components
│   │   ├── pages/         # Route/page components
│   │   ├── layouts/       # Layout wrappers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # React context providers
│   │   ├── assets/        # icons/ and images/
│   │   ├── styles/        # CSS files
│   │   ├── types/         # Frontend types
│   │   ├── lib/           # Utilities, validation, etc.
│   │   └── main.tsx, App.tsx, etc.
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── server/                # Backend (Node.js + Express + Mongoose + TypeScript)
│   ├── src/
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # Express route handlers
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Express middleware
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # Backend types
│   │   └── app.ts         # Express app entry
│   ├── package.json
│   └── tsconfig.json
├── shared/                # Shared types/interfaces
│   └── types/
├── .env                   # Environment variables
├── .gitignore
├── README.md
├── LICENSE.md
└── PROJECT_STRUCTURE.md
```

---

## 🚀 How to Run the Application

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

- Frontend: http://localhost:5173 (default Vite port)
- Backend: http://localhost:3000 (or your configured port)

---
