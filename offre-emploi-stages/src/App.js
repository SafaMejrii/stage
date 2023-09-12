import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import OfferList from './components/OfferList';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import OfferDetails from './components/OfferDetails';
import Footer from './components/Footer';


function App() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Supposons que vous ayez une liste d'offres, par exemple :
  const offers = [
    {
      titre_poste: "Ingénieur en logiciel",
      description: "En tant qu'ingénieur en logiciel, vous serez responsable de la conception, du développement et de la maintenance de nos applications.",
      qualifications_requises: "Diplôme en informatique ou domaine connexe, Expérience en développement de logiciels, Connaissance de Python, Java et bases de données SQL.",
      nom_entreprise: "TechInnov",
      emplacement: "San Francisco, Californie",
      coordonnees_contact: "careers@techinnov.com",
      date_limite_candidature: "15 octobre 2023"
    },
    {
      titre_poste: "Developpeur",
      description: "En tant que developpeur, vous serez responsable de la conception, du développement de nos applications web.",
      qualifications_requises: "Diplôme en informatique ou domaine connexe, Expérience en développement web , Connaissance react, angular et nodejs, et bases de données Nosql.",
      nom_entreprise: "Vermeg",
      emplacement: "Lac1,Tunisie",
      coordonnées_contact: "careers@vermeg.com",
      date_limite_candidature: "15 octobre 2023"
    },
    // Ajoutez d'autres offres ici...
  ];

  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
  };

  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/offres" element={<OfferList offers={offers} onSelectOffer={handleSelectOffer} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <OfferDetails selectedOffer={selectedOffer} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
