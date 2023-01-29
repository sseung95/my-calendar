import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import CalendarWeek from '@/components/Calendar/CalendarWeek';
import TaskList from '@/components/TaskList/TaskList';

const WeekCalendar = () => {
  const params = useParams();
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [date, setDate] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const calRef = useRef<HTMLDivElement>(null);
  const taskListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (params.year) setYear(+params.year);
    if (params.month) setMonth(+params.month);
    if (params.date) setDate(+params.date);
  }, [params]);

  useEffect(() => {
    resetSize();
    window.addEventListener('resize', resetSize);

    return () => {
      window.removeEventListener('resize', resetSize);
    };
  }, []);

  const resetSize = () => {
    if (wrapperRef.current && calRef.current && taskListRef.current) {
      // 전체 높이 - 캘린더 높이 - bottom padding(20)
      const h =
        wrapperRef.current.offsetHeight - calRef.current.offsetHeight - 20;
      taskListRef.current.setAttribute('style', `height: ${h}px`);
    }
  };

  return (
    <WeekCalendarWrapper ref={wrapperRef}>
      <CalendarWeek year={year} month={month} date={date} ref={calRef} />
      <TaskList year={year} month={month} date={date} ref={taskListRef} />
    </WeekCalendarWrapper>
  );
};

const WeekCalendarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default WeekCalendar;
