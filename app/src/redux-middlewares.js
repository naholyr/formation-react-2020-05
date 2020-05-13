import { logIn } from './actions';

// Side-effect: load/save login in localstorage
export const loginPersistence = (store) => (next) => (action) => {
  // Init: load
  if (action.type === 'INIT') {
    const username = localStorage.getItem('username');
    if (username) {
      // Use 'next' instead of 'store.dispatch' to avoid re-running
      // all middlewares again (including this one, which would re-write
      // into localStorage)
      // TODO create a dedicated action which would not trigger this
      // middleware and then use store.dispatch?
      store.dispatch(logIn(username));
    }
  }
  // Login: save
  else if (action.type === 'LOG_IN') {
    localStorage.setItem('username', action.payload.username);
  }
  // Logout: delete
  else if (action.type === 'LOG_OUT') {
    localStorage.removeItem('username');
  }
  // Finally, always pass to next middleware
  next(action);
};
