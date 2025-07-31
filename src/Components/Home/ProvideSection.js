import React from "react";
import "./ProvideSection.css";
import { HeadsetMicOutlined } from "@mui/icons-material";
import head from "../../assets/head.png";
import brabus from "../../assets/brabus.jpg";
import renault from "../../assets/renault.jpg";
import rr3 from "../../assets/rr3.jpg";
import gtr from "../../assets/gtr.jpg";
import GWagon from "../../assets/GWagon.jpg";
import bmw from "../../assets/bmw.jpg";

export default function ProvideSection() {
  return (
    <div className="provide-section">
      <div className="provide-details">
        <h2 className="provide-heading">
          What We Provide Is The Luxury Transport And Most Comfortable
          Experience
        </h2>
        <div className="provide-details-paras">
          <p className="det-para">
            Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo
            intege in malesuada nunc vel risus commodo. Sapien nec sagittis
            aliquam male bibendum arcu vitae. In ornare quam viverra orci
            sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget
            nulla facilisi nul.
          </p>
          <p className="call-det">
            <span>
              <img src={head} className="head" />
            </span>
            <span
              style={{
                marginTop: "11px",
                letterSpacing: "5px",
                fontSize: "12px",
              }}
            >
              CALL CENTER: +1234 5678 901
            </span>
          </p>
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="card-section">
        <main className="card-main">
          <div class="card">
            <img src={brabus} alt="" />
            <div class="card-content">
              <h2 className="card-heading">4x4</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
        <main className="card-main">
          <div class="card">
            <img src={renault} alt="" />
            <div class="card-content">
              <h2 className="card-heading">Sports</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>{" "}
        <main className="card-main">
          <div class="card">
            <img src={rr3} alt="" />
            <div class="card-content">
              <h2 className="card-heading">Luxury</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
        {/* <div className="card-section card2"> */}
        <main className="card-main">
          <div class="card">
            <img src={bmw} alt="" />
            <div class="card-content">
              <h2 className="card-heading">Cruise</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
        <main className="card-main">
          <div class="card">
            <img src={GWagon} alt="" />
            <div class="card-content">
              <h2 className="card-heading">4x4</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
        <main className="card-main">
          <div class="card">
            <img src={gtr} alt="" />
            <div class="card-content">
              <h2 className="card-heading">Sports</h2>
              <p className="cara-para">
                from{" "}
                <span className="rate">
                  <span className="price">$180</span>/hour
                </span>
              </p>
              <p className="card-sentence">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
      </div>
      {/* </div> */}
    </div>
  );
}
