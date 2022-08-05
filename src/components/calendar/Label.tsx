import styled from '@emotion/styled';
import { Caption01 } from '../../styles/typography';

type LabelProps = {
  id: string;
  title: string;
  labelColor: string;
};

const Label: React.FC<LabelProps> = ({ id, title, labelColor }) => {
  return (
    <LabelWrapper labelColor={`var(--label-color-${labelColor})`}>
      <Title>{title}</Title>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div<{ labelColor: string }>`
  background-color: ${(props) => props.labelColor};
  height: 1.4rem;
  overflow: hidden;
  border-radius: 4px;
`;

const Title = styled.span`
  ${Caption01}
  color: #fff;
  line-height: 1.5rem;
`;

export default Label;
