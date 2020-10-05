import React from 'react';
import CalendarContainer from './calendar/CalendarContainer';

function CalendarPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <CalendarContainer />
          </div>
          <div className="column is-half"></div>
        </div>
      </div>
    </section>
  )
}
export default CalendarPage
