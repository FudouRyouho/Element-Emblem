//src\modules\common\components\base\generate\equipmentStats-generator.ts
import { Stats, ElementalStats } from "../../../../Unit/Stats";

export interface StatDefinition {
  key: keyof Stats;
  calculate: () => number;
}

export const statDefinitions: StatDefinition[] = [
  { key: "attack", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "attackPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "attackSpeed", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "attackSpeedPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "defense", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "defensePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "health", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "healthPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "criticalHit", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "criticalHitPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  {
    key: "criticalHitChance",
    calculate: () => Math.floor(Math.random() * 10) + 1,
  },
  {
    key: "criticalHitChancePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "evasion", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "evasionPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "damageBlock", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "damageBlockPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  {
    key: "armorPenetration",
    calculate: () => Math.floor(Math.random() * 10) + 1,
  },
  {
    key: "armorPenetrationPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  {
    key: "healthRegeneration",
    calculate: () => Math.floor(Math.random() * 10) + 1,
  },
  {
    key: "healthRegenerationPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "movementSpeed", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "movementSpeedPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
];

export interface ElementalStatsDefinition {
  key: keyof ElementalStats;
  calculate: () => number;
}

export const fireStatsDefinition: ElementalStatsDefinition[] = [
  { key: "fireAttack", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "fireAttackPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "fireDefense", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "fireDefensePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
];
export const waterStatsDefinition: ElementalStatsDefinition[] = [
  { key: "waterAttack", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "waterAttackPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "waterDefense", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "waterDefensePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
];
export const windStatsDefinition: ElementalStatsDefinition[] = [
  { key: "windAttack", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "windAttackPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "windDefense", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "windDefensePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
];
export const earthStatsDefinition: ElementalStatsDefinition[] = [
  { key: "earthAttack", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "earthAttackPercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
  { key: "earthDefense", calculate: () => Math.floor(Math.random() * 10) + 1 },
  {
    key: "earthDefensePercentage",
    calculate: () => Math.floor(Math.random() * 5) + 1,
  },
];
