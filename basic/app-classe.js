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

  // "auto-bind" avec la syntaxe raccourcie pour les membres d'instance
  handleClick = (e) => {
    e.preventDefault();
    // Évolution du state via "this.setState"
    // on peut appeler "this.setState(objet)" (version simple)
    // mais si les nouvelles valeurs dépendent des anciennes, il faut utiliser la version fonction :
    // ON DOIT TOUJOURS RETOURNER UNE NOUVELLE RÉFÉRENCE (**immutable**)
    this.setState((state) => {
      if (state.color === "blue") {
        return { color: "red" };
      } else {
        return { color: "blue" };
      }
    });
  };

  // Life cycle

  componentDidMount() {
    console.log("Le composant a été ajouté à la page (le DOM est prêt)");
  }

  componentDidUpdate() {
    console.log(
      "Le composant a été mis à jour suite à une modification de props ou de state (le DOM est prêt)"
    );
  }

  componentWillUnmount() {
    console.log("Le composant va être retiré de la page");
  }

  render() {
    console.log("Le rendu du composant est calculé (le DOM n’est pas prêt)");
    return React.createElement(
      "h1",
      {
        // Accès au state via "this.state" qui a été déclaré dans le constructeur
        style: { color: this.state.color },
        onClick: this.handleClick,
      },
      this.props.text
    );
  }
}

// On peut faire cohabiter classes (stateful) et fonctions (stateless)
const Hello = () =>
  React.createElement(
    "main",
    { className: "app" },
    React.createElement(Title, { text: "Hello, React" })
  );

// 2. Instanciation du composant racine
const rootElement = React.createElement(Hello);

// 3. Définition du point de montage de l’élément racine
const mountPoint = document.getElementById("app");

// 4. Rendu effectif de l’élément racine sur la page
ReactDOM.render(rootElement, mountPoint);
