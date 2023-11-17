// HomePage.js

import React from 'react';
import Navigateur from '../SideBare/SideBare';
import '../MesPages/Sidebare.css'; // Assurez-vous d'importer le fichier CSS

const Formation = () => {
    return (
        <div className="home-page">
            <div className="sidebar">
                <Navigateur />
            </div>
            <div className="content">
                <h1>Formations</h1>
                <div className="formation-details">
                    <h4>2023 – 2024</h4>
                    <p>2 eme année master en web analyste - Université de lille - Lille,France</p>
                    
                </div>
                <div className="formation-details">
                    <h4>2022 – 2023</h4>
                    <p>1 ere année master en ingénierie des systèmes d'information - Ecole Supérieure en Ingénierie en Sciences Appliquées - Fès,Maroc</p>
                    
                </div>
                <div className="formation-details">
                    <h4>2019-2022</h4>
                    <p>Lience en ingénierie logicielle - Ecole Supérieure en Ingénierie en Sciences Appliquées - Fès,Maroc</p>
                    
                </div>
                <div className="formation-details">
                    <h4>2018-2019</h4>
                    <p>Bac sciences physiques  - Ibn Baja- Fès,Maroc</p>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Formation;
