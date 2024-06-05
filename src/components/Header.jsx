import React, { useState, useEffect } from 'react';
import CustomNavbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

function Header() {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('AboutMe');

    useEffect(() => {
        const determineActiveButton = (path) => {
            if (path === "/") return 'AboutMe';
            if (path.includes("/work")) return 'Work';
            if (path.includes("/contact")) return 'Contact';
            if (path.includes("/resume")) return 'Resume';
            return 'AboutMe';
        };

        setActiveButton(determineActiveButton(location.pathname));
    }, [location]);

    const handleNavClick = (name) => {
        setActiveButton(name);
    };

    return (
        <Box component="header" sx={{ width: '100%', overflowX: 'hidden', boxSizing: 'border-box'}}> 
            <CustomNavbar activeButton={activeButton} handleNavClick={handleNavClick} />
        </Box>
    );
}

export default Header;
