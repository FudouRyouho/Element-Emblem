import { Consumables } from "../../../Consumables";

export const consumableGenerator = (rarity: string): Consumables => {
  const baseConsumables: Consumables = {
    itemType: "Consumables",
    id: `${Math.random().toString(36).substr(2, 9)}`,
    name: `Potion ${rarity}`,
    type: "Potion",
    effect: "Placeholder effect",
    rarity,
    description: "A generic consumable Potion.",
    icon: "potion",
  };

  switch (rarity) {
    case "common":
      return baseConsumables;
    case "uncommon":
      return baseConsumables;

    case "rare":
      return baseConsumables;

    case "magic":
      return baseConsumables;

    case "epic":
      return baseConsumables;

    case "legendary":
      return baseConsumables;

    case "mystic":
      return baseConsumables;

    case "divine":
      return baseConsumables;

    case "celestial":
      return baseConsumables;

    default:
      throw new Error(`Unknown rarity: ${rarity}`);
  }
};
