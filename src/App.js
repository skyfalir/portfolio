import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
