//src\server\services\inventoryManager.ts

import {
  IInventory,
  IInventorySection,
} from "../../client/inventory/state/inventory.state";

export const createInventory = (
  id: string,
  save: boolean,
  sections: string[]
): IInventory => {
  return {
    id,
    save,
    sections: sections.reduce((acc, section) => {
      acc[section] = {
        id: `${id}-${section}`,
        items: [],
        slotCount: 20,
      };
      return acc;
    }, {} as { [key: string]: IInventorySection }),
  };
};

export const addItemToInventory = (
  inventory: IInventory,
  sectionId: string,
  item: any
): IInventory => {
  if (inventory.sections[sectionId]) {
    return {
      ...inventory,
      sections: {
        ...inventory.sections,
        [sectionId]: {
          ...inventory.sections[sectionId],
          items: [...inventory.sections[sectionId].items, item],
        },
      },
    };
  }
  return inventory;
};
