import React from 'react';
import './Footer.css';
import GitHubLogo from '../globalAssets/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './assets/LinkedIn-Blue.png';

function Footer() {
    return (
        <div className="custom-footer">
            <div style={{width: '80%'}}>
                <div className="p-5 custom-footer-links-wrapper">
                    <div className="custom-footer-links-col">
                        <a
                        href="https://github.com/kkolyvek"
                        target="_blank"
                        className="p-2 custom-footer-links custom-link"
                        rel="noreferrer">
                            <p className="my-auto custom-link-width">
                                GitHub
                            </p>
                            <img src={GitHubLogo} alt="GitHub Logo" id="github-logo"></img>
                        </a>
                        <a
                        href="https://www.linkedin.com/in/koppi-kolyvek-221b0a14a/"
                        target="_blank"
                        className="p-2 custom-footer-links custom-link"
                        rel="noreferrer">
                            <p className="my-auto custom-link-width">
                                LinkedIn
                            </p>
                            <img src={LinkedInLogo} alt="LinkedIn Logo" height="32"></img>
                        </a>
                    </div>
                </div>
                <div className="row p-5 custom-footer-text">
                    <p>Made with <a href="https://create-react-app.dev" target="_blank" rel="noreferrer">React</a>, <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">React-Bootstrap</a> and some experimentation. Check out the source code <a href="https://github.com/kkolyvek/kkolyvek-react-portfolio" target="_blank" rel="noreferrer">on GitHub</a>!</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;