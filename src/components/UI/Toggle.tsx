/** @jsxImportSource @emotion/react */
import { ToggleLabel, Active } from '@/components/UI/Toggle.styled';
import { ToggleProps } from '@/components/UI/Toggle.types';

const Toggle: React.FC<ToggleProps> = ({ isAllDay, setIsAllDay }) => {
  const handleToggle = () => {
    setIsAllDay(!isAllDay);
  };

  return (
    <ToggleLabel
      htmlFor="toggle"
      css={isAllDay && Active}
      onClick={handleToggle}
    >
      <span className="toggleButton"></span>
    </ToggleLabel>
  );
};

export default Toggle;
