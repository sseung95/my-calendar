import { useEffect, useState } from 'react';
import DateTimePicker from '../date/DateTimePicker';
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
    </div>
  );
};

export default AddTaskForm;
