import React from 'react';
import EventItem from './EventItem';

function EventList() {
  return (
    <div className="list event-list">
      {
        Array.from({ length: 5 }, (_, index) => index).map((el) => (
          <EventItem  key={el} />
        ))
      }
    </div>
  );
};

export default EventList;
