# 🌾 AgriNova - MSP Based Local Farmer-Buyer Marketplace

AgriMarket is a MERN Stack web application designed to connect local farmers directly with local buyers while ensuring fair crop pricing through MSP (Minimum Support Price) protection. The platform enables transparent crop trading, AI-powered crop disease detection, secure authentication, and administrative monitoring.

## 🚀 Project Overview

The goal of AgriNova is to eliminate unfair pricing practices and empower farmers by ensuring that agricultural products are never sold below the government-defined MSP.

The platform automatically validates crop prices and adjusts any listing that falls below the MSP, guaranteeing fair compensation for farmers.

---

## ✨ Key Features

### 👨‍🌾 Farmer Features

- Farmer registration and login
- Secure authentication using JWT
- Add crop products for sale
- View personal profile & setting
- Check latest MSP prices
- View order history
- AI-powered crop disease detection
- Track disease detection history

### 🛒 Buyer Features

- Buyer registration and login
- Secure authentication using JWT
- Local listed agricultural products
- View crop details
- Purchase crops from local farmers
- View order history
- Access latest MSP information
- AI-powered crop disease detection

### 🤖 AI Crop Disease Detection

- Upload crop images
- AI analyzes crop health
- Detects possible crop diseases
- Stores disease detection history
- Helps farmers take preventive measures

### 🛡️ MSP Protection System

One of the core features of the platform.

- Every product listing is validated against MSP data.
- If a farmer lists a crop below MSP:
  - The system automatically updates the price to at least the MSP value.
- Prevents exploitation of farmers.
- Ensures fair market practices.

### 👨‍💼 Admin Features

- Complete platform surveillance
- Manage users
- Manage products
- Manage MSP records
- Monitor transactions
- Maintain fair pricing across the platform

---

## 🏗️ Tech Stack

### Frontend

- React.js
- React Router
- Fetch API
- Tailwind CSS
- Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Cloudinary (Image Storage)

### AI Integration

- Crop Disease Detection Model / GEMINI API
- Image Processing

---

## 📂 Project Structure

```text
Project/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js/
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   │
│   ├── User.js
│   ├── Profile.js
│   ├── OTP.js
│   ├── Product.js
│   ├── MSPPrice.js
│   ├── OrderHistory.js
│   └── CropDiseaseHistory.js
│
│   └── ...
│
└── README.md
```

---

## 📊 Database Models

### User
Stores user authentication and account information.

### Profile
Stores additional profile details of farmers and buyers.

### OTP
Handles email verification and account security.

### Product
Stores crop listings uploaded by farmers.

### MSP Price
Stores MSP information for supported crops.

### Order History
Maintains purchase and transaction records.

### Crop Disease History
Stores previous AI disease detection results.

### Payment Records History
Stores previous payment details of buyers and farmers.

---

## 🔐 Authentication

- JWT-based authentication
- Protected routes
- Secure cookies
- Role-based access control
  - Farmer
  - Buyer
  - Admin

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/......./agrinova.git
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 🌱 Future Improvements

- Real-time chat between farmers and buyers
- Crop recommendation system
- Weather forecasting integration
- Online payment gateway
- Multilingual support (Hindi, English, Arabic)
- Mobile application

---

## 🎯 Mission

To create a transparent, technology-driven agricultural marketplace where farmers receive fair compensation, buyers gain direct access to local produce, and AI helps improve crop health and productivity.

---

## 👨‍💻 Developed By

Faizanur Rahman
 (Full Stack Developer)
