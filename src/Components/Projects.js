import React from 'react';
import './Projects.css'; // Import the CSS for the Projects section

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {/* Sample Project Cards */}
        <div className="project-card">
          <img src="path/to/your/project1.jpg" alt="Project 1" />
          <div className="project-title">nan mudhalvan</div>
          <div className="project-description">Nan mudhalvan</div>
        </div>
        <div className="project-card">
          <img src="path/to/your/project2.jpg" alt="Project 2" />
          <div className="project-title">Project Two</div>
          <div className="project-description">A brief description of Project Two.</div>
        </div>
        <div className="project-card">
          <img src="path/to/your/project3.jpg" alt="Project 3" />
          <div className="project-title">Project Three</div>
          <div className="project-description">A brief description of Project Three.</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
