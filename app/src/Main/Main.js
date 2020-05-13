import React from 'react';
import './Main.scss';
import { bool } from 'prop-types';
import Login from '../Login/Login';
import Board from '../Board/Board';
import Chat from '../Chat/Chat';
import { connect } from 'react-redux';

const Main = ({ authenticated = false }) => {
  return (
    <main>
      {!authenticated && <Login />}
      {authenticated && <Board />}
      {authenticated && <Chat />}
    </main>
  );
};

Main.propTypes = {
  authenticated: bool,
};

// Map Redux store's state to component's props
const mapStateToProps = (state) => ({
  authenticated: state.username !== null,
});

export default connect(mapStateToProps)(Main);
