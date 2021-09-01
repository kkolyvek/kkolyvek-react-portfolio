import React from 'react';

// BOOTSTRAP IMPORTS
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// LOCAL IMPORTS
import './Navigation.css';
import Resume from '../Assets/pdf/kkolyvek-resume-07-2021.pdf';

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
                        <Nav.Link className="custom-navlink-text custom-link mx-4" href="/work">Projects</Nav.Link>
                        <Nav.Link className="custom-navlink-text custom-link mx-4" href="/contact">Contact</Nav.Link>
                        <Nav.Link 
                            className="custom-navlink-text custom-link mx-4 custom-resume-button"
                            href={Resume}
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;