
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Headshot from '../assets/imgs/Headshot.png';

function Brady() {
    return (
        <Box sx={{ 
            p: 0, 
            ml: { xs: '0', sm: '15vw' },  // Responsive margin
            color: '#FFFFFF', 
            height: '650px',  // Fixed height matching the outer box
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-end'  // Ensures content is pushed to the bottom
        }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        pl: '15px',
                        pr: '15px',
                        mb: { xs: 0, sm: 25, md: 25, lg: 25 },
                    }}>
                        <Typography variant="h2" component="h2" sx={{ fontSize: "60px", color: "#212529", fontWeight: "500" }}>
                            Brady Davis
                        </Typography>
                        <Typography variant="h4" component="h4" sx={{ fontSize: "14px", color: "#212529" }}>
                            Full Stack Web Developer in Nashville
                        </Typography>
                        <Button
                            component={NavLink}
                            to={'/contact'}
                            sx={{
                                color: '#212529',
                                backgroundColor: 'transparent',
                                border: '1px solid #212529',
                                width: '200px', // Adjust the size as needed
                                height: '50px', // Adjust the size as needed
                                mt: '1vh',
                                '@media (max-width:601px)': {
                                width: 'auto', // Adjust for xs screen size
                                height: 'auto', // Adjust for xs screen size
                                p:'15px'
                                },
                                '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Optional: add a slight background color on hover
                                },
                            }}
                            >
                            Let's Connect
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'flex-end',  // Aligns the image to the bottom
                        height: '100%'  // Full height to stretch along the container
                    }}>
                        <Box
                            component="img"
                            src={Headshot}
                            alt="Brady Davis"
                            sx={{
                                minWidth: '625px',
                                minHeight: '525px',
                                width: 'auto',
                                height: 'auto',
                                '@media (max-width:599px)': {
                                    maxWidth: '250px',
                                    maxHeight: '175px',
                                    maxWidth: '100%', // Ensures it doesn't exceed the container width

                                    
                                   }
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Brady;