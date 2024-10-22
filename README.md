# Fullstack Authentication and CRUD Application

This project is a fullstack application with user authentication and CRUD operations. It uses React for the frontend, Express.js and Node.js for the backend, and MongoDB as the database.

## Features
- User registration and login with authentication
- CRUD operations for user data (Create, Read, Update, Delete)
- Styling with Tailwind CSS
- API communication using Axios

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Getting Started

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/

2. Backend Setup :

Install Dependencies
Navigate to the backend folder and install the required dependencies:


cd backend
npm install
Configure MongoDB Connection
Create a .env file in the backend folder and add the following:
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret with a random secret key.

Run the Server
node server.js

3. Frontend Setup
Install Dependencies
Navigate to the frontend folder and install the required dependencies:


cd frontend
npm install
Configure the API Endpoint
Make sure the frontend is pointing to the correct API endpoint (http://localhost:5000) in the code.

Run the Frontend
npm run start

Start the React development server:


