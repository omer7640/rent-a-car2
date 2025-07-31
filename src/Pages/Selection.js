import React from "react";
import "./Selection.css";
import NavBarAbout from "../Components/Shared/NavBarAbout";
import SelectionCard from "../Components/Selection/SelectionCard";
import bentlay22 from "../assets/bentlay22.jpg";
import aston from "../assets/aston22.jpg";
import range from "../assets/evoque.jpg";
import ferr22 from "../assets/ferr22.jpg";
import SelectionItems from "../json/SelectionItems";
import Footer from "../Components/Shared/Footer";
export default function Selection() {
  return (
    <div>
      <NavBarAbout />
      <div className="fleet-section" style={{ marginBottom: "80px" }}>
        <div className="hero-fleet">
          <h2 className="hero-head">Select your ride!</h2>
        </div>
        <div className="main-fleet">
          <div>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "500",
                letterSpacing: "3px",
              }}
            >
              BROWSE YOUR LIMO
            </h2>
          </div>
          <div className="card-selection">
            {SelectionItems.map((item) => (
              <SelectionCard
                item={item}
                key={item.id}
                image={item.image}
                name={item.name}
                image2={item.image2}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
