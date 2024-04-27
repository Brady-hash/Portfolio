import React from "react";
import CustomNavbar  from "./Navbar";
import { useState } from 'react';

function Header() {
    const [activeButton, setActiveButton] = useState('AboutMe');

    const handleNavClick = (name) => {
        setActiveButton(name);
    };

    return (
        <header>
            <h1>Brady Davis</h1>
            <CustomNavbar activeButton={activeButton} handleNavClick={handleNavClick} />
        </header>
    );
}

export default Header;
