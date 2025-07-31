import React, { useEffect } from "react";
import "./Rolls.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);
export default function RollsRoyce() {
  useEffect(() => {
    // GSAP ScrollTrigger animation for scaling the image
    gsap.to(".rolls-pic", {
      scale: 2, // End scale when user reaches the bottom of the element
      scrollTrigger: {
        trigger: ".pic-section", // Element that triggers the animation
        start: "top top", // Start the animation when the element hits the top of the viewport
        end: "bottom bottom", // End the animation when the element reaches the bottom of the viewport
        scrub: true, // Smooth animation sync with scroll
        markers: false, // Set to true to see the start and end points (for debugging)
      },
    });
  }, []);

  return (
    <div className="roll-section">
      <div className="rolls-all">
        <div className="rolls-para">
          <div>
            <p style={{ textAlign: "center" }}>Agile. Athletic. Responsive.</p>
            <p>A drive that leaves you spellbound.</p>
          </div>
        </div>
        <div className="pic-section">
          <img
            src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/spectre-discover/page-components/comp-update-dec-24/D-EXP-IMG-SPECTRE-DISCOVER.jpg/jcr:content/renditions/cq5dam.web.1920.webp"
            className="rolls-pic"
          />
        </div>
      </div>
    </div>
  );
}
