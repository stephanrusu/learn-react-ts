import React, { useState } from 'react';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

function EventForm() {
  const pickedDate = useSelector((state: RootState) => state.datePicker.picked);
  const dispatch = useDispatch();
  const today = new Date().getTime();

  const [toggleAllDay, setToggleAllDay] = useState(false);

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
            <textarea className="textarea" id="eventDescription" placeholder="Sky's the limit" rows={3}></textarea>
          </div>
        </div>
        <div className="field is-flex-inline">
          <label htmlFor="eventAllDay" className='label'>All day</label>
          <div className="control">
            <input id="eventAllDay" type="checkbox" className="switch is-rtl" checked={toggleAllDay} onChange={() => setToggleAllDay(!toggleAllDay)}/>
            <label htmlFor="eventAllDay" className="is-label-empty"></label>
          </div>
        </div>
        {
          !toggleAllDay && (
            <>
              <div className="field">
                <label className="label" htmlFor="startDate">Start time</label>
                <div className="control">
                  <input className="input" id="startDate" type="text" placeholder="Time tracking" />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="endDate">End time</label>
                <div className="control">
                  <input className="input" id="endDate" type="text" placeholder="Time tracking" />
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
