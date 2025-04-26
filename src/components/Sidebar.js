import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faAddressBook, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SidebarMenu({ openLoginModal }) {
  return (
    <nav className="sidebar-menu">
      <div className="menu-item login-btn" onClick={openLoginModal}>
        <FontAwesomeIcon icon={faUser} />
        <span className="menu-text">Entrar</span>
      </div>

      <Link to="/" className="menu-item">
        <FontAwesomeIcon icon={faHome} />
        <span className="menu-text">Inicio</span>
      </Link>
	  
	  
	  
	  
      <Link to="/contacto" className="menu-item">
        <FontAwesomeIcon icon={faAddressBook} />
        <span className="menu-text">Contacto</span>
      </Link>

      <Link to="/nosotros" className="menu-item">
        <FontAwesomeIcon icon={faInfoCircle} />
        <span className="menu-text">Nosotros</span>
      </Link>
    </nav>
  );
}

export default SidebarMenu;
