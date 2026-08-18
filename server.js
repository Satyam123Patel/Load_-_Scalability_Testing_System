const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory metrics & user session tracking
let activeSessions = new Map();
let requestLogs = [];
let totalRequestsHandled = 0;
let totalErrors = 0;

// Simulation parameters
let serverConfig = {
  maxCapacity: 50,
  cpuUsage: 12.5,
  memUsageMB: 128,
  status: 'OPTIMAL'
};

// Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', activeUsers: activeSessions.size, serverConfig });
});

// Endpoint hit by Virtual Users under load
app.post('/api/simulation/request', (req, res) => {
  const startTime = Date.now();
  const { userId, payloadSize = 10 } = req.body;

  totalRequestsHandled++;

  // Calculate dynamic latency based on active load
  const loadRatio = activeSessions.size / serverConfig.maxCapacity;
  const baseLatency = 40 + Math.random() * 30;
  const loadPenalty = Math.pow(loadRatio, 2) * 120;
  const latency = Math.round(baseLatency + loadPenalty);

  // Simulate occasional failure under high stress (>90% capacity)
  const isError = loadRatio > 0.9 && Math.random() < 0.15;

  setTimeout(() => {
    if (isError) {
      totalErrors++;
      const logEntry = { id: Date.now(), userId, type: 'ERROR', statusCode: 503, latency, timestamp: new Date().toISOString() };
      requestLogs.unshift(logEntry);
      if (requestLogs.length > 100) requestLogs.pop();

      io.emit('metrics_update', getLiveMetrics());
      return res.status(503).json({ error: 'Service Unavailable (Server Overloaded)' });
    }

    const logEntry = { id: Date.now(), userId, type: 'SUCCESS', statusCode: 200, latency, timestamp: new Date().toISOString() };
    requestLogs.unshift(logEntry);
    if (requestLogs.length > 100) requestLogs.pop();

    io.emit('metrics_update', getLiveMetrics());
    res.json({ status: 'success', latency, serverTime: new Date().toISOString() });
  }, latency);
});

// Register Virtual Users in Batch
app.post('/api/users/connect', (req, res) => {
  const targetCount = parseInt(req.body.userCount || '50', 10);
  const targetUrl = req.body.targetUrl || 'Internal Simulation Engine';

  activeSessions.clear();
  requestLogs = [];
  totalRequestsHandled = 0;
  totalErrors = 0;

  // Batch spawn selected virtual users concurrently
  for (let i = 1; i <= targetCount; i++) {
    const userId = `vuser_${String(i).padStart(4, '0')}`;
    activeSessions.set(userId, { connectedAt: new Date(), lastActive: new Date(), targetUrl });
  }

  updateServerResourceMetrics();

  // Simulate ongoing concurrent traffic workload
  const interval = setInterval(() => {
    if (activeSessions.size === 0) {
      clearInterval(interval);
      return;
    }

    activeSessions.forEach((session, uId) => {
      totalRequestsHandled++;
      const latency = Math.round(35 + Math.random() * 45 + (activeSessions.size / 1025) * 60);
      const isErr = activeSessions.size > 1200 && Math.random() < 0.05;

      if (isErr) {
        totalErrors++;
        requestLogs.unshift({ id: Date.now() + Math.random(), userId: uId, statusCode: 503, latency, timestamp: new Date().toISOString() });
      } else {
        requestLogs.unshift({ id: Date.now() + Math.random(), userId: uId, statusCode: 200, latency, timestamp: new Date().toISOString() });
      }

      if (requestLogs.length > 50) requestLogs.pop();
    });

    io.emit('metrics_update', getLiveMetrics());
  }, 1000);

  io.emit('metrics_update', getLiveMetrics());
  res.json({ success: true, count: activeSessions.size, message: `Spawned ${activeSessions.size} Virtual Users` });
});

function updateServerResourceMetrics() {
  const count = activeSessions.size;
  serverConfig.cpuUsage = +(10 + (count / 50) * 75 + Math.random() * 5).toFixed(1);
  serverConfig.memUsageMB = +(120 + count * 4.5 + Math.random() * 10).toFixed(1);
  if (count > 45) serverConfig.status = 'CRITICAL';
  else if (count > 35) serverConfig.status = 'WARNING';
  else serverConfig.status = 'OPTIMAL';
}

function getLiveMetrics() {
  const count = activeSessions.size;
  const avgLatency = requestLogs.length > 0 
    ? Math.round(requestLogs.reduce((acc, r) => acc + r.latency, 0) / requestLogs.length)
    : 0;

  return {
    activeUsers: count,
    targetUsers: 50,
    totalRequests: totalRequestsHandled,
    totalErrors: totalErrors,
    avgLatencyMs: avgLatency,
    throughputRps: +(count * 1.8 + Math.random() * 0.5).toFixed(1),
    serverConfig,
    recentLogs: requestLogs.slice(0, 15)
  };
}

// Socket connection for live real-time dashboard updates
io.on('connection', (socket) => {
  socket.emit('metrics_update', getLiveMetrics());
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Load Testing Engine Backend running on port ${PORT}`);
});
