import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Страница "О нас" (Nosotros)
import ContactPage from './pages/ContactPage'; // Страница "Contacto"
import CatalogPage from './pages/CatalogPage'; // Страница "Catálogo"

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, marginLeft: '60px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            {/* Можно добавлять другие страницы по аналогии */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
