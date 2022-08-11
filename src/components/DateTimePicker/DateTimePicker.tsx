import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import { addHours } from 'date-fns';
import rightIcon from '../../assets/right-icon-black.svg';

import DateTimeInfo from './DateTimeInfo';
import { DateTimePickerProps } from './DateTimePicker.types';
import { DateTimePickerWrapper } from './DateTimePicker.styled';

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  isAllDay,
  setIsInvalid,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [isFirstEditing, setIsFirstEditing] = useState(true);
  const [isInvalidEndDate, setIsInvalidEndDate] = useState(false);

  const checkInvalidEndDate = () => {
    if (startDate.getTime() > endDate.getTime()) {
      setIsInvalidEndDate(true);
    } else {
      setIsInvalidEndDate(false);
    }

    if (startDate.getDate() < endDate.getDate()) {
      setIsInvalidEndDate(true);
    }
  };

  useEffect(() => {
    setIsInvalid(isInvalidEndDate);
  }, [isInvalidEndDate]);

  useEffect(() => {
    // 종료일 선택하기 전일 때만 종료일을 시작일 시간 + 1
    if (isFirstEditing) {
      setEndDate(addHours(startDate, 1));
    }

    checkInvalidEndDate();
  }, [startDate]);

  useEffect(() => {
    checkInvalidEndDate();
  }, [endDate]);

  const handleStartDate = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDate = (date: Date) => {
    setEndDate(date);
    setIsFirstEditing(false);
  };

  return (
    <DateTimePickerWrapper>
      <div>
        <DatePicker
          selected={startDate}
          onChange={handleStartDate}
          locale={ko}
          showTimeSelect={!isAllDay}
          timeIntervals={5}
          dateFormat="M월 d일 (eee)/HH:mm" // 날짜와 시간을 '/' 로 구분
          customInput={<DateTimeInfo isAllDay={isAllDay} />}
        />
      </div>
      <img src={rightIcon} />
      <div>
        <DatePicker
          selected={endDate}
          onChange={handleEndDate}
          locale={ko}
          showTimeSelect={!isAllDay}
          timeIntervals={5}
          dateFormat="M월 d일 (eee)/HH:mm"
          customInput={
            <DateTimeInfo isAllDay={isAllDay} isInvalid={isInvalidEndDate} />
          }
        />
      </div>
    </DateTimePickerWrapper>
  );
};

export default DateTimePicker;
