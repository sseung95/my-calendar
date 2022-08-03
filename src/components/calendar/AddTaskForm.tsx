import { useEffect, useState } from 'react';
import DateTimePicker from '../date/DateTimePicker';
import ColorPicker from '../label/ColorPicker';
import Toggle from '../UI/Toggle';

const AddTaskForm = () => {
  const [isAllDay, setIsAllDay] = useState(false);

  return (
    <div>
      <input type="text" placeholder="제목" />
      <div>
        <Toggle setIsAllDay={setIsAllDay} />
        <DateTimePicker isAllDay={isAllDay} />
      </div>
      <input type="text" placeholder="메모" />
      <ColorPicker />
    </div>
  );
};

export default AddTaskForm;
