import React, { useState, useEffect } from "react";
import CustomNavbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('AboutMe');

    useEffect(() => {
        const determineActiveButton = (path) => {
            if (path === "/") return 'AboutMe';
            if (path.includes("/portfolio")) return 'Portfolio';
            if (path.includes("/contact")) return 'Contact';
            if (path.includes("/resume")) return 'Resume';
            return 'AboutMe';
        };

        // Set the active button based on the current path
        setActiveButton(determineActiveButton(location.pathname));
    }, [location]); // Re-run this effect when the location changes

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
