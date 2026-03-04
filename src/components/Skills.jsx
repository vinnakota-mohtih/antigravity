import React from 'react';
import './Skills.css';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Java (OOPS, DSA)", "Python", "SQL", "JavaScript"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "Visual Studio Code", "MySQL", "Android Studio"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className="heading section-title text-center">Technical <span className="gradient-text">Excellence</span></h2>
                </ScrollReveal>
                <div className="skills-container">
                    {skillCategories.map((cat, i) => (
                        <ScrollReveal key={i} delay={i * 0.2} className="skill-category-wrapper">
                            <div className="skill-category glass">
                                <h3 className="category-title">{cat.title}</h3>
                                <div className="skills-list">
                                    {cat.skills.map((skill, si) => (
                                        <ScrollReveal key={si} delay={(i * 0.2) + (si * 0.05)} distance={20} className="skill-tag-wrapper">
                                            <span className="skill-tag">{skill}</span>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
