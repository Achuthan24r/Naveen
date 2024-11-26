import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Import your enhanced CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Naveen Eswar</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="certificate" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Certificate
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="contacts" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
