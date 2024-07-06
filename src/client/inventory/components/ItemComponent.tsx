//src\client\testing\ItemComponent.tsx
import React, { useState } from "react";
import { isEquipment } from "../../components/base/Equipment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, items, Stats } from "../../components/icons";
import { CustomPopover } from "../../tooltips/customPopover/custom-popover";
import InventoryPopover from "../../tooltips/customPopover/inventory-popover";
import { useDispatch, useSelector } from "react-redux";
import { transferItem } from "../actions/inventory.actions";
import { RootState } from "../../state/store";
import { Items } from "../../components/base/generate/Items/items";

import { ItemComponentDetails } from "../utils/itemComponent.details";

interface IProps {
  ItemsType: Items;
  section: string;
  from: string;
}

const ItemComponent: React.FC<IProps> = ({ ItemsType, section, from }) => {
  console.log("ItemsType", ItemsType);

  const [showExtendedDetails, setShowExtendedDetails] = useState(false);
  const dispatch = useDispatch();

  const fromInventory = useSelector(
    (state: RootState) => state.inventory.inventories[from]
  );
  const toInventory = useSelector(
    (state: RootState) => state.inventory.inventories["Player"]
  );

  const handleClick = () => {
    setShowExtendedDetails(!showExtendedDetails);
  };
  const BuyItem = () => {
    dispatch(transferItem({ fromInventory, toInventory, item: ItemsType }));
    setShowExtendedDetails(!showExtendedDetails);
  };

  const SellItem = () => {
    const playerInventory = useSelector(
      (state: RootState) => state.inventory.inventories["Player"]
    );
    const shopInventory = useSelector(
      (state: RootState) => state.inventory.inventories["Shop"]
    );
    dispatch(
      transferItem({
        fromInventory: playerInventory,
        toInventory: shopInventory,
        item: ItemsType,
      })
    );
    setShowExtendedDetails(!showExtendedDetails);
  };

  return (
    <CustomPopover enabled placement="bottom-start">
      <div className={`item ${ItemsType.rarity}`}>
        <div className="icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={items[ItemsType.icon]}
            width={64}
            height={128}
          />
        </div>

        <>
          {showExtendedDetails && (
            <ItemComponentDetails
              item={ItemsType}
              type="extended"
              showExtendedDetails={showExtendedDetails}
              handleClick={handleClick}
            />
          )}
        </>
      </div>
    </CustomPopover>
  );
};

export default ItemComponent;
