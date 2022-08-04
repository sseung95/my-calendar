import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Task from './Task';

type TaskListProps = {
  year: number;
  month: number;
  date: number;
};

const TaskList: React.FC<TaskListProps> = ({ year, month, date }) => {
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
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default TaskList;
