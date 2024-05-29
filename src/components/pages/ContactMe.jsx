import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box } from '@mui/material';

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (formData.name.trim() === '') {
      errors.nameError = 'Name is required';
    }
    if (formData.email.trim() === '') {
      errors.emailError = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.emailError = 'Invalid email format';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      try {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        alert(responseData.message);
      } catch (error) {
        alert('Failed to send. Please try again later.');
      }
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({ nameError: '', emailError: '' });
    }
  };

  return (
    <Container maxWidth="sm" sx={{pt: '100px'}}>
      <Typography variant="h2" gutterBottom>Contact Me</Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={!!formErrors.nameError}
              helperText={formErrors.nameError}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!formErrors.emailError}
              helperText={formErrors.emailError}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactMe;
