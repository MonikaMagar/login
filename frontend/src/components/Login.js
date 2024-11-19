import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

import './Login.css';  // Ensure to import the CSS file

const Login = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Initialize useNavigate hook
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5001/login', formData);
      setSuccessMessage(response.data.message); // Display success message

      // Close modal after successful login
      setTimeout(() => {
        closeModal(); // Close the modal
        navigate('/dashboard'); // Navigate to the dashboard page
      }, 1000); // Wait for 1 second to display success message before redirecting
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="login-page">
      {/* Left section: Login form */}
      <div className="login-container">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Log In
          </Button>
        </Form>
      </div>

      {/* Right section: Image */}
      <div className="image-section">
        <div className="welcome-text">Welcome!</div>
        <img
          src="https://png.pngtree.com/png-vector/20220717/ourmid/pngtree-vector-flat-illustration-of-business-person-sitting-at-table-in-office-png-image_5982805.png"
          alt="Background"
          className="image-section-img"
        />
      </div>
    </div>
  );
};

export default Login;
