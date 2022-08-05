/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CalendarWeek from '../components/Calendar/CalendarWeek';

const WeekCalendar = () => {
  const params = useParams();
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    if (params.year) setYear(+params.year);
    if (params.month) setMonth(+params.month);
    if (params.date) setDate(+params.date);
  }, [params]);

  return (
    <div>
      <CalendarWeek year={year} month={month} date={date} />
    </div>
  );
};

export default WeekCalendar;
