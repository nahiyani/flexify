import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reserve.css';

const Reserve = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  };

  return (
    <div>
      <Header />
      <Container className="reserve-container">
        <h1 className="text-center headline">RESERVE A CLASS</h1>
        <p className="text-center description">
          Flexify strives to make the process of scheduling your fitness sessions as seamless and convenient as possible.
          Follow the simple steps below to reserve a spot in one of our many classes with a certified expert trainer and take the first step towards achieving your fitness goals.
        </p>
        <Form className="reserve-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formSubject">
            <Form.Label className="form-title">Subject</Form.Label>
            <Form.Control as="select" required>
              <option>Select a class</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDate" className="date-picker-container">
                <Form.Label className="form-title">Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select a date"
                  className="form-control purple-datepicker"
                  calendarClassName="purple-datepicker-calendar"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTime" className="time-picker-container">
                <Form.Label className="form-title">Time</Form.Label>
                <DatePicker
                  selected={startTime}
                  onChange={(time) => setStartTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Select a time"
                  className="form-control purple-datepicker"
                  calendarClassName="purple-datepicker-calendar"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formFirstName" className="form-group-spacing">
            <Form.Label className="form-title">First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" required />
          </Form.Group>
          <Form.Group controlId="formLastName" className="form-group-spacing">
            <Form.Label className="form-title">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required />
          </Form.Group>
          <Form.Group controlId="formEmail" className="form-group-spacing">
            <Form.Label className="form-title">Email</Form.Label>
            <Form.Control type="email" placeholder="youremailaddress@gmail.com" required />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber" className="form-group-spacing">
            <Form.Label className="form-title">Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </Form.Group>
          <Form.Group controlId="formCreditCardNumber" className="form-group-spacing">
            <Form.Label className="form-title">Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formExpiryDate">
                <Form.Label className="form-title">Expiry Date</Form.Label>
                <DatePicker
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                  placeholderText="MM/YY"
                  className="form-control purple-datepicker"
                  calendarClassName="purple-datepicker-calendar"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCVV">
                <Form.Label className="form-title">CVV</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="***" 
                  required 
                  pattern="\d{3}" 
                  title="Please enter a 3-digit CVV number"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="button-container">
            <Button variant="success" type="submit" className="confirm-button">Confirm Reservation</Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Reserve;