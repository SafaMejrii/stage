import React, { useState } from 'react';

function OfferList({ offers, onSelectOffer }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    emailText: '',
    docxFile: null,
    imageFile: null,
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données au backend (via une requête AJAX, par exemple)
    // Une fois les données extraites, mettez à jour votre liste d'offres
    // et réinitialisez le formulaire
    // Vous pouvez également fermer le formulaire après la soumission réussie
    toggleForm();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Liste des Offres</h2>
      {isFormOpen ? (
        <div>
          <h3>Formulaire de Soumission</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailText" className="form-label">Texte de l'e-mail</label>
              <textarea
                className="form-control"
                id="emailText"
                name="emailText"
                value={formData.emailText}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="docxFile" className="form-label">Document Word</label>
              <input
                type="file"
                className="form-control"
                id="docxFile"
                name="docxFile"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageFile" className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                id="imageFile"
                name="imageFile"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Soumettre</button>
          </form>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={toggleForm}
        >
          Soumettre une Offre
        </button>
      )}
      <div className="row">
        {offers.map((offer, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">{offer.titre_poste}</h3>
                <p className="card-text">{offer.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectOffer(offer)}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferList;
