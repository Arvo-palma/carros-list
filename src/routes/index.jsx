// vitals
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

// components
import Carros from '../pages/Carros';
import Marcas from '../pages/Marcas';
import NovoCarro from '../pages/NovoCarro';
import NovaMarca from '../pages/NovaMarca';
import EditarCarro from '../pages/EditarCarro';
import EditarMarca from '../pages/EditarMarca';

// instances
const queryClient = new QueryClient();

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Navigate to="/carros" /> } />
          <Route exact path="/carros" element={ <Carros /> } />
          <Route exact path="/marcas" element={ <Marcas /> } />
          <Route exact path="/carros/novo" element={ <NovoCarro /> } />
          <Route exact path="/marcas/novo" element={ <NovaMarca /> } />
          <Route exact path="/carros/:id" element={ <EditarCarro /> } />
          <Route exact path="/marcas/:id" element={ <EditarMarca /> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Router;
