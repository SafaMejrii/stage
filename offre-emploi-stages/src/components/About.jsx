import React from 'react';
import Safa from '../safa.jpg';
import Mazen from '../mazen.jpg';

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-dark">À propos de nous</h1>
          <p className="text-dark">
            Notre application a été développée pour simplifier la recherche d'informations pertinentes dans les offres d'emploi ou de stages. Nous utilisons des techniques d'extraction de données avancées pour vous fournir les détails dont vous avez besoin.
          </p>
          <p className="text-dark">
            Notre équipe est dévouée à rendre le processus de recherche d'emploi plus efficace pour les chercheurs d'emploi. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter à l'adresse suivante : <a href="mailto:contact@offre.com" className="text-dark">contact@offre.com</a>.
          </p>
        </div>
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
              src={Safa}
              alt="Image de Safa"
              className="img-fluid rounded-circle larger-image"
              style={{ maxWidth: '400px' }}
            />
            <h4 className="mt-3 text-dark">Safa</h4>
          </div>
          <div className="text-center">
            <img
              src={Mazen}
              alt="Image de Mazen"
              className="img-fluid rounded-circle larger-image"
              style={{ maxWidth: '400px' }}
            />
            <h4 className="mt-3 text-dark">Mazen</h4>
          </div>
        </div>
      </div>

      <div className="container mt-5" style={{ marginBottom: '50px' }}>
        <h2 className="text-center text-dark">Témoignages</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-dark">Témoignage 1</h4>
                <p className="card-text text-dark">
                  "Nous avons trouvé le travail de l'équipe d'Offres.com incroyablement utile dans notre recherche d'emploi. Merci!"
                </p>
                <p className="card-text text-dark">- Témoin 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-dark">Témoignage 2</h4>
                <p className="card-text text-dark">
                  "L'application Offres.com a vraiment facilité la recherche d'emplois pour moi. Je recommande vivement!"
                </p>
                <p className="card-text text-dark">- Témoin 2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-dark">Témoignage 3</h4>
                <p className="card-text text-dark">
                  "L'équipe derrière Offres.com est incroyablement compétente et dédiée. Leur service est inestimable."
                </p>
                <p className="card-text text-dark">- Témoin 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
