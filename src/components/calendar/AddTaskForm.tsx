import { useState } from 'react';
import DateTimePicker from '../date/DateTimePicker';
import ColorPicker from '../label/ColorPicker';
import Toggle from '../UI/Toggle';
import checkIcon from '../../assets/check-black-icon.svg';
import { setHours, setMinutes } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../store/taskSlice';
import { RootState } from '../../store';
import { useNavigate } from 'react-router';

type task = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isAllDay: boolean;
  memo: string;
  label: string;
};

const AddTaskForm = () => {
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
  const isEditing = useSelector((state: RootState) => state.task.isEditing);

  const handleAddTask = () => {
    if (isInvalid) {
      alert('시작 날짜는 종료 날짜 이전이어야 합니다.');
      return;
    }

    if (isEditing) {
      // 수정
    } else {
      // 추가
      const taskItem: task = {
        id: new Date().getTime().toString(),
        title: title ? title : '제목없음',
        startDate,
        endDate,
        isAllDay,
        memo,
        label,
      };

      dispatch(taskActions.addItem(taskItem));
      navigate('/');
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.currentTarget.value);
  };

  return (
    <div>
      <img src={checkIcon} onClick={handleAddTask} />
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleChangeTitle}
        />
        <div>
          <Toggle setIsAllDay={setIsAllDay} />
          <DateTimePicker
            isAllDay={isAllDay}
            setIsInvalid={setIsInvalid}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
        <input
          type="text"
          placeholder="메모"
          value={memo}
          onChange={handleChangeMemo}
        />
        <ColorPicker setLabel={setLabel} />
      </div>
    </div>
  );
};

export default AddTaskForm;
