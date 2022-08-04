/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router';

type LabelProps = {
  id: string;
  title: string;
  labelColor: string;
};

const Label: React.FC<LabelProps> = ({ id, title, labelColor }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/task/${id}`)}
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
