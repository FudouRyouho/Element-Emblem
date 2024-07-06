//src\client\layout\components\common\Inventory.tsx
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import InventorySlot from "./inventory.slot";
import {updateInventory  } from "../actions/inventory.actions";
import { RootState } from "../../state/store";
import { cloneDeep } from 'lodash';
import { useInventoryLoader } from "../hooks/useInventoryLoader";


interface IProps {
  id: string;
  sections: string[];
  save: boolean
}


const Inventory: React.FC<IProps> = ({ id,save, sections }) => {

  //preload inventory in state and load DB
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.inventory.inventories[id]);
  const loading = useInventoryLoader(id, save, sections);

  const [sectionButton, setSectionButton] = useState('Equipment')

  //update inventory state
  useEffect(() => {
    if (!loading && inventory) {
      const updatedInventory = cloneDeep(inventory);
      dispatch(updateInventory(updatedInventory));
    }
  }, [loading, inventory, dispatch]);

  if (!inventory) return null;



  const handleSetSection = (section : string) => {
    setSectionButton(section)
    console.log(sectionButton)
  }
  
  
  return (<>
  <p>{id} - {sectionButton}</p>
    <div className="inventory-tabs">
    {sections.map((section, index) => (
      <button key={`${id}-tab-${index}`} className={`btn ${section.toLowerCase()}`} onClick={() => handleSetSection(section)}>
        {section}
      </button>
    ))}
  </div>
  <div id={id} className={`inventory ${id}`}>
        {inventory.sections[sectionButton]?.items.map((item, slotIndex) => (
          <InventorySlot
            key={`${id}-${sectionButton}-${slotIndex}`}
            id={`${id}-${sectionButton}-${slotIndex}`}
            item={item}
            from={id}
            setSection={sectionButton}
          />
          ))
        }
    </div>
    </>
  );
};


export default Inventory;
