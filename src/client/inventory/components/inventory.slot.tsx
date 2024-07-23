// src/components/InventorySlot.tsx
import React from "react";
import ItemComponent from "./ItemComponent";
import { ItemsInterface } from "../../components/base/Interface/ItemsInterface";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";

interface IProps {
  idSave: saveGameInterface
  id: string;
  item?: ItemsInterface;
  from: string;
  setSection: string;
}

const InventorySlot: React.FC<IProps> = ({ idSave, id, item, from, setSection }) => {
  const itemType = item?.itemType;
  return (
    <div className={`border-2 border-white hover:border-blue-400 ${item?.rarity}`} id={id}>
      {item ? (
        <ItemComponent idSave={idSave} item={item} section={setSection} from={from} />
      ) : (
        "Empty"
      )}
    </div>
  );
};

export default InventorySlot;
