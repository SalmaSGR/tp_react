// HomePage.js

import React from 'react';
import Navigateur from '../SideBare/SideBare';
import '../MesPages/Sidebare.css'; // Assurez-vous d'importer le fichier CSS

const HomePage = () => {
    return (
        <div className="home-page">
            <Navigateur />
            <div className="content">
                <h1>A propos de moi</h1>
                <div className='Pres-item'>
                <p> </p>
                </div>
                <p>Titulaire d'une licence en ingénierie logicielle et actuellement étudiante en deuxième année master en Web Analyse , je suis passionnée par le domaine de l'analyse de données et je suis déterminée à mettre en pratique mes compétences dans un environnement professionnel stimulant.</p>

                <p>Mon cursus universitaire m'a permis d'acquérir une solide base en programmation, en statistiques, ainsi qu'en traitement et analyse de données. J'ai également eu l'occasion de travailler sur divers projets liés à l'analyse de données, ce qui m'a permis de développer des compétences techniques en utilisant des outils tels que Python, R, PowerBI, et des bases de données SQL.</p>

                <p>Mon intérêt pour l'analyse de données est renforcé par ma capacité à résoudre des problèmes complexes, à communiquer efficacement et à travailler en équipe. Je suis convaincue que ces compétences, associées à ma passion pour les données, me permettront de contribuer de manière significative à votre entreprise.</p>
                <div className='Pres-item'>
                <p></p>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
