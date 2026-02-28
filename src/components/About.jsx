import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-image glass">
                    {/* Placeholder for Profile Image */}
                    <div className="image-placeholder">
                        <span className="gradient-text">PROFILE</span>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="heading section-title">About <span className="gradient-text">Me</span></h2>
                    <p className="about-text">
                        I am a Computer Engineering student dedicated to building secure, user-friendly solutions.
                        My focus lies at the intersection of innovative tech projects and cybersecurity.
                    </p>
                    <div className="education-info">
                        <h3 className="sub-heading">Education</h3>
                        <p className="about-text">
                            <strong>Diploma in Computer Engineering</strong><br />
                            KALLAM HARANADHAREDDY Institute of Technology (2026) | CGPA: 7.6
                        </p>
                        <p className="about-text">
                            <strong>X (CBSE)</strong><br />
                            Kendriya Vidyalaya Sangathan, Guntur (2023) | 58.9%
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
