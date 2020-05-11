// 1. Déclaration des composants

const Title = ({ text }) => {
  const [color, setColor] = React.useState("blue");

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

  // Life cycle

  React.useEffect(
    () => {
      // did mount
      console.log("Le composant a été ajouté à la page (le DOM est prêt)");
      // will unmount = cleanup
      return () => {
        console.log("Le composant va être retiré de la page");
      };
    },
    [] // dépendances vides = une seule fois dans la vie du composant
  );

  React.useEffect(
    () => {
      console.log(
        "Le composant a été mis à jour suite à une modification de props ou de state (le DOM est prêt)"
      );
    }
    // pas de dépendance = à chaque mise à jour du composant
  );

  // Render = appel de la fonction
  console.log("Le rendu du composant est calculé (le DOM n’est pas prêt)");

  return React.createElement(
    "h1",
    {
      style: { color },
      onClick: handleClick,
    },
    text
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

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
