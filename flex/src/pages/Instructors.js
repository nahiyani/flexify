import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import './Instructors.css';

import anaDeArmas from '../images/anadearmas.avif';
import arnold from '../images/arnold.png';
import aubreyGraham from '../images/aubreygraham.jpg';
import dwayneJohnson from '../images/dwaynejohnson.webp';
import emmaWatson from '../images/emmawatson.webp';
import ericWinter from '../images/ericwinter.webp';
import hughJackman from '../images/hughjackman.png';
import jenniferLawrence from '../images/jenniferlawrence.webp';
import jenniferLopez from '../images/jenniferlopez.webp';
import meganFox from '../images/meganfox.jpg';
import scarlettJohansson from '../images/scarlettjohansson.webp';
import sofiaVergara from '../images/sofiavergara.jpg';
import timotheeChalamet from '../images/timotheechalametfake.jpg';
import tomHolland from '../images/tomholland.webp';
import willSmith from '../images/willsmith.png';
import zaraLarsson from '../images/zaralarsson.jpg';

const instructorData = [
  { name: 'Dwayne Johnson', specialty1: 'Specialty 1A', specialty2: 'Specialty 1B', image: dwayneJohnson },
  { name: 'Arnold Schwarzenegger', specialty1: 'Specialty 2A', specialty2: 'Specialty 2B', image: arnold },
  { name: 'Will Smith', specialty1: 'Specialty 3A', specialty2: 'Specialty 3B', image: willSmith },
  { name: 'Sofia Vergara', specialty1: 'Specialty 4A', specialty2: 'Specialty 4B', image: sofiaVergara },
  { name: 'Timothee Chalamet', specialty1: 'Specialty 5A', specialty2: 'Specialty 5B', image: timotheeChalamet },
  { name: 'Jennifer Lawrence', specialty1: 'Specialty 6A', specialty2: 'Specialty 6B', image: jenniferLawrence },
  { name: 'Jennifer Lopez', specialty1: 'Specialty 7A', specialty2: 'Specialty 7B', image: jenniferLopez },
  { name: 'Eric Winter', specialty1: 'Specialty 8A', specialty2: 'Specialty 8B', image: ericWinter },
  { name: 'Scarlett Johansson', specialty1: 'Specialty 9A', specialty2: 'Specialty 9B', image: scarlettJohansson },
  { name: 'Tom Holland', specialty1: 'Specialty 10A', specialty2: 'Specialty 10B', image: tomHolland },
  { name: 'Ana de Armas', specialty1: 'Specialty 11A', specialty2: 'Specialty 11B', image: anaDeArmas },
  { name: 'Zara Larsson', specialty1: 'Specialty 12A', specialty2: 'Specialty 12B', image: zaraLarsson },
  { name: 'Aubrey Graham', specialty1: 'Specialty 13A', specialty2: 'Specialty 13B', image: aubreyGraham },
  { name: 'Hugh Jackman', specialty1: 'Specialty 14A', specialty2: 'Specialty 14B', image: hughJackman },
  { name: 'Emma Watson', specialty1: 'Specialty 15A', specialty2: 'Specialty 15B', image: emmaWatson },
  { name: 'Megan Fox', specialty1: 'Specialty 16A', specialty2: 'Specialty 16B', image: meganFox }
];

const ITEMS_PER_PAGE = 4;

export default function Instructors() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = instructorData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="instructors">
      <Header />
      <header className="instructors-header text-center">
        <h1 className="instructor-headline">INSTRUCTORS</h1>
        <div className='instructor-headline-text'>
          <p>
            We pride ourselves on having a team of dedicated, experienced, and inspiring fitness instructors. Each of our instructors brings a unique set of skills and expertise, ensuring that you can find the perfect class to meet your fitness goals. Here's a closer look at our instructors and the classes they offer.
          </p>
        </div>
      </header>
      <section className="instructors-section text-center">
        <Container>
          <Row>
            {currentItems.map((instructor, idx) => (
              <Col md={6} lg={3} key={idx} className="mb-4">
                <Card className="instructor-card">
                  <div className="instructor-picture">
                    <img src={instructor.image} alt={instructor.name} />
                  </div>
                  <Card.Body>
                    <Card.Title>{instructor.name}</Card.Title>
                    <Card.Subtitle className="mb-2">{instructor.specialty1}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">{instructor.specialty2}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center">
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Pagination.Prev>
            {Array.from({ length: Math.ceil(instructorData.length / ITEMS_PER_PAGE) }).map((_, idx) => (
              <Pagination.Item key={idx} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(instructorData.length / ITEMS_PER_PAGE)}>
              Next
            </Pagination.Next>
          </Pagination>
        </Container>
      </section>
      <Footer />
    </div>
  );
}