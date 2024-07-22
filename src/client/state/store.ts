import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { inventoryReducer } from "../inventory/state/Inventory.reducer";
import { saveGameReducer } from "../components/saveGame/saveGame.reducer";
import { LayoutReducer } from "../layout/state/Layout.reducer";
const store = configureStore({
  reducer: {
    //inventory: inventoryReducer,
    saveGame: saveGameReducer,
    layout: LayoutReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
