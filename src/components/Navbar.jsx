import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function CustomNavbar({ activeButton, handleNavClick }) {
  return (
    <Nav className="justify-content-end custom-navbarent-end custom-navbar">
      <Nav.Item>
        <Nav.Link as={Link} to="/" onClick={() => handleNavClick('AboutMe')} className={activeButton === 'AboutMe' ? 'active' : ''}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/portfolio" onClick={() => handleNavClick('Portfolio')} className={activeButton === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" onClick={() => handleNavClick('Contact')} className={activeButton === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/resume" onClick={() => handleNavClick('Resume')} className={activeButton === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CustomNavbar;
