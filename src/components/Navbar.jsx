import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function CustomNavbar({ activeButton }) {
  return (
    <Nav className="justify-content-end custom-navbar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className={activeButton === 'AboutMe' ? 'active' : ''}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/portfolio" className={activeButton === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact" className={activeButton === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/resume" className={activeButton === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CustomNavbar;
``
