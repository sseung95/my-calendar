import styled from '@emotion/styled';
import {
  Body01,
  Body02,
  Caption01,
  Caption02,
  Headline,
  Subhead02,
} from '@/styles/typography';

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--gray-02);
  border-radius: 20px;
  padding: 14px 30px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 25px 35px;
  }
`;

export const Date = styled.div`
  width: 5.5rem;

  @media (min-width: 768px) {
    width: 7rem;
  }
`;

export const StartDate = styled.div`
  ${Caption01}
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray-08);

  @media (min-width: 768px) {
    ${Body02}
  }
`;

export const EndDate = styled.div`
  ${Caption02}
  line-height: 1.8rem;
  color: var(--gray-05);

  @media (min-width: 768px) {
    ${Body01}
  }
`;

export const TaskContent = styled.div`
  flex-shrink: 1;
  cursor: pointer;
`;

export const Label = styled.div`
  width: 0.3rem;
  height: 1.6rem;
  background-color: ${(props) => `var(--label-color-${props.color})`};
  border-radius: 1px;
  margin-top: 1px;
  margin-right: 1rem;

  @media (min-width: 768px) {
    width: 0.4rem;
    height: 2.2rem;
    border-radius: 2px;
  }
`;

export const Title = styled.h3`
  ${Subhead02}
  color: var(--gray-08);

  @media (min-width: 768px) {
    ${Headline}
  }
`;

export const Memo = styled.p`
  ${Caption01}
  font-size: 1rem;
  color: var(--gray-06);

  @media (min-width: 768px) {
    ${Body01}
  }
`;

export const TaskInfoWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
`;

export const TaskMoreIcon = styled.img`
  cursor: pointer;

  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
