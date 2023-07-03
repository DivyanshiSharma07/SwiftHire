import React from 'react';
import './styles/Intro.css';

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-gradient"></div>
      <div className="intro-content">
        <h1 className="intro-heading">
          <span className="intro-heading-color intro-heading-text">Streamline Your Hiring Process</span>
          <span className="intro-heading-color intro-heading-text"> with Our Digital Recruitment Solution</span>
        </h1>
        <p className="intro-subheading">Efficiency, Simplicity, and Success</p>
      </div>
    </section>
  );
};

export default Intro;
