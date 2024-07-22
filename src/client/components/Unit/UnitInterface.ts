import { Stats } from "./Stats";
import { UnitTypeInterface } from "../base/Interface/UnitTypeInterface";
import { InventoryInterface } from "./InventoryInterface";

export interface UnitInterface {
  id: string;
  name: string;
  stats: Stats[];
  type: UnitTypeInterface[];
  inventory: InventoryInterface
}
