## Formation React

1. Découverte de React
2. Mon premier composant statique
  - Sans état
  - Avec état "stateful"
3. Cycle de vie
4. Create React App
  - Eslint : validation du code (style et sémantique)
  - Babel : JS moderne
  - Webpack : modularisation (``import``) et *bundling*
  - Démarrage : ``npm start``
  - Sass : ``npm add node-sass``
  - PropTypes : ``npm add prop-types``
5. JSX
  - Éléments non rendus : ``undefined``, ``null``, ``false``, ``""``
  - Boucles : ``{array.map(item => élément)}``
    - Penser à ``key`` pour les performances et l'état
  - Conditions : ``{test ? élément1 : élément2}`` ou ``{test || élément}``
6. Démarrage du TP "Forum/Chat"
  - Conversion d'une maquette HTML (formulaire de login)
    - class → className
    - autofocus → autoFocus, onclick → onClick, etc…
    - onClick = une fonction, style = un objet
    - classes dynamiques → ``npm add classnames``
  - Un peu le bazar, rangeons au moins les composants dans des dossiers…

## Outils

- npm : [npmjs.com/get-npm](https://www.npmjs.com/get-npm)
- serveur local : ``npx serve``
- *create-react-app* : ``npx create-react-app app``
- ajouter une dépendance : ``npm add nom-du-module``
