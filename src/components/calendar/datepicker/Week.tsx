import React from 'react';
import { addDays, format, startOfWeek } from 'date-fns';

const startWeek = startOfWeek(new Date());
const week = addDays(startWeek, -1);

const days = [1, 2, 3, 4, 5, 6, 7].map((n: number) => (
  <div key={n}>{format(addDays(week, n), "EEE")}</div>
));

const Week = () => {
  return <div className="date-picker__week">{days}</div>;
};

export default Week;
