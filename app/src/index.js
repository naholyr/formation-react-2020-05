import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { Provider } from 'react-redux';
import * as api from './api';

api.onChatMessages((messages) => console.log('Messages', messages));
api.onUsers((users) => console.log('Users', users));
api.onChatMessage((message) => console.log('Message', message));
api.onUserJoin((username) => console.log('User join', username));
api.onUserLeave((username) => console.log('User leave', username));
window.logIn = api.logIn;
window.logOut = api.logOut;
window.post = api.chatPost;
console.log(
  'Test in console: use "logIn(username)", "logOut()" and "post(text)" to chat'
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
