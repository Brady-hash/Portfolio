import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

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
    <Container className="contact-me pages">
      <h2>Contact Me</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={!!formErrors.nameError}
              />
              <Form.Control.Feedback type="invalid">{formErrors.nameError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!formErrors.emailError}
              />
              <Form.Control.Feedback type="invalid">{formErrors.emailError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
