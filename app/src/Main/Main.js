import React from 'react';
import './Main.scss';
import { bool } from 'prop-types';
import Login from '../Login/Login';
import Board from '../Board/Board';
import Chat from '../Chat/Chat';

const Main = ({ authenticated = false, onLogin }) => {
  return (
    <main>
      {!authenticated && <Login onSubmit={onLogin} />}
      {authenticated && <Board />}
      {authenticated && <Chat />}
    </main>
  );
};

Main.propTypes = {
  authenticated: bool,
};

export default Main;