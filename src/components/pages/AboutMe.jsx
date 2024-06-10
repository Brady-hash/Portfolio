import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import Brady from '../Brady';

function AboutMe() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const baseURL = window.location.hostname === 'localhost'
          ? 'http://localhost:8888'
          : 'https://bradydavisdev.com';

        const response = await fetch(`${baseURL}/.netlify/functions/quote`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the quote:', error);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ pt: 15, backgroundColor: '#2e79ba' }}>
        <Box sx={{ width: '100%', m: 0, p: 0, height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Brady />
        </Box>
      </Box>

      {/* Quote Section */}
      <Box sx={{ mt: 3, mx: 1, bgcolor: '#fff', p: 2, borderRadius: 3 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          quote && (
            <Typography variant="body1" sx={{ color: "#212529", textAlign: 'center' }}>
              "{quote.content}" - {quote.author}
            </Typography>
          )
        )}
      </Box>

      {/* Content Section */}
      <Box sx={{ mt: 3, mx: 1 }}>
        {smScreen ? (
          <>
            {/* About Me Section */}
            <Box sx={{ bgcolor: '#2e79ba', mt: 2, mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                About Me
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                As an aspiring full-stack developer, I am dedicated to contributing to team success while continuously honing my technical skills. With a strong background in restaurant supervision, I bring exceptional communication abilities, a commitment to customer satisfaction, meticulous attention to detail, and proficient time management to the table. These skills have not only been instrumental in managing fast-paced environments but also resonate with the dynamic demands of software development. I am eager to leverage my work ethic and the versatility developed from my previous career to excel in a professional programming role, aiming to deliver innovative solutions and drive technological advancement.
              </Typography>
            </Box>
            
            {/* Skills Section */}
            <Box sx={{ bgcolor: '#2e79ba', mt: 2, mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                Skills
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
              JavaScript, React, NodeJS, Express, MongoDB, Material UI, Bootstrap, HTML/CSS, MySQL, JSON, GraphQL, REST APIs, MVC, GitHub, PWAs
              </Typography>
            </Box>
            
            {/* Education Section */}
            <Box sx={{ bgcolor: '#2e79ba', mt: 2, mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                Education
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                Vanderbilt University Full-Stack Coding Boot Camp
              </Typography>
            </Box>
          </>
        ) : (
          <Grid container spacing={2}>
            {/* About Me Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  About Me
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                  As an aspiring full-stack developer, I am dedicated to contributing to team success while continuously honing my technical skills. With a strong background in restaurant supervision, I bring exceptional communication abilities, a commitment to customer satisfaction, meticulous attention to detail, and proficient time management to the table. These skills have not only been instrumental in managing fast-paced environments but also resonate with the dynamic demands of software development. I am eager to leverage my work ethic and the versatility developed from my previous career to excel in a professional programming role, aiming to deliver innovative solutions and drive technological advancement.
                </Typography>
              </Box>
            </Grid>

            {/* Skills Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  Skills
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                  JavaScript, React, NodeJS, Express, MongoDB, Material UI, Bootstrap, HTML/CSS, MySQL, JSON, GraphQL, REST APIs, MVC, GitHub, PWAs
                </Typography>
              </Box>
            </Grid>

            {/* Education Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  Education
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                Vanderbilt University Full-Stack Coding Boot Camp
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default AboutMe;
