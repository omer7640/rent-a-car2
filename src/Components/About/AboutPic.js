import React from "react";
import "./AboutPic.css";
import { Check } from "@mui/icons-material";

export default function AboutPic() {
  return (
    <>
      <div className="ab-section">
        <div className="ab-left">
          <h3 className="we-provide ">
            What We Provide Is The Luxury Transport And Comfortable Experience
            For You
          </h3>
        </div>
        <div className="ab-right">
          <p className="ab-para thora" style={{ color: "black" }}>
            Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo
            intege in malesuada nunc vel risus commodo. Sapien nec sagittis
            aliquam male bibendum arcu vitae lorem sed.
          </p>

          <p className="ab-para ">
            <Check /> Consectetur adipiscing elit, sed do eiusmod tempo
          </p>
          <p className="ab-para">
            <Check />
            Ut enim ad minima veniam, quis nostrum
          </p>
          <p className="ab-para">
            <Check /> Temporibus autem quibusdam et aut officiis aut
          </p>
        </div>
      </div>
    </>
  );
}
