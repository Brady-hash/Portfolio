import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme, IconButton,  } from '@mui/material';
import Logo from "../assets/imgs/Logo.png";
import SideBar from "./SideBar";
import MenuIcon from '@mui/icons-material/Menu';


function CustomNavbar({ activeButton }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  }

  return (
    <>
      <AppBar position="fixed" sx={{
        top: 0,
        width: '100%',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: scrolled ? '#ffffff' : '#2e79ba',
        boxShadow: scrolled ? 1 : 0,
        color: scrolled ? '#212529' : '#FFFFFF',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', marginRight: '5vw', marginLeft: '2vw' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '75px' }} />
          </Box>
          {smScreen ? (
            <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}
              sx={{ pr:1, pt:2, height: '50px', width: '50px'}}
            >
              <MenuIcon sx={{height: 'auto', width: "40px"}} />
            </IconButton>
          ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {['About Me', 'Work', 'Contact', 'Resume'].map((text) => (
              <Button
                key={text}
                component={NavLink}
                to={text === 'About Me' ? '/' : `/${text.replace(' ', '').toLowerCase()}`}
                className={activeButton === text.replace(' ', '') ? 'active' : ''}
                sx={{
                  fontSize: '12px',
                  color: 'inherit',
                  textDecoration: 'none',
                  '&.active': {
                    color: scrolled ? '#2e79ba' : '#212529',
                  },
                  margin: '0 8px'
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
          )}
        </Toolbar>
      </AppBar>
      <SideBar sideBarToggle={drawerOpen} onClose={toggleDrawer(false)} activeButton={activeButton}/>
      <Box 
      sx={{
       height: '50px',
       '@media (max-width:601px)': {
        height: '110px'
       }
      }} />
    </>
  );
}

export default CustomNavbar;
