import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import TodoPage from "./components/TodoPage";
import HomePage from "./components/HomePage";

// function App():JSX.Element {
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/todo">
            <TodoPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
