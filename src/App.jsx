import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: '#2e79ba'
    }}>
      <Header />
      <Box component="main" sx={{flexGrow: 1, backgroundColor: '#fff'}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
