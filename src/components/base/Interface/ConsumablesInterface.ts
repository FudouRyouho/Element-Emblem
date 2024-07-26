//src\client\components\base\Consumables.ts
import { ItemsInterface } from "./ItemsInterface";

export interface ConsumablesInterface extends ItemsInterface {
  itemType: "Consumables";
  effect: string;
  description: string;
}

export const isConsumables = (item: ItemsInterface): item is ConsumablesInterface =>
  item.itemType === "Consumables";
