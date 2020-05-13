import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends React.Component {
  state = {
    username: null,
  };

  handleLogin = (username) => {
    this.setState({ username });
  };

  handleLogout = () => {
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
