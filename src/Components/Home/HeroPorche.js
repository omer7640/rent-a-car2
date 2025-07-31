import React from "react";
import arrow22 from "../../assets/arrow22.png";
import "./HeroPorche.css";
import speed from "../../assets/speed22.png";
import head from "../../assets/head.png";
export default function HeroPorche() {
  return (
    <div className="hero-porche">
      <div className="porche">
        <h1 className="porche-heading">
          Get 15% Off Your Rental! Choose Your Model
        </h1>
      </div>
      <div className="arrows">
        <div className="arrow">
          <img className="img-arrow arr" src={arrow22} />
          <div className="arrow-para">
            <p>11 Rue de la Mutualité,</p>
            <p>92400 Paris</p>
          </div>
        </div>
        <div className="arrow">
          <img className="img-arrow" src={head} />
          <div className="arrow-para">
            <p>11 Rue de la Mutualité,</p>
            <p>92400 Paris</p>
          </div>
        </div>{" "}
        <div className="arrow">
          <img className="img-arrow" src={speed} />
          <div className="arrow-para">
            <p>11 Rue de la Mutualité,</p>
            <p>92400 Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
}
