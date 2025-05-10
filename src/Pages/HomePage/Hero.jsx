import React from "react";

const Hero = () => {
  return (
    <div className="hero-column thq-section-padding thq-section-max-width">
      <div className="hero-content">
        <h1 className="hero-text thq-heading-1">
          Unlock Your Potential with Our Internship Programs
        </h1>
        <p className="hero-text1 thq-body-large">
          Join our internship programs to gain valuable experience, build your
          skills, and kickstart your career in the tech industry.
        </p>
      </div>
      <div className="hero-actions">
        <button className="thq-button-filled hero-button">
          <span className="thq-body-small">Apply Now</span>
        </button>

        <button
          onClick={() => navigate("/about")}
          className="thq-button-outline hero-button1"
        >
          <span className="thq-body-small">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
