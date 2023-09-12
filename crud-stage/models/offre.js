const mongoose = require("mongoose");

// Créez un modèle de schéma pour les offres d'emploi ou de stage
const offreSchema = new mongoose.Schema(
  {
    titre_poste: {
      type: String, // Titre du poste extrait de l'e-mail
      required: true,
    },
  
    qualifications_requises: {
      type: String, // Qualifications requises extraites de l'e-mail
      required: true,
    },
    nom_entreprise: {
      type: String, // Nom de l'entreprise extrait de l'e-mail
      required: true,
    },
    emplacement: {
      type: String, // Emplacement extrait de l'e-mail
      required: true,
    },
    coordonnees_contact: {
      type: String, // Coordonnées de contact extraites de l'e-mail
      required: true,
    },
    date_limite_candidature: {
      type: String, // Date limite de candidature extraite de l'e-mail
      required: true,
    },
  },
  { timestamps: true }
);

// Créez un modèle à partir du schéma
const Offre = mongoose.model("Offre", offreSchema);

// Exportez le modèle
module.exports = Offre;
