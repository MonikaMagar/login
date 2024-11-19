import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './Singnup.css';


const Signup = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


 

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
      const response = await axios.post('http://localhost:5001/register', formData);
      setSuccessMessage(response.data.message);

      // Close the modal after successful signup
      setTimeout(() => {
        closeModal(); // This will close the modal by calling handleCloseModal from App.js
        
      }, 1000); // Delay 2 seconds to show success message before redirecting
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="signup-page">
      {/* Left Section: Form */}
      <div className="signup-container">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>

      {/* Right Section: Image and Text */}
      <div className="image-section">
        <div className="welcome-text">Hello, friends!</div>
        <img src="https://png.pngtree.com/png-vector/20220717/ourmid/pngtree-vector-flat-illustration-of-business-person-sitting-at-table-in-office-png-image_5982805.png" alt="Signup" className="image-section-img" />
      </div>
    </div>
  );
};

export default Signup;
