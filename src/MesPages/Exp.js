// HomePage.js

import React from 'react';
import Navigateur from '../SideBare/SideBare';
import '../MesPages/Sidebare.css'; // Assurez-vous d'importer le fichier CSS

const Exp = () => {
    return (
        <div className="home-page">
            <div className="sidebar">
                <Navigateur />
            </div>
            <div className="content">
                <h1>Formations</h1>
                <div className="formation-details">
                    <h4>Juin 2022 - Août 2022 Stage de 3ème année Licence, Commune de Fès – Maroc :</h4>
                    <p>Mise en place d’une plateforme sous forme d’un site web dynamique.</p>
                    <p>La centralisation des services en ligne, incluant le service journaliste.</p>
                    <p>Outils : Drupal, SQL, Scrum</p>
                    
                </div>
                <div className="formation-details">
                    <h4>Mars 2022 – Mai 2022 Stage, MosaÏque et Poterie de Fès – Maroc :</h4>
                    <p>Application web pour la gestion des visites touristiques, la gestion des commandes et la gestion du stock.</p>
                    <p>Analyse des données des ventes et réalisation d’un rapport pour améliorer le chiffre d’affaire.</p>
                    <p>Outils : PowerBI, ASP.Net & C#, MVC, CSS, Bootstrap</p>
                </div>
               
               
            </div>
        </div>
    );
};

export default Exp;
