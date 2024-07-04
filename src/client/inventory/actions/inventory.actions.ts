//src\client\inventory\actions\inventory.actions.ts
import { createAction } from '@reduxjs/toolkit';
import { IInventory } from '../state/inventory.state';

interface TransferItemPayload {
    fromInventory: IInventory;
    toInventory: IInventory;
    item: any;
  }


export const updateInventory = createAction<IInventory>('inventory/updateInventory')
export const transferItem = createAction<TransferItemPayload>('inventory/transferItem');