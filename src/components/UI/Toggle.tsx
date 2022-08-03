/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

type ToggleProps = {
  setIsAllDay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle: React.FC<ToggleProps> = ({ setIsAllDay }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  useEffect(() => {
    setIsAllDay(active);
  }, [active]);

  return (
    <label
      htmlFor="toggle"
      css={[ToggleStyle, active && Active]}
      onClick={handleToggle}
    >
      <span className="toggleButton"></span>
    </label>
  );
};

const ToggleStyle = css`
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
`;

const Active = css`
  background: var(--primary-orange);

  .toggleButton {
    left: calc(100% - 2rem);
    background: #fff;
  }
`;

export default Toggle;
