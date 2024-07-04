// src/components/InventorySlot.tsx
import React from "react";
import ItemComponent from "../../testing/ItemComponent";
import { Equipment } from "../../components/base/Equipment";

interface IProps {
    id: string;
    item?: Equipment;
    from: string;
    setSection: string;
  }
  
  const InventorySlot: React.FC<IProps> = ({ id, item, from, setSection }) => {
    return (
        <div className={`inventory-slot ${item?.rarity}`} id={id}>
            {item ? <ItemComponent  equipment={item} section={setSection} from={from}/> : "Empty"}
        </div>
    );
};

export default InventorySlot;