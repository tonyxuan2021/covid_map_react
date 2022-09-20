import React from "react";
import { Grid } from "@mui/material";
import Map from "../components/Map";
import Navigation from "../components/Navigation";

const CanadaPage = () => {
  return (
    <Grid container>
      <Navigation />
      <Grid container item>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Map />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default CanadaPage;
