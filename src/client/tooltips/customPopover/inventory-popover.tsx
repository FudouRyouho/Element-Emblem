//F:\Development\web\Game\RPG\Element rpg\src\modules\tooltips\customPopover\inventory-popover.tsx
import React from "react";
import { ItemsInterface } from "../../components/base/Interface/ItemsInterface";
import { ItemComponentDetails } from "../../inventory/utils/itemComponent.details";
interface IProps {
  item: ItemsInterface;
}

const InventoryPopover: React.FC<IProps> = ({ item }) => {
  return <ItemComponentDetails item={item} type="extended" popover />;
};

export default InventoryPopover;
