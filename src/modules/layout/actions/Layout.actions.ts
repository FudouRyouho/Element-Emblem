import { createAction } from '@reduxjs/toolkit';

export const actualSection = createAction<string>('layout/section');
export const inventoryTap = createAction<string>('layout/inventoryTap');
export const setSlotCount = createAction<number>('layout/setSlotCount');
