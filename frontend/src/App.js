import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS file for additional styling
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShowModal = (type) => {
    setModalContent(type);  // Set content to 'login' or 'signup'
    setShowModal(true);      // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);     // Close the modal
  };

  return (
    <>
      <Router>
        <div className="app-container">
          {/* Navbar */}
          <Navbar expand="lg" variant="dark" className="shadow">
            <Container>
              <Link className="navbar-brand fw-bold" to="/">
                Login/Signup
              </Link>
             
              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ms-auto">
                  <Nav.Link className="fw-semibold" onClick={() => handleShowModal('login')}>
                    Login
                  </Nav.Link>
                  <Nav.Link className="fw-semibold" onClick={() => handleShowModal('signup')}>
                    Register
                  </Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Routes */}
          <div className="content-wrapper py-5">
            <Routes>
              <Route path="/signup" element={<Signup closeModal={handleCloseModal} />} />
              <Route path="/login" element={<Login closeModal={handleCloseModal} />} />
              <Route path="/dashboard" element={<Dashboard />} /> {/* New route for Dashboard */}
            </Routes>
          </div>
        </div>

        {/* Modal for Login and Signup */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent === 'signup' ? 'Sign Up' : 'Log In'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Conditional rendering of content based on modalContent state */}
            {modalContent === 'signup' ? (
              <Signup closeModal={handleCloseModal} />
            ) : (
              <Login closeModal={handleCloseModal} />
            )}
          </Modal.Body>
        </Modal>
      </Router>

    </>
  );
}

export default App;
