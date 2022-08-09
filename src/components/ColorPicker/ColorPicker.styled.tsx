import styled from '@emotion/styled';
import checkIcon from '.././../assets/check-white-icon.svg';

export const ColorPickerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.5rem;
`;

export const ColorInput = styled.input`
  display: none;

  &:checked + label {
    ${(props) =>
      `background: center url(${checkIcon}) no-repeat var(--label-color-${props.color})`}
  }
`;

export const ColorLabel = styled.label`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  ${(props) =>
    props.color && `background-color: var(--label-color-${props.color});`}
  border-radius: 100px;
  cursor: pointer;
`;
