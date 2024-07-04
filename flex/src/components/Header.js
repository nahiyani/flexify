import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <Navbar className="main-nav navbar navbar-expand-lg" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand">Flexify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto nav-list">
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/classes" className="nav-link-custom">Classes</Nav.Link>
            <Nav.Link as={Link} to="/instructors" className="nav-link-custom">Instructors</Nav.Link>
            <Nav.Link as={Link} to="/library" className="nav-link-custom">Library</Nav.Link>
            <Nav.Link as={Link} to="/reserve" className="nav-link-custom">Reserve</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
