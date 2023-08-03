import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from './components/FirstPage';
import HomePage from './components/HomePage';
import PracticePage from './components/PracticePage';
import BuildPage from './components/BuildPage';
import StudyPage from './components/StudyPage';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/study" element={<StudyPage />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
