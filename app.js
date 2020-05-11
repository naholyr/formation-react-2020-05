// 1. Déclaration des composants

class Title extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  // state = un objet "dictionnaire"
  // Syntaxe: membres d'instance, déclarés dans le constructeur
  state = {
    color: "blue",
  };

  handleClick(e) {
    e.preventDefault();
    // Évolution du state via "this.setState"
    // on peut appeler "this.setState(objet)" (version simple)
    // mais si les nouvelles valeurs dépendent des anciennes, il faut utiliser la version fonction :
    // ON DOIT TOUJOURS RETOURNER UNE NOUVELLE RÉFÉRENCE (**immutable**)
    this.setState(function (state) {
      if (state.color === "blue") {
        return { color: "red" };
      } else {
        return { color: "blue" };
      }
    });
  }

  render() {
    return React.createElement(
      "h1",
      {
        // Accès au state via "this.state" qui a été déclaré dans le constructeur
        style: { color: this.state.color },
        // Aïe, c'est cassé → comment ça marche "this" ?
        onClick: this.handleClick,
      },
      this.props.text
    );
  }
}

// On peut faire cohabiter classes (stateful) et fonctions (stateless)
function Hello() {
  return React.createElement(
    "main",
    { className: "app" },
    React.createElement(Title, { text: "Hello, React" })
  );
}

// 2. Instanciation du composant racine
const rootElement = React.createElement(Hello);

// 3. Définition du point de montage de l’élément racine
const mountPoint = document.getElementById("app");

// 4. Rendu effectif de l’élément racine sur la page
ReactDOM.render(rootElement, mountPoint);
