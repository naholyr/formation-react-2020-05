export const logIn = (username) => ({
  type: 'LOG_IN',
  payload: { username },
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

// Just an action dispatched on startup to trigger initializations and side-effects
export const init = () => ({
  type: 'INIT',
});

export const setChatMessages = (messages) => ({
  type: 'SET_CHAT_MESSAGES',
  payload: { messages },
});

export const addChatMessage = (message) => ({
  type: 'ADD_CHAT_MESSAGE',
  payload: { message },
});
