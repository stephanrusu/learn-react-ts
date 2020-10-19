import React from "react";
import classNames from "classnames";
import { addDays, format, getUnixTime, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns';

interface MapDateProps {
  date: Date,
  className: string,
  onClick: () => void,
}

interface DaysProps {
  shown: Date,
  picked: Date,
  onPick: (date: Date) => void,
}

const mapDates = ({ date, className, onClick }: MapDateProps) => (
  <div key={getUnixTime(date)}>
    <div className={className} onClick={onClick}>
      {format(date, "d")}
    </div>
  </div>
);

const Days = ({ shown, picked, onPick }: DaysProps) => {
  const days = startOfWeek(startOfMonth(shown));

  const dates = [];

  while (dates.length < 42) {
    const date = addDays(days, dates.length);

    const className = classNames("date-picker__day", {
      "date-picker__day--out": !isSameMonth(date, shown),
      "date-picker__day--picked": isSameDay(date, picked),
    });

    const onClick = () => onPick(date);

    dates.push({ date, className, onClick });
  }

  return <div className="date-picker__days">{dates.map(mapDates)}</div>;
};

export default Days;
