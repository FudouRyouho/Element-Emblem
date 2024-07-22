//src\client\inventory\actions\inventory.actions.ts
import { createAction } from "@reduxjs/toolkit";
import { InventoryInterface } from "../../components/Unit/InventoryInterface";

interface TransferItemPayload {
  fromInventory: InventoryInterface;
  toInventory: InventoryInterface;
  item: any;
}

export const updateInventory = createAction<InventoryInterface>(
  "inventory/updateInventory"
);
export const transferItem = createAction<TransferItemPayload>(
  "inventory/transferItem"
);
