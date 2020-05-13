import React from 'react';
import './Header.scss';
import { string, func } from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    username: string,
    onLogout: func.isRequired,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.onLogout();
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

export default Header;
