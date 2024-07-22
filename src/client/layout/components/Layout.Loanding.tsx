//src\client\layout\components\Layout.Loanding.tsx
import React from 'react';
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import Inventory from '../../inventory/components/Inventory';
import { saveGameInterface } from '../../components/saveGame/saveGameInterface';


interface Iprops {
    saveData: saveGameInterface;
}

export const Loading: React.FC<Iprops> = ({ saveData }) => {
    const { currentSection, switchSection } = useSectionSwitcher();

    const unit = saveData.unit

    const sections = Object.values(unit[0].inventory.sections).map(section => section.id)

    return (<>
        <div>
            Loading...
        </div>
        <Inventory
        idSave={saveData}
        id={unit[0].name}
        save={true}
        sections={sections}
        />
        <button className="btn" onClick={() => switchSection("Main Menu")}>Back</button>
        </>
    );
}