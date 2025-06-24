const express = require("express");
const http = require("http");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const { timeStamp } = require("console");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const ws_server = new WebSocketServer({ server });
const clients = new Map();

ws_server.on("connection", (socket) => {
  console.log("User connected");
  clients.set(socket, { room: null });

  socket.on("message", (content) => {
    const message = JSON.parse(content);
    console.log(message);

    clients.set(socket, { room: message });
    // if (message.type === "message") {
    const roomSender = clients.get(socket).room;
    console.log(roomSender);
    if (!roomSender) return;
    const payload = {
      message: message.message,
      room: roomSender
    };

    for ([client, info] of clients.entries()) {
      // console.log(client);
      client.send(JSON.stringify(payload));
    }
    // clients.forEach((client) => {
    //   console.log("sending message");
    //   client.send(payload);
    // });
    //}
    // socket.broadcast.emit("code:update", { content });
  });

  socket.on("close", () => {
    console.log("User disconnected");
  });
});

server.listen(5010, () => {
  console.log("WebSocket server running on http://localhost:5010");
});
