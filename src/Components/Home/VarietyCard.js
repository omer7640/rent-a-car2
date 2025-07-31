import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Earth from "../../Earth";

// import business from "../../src/assets/business.png";
import bag from "../../assets/icons8-bag-50.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import person from "../../assets/icons8-person-50.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";
export default function VarietyCard() {
  return (
    <div className="variety-box">
      <div className="content-card-variety">
        <div>
          <h1 className="heading-canva" style={{ color: "darkslategray" }}>
            ULTIMATE LUXURY
          </h1>
          <p style={{ color: "white" }}>
            Most Luxurious- Rolls Royce Phantom or Similar
          </p>
        </div>
      </div>
      <div className="below-Details">
        <div className="left-varity">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="icons-vary"
          >
            {/* <img src={bag} /> */}
            <BusinessCenterIcon />
            <p className="p">3</p>

            {/* <img src={person} /> */}
            <PersonIcon style={{ color: "darkslategray" }} />
            <p className="p ">2</p>
          </div>
          <div className="content-below">
            <li className="card-words">
              {" "}
              <DoneAllIcon /> Lorem ipsum dolor sit{" "}
            </li>
            <li className="card-words">
              {" "}
              <DoneAllIcon /> Lorem ipsum dolor sit{" "}
            </li>
            <li className="card-words">
              {" "}
              <DoneAllIcon /> Lorem ipsum dolor sit{" "}
            </li>
            <li className="card-words">
              {" "}
              <DoneAllIcon /> Lorem ipsum dolor sit{" "}
            </li>
          </div>
        </div>
        <Canvas
          dpr={[1, 2]}
          className="canva1"
          frameloop="demand"
          style={{ width: "50%" }}
        >
          <ambientLight />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="studio" />
          <ContactShadows
            opacity={1}
            scale={50}
            blur={1}
            position={[0, -0.2, 0]}
            far={10}
            resolution={256}
            color="#000000"
          />
        </Canvas>
        <div>
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}>
            $51
          </h1>
          {/* <button
            className="btn btn-send prem-btn"
            style={{ color: "white", marginBottom: "50px" }}
          >
            + BOOK NOW
          </button> */}
        </div>
      </div>
    </div>
  );
}
