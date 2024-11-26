import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Certificate from './Components/Certificate';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import './App.css'; // Optional for additional styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Certificate />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
