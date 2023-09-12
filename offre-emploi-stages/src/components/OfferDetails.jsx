import React from 'react';
import { useLocation } from 'react-router-dom';

function OfferDetails({ selectedOffer }) {
    // Utilisez useLocation pour obtenir la route actuelle
    const location = useLocation();

    // Définissez une variable pour vérifier si vous êtes sur la page des offres
    const isOfferListPage = location.pathname === '/offres';

    return (
      <div className="container">
        {isOfferListPage && (
          <div>
            <h2 className="mt-4 mb-3">Détails de l'Offre</h2>
            {selectedOffer ? (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{selectedOffer.titre_poste}</h5>
                  <p className="card-text">
                    <strong>Description de la poste:</strong> {selectedOffer.description}
                  </p>
                  <p className="card-text">
                    <strong>Qualifications requises:</strong> {selectedOffer.qualifications_requises}
                  </p>
                  <p className="card-text">
                    <strong>Entreprise:</strong> {selectedOffer.nom_entreprise}
                  </p>
                  <p className="card-text">
                    <strong>Emplacement:</strong> {selectedOffer.emplacement}
                  </p>
                  <p className="card-text">
                    <strong>Coordonnées de contact:</strong> {selectedOffer.coordonnees_contact}
                  </p>
                  <p className="card-text">
                    <strong>Date limite de candidature:</strong> {selectedOffer.date_limite_candidature}
                  </p>
                  {/* Ajoutez d'autres détails de l'offre ici */}
                </div>
              </div>
            ) : (

              <p style={{
                backgroundColor: '#f2f2f2', // Couleur de fond
                padding: '10px', // Espace intérieur
                fontSize: '18px', // Taille de police
                fontWeight: 'bold', // Texte en gras
                textAlign: 'center', // Centrer le texte horizontalement
              }}>
                Sélectionnez une offre pour afficher les détails.
              </p>
            )}
          </div>
        )}
      </div>
    );
}

export default OfferDetails;
