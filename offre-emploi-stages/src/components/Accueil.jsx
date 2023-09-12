import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img1.jpg'

function Accueil() {
  const backgroundImage = {
    backgroundImage: `url(${img1})`, // Remplacez le chemin par le chemin de votre image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Assurez-vous que la section occupe au moins toute la hauteur de la vue
  };

  return (
    <div style={backgroundImage}>
      <div className="container">
        <div className="jumbotron bg-transparent text-dark text-center">
          <h1 className="display-4">Bienvenue sur notre application d'extraction d'offres d'emploi</h1>
          <p className="lead">
            Vous pouvez utiliser cette application pour rechercher et extraire des informations pertinentes à partir d'offres d'emploi ou de stages.
          </p>
          <p>
            Commencez dès maintenant en naviguant vers la page{" "}
            <Link to="/offres" className="btn btn-light btn-sm">Liste des offres</Link> pour voir les dernières offres disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
