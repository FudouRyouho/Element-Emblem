//src\modules\shop\actions\shop.actions.ts
import { createAction } from '@reduxjs/toolkit';
import { Equipment } from '../../common/components/base/Equipment';
import { generateEquipment } from '../../common/components/base/generate/equipmentGenerator';

export const addItem = createAction<Equipment>('inventory/addItem');

export const generateAndAddItem = (slotCount: number) => {
  return (dispatch: any) => {
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

    const itemsGenerate: Equipment[] = Array.from({ length: slotCount }, () => {
      const rarity = rarities[Math.floor(Math.random() * rarities.length)];
      return generateEquipment(rarity);
    });

    itemsGenerate.forEach((item) => {
      dispatch(addItem(item));
    });
  };
};
