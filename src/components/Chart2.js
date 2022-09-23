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
      text: "Weekly Deaths",
      font: {
        size: 20,
      },
    },
  },
};

export function Chart2() {
  const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=7`;

  const [caseDay, setCaseDay] = useState("");
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get(url);
      // console.log(fetchedData);

      // function reduceDigit(array) {
      //   array.map((item) => {
      //     return item / 10;
      //   });
      // }
      setCases(Object.values(fetchedData.data.deaths));
      setCaseDay(Object.keys(fetchedData.data.deaths));
    };
    fetchData();
  }, []);

  const labels = caseDay;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        //   label: "Dataset 2",
        data: cases,
        //   data: fetchedDate,
        borderColor: "white",
        backgroundColor: "#e63946",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
