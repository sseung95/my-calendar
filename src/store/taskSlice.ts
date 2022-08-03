import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type task = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isAllDay: boolean;
  memo: string;
  label: string;
};

const initialState: { items: task[]; isEditing: boolean | null } = {
  items: [],
  isEditing: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<task>) {
      state.items.push({
        ...action.payload,
      });
    },
    editItem(state, action) {},
    removeItem(state, action) {},
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
