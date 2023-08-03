import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import HomePage from './HomePage';
import PracticePage from './PracticePage';
import BuildPage from './BuildPage';
import StudyPage from './StudyPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/practice">
          <PracticePage />
        </Route>
        <Route path="/build">
          <BuildPage />
        </Route>
        <Route path="/study">
          <StudyPage />
        </Route>
        {/* Add additional routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
