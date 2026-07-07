# 🛒 ShopStack - Enterprise Multi-Vendor E-Commerce Platform

ShopStack is a full-stack multi-vendor e-commerce marketplace built using **React.js**, **Spring Boot**, and **PostgreSQL**. The platform enables customers to purchase products from multiple vendors through a centralized marketplace while allowing vendors to manage their own stores and products.

> 🚧 Current Status: Frontend Development In Progress

---

## 🚀 Features Completed

### 🏠 Landing Page
- Modern homepage
- Customer, Vendor, and Admin role selection
- Responsive design

### 🔐 Authentication UI
- Customer Registration
- Customer Login
- Vendor Registration
- Vendor Login
- Vendor Verification
- Admin Login

> Backend authentication (JWT) will be integrated in future development.

---

### 👤 Customer Module

#### Dashboard
- Hero banner
- Shop by Categories
- Featured Products
- Dynamic Product Cards

#### Product Management
- Product Details Page
- Wishlist
- Shopping Cart
- Buy Now flow (Frontend)

#### Customer Profile
- Personal Information
- My Orders
- Wishlist
- Shopping Cart
- Saved Addresses
- Payment Methods
- Settings

#### Checkout Flow
- Checkout Page
- Order Summary
- Delivery Address Selection
- Payment Method Selection
- Order Success Page

---

### ❤️ Wishlist
- Add products to wishlist
- Remove products from wishlist
- Dynamic Wishlist using React Context

---

### 🛒 Shopping Cart
- Add products to cart
- Remove products from cart
- Dynamic Cart using React Context
- Order Summary

---

### ⚙️ Settings
- Account Section
- Appearance
- Notifications
- Language
- Help
- Logout

---

## 🧩 Project Structure

```
src
│
├── assets
├── components
├── context
│   └── ShopContext.jsx
├── data
│   └── products.js
├── pages
│   ├── Home
│   ├── Customer
│   ├── Vendor
│   └── Admin
├── styles
├── App.jsx
└── main.jsx
```

---

## 🛠 Technologies Used

### Frontend
- React.js
- React Router DOM
- React Icons
- CSS3
- Vite

### Backend (Planned)
- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs

### Database (Planned)
- PostgreSQL

---

## 📋 Marketplace Workflow

```
Landing Page
      │
      ▼
Choose Role
      │
      ▼
Customer Login/Register
      │
      ▼
Customer Dashboard
      │
      ├── Browse Categories
      ├── View Products
      ├── Wishlist
      ├── Cart
      └── Profile
                │
                ▼
          Product Details
                │
                ▼
             Checkout
                │
                ▼
         Order Success
```

---

## 🏗 Planned Features

### Vendor Module
- Vendor Dashboard
- Add Products
- Manage Products
- Inventory Management
- Orders
- Sales Analytics
- Store Profile

### Admin Module
- Customer Management
- Vendor Management
- Product Management
- Order Management
- Reports & Analytics

### Backend Integration
- Spring Boot APIs
- JWT Authentication
- PostgreSQL Database
- Real-time Product Management
- Order Processing
- Payment Gateway Integration

---

## 📌 Current Progress

| Module | Status |
|---------|--------|
| Landing Page | ✅ Completed |
| Authentication UI | ✅ Completed |
| Customer Dashboard | ✅ Completed |
| Product Catalog UI | ✅ Completed |
| Product Details | ✅ Completed |
| Wishlist | ✅ Completed |
| Shopping Cart | ✅ Completed |
| Customer Profile | ✅ Completed |
| Addresses | ✅ Completed |
| Payments UI | ✅ Completed |
| Checkout UI | ✅ Completed |
| Order Success | ✅ Completed |
| Settings | ✅ Completed |
| Vendor Module | 🚧 In Progress |
| Admin Module | 🚧 Planned |
| Spring Boot Backend | 🚧 Planned |

---

## 👩‍💻 Developer

**Maha Lakshmi J**

B.Tech – Computer Science & Engineering

Madanapalle Institute of Technology & Science (MITS)

---

## 📄 License

This project is developed for learning, internship, and educational purposes.