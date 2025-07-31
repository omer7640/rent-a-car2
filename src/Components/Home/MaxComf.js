import React, { useRef, useEffect } from "react";
import "./MaxComf.css";
import sportage from "../../assets/sportage.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MaxComf(props) {
  // const comfRef1 = useRef(null);
  const borderRef2 = useRef(null);
  useEffect(() => {
    const borderSection2 = borderRef2.current;
    const border2 = borderSection2.querySelector(".border-bottom");

    gsap.fromTo(
      border2,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: borderSection2,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="comfy-section">
      <div className="heading-section" ref={borderRef2}>
        <h2 className="ride-h2 comf-head">{props.heading}</h2>
        <p className="fine-para">FINEST TRANSPORT</p>
        <div className="border-bottom"></div>
      </div>
      {/* FEET section */}
      <div className="feature-section">
        <div className="feat-container-1">
          <div className="ft-box">
            <h4 className="ft-heading">{props.delayHead}</h4>
            <p>
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>
          <div className="ft-box">
            <h4 className="ft-heading">{props.prem}</h4>
            <p>
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>
        </div>
        <div className="feat-container-2">
          <div className="ft-box">
            <h4 className="ft-heading">{props.quality}</h4>
            <p>
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>{" "}
          <div className="ft-box">
            <h4 className="ft-heading">{props.diverse}</h4>
            <p>
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className="img-section">
        <img className="sportage-img" src={sportage} />
      </div>
    </div>
  );
}
