// 1. Déclaration des composants
function Hello() {
  return React.createElement(
    "h1", // Élément HTML = nom du tag
    {
      // Propriétés de l’élément, ici attributs HTML… sauf exceptions
      className: "app", // Attention, pas "class" mais "className"
      style: { color: "blue" }, // Attention, pas une chaîne mais un objet
    },
    "Hello, React" // Enfants de l’élément
  );
}

// 2. Instanciation du composant racine
const rootElement = React.createElement(Hello);

// 3. Définition du point de montage de l’élément racine
const mountPoint = document.getElementById("app");

// 4. Rendu effectif de l’élément racine sur la page
ReactDOM.render(rootElement, mountPoint);
