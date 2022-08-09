import { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import CalendarTitle from '../components/Calendar/CalendarTitle';
import { getYear, getMonth } from '../utils/dateUtil';

const MonthCalendar = () => {
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  return (
    <>
      <CalendarTitle year={year} month={month} />
      <Calendar
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
    </>
  );
};

export default MonthCalendar;
