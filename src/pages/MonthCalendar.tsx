/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Calendar from '../components/calendar/Calendar';
import { getYear, getMonth, getMonthStr } from '../utils/dateUtil';

const MonthCalendar = () => {
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());
  const [monthStr, setMonthStr] = useState(getMonthStr());

  // TODO: 날짜가 변경되었을 때를 대비해 setState 해줄 수 있는 로직이 필요함

  return (
    <div>
      <div>
        <div css={Month}>{month.toString().padStart(2, '0')}</div>
        <div css={MonthYear}>
          {monthStr} {year}
        </div>
      </div>
      <Calendar
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
    </div>
  );
};

const Month = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.6px;

  color: var(--gray-08);
`;

const MonthYear = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;

  color: var(--gray-04);
`;

export default MonthCalendar;
