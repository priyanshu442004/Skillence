import React from 'react'
import img1 from "../../assets/img1.jfif"
import img2 from "../../assets/img2.jfif"
import img3 from "../../assets/img3.jfif"
import img4 from "../../assets/img4.jfif"
import img5 from "../../assets/img5.jfif"
import img6 from "../../assets/img6.jfif"
const Carousal = () => {
const imageUrls = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
]
  return (
    <div className="hero-content1">
                    
                    <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
                      <div className="thq-animated-group-horizontal-reverse">
                       
                        {imageUrls.map((url, index) => (
                          <img
                            key={index}
                            alt="Hero Image"
                            src={url}
                            className={`hero-placeholder-image${index + 13} thq-img-scale thq-img-ratio-1-1`}
                          />
                        ))}
                      </div>
                      <div className="thq-animated-group-horizontal-reverse">
                        {imageUrls.map((url, index) => (
                          <img
                            key={index}
                            alt="Hero Image"
                            src={url}
                            className={`hero-placeholder-image${index + 13} thq-img-scale thq-img-ratio-1-1`}
                          />
                        ))}
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
  )
}

export default Carousal