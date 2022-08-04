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
  items: [
    {
      id: '1',
      title: '승원이랑밥먹기',
      startDate: new Date('2022/08/11 11:00'),
      endDate: new Date('2022/08/11 12:00'),
      isAllDay: false,
      memo: '망원에서 유명한 밥집으로 고고',
      label: '05',
    },
    {
      id: '2',
      title: '가족여행',
      startDate: new Date('2022/08/11 11:00'),
      endDate: new Date('2022/08/15 12:00'),
      isAllDay: true,
      memo: '대부도 펜션으로 애기와 함께 놀러감!',
      label: '01',
    },
    {
      id: '3',
      title: '병원가기',
      startDate: new Date('2022/08/13 16:30'),
      endDate: new Date('2022/08/13 17:30'),
      isAllDay: false,
      memo: '망원역 드림이비인후과 진료',
      label: '02',
    },
    {
      id: '4',
      title: '스타벅스가기',
      startDate: new Date('2022/08/26 13:00'),
      endDate: new Date('2022/08/26 15:00'),
      isAllDay: false,
      memo: '망원역 스타벅스',
      label: '08',
    },
    {
      id: '5',
      title: '스터디',
      startDate: new Date('2022/07/09 13:00'),
      endDate: new Date('2022/07/09 15:00'),
      isAllDay: false,
      memo: '알고리즘 스터디',
      label: '13',
    },
    {
      id: '6',
      title: '스터디2',
      startDate: new Date('2022/07/09 13:00'),
      endDate: new Date('2022/07/09 15:00'),
      isAllDay: false,
      memo: '알고리즘 스터디',
      label: '14',
    },
    {
      id: '6',
      title: '밥먹기',
      startDate: new Date('2022/07/10 13:00'),
      endDate: new Date('2022/07/10 15:00'),
      isAllDay: false,
      memo: '알고리즘 스터디',
      label: '15',
    },
  ],
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