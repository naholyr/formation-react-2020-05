// 1. Déclaration des composants

// Props: { text: string }
function Title(props) {
  return React.createElement("h1", {}, props.text);
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

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
