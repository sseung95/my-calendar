/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

type CalendarProps = {
  year: number;
  month: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
};

const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  setYear,
  setMonth,
}) => {
  const [today, setToday] = useState(new Date().getDate());

  const prevDay = new Date(year, month - 1, 0).getDay(); // 지난달의 마지막 요일
  const lastDay = new Date(year, month, 0).getDate(); // 현재 월의 마지막 날 구하기

  const handleGoPrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleGoNextvMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleGoPrevMonth}>prev</button>
        <div>
          {year}.{month.toString().padStart(2, '0')}
        </div>
        <button onClick={handleGoNextvMonth}>next</button>
      </div>
      <div>
        <div css={DateHead}>
          <div>MON</div>
          <div>THU</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          <div>SUN</div>
        </div>
        <div css={DateBoard}>
          {[...Array(prevDay)].map((n, idx) => (
            <div key={'p' + idx}></div>
          ))}
          {[...Array(lastDay)].map((n, idx) => (
            <div key={'l' + idx}>{idx + 1}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DateHead = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const DateBoard = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export default Calendar;
2;
