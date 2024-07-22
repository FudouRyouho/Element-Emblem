//src\client\components\saveGame\saveGameInterface.ts
import { UnitInterface } from "../Unit/UnitInterface";

export interface saveGameInterface {
    id: string;
    unit: UnitInterface[];
    difficulty: number;
}