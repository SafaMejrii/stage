import React from 'react';
import Navbar from './Navbar'; // Importez le composant Navbar
import logo from '../../src/logo.PNG'
import '../styles/Header.css'


function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="header-content">
            <img src={logo} alt="Logo de Votre Entreprise" className="ml-auto" />
          </div>
          <Navbar/>
        </header>
      );
}

export default Header;
