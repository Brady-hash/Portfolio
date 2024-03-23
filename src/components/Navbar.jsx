import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeButton, handleNavClick }) {
  return (
    <nav>
      <ul>
        <li><Link 
        to="/"
        onClick={() => handleNavClick('AboutMe')}
        className={activeButton === 'AboutMe' ? 'active' : ''}
        >About Me
        </Link></li>

        <li><Link 
        to="/portfolio"
        onClick={() => handleNavClick('Portfolio')}
        className={activeButton === 'Portfolio' ? 'active' : ''}
        >Portfolio
        </Link></li>

        <li><Link 
        to="/contact"
        onClick={() => handleNavClick('Contact')}
        className={activeButton === 'Contact' ? 'active' : ''}
        >Contact
        </Link></li>

        <li><Link 
        to="/resume"
        onClick={() => handleNavClick('Resume')}
        className={activeButton === 'Resume' ? 'active' : ''}
        >Resume
        </Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
