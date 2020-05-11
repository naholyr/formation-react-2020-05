import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

class Title extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    color: 'blue',
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState((state) => {
      if (state.color === 'blue') {
        return { color: 'red' };
      } else {
        return { color: 'blue' };
      }
    });
  };

  render() {
    return (
      <h1 style={{ color: this.state.color }} onClick={this.handleClick}>
        {this.props.text}
      </h1>
    );
  }
}

function App() {
  return (
    <main className="App">
      <Title text="Hello, React" />
    </main>
  );
}

export default App;
