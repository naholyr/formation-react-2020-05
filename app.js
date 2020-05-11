// 1. Déclaration des composants

// Composant fonction: props passées en argument
// Utilisation du destructuring pour simplifier
const Title = ({ text }) => {
  // Les composants fonctions "stateless" peuvent aussi être "stateful" grâce aux "hooks"

  // Avantage : un "state" par variable d'état, pas besoin d'un objet fourre-tout
  // Inconvénient : un "setter" par variable, et destructuring obligatoire
  const [color, setColor] = React.useState("blue");

  // En version classe, on gardait toujours la même référence tout le long de la vie de l'élément
  // Pour garder ce comportement, et ne pas recréer une variable à chaque rendu, on a ce hook
  // Avantage : performances et précision (on peut le faire "expirer" grâce au 2e argument)
  // Inconvénient : lourdaud
  const handleClick = React.useCallback((e) => {
    e.preventDefault();
    // On apprécie le setter plus léger que le "setState" générique
    setColor((color) => {
      if (color === "blue") {
        return "red";
      } else {
        return "blue";
      }
    });
  });

  // On apprécie également que props & state soient de simples variables :
  // plus de problème de scope, de this.props ou this.state, etc…
  return React.createElement(
    "h1",
    {
      style: { color },
      onClick: handleClick,
    },
    text
  );
};

// On aurait plutôt envie d'utiliser du typage au niveau de l'argument…
Title.propTypes = {
  text: PropTypes.string.isRequired,
};

/*
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

  render() {
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
*/

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
