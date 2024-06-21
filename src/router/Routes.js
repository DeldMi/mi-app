import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'; // Importe seus componentes de página
import Sobre from '../pages/About';
import Contato from '../pages/Contact';

const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />  {/* Remova o `exact` */}
        <Route path="/about" element={ <Sobre /> } />
        <Route path="/contact" element={ <Contato /> } />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;

