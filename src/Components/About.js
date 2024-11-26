import React from 'react';
import './About.css'; // Import the CSS for the About section
import profileImage from '../assets/Untitled-1.jpg'; // Corrected image import

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            N. Naveen eswar
            Udaya school of engineering
            BE/BIOMEDICAL ENGINEERING
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" className="profile-image" />{" "}
          {/* Use the imported image */}
        </div>
      </div>
      <div className="skills">
        <div className="skill-item">
          <h3>Frontend Development</h3>
          <p>React, JavaScript, CSS, HTML</p>
        </div>
        <div className="skill-item">
          <h3>Backend Development</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>
        <div className="skill-item">
          <h3>Design</h3>
          <p>Figma, Adobe XD, UI/UX</p>
        </div>
      </div>
    </section>
  );
};

export default About;
