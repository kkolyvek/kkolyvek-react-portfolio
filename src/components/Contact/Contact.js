import React from 'react';

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';

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
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{display: 'flex'}} className="pt-5">
                    <h5>Want to chat? Feel free to reach out through any of these mediums:</h5>
                </div>
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    className="pt-5"
                >
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
                </div>
            </Container>
        </Container>
    )
};