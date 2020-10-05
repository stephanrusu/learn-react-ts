import React from 'react';
import CalendarContainer from './calendar/CalendarContainer';

function CalendarPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <CalendarContainer />
          </div>
        </div>
      </div>
    </section>
  )
}
export default CalendarPage
