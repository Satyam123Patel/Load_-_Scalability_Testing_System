# 🚀 50-User Load & Scalability Testing System

> **Project Note**: Engineered and built with the assistance of **Antigravity AI Chatbot**.

## 📌 Project Overview
The **50-User Load & Scalability Testing System** is a full-fledged benchmarking platform built to test, evaluate, and monitor web application performance under a simulated traffic load of **50 concurrent virtual user sessions**.

It includes an automated virtual user runner that ramps up virtual bot sessions, sends asynchronous concurrent HTTP workloads, measures key latency metrics (min, max, p95), monitors throughput (RPS), and generates structured performance reports.

---

## ✨ Features & What Is Tested
- 👥 **50-Virtual User Concurrency Simulation**: Automatically spawns and manages 50 virtual users executing simultaneous user actions.
- 🔑 **Authentication & Login Testing**: Tests `/api/auth/login` and OTP verification under 50 simultaneous user logins.
- 🔍 **Search & Filter Stress Testing**: Evaluates database query performance under heavy search load.
- 🔄 **Full User Journey Execution**: Simulates end-to-end user workflows (`Login` ➔ `Browse Catalog` ➔ `Submit Form` ➔ `Dashboard`).
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

### 2. Run the Live Metrics Server
```bash
npm start
```

### 3. How to Run Specific Scenarios:

```bash
# 1. Test Login System under 50-user load:
node load_tester.js --scenario=LOGIN --users=50

# 2. Test Search & Filter under 50-user load:
node load_tester.js --scenario=SEARCH --users=50

# 3. Test Full User Journey (Login -> Search -> Adopt -> Dashboard):
node load_tester.js --scenario=FULL_USER_JOURNEY --users=50
```

---

## 📊 Sample Performance Benchmark Summary
```json
{
  "testName": "50-User Load & Scalability Benchmark - FULL_USER_JOURNEY",
  "assistedBy": "Antigravity AI Chatbot",
  "targetConcurrentUsers": 50,
  "testedScenario": "FULL_USER_JOURNEY",
  "executedSteps": [
    "/api/auth/login",
    "/api/pets/catalog",
    "/api/pets/adopt-submit",
    "/api/user/dashboard"
  ],
  "summary": {
    "totalRequestsSent": 5600,
    "totalResponsesReceived": 5519,
    "totalErrorsEncountered": 81,
    "errorRatePercent": "1.45%",
    "throughputRps": "367.93 req/sec",
    "latency": {
      "avgMs": "98 ms",
      "p95Ms": "132 ms"
    }
  },
  "systemHealth": {
    "status": "PASSED - 50 User Journeys completed stably"
  }
}
```

---

## 📄 License & Attribution
- Author: **Satyam Patel**
- Assisted By: **Antigravity AI Chatbot**
