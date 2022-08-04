/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import moreIcon from '../../assets/more-icon.svg';

type TaskListProps = {
  year: number;
  month: number;
  date: number;
};

const TaskList: React.FC<TaskListProps> = ({ year, month, date }) => {
  const navigate = useNavigate();
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );

  return (
    <div>
      {taskList
        .filter((task) => task.startDate.getDate() === date)
        .map((task) => (
          <div
            key={task.id}
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
                background-color: var(--label-color-${task.label});
              `}
            ></div>
            <div onClick={() => navigate(`/edit/${task.id}`)}>
              <div>{task.title}</div>
              <div>{task.memo}</div>
            </div>
            <div>
              <img src={moreIcon} alt="더보기" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
