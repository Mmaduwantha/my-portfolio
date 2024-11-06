import React from 'react';
import Typewriter from './Typewriter';
import SocialLinks from './SocialLinks';


function MainSection() {
  return (
    <section>
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quasi commodi quia rerum, iste corporis...
          </p>
          <SocialLinks />
          <button className="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
