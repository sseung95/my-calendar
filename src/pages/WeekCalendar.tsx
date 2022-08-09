import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import CalendarWeek from '../components/Calendar/CalendarWeek';
import TaskList from '../components/TaskList/TaskList';

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

  const resetHeight = () => {
    if (taskListRef.current && calRef.current && wrapperRef.current) {
      // 전체 main 높이 - Week 캘린더 높이 - 날짜 높이 - 날짜 marginBottom - TaskList Padding Top&Bottom
      taskListRef.current.setAttribute(
        'style',
        `height: ${
          wrapperRef.current.clientHeight -
          calRef.current.clientHeight -
          22 -
          15 -
          20 -
          10
        }px; `
      );
    }
  };

  useEffect(() => {
    resetHeight();
    window.addEventListener('resize', resetHeight);
  }, [calRef.current?.clientHeight]);

  return (
    <WeekCalendarWrapper ref={wrapperRef}>
      <CalendarWeek year={year} month={month} date={date} ref={calRef} />
      <TaskList year={year} month={month} date={date} ref={taskListRef} />
    </WeekCalendarWrapper>
  );
};

const WeekCalendarWrapper = styled.div`
  height: 100%;
`;

export default WeekCalendar;
