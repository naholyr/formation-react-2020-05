import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const authenticated = true; // set to false to be logged in

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
