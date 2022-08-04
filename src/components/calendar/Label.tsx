/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type LabelProps = {
  id: string;
  title: string;
  labelColor: string;
};

const Label: React.FC<LabelProps> = ({ id, title, labelColor }) => {
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
