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
        const response = await fetch('/.netlify/functions/quote');
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
      <Box sx={{ pt: 15, backgroundColor: '#2e79ba' }}>
        <Box sx={{ width: '100%', m: 0, p: 0, height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Brady />
        </Box>
      </Box>
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
      <Box sx={{ mt: 3, mx: 1 }}>
        {smScreen ? (
          <>
            <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                About Me
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                As an aspiring full-stack developer, I am dedicated to contributing to team success while continuously honing my technical skills...
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                Skills
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                JavaScript, React, Node.js, Express, MongoDB...
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#2e79ba', mb: 2, p: 2, borderRadius: 3 }}>
              <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                Education
              </Typography>
              <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                B.S. in Computer Science, Vanderbilt University...
              </Typography>
            </Box>
          </>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  About Me
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                  As an aspiring full-stack developer, I am dedicated to contributing to team success while continuously honing my technical skills...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  Skills
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                  JavaScript, React, Node.js, Express, MongoDB...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: '#2e79ba', p: 2, borderRadius: 3 }}>
                <Typography variant="h4" component="h3" sx={{ color: "#212529" }}>
                  Education
                </Typography>
                <Typography variant="body2" sx={{ color: "#212529", mt: 2 }}>
                  B.S. in Computer Science, Vanderbilt University...
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
