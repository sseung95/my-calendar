import styled from '@emotion/styled';
import { Body01, Display02, Display05 } from '@/styles/typography';

export const TaskFormWrapper = styled.div`
  flex-grow: 1;
  background-color: #fff;
  border-radius: 3.2rem 3.2rem 0 0;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 6rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  img {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    img {
      width: 3rem;
      height: 3rem;
    }
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

  @media (min-width: 768px) {
    gap: 6rem;
    padding: 3rem 1.5rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const SubTitle = styled.span`
  ${Body01}
  color: var(--gray-08);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 2.5rem;
  }
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

  @media (min-width: 768px) {
    ${Display05}
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

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;
