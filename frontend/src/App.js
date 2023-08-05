import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import PracticePage from './components/PracticePage';
import StudyPage from './components/StudyPage';
import BuildPage from './components/BuildPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <Link to="/">Login Page</Link>
          <Link to="/home">Home</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/study">Study</Link>
          <Link to="/build">Build</Link>
        </nav>
        <Routes>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/practice" component={PracticePage} />
          <Route path="/study" component={StudyPage} />
          <Route path="/build" component={BuildPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
