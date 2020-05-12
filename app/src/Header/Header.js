import React from 'react';
import './Header.scss';
import { bool } from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    authenticated: bool,
  };

  static defaultProps = {
    authenticated: false,
  };

  handleClick = (e) => {
    console.log('TODO disconnect');
  };

  render() {
    return (
      <header>
        <h1>Commz</h1>
        {this.props.authenticated && (
          <div className="auth">
            Connecté en tant que <strong>Quelqu'un</strong>
            <button onClick={this.handleClick}>Déconnexion</button>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
