# 💬 Realtime Full Stack Chat Application

A modern, feature-rich real-time chat application built with the MERN stack. Connect with friends and colleagues instantly with seamless messaging and profile management.

## 🚀 Live Demo
**[View Live Application](https://realtime-fullstack-chat-applications.onrender.com/)**

## ✨ Key Features

- **🔐 Secure Authentication** - JWT-based authentication with proper authorization
- **💬 Real-time Messaging** - Instant message delivery using Socket.io
- **👤 Profile Management** - Upload and update profile pictures with Cloudinary integration
- **🟢 Online Status** - See who's online in real-time
- **🎨 Modern UI** - Beautiful interface with TailwindCSS and Daisy UI components
- **📱 Responsive Design** - Seamless experience across all devices
- **🌐 Global State Management** - Efficient state handling with Zustand
- **🛡️ Error Handling** - Comprehensive error handling on both client and server
- **🚀 Production Ready** - Deployed professionally on Render and Vercel

## 🛠️ Tech Stack

**Frontend:**
- React.js with Vite
- TailwindCSS & Daisy UI
- Zustand for state management
- Socket.io-client for real-time features
- Lucide React for icons

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- Socket.io for real-time communication
- JWT for authentication
- Cloudinary for image upload
- Bcryptjs for password hashing

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js installed
- MongoDB database (local or Atlas)
- Cloudinary account for image upload
- Basic understanding of MERN stack

## ⚙️ Environment Setup

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Server
PORT=5001
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret