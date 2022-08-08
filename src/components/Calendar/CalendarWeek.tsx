/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getDayStr } from '../../utils/dateUtil';
import addImg from '../../assets/add-button.svg';
import prevIcon from '../../assets/left-icon.svg';
import nextIcon from '../../assets/right-icon.svg';
import { Body01 } from '../../styles/typography';
import Day from '../Day/Day';
import TaskList from '../TaskList/TaskList';
import { CalendarWeekProps } from './Calendar.types';
import {
  CalendarHeader,
  CalendarWrapper,
  DateBoard,
  DateHead,
} from './Calendar.styled';

const CalendarWeek: React.FC<CalendarWeekProps> = ({ year, month, date }) => {
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
      <CalendarWrapper>
        <CalendarHeader>
          <img
            src={prevIcon}
            onClick={handleGoPrevMonth}
            css={{ cursor: 'pointer' }}
          />
          <div css={Body01}>
            {year}.{month.toString().padStart(2, '0')}
          </div>
          <img
            src={nextIcon}
            onClick={handleGoNextvMonth}
            css={{ cursor: 'pointer' }}
          />
        </CalendarHeader>
        <div>
          <DateHead>
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
          </DateHead>
          <DateBoard>
            {[...Array(7)].map((n, idx) => (
              <Day
                key={idx}
                year={year}
                month={month}
                date={date - 3}
                idx={idx}
              />
            ))}
          </DateBoard>
        </div>
      </CalendarWrapper>

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

export default CalendarWeek;
