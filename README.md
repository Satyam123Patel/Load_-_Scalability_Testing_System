# 🚀 50 to 10,000-User Load & Scalability Testing System

> **Project Note**: Engineered and built with the assistance of **Antigravity AI Chatbot**.

## 📌 Project Overview
The **50 to 10,000-User Load & Scalability Testing System** is an enterprise-grade benchmarking platform built to test, evaluate, and monitor web application performance under simulated traffic loads scaling up to **10,000 concurrent virtual user sessions**.

It includes an automated virtual user runner that ramps up virtual bot sessions, sends asynchronous concurrent HTTP workloads, measures key latency metrics (min, max, p95), monitors throughput (RPS), discovers maximum user capacity thresholds, and generates structured performance reports.

---

## ✨ Features & What Is Tested
- 👥 **50 to 10,000-Virtual User Concurrency Simulation**: Automatically spawns and manages up to 10,000 virtual users executing simultaneous user actions.
- 🏆 **Extreme Maximum Capacity Discovery Mode**: Automatically steps up load (+250 to +500 users per step up to 10,000 users) to pinpoint the exact breaking point threshold of any web app.
- 🔑 **Authentication & Login Testing**: Tests `/auth` and login endpoints with real credentials (`--email`, `--password`).
- 🔍 **Search & Filter Stress Testing**: Evaluates database query performance under heavy search load.
- 🔄 **Full User Journey Execution**: Simulates end-to-end user workflows (`Login` ➔ `Browse Catalog` ➔ `Submit Form` ➔ `Dashboard`).
- ⚡ **Real-Time Latency & Throughput Benchmarking**: Measures request response times, min/max/average latencies, and 95th percentile (p95) metrics.
- 📊 **Server Resource Monitoring**: Simulates CPU and Memory consumption under heavy user load.
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

### 3. How to Run 50-User Load Tests & Specific Scenarios:

```bash
# 1. Test Login System under 50-user load with email & password:
node load_tester.js --target=http://localhost:5173 --email=satyampatelkatni2003@gmail.com --password=admin123 --users=50

# 2. Test Search & Filter under 50-user load:
node load_tester.js --scenario=SEARCH --users=50

# 3. Test Full User Journey (Login -> Search -> Adopt -> Dashboard):
node load_tester.js --scenario=FULL_USER_JOURNEY --users=50
```

### 4. How to Discover Your Application's Maximum Capacity (Up to 10,000 Users):

```bash
# Automatically steps up load (+250 to +500 users per step up to 10,000) to find exact max capacity:
node load_tester.js --target=http://localhost:5173 --find-max-capacity
```

---

## 📊 Sample Performance Benchmark Summary
```json
{
  "testName": "50 to 10,000-User Load & Scalability Benchmark",
  "assistedBy": "Antigravity AI Chatbot",
  "targetConcurrentUsers": 50,
  "testedTargetUrl": "http://localhost:5173",
  "summary": {
    "totalRequestsSent": 5200,
    "totalResponsesReceived": 5200,
    "totalErrorsEncountered": 0,
    "errorRatePercent": "0.00%",
    "throughputRps": "346.67 req/sec",
    "latency": {
      "avgMs": "79 ms",
      "p95Ms": "107 ms"
    }
  },
  "systemHealth": {
    "status": "PASSED - Target handled concurrent user sessions stably"
  }
}
```

---

## 📄 License & Attribution
- Author: **Satyam Patel**
- Assisted By: **Antigravity AI Chatbot**
