/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import Label from './Label';

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
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );
  const prevDay = new Date(year, month - 1, 0).getDay(); // 지난달의 마지막 요일
  const lastDay = new Date(year, month, 0).getDate(); // 현재 월의 마지막 날 구하기
  const navigate = useNavigate();

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
          <div>TUE</div>
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
            <div
              key={'l' + idx}
              id={`date-${idx + 1}`}
              onClick={() => navigate(`/${year}/${month}/${idx + 1}`)}
            >
              <div>{idx + 1}</div>

              {taskList
                .filter((task) => task.startDate.getDate() === idx + 1)
                .map((task) => (
                  <Label
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    labelColor={task.label}
                  />
                ))}
            </div>
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
  grid-auto-rows: minmax(auto, 80px);
  text-align: center;
`;

export default Calendar;
