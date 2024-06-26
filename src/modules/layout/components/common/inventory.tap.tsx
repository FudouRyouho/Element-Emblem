import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inventoryTap, setSlotCount } from "../../actions/Layout.actions";
import { RootState } from "../../../../state/store";

const InventoryTabs: React.FC = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.layout.inventoryTap);

    const handleTabClick = (tab: string, slotCount: number) => {
        dispatch(inventoryTap(tab));
        dispatch(setSlotCount(slotCount));
    };

    return (
        <div className="inventory-tabs">
            <button onClick={() => handleTabClick('Equipment', 20)} className={activeTab === 'Equipment' ? 'active' : ''}>Equipment</button>
            <button onClick={() => handleTabClick('Consumables', 15)} className={activeTab === 'Consumables' ? 'active' : ''}>Consumables</button>
            <button onClick={() => handleTabClick('Materials', 30)} className={activeTab === 'Materials' ? 'active' : ''}>Materials</button>
        </div>
    );
};

export default InventoryTabs;
