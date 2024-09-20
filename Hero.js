
import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero">
      
        <div className="hero-image">
          <img src="kid.png" alt="Banking Image" />
        </div>
        <div className="hero-container">
        <div className="hero-text">
          <h1>Internet Banking</h1>
          <p>Enjoy a superior banking experience with our upgraded Internet Banking.</p>
          <a href="#" className="btn-primary">Login here</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
