import React from 'react';
import './Services.css';
import Navbar from '../components/Navbar';

function Services() {
  return (
    <div>
        <Navbar />
    <section className="services-section">
      <h2>Our <span>Services</span></h2>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>End-to-end web solutions, from design to deployment, ensuring performance and scalability for your digital presence.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>Front-End Development</h3>
          <p>Creating engaging, user-friendly interfaces with HTML, CSS, and JavaScript frameworks like React, for an excellent user experience.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>Back-End Development</h3>
          <p>Building secure, efficient server-side applications using Node.js and database solutions, ensuring smooth data flow and functionality.</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Services;
