import styled from '@emotion/styled';
import { Subhead03 } from '../../styles/typography';

export const Wrapper = styled.div`
  padding: 20px 16px;
  background-color: #fff;
  border-top: 0.3px solid var(--gray-03);
  position: relative;

  flex-grow: 1;
`;

export const DateWrapper = styled.div`
  ${Subhead03}
  color: var(--gray-08);
  margin-bottom: 1.5rem;
`;

export const TaskListViewWrapper = styled.div`
  overflow: auto;
`;

export const TaskListWrapper = styled.div`
  overflow: auto;
  padding-bottom: 4rem;

  & > div + div {
    margin-top: 1rem;
  }
`;

export const AddButtonWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 4rem;
`;

export const AddButton = styled.img`
  border-radius: 100px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;
