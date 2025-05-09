import React, { useState } from "react";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div
      className=""
      __processed_24a5fa53-bea2-4ab6-9cc7-adcd94dfc134__="true"
      bis_status="ok"
      bis_frame_id="678"
      bis_body_id="fr_n7dmjnhasq962p3fsf5aki"
      bis_depth="0"
      bis_chainid="1"
      bis_size='{"x":0,"y":0,"w":1198,"h":0,"abs_x":152,"abs_y":135}'
    >
      <div id="app">
        <div className="home-container">
          <div className="home-navbar">
            <header className="navbar-container">
              <header
                data-thq="thq-navbar"
                className="navbar-navbar-interactive"
              >
                <img
                onClick={window.location.reload}
                  alt="Company Logo"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&amp;force_format=original"
                  className="navbar-image1"
                />
                {/* Navbar */}
                <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
                  <nav className="navbar-links">
                    <span className="thq-link thq-body-small">Home</span>
                    <span className="thq-link thq-body-small">Internships</span>
                    <span className="thq-link thq-body-small">Hackathons</span>
                    <span className="thq-link thq-body-small">About Us</span>
                    <span className="thq-link thq-body-small">Contact Us</span>
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
                <div data-thq="thq-burger-menu" className="navbar-burger-menu" onClick={() => setMobileMenuOpen(true)}>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (<div data-thq="thq-mobile-menu" className="navbar-mobile-menu"  style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
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
                      <span className="thq-link thq-body-small">
                        Internships
                      </span>
                      <span className="thq-link thq-body-small">
                        Hackathons
                      </span>
                      <span className="thq-link thq-body-small">About Us</span>
                      <span className="thq-link thq-body-small">
                        Contact Us
                      </span>
                    </nav>
                  </div>
                  <div className="navbar-buttons1">
                    <button className="thq-button-filled">Login</button>
                    <button className="thq-button-outline">Register</button>
                  </div>
                </div>)}
              </header>
            </header>
          </div>
          <div className="home-hero">
            <div className="hero-header78">
              <div className="hero-column thq-section-padding thq-section-max-width">
                <div className="hero-content">
                  <h1 className="hero-text thq-heading-1">
                    Unlock Your Potential with Our Internship Programs
                  </h1>
                  <p className="hero-text1 thq-body-large">
                    Join our internship programs to gain valuable experience,
                    build your skills, and kickstart your career in the tech
                    industry.
                  </p>
                </div>
                <div className="hero-actions">
                  <button className="thq-button-filled hero-button">
                    <span className="thq-body-small">Apply Now</span>
                  </button>
                  <button className="thq-button-outline hero-button1">
                    <span className="thq-body-small">Learn More</span>
                  </button>
                </div>
              </div>
              <div className="hero-content1">
                <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
                  <div className="thq-animated-group-horizontal">
                    <img
                      alt="Internship Program Image"
                      src="https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgwOXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
                    />
                  </div>
                  <div className="thq-animated-group-horizontal">
                    <img
                      alt="Internship Program Image"
                      src="https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgwOXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                      className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
                    />
                  </div>
                </div>
                <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
                  <div className="thq-animated-group-horizontal-reverse">
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
                    />
                  </div>
                  <div className="thq-animated-group-horizontal-reverse">
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                      className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
                    />
                    <img
                      alt="Hero Image"
                      src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                      className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="hero-container1">
                  <div style={{ display: "contents" }}>
                    <style>
                      {`
          @keyframes scroll-x {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - 16px));
            }
          }

          @keyframes scroll-y {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(calc(-100% - 16px));
            }
          }
        `}
                    </style>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-features1">
            <div className="thq-section-padding">
              <div className="features1-container1 thq-section-max-width">
                <div className="features1-image-container">
                  <img
                    alt="Internship Program Image"
                    src="https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                    className="features1-image thq-img-ratio-16-9"
                  />
                </div>
                <div className="features1-tabs-menu">
                  <div className="features1-tab-horizontal">
                    <div className="features1-divider-container">
                      <div className="features1-container2"></div>
                    </div>
                    <div className="features1-content">
                      <h2 className="thq-heading-2">
                        Internship Opportunities
                      </h2>
                      <span className="thq-body-small">
                        Explore various internship opportunities in leading
                        companies.
                      </span>
                    </div>
                  </div>
                  <div className="features1-tab-horizontal1">
                    <div className="features1-divider-container1"></div>
                    <div className="features1-content1">
                      <h2 className="thq-heading-2">Expert Mentorship</h2>
                      <span className="thq-body-small">
                        Collaborate with industry experts and mentors.
                      </span>
                    </div>
                  </div>
                  <div className="features1-tab-horizontal2">
                    <div className="features1-divider-container2"></div>
                    <div className="features1-content2">
                      <h2 className="thq-heading-2">Practical Experience</h2>
                      <span className="thq-body-small">
                        Engage in hands-on projects to enhance your skills.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-cta">
            <div className="thq-section-padding">
              <div className="thq-section-max-width">
                <div className="cta-accent2-bg">
                  <div className="cta-accent1-bg">
                    <div className="cta-container1">
                      <div className="cta-content">
                        <span className="thq-heading-2">
                          Ready to kickstart your career?
                        </span>
                        <p className="thq-body-large">
                          Join us for an internship or hackathon experience that
                          will take your skills to the next level.
                        </p>
                      </div>
                      <div className="cta-actions">
                        <button
                          type="button"
                          className="thq-button-filled cta-button"
                        >
                          Explore Opportunities
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-features2">
            <div className="thq-section-padding">
              <div className="features2-container1 thq-section-max-width">
                <div className="features2-tabs-menu">
                  <div className="features2-tab-horizontal">
                    <div className="features2-divider-container">
                      <div className="features2-container2"></div>
                    </div>
                    <div className="features2-content">
                      <h2 className="thq-heading-2">Feature #1</h2>
                      <span className="thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                      </span>
                    </div>
                  </div>
                  <div className="features2-tab-horizontal1">
                    <div className="features2-divider-container1"></div>
                    <div className="features2-content1">
                      <h2 className="thq-heading-2">Hackathon Events</h2>
                      <span className="thq-body-small">
                        Participate in our exciting hackathon events where you
                        can showcase your skills, collaborate with other
                        talented individuals, and win amazing prizes.
                      </span>
                    </div>
                  </div>
                  <div className="features2-tab-horizontal2">
                    <div className="features2-divider-container2"></div>
                    <div className="features2-content2">
                      <h2 className="thq-heading-2">Feature #3</h2>
                      <span className="thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="features2-image-container">
                  <img
                    alt="feature 1"
                    src="https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                    className="features2-image thq-img-ratio-16-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-pricing">
            <div className="pricing-pricing23 thq-section-padding">
              <div className="pricing-max-width thq-section-max-width">
                <div className="pricing-section-title">
                  <span className="pricing-text thq-body-small">
                    Choose the perfect plan for you
                  </span>
                  <div className="pricing-content">
                    <h2 className="pricing-text01 thq-heading-2">
                      Pricing plan
                    </h2>
                    <p className="pricing-text02 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="pricing-tabs">
                  <button className="pricing-button thq-button-animated thq-button-filled">
                    <span className="thq-body-small">Monthly</span>
                  </button>
                  <button className="pricing-button03 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">Yearly</span>
                  </button>
                </div>
                <div className="pricing-content1">
                  <div className="pricing-column thq-card">
                    <div className="pricing-price">
                      <div className="pricing-price01">
                        <p className="pricing-text07 thq-body-large">
                          Basic plan
                        </p>
                        <h3 className="pricing-text08 thq-heading-3">$99</h3>
                        <p className="thq-body-large">$999</p>
                      </div>
                      <div className="pricing-list">
                        <div className="pricing-list-item">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Access to internship opportunities
                          </span>
                        </div>
                        <div className="pricing-list-item01">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Participation in hackathons
                          </span>
                        </div>
                        <div className="pricing-list-item02">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Resume building workshops
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="pricing-button04 thq-button-outline thq-button-animated">
                      <span className="thq-body-small">Sign Up</span>
                    </button>
                  </div>
                  <div className="pricing-column1 thq-card">
                    <div className="pricing-price02">
                      <div className="pricing-price03">
                        <p className="pricing-text14 thq-body-large">
                          Business plan
                        </p>
                        <h3 className="pricing-text15 thq-heading-3">$149</h3>
                        <p className="thq-body-large">$1499</p>
                      </div>
                      <div className="pricing-list1">
                        <div className="pricing-list-item03">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            All features of Plan 1
                          </span>
                        </div>
                        <div className="pricing-list-item04">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Exclusive networking events
                          </span>
                        </div>
                        <div className="pricing-list-item05">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Mock interview sessions
                          </span>
                        </div>
                        <div className="pricing-list-item06">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="pricing-button05 thq-button-animated thq-button-filled">
                      <span className="thq-body-small">Sign Up</span>
                    </button>
                  </div>
                  <div className="pricing-column2 thq-card">
                    <div className="pricing-price04">
                      <div className="pricing-price05">
                        <p className="pricing-text22 thq-body-large">
                          Enterprise plan
                        </p>
                        <h3 className="pricing-text23 thq-heading-3">$199</h3>
                        <p className="thq-body-large">$1999</p>
                      </div>
                      <div className="pricing-list2">
                        <div className="pricing-list-item07">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            All features of Plan 2
                          </span>
                        </div>
                        <div className="pricing-list-item08">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Personalized career coaching
                          </span>
                        </div>
                        <div className="pricing-list-item09">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Priority access to job openings
                          </span>
                        </div>
                        <div className="pricing-list-item10">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </div>
                        <div className="pricing-list-item11">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="pricing-button06 thq-button-animated thq-button-filled">
                      <span className="thq-body-small">Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-steps">
            <div className="steps-container thq-section-padding">
              <div className="steps-max-width thq-section-max-width">
                <div className="steps-container1 thq-grid-2">
                  <div className="steps-section-header">
                    <h2 className="thq-heading-2">
                      Discover the Power of Our Products
                    </h2>
                    <p className="thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="steps-actions">
                      <button className="thq-button-animated thq-button-filled steps-button">
                        <span className="thq-body-small">Main action</span>
                      </button>
                    </div>
                  </div>
                  <div className="steps-container2">
                    <div className="steps-container3 thq-card">
                      <h2 className="thq-heading-2">
                        Explore Internship Opportunities
                      </h2>
                      <span className="steps-text04 thq-body-small">
                        Browse through a wide range of internship opportunities
                        in various industries and locations.
                      </span>
                      <label className="steps-text05 thq-heading-3">01</label>
                    </div>
                    <div className="steps-container4 thq-card">
                      <h2 className="thq-heading-2">
                        Participate in Hackathons
                      </h2>
                      <span className="steps-text07 thq-body-small">
                        Join our hackathons to showcase your skills, collaborate
                        with other talented individuals, and win exciting
                        prizes.
                      </span>
                      <label className="steps-text08 thq-heading-3">02</label>
                    </div>
                    <div className="steps-container5 thq-card">
                      <h2 className="thq-heading-2">
                        Connect with Industry Professionals
                      </h2>
                      <span className="steps-text10 thq-body-small">
                        Network with experienced professionals in your field of
                        interest and gain valuable insights and mentorship.
                      </span>
                      <label className="steps-text11 thq-heading-3">03</label>
                    </div>
                    <div className="steps-container6 thq-card">
                      <h2 className="thq-heading-2">
                        Gain Real-World Experience
                      </h2>
                      <span className="steps-text13 thq-body-small">
                        Get hands-on experience through internships and
                        hackathons to enhance your skills and boost your resume.
                      </span>
                      <label className="steps-text14 thq-heading-3">04</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            <div className="thq-section-padding">
              <div className="testimonial-max-width thq-section-max-width">
                <div className="testimonial-container">
                  <h2 className="thq-heading-2">Testimonials</h2>
                  <span className="testimonial-text01 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="thq-grid-2">
                  <div className="thq-animated-card-bg-2">
                    <div className="thq-animated-card-bg-1">
                      <div
                        data-animated="true"
                        className="thq-card testimonial-card"
                      >
                        <div className="testimonial-container02">
                          <img
                            alt="John Doe Image Alt Text"
                            src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgwOXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                            className="testimonial-image"
                          />
                          <div className="testimonial-container03">
                            <strong className="thq-body-large">John Doe</strong>
                            <span className="thq-body-small">
                              Software Engineer
                            </span>
                          </div>
                        </div>
                        <span className="testimonial-text04 thq-body-small">
                          Great experience with the internship program! I
                          learned a lot and had the opportunity to work on real
                          projects.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thq-animated-card-bg-2">
                    <div className="thq-animated-card-bg-1">
                      <div
                        data-animated="true"
                        className="thq-card testimonial-card1"
                      >
                        <div className="testimonial-container04">
                          <img
                            alt="Jane Smith Image Alt Text"
                            src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                            className="testimonial-image1"
                          />
                          <div className="testimonial-container05">
                            <strong className="thq-body-large">
                              Jane Smith
                            </strong>
                            <span className="thq-body-small">
                              Web Developer
                            </span>
                          </div>
                        </div>
                        <span className="testimonial-text07 thq-body-small">
                          Participating in the hackathon was an amazing
                          experience. I enjoyed collaborating with other
                          participants and creating innovative solutions.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thq-animated-card-bg-2">
                    <div className="thq-animated-card-bg-1">
                      <div
                        data-animated="true"
                        className="thq-card testimonial-card2"
                      >
                        <div className="testimonial-container06">
                          <img
                            alt="Alex Johnson Image Alt Text"
                            src="https://images.unsplash.com/photo-1598386149247-59d721c12aa4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                            className="testimonial-image2"
                          />
                          <div className="testimonial-container07">
                            <strong className="thq-body-large">
                              Alex Johnson
                            </strong>
                            <span className="thq-body-small">Data Analyst</span>
                          </div>
                        </div>
                        <span className="testimonial-text10 thq-body-small">
                          The internship provided me with valuable skills that I
                          could apply in my future career. Highly recommend it!
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thq-animated-card-bg-2">
                    <div className="thq-animated-card-bg-1">
                      <div
                        data-animated="true"
                        className="thq-card testimonial-card3"
                      >
                        <div className="testimonial-container08">
                          <img
                            alt="Emily Brown Image Alt Text"
                            src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgwOXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                            className="testimonial-image3"
                          />
                          <div className="testimonial-container09">
                            <strong className="thq-body-large">
                              Emily Brown
                            </strong>
                            <span className="thq-body-small">UX Designer</span>
                          </div>
                        </div>
                        <span className="testimonial-text13 thq-body-small">
                          The hackathon was a great opportunity to showcase my
                          creativity and problem-solving skills. It was a
                          rewarding experience.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contact">
            <div className="contact-contact20 thq-section-padding">
              <div className="contact-max-width thq-section-max-width">
                <div className="contact-section-title">
                  <span className="thq-body-small">
                    Our team is here to assist you with any inquiries.
                  </span>
                  <div className="contact-content">
                    <h2 className="thq-heading-2">Contact Us</h2>
                    <p className="contact-text2 thq-body-large">
                      Have a question or want to learn more about our services?
                      Reach out to us!
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-content1">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <div className="contact-contact-info">
                      <div className="contact-content2">
                        <h3 className="contact-text3 thq-heading-3">Email</h3>
                        <p className="contact-text4 thq-body-large">
                          Feel free to contact us via email or phone during our
                          business hours.
                        </p>
                      </div>
                      <span className="contact-email thq-body-small">
                        info@companyname.com
                      </span>
                    </div>
                  </div>
                  <div className="contact-content3">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                    </svg>
                    <div className="contact-contact-info1">
                      <div className="contact-content4">
                        <h3 className="contact-text5 thq-heading-3">Phone</h3>
                        <p className="contact-text6 thq-body-large">
                          We look forward to hearing from you!
                        </p>
                      </div>
                      <span className="contact-phone thq-body-small">
                        +1 (123) 456-7890
                      </span>
                    </div>
                  </div>
                  <div className="contact-content5">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                    </svg>
                    <div className="contact-contact-info2">
                      <div className="contact-content6">
                        <h3 className="contact-text7 thq-heading-3">Office</h3>
                        <p className="contact-text8 thq-body-large">
                          Follow us on social media for updates and
                          announcements.
                        </p>
                      </div>
                      <span className="contact-address thq-body-small">
                        123 Main Street, City, Country
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-footer">
            <footer className="footer-footer1 thq-section-padding">
              <div className="footer-max-width thq-section-max-width">
                <div className="footer-content">
                  <div className="footer-newsletter">
                    <img
                      alt="Company Logo"
                      src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                      className="footer-image1"
                    />
                    <span className="thq-body-small">
                      Subscribe to our newsletter for the latest updates on new
                      features and product releases.
                    </span>
                    <div className="footer-actions">
                      <div className="footer-form">
                        <div className="footer-container">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer-text-input thq-input"
                          />
                        </div>
                        <button className="thq-button-outline footer-button">
                          <span className="thq-body-small">Subscribe</span>
                        </button>
                      </div>
                      <span className="footer-content2 thq-body-small">
                        Stay updated with our latest news and events by
                        subscribing to our newsletter.
                      </span>
                    </div>
                  </div>
                  <div className="footer-links">
                    <div className="footer-column1">
                      <strong className="thq-body-large footer-column1-title">
                        Company
                      </strong>
                      <div className="footer-footer-links">
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Home
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          About Us
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Services
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Internships
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Hackathons
                        </a>
                      </div>
                    </div>
                    <div className="footer-column2">
                      <strong className="thq-body-large footer-column2-title">
                        Quick Links
                      </strong>
                      <div className="footer-footer-links1">
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Contact Us
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          FAQs
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Blog
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Careers
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="thq-body-small"
                        >
                          Events
                        </a>
                      </div>
                    </div>
                    <div className="footer-column3">
                      <strong className="thq-body-large footer-social-link1-title">
                        Connect with Us
                      </strong>
                      <div className="footer-social-links">
                        <div className="footer-link">
                          <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className="thq-icon-small"
                          >
                            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                          </svg>
                          <span className="thq-body-small">Facebook</span>
                        </div>
                        <div className="footer-link1">
                          <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className="thq-icon-small"
                          >
                            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                          </svg>
                          <span className="thq-body-small">Instagram</span>
                        </div>
                        <div className="footer-link2">
                          <svg
                            viewBox="0 0 950.8571428571428 1024"
                            className="thq-icon-small"
                          >
                            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                          </svg>
                          <span className="thq-body-small">X</span>
                        </div>
                        <div className="footer-link3">
                          <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className="thq-icon-small"
                          >
                            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                          </svg>
                          <span className="thq-body-small">LinkedIn</span>
                        </div>
                        <div className="footer-link4">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                          </svg>
                          <span className="thq-body-small">Youtube</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-credits">
                  <div className="thq-divider-horizontal"></div>
                  <div className="footer-row">
                    <span className="thq-body-small">
                      &amp;copy; 2023 Company. All rights reserved.
                    </span>
                    <div className="footer-footer-links2">
                      <span className="thq-body-small">Privacy Policy</span>
                      <span className="thq-body-small">Terms of Service</span>
                      <span className="thq-body-small">Cookie Policy</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
