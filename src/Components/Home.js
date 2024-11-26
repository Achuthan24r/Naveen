import React from 'react';
import './Home.css'; // Import the attractive CSS design for the home section

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm a passionate developer with experience in creating web applications and solving real-world problems with clean and efficient code.
      </p>
      <button className="cta-button">Explore My Work</button>
    </section>
  );
};

export default Home;
