import React from 'react';

export type TaskMoreMenuProps = {
  onRemoveTask: () => void;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};
