//src\client\inventory\state\inventory.state.ts
import {
  generateShopEquipment,
  generateShopConsumable,
} from "../../components/base/generate/testing/generateShopItems";

export interface IInventorySection {
  id: string;
  items: any[];
  slotCount: number;
}

export interface IInventory {
  save: boolean;
  id: string;
  sections: {
    [key: string]: IInventorySection;
  };
}

export interface IInventoryState {
  inventories: {
    [key: string]: IInventory;
  };
}

const generatePlayerInventory = (): IInventory => ({
  id: "Player",
  save: true,
  sections: {
    Equipment: {
      id: "equipment",
      items: [],
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
const generateShopInventory = (): IInventory => ({
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

export const initialInventoryState: IInventoryState = {
  inventories: {
    Player: generatePlayerInventory(),
    Shop: generateShopInventory(),
  },
};
