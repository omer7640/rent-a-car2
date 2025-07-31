import React, { useRef, useEffect } from "react";
import "./Premium.css";
import lambo from "../../assets/lambo.jpg";
import rrKey from "../../assets/rrKey.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Premium() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".premium-section", // Element triggering the animation
        start: "top 65%", // Animation starts when top of section hits center of viewport
        end: "top bottom", // Animation ends when bottom of section hits top of viewport
        scrub: 1, // Smooth scrubbing effect
      },
    });

    animation
      .fromTo(
        img1Ref.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1 }
      )
      .fromTo(
        img2Ref.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1 },
        "-=0.5" // Overlap the animations slightly
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup GSAP on unmount
    };
  }, []);

  return (
    <div className="premium-section">
      <div className="premium-all">
        <div className="prem-written">
          <h4 className="premium-h4">We Care Of Your Safety And Convenience</h4>
          <p className="prem-drive">PREMIUM DRIVERS</p>
          <p className="premium-para">
            Facilisi cras fermentum odio eu feugiat. In fermentum et
            sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus
            iaculis urna id. Aenean euismod elementum nisi quis eleifend quam
            adipiscing vitae dipiscing.
          </p>
          <button className="btn btn-send prem-btn">+ BOOK NOW</button>
        </div>
        <div className="premium-images">
          <img
            ref={img1Ref}
            className="prem-img prem-pic1"
            src={rrKey}
            alt="RR Key"
          />
          <img
            ref={img2Ref}
            className="prem-img prem-pic2"
            src={lambo}
            alt="Lambo"
          />
        </div>
      </div>
    </div>
  );
}
