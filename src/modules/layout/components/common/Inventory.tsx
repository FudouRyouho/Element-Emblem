//src\modules\layout\components\common\Inventory.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import InventorySlot from "./inventory.slot";
import { addInventory } from "../../../inventory/actions/inventory.actions";
import { IInventory, IInventorySection } from "../../../inventory/state/inventory.state";
interface IProps {
  id: string;
  sections: string[];
  items?: { [section: string]: any[] };
}


const Inventory: React.FC<IProps> = ({ id, sections, items }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const newInventory: IInventory = {
      id: id,
      sections: sections.reduce((acc, section) => {
        acc[section] = {
          id: `${id}-${section}`,
          items: items ? items[section] || [] : [],
          slotCount: 10,
        };
        return acc;
      }, {} as { [key: string]: IInventorySection }),
    };

    dispatch(addInventory(newInventory));
  }, []);

  
  return (<>
  <p>{id}</p>
    <div className="inventory-tabs">
    {sections.map((section, index) => (
      <button key={`${id}-tab-${index}`} className={section.toLowerCase()}>
        {section}
      </button>
    ))}
  </div>
    <div id={id} className={`inventory ${id}`}>

        {sections.map((section) =>
          items &&
          items[section]?.map((item, slotIndex) => (
            <InventorySlot
              key={`${id}-${section}-${slotIndex}`}
              id={`${id}-${section}-${slotIndex}`}
              item={item}
              from={id}
            />
          ))
        )}
    </div>
    </>
  );
};


export default Inventory;
