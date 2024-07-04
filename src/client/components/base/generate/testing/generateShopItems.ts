import { Equipment } from "../../Equipment";
import { generateEquipment } from "../equipmentGenerator";

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

export const generateShopItems = (slotCount: number): Equipment[] => {
  return Array.from({ length: slotCount }, () => {
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    return generateEquipment(rarity);
  });
};