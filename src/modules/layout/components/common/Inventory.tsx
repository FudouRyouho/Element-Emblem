import React from "react";
import { useSelector } from "react-redux";
import InventorySlot from "./inventory.slot";
import { RootState } from "../../../../state/store";
import { Equipment } from "../../../common/components/base/Equipment";
import { generateEquipment } from "../../../common/components/base/generate/equipmentGenerator";

interface IProps {
  slotCount?: number;
}

const Inventory: React.FC<IProps> = ({ slotCount = 20 }) => {
  const titleTap = useSelector((state: RootState) => state.layout.inventoryTap);

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


  const slots = itemsGenerate.map((item, index) => ({
    id: `slot-${index + 1}`,
    item,
  }));

  return (
    <>
      <p>{titleTap}</p>
      <div className="inventory">
        {slots.map((slot) => (
          <InventorySlot key={slot.id} id={slot.id} item={slot.item} />
        ))}
      </div>
    </>
  );
};

export default Inventory;
