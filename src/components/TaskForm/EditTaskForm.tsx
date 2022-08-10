import { useEffect, useState } from 'react';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import Toggle from '../UI/Toggle';
import checkIcon from '../../assets/check-black-icon.svg';
import cancelIcon from '../../assets/x-icon.svg';
import clockIcon from '../../assets/clock-icon.svg';
import memoIcon from '../../assets/memo-icon.svg';
import colorIcon from '../../assets/color-icon.svg';
import { setHours, setMinutes } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../store/taskSlice';
import { RootState } from '../../store';
import { useNavigate, useParams } from 'react-router';
import { task } from '../Task/Task.types';

import {
  ButtonWrapper,
  ColumnWrapper,
  SubTitle,
  SubTitleInput,
  TaskFormRow,
  TaskFormWrapper,
  TitleInput,
} from './TaskForm.styled';

const EditTaskForm = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(setMinutes(new Date(), 0));
  const [endDate, setEndDate] = useState(
    setHours(startDate, startDate.getHours() + 1)
  );
  const [isAllDay, setIsAllDay] = useState(false);
  const [memo, setMemo] = useState('');
  const [label, setLabel] = useState('01');
  const [isInvalid, setIsInvalid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const taskList = useSelector((state: RootState) => state.task.items);

  useEffect(() => {
    const taskId = params.taskId;

    const task = taskList.find((task) => task.id === taskId);

    if (task) {
      setTitle(task.title);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
      setIsAllDay(task.isAllDay);
      setMemo(task.memo);
      setLabel(task.label);

      console.log(task);
    }
  }, [params]);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleAddTask = () => {
    if (isInvalid) {
      alert(
        '시작 날짜는 종료 날짜 이전이거나, 종료 날짜는 시작 날짜와 같아야 합니다.'
      );
      return;
    }

    if (params.taskId) {
      const taskItem: task = {
        id: params.taskId,
        title: title ? title : '제목없음',
        startDate,
        endDate,
        isAllDay,
        memo,
        label,
      };
      dispatch(taskActions.editItem(taskItem));
      navigate(-1);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.currentTarget.value);
  };

  return (
    <TaskFormWrapper>
      <ButtonWrapper>
        <img src={cancelIcon} onClick={handleCancel} />
        <img src={checkIcon} onClick={handleAddTask} />
      </ButtonWrapper>
      <div>
        <TitleInput
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleChangeTitle}
        />
        <TaskFormRow>
          <img src={clockIcon} />
          <ColumnWrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubTitle>종일</SubTitle>
              <Toggle isAllDay={isAllDay} setIsAllDay={setIsAllDay} />
            </div>
            <DateTimePicker
              isAllDay={isAllDay}
              setIsInvalid={setIsInvalid}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </ColumnWrapper>
        </TaskFormRow>
        <TaskFormRow>
          <img src={memoIcon} />
          <SubTitleInput
            type="text"
            placeholder="메모"
            value={memo}
            onChange={handleChangeMemo}
          />
        </TaskFormRow>
        <TaskFormRow>
          <img src={colorIcon} />
          <ColumnWrapper>
            <SubTitle>라벨 색상</SubTitle>
            <ColorPicker label={label} setLabel={setLabel} />
          </ColumnWrapper>
        </TaskFormRow>
      </div>
    </TaskFormWrapper>
  );
};

export default EditTaskForm;
