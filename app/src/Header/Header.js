import React from 'react';
import './Header.scss';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../actions';

class Header extends React.Component {
  static propTypes = {
    username: string,
    dispatch: func.isRequired,
  };

  handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    this.props.dispatch(logOut());
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

// Map Redux store's state to component's props
const mapStateToProps = (state) => ({
  username: state.username,
});

export default connect(mapStateToProps)(Header);
