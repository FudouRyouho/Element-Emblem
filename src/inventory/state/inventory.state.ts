//src\client\inventory\state\inventory.state.ts
import { generatePlayerInventory, generateShopInventory } from "../../components/base/generate/inventory/inventoryGenerator";

import { InventoryInterface } from "../../components/Unit/InventoryInterface";


export interface InventoryState {
  inventories: {
    [key: string]: InventoryInterface;
  };
}



export const initialInventoryState: InventoryState = {
  inventories: {
    Player: generatePlayerInventory(),
    Shop: generateShopInventory(),
  },
};
