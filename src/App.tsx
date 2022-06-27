import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";

// Routes
import LandingPage from "./Views/LandingPage/LandingPage";
import LocalTestingPage from "./Views/LocalTestingPage/LocalTestingPage";
import GlobalOverview from "./Views/GlobalOverview/GlobalOverview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/sri-lanka-covid-testing-info"
          element={<LocalTestingPage />}
        />
        <Route path="/global-overview" element={<GlobalOverview />} />
      </Routes>
    </div>
  );
}

export default App;
