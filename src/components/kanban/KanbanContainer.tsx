import React from 'react';

import KanbanBoards from './KanbanBoards';
import { Route, Switch } from 'react-router-dom';
import KanbanTaskForm from './task/KanbanTaskForm';
import KanbanDisplayTask from './task/KanbanDisplayTask';
import * as routes from '../../router/routes';

function KanbanContainer() {
  return (
    <Switch>
      <Route exact path={[routes.ROUTE_KANBAN_CREATE, routes.ROUTE_KANBAN_EDIT]}>
        <KanbanTaskForm />
      </Route>
      <Route exact path={routes.ROUTE_KANBAN_TASK}>
        <KanbanDisplayTask />
      </Route>
      <Route path={routes.ROUTE_KANBAN}>
        <KanbanBoards />
      </Route>
    </Switch>
  );
}

export default KanbanContainer;
