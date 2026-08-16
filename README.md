# 🚀 50-User Load & Scalability Testing System

> **Project Note**: Engineered and built with the assistance of **Antigravity AI Chatbot**.

## 📌 Project Overview
The **50-User Load & Scalability Testing System** is a full-fledged benchmarking platform built to test, evaluate, and monitor web application performance under a simulated traffic load of **50 concurrent virtual user sessions**.

It includes an automated virtual user runner that ramps up virtual bot sessions, sends asynchronous concurrent HTTP workloads, measures key latency metrics (min, max, p95), monitors throughput (RPS), and generates structured performance reports.

---

## ✨ Features
- 👥 **50-Virtual User Concurrency Simulation**: Automatically spawns and manages 50 virtual users executing simultaneous user actions.
- ⚡ **Real-Time Latency & Throughput Benchmarking**: Measures request response times, min/max/average latencies, and 95th percentile (p95) metrics.
- 📊 **Server Resource Monitoring**: Simulates CPU and Memory consumption under 50-user load.
- 📝 **Automated Benchmark Reports**: Exports detailed JSON reports (`load_test_report.json`) after each test run.
- 🤖 **Built with Antigravity AI**: Designed and developed with guidance and assistance from Antigravity AI.

---

## 🛠️ Tech Stack & Technologies
- **Node.js** & **Express.js** (Backend API & Simulation Engine)
- **Socket.io** (Real-Time Metrics Broadcasts)
- **Asynchronous Concurrent Workloads** (Virtual User Bots)
- **JSON Benchmarking Reports**

---

## 🚀 How to Run the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the 50-User Load Simulation
```bash
node load_tester.js
```

### 3. Run the Live Metrics Server
```bash
npm start
```

---

## 📄 License & Attribution
- Author: **Satyam Patel**
- Assisted By: **Antigravity AI Chatbot**
