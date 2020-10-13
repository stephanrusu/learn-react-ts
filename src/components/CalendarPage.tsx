import React from 'react';
import CalendarContainer from './calendar/CalendarContainer';
import ReturnHome from './common/ReturnHome';

function CalendarPage() {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <ReturnHome />
        <CalendarContainer />
      </div>
      <div className="column is-half"></div>
    </div>
  );
}
export default CalendarPage;
