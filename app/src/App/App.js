import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends React.Component {
  state = {
    username: localStorage.getItem('username') || null,
  };

  handleLogin = (username) => {
    localStorage.setItem('username', username);
    this.setState({ username });
  };

  handleLogout = () => {
    localStorage.removeItem('username');
    this.setState({ username: null });
  };

  render() {
    return (
      <>
        <Header username={this.state.username} onLogout={this.handleLogout} />
        <Main
          authenticated={this.state.username !== null}
          onLogin={this.handleLogin}
        />
        <Footer />
      </>
    );
  }
}

export default App;
