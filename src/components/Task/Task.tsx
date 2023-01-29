/** @jsxImportSource @emotion/react */
import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import moreIcon from '../../assets/more-icon.svg';
import { taskActions } from '../../store/taskSlice';
import TaskMoreMenu from '../TaskMoreMenu/TaskMoreMenu';
import {
  Date,
  EndDate,
  Memo,
  StartDate,
  TaskMoreIcon,
  Label,
  Title,
  TaskContent,
  TaskWrapper,
  TaskInfoWrapper,
} from './Task.styled';
import { taskProps } from './Task.types';

const Task: React.FC<taskProps> = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const removeTask = () => {
    dispatch(taskActions.removeItem(task.id));
  };

  return (
    <TaskWrapper>
      <TaskInfoWrapper>
        <Date>
          {task.isAllDay && <StartDate>ALL DAY</StartDate>}
          {!task.isAllDay && (
            <>
              <StartDate>{format(task.startDate, 'HH:mm')}</StartDate>
              <EndDate>{format(task.endDate, 'HH:mm')}</EndDate>
            </>
          )}
        </Date>
        <Label color={task.label}></Label>
        <TaskContent onClick={() => navigate(`/edit/${task.id}`)}>
          <Title>{task.title}</Title>
          <Memo>{task.memo}</Memo>
        </TaskContent>
      </TaskInfoWrapper>

      <div css={{ position: 'relative' }}>
        <TaskMoreIcon
          src={moreIcon}
          alt="더보기"
          onClick={() => setShowMore(true)}
        />

        {showMore && (
          <TaskMoreMenu onRemoveTask={removeTask} setShowMore={setShowMore} />
        )}
      </div>
    </TaskWrapper>
  );
};

export default Task;
