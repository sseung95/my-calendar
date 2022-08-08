import styled from '@emotion/styled';
import { Caption01 } from '../../styles/typography';

export const LabelWrapper = styled.div<{ labelColor: string }>`
  background-color: ${(props) => props.labelColor};
  height: 1.4rem;
  overflow: hidden;
  border-radius: 4px;
`;

export const LabelTitle = styled.span`
  ${Caption01}
  color: #fff;
  line-height: 1.5rem;
`;
