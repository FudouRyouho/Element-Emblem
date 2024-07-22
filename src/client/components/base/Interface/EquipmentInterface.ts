//src\modules\common\components\base\Equipment.ts
import { Stats, ElementalStats } from "../../Unit/Stats";
import { AbilityInterface, AbilityEnhancerInterface } from "./AbilityInterface";
import { ItemsInterface } from "./ItemsInterface";

export interface EquipmentInterface extends ItemsInterface {
  itemType: "Equipment";
  stats: Stats;
  elementalStats?: ElementalStats;
  uniqueAbilities?: AbilityInterface[];
  abilityEnhancers?: AbilityEnhancerInterface[];
}

export const isEquipment = (item: ItemsInterface): item is EquipmentInterface =>
  item.itemType === "Equipment";
