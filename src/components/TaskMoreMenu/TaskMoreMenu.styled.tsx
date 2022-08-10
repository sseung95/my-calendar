import styled from '@emotion/styled';
import { Caption02 } from '../../styles/typography';

export const TaskMoreMenuWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: -0.5rem;
  background-color: #fff;
  padding: 0.4rem 0;
  width: 5rem;
  text-align: center;
  border-radius: 4px;
  border: 0.1px solid var(--gray-01);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  color: var(--gray-08);
  cursor: pointer;
  ${Caption02}
`;
