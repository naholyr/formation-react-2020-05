import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class App extends React.Component {
  static propTypes = {
    username: string,
  };

  render() {
    return (
      <>
        <Header username={this.props.username} />
        <Main authenticated={this.props.username !== null} />
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
