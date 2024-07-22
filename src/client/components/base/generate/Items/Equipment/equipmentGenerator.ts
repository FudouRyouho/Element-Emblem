//src\client\components\base\generate\Items\Equipment\equipmentGenerator.ts
import {
  EquipmentInterface,
} from "../../../Interface/EquipmentInterface";

import {
  generateStats,
  generateElementalStats,
} from "./equipmentStats-generator";
import { generateUniqueAbilities } from "./equipmentUniqueAbility-generator";
import { generateAbilityEnhancers } from "./equipmentAbilityEnhancer-generator";
import { getRandomEquipmentType } from "./equipmentTypes";

const elements = ["fire", "water", "wind", "earth"];

export const equipmentGenerator = (rarity: string): EquipmentInterface => {
  const elementType = elements[Math.floor(Math.random() * elements.length)];
  const { type, icon } = getRandomEquipmentType();
  const baseEquipment: EquipmentInterface = {
    itemType: "Equipment",
    id: Math.random().toString(36).substr(2, 9),
    name: `${type} ${rarity}`,
    type: type,
    stats: generateStats(1, 2),
    rarity,
    icon: icon,
  };

  switch (rarity) {
    case "common":
      return baseEquipment;

    case "uncommon":
      return {
        ...baseEquipment,
        stats: generateStats(2, 3),
      };

    case "rare":
      return {
        ...baseEquipment,
        stats: generateStats(2, 4),
      };

    case "magic":
      return {
        ...baseEquipment,
        stats: generateStats(3, 4),
        elementalStats: generateElementalStats(1, 1, elementType),
        uniqueAbilities: generateUniqueAbilities(1, 2, elementType),
      };

    case "epic":
      return {
        ...baseEquipment,
        stats: generateStats(4, 5),
        elementalStats: generateElementalStats(1, 2, elementType),
        uniqueAbilities: generateUniqueAbilities(2, 2, elementType),
      }

    case "legendary":
      return {
        ...baseEquipment,
        stats: generateStats(5, 5),
        elementalStats: generateElementalStats(2, 2, elementType),
        uniqueAbilities: generateUniqueAbilities(2, 2, elementType),
      };

    case "mystic":
      return {
        ...baseEquipment,
        stats: generateStats(5, 6),
        elementalStats: generateElementalStats(2, 3, elementType),
        uniqueAbilities: generateUniqueAbilities(3, 3, elementType),
        abilityEnhancers: generateAbilityEnhancers(1, 1, elementType),
      };

    case "divine":
      return {
        ...baseEquipment,
        stats: generateStats(6, 6),
        elementalStats: generateElementalStats(3, 3, elementType),
        uniqueAbilities: generateUniqueAbilities(3, 3, elementType),
        abilityEnhancers: generateAbilityEnhancers(1, 2, elementType),
      };

    case "celestial":
      return {
        ...baseEquipment,
        stats: generateStats(7, 7),
        elementalStats: generateElementalStats(4, 4, elementType),
        uniqueAbilities: generateUniqueAbilities(4, 4, elementType),
        abilityEnhancers: generateAbilityEnhancers(2, 2, elementType),
      };

    default:
      throw new Error(`Unknown rarity: ${rarity}`);
  }
};
