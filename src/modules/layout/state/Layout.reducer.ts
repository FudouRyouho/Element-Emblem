import { createReducer } from '@reduxjs/toolkit';
import { actualSection, inventoryTap, setSlotCount } from '../actions/Layout.actions';
import { InitialLayoutState } from './Layout.state';

export const LayoutReducer = createReducer(InitialLayoutState, (builder) => {
    builder
        .addCase(actualSection, (state, action) => {
            state.actualSection = action.payload;
        })
        .addCase(inventoryTap, (state, action) => {
            state.inventoryTap = action.payload;
        })
        .addCase(setSlotCount, (state, action) => {
            state.slotCount = action.payload;
        })
        ;
});
