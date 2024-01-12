## Projet : ToDo-list

### Description du projet
Pour ce projet, il faudra créer une Todo-List où l'utilisateur pourra ajouter des tâches qu'il doit
effectuer, les modifier, les supprimer. Il devra pouvoir les valider, et les tâches terminées devront présenter un aspect
visuel différent des tâches non terminées.

### Fonctionnalités principales
1. Ajout d'une tâche avec un titre, une description (qui peut être optionnelle), un indicateur de priorité parmis les suivants (classique, important, urgent, trés urgent) et un id auto-généré
2. Modification des tâches (sur une page différente)
3. Suppréssion des tâches
4. Validation d'une tâche
5. filtrage des taches par priorité et état (en cours, terminée)
6. Validation des données avant enregistrement (on s'assurera que chaque tâche aura au moins un titre et que ce dérnier n'est pas vide)

### Exigences techniques
- Utiliser React.js comme framework de développement
- Utiliser au choix `redux` ou `@reduxjs/toolkit` pour gérer l'état global de votre application
- Utiliser CSS ou un framework de votre choix pour le style et la mise en page de l'application.
- Utiliser `react-router-dom` pour le routage de votre application

### Points de notation
- Gestion des tâches `(5 points)` : La gestion des tâches doit présenter toutes les fonctionnalités demandées sans effet inattendu
- Mise en place d'un état global avec `redux` ou `@reduxjs/toolkit` `(5 points)` : Les reducers sont bien écrit, chaque possibilité de la bibliothèque est utilisée à bon escient.
- Mise en place d'un système de route avec `react-router-dom` `(5 points)` : Le router est mis en place correctement, au moins une route dynamique est utilisé.
- UI / UX `(3 points)` : L'aspect général et l'interface utilisateur de l'application sont à prendre en compte.

### Note finale
La note finale sur 20 sera calculé en fonction du nombre total de points obtenu sur un total de 18 points possibles.

## Bonne chance et amusez-vous bien

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
