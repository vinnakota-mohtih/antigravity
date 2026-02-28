import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content container">
                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Mohith</span>
                </h1>
                <p className="hero-subtitle">
                    Motivated Computer Engineering student passionate about App Development and Cybersecurity.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">View My Work</a>
                    <a href="#about" className="btn-outline">Learn More</a>
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
