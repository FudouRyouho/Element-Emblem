import { Equipment } from "../../Equipment";
import { Consumables } from "../../Consumables";
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

export const generateShopEquipment = (slotCount: number): Equipment[] => {
  return Array.from({ length: slotCount }, () => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    return equipmentGenerator(rarity);
  });
};
export const generateShopConsumable = (slotCount: number): Consumables[] => {
  return Array.from({ length: slotCount }, () => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    return consumableGenerator(rarity);
  });
};