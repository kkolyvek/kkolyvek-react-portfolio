import React from 'react';

// LOCAL IMPORTS
import './Footer.css';
import Resume from '../Assets/pdf/kkolyvek-resume-07-2021.pdf';

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <Container fluid className="custom-footer">
            <Container>
                <Row style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Col lg={8}>
                        <div className="footer-text">
                            <p>Made with <a href="https://create-react-app.dev" target="_blank" rel="noreferrer">React</a> and <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">React-Bootstrap</a>. Check out the source code <a href="https://github.com/kkolyvek/kkolyvek-react-portfolio" target="_blank" rel="noreferrer">on GitHub</a>!</p>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className="footer-socials">
                            <a
                                href="mailto:kk674@cornell.edu">
                                <FontAwesomeIcon icon={faInbox} size='1x' className="icon" />
                            </a>
                            <a
                                href="https://github.com/kkolyvek"
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size='1x' className="icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/koppi-kolyvek-221b0a14a/"
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} size='1x' className="icon" />
                            </a>
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopenner noreferrer"
                                className="me-2"
                            >
                                <FontAwesomeIcon icon={faFile} size='1x' className="icon" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;