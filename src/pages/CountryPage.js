import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { useGlobalContext } from "../contextAPI/Context";
import axios from "axios";
import Header from "../components/Header";

const api_key = process.env.REACT_APP_API_KEY;

const CountryPage = () => {
  const [countryImg, setCountryImg] = useState(null);
  const {
    countryData,
    countryLat,
    countryLong,
    setCountryLat,
    setCountryLong,
  } = useGlobalContext();

  if (!countryData) {
    return <p>Loading...</p>;
  }

  const contryDataObj = countryData.data;
  const { country, cases, countryInfo, deaths, recovered, tests, updated } =
    contryDataObj;

  setCountryLat(countryInfo.lat);
  setCountryLong(countryInfo.long);

  return (
    <div>
      <Header />
      <Grid
        container
        item
        display="flex"
        flexDirection="column"
        sx={{ p: "3rem" }}
        gap={8}
      >
        <Grid item>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 5 }}
          >
            <Grid item>
              <Typography>COUNTRIES</Typography>
              <Typography variant="h4">{country}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Updated On</Typography>
              <Typography variant="h4">
                {new Date(updated).toLocaleDateString("en-US")}
              </Typography>
            </Grid>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={2}>
            <CoronavirusIcon fontSize="large" color="warning" />
            <Typography variant="h4">OVERVIEW</Typography>
          </Grid>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h5">Confirmed Cases</Typography>
            <Typography variant="h4">
              {Number(cases).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Deaths</Typography>
            <Typography variant="h4">
              {Number(deaths).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              style={{ width: "100%", maxHeight: "240px", objectFit: "cover" }}
              src={`https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=800&height=600&center=lonlat:${countryLong},${countryLat}&zoom=2.5&apiKey=${api_key}`}
            ></img>
          </Grid>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h5">Recovered</Typography>
            <Typography variant="h4">
              {Number(recovered).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Tested Cases</Typography>
            <Typography variant="h4">
              {Number(tests).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryPage;
