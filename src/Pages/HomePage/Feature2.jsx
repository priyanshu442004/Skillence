import React from "react";
import { useNavigate } from "react-router-dom";

const Feature2 = () => {

  const navigate=useNavigate();
  return (
    <div>
      <div className="home-cta">
        <div className="thq-section-padding">
          <div className="thq-section-max-width">
            <div className="cta-accent2-bg">
              <div className="cta-accent1-bg">
                <div className="cta-container1">
                  <div className="cta-content">
                   <span className="thq-heading-2">
  Looking for More Than Just an Internship?
</span>
<p className="thq-body-large">
  Join a platform where you build real apps, solve real problems, and earn recognition that actually means something.
</p>



                  </div>
                  <div className="cta-actions">
                    <button
                      onClick={() => navigate("/internship")}
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
                  <h2 className="thq-heading-2">🚀 Real Client Projects</h2>
                  <span className="thq-body-small">
                    Gain hands-on experience by working on real-world projects
                    from startups and businesses, adding strong, practical work
                    to your portfolio from day one.
                  </span>
                </div>
              </div>
              <div className="features2-tab-horizontal1">
                <div className="features2-divider-container1"></div>
                <div className="features2-content1">
                  <h2 className="thq-heading-2">🧠 Tech Hackathons</h2>
                  <span className="thq-body-small">
                    Participate in competitive, skill-focused hackathons with
                    prize pools, mentorship, and real-world challenges that push
                    your creativity and coding limits.
                  </span>
                </div>
              </div>
              <div className="features2-tab-horizontal2">
                <div className="features2-divider-container2"></div>
                <div className="features2-content2">
                  <h2 className="thq-heading-2">🎓 Certified Internships</h2>
                  <span className="thq-body-small">
                    Join structured internship programs with real tasks,
                    mentorship, and performance-based certifications that add
                    genuine value to your resume and LinkedIn profile.
                  </span>
                </div>
              </div>
              <div className="features2-tab-horizontal2">
                <div className="features2-divider-container2"></div>
                <div className="features2-content2">
                  <h2 className="thq-heading-2">💼 Hire Interns Full-Time</h2>
                  <span className="thq-body-small">
                    Spot top talent early and hire them directly for full-time
                    roles—our interns are trained on real projects and ready to
                    deliver from day one.
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
    </div>
  );
};

export default Feature2;
