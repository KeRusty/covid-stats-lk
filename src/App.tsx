import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";

// Routes
import LandingPage from "./Views/LandingPage/LandingPage";
import LocalTestingPage from "./Views/LocalTestingPage/LocalTestingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/sri-lanka-covid-testing-info"
          element={<LocalTestingPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
