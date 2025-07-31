import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const backgrounds = {
    "/": "#0c1315",
    "/about": "#ffffff",
    "/selection": "#0c1315",
  };

  const backgroundColor = backgrounds[location.pathname] || "#0c1315";

  const textColor = backgroundColor === "#ffffff" ? "#000000" : "#ffffff";

  return (
    <div
      className="footer-section"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="footers">
        <div className="footer-1 footer">
          <h2 className="foot-head" style={{ color: "#bfa37c" }}>
            LUXEDRIVE
          </h2>
          <p style={{ fontSize: "18px", color: "#848386", lineHeight: "1.7" }}>
            Justo odio dignissimos ducimus qui blanditiis voluptatum deleniti
            corrupti quos dolores et quas molestias sint occaecati id est
            laborumesa etdolorum.
          </p>
          <p
            style={{
              paddingTop: "20px",
              color: textColor,
              letterSpacing: "5px",
              color: "#bfa37c",
            }}
          >
            CALL CENTER: +397 256 38 29
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "200px",
          }}
        >
          <div className="footer-2 footer">
            <h2 className="foot-head" style={{ color: textColor }}>
              Quick Links
            </h2>
            <ul className="footer-links">
              <li style={{ color: textColor, fontWeight: "300" }}>
                HOW WE WORK
              </li>
              <li style={{ color: textColor, fontWeight: "300" }}>FAQ</li>
              <li style={{ color: textColor, fontWeight: "300" }}>SERVICES</li>
              <li style={{ color: textColor, fontWeight: "300" }}>CONTACT</li>
            </ul>
          </div>
          <div className="footer-3 footer">
            <h2 className="foot-head" style={{ color: textColor }}>
              OUR SERVICES
            </h2>
            <ul className="footer-links">
              <li style={{ color: textColor, fontWeight: "300" }}>
                Corporate travels
              </li>
              <li style={{ color: textColor, fontWeight: "300" }}>
                Special events
              </li>
              <li style={{ color: textColor, fontWeight: "300" }}>
                Airport transport
              </li>
              <li style={{ color: textColor, fontWeight: "300" }}>
                Wedding limousine
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p style={{ color: textColor }}>
          © 2023 Qode Interactive, All Rights Reserved
        </p>
      </div>
    </div>
  );
}
