import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getMonthStr } from '../../utils/dateUtil';
import { CalendarTitleProps } from './Calendar.types';

const CalendarTitle: React.FC<CalendarTitleProps> = ({ year, month }) => {
  const [monthStr, setMonthStr] = useState(getMonthStr());

  useEffect(() => {
    const changedMonthStr = getMonthStr(new Date(`${year}/${month}`));
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

const CalendarTitleWrapper = styled.div`
  align-items: center;
  margin-left: 2.8rem;
`;

const Month = styled.span`
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.2rem;
  letter-spacing: -0.6px;
  color: var(--gray-08);
`;

const MonthYear = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.6px;
  color: var(--gray-04);

  margin-left: 0.8rem;
`;

export default CalendarTitle;
