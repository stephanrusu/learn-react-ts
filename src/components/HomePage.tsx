import React from 'react';
import ReturnHome from './common/ReturnHome';

function HomePage() {
  return (
    <div className="columns is-centered">
      <div className="column">
        <ReturnHome />
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">HomePage</div>
          </div>
          <div className="card-content">
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
