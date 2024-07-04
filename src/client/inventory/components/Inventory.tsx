//src\client\layout\components\common\Inventory.tsx
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import InventorySlot from "./inventory.slot";
import {updateInventory  } from "../actions/inventory.actions";
import { RootState } from "../../state/store";
import { cloneDeep } from 'lodash';
import { useInventoryLoader } from "../hooks/useInventoryLoader";
import { generateShopItems } from "../../components/base/generate/Items/Equipment/testing/generateShopItems";


interface IProps {
  id: string;
  sections: string[];
  save: boolean
}


const Inventory: React.FC<IProps> = ({ id,save, sections }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.inventory.inventories[id]);
  const loading = useInventoryLoader(id, save, sections);

  const [sectionButton, setSectionButton] = useState('Equipment')

  useEffect(() => {
    if (!loading && inventory) {
      const updatedInventory = cloneDeep(inventory);
      dispatch(updateInventory(updatedInventory));
    }
  }, [loading, inventory, dispatch]);

  if (!inventory) return null;

  //testing

  const handleSetSection = (section : string) => {
    setSectionButton(section)
    console.log(sectionButton)
  }

  const shopGenerateButton = () => {
    console.log(inventory.sections['Materials'].items)
    const shopItems = generateShopItems(5);
    dispatch(updateInventory({...inventory, sections: {...inventory.sections, Materials: {...inventory.sections.Materials, items: [...inventory.sections.Materials.items,...shopItems]}}}))
  }
  
  return (<>
  <p>{id} - {sectionButton}</p>
    <div className="inventory-tabs">
    {sections.map((section, index) => (
      <button key={`${id}-tab-${index}`} className={section.toLowerCase()
      } onClick={() => handleSetSection(section)}>
        {section}
      </button>
    ))}
    {id === 'Shop' && <div className="shop">
      <button onClick={shopGenerateButton}>Generar items</button>
      </div>}
    
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
