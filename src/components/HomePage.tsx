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
            <div className="content">
              <div className="is-flex">
                <div className="toggle switch"><div className="toggle-inner"></div></div>
                <div className="toggle switch is-active"><div className="toggle-inner"></div></div>
                <div className="toggle switch is-indeterminate"><div className="toggle-inner"></div></div>
                <div className="toggle radio"><div className="toggle-inner"></div></div>
                <div className="toggle radio is-active"><div className="toggle-inner"></div></div>
                <div className="toggle checkbox"><div className="toggle-inner"></div></div>
                <div className="toggle checkbox is-active"><div className="toggle-inner"></div></div>
                <div className="toggle checkbox is-indeterminate"><div className="toggle-inner"></div></div>
              </div>
            </div>
            <div className="content is-flex is-justify-content-center">
            <svg className="loader-circular" viewBox="25 25 50 50">
              <circle className="elipse" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
            </svg>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
