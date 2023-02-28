import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/header.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href=""><div className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/*}
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                */}
              </Nav>
              <Nav.Link href="/" className='header-navs'>
                 Home
                </Nav.Link>
                <Nav.Link href="/about" className='header-navs' >
                  About Us
                </Nav.Link>
                <Nav.Link href="/contact"  className='header-navs'>
                  Contact
                </Nav.Link>
              <Nav.Link href="/register"  className='header-navs'>
                  Sign in
                </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;