# 🚀 50 to 10,000-User Load & Scalability Testing System

> **Project Note**: Engineered and built with the assistance of **Antigravity AI Chatbot**.

## 📌 Project Overview
The **50 to 10,000-User Load & Scalability Testing System** is an enterprise-grade local benchmarking application built to test, evaluate, and monitor web application performance under simulated traffic loads scaling up to **10,000 concurrent virtual user sessions**.

It allows anyone to test **any valid live online website URL** or **any app running locally on their laptop (e.g. `http://localhost:5173`)** right from their browser via an interactive web telemetry dashboard.

---

## ✨ Features & Capabilities
- 💻 **Offline & Local Execution**: Runs locally on any computer/laptop without requiring cloud hosting or third-party servers.
- 👥 **50 to 10,000-Virtual User Concurrency Simulation**: Automatically spawns and manages virtual users executing simultaneous requests.
- 🌐 **Dual Target Support**: 
  - Test any **Valid Live Online Website** (e.g. `https://your-live-website.com`).
  - Test any **Local App Running on your Machine** (e.g. `http://localhost:5173`).
- 🛑 **Strict URL Validation**: Rejects empty or invalid URLs with clear error alerts.
- 📊 **Real-Time Web Telemetry Dashboard**: Live browser UI showing active virtual user count (`Active / Target`), throughput (RPS), response latency (ms), and scrollable telemetry request logs (`#1 to #1025`).
- 🛑 **Instant Stop Controls**: Includes a **Stop Load Test** button to halt active stress testing immediately.
- 🤖 **Built with Antigravity AI**: Designed and developed with guidance and assistance from Antigravity AI.

---

## 🛠️ Tech Stack
- **Node.js** & **Express.js** (Local Server Engine)
- **Socket.io** (Real-Time WebSockets Telemetry)
- **HTML5, CSS3 & JavaScript** (Local Web Dashboard)

---

## 🚀 How to Run the App Locally on Your Computer

### Step 1: Clone the Repository & Install Dependencies
```bash
git clone https://github.com/Satyam123Patel/Load_-_Scalability_Testing_System.git
cd Load_-_Scalability_Testing_System
npm install
```

### Step 2: Start the Local Dashboard Application
```bash
npm start
```

### Step 3: Open the Dashboard in Your Browser
Open your browser and navigate to:
👉 **`http://localhost:5000`**

- Enter any **Valid Online Website URL** (or your local app `http://localhost:5173`).
- Select your target Virtual User capacity (**50**, **250**, **500**, or **1,025**).
- Click **Run Load Test** to launch live telemetry!

---

## 📄 License & Attribution
- Author: **Satyam Patel**
- Assisted By: **Antigravity AI Chatbot**
