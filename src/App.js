
import React from 'react';
import './App.css';
import HomePage from './MesPages/Home';
import Formation from './MesPages/Formations';
import Exp from './MesPages/Exp';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Comp from './MesPages/Comp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MesFormations' element={<Formation />} />
          <Route path='/MesExperiences' element={<Exp />} />
          <Route path='/MesCompetences' element={<Comp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
