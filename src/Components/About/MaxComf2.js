import * as React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import tension from "../../assets/tension.jpg";
import blackMan from "../../assets/blackMan.jpg";
import seat from "../../assets/seats.jpg";
import upper from "../../assets/upper.jpg";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function MaxComf2() {
  return (
    <div className="comf-2-sec">
      <div className="comf-22">
        <a className="pic-point">
          <img className="img-ab im-hover" src={blackMan} />
        </a>
        <div>
          <a className="pic-point">
            <img className="ab-small im-hover seat" src={seat} />
          </a>
          <a className="pic-point">
            <img className="ab-small im-hover" src={upper} />
          </a>
        </div>
        <a className="pic-point">
          <img className="img-ab ab2 im-hover" src={tension} />
        </a>
      </div>
    </div>
  );
}
