import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import Task from '../Task/Task';
import { TaskListProps } from './TaskList.types';
import addImg from '../../assets/add-button.svg';
import {
  AddButtonWrapper,
  DateWrapper,
  TaskListWrapper,
  Wrapper,
} from './TaskList.styled';
import { forwardRef } from 'react';

const TaskList = forwardRef<HTMLDivElement, TaskListProps>(
  ({ year, month, date }, ref) => {
    const taskList = useSelector((state: RootState) => state.task.items).filter(
      (task) =>
        task.startDate.getFullYear() === year &&
        task.startDate.getMonth() + 1 === month
    );

    return (
      <Wrapper>
        <DateWrapper>
          {year}.{month}.{date}
        </DateWrapper>

        <TaskListWrapper ref={ref}>
          {taskList
            .filter((task) => task.startDate.getDate() === date)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}

          <AddButtonWrapper>
            <Link to={`/add/${year}/${month}/${date}`}>
              <img src={addImg} alt="일정 추가" />
            </Link>
          </AddButtonWrapper>
        </TaskListWrapper>
      </Wrapper>
    );
  }
);

export default TaskList;
