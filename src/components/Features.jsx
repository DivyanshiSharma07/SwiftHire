import React, { useState } from 'react';
import './styles/Features.css';

const Features = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <section className="features-section">
      <h2 className="features-heading">Discover the Power of Our Recruitment Solution:</h2>
      <div className="features-table">
        <div className="features-row">
          <div className={`features-container ${clickedIndex === 1 ? 'clicked' : ''}`} onClick={() => handleClick(1)}>
            <div className="features-content">
              <h3>Seamless Candidate Search</h3>
              <p>Effortlessly browse through a diverse pool of skilled candidates based on location, job roles, and qualifications</p>
            </div>
          </div>
          <div className={`features-container ${clickedIndex === 2 ? 'clicked' : ''}`} onClick={() => handleClick(2)}>
            <div className="features-content">
              <h3>AI-Driven Recommendations</h3>
              <p>Leverage the power of artificial intelligence to receive personalized candidate recommendations based on your job specifications.</p>
            </div>
          </div>
          <div className={`features-container ${clickedIndex === 3 ? 'clicked' : ''}`} onClick={() => handleClick(3)}>
            <div className="features-content">
              <h3>Enhanced Candidate Evaluation</h3>
              <p>Evaluate candidates effectively with comprehensive profiles</p>
            </div>
          </div>
        </div>
        <div className="features-row">
          <div className={`features-container ${clickedIndex === 4 ? 'clicked' : ''}`} onClick={() => handleClick(4)}>
            <div className="features-content">
              <h3>Real-Time Collaboration</h3>
              <p>Foster seamless communication and collaboration within your team</p>
            </div>
          </div>
          <div className={`features-container ${clickedIndex === 5 ? 'clicked' : ''}`} onClick={() => handleClick(5)}>
            <div className="features-content">
              <h3>Real-Time Collaboration</h3>
              <p>Foster seamless communication and collaboration within your team</p>
            </div>
          </div>
          <div className={`features-container ${clickedIndex === 6 ? 'clicked' : ''}`} onClick={() => handleClick(6)}>
            <div className="features-content">
              <h3>Data-Driven Insights</h3>
              <p>Gain valuable insights into your hiring process through analytics and reporting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
