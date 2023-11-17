import React from "react";
import '../MesPages/Sidebare.css'; // Assurez-vous d'importer le fichier CSS
import { NavLink } from "react-router-dom";
const Navigateur = () => {
  return (
    <div className="sidebar">
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <div className="profile-picture-container">
        <img
          src="img.jpg"
          alt="Votre photo"
          className="profile-picture"
        />
      </div>
      <h2>Sghouri Salma</h2>
      <h4>22 ans</h4>
      <div className="contact-links">
        <a href="mailto:exemple@gmail.com" >mail : sghourisalma13@gmail.com</a> 
        <a href="tel:+123456789">Téléphone</a>
        <a href="https://www.linkedin.com/">linkedin : Salma Sghouri</a>
        {/* Ajoutez d'autres liens de contact ici */}
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/MesFormations" activeClassName="navActive">
              <span>Mes Formations</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/MesExperiences" activeClassName="navActive">
              <span>Mes Experiences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/MesCompetences" activeClassName="navActive">
              <span>Mes Competences</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigateur;
