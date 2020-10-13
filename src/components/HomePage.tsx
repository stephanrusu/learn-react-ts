import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_CALENDAR, ROUTE_ROOT, ROUTE_TODO } from '../router/routes';

function HomePage() {
  return (
    <div className="columns is-centered">
      <div className="column">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">HomePage</div>
          </div>
          <div className="card-content">
            <div className="field is-grouped px-4 py-4">
              <div className="control">
                <Link to={ROUTE_ROOT} className="button is-primary is-outlined">Home</Link>
              </div>
              <div className="control">
                <Link to={ROUTE_TODO} className="button is-primary is-outlined">Todo</Link>
              </div>
              <div className="control">
                <Link to={ROUTE_CALENDAR} className="button is-primary is-outlined">Calendar</Link>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
