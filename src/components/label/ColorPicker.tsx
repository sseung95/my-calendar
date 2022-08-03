/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ColorCircle from './ColorCircle';

const ColorPicker = () => {
  return (
    <div css={ColorPickerWrapper}>
      <ColorCircle color="01" />
      <ColorCircle color="02" />
      <ColorCircle color="03" />
      <ColorCircle color="04" />
      <ColorCircle color="05" />
      <ColorCircle color="06" />
      <ColorCircle color="07" />
      <ColorCircle color="08" />
      <ColorCircle color="09" />
      <ColorCircle color="10" />
      <ColorCircle color="11" />
      <ColorCircle color="12" />
      <ColorCircle color="13" />
      <ColorCircle color="14" />
      <ColorCircle color="15" />
      <ColorCircle color="16" />
      <ColorCircle color="17" />
      <ColorCircle color="18" />
    </div>
  );
};

const ColorPickerWrapper = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.5rem;
`;

export default ColorPicker;
