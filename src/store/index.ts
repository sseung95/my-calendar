import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import taskSlice from './taskSlice';

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
