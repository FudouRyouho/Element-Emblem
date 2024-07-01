// src/modules/inventory/actions/inventory.actions.ts
import { createAction } from '@reduxjs/toolkit';
import { IInventory } from '../state/inventory.state';

export const addInventory = createAction<IInventory>('inventory/addInventory');
export const transferItem = createAction<{ from: string, to: string, section: string, item: any }>('inventory/transferItem');