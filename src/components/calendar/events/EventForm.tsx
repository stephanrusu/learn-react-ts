import React, { FormEvent, useEffect, useState } from 'react';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { format, getHours, getMinutes, getTime, set, startOfDay } from 'date-fns';
import TimePicker, { AmPmType } from './TimePicker';

function EventForm() {
  const pickedDate = useSelector((state: RootState) => state.datePicker.picked);
  const dispatch = useDispatch();
  const today = new Date().getTime();

  const [allDay, setAllDay] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<number>(startOfDay(pickedDate).getTime());
  const [endDate, setEndDate] = useState<number>(startOfDay(pickedDate).getTime());

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    let newDate = updatePickedDate(startDate, pickedDate);
    setStartDate(newDate);

    newDate = updatePickedDate(endDate, pickedDate);
    setEndDate(newDate);

    // eslint-disable-next-line
  }, [pickedDate]);

  const updatePickedDate = (oldDate: number, pickDate: number) => {

    let oldHours = getHours(oldDate);
    let oldMinutes = getMinutes(oldDate);
    let newDate = set(startOfDay(pickDate), { hours: oldHours, minutes: oldMinutes });

    return newDate.getTime();
  }

  const handleDate = (date: TimeDate) => {
    switch (date.type) {
      case "start":
        setStartDate(setDate(startDate, date));
        break;
      case "end":
        setEndDate(setDate(endDate, date));
        break;
      default:
        break;
    }
  }

  const setDate = (baseDate: number, date: TimeDate) => {
    let newHours = date.time.hours;

    if (date.time.hours === 12 && date.time.ampm === AmPmType.AM) {
      newHours = 0;
    }

    if (date.time.ampm === AmPmType.PM && date.time.hours < 12) {
      newHours = date.time.hours + 12;
    }

    let newDate = set(baseDate, { hours: newHours, minutes: date.time.minutes});
    return getTime(newDate);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <div className="field mt-4">
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
            <input className="input" id="eventTitle" type="text" placeholder="Keep it short" value={title} onChange={(e) => setTitle(e.target.value) }/>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="eventDescription">Description</label>
          <div className="control">
            <textarea className="textarea" id="eventDescription" placeholder="Sky's the limit" rows={2} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <div className="field is-flex-inline">
          <label htmlFor="eventAllDay" className='label'>All day</label>
          <div className="control">
            <label htmlFor="eventAllDay">
              <input id="eventAllDay" type="checkbox" className="toggle-input" checked={allDay} onChange={() => setAllDay(!allDay)}/>
              <div className="toggle switch"><div className="toggle-inner"></div></div>
            </label>
          </div>
        </div>
        {
          !allDay && (
            <>
              <div className="field">
                <label className="label" htmlFor="startDate">Start time</label>
                <div className="control">
                  <TimePicker updateDate={(value: TimeDate) => handleDate(value)} type="start" />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="endDate">End time</label>
                <div className="control">
                  <TimePicker updateDate={(value: TimeDate) => handleDate(value)} type="end" />
                </div>
              </div>
            </>
          )
        }
        <div className="field">
          <div className="control">
            <button type='submit' className="button is-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
