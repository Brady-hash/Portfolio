import React from 'react';
import {Container, Grid, Card, CardActionArea, CardMedia, Typography }from '@mui/material';

import img1 from '../../assets/imgs/Social-Media-API.jpg';
import img2 from '../../assets/imgs/Dog-Boarding-Ez.jpg';
import img3 from '../../assets/imgs/Text-Editor.jpg';
import img4 from '../../assets/imgs/Employee-Tracker.jpg';
import img5 from '../../assets/imgs/Getting-Out-The-Door.jpg';
import img6 from '../../assets/imgs/Note-Taker.jpg';

function Work() {
    const projects = [
        { id: 1, name: 'Social Media Api', imgUrl: img1, url: 'https://github.com/Brady-hash/NoSql-SocialMedia-Api' },
        { id: 2, name: 'Dog Boarding Ez', imgUrl: img2, url: 'https://github.com/Brady-hash/DB-Easy' },
        { id: 3, name: 'Text Editor PWA', imgUrl: img3, url: 'https://github.com/Brady-hash/Text-Editor-PWA' },
        { id: 4, name: 'Employee Tracker', imgUrl: img4, url: 'https://github.com/Brady-hash/Employee-Tracker' },
        { id: 5, name: 'Getting Out The Door', imgUrl: img5, url: 'https://brady-hash.github.io/Get-Out-The-Door/' },
        { id: 6, name: 'Note Taker', imgUrl: img6, url: 'https://note-taker-mod11-e18acf55443e.herokuapp.com/' },
    ];

    return (
        <Container sx={{pt: '100px'}}>
            <Typography variant="h2" component="h2" gutterBottom>
                Work
            </Typography>
            <Grid container spacing={2}>
                {projects.map(project => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card>
                            <CardActionArea href={project.url} target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={project.imgUrl}
                                    alt={project.name}
                                />
                                <Typography variant="h6" component="h4">
                                    {project.name}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Work;
