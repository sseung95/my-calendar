import { useEffect, useState } from 'react';
import { getMonthStr } from '@/utils/dateUtil';
import { Month, MonthYear } from '@/components/Calendar/Calendar.styled';
import { CalendarTitleProps } from '@/components/Calendar/Calendar.types';

const CalendarTitle: React.FC<CalendarTitleProps> = ({ year, month }) => {
  const [monthStr, setMonthStr] = useState(getMonthStr());

  useEffect(() => {
    const changedMonthStr = getMonthStr(new Date(year, month, 0));
    setMonthStr(changedMonthStr);
  }, [month]);

  return (
    <div>
      <Month>{month.toString().padStart(2, '0')}</Month>
      <MonthYear>
        {monthStr} {year}
      </MonthYear>
    </div>
  );
};

export default CalendarTitle;
