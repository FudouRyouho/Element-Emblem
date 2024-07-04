//src\client\inventory\state\inventory.state.ts
import { generateShopItems } from "../../../client/components/base/generate/testing/generateShopItems";
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
  id: 'Player',
  save: true,
  sections: {
    'Equipment': {
      id: 'equipment',
      items: [],
      slotCount: 20,
    },
    'Materials': {
      id: 'materials',
      items: [],
      slotCount: 20,
    },
    'Consumables': {
      id: 'consumables',
      items: [],
      slotCount: 20,
    },
    // Agrega más secciones según sea necesario
  },
});
const generateShopInventory = (): IInventory => ({
  id: 'Shop',
  save: false,
  sections: {
    'Equipment': {
      id: 'equipment',
      items: generateShopItems(5), // Genera ítems dinámicamente
      slotCount: 10,
    },
    'Materials': {
      id: 'materials',
      items: generateShopItems(10),
      slotCount: 20,
    },
    'Consumables': {
      id: 'consumables',
      items: generateShopItems(15),
      slotCount: 20,
    },
    // Agrega más secciones según sea necesario
  },
});

export const initialInventoryState: IInventoryState = {
  inventories: {
    'Player': generatePlayerInventory(),
    'Shop': generateShopInventory(),
    // Agrega más inventarios según sea necesario
  },
};