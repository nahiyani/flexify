import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reserve.css';

const Reserve = () => {
  return (
    <div>
      <Header />
      <Container className="reserve-container">
        <h1 className="text-center">BOOK A SESSION</h1>
        <p className="text-center description">
          TutorEase strives to make the process of scheduling your tutoring sessions as seamless and convenient as possible.
          Follow the simple steps below to book a session with one of our expert tutors and take the first step towards achieving your academic goals.
        </p>
        <Form className="reserve-form">
          <Form.Group controlId="formSubject">
            <Form.Label className="form-title">Subject</Form.Label>
            <Form.Control as="select">
              <option>Select a subject</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDate">
                <Form.Label className="form-title">Date</Form.Label>
                <Form.Control type="text" placeholder="DD-MM-YYYY" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTime">
                <Form.Label className="form-title">Time</Form.Label>
                <Form.Control type="text" placeholder="--:-- --" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formFirstName">
            <Form.Label className="form-title">First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label className="form-title">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="form-title">Email</Form.Label>
            <Form.Control type="email" placeholder="youremailaddress@gmail.com" />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label className="form-title">Phone Number</Form.Label>
            <Form.Control type="text" placeholder="123-456-7890" />
          </Form.Group>
          <Form.Group controlId="formCreditCardNumber">
            <Form.Label className="form-title">Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formExpiryDate">
                <Form.Label className="form-title">Expiry Date</Form.Label>
                <Form.Control type="text" placeholder="MM-YY" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCVV">
                <Form.Label className="form-title">CVV</Form.Label>
                <Form.Control type="text" placeholder="***" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit" className="confirm-button">
            Confirm Booking
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Reserve;
