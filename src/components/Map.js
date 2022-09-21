import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Tooltip,
  LayerGroup,
  CircleMarker,
} from "react-leaflet";

const Map = () => {
  const [countriesData, setCountriesData] = useState([]);
  const redOptions = { color: "red", fillColor: "red" };
  const apiUrl = "https://disease.sh/v3/covid-19/countries";

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get(apiUrl);
      setCountriesData(fetchedData);
    };
    fetchData();
  }, []);

  const data = countriesData.data;

  if (countriesData.length === 0) {
    return <p>Loading...</p>;
  }

  // console.log(data);

  return (
    <div>
      <MapContainer center={[30, -2]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          {data.map((country, index) => {
            const { lat } = country.countryInfo;
            const { long } = country.countryInfo;
            const { cases } = country;
            return (
              <CircleMarker
                center={[lat, long]}
                pathOptions={{ color: "red" }}
                radius={Number(cases) / 2000000}
                key={index}
              >
                <Tooltip>
                  {`${country.country}: ${Number(cases).toLocaleString()}`}{" "}
                  Cases
                </Tooltip>
              </CircleMarker>
            );
          })}
        </LayerGroup>

        {/* <Marker position={[49, -123]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
