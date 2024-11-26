import React from 'react';
import './Certificate.css'; // Import the CSS for the Certificate section

const Certificate = () => {
  return (
    <section id="certificate">
      <h1>My Certificates</h1>
      <div className="certificate-container">
        {/* Sample Certificate Cards */}
        <div className="certificate-card">
          <img src="path/to/your/certificate1.jpg" alt="Certificate 1" />
          <div className="certificate-title">BIOMEDICAL 1</div>
          <div className="certificate-details">Issued by XYZ Academy | June 2023</div>
        </div>
        <div className="certificate-card">
          <img src="path/to/your/certificate2.jpg" alt="Certificate 2" />
          <div className="certificate-title">traning</div>
          <div className="certificate-details">Issued by ABC Institute | December 2023</div>
        </div>
        <div className="certificate-card">
          <img src="path/to/your/certificate3.jpg" alt="Certificate 3" />
          <div className="certificate-title">JavaScript Essentials</div>
          <div className="certificate-details">Issued by DEF Learning | March 2024</div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
