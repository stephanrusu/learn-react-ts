import React, { useState } from 'react';
import { addMonths, format } from 'date-fns';
import Week from './Week';
import Days from './Days';

function CalendarContainer() {
  const [shown, setShown] = useState(new Date());
  const [picked, setPicked] = useState(new Date());

  const showMonth: ShowMonth = (months) => {
    const newShown = addMonths(shown, months);

    setShown(newShown);
  };

  const pick: PickDate = (date) => {
    setShown(date);
    setPicked(date);
  };

  return (
    <div className="date-picker">
      <div className="date-picker__head">
        <div>
          <button className='button' onClick={() => showMonth(-1)}>
            <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
        </div>
        <div className="date-picker__month">{format(shown,'MMMM')}</div>
        <div>
          <button className='button' onClick={() => showMonth(1)}>
            <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
      <Week />
      <Days shown={shown} picked={picked} onPick={(date: Date) => pick(date)} />
    </div>
  );
}

export default CalendarContainer;
