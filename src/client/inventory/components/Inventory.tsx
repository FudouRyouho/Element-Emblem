//src\client\layout\components\common\Inventory.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InventorySlot from "./inventory.slot";
import { updateInventory } from "../actions/inventory.actions";
import { RootState } from "../../state/store";
import { cloneDeep } from "lodash";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";
import { ButtonTemplate } from "../../layout/utils/buttons";

interface IProps {
  idSave: saveGameInterface;
  id: string;
  sections: string[];
  save: boolean;
}

const Inventory: React.FC<IProps> = ({ idSave, id, save, sections }) => {
  //preload inventory in state and load DB

  const dispatch = useDispatch();
  const inventory = useSelector(
    (state: RootState) => state.saveGame.saves[idSave.id].unit[0].inventory
  );

  console.log(id, "||", inventory);

  const [sectionButton, setSectionButton] = useState("Equipment");

  const handleSetSection = (section: string) => {
    setSectionButton(section);
    console.log(sectionButton);
  };

  return (
    <>
      <p>
        {id} - {sectionButton}
      </p>
      <div className="m-1
      ">
        {sections.map((section, index) => (
          <ButtonTemplate
            content={section}
            color="gray"
            onClick={() => handleSetSection(section)}
          />
        ))}
      </div>
      <div
        id={id}
        className={`grid grid-cols-inventory bg-gray-800/40 p-10 border-2 border-white mx-12`}
      >
        {inventory.sections[sectionButton]?.items.map((item, slotIndex) => (
          <InventorySlot
            idSave={idSave}
            key={`${id}-${sectionButton}-${slotIndex}`}
            id={`${id}-${sectionButton}-${slotIndex}`}
            item={item}
            from={id}
            setSection={sectionButton}
          />
        ))}
      </div>
    </>
  );
};

export default Inventory;
