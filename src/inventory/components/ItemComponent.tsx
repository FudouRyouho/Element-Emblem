//src\client\testing\ItemComponent.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, items, Stats } from "../../components/icons";
import { CustomPopover } from "../../tooltips/customPopover/custom-popover";
import InventoryPopover from "../../tooltips/customPopover/inventory-popover";
import { useDispatch, useSelector } from "react-redux";
import { transferItem } from "../actions/inventory.actions";
import { RootState } from "../../state/store";
import { ItemsInterface } from "../../components/base/Interface/ItemsInterface";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";
import { ItemComponentDetails } from "../utils/itemComponent.details";

interface IProps {
  idSave: saveGameInterface;
  item: ItemsInterface;
  section: string;
  from: string;
}

const ItemComponent: React.FC<IProps> = ({ idSave,item, section, from }) => {
  //console.log("ItemsType", item);

  const [showExtendedDetails, setShowExtendedDetails] = useState(false);
  const dispatch = useDispatch();

  const fromInventory = useSelector(
    (state: RootState) => state.saveGame.saves[idSave.id].unit[0].inventory
  );
  const toInventory = useSelector(
    (state: RootState) => state.saveGame.saves[idSave.id].unit[0].inventory
  );
  const BuyItem = () => {
    dispatch(transferItem({ fromInventory, toInventory, item: item }));
    setShowExtendedDetails(!showExtendedDetails);
  };
  const handleClick = () => {
    setShowExtendedDetails(!showExtendedDetails);
  };

  const SellItem = () => {
    dispatch(
      transferItem({
        fromInventory,
        toInventory,
        item: item,
      })
    );
    setShowExtendedDetails(!showExtendedDetails);
  };

  return (
    <CustomPopover
      enabled={!showExtendedDetails}
      placement="bottom-start"
      popover={<InventoryPopover item={item} />}
    >
      <div className={`item ${item.rarity}`}>
        <div className="p-1" onClick={handleClick}>
          <FontAwesomeIcon icon={items[item.icon]} width={64} height={128} />
        </div>

        <>
          {showExtendedDetails && (
            <ItemComponentDetails
              item={item}
              from={from}
              typeLayout="extended"
              showExtendedDetails={showExtendedDetails}
              handleClick={handleClick}
              BuyItem={BuyItem}
              SellItem={SellItem}
            />
          )}
        </>
      </div>
    </CustomPopover>
  );
};

export default ItemComponent;
