import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/country" element={<CountryPage />} />
        <Route path="/" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
