import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Map from "../components/Map";
import DataLeft from "../components/DataLeft";
import axios from "axios";
import { Chart1 } from "../components/Chart1";
import Header from "../components/Header";

const HomePage = () => {
  const [covidDataWorld, setCovidDataWorld] = useState("");

  const url = `https://disease.sh/v3/covid-19/all`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${url}`);
      setCovidDataWorld(data.data);
    };

    fetchData();
  }, []);

  if (!covidDataWorld) {
    return <p>Loading...</p>;
  }

  return (
    <Grid item>
      <Header />
      <Grid container item>
        <Grid item xs={2}>
          <DataLeft covidDataWorld={covidDataWorld} />
        </Grid>
        <Grid item xs={7}>
          <Map />
        </Grid>
        <Grid item xs={3}>
          <Chart1 />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
