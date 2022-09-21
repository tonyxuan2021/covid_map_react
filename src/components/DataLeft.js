import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const DataLeft = ({ covidDataWorld }) => {
  const {
    cases,
    deaths,
    population,
    recovered,
    tests,
    todayCases,
    todayRecovered,
  } = covidDataWorld;

  const dynamicData = [
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
      title: "Death rate",
      text: ((Number(deaths) / Number(cases)) * 100).toFixed(2) + "%",
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
      text: Number(todayCases).toLocaleString(),
    },
    {
      title: "Recovered today",
      text: Number(todayRecovered).toLocaleString(),
    },
  ];

  return (
    <List>
      {dynamicData.map((data, index) => {
        return (
          <div key={index}>
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
