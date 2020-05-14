const server = require("./server");
const db = require("./db");
const { emit, broadcast } = require("./wsutils");

module.exports = {
  init(client, wss) {
    // chat messages
    const messages = db
      .get("messages")
      .sortBy("date")
      .takeRight(10)
      .reverse()
      .value();
    // connected users
    let users = [];
    server.each((ws) => {
      if (client !== ws && ws.username) {
        users.push(ws.username);
      }
    });
    users.sort();
    // send initial status
    emit(client, "init", { users, messages });
  },

  login(client, username) {
    broadcast(client, "join", username);
    client.username = username;
  },

  logout(client) {
    broadcast(client, "leave", client.username);
    client.username = null;
  },

  whoami(client) {
    if (client.username) {
      emit(client, "status", {
        authenticated: true,
        username: client.username,
      });
    } else {
      emit(client, "status", { authenticated: false });
    }
  },

  chat: {
    list(client) {
      if (!client.username)
        return emit(client, "status", { authenticated: false });
      const messages = db
        .get("messages")
        .sortBy("date")
        .takeRight(10)
        .reverse()
        .value();
      emit(client, "messages", messages);
    },

    post(client, text) {
      if (!client.username)
        return emit(client, "status", { authenticated: false });
      const message = {
        author: client.username,
        date: Date.now(),
        text,
      };
      db.get("messages").push(message).write();
      broadcast(null, "message", message);
    },
  },
};
