
import { configureStore, EnhancedStore  } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { inventoryReducer } from '../modules/inventory/state/Inventory.reducer';


const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
    },
    devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;