import styled from '@emotion/styled';
import { Caption01, Caption02, Subhead02 } from '../../styles/typography';

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--gray-02);
  border-radius: 20px;
  padding: 14px 30px;
  width: 100%;
`;

export const Date = styled.div`
  width: 5.5rem;
`;

export const StartDate = styled.div`
  ${Caption01}
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray-08);
`;

export const EndDate = styled.div`
  ${Caption02}
  line-height: 1.8rem;
  color: var(--gray-05);
`;

export const TaskContent = styled.div`
  flex-shrink: 1;
`;

export const Label = styled.div`
  width: 3px;
  height: 16px;
  background-color: ${(props) => `var(--label-color-${props.color})`};
  border-radius: 1px;
  margin-top: 1px;
  margin-right: 1rem;
`;

export const Title = styled.h3`
  ${Subhead02}
  color: var(--gray-08);
`;

export const Memo = styled.p`
  ${Caption01}
  font-size: 1rem;
  color: var(--gray-06);
`;

export const TaskMore = styled.div``;

export const TaskMoreIcon = styled.img`
  cursor: pointer;
`;

// export const TaskMoreWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
// `;
