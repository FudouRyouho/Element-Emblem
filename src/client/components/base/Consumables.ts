//src\client\components\base\Consumables.ts
import { Items } from "./generate/Items/items";

export interface Consumables extends Items {
    itemType: 'Consumables';
    effect: string;
    description: string;
  }

  export const isConsumables = (item: Items): item is Consumables => item.itemType === 'Consumables';