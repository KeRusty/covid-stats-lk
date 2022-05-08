import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

// Routes
import LandingPage from './Views/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
