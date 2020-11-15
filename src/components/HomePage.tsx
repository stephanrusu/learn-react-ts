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
          <div className="card-content is-flex">
            <div className="toggle switch"><div className="toggle-inner"></div></div>
            <div className="toggle switch is-active"><div className="toggle-inner"></div></div>
            <div className="toggle radio"><div className="toggle-inner"></div></div>
            <div className="toggle radio is-active"><div className="toggle-inner"></div></div>
            <div className="toggle checkbox"><div className="toggle-inner"></div></div>
            <div className="toggle checkbox is-active"><div className="toggle-inner"></div></div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
