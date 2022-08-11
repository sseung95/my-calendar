import styled from '@emotion/styled';
import { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import CalendarTitle from '../components/Calendar/CalendarTitle';
import TodayButton from '../components/TodayButton/TodayButton';
import { getYear, getMonth } from '../utils/dateUtil';

const MonthCalendar = () => {
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  return (
    <>
      <HeaderWrapper>
        <CalendarTitle year={year} month={month} />
        <TodayButton setYear={setYear} setMonth={setMonth} />
      </HeaderWrapper>
      <Calendar
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.8rem;
`;

export default MonthCalendar;
