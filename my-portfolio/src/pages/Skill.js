import React from 'react';
import Navbar from '../components/Navbar';
import './pages.css';

function Skill() {
  return (
    <div>
        <Navbar />
    <section className="skills-section">
      <h2>Core <span>Projects</span></h2>
      <div className="skills-grid">
        <div className="skill-card">
            
          <img src="sriflix.png" alt="Front-End Development" />
          
          <div className="skill-info">
          <a href='https://github.com/Mmaduwantha/sriflixcom.git'>
            <h3>Sriflixcom Movie Screaming Full-Stack Web Site</h3>
            <p>Node.js, Express, SQL,React,AWS S3</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://figures.semanticscholar.org/697b0314106f5342c00633a6fcb7bfd879fa1ede/3-Figure1-1.png" alt="Back-End Development" />
          <div className="skill-info">
            <a href='https://github.com/Mmaduwantha/Airport_Management.git'>
            <h3>Airport_Management System</h3>
            <p>CLI Program for manage Airport (c++)</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://i.ytimg.com/vi/Gr5LlN7JZ8Y/maxresdefault.jpg" alt="Database Management" />
          <div className="skill-info">
            <a href='https://github.com/Mmaduwantha/FoodApp.git'>
            <h3>Food App</h3>
            <p>Android Application (Android Studio)</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://play-lh.googleusercontent.com/lxs94X55uyK1gK7ZdbPi36QHuGQP_rbOYqOKXivsEoC7Y1Hs6KoAzqoCeWlCDqc=w526-h296-rw" alt="Database Management" />
          <div className="skill-info">
            <a href='https://github.com/Mmaduwantha/WallpaperChangerApp.git'>
            <h3>Wallpaper Changer App</h3>
            <p>It's a java project for change your Wallpaper(Android Studio)</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg" alt="Database Management" />
          <div className="skill-info">
            <h3>Hospital Management System</h3>
            <p>Windows Forms Application</p>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://blinkco.io/wp-content/uploads/2022/04/Supermarket-Grocery-POS-Billing-Software.jpg" alt="Database Management" />
          <div className="skill-info">
            <h3>Super Market Management</h3>
            <p>Windows Forms Application</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Skill;
