import React from 'react';
import CalendarContainer from './calendar/CalendarContainer';
import ReturnHome from './common/ReturnHome';

function CalendarPage() {
  return (
    <div className="columns is-centered">
      <div className="column">
        <ReturnHome />
        <CalendarContainer />
      </div>
    </div>
  );
}
export default CalendarPage;
