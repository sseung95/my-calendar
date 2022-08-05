/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import { getYear, getMonth, getMonthStr } from '../utils/dateUtil';

const MonthCalendar = () => {
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());
  const [monthStr, setMonthStr] = useState(getMonthStr());

  useEffect(() => {
    const changedMonthStr = getMonthStr(new Date(`${year}/${month}`));
    setMonthStr(changedMonthStr);
  }, [month]);

  return (
    <>
      <div css={DateWrapper}>
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
    </>
  );
};

const DateWrapper = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-left: 2.8rem;
`;

const Month = css`
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.2rem;
  letter-spacing: -0.6px;
  color: var(--gray-08);
`;

const MonthYear = css`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.6px;
  color: var(--gray-04);

  margin-top: 1rem;
`;

export default MonthCalendar;
