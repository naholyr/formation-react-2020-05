const WebSocket = require("ws");
const server = require("./server");

exports.emit = (ws, type, data) => {
  ws.send(JSON.stringify([type, data]));
};

exports.broadcast = (ws /* optional */, type, data) => {
  server.each((client) => {
    if (client !== ws) {
      exports.emit(client, type, data);
    }
  });
};
