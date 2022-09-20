import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CanadaPage from "./pages/CanadaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canada" element={<CanadaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
