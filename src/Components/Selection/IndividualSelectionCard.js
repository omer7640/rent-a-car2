import React from "react";
import fourStar from "../../assets/fourStart.png";
import Earth from "../../Earth";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
export default function IndividualSelectionCard({
  image,
  name,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  return (
    <div className="ind-selection-section">
      <div className="main-comp">
        <div className="images-component">
          <img class="seat2" src={image2} alt="image description" />
          <div className="neeche-images">
            <img class="small-comp" src={image3} alt="image description" />
            <img class="small-comp" src={image4} alt="image description" />
            <img class="small-comp" src={image5} alt="image description" />
          </div>
          <div className="content-images">
            <h2 className="heading-selection">Rolls Royce Overview</h2>
            <p className="selection-para">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo laborum consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla est pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id.
            </p>
            <p className="selection-para">
              Sagittis molestie magnis etiam nullam tincidunt hendrerit enim
              ultricies phasellus, laoreet nascetur ornare torquent ultrices
              sapien sodales volutpat duis, accumsan ridiculus magna dictum cras
              gravida leo mus ex.
            </p>
          </div>
        </div>
        <div className="right-comp">
          {/* <img src={image6} className="image6" /> */}
          <Canvas
            dpr={[1, 2]}
            className="canva1"
            frameloop="demand"
            style={{ width: "100%", height: "350px" }}
          >
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
            />
            <Suspense fallback={null}>
              <group scale={[1, 1, 1]}>
                <Earth />
              </group>
            </Suspense>
            <Environment preset="studio" />
            {/* <ContactShadows
              opacity={1}
              scale={50}
              blur={1}
              position={[0, -0.2, 0]}
              far={10}
              resolution={256}
              color="#000000"
            /> */}
          </Canvas>
          <h2 style={{ fontSize: "40px" }}>{name}</h2>
          <img src={fourStar} style={{ width: "113px" }} />
          <div className="buttons">
            <div>
              <button className="btn-ran">4 Persons</button>
              <button className="btn-ran">Automatic</button>{" "}
            </div>
            <div>
              <button className="btn-ran">black Leather Interior</button>{" "}
              <button className="btn-ran">Led</button>{" "}
            </div>
            <div>
              <button className="btn-ran">Lux</button>
              <button className="btn-ran">WiFi</button>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>Extras</h2>
            <p className="p">
              Leather Seats, LED Lighting, Audio system, rain sensors, air
              conditioning, panoramic roof...
            </p>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Prices</h2>
            <div>
              <p className="price-head">
                <span style={{ fontSize: "26px" }}>$</span>
                <span style={{ fontSize: "50px" }}>120</span>
                <span
                  style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
                >
                  / Per hour
                </span>
              </p>
              <p className="price-head">
                <span style={{ fontSize: "26px" }}>$</span>
                <span style={{ fontSize: "50px" }}>180</span>
                <span
                  style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
                >
                  / Per hour
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
