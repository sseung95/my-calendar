/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import moreIcon from '../../assets/more-icon.svg';
import { taskActions } from '../../store/taskSlice';
import TaskMoreMenu from './TaskMoreMenu';

type task = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isAllDay: boolean;
  memo: string;
  label: string;
};

type taskProps = {
  task: task;
};

const Task: React.FC<taskProps> = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const removeTask = () => {
    dispatch(taskActions.removeItem(task.id));
  };

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div>
        {task.isAllDay && <div>ALL DAY</div>}
        {!task.isAllDay && (
          <>
            <div>{format(task.startDate, 'HH:mm')}</div>
            <div>{format(task.endDate, 'HH:mm')}</div>
          </>
        )}
      </div>
      <div
        css={css`
          width: 3px;
          height: 16px;
          background-color: ${`var(--label-color-${task.label})`};
        `}
      ></div>
      <div onClick={() => navigate(`/edit/${task.id}`)}>
        <div>{task.title}</div>
        <div>{task.memo}</div>
      </div>
      <div>
        <img
          src={moreIcon}
          alt="더보기"
          onClick={() => setShowMore(!showMore)}
        />
        {showMore && <TaskMoreMenu onRemoveTask={removeTask} />}
      </div>
    </div>
  );
};

export default Task;
