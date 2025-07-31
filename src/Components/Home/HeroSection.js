import React from "react";
// import mustang from "./assets/mustang.jpg";
import "./HeroSection.css";
import NavBar from "../Shared/NavBar";
import HeroMain from "./HeroMain";

export default function HeroSection() {
  return (
    <div className="hero-section-top">
      {/* <img className="bg-img" src={mustang} /> */}
      <NavBar />

      <HeroMain />
    </div>
  );
}
