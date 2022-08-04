import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type task = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isAllDay: boolean;
  memo: string;
  label: string;
};

type TaskListProps = {
  year: number;
  month: number;
  date: number;
  list: task[];
};

const TaskList: React.FC<TaskListProps> = ({ year, month, date, list }) => {
  return (
    <div>
      {list.map((task) => (
        <div>{task.title}</div>
      ))}
    </div>
  );
};

export default TaskList;
