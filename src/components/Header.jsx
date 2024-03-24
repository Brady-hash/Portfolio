import React from "react";
import Navbar from "./Navbar";
import { useState } from 'react';


function Header(){
    const [activeButton, setActiveButton] = useState('AboutMe');

    const handleNavClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header>
            <h1>Brady Davis</h1>
            <Navbar activeButton={activeButton} handleNavClick={handleNavClick} />
        </header>
    );
}

export default Header;