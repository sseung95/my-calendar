/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ColorCircle from './ColorCircle';

type ColorPickerProps = {
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ label, setLabel }) => {
  return (
    <div css={ColorPickerWrapper}>
      <ColorCircle color="01" label={label} setLabel={setLabel} />
      <ColorCircle color="02" label={label} setLabel={setLabel} />
      <ColorCircle color="03" label={label} setLabel={setLabel} />
      <ColorCircle color="04" label={label} setLabel={setLabel} />
      <ColorCircle color="05" label={label} setLabel={setLabel} />
      <ColorCircle color="06" label={label} setLabel={setLabel} />
      <ColorCircle color="07" label={label} setLabel={setLabel} />
      <ColorCircle color="08" label={label} setLabel={setLabel} />
      <ColorCircle color="09" label={label} setLabel={setLabel} />
      <ColorCircle color="10" label={label} setLabel={setLabel} />
      <ColorCircle color="11" label={label} setLabel={setLabel} />
      <ColorCircle color="12" label={label} setLabel={setLabel} />
      <ColorCircle color="13" label={label} setLabel={setLabel} />
      <ColorCircle color="14" label={label} setLabel={setLabel} />
      <ColorCircle color="15" label={label} setLabel={setLabel} />
      <ColorCircle color="16" label={label} setLabel={setLabel} />
      <ColorCircle color="17" label={label} setLabel={setLabel} />
      <ColorCircle color="18" label={label} setLabel={setLabel} />
    </div>
  );
};

const ColorPickerWrapper = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.5rem;
`;

export default ColorPicker;
