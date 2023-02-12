import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      {/* title */}
      <div className="hero__title">
        <label htmlFor="title" className="hero__homeTitle">
          Home
        </label>
      </div>
      {/* two components */}
      <div className="hero__components">
        <button type="button" className="hero__button">
          For you
        </button>
        <button type="button" className="hero__button">
          Following
        </button>
      </div>
    </div>
  );
};

export default Hero;
