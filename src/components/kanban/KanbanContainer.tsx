import React from 'react';

import KanbanBoards from './KanbanBoards';
import { Route, Switch, useLocation } from 'react-router-dom';
import KanbanDisplayTask from './task/KanbanDisplayTask';
import * as routes from '../../router/routes';
import NotFoundPage from '../NotFoundPage';
import KanbanModalContainer from './KanbanModalContainer';

function KanbanContainer() {
  const location = useLocation<any>();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={routes.ROUTE_KANBAN_TASK}>
          <KanbanDisplayTask />
        </Route>
        <Route exact path={routes.ROUTE_KANBAN}>
          <KanbanBoards />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>

    {
      background && (
        <Route exact path={routes.ROUTE_KANBAN_TASK}>
          <KanbanModalContainer>
            <KanbanDisplayTask />
          </KanbanModalContainer>
        </Route>
      )
    }
    </>
  );
}

export default KanbanContainer;
