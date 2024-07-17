// equipmentUniqueAbility-generator.ts
import { Ability } from "../../../Ability";
import {
  fireAbilities,
  waterAbilities,
  windAbilities,
  earthAbilities,
} from "./equipmentUniqueAbility-definitions";

export const generateUniqueAbilities = (
  minStats: number,
  maxStats: number,
  elementType: string
): (Ability)[] => {
  let abilities: (Ability)[];

  switch (elementType) {
    case "fire":
      abilities = fireAbilities;
      break;
    case "water":
      abilities = waterAbilities;
      break;
    case "wind":
      abilities = windAbilities;
      break;
    case "earth":
      abilities = earthAbilities;
      break;
    default:
      throw new Error(`Unknown element type: ${elementType}`);
  }

  const numberOfAbilities =
    Math.floor(Math.random() * (maxStats - minStats + 1)) + minStats;
  const shuffledAbilities = abilities.sort(() => 0.5 - Math.random());
  return shuffledAbilities.slice(0, numberOfAbilities);
};
