import React from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia, Typography, useMediaQuery, CardContent, Box, useTheme } from '@mui/material';
import img1 from '../../assets/imgs/Yap-Preview.jpg';
import img2 from '../../assets/imgs/Dog-Boarding-Ez.jpg';
import img3 from '../../assets/imgs/Text-Editor.jpg';
import img4 from '../../assets/imgs/Employee-Tracker.jpg';
import img5 from '../../assets/imgs/Getting-Out-The-Door.jpg';
import img6 from '../../assets/imgs/Social-Media-API.jpg';

function Portfolio() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const projects = [
        { id: 1, name: 'Yap', description: 'A social media platform with a daily pole.', imgUrl: img1, url:  'https://yap-pcfa.onrender.com/login'  },
        { id: 2, name: 'Dog Boarding Ez', description: 'An easy solution for dog boarding.', imgUrl: img2, url: 'https://github.com/Brady-hash/DB-Easy' },
        { id: 3, name: 'Text Editor PWA', description: 'A progressive web app text editor.', imgUrl: img3, url: 'https://github.com/Brady-hash/Text-Editor-PWA' },
        { id: 4, name: 'Employee Tracker', description: 'A tracker for employee information.', imgUrl: img4, url: 'https://github.com/Brady-hash/Employee-Tracker' },
        { id: 5, name: 'Getting Out The Door', description: 'A tool to help you get out the door.', imgUrl: img5, url: 'https://brady-hash.github.io/Get-Out-The-Door/' },
        { id: 6, name: 'Social Media Api', description: 'A comprehensive social media API.', imgUrl: img6, url:'https://github.com/Brady-hash/NoSql-SocialMedia-Api'},
    ];

    return (
        <Container sx={{ pt: '100px', mb: '15px' }}>
            <Typography variant="h2" component="h2" gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={2}>
                {projects.map(project => (
                    <Grid item xs={12} key={project.id}>
                        <Card sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', bgcolor:'#EE5522', borderRadius:3, p:.5 }}>
                            {isSmallScreen ? (
                                <CardActionArea href={project.url} target="_blank" rel="noopener noreferrer">
                                    <CardContent>
                                        <Typography variant="h6" component="h4">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxWidth: '600px',
                                            objectFit: 'contain',
                                            margin: '0 auto',
                                            borderRadius:3

                                        }}
                                        image={project.imgUrl}
                                        alt={project.name}
                                    />
                                </CardActionArea>
                            ) : (
                                <CardActionArea href={project.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2, flex: 1 }}>
                                        <Typography variant="h6" component="h4">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxWidth: '650px',
                                            objectFit: 'contain',
                                            flex: 1,
                                            borderRadius:3
                                        }}
                                        image={project.imgUrl}
                                        alt={project.name}
                                    />
                                </CardActionArea>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Portfolio;
