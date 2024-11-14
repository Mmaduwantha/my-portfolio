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
            
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240703165023/Frontend-Development-(1).webp" alt="Front-End Development" />
          
          <div className="skill-info">
          <a href='https://github.com/Mmaduwantha/sriflixcom.git'>
            <h3>Sriflixcom Movie Screaming Full-Stack Web Site</h3>
            <p>Node.js, Express, SQL,React,AWS S3</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp" alt="Back-End Development" />
          <div className="skill-info">
            <a href='https://github.com/Mmaduwantha/Airport_Management.git'>
            <h3>Airport_Management System</h3>
            <p>CLI Program for manage Airport (c++)</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg" alt="Database Management" />
          <div className="skill-info">
            <h3>Food App</h3>
            <p>Android Application (Android Studio)</p>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg" alt="Database Management" />
          <div className="skill-info">
            <a href='https://github.com/Mmaduwantha/WallpaperChangerApp.git'>
            <h3>Wallpaper Changer App</h3>
            <p>It's a java project for change your Wallpaper(Android Studio)</p>
            </a>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg" alt="Database Management" />
          <div className="skill-info">
            <h3>Hospital Management System</h3>
            <p>Windows Forms Application</p>
          </div>
        </div>
        <div className="skill-card">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg" alt="Database Management" />
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
