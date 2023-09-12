import React from 'react';

// Composant pour la page "Contactez-nous"
function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Contactez-nous</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-info">
            <h3>Nos Coordonnées</h3>
            <div className="contact-tile">
              <h4>Adresse</h4>
              <p>ESPRIT, Cebalat Ben Ammar, Ariana, Tunisia</p>
            </div>
            <div className="contact-tile">
              <h4>Téléphone</h4>
              <p>+216 55 844 979</p>
            </div>
            <div className="contact-tile">
              <h4>Email</h4>
              <p>mejri.safa@esprit.tn</p>
            </div>
            <div className="contact-tile">
              <h4>Horaires</h4>
              <p>Lundi - Vendredi : 9h00 - 18h00</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ marginBottom: '50px' }}>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input type="text" className="form-control" id="nom" name="nom" />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" className="form-control" id="prenom" name="prenom" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="commentaire">Commentaire</label>
                <textarea className="form-control" id="commentaire" name="commentaire" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
