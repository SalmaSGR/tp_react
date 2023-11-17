// HomePage.js

import React from 'react';
import Navigateur from '../SideBare/SideBare';
import '../MesPages/Sidebare.css'; // Assurez-vous d'importer le fichier CSS

const Comp = () => {
    return (
        <div className="home-page">
            <div className="sidebar">
                <Navigateur />
            </div>
            <div className="content">
                <h1>Compétences</h1>
                <div className="formation-details">
                    <h4>Langages de programmation</h4>
                    <p>Python, R, C, C++, C#, Java, PHP, NodeJS, JavaScript, HTML, CSS</p>
                    
                    
                </div>
                <div className="formation-details">
                    <h4>Technologies </h4>
                    <p>JEE, .Net, Android</p>
                    
                    
                </div>
                <div className="formation-details">
                    <h4>Base de données</h4>
                    <p>SQL/MySQL, Oracle, NoSQL/MongoDB</p>
                    
                    
                </div>
                <div className="formation-details">
                    <h4>Analyse et Sciences de données</h4>
                    <p>Analyse des données, Business Intelligence, Data Mining, Data
Warehouse, ETL, OLAP, Recherche Opérationnelle, Analyse Numérique, Statistique, Probabilité, Langage R</p>
                    
                    
                </div>
                <div className="formation-details">
                    <h4>Gestion du projet</h4>
                    <p>Méthodes Agiles</p>
                    
                    
                </div>
               
               
            </div>
        </div>
    );
};

export default Comp;
