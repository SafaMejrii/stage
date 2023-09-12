const express = require("express");
const router = express.Router();
const offreModel = require("../models/offre");
const { extractInformationFromEmail } = require('../extraction');


router.get("/", async (req, res, next) => {
  try {
    const { search } = req.query;
    let offres = search
      ? await offreModel.find({ titleOffre: search })
      : await offreModel.find();

    // Ajoutez l'en-tête Cache-Control pour empêcher le navigateur de mettre en cache les données
    res.setHeader("Cache-Control", "no-cache");

    // Reste du code pour renvoyer les données
    res.status(200).json(offres);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/*router.post("/ajout", async (req, res, next) => {
  try {
    const { titleOffre, typeOffre,email, competence,  entreprise} = req.body;
    const checkIfOffreExist = await offreModel.find({ titleOffre }); //[]
    //verification sur l'existence du titre
    if (checkIfOffreExist && checkIfOffreExist.length !== 0) {
      throw new Error("offre already exist!");
    }
    

    const offre = await offreModel.create({
        titleOffre,
        typeOffre,
        email,
        competence,
        entreprise
    
    });
    res.status(201).json(offre);
  } catch (error) {
    res.status(500).json(error.message);
  }
});*/
router.post("/ajout", async (req, res, next) => {
  try {
    // Récupérez le texte de l'e-mail depuis le corps de la requête (vous devrez peut-être ajuster la clé selon la façon dont les données sont envoyées depuis votre frontend)
    const emailText = req.body.emailText; // Assurez-vous que cela correspond à la clé de votre texte d'e-mail

    // Utilisez la fonction d'extraction pour extraire les informations de l'e-mail
    const informations = extractInformationFromEmail(emailText);

    // Créez un nouvel objet Offre en utilisant les données extraites
    const offre = await offreModel.create({
      titleOffre: informations["Titre du poste"],
      typeOffre: req.body.typeOffre, // Assurez-vous de récupérer correctement le type d'offre depuis votre frontend
      email: req.body.email, // Assurez-vous de récupérer correctement l'e-mail depuis votre frontend
      competence: informations["Qualifications requises"],
      entreprise: informations["Nom de l'entreprise"],
      emplacement: informations["Emplacement"],
      coordonnees_contact: informations["Coordonnées de contact"],
      date_limite_candidature: informations["Date limite de candidature"],
    });

    // Répondez avec l'objet Offre créé
    res.status(201).json(offre);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/:offreId", async (req, res, next) => {
  try {
    const { offreId } = req.params;
    const checkIfOffreExist = await offreModel.findById(offreId);
    if (!checkIfOffreExist) {
      throw new Error("offre not found!");
    }
    await offreModel.findByIdAndDelete(offreId);
    
    res.json("offre deleted successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:offreId", async (req, res, next) => {
  try {
    const { offreId } = req.params;
    const { titleOffre, typeOffre, email, competence, entreprise} = req.body;
    let checkIfOffreExist = await offreModel.findById(offreId);
    if (!checkIfOffreExist) {
      throw new Error("offre not found!");
    }
    checkIfOffreExist = await offreModel.findOne({titleOffre});
    //verification sur l'existence du titre
    if (checkIfOffreExist) {
      throw new Error("offre already exist!");
    }
 
    const updatedOffre= await offreModel.findByIdAndUpdate(
      offreId,
      {
        $set: { titleOffre, typeOffre, email, competence, entreprise},
      },
      { new: true }
    );
    res.status(200).json(updatedOffre);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:offreId", async (req, res, next) => {
  try {
    const {offreId } = req.params;
    const offre = await offreModel.findById(offreId);
    if (!offre) {
      throw new Error("offre not found!");
    }
    res.status(200).json(offre);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
