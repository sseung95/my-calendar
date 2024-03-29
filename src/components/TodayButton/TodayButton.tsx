import { OutlineButton } from '@/components/TodayButton/TodayButton.styled';
import { TodayButtonProps } from '@/components/TodayButton/TodayButton.types';

const TodayButton: React.FC<TodayButtonProps> = ({ setYear, setMonth }) => {
  const handleGoToday = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
  };

  return <OutlineButton onClick={handleGoToday}>TODAY</OutlineButton>;
};

export default TodayButton;
