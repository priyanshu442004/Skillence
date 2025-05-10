import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousal from "./Carousal";
import Career from "./Career";
import About from "./About";
import Testimonals from "./Testimonals";
import Contact from "./Contact";
import Hero from "./Hero";
import Feature2 from "./Feature2";
import Feature1 from "./Feature1";
const Home = () => {
  const navigate = useNavigate();

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
          <div className="home-hero">
            <div className="hero-header78">
              <Hero />
              <Carousal />
            </div>
          </div>
          <Feature1 />
          <Feature2 />
          <Career />
          <About />
          <Testimonals />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
