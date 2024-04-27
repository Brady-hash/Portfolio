import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function CustomNavbar({ activeButton, handleNavClick }) {
  console.log(activeButton);
  return (
    <Nav className="justify-content-end custom-navbarent-end custom-navbar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" onClick={() => handleNavClick('AboutMe')} className={activeButton === 'AboutMe' ? 'active' : ''}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/portfolio" onClick={() => handleNavClick('Portfolio')} className={activeButton === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact" onClick={() => handleNavClick('Contact')} className={activeButton === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/resume" onClick={() => handleNavClick('Resume')} className={activeButton === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CustomNavbar;
