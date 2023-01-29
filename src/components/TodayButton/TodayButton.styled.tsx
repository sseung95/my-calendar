import styled from '@emotion/styled';
import { Body01, Headline } from '@/styles/typography';

export const OutlineButton = styled.button`
  ${Body01}
  border: 1.5px solid var(--primary-orange-light);
  border-radius: 6px;
  padding: 0.3rem 1rem;
  color: var(--primary-orange-light);

  &:active {
    color: #fff;
    background-color: var(--primary-orange-light);
  }

  @media (hover: hover) {
    &:hover {
      color: #fff;
      background-color: var(--primary-orange-light);
    }
  }

  @media (min-width: 768px) {
    ${Headline}
    font-weight: 400;
  }
`;
