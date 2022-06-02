// vitals
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Carros from '../pages/Carros';
import Marcas from '../pages/Marcas';
import NovoCarro from '../pages/NovoCarro';
import NovaMarca from '../pages/NovaMarca';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/carros" /> } />
        <Route exact path="/carros" element={ <Carros /> } />
        <Route exact path="/marcas" element={ <Marcas /> } />
        <Route exact path="/carros/novo" element={ <NovoCarro /> } />
        <Route exact path="/marcas/novo" element={ <NovaMarca /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
