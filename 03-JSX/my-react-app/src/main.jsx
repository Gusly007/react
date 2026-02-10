import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Point d'entrée de l'application React
// On utilise createRoot (React 18+) pour monter le composant App dans le DOM
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
