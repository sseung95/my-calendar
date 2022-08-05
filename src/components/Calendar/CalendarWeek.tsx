/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getDayStr } from '../../utils/dateUtil';
import addImg from '../../assets/add-button.svg';
import prevIcon from '../../assets/left-icon.svg';
import nextIcon from '../../assets/right-icon.svg';
import { Body01 } from '../../styles/typography';
import { Pointer } from '../../styles/unit';
import Day from '../Day/Day';
import TaskList from '../TaskList/TaskList';

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
      <div css={CalendarWrapper}>
        <div css={CalendarHeader}>
          <img src={prevIcon} onClick={handleGoPrevMonth} css={Pointer} />
          <div css={Body01}>
            {year}.{month.toString().padStart(2, '0')}
          </div>
          <img src={nextIcon} onClick={handleGoNextvMonth} css={Pointer} />
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

const CalendarWrapper = css`
  background-color: #fff;
  border-radius: 32px 32px 0px 0px;
  padding: 2.4rem 0.8rem;
`;

const CalendarHeader = css`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  margin-bottom: 2.1rem;
  color: var(--gray-08);
`;

const DateHead = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: var(--gray-04);

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  letter-spacing: 1.5px;

  margin-bottom: 0.5rem;
`;

const DateBoard = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(auto, 8rem);
  text-align: center;
`;

export default CalendarWeek;
