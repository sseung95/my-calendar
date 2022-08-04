/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import Label from './Label';
import { format, getDay } from 'date-fns';
import addImg from '../../assets/add-button.svg';
import moreIcon from '../../assets/more-icon.svg';
import { getDayStr } from '../../utils/dateUtil';

type CalendarProps = {
  year: number;
  month: number;
  date: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
};

const CalendarWeek: React.FC<CalendarProps> = ({
  year,
  month,
  date,
  setYear,
  setMonth,
}) => {
  const navigate = useNavigate();
  const taskList = useSelector((state: RootState) => state.task.items).filter(
    (task) =>
      task.startDate.getFullYear() === year &&
      task.startDate.getMonth() + 1 === month
  );

  const handleGoPrevMonth = () => {};

  const handleGoNextvMonth = () => {};

  return (
    <>
      <div>
        <div>
          <button onClick={handleGoPrevMonth}>prev</button>
          <div>
            {year}.{month.toString().padStart(2, '0')}
          </div>
          <button onClick={handleGoNextvMonth}>next</button>
        </div>
        <div>
          <div css={DateHead}>
            {[...Array(7)].map((n, idx) => {
              const targetDate = date - 3 + idx;

              return targetDate > 0 ? (
                <div key={idx}>
                  {getDayStr(
                    new Date(`${year}/${month}/${date - 3 + idx}`).getDay()
                  )}
                </div>
              ) : (
                <div key={idx}></div>
              );

              // const targetDate = new Date(`${year}/${month}/${date - 3 + idx}`);
              // return <div key={idx}>{targetDate.toString()}</div>;
            })}
          </div>
          <div css={DateBoard}>
            {[...Array(7)].map((n, idx) => (
              <div key={'l' + idx} id={`date-${idx + 1}`}>
                <div>{date - 3 + idx > 0 ? date - 3 + idx : ''}</div>

                {taskList
                  .filter((task) => task.startDate.getDate() === date - 3 + idx)
                  .map((task) => (
                    <Label
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      labelColor={task.label}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          {year}.{month}.{date}
        </div>
        <div>
          {taskList
            .filter((task) => task.startDate.getDate() === date)
            .map((task) => (
              <div
                key={task.id}
                css={css`
                  display: flex;
                `}
              >
                <div>
                  {task.isAllDay && <div>ALL DAY</div>}
                  {!task.isAllDay && (
                    <>
                      <div>{format(task.startDate, 'HH:mm')}</div>
                      <div>{format(task.endDate, 'HH:mm')}</div>
                    </>
                  )}
                </div>
                <div
                  css={css`
                    width: 3px;
                    height: 16px;
                    background-color: var(--label-color-${task.label});
                  `}
                ></div>
                <div onClick={() => navigate(`/edit/${task.id}`)}>
                  <div>{task.title}</div>
                  <div>{task.memo}</div>
                </div>
                <div>
                  <img src={moreIcon} alt="더보기" />
                </div>
              </div>
            ))}
        </div>
        <Link to={`/add/${year}/${month}/${date}`}>
          <img src={addImg} alt="일정 추가" />
        </Link>
      </div>
    </>
  );
};

const DateHead = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const DateBoard = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(auto, 80px);
  text-align: center;
`;

export default CalendarWeek;
