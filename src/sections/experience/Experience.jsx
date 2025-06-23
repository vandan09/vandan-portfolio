import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Softsages Technology',
    period: '2023 - 2024',
    role: 'Associate Software Developer',
    description: 'Managed multiple clients, boosting user engagement by 30% and conversion rates by 70%.'
  },
  {
    company: 'Softsages Technology',
    period: '2022 - 2023',
    role: 'Software Developer Intern',
    description: 'Built full-stack apps using Flutter, Spring Boot, and PostgreSQL.'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="navigator">&gt; Home / Info / Experience</div>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <div className="role">{exp.role}</div>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
