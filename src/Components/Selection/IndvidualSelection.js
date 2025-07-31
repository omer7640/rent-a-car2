import React from "react";
import { useParams } from "react-router-dom";
import SelectionItems from "../../json/SelectionItems";
import IndividualSelectionCard from "./IndividualSelectionCard";
import NavBarAbout from "../Shared/NavBarAbout";
import Footer from "../Shared/Footer";
export default function IndvidualSelection() {
  const { id } = useParams();
  const products = SelectionItems.find(
    (product) => product.id.toString() === id
  );
  const { image, name, image2, image3, image4, image5, image6 } = products;
  return (
    <div>
      <NavBarAbout />
      <IndividualSelectionCard
        image={image}
        name={name}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
      />
      <Footer />
    </div>
  );
}
