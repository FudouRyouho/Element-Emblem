//src\server\services\inventoryManager.ts


import { InventoryInterface, InventorySectionInterface } from "../../components/Unit/InventoryInterface";
export const createInventory = (
  id: string,
  save: boolean,
  sections: string[]
): InventoryInterface => {
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
    }, {} as { [key: string]: InventorySectionInterface }),
  };
};

export const addItemToInventory = (
  inventory: InventoryInterface,
  sectionId: string,
  item: any
): InventoryInterface => {
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
