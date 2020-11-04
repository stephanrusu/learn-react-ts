import React, { useState } from 'react';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { format, startOfDay } from 'date-fns';
import TimePicker from './TimePicker';

function EventForm() {
  const pickedDate = useSelector((state: RootState) => state.datePicker.picked);
  const dispatch = useDispatch();
  const today = new Date().getTime();

  const [allDay, setAllDay] = useState(false);

  const [startDate, setStartDate] = useState(startOfDay(pickedDate).getTime());
  const [endDate, setEndDate] = useState(startOfDay(pickedDate).getTime());

  console.info(startDate, endDate);

  return (
    <div className="event-form">
      <form>
        <div className="field">
          <label className="label">Date</label>
          <div className="control date-control">
            <span>{format(pickedDate, 'PPPP')}</span>
            <button
              type="button"
              className="button is-primary"
              onClick={() => dispatch(onPick({ shown: today, picked: today }))}
            >
              Today
            </button>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="eventTitle">Title</label>
          <div className="control">
            <input className="input" id="eventTitle" type="text" placeholder="Keep it short" />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="eventDescription">Description</label>
          <div className="control">
            <textarea className="textarea" id="eventDescription" placeholder="Sky's the limit" rows={2}></textarea>
          </div>
        </div>
        <div className="field is-flex-inline">
          <label htmlFor="eventAllDay" className='label'>All day</label>
          <div className="control">
            <input id="eventAllDay" type="checkbox" className="switch is-rtl" checked={allDay} onChange={() => setAllDay(!allDay)}/>
            <label htmlFor="eventAllDay" className="is-label-empty"></label>
          </div>
        </div>
        {
          !allDay && (
            <>
              <div className="field">
                <label className="label" htmlFor="startDate">Start time</label>
                <div className="control">
                  <TimePicker updateDate={(value: number) => setStartDate(value)} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="endDate">End time</label>
                <div className="control">
                  <TimePicker updateDate={(value: number) => setEndDate(value)} />
                </div>
              </div>
            </>
          )
        }
      </form>
    </div>
  );
}

export default EventForm;
