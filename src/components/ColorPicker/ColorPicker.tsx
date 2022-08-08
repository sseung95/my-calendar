import ColorCircle from './Color';
import { ColorPickerWrapper } from './ColorPicker.styled';
import { ColorPickerProps } from './ColorPicker.types';

const ColorPicker: React.FC<ColorPickerProps> = ({ label, setLabel }) => {
  return (
    <ColorPickerWrapper>
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
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
