import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const DataLeft = ({ covidDataCanada }) => {
  const {
    cases,
    country,
    deaths,
    population,
    recovered,
    tests,
    todayCases,
    todayRecovered,
  } = covidDataCanada;

  const dynamicData = [
    {
      title: "Country",
      text: country,
    },
    {
      title: "Population",
      text: Number(population).toLocaleString(),
    },

    {
      title: "Total cases",
      text: Number(cases).toLocaleString(),
    },

    {
      title: "Total death",
      text: Number(deaths).toLocaleString(),
    },
    {
      title: "Total recovered",
      text: Number(recovered).toLocaleString(),
    },
    {
      title: "Total tests",
      text: Number(tests).toLocaleString(),
    },
    {
      title: "Cases today",
      text: todayCases,
    },
    {
      title: "Recovered today",
      text: Number(todayRecovered).toLocaleString(),
    },
  ];

  return (
    <List>
      {dynamicData.map((data) => {
        return (
          <div>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={`${data.title}`}
                  secondary={`${data.text}`}
                  sx={{ color: "#ae2012" }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
};

export default DataLeft;
