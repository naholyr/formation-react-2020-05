const WebSocket = require("ws");
const get = require("lodash.get");
const handlers = require("./handlers");

const wss = new WebSocket.Server({
  port: 4000,
  perMessageDeflate: false,
});

exports.each = (handler) =>
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      handler(client);
    }
  });

wss.on("listening", () => {
  console.log("Websocket server ready (port 4000)");
});

wss.on("error", (err) => {
  console.error(err);
});

// HANDLE HEARTBEATS (see WebSocket's README)

wss.on("connection", function connection(ws) {
  ws.isAlive = true;
  ws.on("pong", () => {
    ws.isAlive = true;
  });
});

const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 10000);

wss.on("close", function close() {
  clearInterval(interval);
});

// BUSINESS LOGIC

wss.on("connection", (ws) => {
  handlers.init(ws, wss);

  ws.on("message", (message) => {
    try {
      const [type, data] = JSON.parse(message);
      const handler = get(handlers, type);
      if (handler) {
        handler(ws, data);
      }
    } catch (err) {
      console.error("Received invalid message", message);
    }
  });

  ws.on("close", () => {
    handlers.logout(ws);
  });
});
