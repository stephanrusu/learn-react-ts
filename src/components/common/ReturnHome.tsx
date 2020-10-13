import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_ROOT } from '../../router/routes';

function ReturnHome() {
  return (
    <div className="card mb-4">
      <div className="card-header px-4 py-4">
        <Link to={ROUTE_ROOT} className="button is-primary is-outlined">Home</Link>
      </div>
    </div>
  );
}

export default ReturnHome;
