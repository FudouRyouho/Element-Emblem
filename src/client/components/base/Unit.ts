import { Stats } from "./Stats";
import { UnitType } from "./UnitType";

export interface Unit {
  id: string;
  name: string;
  stats: Stats[];
  type: UnitType[];
}
