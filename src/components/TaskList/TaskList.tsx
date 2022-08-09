import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import Task from '../Task/Task';
import { TaskListProps } from './TaskList.types';
import addImg from '../../assets/add-button.svg';

const TaskList: React.FC<TaskListProps> = ({ year, month, date }) => {
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );

  return (
    <div>
      <div>
        {year}.{month}.{date}
      </div>

      {taskList
        .filter((task) => task.startDate.getDate() === date)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}

      <Link to={`/add/${year}/${month}/${date}`}>
        <img src={addImg} alt="일정 추가" />
      </Link>
    </div>
  );
};

export default TaskList;
