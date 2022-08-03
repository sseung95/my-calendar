/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef } from 'react';

// TODO: type any 를 어떤 타입으로 변경해야되는지 고민해보기
const DateTimeInfo: React.FC<any> = forwardRef(
  ({ value, isInvalid, onClick }, ref: any) => {
    const date = value.split('/')[0];
    const time = value.split('/')[1];

    if (isInvalid) {
      console.log('유효하지 않음');
    }

    return (
      <div
        onClick={onClick}
        ref={ref}
        css={css`
          ${isInvalid && 'text-decoration: line-through;'}
        `}
      >
        <div>{date}</div>
        <div>{time}</div>
      </div>
    );
  }
);

export default DateTimeInfo;
