/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef } from 'react';
import {
  DateTimeInfoWrapper,
  DateTitle,
  TimeTitle,
} from './DateTimePicker.styled';

// TODO: type any 를 어떤 타입으로 변경해야되는지 고민해보기
const DateTimeInfo: React.FC<any> = forwardRef(
  ({ value, isAllDay, isInvalid, onClick }, ref: any) => {
    const date = value.split('/')[0];
    const time = value.split('/')[1];

    return (
      <DateTimeInfoWrapper
        onClick={onClick}
        ref={ref}
        css={css`
          ${isInvalid && 'text-decoration: line-through;'}
        `}
      >
        <DateTitle
          css={css`
            ${isAllDay && 'font-weight: 700;'}
          `}
        >
          {date}
        </DateTitle>
        {!isAllDay && <TimeTitle>{time}</TimeTitle>}
      </DateTimeInfoWrapper>
    );
  }
);

export default DateTimeInfo;
