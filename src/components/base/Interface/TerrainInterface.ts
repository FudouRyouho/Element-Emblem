import { Position } from "./LogicAttributes";

export interface TerrainInterface {
  type: string;
  isSolid: boolean;
  position: Position[];
  destructible: boolean;
  effect?: string;
}
