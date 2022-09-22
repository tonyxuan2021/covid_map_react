import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [countryLat, setCountryLat] = useState("");
  const [countryLong, setCountryLong] = useState("");

  return (
    <AppContext.Provider
      value={{
        countryName,
        setCountryName,
        countryData,
        setCountryData,
        countryLat,
        setCountryLat,
        countryLong,
        setCountryLong,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
