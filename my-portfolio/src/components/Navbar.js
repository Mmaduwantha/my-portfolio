import React from 'react';
import './NavBar.css';


function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1500">
         Mr Matheesha Maduwantha
        </div>
        <div className="links">
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Skill">Skills</a>
          <a href="/Service">Services</a>
          <a href="/Contact">Contact</a>
        </div>
        <i className="fa-solid fa-bars hamburg" onClick={() => document.querySelector('.dropdown').style.transform = 'translateY(0)'}></i>
      </div>
      <div className="dropdown">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <i className="fa-solid fa-xmark cancel" onClick={() => document.querySelector('.dropdown').style.transform = 'translateY(-500px)'}></i>
      </div>
    </nav>
  );
}

export default Navbar;
