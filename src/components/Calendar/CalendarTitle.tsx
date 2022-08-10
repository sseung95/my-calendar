import { useEffect, useState } from 'react';
import { getMonthStr } from '../../utils/dateUtil';
import { CalendarTitleWrapper, Month, MonthYear } from './Calendar.styled';
import { CalendarTitleProps } from './Calendar.types';

const CalendarTitle: React.FC<CalendarTitleProps> = ({ year, month }) => {
  const [monthStr, setMonthStr] = useState(getMonthStr());

  useEffect(() => {
    const changedMonthStr = getMonthStr(new Date(year, month, 0));
    setMonthStr(changedMonthStr);
  }, [month]);

  return (
    <CalendarTitleWrapper>
      <Month>{month.toString().padStart(2, '0')}</Month>
      <MonthYear>
        {monthStr} {year}
      </MonthYear>
    </CalendarTitleWrapper>
  );
};

export default CalendarTitle;
