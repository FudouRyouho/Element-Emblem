//src\modules\common\components\base\Equipment.ts
import { Stats, ElementalStats } from "./Stats";
import { UniqueAbility, AbilityEnhancer } from "./Ability";

export interface Equipment {
    id: string;
    name: string;
    type: string;
    stats: Stats;
    rarity: string;
    icon: string;
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