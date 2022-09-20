import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import DataLeft from "../components/DataLeft";

import axios from "axios";

const CanadaPage = () => {
  const url = "https://disease.sh/v3/covid-19/countries/canada?strict=true";

  const [covidDataCanada, setCovidDateCanada] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${url}`);
      setCovidDateCanada(data.data);
    };

    fetchData();
  }, []);

  if (!covidDataCanada) {
    return <p>Loading...</p>;
  }

  console.log(covidDataCanada);

  return (
    <Grid container>
      <Navigation />
      <Grid container item>
        <Grid item xs={2}>
          <DataLeft covidDataCanada={covidDataCanada} />
        </Grid>
        <Grid item xs={8}>
          <Map covidDataCanada={covidDataCanada} />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default CanadaPage;
