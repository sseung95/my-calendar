import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import Label from './Label';

type DayProps = {
  year: number;
  month: number;
  date: number;
  idx: number;
};

const Day: React.FC<DayProps> = ({ year, month, date, idx }) => {
  const navigate = useNavigate();
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );
  const lastDay = new Date(year, month, 0).getDate(); // 현재 월의 마지막 날 구하기

  const handleGoWeekThatDate = () => {
    if (idx + date > 0 && idx + date <= lastDay) {
      navigate(`/${year}/${month}/${idx + date}`);
    }
  };

  return (
    <div id={`date-${idx + 1}`} onClick={handleGoWeekThatDate}>
      <div>{idx + date <= 0 || idx + date > lastDay ? '' : date + idx}</div>

      {taskList
        .filter((task) => task.startDate.getDate() === date + idx)
        .map((task) => (
          <Label
            key={task.id}
            id={task.id}
            title={task.title}
            labelColor={task.label}
          />
        ))}
    </div>
  );
};

export default Day;
