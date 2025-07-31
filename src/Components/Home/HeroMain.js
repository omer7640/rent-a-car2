import React, { useRef, useEffect } from "react";
import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
// import Autocomplete from "./AutoComplete";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import { Link } from "react-router-dom";

export default function HeroMain() {
  const inputRef = useRef(null);
  const [today, setToday] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);
  useEffect(() => {
    // Preloading images with hidden div
    const preloadDiv = document.createElement("div");
    preloadDiv.style.display = "none";
    preloadDiv.style.backgroundImage = `
      url('/assets/RRCoupe.jpg'),
      url('/assets/mustang.jpg'),
      url('/assets/rr.jpg'),
      url('/assets/G63.jpg')
    `;
    document.body.appendChild(preloadDiv);

    return () => {
      document.body.removeChild(preloadDiv); // Clean up
    };
  }, []);
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyBglmO95aUK1oza3HPz5WAya9I_g_JZHwU",
  //   libraries: ["places"],
  // });

  const handleOnPlacesChanged = () => {
    let address = inputRef.current.getPlace();
    console.log("adress", address);
  };
  return (
    <div className="heromain-section">
      <div className="luxury">
        <h4 className="lux-heading">
          Need to Rent a Luxury Car? Send A Request.
        </h4>
        <p className="lux-para">
          Complete the form below and we'll contact you as soon as possible
        </p>
      </div>
      <div className="form-section">
        <form className="main-form">
          <input className="input" type="text" placeholder="choose loaction" />

          {/* <Autocomplete /> */}

          <input className="input" type="date" value={today} />
          <input className="input" type="time" placeholder="select time" />
          <input
            className="input"
            type="text"
            placeholder="Drop off location"
          />
          <Link
            to="/selection"
            className="btn btn-outline-light btn-send"
            style={{ marginTop: "0" }}
          >
            + SEND
          </Link>
        </form>
      </div>
    </div>
  );
}
