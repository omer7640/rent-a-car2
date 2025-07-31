import React, { useRef, useEffect } from "react";
import "./Variety.css";
import scetchMerc from "../../assets/scetchMerc.png";
import scetchRR from "../../assets/scetchRR.png";
import scetchWrangler from "../../assets/scetchWrangler.png";
import { Done } from "@mui/icons-material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Variety() {
  const boxesRef = useRef([]);
  const borderRef = useRef(null);

  useEffect(() => {
    const borderSection = borderRef.current;
    const border = borderSection.querySelector(".border-bottom");
    gsap.fromTo(
      border,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: borderSection,
          start: "top 80%",
          end: "bottom 20%", // End animation when leaving
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    boxesRef.current.forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          toggleActions: "restart none none none",
        },
        x: 240,
        duration: 1,
        // opacity: 1,
        ease: "linear",
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el); // Add each element to the array
    }
  };

  return (
    <div className="variety-section">
      <div className="variety-heading" ref={borderRef}>
        <h2 className="variety-h2">A High Variety Of Options</h2>
        <p className="possi-para">BEST POSSIBILITIES</p>
        <div className="border-bottom"></div>
      </div>
      <div className="option-section">
        <div className="opt-card">
          <div className="card-left">
            <h4 className="opt-heading">Premium</h4>
            <img
              className="opt-img gsap-ani"
              ref={addToRefs}
              src={scetchMerc}
              alt="Premium Option"
            />
            <p className="opt-price">
              from <span className="opt-dollar">$40/h</span>
            </p>
          </div>
          <div className="opt-para">
            <p>
              <Done /> Leo urna molestie at elem
            </p>
            <p>
              <Done />
              Quisque non tellu si
            </p>
            <p>
              <Done /> Pretium lectus quam id li
            </p>
          </div>
          <div>
            <button className="btn btn-book">+BOOK</button>
          </div>
        </div>
        <div className="opt-card">
          <div className="card-left">
            <h4 className="opt-heading">Luxury</h4>
            <img
              className="opt-img gsap-ani"
              ref={addToRefs}
              src={scetchRR}
              alt="Luxury Option"
            />
            <p className="opt-price">
              from <span className="opt-dollar">$50/h</span>
            </p>
          </div>
          <div className="opt-para">
            <p>
              <Done /> Leo urna molestie at elem
            </p>
            <p>
              <Done />
              Quisque non tellu si
            </p>{" "}
            <p>
              <Done /> Pretium lectus quam id li
            </p>
          </div>
          <div>
            <button className="btn btn-book">+BOOK</button>
          </div>{" "}
        </div>
        <div className="opt-card">
          <div className="card-left">
            <h4 className="opt-heading">Super</h4>
            <img
              className="opt-img gsap-ani"
              ref={addToRefs}
              src={scetchWrangler}
              alt="Super Option"
            />
            <p className="opt-price">
              from <span className="opt-dollar">$70/h</span>
            </p>
          </div>
          <div className="opt-para">
            <p>
              <Done /> Leo urna molestie at elem
            </p>
            <p>
              <Done />
              Quisque non tellu si
            </p>{" "}
            <p>
              <Done /> Pretium lectus quam id li
            </p>
          </div>
          <div>
            <button className="btn btn-book">+BOOK</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
