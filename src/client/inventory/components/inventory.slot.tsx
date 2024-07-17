// src/components/InventorySlot.tsx
import React from "react";
import ItemComponent from "./ItemComponent";
import { Equipment } from "../../components/base/Equipment";
import { Items } from "../../components/base/generate/Items/items";

interface IProps {
  id: string;
  item?: Items;
  from: string;
  setSection: string;
}

const InventorySlot: React.FC<IProps> = ({ id, item, from, setSection }) => {
  const itemType = item?.itemType;
  return (
    <div className={`inventory-slot ${item?.rarity}`} id={id}>
      {item ? (
        <ItemComponent item={item} section={setSection} from={from} />
      ) : (
        "Empty"
      )}
    </div>
  );
};

export default InventorySlot;
