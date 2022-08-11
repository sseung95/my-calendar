import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ToggleLabel = styled.label`
  width: 4.8rem;
  height: 2.4rem;
  display: block;
  position: relative;
  border-radius: 2rem;
  background-color: var(--gray-03);
  cursor: pointer;
  transition: all 0.2s ease-in;

  .toggleButton {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 50%;
    left: 0.4rem;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 6rem;
    height: 3rem;

    .toggleButton {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export const Active = css`
  background: var(--primary-orange);

  .toggleButton {
    left: calc(100% - 2rem);
    background: #fff;
  }

  @media (min-width: 768px) {
    .toggleButton {
      left: calc(100% - 2.6rem);
    }
  }
`;
