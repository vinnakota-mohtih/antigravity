import React from 'react';
import './Projects.css';
import ScrollReveal from './ScrollReveal';

const ProjectCard = ({ title, category, description, index }) => (
    <ScrollReveal delay={index * 0.15}>
        <div className="project-card glass">
            <div className="project-image">
                <div className="image-overlay">
                    <a href="#" className="view-link">View Project</a>
                </div>
                <div className="placeholder-image">{title[0]}</div>
            </div>
            <div className="project-info">
                <span className="project-category">{category}</span>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </div>
    </ScrollReveal>
);

const Projects = () => {
    const projects = [
        {
            title: "STUDYLOC",
            category: "Web Application",
            description: "A course-based website for offline/online study with participation and certification features. Tech: HTML, CSS, JS, PHP."
        },
        {
            title: "AIQ-MAIL",
            category: "Hybrid Web/AI",
            description: "Email security site using Quantum Computing, Blockchain & AI to enhance mail security. Tech: Python (Django), AI, Blockchain, Q#."
        },
        {
            title: "HEART RATE MONITORING SYSTEM",
            category: "IoT",
            description: "A heart monitoring system using Arduino and IoT to detect heart rate and send alerts to the user."
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className="heading section-title">Featured <span className="gradient-text">Projects</span></h2>
                </ScrollReveal>
                <div className="projects-grid">
                    {projects.map((p, i) => <ProjectCard key={i} index={i} {...p} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;
