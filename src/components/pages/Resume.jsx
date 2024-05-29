import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import MyResumeImage from '../../assets/imgs/Resume.jpg';
import MyResumePDF from '../../assets/imgs/Resume.pdf';

function Resume() {
  return (
    <Box
    sx={{
      m:'0',
      minHeight:'100vh',
      width:'100vw',
      justifyContent: 'center',
      alignItems:'center',
      pt: '100px', 
      display: 'flex',
      flexDirection: 'column',

      }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{color:"white"}}>
        Resume
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Box
            component="img"
            src={MyResumeImage}
            alt="Resume"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={6} sx={{ display: 'flex',justifyContent:'center'}}>
          <Button
            href={MyResumePDF}
            download="Resume.pdf"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2,}}
          >
            Download Resume (PDF)
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Resume;
