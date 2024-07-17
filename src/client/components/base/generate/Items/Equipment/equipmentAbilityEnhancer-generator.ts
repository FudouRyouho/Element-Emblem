import { AbilityEnhancer } from "../../../Ability";
import {
  fireAbilityEnhancers,
  waterAbilityEnhancers,
  windAbilityEnhancers,
  earthAbilityEnhancers,
} from "./equipmentAbilityEnhancer-definitions";

export const generateAbilityEnhancers = (
  minStats: number,
  maxStats: number,
  elementType: string
): AbilityEnhancer[] => {
  let abilities: AbilityEnhancer[];
  switch (elementType) {
    case "fire":
      abilities = fireAbilityEnhancers;
      break;
    case "water":
      abilities = waterAbilityEnhancers;
      break;
    case "wind":
      abilities = windAbilityEnhancers;
      break;
    case "earth":
      abilities = earthAbilityEnhancers;
      break;
    default:
      throw new Error(`Unknown element type: ${elementType}`);
  }

  const numberOfEnhancers =
    Math.floor(Math.random() * (maxStats - minStats + 1)) + minStats;
  const shuffledEnhancers = abilities.sort(() => 0.5 - Math.random());
  return shuffledEnhancers.slice(0, numberOfEnhancers);
};
