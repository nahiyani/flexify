import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './About.css';

export default function About() {
  return (
    <div className="flexify-advantage">
      <Header />
      
      <section className="advantage-section text-center">
        <h2>THE FLEXIFY ADVANTAGE</h2>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                ADVANTAGE #1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                ADVANTAGE #2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                ADVANTAGE #3
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </section>

      <section className="our-story-section text-center">
        <Container>
          <Card className="our-story-card">
            <Card.Body>
              <h2>OUR STORY</h2>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section className="executives-section text-center">
        <h2>MEET THE EXECUTIVES</h2>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <div className="executive-picture">Picture</div>
                  <Card.Title>THE ROCK</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chief Executive Officer</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <div className="executive-picture">Picture</div>
                  <Card.Title>RYAN REYNOLDS</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chief Operating Officer</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <div className="executive-picture">Picture</div>
                  <Card.Title>TOM BRADY</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chief Financial Officer</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}