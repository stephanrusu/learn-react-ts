import React from 'react';
import classNames from 'classnames';
import { RootState } from '../../../store/rootReducer';
import { onPick } from '../../../store/datePickerSlice';
import { addDays, format, getUnixTime, isSameDay, isSameMonth, isToday, startOfMonth, startOfWeek } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

interface MapDateProps {
  date: Date;
  className: string;
  onClick: () => void;
}

const mapDates = ({ date, className, onClick }: MapDateProps) => (
  <div key={getUnixTime(date)}>
    <div className={className} onClick={onClick}>
      {format(date, 'd')}
    </div>
  </div>
);

const hasEvents = (date: Date, events: IEvent[]) => {
  const listEvents = events.filter((event) => isSameDay(new Date(event.startDate), new Date(date)));

  return listEvents.length > 0;
};

const Days = (): React.ReactElement => {
  const { shown, picked } = useSelector((state: RootState) => state.datePicker);

  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();
  const days = startOfWeek(startOfMonth(shown));

  const dates = [];

  while (dates.length < 42) {
    const date = addDays(days, dates.length);

    const className = classNames('date-picker__day', {
      'date-picker__day--out': !isSameMonth(date, shown),
      'date-picker__day--picked': isSameDay(date, picked),
      'date-picker__day--today': isToday(date),
      'date-picker__day--events': hasEvents(date, events),
    });

    const timeStamp = date.getTime();
    const onClick = () => dispatch(onPick({ shown: timeStamp, picked: timeStamp }));

    dates.push({ date, className, onClick });
  }

  return <div className="date-picker__days">{dates.map(mapDates)}</div>;
};

export default Days;
