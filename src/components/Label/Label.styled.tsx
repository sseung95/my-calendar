import styled from '@emotion/styled';
import { Body01, Caption01 } from '@/styles/typography';

export const LabelWrapper = styled.div<{ labelColor: string }>`
  background-color: ${(props) => props.labelColor};
  height: 1.4rem;
  overflow: hidden;
  border-radius: 4px;

  @media (min-width: 768px) {
    height: 2rem;
  }
`;

export const LabelTitle = styled.span`
  ${Caption01}
  color: #fff;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    ${Body01}
    line-height: 2.1rem;
  }
`;
