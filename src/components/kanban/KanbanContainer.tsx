import React from 'react';

import KanbanBoards from './KanbanBoards';
import { Route, Switch, useLocation } from 'react-router-dom';
import KanbanTaskDisplay from './task/KanbanTaskDisplay';
import * as routes from '../../router/routes';
import NotFoundPage from '../NotFoundPage';
import KanbanModalContainer from './KanbanModalContainer';
import KanbanTaskForm from './task/KanbanTaskForm';
import KanbanProjectSettings from './KanbanProjectSettings';

function KanbanContainer() {
  const location = useLocation<any>();
  const background = location.state && location.state.background;

  return (
    // * display routes directly on page
    <>
      <Switch location={background || location}>
        <Route exact path={[routes.ROUTE_KANBAN_CREATE, routes.ROUTE_KANBAN_EDIT]}>
          <KanbanTaskForm />
        </Route>
        <Route exact path={routes.ROUTE_KANBAN_TASK}>
          <KanbanTaskDisplay />
        </Route>
        <Route exact path={routes.ROUTE_KANBAN_PROJECT}>
          <KanbanProjectSettings />
        </Route>
        <Route exact path={routes.ROUTE_KANBAN}>
          <KanbanBoards />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (
        // * display routes inside modals
        <Switch>
          <Route exact path={[routes.ROUTE_KANBAN_CREATE, routes.ROUTE_KANBAN_EDIT]}>
            <KanbanModalContainer>
              <KanbanTaskForm />
            </KanbanModalContainer>
          </Route>
          <Route exact path={routes.ROUTE_KANBAN_TASK}>
            <KanbanModalContainer>
              <KanbanTaskDisplay />
            </KanbanModalContainer>
          </Route>
          <Route exact path={routes.ROUTE_KANBAN_PROJECT}>
            <KanbanModalContainer>
              <KanbanProjectSettings />
            </KanbanModalContainer>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default KanbanContainer;
