import React from 'react';
import './App.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const ResponsiveNavbar = () => {
  return (
    <Navbar id='Nav'  bg="primary" collapseOnSelect expand="sm">
      <Container >
        <Navbar.Brand style={{color:'white'}} href="/"><h2>LAPSTORE</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} href="/"><b>Home</b> </Nav.Link>
            <Nav.Link style={{color:'white'}} href="#about"><b>About</b></Nav.Link>
            <Nav.Link style={{color:'white'}} href="#foot"><b>Contact</b></Nav.Link>
            <Nav.Link style={{color:'white'}} href="#Card"><b>Products</b></Nav.Link>
            <Nav.Link style={{color:'white'}} href="/contact"><b>Services</b></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;