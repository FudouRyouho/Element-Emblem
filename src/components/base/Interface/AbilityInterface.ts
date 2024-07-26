//src\client\components\base\Ability.ts
export interface AbilityInterface {
  id: string;
  name: string;
  abilityIs: 'active' | 'passive'
  description: string;
  icon: string;

  cooldown?: number;
  duration?: number;
  Area?: number;
}
export interface AbilityEnhancerInterface {
  id: string;
  name: string;
  description: string;
  icon: string;
}

