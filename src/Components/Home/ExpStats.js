import React, { useRef, useState, useEffect } from "react";
import "./ExpStats.css";
import rollMono from "../../assets/rollsMono.jpg";
import model1 from "../../assets/model1.jpg";
import { gsap } from "gsap"; // GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSpring, animated } from "react-spring";

gsap.registerPlugin(ScrollTrigger);
export default function ExpStats() {
  const expRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div ref={expRef}>{number.to((n) => n.toFixed(0))}</animated.div>
    );
  }
  useEffect(() => {
    ScrollTrigger.create({
      trigger: expRef.current,
      start: "top 80%",
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
      once: true,
    });
  }, []);
  return (
    <div className="experience-section">
      <div className="experience-all">
        <div className="experience-images">
          <img className="prem-img exp-pic1 exp-img" src={model1} />
          <img src={rollMono} className="prem-img exp-pic2 exp-img" />
        </div>
        <div className="exp-written">
          <h4 className="exp-h4">Premium Cars Rental</h4>
          <p className="exp-drive">ONLY THE BEST</p>
          <p className="exp-para">
            Praesent elementum facilisis leo vel fringilla est. Vest bulum
            lectus a urise ultrices eros in cursus turpi uto.
          </p>
          <div className="stats">
            <div className="exp-years">
              <h3 className="num-head">
                <Number n={21} />+
              </h3>
              <p className="year-para">Years of experience</p>
            </div>

            <div className="exp-review">
              <h3 className="num-head">
                <Number n={157} />k
              </h3>
              <p className="year-para">Satisfied clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
