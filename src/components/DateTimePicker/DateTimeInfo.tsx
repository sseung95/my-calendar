import { forwardRef } from 'react';
import {
  DateTimeInfoWrapper,
  DateTitle,
  TimeTitle,
} from '@/components/DateTimePicker/DateTimePicker.styled';

// TODO: type any 를 어떤 타입으로 변경해야되는지 고민해보기
const DateTimeInfo: React.FC<any> = forwardRef(
  ({ value, isAllDay, isInvalid, onClick }, ref: any) => {
    const date = value.split('/')[0];
    const time = value.split('/')[1];

    return (
      <DateTimeInfoWrapper onClick={onClick} ref={ref} isInvalid={isInvalid}>
        <DateTitle isAllDay={isAllDay}>{date}</DateTitle>
        {!isAllDay && <TimeTitle>{time}</TimeTitle>}
      </DateTimeInfoWrapper>
    );
  }
);

export default DateTimeInfo;
