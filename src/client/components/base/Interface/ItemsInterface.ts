//src\client\components\base\generate\Items\items.ts

export interface ItemsInterface {
  itemType: "Equipment" | "Consumables";
  id: string;
  name: string;
  type: string;
  rarity: string;
  icon: string;
}
