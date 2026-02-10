import React from 'react';
import './Owl.css';

/**
 * Composant fonctionnel Owl
 * 
 * Ce composant affiche une carte avec une image de hibou et un texte descriptif.
 * - L'image et la description sont passées via les props pour rendre le composant réutilisable.
 * - Si aucune image n'est fournie, un message par défaut est affiché à la place.
 * - Un effet de zoom est appliqué au survol de l'image (via CSS).
 * 
 * Props :
 *   - image (string)      : URL de l'image du hibou
 *   - nom (string)         : nom du hibou (par défaut "Hibou mystérieux")
 *   - description (string) : texte descriptif du hibou
 */
function Owl({ image, nom = "Hibou mystérieux", description }) {
  return (
    <div className="owl-card">
      <h2 className="owl-name">{nom}</h2>

      {/* Rendu conditionnel : affiche l'image si elle est fournie, sinon un message */}
      {image ? (
        <img
          className="owl-image"
          src={image}
          alt={nom}
        />
      ) : (
        <p className="owl-no-image">🦉 Aucune image disponible pour ce hibou.</p>
      )}

      {/* Affichage de la description si elle est fournie */}
      {description && <p className="owl-description">{description}</p>}
    </div>
  );
}

export default Owl;
