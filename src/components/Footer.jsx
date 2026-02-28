import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo heading">
                    <span className="gradient-text">PORTFOLIO</span>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} All Rights Reserved. Crafted with mohith
                </p>

            </div>
        </footer>
    );
};

export default Footer;
