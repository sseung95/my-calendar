/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type LabelProps = {
  title: string;
  labelColor: string;
};

const Label: React.FC<LabelProps> = ({ title, labelColor }) => {
  return (
    <div
      css={css`
        background-color: ${`var(--label-color-${labelColor})`};
        color: #fff;
      `}
    >
      {title}
    </div>
  );
};

export default Label;
