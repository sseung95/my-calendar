import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '@/store/index';
import Task from '@/components/Task/Task';
import { TaskListProps } from '@/components/TaskList/TaskList.types';
import addImg from '@/assets/add-button.svg';
import {
  AddButton,
  AddButtonWrapper,
  DateWrapper,
  TaskListViewWrapper,
  TaskListWrapper,
  Wrapper,
} from '@/components/TaskList/TaskList.styled';
import { forwardRef, useEffect, useRef } from 'react';

const TaskList = forwardRef<HTMLDivElement, TaskListProps>(
  ({ year, month, date }, ref) => {
    const taskList = useSelector((state: RootState) => state.taskSlice.items)
      .map((task) => {
        return {
          ...task,
          startDate: new Date(task.startDate),
          endDate: new Date(task.endDate),
        };
      })
      .filter(
        (task) =>
          task.startDate.getFullYear() === year &&
          task.startDate.getMonth() + 1 === month
      );

    const dateRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (dateRef.current && viewRef.current) {
        viewRef.current.setAttribute(
          'style',
          `height: calc(100% - ${dateRef.current.scrollHeight}px)`
        );
      }
    }, []);

    return (
      <Wrapper ref={ref}>
        <DateWrapper ref={dateRef}>
          {year}.{month}.{date}
        </DateWrapper>

        <TaskListViewWrapper ref={viewRef}>
          <TaskListWrapper>
            {taskList
              .filter((task) => task.startDate.getDate() === date)
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}

            <AddButtonWrapper>
              <Link to={`/add/${year}/${month}/${date}`}>
                <AddButton src={addImg} alt="일정 추가" />
              </Link>
            </AddButtonWrapper>
          </TaskListWrapper>
        </TaskListViewWrapper>
      </Wrapper>
    );
  }
);

export default TaskList;
