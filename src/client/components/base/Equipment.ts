//src\modules\common\components\base\Equipment.ts
import { Stats, ElementalStats } from "./Stats";
import { UniqueAbility, AbilityEnhancer } from "./Ability";
import { Items } from "./generate/Items/items";

export interface Equipment extends Items {
    itemType: 'Equipment';
    stats: Stats;
    elementalStats?: ElementalStats;
  uniqueAbilities?: UniqueAbility[];
  abilityEnhancers?: AbilityEnhancer[];
}
export interface CommonEquipment extends Equipment {
    stats: Stats;
}

export interface UncommonEquipment extends Equipment {
    stats: Stats;
}

export interface RareEquipment extends Equipment {
    stats: Stats;
}

export interface MagicEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
}

export interface EpicEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
}

export interface LegendaryEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
}

export interface MysticEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
    abilityEnhancers: AbilityEnhancer[];
}

export interface DivineEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
    abilityEnhancers: AbilityEnhancer[];
}

export interface CelestialEquipment extends Equipment {
    stats: Stats;
    elementalStats: ElementalStats;
    uniqueAbilities: UniqueAbility[];
    abilityEnhancers: AbilityEnhancer[];
}

export const isEquipment = (item: Items): item is Equipment => item.itemType === 'Equipment';