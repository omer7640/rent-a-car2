import React from "react";
import NavBarAbout from "../Components/Shared/NavBarAbout";
import AboutPic from "../Components/About/AboutPic";
import MaxComf2 from "../Components/About/MaxComf2";
import "../About.css";
import Branding from "../Components/About/Branding";
import Pic from "../Components/About/Pic";
import SatisFaction from "../Components/About/SatisFaction";
import rr from "../assets/sketchRR22.png";
import merce from "../assets/sketchMerc22.png";
import wrangle from "../assets/sketchWrang22.png";
import AboutHero2 from "../Components/About/AboutHero2";
import Footer from "../Components/Shared/Footer";
export default function About() {
  return (
    <div className="about-section">
      <NavBarAbout />
      <AboutPic />
      <MaxComf2 />
      <Branding />
      <Pic />
      <div className="about-satisfaction">
        <div>
          <h2 style={{ fontSize: "45px", fontWeight: "400" }}>
            Limousine For Maximum Satisfaction
          </h2>
          <p
            style={{
              color: "black",
              fontSize: "14px",
              letterSpacing: ".25em",
            }}
            className="riding"
          >
            ENJOY THE RIDE
          </p>
        </div>
        <div className="satis-main">
          <SatisFaction image={rr} />
          <SatisFaction image={merce} />
          <SatisFaction image={wrangle} />
        </div>
      </div>
      <AboutHero2 />
      <Footer />
    </div>
  );
}
