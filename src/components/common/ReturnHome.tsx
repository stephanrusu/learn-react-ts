import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_CALENDAR, ROUTE_ROOT, ROUTE_TODO } from '../../router/routes';

function ReturnHome() {
  return (
    <div className="card mb-4">
      <div className="card-header px-4 py-4">
        <div className="field is-grouped">
          <div className="control">
            <Link to={ROUTE_ROOT} className="button is-primary">
              Home
            </Link>
          </div>
          <div className="control">
            <Link to={ROUTE_TODO} className="button is-primary">
              Todo
            </Link>
          </div>
          <div className="control">
            <Link to={ROUTE_CALENDAR} className="button is-primary">
              Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnHome;
