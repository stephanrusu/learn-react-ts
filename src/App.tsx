import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TodoPage from './components/TodoPage';
import HomePage from './components/HomePage';

// function App():JSX.Element {
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/todo'>
          <TodoPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
