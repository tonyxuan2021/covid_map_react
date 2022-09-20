import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Map = ({ covidDataCanada }) => {
  return (
    <div>
      <MapContainer
        center={[
          covidDataCanada.countryInfo.lat,
          covidDataCanada.countryInfo.long,
        ]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            covidDataCanada.countryInfo.lat,
            covidDataCanada.countryInfo.long,
          ]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
