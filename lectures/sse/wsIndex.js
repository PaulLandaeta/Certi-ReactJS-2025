const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('code:update', ({ content }) => {
    socket.broadcast.emit('code:update', { content });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('WebSocket server running on http://localhost:3001');
});
