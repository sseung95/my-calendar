/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getDayStr } from '../../utils/dateUtil';
import addImg from '../../assets/add-button.svg';
import Day from './Day';
import TaskList from '../task/TaskList';

type CalendarProps = {
  year: number;
  month: number;
  date: number;
};

const CalendarWeek: React.FC<CalendarProps> = ({ year, month, date }) => {
  const navigate = useNavigate();

  const handleGoPrevMonth = () => {
    if (month === 1) {
      navigate(`/${year - 1}/12/1`);
    } else {
      navigate(`/${year}/${month - 1}/1`);
    }
  };

  const handleGoNextvMonth = () => {
    if (month === 12) {
      navigate(`/${year + 1}/1/1`);
    } else {
      navigate(`/${year}/${month + 1}/1`);
    }
  };

  return (
    <>
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
            {[...Array(7)].map((n, idx) => {
              const targetDate = date - 3 + idx;

              return targetDate > 0 ? (
                <div key={idx}>
                  {getDayStr(
                    new Date(`${year}/${month}/${date - 3 + idx}`).getDay()
                  )}
                </div>
              ) : (
                <div key={idx}></div>
              );
            })}
          </div>
          <div css={DateBoard}>
            {[...Array(7)].map((n, idx) => (
              <Day
                key={idx}
                year={year}
                month={month}
                date={date - 3}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          {year}.{month}.{date}
        </div>

        <TaskList year={year} month={month} date={date} />

        <Link to={`/add/${year}/${month}/${date}`}>
          <img src={addImg} alt="일정 추가" />
        </Link>
      </div>
    </>
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

export default CalendarWeek;
