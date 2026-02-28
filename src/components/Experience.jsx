import React from 'react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: "Software Developer Intern",
        company: "Phantasm Solutions",
        duration: "Dec 2025 - May 2026",
        description: "Developed a web application for the company. Collaborated with a team of developers to create a new feature. Worked on bug fixes and performance improvements."
    }

];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h1 className="section-title">Work Experience</h1>
                <div className="experience-list">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card glass">
                            <div className="card-header">
                                <h2>{exp.role}</h2>
                                <span className="company-name">{exp.company}</span>
                            </div>
                            <div className="card-body">
                                <p className="duration">{exp.duration}</p>
                                <p className="description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;