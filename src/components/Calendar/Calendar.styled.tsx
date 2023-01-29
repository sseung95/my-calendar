import styled from '@emotion/styled';
import {
  Body01,
  Body02,
  Display01,
  Display05,
  Headline,
  Subhead02,
} from '@/styles/typography';

// @components
// @assets

export const CalendarWrapper = styled.div`
  background-color: #fff;
  border-radius: 3.2rem 3.2rem 0 0;
  padding: 2.4rem 0.8rem;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export const CalendarWeekWrapper = styled.div`
  background-color: #fff;
  border-radius: 3.2rem 3.2rem 0 0;
  padding: 2.4rem 0.8rem 1rem 0.8rem;

  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  padding-bottom: 2.1rem;
  color: var(--gray-08);
  ${Body01}

  img {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    ${Display01}
    padding: 0 3.2rem;
    padding-bottom: 4rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const CalendarContent = styled.div`
  flex-grow: 1;
`;

export const DateHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: var(--gray-04);

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  letter-spacing: 1.5px;

  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    ${Body02}
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
  }
`;

export const DateBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(5rem, 1fr));
  text-align: center;
  height: 100%;
`;

export const WeekDateBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(5rem, 1fr));
  text-align: center;
  height: 8rem;

  @media (min-width: 768px) {
    height: 14rem;
  }
`;

export const Month = styled.span`
  ${Display05}
  color: var(--gray-08);

  @media (min-width: 768px) {
    font-size: 6rem;
    line-height: 7rem;
  }
`;

export const MonthYear = styled.span`
  ${Subhead02}
  color: var(--gray-04);
  margin-left: 0.8rem;

  @media (min-width: 768px) {
    ${Headline}
  }
`;
