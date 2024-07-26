import { EquipmentInterface } from "../../Interface/EquipmentInterface";
import { ConsumablesInterface } from "../../Interface/ConsumablesInterface";
import { equipmentGenerator } from "../Items/Equipment/equipmentGenerator";
import { consumableGenerator } from "../Items/Consumables/consumablesGenerator";

const rarities = [
  "common",
  "uncommon",
  "rare",
  "magic",
  "epic",
  "legendary",
  "mystic",
  "divine",
  "celestial",
];

export const generateShopEquipment = (slotCount: number): EquipmentInterface[] => {
  return Array.from({ length: slotCount }, () => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    return equipmentGenerator(rarity);
  });
};
export const generateShopConsumable = (slotCount: number): ConsumablesInterface[] => {
  return Array.from({ length: slotCount }, () => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    return consumableGenerator(rarity);
  });
};
