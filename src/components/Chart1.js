import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Weekly Cases",
    },
  },
};

export function Chart1() {
  const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=7`;

  const [caseDay, setCaseDay] = useState("");
  const [cases, setCases] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDate = await axios.get(url);
      console.log(fetchedDate);
    };
    fetchData();
    
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        //   label: "Dataset 2",
        data: [1, 2, 3, 4, 5, 6, 7],
        //   data: fetchedDate,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
