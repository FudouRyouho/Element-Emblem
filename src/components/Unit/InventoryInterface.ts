//src\client\components\Unit\inventory.ts
export interface InventorySectionInterface {
  id: string;
  items: any[];
  slotCount: number;
}

export interface InventoryInterface {
  save: boolean;
  id: string;
  sections: {
    [key: string]: InventorySectionInterface;
  };
}

