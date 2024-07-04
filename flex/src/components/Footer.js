import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faYoutube, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-between">
          <Col md={3} className="footer-section social-media-section">
            <h5>SOCIAL MEDIA</h5>
            <div className="social-icons">
              <Row>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></Col>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></Col>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></Col>
              </Row>
              <Row>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></Col>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></Col>
                <Col xs={4}><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></Col>
              </Row>
            </div>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Quick Links</h5>
            <Row>
              <Col>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Classes</a></li>
                  <li><a href="#">Instructors</a></li>
                  <li><a href="#">Testimonials</a></li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled">
                  <li><a href="#">Library</a></li>
                  <li><a href="#">Reserve</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Questions?</h5>
            <p>Email: info@tutorease.com<br />
              Phone: 613-440-5350<br />
              Hours: 8AM - 10PM, 7 days a week</p>
          </Col>
        </Row>
        <Row className="subscribe-section">
          <Col md={12} className="text-center footer-section">
            <h2 className="subscribe-title">Subscribe to our monthly newsletter!</h2>
            <Form className="subscribe-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="email-input-group">
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="footer-button">SEND</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Flexify Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#7ED321', color: 'white' }}>
          <Modal.Title>Subscription Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for subscribing! A confirmation email has been sent to {email}.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;