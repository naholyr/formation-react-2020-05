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
