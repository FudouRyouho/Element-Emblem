import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { inventoryReducer } from "../inventory/state/Inventory.reducer";

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
