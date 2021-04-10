import React from 'react';
import CalendarContainer from './calendar/CalendarContainer';
import ReturnHome from './common/ReturnHome';

function CalendarPage(): React.ReactElement {
  return (
    <>
      <ReturnHome />
      <CalendarContainer />
    </>
  );
}
export default CalendarPage;
