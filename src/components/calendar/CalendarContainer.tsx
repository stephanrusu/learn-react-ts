import React, { useState } from 'react';
import { addMonths, addDays, format } from 'date-fns';
import Week from './Week';
import Days from './Days';

function CalendarContainer() {
  const [shown, setShown] = useState(new Date());
  const [picked, setPicked] = useState(new Date());

  const showMonth: ShowMonth = (months) => {
    const newShown = addMonths(shown, months);

    setShown(newShown);
  };

  const quickPick: QuickPick = (days) => {
    const newPick = addDays(new Date(), days);

    setShown(newPick);
    setPicked(newPick);
  };

  const pick: PickDate = (date) => {
    setShown(date);
    setPicked(date);
  };

  return (
    <div className="date-picker">
      <div className="date-picker__head">
        <div>
          <button className='button filled' onClick={() => showMonth(-1)}>
            ‹
          </button>
        </div>
        <div>
          <button className='button filled'onClick={() => quickPick(0)}>
            Today
          </button>
          <button  className='button filled' onClick={() => quickPick(1)}>
            Tomorrow
          </button>
        </div>
        <div>
          <button className='button filled' onClick={() => showMonth(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="date-picker__month">{format(shown,'MMMM')}</div>
      <Week />
      <Days shown={shown} picked={picked} onPick={(date: Date) => pick(date)} />
    </div>
  );
}

export default CalendarContainer;
