import React from 'react';
import './About.css';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <ScrollReveal direction="right" className="about-image-wrapper">
                    <div className="about-image glass">
                        {/* Placeholder for Profile Image */}
                        <div className="image-placeholder">
                            <span className="gradient-text">PROFILE</span>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="about-content">
                    <ScrollReveal>
                        <h2 className="heading section-title">About <span className="gradient-text">Me</span></h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="about-text">
                            I am a Computer Engineering student dedicated to building secure, user-friendly solutions.
                            My focus lies at the intersection of innovative tech projects and cybersecurity.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
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
                    </ScrollReveal>
                    <ScrollReveal delay={0.4}>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
