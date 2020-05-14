/**
 * Methods:
 *
 * whoami()         : Promise<string>
 * logIn(username)  : Promise<string>
 * logOut()         : Promise
 * chatPost(text)   : Promise
 *
 * Events sent multiple times:
 *
 * onUserJoin(handler)     : handler(username: string)
 * onUserLeave(handler)    : handler(username: string)
 * onChatMessage(handler)  : handler(message: { author: string, text: string, date: numner })
 *
 * Events sent only once (initially):
 *
 * onChatMessages(handler) : handler(messages: Array<{ (see above) }>)
 * onUsers(handler)        : handler(usernames: Array<string>)
 */

// Socket connection

const socket = new WebSocket('wss://app.in.ngrok.io');

socket.onmessage = (e) => {
  const [type, data] = JSON.parse(e.data);
  if (handlerss.has(type)) {
    const handlers = handlerss.get(type);
    handlers.forEach((handler) => {
      handler(data);
    });
  }
};

// Basic EventEmitter-inspired API

const ready = new Promise((resolve, reject) => {
  socket.addEventListener('open', () => resolve());
  socket.addEventListener('error', (err) => reject(err));
});

const emit = (type, data) =>
  ready.then(() => socket.send(JSON.stringify([type, data])));

const handlerss = new Map();

const on = (type, handler) => {
  if (!handlerss.has(type)) {
    handlerss.set(type, new Set([handler]));
  } else {
    handlerss.get(type).add(handler);
  }
  return () => off(type, handler);
};

const off = (type, handler) => {
  const handlers = handlerss.get(type);
  if (handlers) {
    handlers.delete(handler);
  }
};

const once = (type, handler) => {
  const unsubscribe = on(type, (...args) => {
    unsubscribe();
    handler(...args);
  });
  return unsubscribe;
};

const request = (reqType, reqData, resType, timeout = 5000) =>
  new Promise((resolve, reject) => {
    emit(reqType, reqData);
    let aborted = false;
    const timeoutId = setTimeout(() => {
      reject(new Error('Timeout'));
      aborted = true;
    }, timeout);
    once(resType, (data) => {
      if (!aborted) {
        clearTimeout(timeoutId);
        resolve(data);
      }
    });
  });

const requestAuthenticated = (...args) => whoami().then(() => request(...args));

// Exporter API, direct access to WS events

export const whoami = () =>
  request('whoami', null, 'status').then(({ authenticated, username }) => {
    if (authenticated) {
      return username;
    } else {
      throw new Error('Unauthenticated');
    }
  });

export const logIn = (username) => {
  emit('login', username);
  return whoami();
};

export const logOut = () => {
  emit('logout');
  return whoami().then(
    () => {
      // still connected? something's wrong
      throw new Error('Disconnection failed');
    },
    () => {
      // Not connected? expected result
    }
  );
};

export const chatList = () =>
  requestAuthenticated('chat.list', null, 'messages');

export const chatPost = (text) =>
  requestAuthenticated('chat.post', text, 'message');

export const onUserJoin = (handler) => on('join', handler);
export const onUserLeave = (handler) => on('leave', handler);
export const onChatMessage = (handler) => on('message', handler);

// ONE-TIME EVENTS: register once but be able to listen later (like a promise)

// Listen to 'init' event and store this data for later
let initData = null;
on('init', (data) => (initData = data));

// Helper to wait or call immediately
const onInit = (dataType, handler) => {
  if (initData) {
    // Data already available, call handler immediately
    handler(initData[dataType]);
  } else {
    // Data not available yet, call handler ASAP
    on('init', (data) => handler(data[dataType]));
  }
};

export const onChatMessages = (handler) => onInit('messages', handler);
export const onUsers = (handler) => onInit('users', handler);
