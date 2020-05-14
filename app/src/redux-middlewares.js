import { logIn } from './actions';
import * as api from './api';

// Side-effect: load/save login in localstorage
export const loginPersistence = (store) => (next) => (action) => {
  // Init: load
  if (action.type === 'INIT') {
    const username = localStorage.getItem('username');
    if (username) {
      // Use 'store.dispatch' to ensure we pass all middlewares again
      store.dispatch(logIn(username));
    }
  }
  // Login: save
  else if (action.type === 'LOG_IN') {
    const username = action.payload.username;
    api
      .logIn(username)
      .then(() => {
        localStorage.setItem('username', username);
      })
      .catch((err) => {
        // Logging in failed: don't store!
        console.error(err);
        localStorage.removeItem('username');
      });
  }
  // Logout: delete
  else if (action.type === 'LOG_OUT') {
    api
      .logOut()
      .then(() => {
        localStorage.removeItem('username');
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // Finally, always pass to next middleware
  next(action);
};
