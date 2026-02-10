import React from 'react';
import Owl from './Owl';
import './App.css';

/**
 * Composant principal App
 * 
 * Utilise le composant Owl plusieurs fois avec différentes props
 * pour démontrer la réutilisabilité du composant.
 */
function App() {
  return (
    <div className="app">
      <h1 className="app-title">🦉 Galerie de Hiboux</h1>

      <div className="owl-gallery">
        {/* Premier hibou avec image et description */}
        <Owl
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bubo_virginianus_06.jpg/800px-Bubo_virginianus_06.jpg"
          nom="Grand-duc d'Amérique"
          description="Le grand-duc d'Amérique est l'un des plus grands hiboux du continent américain. Il est reconnaissable à ses aigrettes proéminentes."
        />
      </div>
    </div>
  );
}

export default App;
