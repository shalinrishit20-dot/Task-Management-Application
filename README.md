# 📋 Task Management Application

A full-stack web application for managing tasks efficiently with authentication, categorization, and priority tracking.

## ✨ Features

- **User Authentication**: Secure registration and login with JWT
- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter tasks by status (Todo, In Progress, Completed)
- **Priority Levels**: Set task priority (Low, Medium, High)
- **Categories**: Organize tasks with custom categories
- **Due Dates**: Set and track task due dates
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Backend
- **Node.js** & **Express.js** - Server and API
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/shalinrishit20-dot/task-management-app.git
cd task-management-app
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
npm run dev
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs on: `http://localhost:3000`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Tasks
- `GET /api/tasks` - Get all tasks (requires auth)
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

## 🐳 Docker Setup

Run everything with Docker:

```bash
docker-compose up
```

Then visit:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- MongoDB: `localhost:27017`

## 📂 Project Structure

```
task-management-app/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🔐 Security

- Passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- Protected routes with middleware
- Environment variables for sensitive data

## 📚 Usage

1. **Register** a new account
2. **Login** with your credentials
3. **Create tasks** with title, description, priority, and due date
4. **Organize** tasks into categories
5. **Update task status** (Todo → In Progress → Completed)
6. **Filter and manage** your tasks efficiently

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check your MONGODB_URI in .env

### CORS Errors
- Verify CORS is enabled in backend
- Check frontend API URL in .env

### Port Already in Use
- Change PORT in .env files
- Kill the process using the port

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Created by **Shalin**

## 🌟 Support

If you find this project helpful, please give it a star! ⭐

## 📞 Contact

For questions or feedback, feel free to reach out!

---

**Happy Task Managing! 📝