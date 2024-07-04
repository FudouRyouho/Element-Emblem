//src\client\inventory\state\Inventory.reducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { initialInventoryState } from './inventory.state';
import { updateInventory, transferItem } from '../actions/inventory.actions';
import { savePlayerInventory } from '../../../server/services/inventoryService';
import { isEqual } from 'lodash';

export const inventoryReducer = createReducer(initialInventoryState, (builder) => {
  builder
  .addCase(updateInventory, (state, action) => {
    const { id } = action.payload;
    console.log('updateInventory (action.payload)', action.payload)
    if (!isEqual(state.inventories[id], action.payload)) {
      state.inventories[id] = action.payload;
      console.log('Inventory update (action.payload):', { id });
      savePlayerInventory(state.inventories[id]);
    }
  })
    .addCase(transferItem, (state, action) => {
      const { fromInventory, toInventory, item } = action.payload;
      const fromInventoryState = state.inventories[fromInventory.id];
      const toInventoryState = state.inventories[toInventory.id];

      if (fromInventoryState && toInventoryState) {
        let itemTransferred = false;
        for (const sectionKey in fromInventory.sections) {
          const fromSection = fromInventoryState.sections[sectionKey];
          const itemIndex = fromSection.items.findIndex((i) => i.id === item.id);
          if (itemIndex > -1) {
            fromSection.items.splice(itemIndex, 1);
            toInventoryState.sections[sectionKey].items.push(item);
            itemTransferred = true;
            break;
          }
        }
        if (itemTransferred) {
          state.inventories[fromInventory.id] = { ...fromInventoryState };
          state.inventories[toInventory.id] = { ...toInventoryState };
          savePlayerInventory(state.inventories[fromInventory.id]);
          savePlayerInventory(state.inventories[toInventory.id]);
          console.log('itemTransferred',state.inventories[fromInventory.id], '|' , (state.inventories[toInventory.id]) )
        } else {
          console.log('Item not found in fromInventory.');
        }
      } else {
        console.log('Transfer failed. Inventories not found or invalid.');
      }
    });
});
