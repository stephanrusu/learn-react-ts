import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from './routes';

import TodoPage from "../components/TodoPage";
import HomePage from "../components/HomePage";
import CalendarPage from '../components/CalendarPage';
import NotFoundPage from '../components/NotFoundPage';
import KanbanPage from '../components/KanbanPage';

function RouterHandler() {
  return (
    <Router>
      <Switch>
        <Route path={routes.ROUTE_KANBAN}>
          <KanbanPage />
        </Route>
        <Route exact path={routes.ROUTE_TODO}>
          <TodoPage />
        </Route>
        <Route exact path={routes.ROUTE_CALENDAR}>
          <CalendarPage />
        </Route>
        <Route exact path={routes.ROUTE_ROOT}>
          <HomePage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterHandler;
