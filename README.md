# ✈️ Airline Backend System – API Gateway

Welcome to the **API Gateway** repository of the **Airline Backend System**. This acts as the single entry point for client applications (web/mobile) to access multiple microservices behind the scenes. Built using Node.js and Express, it handles authentication, routing, request forwarding, and centralizes access control.

---

## 🌐 Overview

This project is based on a **microservices architecture** where each service is independently developed and deployed. The API Gateway plays a vital role in exposing unified endpoints to external clients and routing traffic internally to appropriate microservices.

---

## 🏗️ Architecture Diagram

Below is a detailed architecture of the entire system:

![My Image](https://drive.google.com/uc?id=1yY4aO_ZgYiEmO7OYigrq0Taemaddvo0k)


---

## 🧠 Features

- ✅ Centralized API routing
- 🔐 JWT-based Authentication support
- 🚦 Handles rate-limiting and load balancing integration
- 🧭 Connects multiple microservices via clean RESTful routes
- 🛡️ Prevents direct client access to internal services

---

## 🚀 Tech Stack

- **Node.js / Express**
- **JWT for Auth**
- **MySQL / MongoDB** (per-service DB strategy)
- **Docker & Postman** for dev & testing (optional)

---

## 🙌 Contributions

Feel free to open issues, create pull requests, or suggest improvements! Let's build something great together.

---
