import React from "react";
import './pages.css';
import Navbar from '../components/Navbar';
import Contact from "./Contact";

function About() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="image" data-aos="zoom-out" data-aos-duration="2000">
          <img src={`${process.env.PUBLIC_URL}/myone.jpg`} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <h3>Full-Stack Developer</h3>
          <p>
          Helloo! I'm a passionate Full-Stack Developer skilled in creating seamless, high-performing web applications. With expertise in front-end tools like React and Vue.js, and back-end technologies including Node.js, Express, and databases like MySQL and MongoDB, I deliver user-friendly, efficient solutions. I'm also experienced in API integration, database management, and version control with Git
          </p>
          <a href="http://localhost:3000/Contact" className="read-more-btn">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default About;
