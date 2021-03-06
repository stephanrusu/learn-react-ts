import React from 'react';
import ReturnHome from './common/ReturnHome';

function HomePage(): React.ReactElement {
  return (
    <div className="columns is-centered">
      <div className="column">
        <ReturnHome />
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">Home</div>
          </div>
          <div className="card-content">
            <div className="content is-flex is-justify-content-center">
              <svg className="loader-circular" viewBox="25 25 50 50">
                <circle className="elipse" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
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
