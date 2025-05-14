import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate=useNavigate();
  return (
    <div className="hero-column thq-section-padding thq-section-max-width">
      <div className="hero-content">
        <h1 className="hero-text thq-heading-1">
          Launch Your Tech Career with Real Industry Internships
        </h1>
        <p className="hero-text1 thq-body-large">
          Get hands-on experience by working on real client projects, earning
          recognized certificates, and building a portfolio that gets you hired.
        </p>
      </div>
      <div className="hero-actions">
        <button className="thq-button-filled hero-button">
          <span
          onClick={() => navigate("/internship")}
          className="thq-body-small">Apply Now</span>
        </button>

        <button
          onClick={() => navigate("/about-us")}
          className="thq-button-outline hero-button1"
        >
          <span className="thq-body-small">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
