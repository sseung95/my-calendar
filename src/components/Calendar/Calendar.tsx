/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import Day from '../Day/Day';
import prevIcon from '../../assets/left-icon.svg';
import nextIcon from '../../assets/right-icon.svg';
import { Body01 } from '../../styles/typography';
import { Pointer } from '../../styles/unit';

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
    <div css={CalendarWrapper}>
      <div css={CalendarHeader}>
        <img src={prevIcon} onClick={handleGoPrevMonth} css={Pointer} />
        <div css={Body01}>
          {year}.{month.toString().padStart(2, '0')}
        </div>
        <img src={nextIcon} onClick={handleGoNextvMonth} css={Pointer} />
      </div>
      <div
        css={css`
          flex-grow: 1;
        `}
      >
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
            <Day key={idx} year={year} month={month} date={1} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CalendarWrapper = css`
  background-color: #fff;
  border-radius: 32px 32px 0px 0px;
  padding: 2.4rem 0.8rem;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

const CalendarHeader = css`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  padding-bottom: 2.1rem;
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
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  text-align: center;
  height: 100%;
`;

export default Calendar;
