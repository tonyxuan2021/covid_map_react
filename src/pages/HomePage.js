import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Map from "../components/Map";
import DataLeft from "../components/DataLeft";
import axios from "axios";
import { Chart1 } from "../components/Chart1";
import Header from "../components/Header";
import { Chart2 } from "../components/Chart2";
import { Chart3 } from "../components/Chart3";

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
    <Grid container item>
      <Header />
      <Grid container item spacing={2} sx={{ pl: 2, pr: 2 }}>
        <Grid item xs={2.5}>
          <DataLeft covidDataWorld={covidDataWorld} />
        </Grid>
        <Grid item xs={6}>
          <Map />
        </Grid>
        <Grid item xs={3.5} display="flex" flexDirection="column" gap={5}>
          <Chart1 />
          <Chart2 />
          <Chart3 />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
