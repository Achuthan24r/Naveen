import React from 'react';
import './Contact.css'; // Import the CSS for the Contact section

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="social-links">
        <a
          href="https://github.com/Naveen N "
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/Naveen. N"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://nnavee4455@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon gmail"
        >
          <i className="fab fa-envelope"></i>
        </a>
        <a
          href="https://mr.driftking_3280 "
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
