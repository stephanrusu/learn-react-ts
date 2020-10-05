import React, { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    document.body.classList.add('not-found-page');

    return () => {
      document.body.classList.remove('not-found-page');
    }
  });

  return (
    <div className="flex-center position-ref full-height">
      <div className="code"> 404 </div>
      <div className="message"> Not found </div>
    </div>
  )
}

export default NotFoundPage;
