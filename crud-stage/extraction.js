const emailPattern = /opportunité pour un (.+?) chez/gi;
const descriptionPattern = /Description du poste\s*:\s*(.+?)\s*(?:Qualifications requises|Coordonnées de contact|avant le \d{1,2} \w+ \d{4})/gs;
const qualificationsPattern = /(?:Qualifications requises|Compétences)[:\s]*(.*?)(?=\s*(?:Alors pour postuler, envoyez|Coordonnées de contact|avant le \d{1,2} \w+ \d{4}|$))/gs;
const entreprisePattern = /chez (.+?)\./gi;
const emplacementPattern = /basé(?:e)? à (.+?)\s*et/gi;
const contactPattern = /envoyez votre CV à (.+?) avant/gi;
const dateLimitePattern = /avant le (\d{1,2} \w+ \d{4})/gi;

function extractInformationFromEmail(emailText) {
  const information = {};

  const titreMatch = emailText.match(emailPattern);
  const descriptionMatch = emailText.match(descriptionPattern);
  const qualificationsMatch = emailText.match(qualificationsPattern);
  const entrepriseMatch = emailText.match(entreprisePattern);
  const emplacementMatch = emailText.match(emplacementPattern);
  const contactMatch = emailText.match(contactPattern);
  const dateLimiteMatch = emailText.match(dateLimitePattern);

  information["Titre du poste"] = titreMatch ? titreMatch[1] : "Aucun titre de poste trouvé";
  information["Description du poste"] = descriptionMatch ? descriptionMatch[1] : "Aucune description de poste trouvée";
  information["Qualifications requises"] = qualificationsMatch ? qualificationsMatch[1] : "Aucunes qualifications trouvées";
  information["Nom de l'entreprise"] = entrepriseMatch ? entrepriseMatch[1] : "Aucun nom d'entreprise trouvé";
  information["Emplacement"] = emplacementMatch ? emplacementMatch[1] : "Aucun emplacement trouvé";
  information["Coordonnées de contact"] = contactMatch ? contactMatch[1] : "Aucunes coordonnées de contact trouvées";
  information["Date limite de candidature"] = dateLimiteMatch ? dateLimiteMatch[1] : "Aucune date limite de candidature trouvée";

  return information;
}

module.exports = { extractInformationFromEmail };
