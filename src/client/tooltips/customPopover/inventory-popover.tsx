//F:\Development\web\Game\RPG\Element rpg\src\modules\tooltips\customPopover\inventory-popover.tsx
import React from "react";
import { Equipment } from "../../../client/components/base/Equipment";
import { UI, items, Stats } from "../../../client/components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Items } from "../../components/base/generate/Items/items";
import { ItemComponentDetails } from "../../inventory/utils/itemComponent.details";
interface IProps {
  item: Items;
}

const InventoryPopover: React.FC<IProps> = ({ item }) => {
  return <ItemComponentDetails item={item} type="extended" popover />;
};

export default InventoryPopover;
