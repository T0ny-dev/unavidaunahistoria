import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-modern">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo-img">
          <img src="/logo.png" alt="Logo Una Vida" />
        </a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="/sobre-nosotros" onClick={() => setIsOpen(false)}>Sobre Nosotros</a></li>
          <li><a href="/campañas" onClick={() => setIsOpen(false)}>Campañas</a></li>
          <li><a href="/contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 