import React from "react";
import { Box, Grid } from '@mui/material';
import githubLogo from '../assets/svgs/github.svg';
import linkedinLogo from '../assets/svgs/linkedin.svg';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#2AA0FF', p: 2 }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <a href="https://github.com/Brady-hash" target="_blank" rel="noopener noreferrer">
            <Box component="img" src={githubLogo} alt="GitHub" sx={{ mx: 1, height: 40 }} />
          </a>
          <a href="https://www.linkedin.com/in/brady-davis-j/" target="_blank" rel="noopener noreferrer">
            <Box component="img" src={linkedinLogo} alt="LinkedIn" sx={{ mx: 1, height: 40 }} />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
