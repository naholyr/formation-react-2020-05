import React from 'react';
import './Login.scss';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../actions';

class Login extends React.Component {
  static propTypes = {
    onLogin: func.isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    localStorage.setItem('username', username);
    this.props.onLogin(username);
  };

  render() {
    return (
      <section className="Login">
        <h2>Identification</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Votre nom d’utilisateur"
            autoFocus
          />
          <button type="submit">Go !</button>
        </form>
      </section>
    );
  }
}

/*

// Composant non contrôlé =
// - le parent laisse l'enfant gérer son state et son rendu
// - le parent envoie les valeurs initiales
// - si besoin d'accéder aux valeurs, une réf ou un callback peut être utilisée
class FormUncontrolled extends React.Component {
  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const formDOMElement = this.formRef.current; // Note: ici la réf n'est pas utile car e.target est disponible
    const username = formDOMElement.elements.username.value;
    alert(`Login = ${username}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
        <input
          type="text"
          name="username"
          placeholder="Votre nom d’utilisateur"
          defaultValue="Quelqu'un"
          autoFocus
        />
        <button type="submit">Go ! (champ non contrôlé)</button>
      </form>
    );
  }
}

// Composant contrôlé =
// - le parent contrôle intégralement le rendu et le comportement de l'enfant
// - l'enfant est donc "stateless"
// - le parent est généralement "stateful"
class FormControlled extends React.Component {
  state = {
    username: "Quelqu'un", // Field's value
  };

  handleInput = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    this.setState({ username: newValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login = ${this.state.username}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Votre nom d’utilisateur"
          value={this.state.username}
          autoFocus
          onInput={this.handleInput}
        />
        <button type="submit">Go ! (champ contrôlé)</button>
      </form>
    );
  }
}

*/

// List of specialized functions dispatching actions, passed as props
const mapDispatchToProps = (dispatch) => ({
  onLogin: (username) => {
    dispatch(logIn(username));
  },
});

export default connect(null, mapDispatchToProps)(Login);
