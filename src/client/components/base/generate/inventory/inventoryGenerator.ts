import { InventoryInterface } from "../../../Unit/InventoryInterface";
import {
    generateShopEquipment,
    generateShopConsumable,
  } from "../testing/generateShopItems";

export const generatePlayerInventory = (): InventoryInterface => ({
    id: "Player",
    save: true,
    sections: {
      Equipment: {
        id: "equipment",
        items: generateShopEquipment(10),
        slotCount: 20,
      },
      Materials: {
        id: "materials",
        items: [],
        slotCount: 20,
      },
      Consumables: {
        id: "consumables",
        items: [],
        slotCount: 20,
      },
    },
  });
export  const generateShopInventory = (): InventoryInterface => ({
    id: "Shop",
    save: false,
    sections: {
      Equipment: {
        id: "equipment",
        items: generateShopEquipment(10),
        slotCount: 10,
      },
      Materials: {
        id: "materials",
        items: generateShopEquipment(1),
        slotCount: 20,
      },
      Consumables: {
        id: "consumables",
        items: generateShopConsumable(1),
        slotCount: 20,
      },
    },
  });