import { configureStore } from '@reduxjs/toolkit';
import { LayoutReducer } from '../modules/layout/state/Layout.reducer';

const store = configureStore({
    reducer:  {
        layout: LayoutReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;