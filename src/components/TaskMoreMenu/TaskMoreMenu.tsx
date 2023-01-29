import { useEffect } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { TaskMoreMenuWrapper } from './TaskMoreMenu.styled';
import { TaskMoreMenuProps } from './TaskMoreMenu.types';

const TaskMoreMenu: React.FC<TaskMoreMenuProps> = ({
  onRemoveTask,
  setShowMore,
}) => {
  const { ref, isOutside } = useOutsideClick();

  useEffect(() => {
    setShowMore((prev) => !isOutside);
  }, [isOutside]);

  return (
    <TaskMoreMenuWrapper ref={ref}>
      <span onClick={onRemoveTask}>삭제하기</span>
    </TaskMoreMenuWrapper>
  );
};

export default TaskMoreMenu;
