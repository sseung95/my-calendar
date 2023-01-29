import { LabelTitle, LabelWrapper } from '@/components/Label/Label.styled';
import { LabelProps } from '@/components/Label/Label.types';

const Label: React.FC<LabelProps> = ({ title, labelColor }) => {
  return (
    <LabelWrapper labelColor={`var(--label-color-${labelColor})`}>
      <LabelTitle>{title}</LabelTitle>
    </LabelWrapper>
  );
};

export default Label;
