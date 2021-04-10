import React from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { isSameDay } from 'date-fns';

const getEventsForPick = (events: IEvent[], pick: number) => {
  return events.filter((event) => isSameDay(new Date(event.startDate), new Date(pick)));
};

function EventList(): React.ReactElement {
  const events = useSelector((state: RootState) => getEventsForPick(state.events, state.datePicker.picked));

  return (
    <div className="list event-list">
      {events.map((el) => (
        <EventItem key={el.uuid} />
      ))}
    </div>
  );
}

export default EventList;
