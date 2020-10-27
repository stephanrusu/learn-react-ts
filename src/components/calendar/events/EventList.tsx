import React from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

function EventList() {
  const events = useSelector(
    (state: RootState) => state.events
  )

  return (
    <div className="list event-list">
      {
        events.map((el) => (
          <EventItem key={el.uuid} />
        ))
      }
    </div>
  );
};

export default EventList;
