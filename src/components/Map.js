import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  SVGOverlay,
  circle,
  LayerGroup,
  Circle,
} from "react-leaflet";

// const bounds = [
//   [49, -123],
//   [50, -30],
// ];

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

  console.log(data);

  return (
    <div>
      <MapContainer center={[30, -2]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          {data.map((country) => {
            const { lat } = country.countryInfo;
            const { long } = country.countryInfo;
            const { cases } = country;
            return (
              <Circle
                center={[lat, long]}
                pathOptions={redOptions}
                radius={Number(cases) / 100}
              />
            );
          })}

          {/* <Circle
            center={[49, -123]}
            pathOptions={redOptions}
            radius={1000000}
          /> */}
        </LayerGroup>
        {/* <SVGOverlay
          attributes={{ stroke: "red", width: "100px", height: "100px" }}
          bounds={bounds}
        >
          <circle r="5" cx="10" cy="10" fill="red" />
        </SVGOverlay> */}
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
