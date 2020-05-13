import React from 'react';
import './Header.scss';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  static propTypes = {
    username: string,
    dispatch: func.isRequired,
  };

  handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    this.props.dispatch({ type: 'LOG_OUT' });
  };

  render() {
    return (
      <header>
        <h1>Commz</h1>
        {this.props.username && (
          <div className="auth">
            Connecté en tant que <strong>{this.props.username}</strong>
            <button onClick={this.handleClick}>Déconnexion</button>
          </div>
        )}
      </header>
    );
  }
}

export default connect()(Header);
