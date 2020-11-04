import React, { useState } from 'react';
import DatePicker from './datepicker/DatePicker';
import EventDisplay from './events/EventDisplay';
import EventForm from './events/EventForm';

function CalendarContainer() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">Calendar</p>
        <button type='button' className="card-header-icon" onClick={() => setToggleForm(!toggleForm)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            {
              !toggleForm && <line x1="12" y1="5" x2="12" y2="19"></line>
            }
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <DatePicker />
          </div>
          <div className="column is-6 data-container">
            {
              toggleForm ? <EventForm /> : <EventDisplay />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarContainer;
