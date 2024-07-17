import { Position } from "./LogicAttributes";

export interface Terrain {
  type: string;
  isSolid: boolean;
  position: Position[];
  destructible: boolean;
  effect?: string;
}
