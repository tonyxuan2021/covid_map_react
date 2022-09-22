import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../10-2500x1667.jpg";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { useGlobalContext } from "../contextAPI/Context";
import axios from "axios";

const api_key = process.env.API_KEY;

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

  const fetchData = async () => {
    const fetchedData = await axios.get(
      `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=800&height=600&center=lonlat:105,35&zoom=2&apiKey=${api_key}`
    );

    setCountryImg(fetchedData);
  };
  fetchData();

  console.log(countryImg);

  return (
    <Grid
      container
      item
      display="flex"
      flexDirection="column"
      sx={{ p: "3rem" }}
      gap={8}
    >
      <Grid item>
        <Typography>COUNTRIES</Typography>
        <Typography sx={{ mb: 5 }} variant="h4">
          {country}
        </Typography>
        <Grid item display="flex" alignItems="center" gap={2}>
          <CoronavirusIcon fontSize="large" color="warning" />
          <Typography variant="h4">OVERVIEW</Typography>
        </Grid>
      </Grid>
      <Grid item display="flex" alignItems="center">
        <Grid item xs={3}>
          <Typography variant="h5">Confirmed Cases</Typography>
          <Typography variant="h4">{Number(cases).toLocaleString()}</Typography>
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
            src={countryInfo.flag}
          ></img>
        </Grid>
      </Grid>
      <Grid item display="flex" alignItems="center">
        <Grid item xs={3}>
          <Typography variant="h5">Confirmed Cases</Typography>
          <Typography variant="h4">{Number(cases).toLocaleString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Confirmed Cases</Typography>
          <Typography variant="h4">{Number(cases).toLocaleString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Confirmed Cases</Typography>
          <Typography variant="h4">{Number(cases).toLocaleString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Confirmed Cases</Typography>
          <Typography variant="h4">{Number(cases).toLocaleString()}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryPage;
