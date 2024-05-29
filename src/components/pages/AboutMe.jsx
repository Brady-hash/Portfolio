import React from 'react';
import { Typography, Box } from '@mui/material';
import Brady from '../Brady';

function AboutMe() {
    return (
        <Box>
            {/* Outermost container to manage top padding consistently */}
            <Box sx={{ 
                pt: 15,  // Padding top to push the content down from the navbar
                backgroundColor: '#2e79ba'
            }}>
                <Box sx={{
                    width: '100%', 
                    m: 0,
                    p: 0,
                    height: '550px',
                    display: 'flex',
                    flexDirection: 'column', // Children are stacked vertically
                    justifyContent: 'flex-end', // Aligns children to the bottom
                }}>
                    <Brady />
                </Box>
            </Box>
            <Box sx={{ml: 3, mr: 3}}>
                <Typography variant="h2" component="h2" sx={{
                    pb: 2, 
                    mt: 5, 
                    color:"#212529", 
                }}>
                    About Me
                </Typography>
                <Box sx={{pb: 4,ml: { xs: 2, sm: 3, md: 10, lg: 6, xl: 8 }, mr: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 }}}>
                    <Typography variant="body1" component="body1">
                    As an aspiring full-stack developer, I am dedicated to contributing to team success while continuously honing my technical skills. With a strong background in restaurant supervision, I bring exceptional communication abilities, a commitment to customer satisfaction, meticulous attention to detail, and proficient time management to the table. These skills have not only been instrumental in managing fast-paced environments but also resonate with the dynamic demands of software development. I am eager to leverage my work ethic and the versatility developed from my previous career to excel in a professional programming role, aiming to deliver innovative solutions and drive technological advancement.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default AboutMe;
