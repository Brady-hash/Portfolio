import React from 'react';
import { useState } from 'react';


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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
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
      // Form submission logic (e.g., send data to server)
      console.log('Form submitted:', formData);
      // Reset form data and errors
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({ nameError: '', emailError: '' });
    }
  };

  const isValidEmail = (email) => {
    // Email validation regex (you can use a more complex regex for email validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <div className="error-message">{formErrors.nameError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="error-message">{formErrors.emailError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
