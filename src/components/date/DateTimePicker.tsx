/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import DateTimeInfo from './DateTimeInfo';
import { addHours, setHours, setMinutes } from 'date-fns';

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(setMinutes(new Date(), 0));
  const [endDate, setEndDate] = useState(
    setHours(startDate, startDate.getHours() + 1)
  );
  const [isFirstEditing, setIsFirstEditing] = useState(true);
  const [isInvalidEndDate, setIsInvalidEndDate] = useState(false);

  const checkInvalidEndDate = () => {
    if (startDate.getTime() > endDate.getTime()) {
      setIsInvalidEndDate(true);
    } else {
      setIsInvalidEndDate(false);
    }
  };

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
    <div style={{ display: 'flex' }}>
      <DatePicker
        selected={startDate}
        onChange={handleStartDate}
        locale={ko}
        showTimeSelect
        timeIntervals={5}
        dateFormat="M월 d일 (eee)/h:mm aa" // 날짜와 시간을 '/' 로 구분
        customInput={<DateTimeInfo />}
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDate}
        locale={ko}
        showTimeSelect
        timeIntervals={5}
        dateFormat="M월 d일 (eee)/h:mm aa"
        customInput={<DateTimeInfo isInvalid={isInvalidEndDate} />}
      />
    </div>
  );
};

export default DateTimePicker;
