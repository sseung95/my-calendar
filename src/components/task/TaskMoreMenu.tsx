type TaskMoreMenuProps = {
  onRemoveTask: () => void;
};

const TaskMoreMenu: React.FC<TaskMoreMenuProps> = ({ onRemoveTask }) => {
  return (
    <div>
      <span onClick={onRemoveTask}>삭제하기</span>
    </div>
  );
};

export default TaskMoreMenu;
