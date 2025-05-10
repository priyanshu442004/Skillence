import React from 'react'

const Carousal = () => {
const imageUrls = [
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMnw&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxNHw&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxMXw&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njc3NTgxM3w&ixlib=rb-4.1.0&q=80&w=1080",
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