import React from 'react';
import Day from '../Day/Day';
import prevIcon from '../../assets/left-icon.svg';
import nextIcon from '../../assets/right-icon.svg';
import {
  CalendarContent,
  CalendarHeader,
  CalendarWrapper,
  DateBoard,
  DateHead,
} from './Calendar.styled';
import { CalendarProps } from './Calendar.types';

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
    <CalendarWrapper>
      <CalendarHeader>
        <img src={prevIcon} onClick={handleGoPrevMonth} />
        <div>
          {year}.{month.toString().padStart(2, '0')}
        </div>
        <img src={nextIcon} onClick={handleGoNextvMonth} />
      </CalendarHeader>
      <CalendarContent>
        <DateHead>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          <div>SUN</div>
        </DateHead>
        <DateBoard>
          {[...Array(prevDay)].map((n, idx) => (
            <div key={'p' + idx}></div>
          ))}

          {[...Array(lastDay)].map((n, idx) => (
            <Day
              key={idx}
              year={year}
              month={month}
              date={1}
              idx={idx}
              isActive={false}
            />
          ))}
        </DateBoard>
      </CalendarContent>
    </CalendarWrapper>
  );
};

export default Calendar;
