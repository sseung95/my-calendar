import styled from '@emotion/styled';
import { Body01, Caption02 } from '../../styles/typography';

export const DayWrapper = styled.div<{ isActive: boolean }>`
  padding: 0.1rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  overflow: hidden;

  ${(props) =>
    props.isActive &&
    `background-color: #f3f3f3;
      border-radius: 4px;`}

  @media (hover: hover) {
    &:hover {
      background-color: #fafafa;
      border-radius: 4px;
    }
  }

  @media (min-width: 768px) {
    padding: 0.3rem;
  }
`;

export const DateStyle = styled.div<{ isToday: boolean; day: number }>`
  ${Caption02}
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.7rem;
  align-self: center;

  margin-bottom: 0.1rem;

  color: var(--gray-08);
  ${(props) => props.day === 0 && 'color: var(--red);'}
  ${(props) => props.day === 6 && 'color: var(--blue);'}

  ${(props) =>
    props.isToday &&
    `
    font-weight: 500;
    color: #fff;
    background-color: var(--gray-08);
    border-radius: 100px;
  `}

  @media (min-width: 768px) {
    ${Body01}
    width: 2rem;
    height: 2rem;
    line-height: 2.2rem;

    margin-bottom: 1rem;
  }
`;

export const LabelListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MoreTaskLen = styled.div`
  ${Caption02}
  color: var(--gray-08);

  @media (min-width: 768px) {
    ${Body01}
  }
`;
