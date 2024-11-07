import React from "react";
import './pages.css';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="image" data-aos="zoom-out" data-aos-duration="2000">
          <img src={`${process.env.PUBLIC_URL}/myone.jpg`} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
