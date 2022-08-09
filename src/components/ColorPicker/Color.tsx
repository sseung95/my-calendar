import { ColorInput, ColorLabel } from './ColorPicker.styled';
import { ColorProps } from './ColorPicker.types';

const ColorCircle: React.FC<ColorProps> = ({ color, label, setLabel }) => {
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = e.target.id;
    setLabel(label);
  };

  return (
    <>
      <ColorInput
        id={color}
        checked={label === color}
        onChange={handleChangeColor}
        type="radio"
        name="color-selctor"
        color={color}
      ></ColorInput>
      <ColorLabel htmlFor={color} color={color}></ColorLabel>
    </>
  );
};

export default ColorCircle;
