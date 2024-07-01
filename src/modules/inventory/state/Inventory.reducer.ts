//src\modules\inventory\state\Inventory.reducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { initialInventoryState } from "./inventory.state";
import { addInventory, transferItem } from "../actions/inventory.actions";

export const inventoryReducer = createReducer(
  initialInventoryState,
  (builder) => {
    builder
      .addCase(addInventory, (state, action) => {
        const { id } = action.payload;
        state.inventories[id] = action.payload;
        console.log(`Inventory added: ${action.payload.id}`);
      })
      .addCase(transferItem, (state, action) => {
        const { from, to, section, item } = action.payload;
        const fromInventory = state.inventories[from];
        const toInventory = state.inventories[to];

        console.log(
          `Transferring item ${item.id} from ${from} to ${to} in section ${section}`
        );
        console.log("Current fromInventory:", fromInventory);
        console.log("Current toInventory:", toInventory);

        if (fromInventory && toInventory) {
          const fromSectionItems = fromInventory.sections[section].items;
          const itemIndex = fromSectionItems.findIndex((i) => i.id === item.id);

          if (itemIndex > -1) {
            fromSectionItems.splice(itemIndex, 1);
          }

          toInventory.sections[section].items.push(item);

          console.log(`Item ${item.id} transferred successfully.`);
          console.log("Updated toInventory:", toInventory);
        } else {
          console.log("Transfer failed. Inventories not found or invalid.");
        }
      });
  }
);
