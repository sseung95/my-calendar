import styled from '@emotion/styled';

export const CalendarWrapper = styled.div`
  background-color: #fff;
  border-radius: 32px 32px 0px 0px;
  padding: 2.4rem 0.8rem;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  padding-bottom: 2.1rem;
  color: var(--gray-08);
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
`;

export const DateBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  text-align: center;
  height: 100%;
`;
