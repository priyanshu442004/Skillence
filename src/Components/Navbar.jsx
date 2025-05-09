import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="home-navbar">
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            alt="Company Logo"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&amp;force_format=original"
            className="navbar-image1"
          />
          {/* Navbar */}
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links">
              <span
                onClick={() => navigate("/")}
                className="thq-link thq-body-small"
              >
                Home
              </span>
              <span
                onClick={() => navigate("/internship")}
                className="thq-link thq-body-small"
              >
                Internships
              </span>
              <span
                onClick={() => navigate("/hackathon")}
                className="thq-link thq-body-small"
              >
                Hackathons
              </span>
              <span
                onClick={() => navigate("/about-us")}
                className="thq-link thq-body-small"
              >
                About Us
              </span>
              <span
                onClick={() => navigate("/contact-us")}
                className="thq-link thq-body-small"
              >
                Contact Us
              </span>
            </nav>
            <div className="navbar-buttons">
              <button className="navbar-action1 thq-button-animated thq-button-filled">
                <span className="thq-body-small">Login</span>
              </button>
              <button className="navbar-action2 thq-button-outline thq-button-animated">
                <span className="thq-body-small">Register</span>
              </button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-burger-menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div
              data-thq="thq-mobile-menu"
              className="navbar-mobile-menu"
              style={{ display: isMobileMenuOpen ? "block" : "none" }}
            >
              <div className="navbar-nav">
                <div className="navbar-top">
                  <img
                    alt="Company Logo"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&amp;force_format=original"
                    className="navbar-logo"
                  />
                  <div
                    data-thq="thq-close-menu"
                    className="navbar-close-menu"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="navbar-links1">
                  <span className="thq-link thq-body-small">Home</span>
                  <span className="thq-link thq-body-small">Internships</span>
                  <span className="thq-link thq-body-small">Hackathons</span>
                  <span className="thq-link thq-body-small">About Us</span>
                  <span className="thq-link thq-body-small">Contact Us</span>
                </nav>
              </div>
              <div className="navbar-buttons1">
                <button className="thq-button-filled">Login</button>
                <button className="thq-button-outline">Register</button>
              </div>
            </div>
          )}
        </header>
      </header>
    </div>
  );
};

export default Navbar;
