import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import Label from '../Label/Label';
import {
  DateStyle,
  DayWrapper,
  LabelListWrapper,
  MoreTaskLen,
} from './Day.styled';
import { DayProps } from './Day.types';

const Day: React.FC<DayProps> = ({ year, month, date, idx }) => {
  const navigate = useNavigate();
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );
  const lastDay = new Date(year, month, 0).getDate(); // 현재 월의 마지막 날 구하기
  const filterdTaskList = taskList.filter(
    (task) => task.startDate.getDate() === date + idx
  );

  const isToday = (targetDate: number) => {
    const today = new Date();

    if (today.getFullYear() !== year) return false;
    if (today.getMonth() + 1 !== month) return false;
    if (today.getDate() !== targetDate) return false;

    return true;
  };

  const handleGoWeekThatDate = () => {
    if (idx + date > 0 && idx + date <= lastDay) {
      navigate(`/${year}/${month}/${idx + date}`);
    }
  };

  return (
    <DayWrapper id={`date-${idx + 1}`} onClick={handleGoWeekThatDate}>
      <DateStyle
        isToday={isToday(idx + date)}
        day={new Date(`${year}/${month}/${idx + date}`).getDay()}
      >
        {idx + date <= 0 || idx + date > lastDay ? '' : date + idx}
      </DateStyle>

      <LabelListWrapper>
        {filterdTaskList.length <= 4 &&
          filterdTaskList.map((task) => (
            <Label
              key={task.id}
              id={task.id}
              title={task.title}
              labelColor={task.label}
            />
          ))}

        {filterdTaskList.length > 4 &&
          filterdTaskList.map((task, idx) =>
            idx < 3 ? (
              <Label
                key={task.id}
                id={task.id}
                title={task.title}
                labelColor={task.label}
              />
            ) : idx === 4 ? (
              <MoreTaskLen key={task.id}>
                + {filterdTaskList.length - 3}
              </MoreTaskLen>
            ) : (
              ''
            )
          )}
      </LabelListWrapper>
    </DayWrapper>
  );
};

export default Day;
