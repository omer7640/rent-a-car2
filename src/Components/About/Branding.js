import * as React from "react";
import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import deer from "../../assets/deer.webp";
import rena from "../../assets/rena.webp";
import bara from "../../assets/bara.webp";
import taycan from "../../assets/taycan.png";
import horse from "../../assets/horse2.webp";
import { Hvac } from "@mui/icons-material";

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

export default function Branding() {
  return (
    <Grid
      className="brand-pic"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: "100%" }}
    >
      <Grid className="brand-pic" size={6}>
        <Item>
          <div className="qode">
            <img className="image-brand" src={deer} />
          </div>
        </Item>
      </Grid>
      <Grid className="brand-pic" size={6}>
        <Item>
          <div className="qode">
            <img className="image-brand" src={taycan} />
          </div>
        </Item>
      </Grid>
      <Grid className="brand-pic" size={6}>
        <Item>
          <div className="qode">
            <img className="image-brand" src={rena} />
          </div>
        </Item>
      </Grid>
      <Grid className="brand-pic" size={6}>
        <Item>
          <div className="qode">
            <img className="image-brand" src={bara} />
          </div>
        </Item>
      </Grid>

      <Grid className="brand-pic" size={6}>
        <Item>
          <div className="qode">
            <img className="image-brand" src={horse} />
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}
