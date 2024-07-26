import { UnitInterface } from "../../../Unit/UnitInterface";
import { Stats } from "../../../Unit/Stats";
import { UnitTypeInterface } from "../../Interface/UnitTypeInterface";
import { initialInventoryState } from "../../../../inventory/state/inventory.state";

const inventoryPlayer = initialInventoryState.inventories['Player']
export const unitGenerator = (name: string, playable: boolean): UnitInterface => {
  const statsMap: Stats[] = [{ attack: 10 }];
  const typeUnit: UnitTypeInterface[] = [{ playable: playable }];

  const baseUnit: UnitInterface = {
    id: Math.random().toString(36).substr(2, 9),
    name: name,
    stats: statsMap,
    type: typeUnit,
    inventory : inventoryPlayer
  };
  return baseUnit;
};
