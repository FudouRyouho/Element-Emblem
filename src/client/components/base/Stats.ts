//src\modules\common\components\base\Stats.ts
export interface Stats {
  attack?: number;//done
  attackPercentage?: number;
  attackSpeed?: number;//done
  attackSpeedPercentage?: number;
  defense?: number;//done
  defensePercentage?: number;
  health?: number;//done
  healthPercentage?: number;
  criticalHit?: number;//done
  criticalHitPercentage?: number;
  criticalHitChance?: number;//done
  criticalHitChancePercentage?: number;
  evasion?: number;//done
  evasionPercentage?: number;
  damageBlock?: number;//done
  damageBlockPercentage?: number;
  armorPenetration?: number;//done
  armorPenetrationPercentage?: number;
  healthRegeneration?: number;//done
  healthRegenerationPercentage?: number;
  movementSpeed?: number;//done
  movementSpeedPercentage?: number;
}

export interface ElementalStats {
  fireAttack?: number;
  fireAttackPercentage?: number;
  fireDefense?: number;
  fireDefensePercentage?: number;
  waterAttack?: number;
  waterAttackPercentage?: number;
  waterDefense?: number;
  waterDefensePercentage?: number;
  windAttack?: number;
  windAttackPercentage?: number;
  windDefense?: number;
  windDefensePercentage?: number;
  earthAttack?: number;
  earthAttackPercentage?: number;
  earthDefense?: number;
  earthDefensePercentage?: number;

}