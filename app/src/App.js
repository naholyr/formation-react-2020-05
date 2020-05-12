import React from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const authenticated = false; // set to false to be logged in

class App extends React.Component {
  render() {
    return (
      <>
        <Header authenticated={authenticated} />
        <Main authenticated={authenticated} />
        <Footer />
      </>
    );
  }
}

export default App;
