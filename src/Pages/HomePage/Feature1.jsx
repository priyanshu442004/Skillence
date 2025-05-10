import React from "react";

const Feature1 = () => {
  return (
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
                <h2 className="thq-heading-2">Internship Opportunities</h2>
                <span className="thq-body-small">
                  Explore various internship opportunities in leading companies.
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
  );
};

export default Feature1;
