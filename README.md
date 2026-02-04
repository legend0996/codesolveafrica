# CodeSolveAfrica

A modern web application for African tech solutions, featuring project management, order tracking, and admin dashboards.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 Mobile-first design
- 🔒 Secure admin authentication
- 📊 Project tracking system
- 💳 Multiple payment methods
- 🚀 Fast and optimized with Vite

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Bcrypt

## Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/codesolveafrica.git
cd codesolveafrica
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
npm install
```

4. Set up environment variables

Create `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Create `.env` file in the root directory (optional):
```env
VITE_API_URL=http://localhost:5000/api
```

5. Seed admin user
```bash
cd backend
node seedAdmin.js
```

6. Start development servers

Backend:
```bash
cd backend
npm start
```

Frontend (in a new terminal):
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Admin Access

Default admin credentials (change after first login):
- Email: admin@codesolveafrica.com
- Password: Admin@123

Access admin dashboard at `/admin/login`

## Project Structure

```
codesolveafrica/
├── backend/              # Express backend
│   ├── config/          # Database config
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Auth & error handling
│   ├── models/          # MongoDB models
│   └── routes/          # API routes
├── src/                 # React frontend
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── config/         # App configuration
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   └── routes/         # Route definitions
└── public/             # Public assets
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start backend server
- `node seedAdmin.js` - Create admin user

## Deployment

See deployment guides for:
- [Vercel (Frontend)](https://vercel.com)
- [Render/Railway (Backend)](https://render.com)
- [MongoDB Atlas (Database)](https://mongodb.com/atlas)

## License

MIT

## Contact

For support or inquiries: contact@codesolveafrica.com
