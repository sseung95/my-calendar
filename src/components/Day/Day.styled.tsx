import styled from '@emotion/styled';
import { Caption02 } from '../../styles/typography';

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
`;

export const LabelListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MoreTaskLen = styled.div`
  ${Caption02}
  color: var(--gray-08);
`;
