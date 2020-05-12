import React from 'react';
import './Login.scss';
import { bool } from 'prop-types';

class Login extends React.Component {
  render() {
    return (
      <section className="Login">
        <h2>Identification</h2>
        <form>
          <input
            type="text"
            placeholder="Votre nom d’utilisateur"
            value="Quelqu'un"
            autoFocus
          />
          <button type="submit">Go !</button>
        </form>
      </section>
    );
  }
}

export default Login;
