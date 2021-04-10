import React from 'react';
import EventList from './EventList';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

function EventDisplay() {
  const pickedDate = useSelector((state: RootState) => state.datePicker.picked);
  const dispatch = useDispatch();
  const today = new Date().getTime();

  return (
    <div>
      <div className="event-section-header">
        <span className="event-section-date">{format(pickedDate, 'PPPP')}</span>
        <button type="button" className="button is-primary" onClick={() => dispatch(onPick({ shown: today, picked: today }))}>
          Today
        </button>
      </div>
      <EventList />
    </div>
  );
}

export default EventDisplay;
