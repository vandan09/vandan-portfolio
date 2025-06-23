import React from 'react';
import './SkillsSlider.css';

const skillLogos = [
  '/skills/java.png',
  '/skills/spring.png',
  '/skills/js.png',
  '/skills/react.png',
  '/skills/postgreSql.png',
  '/skills/flutter.png',
  '/skills/dart.png',
  '/skills/firebase.png',
  '/skills/aws.png',
  '/skills/git.png',
  '/skills/github.png',


];

const SkillsSlider = () => {
  return (
    <div className="skills-slider">
      <div className="slider-text">My development toolkit</div>
      <div className="slider-container">
        <div className="slider-track">
          {skillLogos.concat(skillLogos).map((logo, index) => (
            <img src={logo} alt="skill" className="skill-icon" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;