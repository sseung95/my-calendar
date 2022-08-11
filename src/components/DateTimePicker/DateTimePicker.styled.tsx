import styled from '@emotion/styled';
import { Body01, Display02, Headline } from '../../styles/typography';

export const DateTimePickerWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;

  img {
    margin-top: 1.5px;
  }

  @media (min-width: 768px) {
    gap: 1rem;

    img {
      margin-top: 0;
    }
  }
`;

export const DateTimeInfoWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const DateTitle = styled.div`
  ${Body01}
  color: var(--gray-08);

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

export const TimeTitle = styled.div`
  ${Headline}

  @media (min-width: 768px) {
    ${Display02}
  }
`;
