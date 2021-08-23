import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="custom-footer">
            <div className="footer-text">
                <p>Made with <a href="https://create-react-app.dev" target="_blank" rel="noreferrer">React</a>, <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">React-Bootstrap</a>, and some experimentation. Check out the source code <a href="https://github.com/kkolyvek/kkolyvek-react-portfolio" target="_blank" rel="noreferrer">on GitHub</a>!</p>
            </div>
        </div>
    );
}

export default Footer;