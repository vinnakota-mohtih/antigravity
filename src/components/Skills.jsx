import React from 'react';
import './Skills.css';

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
                <h2 className="heading section-title text-center">Technical <span className="gradient-text">Excellence</span></h2>
                <div className="skills-container">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="skill-category glass">
                            <h3 className="category-title">{cat.title}</h3>
                            <div className="skills-list">
                                {cat.skills.map((skill, si) => (
                                    <span key={si} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
