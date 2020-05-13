export const logIn = (username) => ({
  type: 'LOG_IN',
  payload: { username },
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
