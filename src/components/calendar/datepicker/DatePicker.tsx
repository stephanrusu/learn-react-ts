import React, { ReactElement } from 'react';
import { addMonths, format } from 'date-fns';
import { RootState } from '../../../store/rootReducer';
import { setShown } from '../../../store/datePickerSlice';

import Week from './Week';
import Days from './Days';
import { useDispatch, useSelector } from 'react-redux';

function DatePicker(): ReactElement {
  const shown = useSelector((state: RootState) => state.datePicker.shown);
  const dispatch = useDispatch();

  const showMonth: ShowMonth = (months) => {
    const newShown = addMonths(shown, months).getTime();

    dispatch(setShown(newShown));
  };

  return (
    <div className="date-picker">
      <div className="date-picker__head">
        <div>
          <button type="button" className="button is-clear" onClick={() => showMonth(-1)}>
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className="feather"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>
        <div className="date-picker__month">{format(shown, 'MMMM yyyy')}</div>
        <div>
          <button type="button" className="button is-clear" onClick={() => showMonth(1)}>
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className="feather"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
      <Week />
      <Days />
    </div>
  );
}

export default DatePicker;
