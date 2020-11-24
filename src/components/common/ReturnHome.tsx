import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_CALENDAR, ROUTE_DATA_TABLE, ROUTE_KANBAN, ROUTE_ROOT, ROUTE_TODO } from '../../router/routes';

function ReturnHome() {
  return (
    <div className="card mb-4">
      <div className="card-header px-4 py-4">
        <div className="field is-grouped">
          <div className="control">
            <NavLink exact to={ROUTE_ROOT} className="button is-white" activeClassName="is-active">
              Home
            </NavLink>
          </div>
          <div className="control">
            <NavLink exact to={ROUTE_TODO} className="button is-white" activeClassName="is-active">
              Todo
            </NavLink>
          </div>
          <div className="control">
            <NavLink exact to={ROUTE_CALENDAR} className="button is-white" activeClassName="is-active">
              Calendar
            </NavLink>
          </div>
          <div className="control">
            <NavLink exact to={ROUTE_KANBAN} className="button is-white" activeClassName="is-active">
              Kanban
            </NavLink>
          </div>
          <div className="control">
            <NavLink exact to={ROUTE_DATA_TABLE} className="button is-white" activeClassName="is-active">
              DataTable
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnHome;
