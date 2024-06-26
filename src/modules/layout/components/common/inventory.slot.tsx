// src/components/InventorySlot.tsx
import React from "react";
import ItemComponent from "../../../testing/ItemComponent";
import { Equipment } from "../../../common/components/base/Equipment";

interface IProps {
    id: string;
    item?: Equipment;
  }
  
  const InventorySlot: React.FC<IProps> = ({ id, item }) => {
    return (
        <div className={`inventory-slot ${item?.rarity}`} id={id}>
            {item ? <ItemComponent  equipment={item} /> : "Empty"}
        </div>
    );
};

export default InventorySlot;