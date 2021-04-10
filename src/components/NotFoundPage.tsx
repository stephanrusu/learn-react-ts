import React, { useEffect } from 'react';
import ReturnHome from './common/ReturnHome';

function NotFoundPage() {
  useEffect(() => {
    document.body.classList.add('not-found-page');

    return () => {
      document.body.classList.remove('not-found-page');
    };
  });

  return (
    <div className="columns is-centered">
      <div className="column">
        <ReturnHome />
        <div className="card">
          <div className="card-content">
            <div className="flex-center position-ref full-height">
              <div className="code"> 404 </div>
              <div className="message"> Not found </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
