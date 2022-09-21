import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [countryName, setCountryName] = React.useState("");
  const [countryData, setCountryData] = React.useState(null);

  console.log(countryData);

  return (
    <AppContext.Provider
      value={{ countryName, setCountryName, countryData, setCountryData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
