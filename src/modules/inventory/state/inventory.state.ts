// src/modules/inventory/state/inventory.state.ts

import { generateShopItems } from "../../common/components/base/generate/testing/generateShopItems";
// Interface para una sección de inventario
export interface IInventorySection {
  id: string;
  items: any[];
  slotCount: number;
}

// Interface para un inventario completo
export interface IInventory {
  id: string;
  sections: {
    [key: string]: IInventorySection;
  };
}

// Interface para el estado de inventario global en la aplicación
export interface IInventoryState {
  inventories: {
    [key: string]: IInventory;
  };
}

const generatePlayerInventory = (): IInventory => ({
  id: 'Player',
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
  sections: {
    'Equipment': {
      id: 'equipment',
      items: generateShopItems(20), // Genera ítems dinámicamente
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

export const initialInventoryState: IInventoryState = {
  inventories: {
    'Player': generatePlayerInventory(),
    'Shop': generateShopInventory(),
    // Agrega más inventarios según sea necesario
  },
};