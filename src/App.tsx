import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Armory from "./pages/Armory/Armory";
import MainPage from "./pages/MainPage/MainPage";
import Tavern from "./pages/Tavern/Tavern";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/armory" element={<Armory />} />
        <Route path="/tavern" element={<Tavern />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
