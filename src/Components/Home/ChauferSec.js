import React, { useRef, useEffect } from "react";
import "./ChauferSec.css";
import sulli from "../../assets/sulli.jpg";
import zakary from "../../assets/zakary.jpg";
import marco from "../../assets/marco.jpg";
import { Phone } from "@mui/icons-material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChauferSec() {
  const headingRef = useRef(null);

  useEffect(() => {
    const headingSection = headingRef.current;

    // Create the border animation
    const border = headingSection.querySelector(".border-bottom");
    gsap.fromTo(
      border,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: headingSection,
          start: "top 80%", // Start when heading-section enters the viewport
          end: "bottom 20%", // End animation when leaving
          toggleActions: "play none none reverse", // Play and reverse on scroll
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="chaufer-section">
      <div className="heading-section" ref={headingRef}>
        <h2 className="ride-h2">Our Professional Chaufers</h2>
        <p className="fine-para">MEET OUR TEAM</p>
        {/* Border-bottom div */}
        <div className="border-bottom"></div>
      </div>

      <div className="chuaf-img-sec">
        <div className="chauf-card">
          <img className="prem-img chaufer-img" src={marco} alt="Marco" />
          <h5 className="chuafer-name">Marco Watkivi</h5>
          <div className="chuafer-contact">
            <Phone className="phone-icon" />
            <p>+1234 5678 901</p>
          </div>
        </div>
        <div className="chauf-card">
          <img className="prem-img chaufer-img" src={sulli} alt="Sulli" />
          <h5 className="chuafer-name">Marily Sulli</h5>
          <div className="chuafer-contact">
            <Phone className="phone-icon" />
            <p>+1234 5678 901</p>
          </div>
        </div>
        <div className="chauf-card">
          <img className="prem-img chaufer-img" src={zakary} alt="Zakary" />
          <h5 className="chuafer-name">Zakary Tapun</h5>
          <div className="chuafer-contact">
            <Phone className="phone-icon" />
            <p>+1234 5678 901</p>
          </div>
        </div>
      </div>
    </div>
  );
}
