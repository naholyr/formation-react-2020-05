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
  - Le pattern "Wrapper" pour réutiliser des comportements
  - Gestion de formulaire
    - Composant contrôlé = le parent contrôle son rendu à tout moment
    - Composant non contrôle = le parent donne un état initial et l'enfant évolue de son côté

## Glossaire Redux

- **Action** = objet représentant une action effectuée dans l'action, avec les propriétés "type" (chaîne obligatoire, l'identifiant de l'action) et "payload"/"meta"/"error"
- **Action creator** = fonction utilitaire retournant une action, utile pour éviter les répétitions fastidieuses
- **Reducer** = la fonction de mutations, prenant en paramètre l'état courant et l'action dispatchée, retourne un nouvel état complet (attention, pas de modification de l'objet en entrée, on retourne bien un nouvel objet)
- **Middleware** = une fonction interceptant une action, pouvant elle-même redispatcher une autre action, passer la main au middleware suivant, ou même interrompre le parcours de l'action, permettant ainsi la gestion centralisée des effets de bord
- **Store** = objet créé à partir d'un état initial et du reducer, éventuellement accompagné de "middlewares", il est responsable de la gestion de l'état (grâce au reducer) et du dispatching
- **Dispatcher** = la fonction fournie par le store pour diffuser/dispatcher des actions au store, déclenchant le passage dans le reducer, la génération d'un nouvel état, et la mise à jour des composants connectés
- **Composant connecté** = composant créé à partir d'un composant "standard" recevant des props pour définir son affichage, passé à la fonction retourné par la fonction "connect" appelée avec pour paramètres optionnels les fonctions de mapping "mapStateToProps" et "mapDispatchToProps"
- **mapStateToProps** = fonction de mapping recevant l'état actuel du store, et retournant les props à injecter au composant connecté
- **mapDispatchToProps** = fonction de mapping recevant la fonction dispatch, et retournant des props de type fonction injectées au composant connecté (elle peut être raccourcie en fournissant directement un objet dont les clés sont les noms des props fonction injectées, et les valeurs les action creators qui seront utilisés derrière)


## Outils

- npm : [npmjs.com/get-npm](https://www.npmjs.com/get-npm)
- serveur local : ``npx serve``
- *create-react-app* : ``npx create-react-app app``
- ajouter une dépendance : ``npm add nom-du-module``

### Commandes npm utiles

- `npm install` = récupérer les dépendendances actuelles
- `npm start` = démarrer le projet en dév
- `npm run build` = générer le build de prod
- `npm add <module>` = ajouter une dépendance
- `npm remove <module>` = retirer une dépendance
- `npm outdated` = lister l'état des dépendances
- `npm upgrade [module]` = mettre à jour une dépendance (modifie le package-lock)
- `npm audit` = liste les failles de sécurité
