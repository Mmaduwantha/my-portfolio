import React from 'react';
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/Mmaduwantha" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1300">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1400">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1600">
        <i className="fa-brands fa-twitter"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
