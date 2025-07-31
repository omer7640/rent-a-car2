import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import rr from "../../assets/scetchRR.png";
import merce from "../../assets/scetchMerc.png";
import wrangle from "../../assets/scetchWrangler.png";
import Done from "@mui/icons-material/Done";
export default function SatisFaction({ image }) {
  return (
    // <div className="card-about-section">
    <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card-about card-about-section ">
      <img class="rounded-t-lg image-satis " src={image} alt="" />

      <div class="p-5">
        <h5 class="about-heading1">Superb</h5>
        <div className="price-about">
          <span style={{ fontSize: "26px" }}>$</span>
          <span style={{ fontSize: "62px", fontWeight: "500" }}>150</span>
          <span>/per day</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <ul style={{ fontSize: "16px", lineHeight: "2.5" }}>
          <li className="about-list">
            <Done /> Leo urna molestie at elem
          </li>
          <li className="about-list">
            <Done />
            Quisque non tellu si
          </li>
          <li className="about-list">
            <Done />
            Pretium lectus quam id li
          </li>
          <li className="about-list">
            <Done /> Lorem ipsum 24/7
          </li>
        </ul>
      </div>
      <div style={{ margin: "0 50px", marginTop: "30px" }}>
        <a
          href="#"
          class="btn-fleet"
          style={{ fontWeight: "350", fontStyle: "inherit" }}
        >
          + MORE DETAILS
        </a>
      </div>
    </div>
    // </div>
  );
}
