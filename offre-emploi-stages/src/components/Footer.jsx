import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importez les icônes des réseaux sociaux

function Footer() {
  const linkStyle = {
    textDecoration: 'none', // Supprimez le soulignement
    color: 'white', // Définissez la couleur des liens
  };

  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className=" small col-md-4">
            <h5>Coordonnées</h5>
            <p>Adresse : ESPRIT, Cebalat Ben Ammar, Ariana, Tunisia</p>
            <p>Téléphone : (+216) 55 844 979</p>
            <p>Email : contact@offre.com</p>
          </div>
          <div className=" small col-md-4">
            <h5>Navigation</h5>
            <div>
              <p><Link to="/" style={linkStyle}>Accueil</Link></p>
              <p><Link to="/offres" style={linkStyle}>Liste des offres</Link></p>
              <p><Link to="/about" style={linkStyle}>À propos de nous</Link></p>
              <p><Link to="/contact" style={linkStyle}>Contact</Link></p>
            </div>
            </div>
            <div className="col-md-4">
            <h5>Réseaux Sociaux</h5>
            <div>
              <a href="#" className="text-light mr-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-light mr-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-light"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <p className="small m-0 mt-2 text-center">&copy; 2023-2024 Powered by Offres.com</p>
      </div>
    </footer>
  );
}

export default Footer;
