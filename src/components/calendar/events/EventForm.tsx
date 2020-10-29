import React, { useState } from 'react';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import RangeSlider from '../../common/RangeSlider';

function EventForm() {
  const pickedDate = useSelector((state: RootState) => state.datePicker.picked);
  const dispatch = useDispatch();
  const today = new Date().getTime();

  const [allDay, setAllDay] = useState(false);
  const [startHours, setStartHours] = useState(12);
  const [startMins, setStartMins] = useState(0);
  const [endHours, setEndHours] = useState(12);
  const [endMins, setEndMins] = useState(0);

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
            <input id="eventAllDay" type="checkbox" className="switch is-rtl" checked={allDay} onChange={() => setAllDay(!allDay)}/>
            <label htmlFor="eventAllDay" className="is-label-empty"></label>
          </div>
        </div>
        {
          !allDay && (
            <>
              <div className="field">
                <label className="label" htmlFor="startDate">Start time <span>{`${startHours}:${startMins < 10 ? "0"+startMins : startMins}`}</span></label>
                <div className="control">
                  <RangeSlider default={[12]} min={1} max={12} step={1} sliderChange={(values) => setStartHours(values[0])} />
                  <RangeSlider default={[0]} min={0} max={59} step={1} sliderChange={(values) => setStartMins(values[0])} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="endDate">End time <span>{`${endHours}:${endMins < 10 ? "0"+endMins : endMins}`}</span></label>
                <div className="control">
                  <RangeSlider default={[12]} min={1} max={12} step={1} sliderChange={(values) => setEndHours(values[0])} />
                  <RangeSlider default={[0]} min={0} max={59} step={1} sliderChange={(values) => setEndMins(values[0])} />
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
