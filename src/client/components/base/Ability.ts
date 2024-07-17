//src\client\components\base\Ability.ts
export interface Ability {
  id: string;
  name: string;
  abilityIs: 'active' | 'passive'
  description: string;
  icon: string;

  cooldown?: number;
  duration?: number;
  Area?: number;
}
export interface AbilityEnhancer {
  id: string;
  name: string;
  description: string;
  icon: string;
}

