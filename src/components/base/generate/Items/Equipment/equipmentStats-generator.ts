//src\modules\common\components\base\generate\equipmentStats-generator.ts
import { Stats, ElementalStats } from "../../../../Unit/Stats";
import {
  statDefinitions,
  ElementalStatsDefinition,
  fireStatsDefinition,
  waterStatsDefinition,
  windStatsDefinition,
  earthStatsDefinition,
} from "./equipmentStats-definitions";

export const generateStats = (minStats: number, maxStats: number): Stats => {
  const numberOfStats =
    Math.floor(Math.random() * (maxStats - minStats + 1)) + minStats;
  const selectedStats = statDefinitions
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfStats);

  const stats: Stats = {};
  selectedStats.forEach((stat) => {
    stats[stat.key] = stat.calculate();
  });

  return stats;
};

export const generateElementalStats = (
  minStats: number,
  maxStats: number,
  elementType: string
): ElementalStats => {
  let elementalStatsDefinition: ElementalStatsDefinition[];

  switch (elementType) {
    case "fire":
      elementalStatsDefinition = fireStatsDefinition;
      break;
    case "water":
      elementalStatsDefinition = waterStatsDefinition;
      break;
    case "wind":
      elementalStatsDefinition = windStatsDefinition;
      break;
    case "earth":
      elementalStatsDefinition = earthStatsDefinition;
      break;
    default:
      throw new Error(`Unknown element type: ${elementType}`);
  }

  const numberOfStats =
    Math.floor(Math.random() * (maxStats - minStats + 1)) + minStats;
  const selectedStats = elementalStatsDefinition
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfStats);

  const elementalstats: ElementalStats = {};
  selectedStats.forEach((stat) => {
    elementalstats[stat.key] = stat.calculate();
  });

  return elementalstats;
};
