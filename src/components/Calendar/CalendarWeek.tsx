import { forwardRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getDayStr } from '../../utils/dateUtil';

import prevIcon from '../../assets/left-icon.svg';
import nextIcon from '../../assets/right-icon.svg';
import Day from '../Day/Day';
import { CalendarWeekProps } from './Calendar.types';
import {
  CalendarHeader,
  CalendarWeekWrapper,
  DateHead,
  WeekDateBoard,
} from './Calendar.styled';

const CalendarWeek = forwardRef<HTMLDivElement, CalendarWeekProps>(
  ({ year, month, date }, ref) => {
    const navigate = useNavigate();
    const params = useParams();

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

    const checkActive = (date: number) => {
      if (!params.date) return false;

      return +params.date === date;
    };

    return (
      <CalendarWeekWrapper ref={ref}>
        <CalendarHeader>
          <img src={prevIcon} onClick={handleGoPrevMonth} />
          <div>
            {year}.{month.toString().padStart(2, '0')}
          </div>
          <img src={nextIcon} onClick={handleGoNextvMonth} />
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
          <WeekDateBoard>
            {[...Array(7)].map((n, idx) => (
              <Day
                key={idx}
                year={year}
                month={month}
                date={date - 3}
                idx={idx}
                isActive={checkActive(date - 3 + idx)}
              />
            ))}
          </WeekDateBoard>
        </div>
      </CalendarWeekWrapper>
    );
  }
);

export default CalendarWeek;
