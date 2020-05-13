import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

class App extends React.Component {
  static propTypes = {
    username: string,
    dispatch: func.isRequired,
  };

  handleLogin = (username) => {
    localStorage.setItem('username', username);
    this.props.dispatch({ type: 'LOG_IN', payload: { username } });
  };

  handleLogout = () => {
    localStorage.removeItem('username');
    this.props.dispatch({ type: 'LOG_OUT' });
  };

  render() {
    return (
      <>
        <Header username={this.props.username} onLogout={this.handleLogout} />
        <Main
          authenticated={this.props.username !== null}
          onLogin={this.handleLogin}
        />
        <Footer />
      </>
    );
  }
}

// Map Redux store's state to component's props
const mapStateToProps = (state) => ({
  username: state.username,
});

export default connect(mapStateToProps)(App);
