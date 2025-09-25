import React from 'react';
import './HomePage.css'; // Créez ce fichier pour le style

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="redirection-card">
        <h1>Allez sur Kweb</h1>
        <p>Nous avons déménagé ! Pour découvrir notre nouveau site, cliquez sur le bouton ci-dessous :</p>
        <a href="https://kanweb.pythonanywhere.com/" className="redirection-button">
          Visitez notre nouveau site
        </a>
      </div>
    </div>
  );
};

export default HomePage;
