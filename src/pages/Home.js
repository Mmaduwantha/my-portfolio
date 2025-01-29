import React from 'react';
import Typewriter from '../components/Typewriter';
import SocialLinks from '../components/SocialLinks';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <section>
      <Navbar />
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="2000">
          <img src={`${process.env.PUBLIC_URL}/myone.jpg`} alt="Profile" />
        </div>
        
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
            Hey I'm <span>Matheesha</span>
          </h1>
          <div className="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            I'm a <Typewriter />|
          </div>
          <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
          Backend-focused Full-Stack Developer passionate about building scalable, efficient applications. Skilled in Node.js, Express, MongoDB, and MySQL, with strong front-end and design abilities in HTML, CSS, JavaScript, and Adobe Creative Suite. Committed to creating seamless, user-centered experiences that blend functionality with visual appeal
          </p>
          <SocialLinks />
          <a href='/Contact'>
          <button className="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
            Hire me
          </button>
          </a>
        
        </div>
      </div>
    </section>
  );
}

export default Home;
