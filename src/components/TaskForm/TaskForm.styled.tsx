import styled from '@emotion/styled';
import { Body01, Display02, Headline } from '../../styles/typography';

export const TaskFormWrapper = styled.div`
  flex-grow: 1;
  background-color: #fff;
  border-radius: 3.2rem 3.2rem 0px 0px;
  padding: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  img {
    cursor: pointer;
  }
`;

export const TaskFormRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.2rem;
  padding: 2rem 0.8rem;

  & > *:last-child {
    flex-grow: 1;
  }
`;

export const SubTitle = styled.span`
  ${Body01}
  color: var(--gray-08);
  margin-bottom: 1.5rem;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  ${Display02}
  padding: 1.5rem 2.4rem;
  border: none;
  outline: none;
  color: var(--gray-09);

  &::placeholder {
    color: var(--gray-05);
  }
`;

export const SubTitleInput = styled.input`
  ${Body01}
  border: none;
  outline: none;
  color: var(--gray-09);

  &::placeholder {
    color: var(--gray-05);
  }
`;

export const DateTimeInfoWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const DateTitle = styled.div`
  ${Body01}
  color: var(--gray-08);
`;

export const TimeTitle = styled.div`
  ${Headline}
`;
