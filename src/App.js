import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
