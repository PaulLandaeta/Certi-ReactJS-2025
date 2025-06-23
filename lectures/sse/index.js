const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5010;

app.use(cors());
app.use(express.json());

let clientes = [];
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.flushHeaders();

  clientes.push(res);

  res.on("close", () => {
    clientes = clientes.filter((client) => {
      client !== res;
    });
  });
});

app.post("/sendMessage", (req, res) => {
  const { message } = req.body;
  clientes.forEach((client) => {
    client.write(`data: ${JSON.stringify(message)}\n\n`);
  });
  res.status(200).json({
    sent: true,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`El servidor esta UP en el puerto: ${PORT}`);
});
