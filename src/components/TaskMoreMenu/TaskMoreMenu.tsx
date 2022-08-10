import { TaskMoreMenuWrapper } from './TaskMoreMenu.styled';
import { TaskMoreMenuProps } from './TaskMoreMenu.types';

const TaskMoreMenu: React.FC<TaskMoreMenuProps> = ({ onRemoveTask }) => {
  return (
    <TaskMoreMenuWrapper>
      <span onClick={onRemoveTask}>삭제하기</span>
    </TaskMoreMenuWrapper>
  );
};

export default TaskMoreMenu;
