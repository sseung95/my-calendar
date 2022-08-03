/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import checkIcon from '.././../assets/check-white-icon.svg';

type ColorCircleProps = {
  color: string;
};

const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => {
  return (
    <>
      <input
        id={color}
        type="radio"
        name="color-selctor"
        css={css`
          display: none;

          &:checked + label {
            background: ${`center url(${checkIcon}) no-repeat var(--label-color-${color})`};
        `}
      ></input>
      <label
        htmlFor={color}
        css={css`
          display: inline-block;
          width: 3rem;
          height: 3rem;
          background-color: var(--label-color-${color});
          border-radius: 100px;
          cursor: pointer;
        `}
      ></label>
    </>
  );
};

export default ColorCircle;
