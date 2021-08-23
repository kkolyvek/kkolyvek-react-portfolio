import React from 'react';
import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return (
        <Navbar
        expand="lg"
        className="navbar custom-nav">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-navbar-items">
                        <Nav.Link className="custom-navlink-text custom-link mx-4" href="/">About</Nav.Link>
                        <Nav.Link className="custom-navlink-text custom-link mx-4" href="/work">Work</Nav.Link>
                        <Nav.Link className="custom-navlink-text custom-link mx-4" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;