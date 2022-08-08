import { LabelTitle, LabelWrapper } from './Label.styled';
import { LabelProps } from './Label.types';

const Label: React.FC<LabelProps> = ({ title, labelColor }) => {
  return (
    <LabelWrapper labelColor={`var(--label-color-${labelColor})`}>
      <LabelTitle>{title}</LabelTitle>
    </LabelWrapper>
  );
};

export default Label;
