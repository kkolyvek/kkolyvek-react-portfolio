import React from 'react';

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// LOCAL IMPORTS
import './Contact.css'

export default function Contact() {
    return (
        <Container fluid className="custom-container">
            <Container>
                <Row style={{display: 'flex'}}>
                    <Col sm={12} lg={6} className="p-5">
                        <h3>Contact</h3>
                        <h5>Want to chat? Feel free to reach out through any of these mediums:</h5>
                    </Col>
                    <Col sm={12} lg={6} className="contact-link-container">
                        <a
                        className="contact-link"
                        href="mailto:kk674@cornell.edu"
                        >
                            {/* EMAIL */}
                            <FontAwesomeIcon icon={faInbox} size='2x' className="icon" />
                            <div className="contact-text">
                                kk674@cornell.edu
                            </div>
                        </a>
                        <a
                        className="contact-link"
                        target="_blank"
                        href="https://github.com/kkolyvek"
                        rel="noreferrer"
                        >
                            {/* GitHub */}
                            <FontAwesomeIcon icon={faGithub} size='2x' className="icon" />
                            <div className="contact-text">
                                kkolyvek
                            </div>
                        </a>
                        <a
                        className="contact-link"
                        target="_blank"
                        href="https://www.linkedin.com/in/koppi-kolyvek-221b0a14a/"
                        rel="noreferrer"
                        >
                            {/* LinkedIn */}
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x' className="icon" />
                            <div className="contact-text">
                                Koppi Kolyvek
                            </div>
                        </a>                        
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};