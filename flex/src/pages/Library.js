import Header from '../components/Header'
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import SpotifyPlayer from 'react-spotify-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Library.css';

const App = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.height.value) / 100;
    const weight = parseFloat(e.target.weight.value);
    const bmiValue = (weight / (height * height)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('Healthy Weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };

  return (
    <Container>
      <Header />
      <h1 className="text-center my-4">Library</h1>
      <p className="text-center">Discover the ultimate resource center...</p>
      
      <h2 className="my-4">Articles</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Article #1</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Article #2</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Article #3</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="secondary" className="my-4">Find More Articles</Button>

      <h2 className="my-4">Guides</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Guide #1</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="my-4">Podcasts</h2>
      <SpotifyPlayer
        uri="spotify:show:5yG7r9GMwIRslhVLt4uAea"
        size={{ width: '100%', height: 80 }}
        view="list"
        theme="black"
      />

      <h2 className="my-4">BMI Calculator</h2>
      <Form onSubmit={calculateBMI}>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" required />
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" required>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formHeight">
          <Form.Label>Height (cm)</Form.Label>
          <Form.Control type="number" placeholder="Enter height" name="height" required />
        </Form.Group>
        <Form.Group controlId="formWeight">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control type="number" placeholder="Enter weight" name="weight" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calculate
        </Button>
      </Form>
      {bmi && (
        <div className="mt-4">
          <h3>Your BMI: {bmi}</h3>
          <h4 className={`bmi-category ${bmiCategory.toLowerCase().replace(' ', '-')}`}>{bmiCategory}</h4>
        </div>
      )}
      <Footer />
    </Container>
  );
};

export default App;
