import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import { Caption02 } from '../../styles/typography';
import Label from '../Label/Label';

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
  const dayRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!dayRef.current) return;

    console.log(dayRef.current.clientHeight);
  }, [dayRef]);

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
    <DayWrapper
      id={`date-${idx + 1}`}
      onClick={handleGoWeekThatDate}
      ref={dayRef}
    >
      <DateStyle
        isToday={isToday(idx + date)}
        day={new Date(`${year}/${month}/${idx + date}`).getDay()}
      >
        {idx + date <= 0 || idx + date > lastDay ? '' : date + idx}
      </DateStyle>

      <LabelListWrapper>
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
      </LabelListWrapper>
    </DayWrapper>
  );
};

const DayWrapper = styled.div`
  padding: 0.1rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  overflow: hidden;

  &:hover {
    background-color: #fafafa;
    border-radius: 4px;
  }
`;

const DateStyle = styled.div<{ isToday: boolean; day: number }>`
  ${Caption02}
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.7rem;
  align-self: center;

  margin-bottom: 0.1rem;

  color: var(--gray-08);
  ${(props) => props.day === 0 && 'color: var(--red);'}
  ${(props) => props.day === 6 && 'color: var(--blue);'}

  ${(props) =>
    props.isToday &&
    `
    font-weight: 500;
    color: #fff;
    background-color: var(--gray-08);
    border-radius: 100px;
  `}
`;

const LabelListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export default Day;
