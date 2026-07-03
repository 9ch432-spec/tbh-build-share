/**
 * TBH バフ/デバフデータ (v1.00.21)
 * Source: tbherohelper.com/database/buffs
 */
export interface BuffInfo {
  type: 'Buff' | 'Debuff';
  stat: string;
  statJa: string;
  modType: 'FLAT' | 'ADDITIVE' | 'MULTIPLICATIVE';
  value?: number;
  statusEffect?: string;
}

export const BUFFS: BuffInfo[] = [
  { type: 'Buff',   stat: 'AttackDamage',         statJa: '攻撃ダメージ',         modType: 'ADDITIVE',        value: 500 },
  { type: 'Buff',   stat: 'AttackSpeed',           statJa: '攻撃速度',             modType: 'ADDITIVE',        value: 500 },
  { type: 'Buff',   stat: 'AttackDamage',         statJa: '攻撃ダメージ',         modType: 'MULTIPLICATIVE' },
  { type: 'Buff',   stat: 'FireResistance',        statJa: '火耐性',               modType: 'FLAT' },
  { type: 'Buff',   stat: 'ColdResistance',        statJa: '冷気耐性',             modType: 'FLAT' },
  { type: 'Buff',   stat: 'LightningResistance',   statJa: '雷耐性',               modType: 'FLAT' },
  { type: 'Buff',   stat: 'AttackSpeed',           statJa: '攻撃速度',             modType: 'MULTIPLICATIVE',  value: 1000 },
  { type: 'Buff',   stat: 'CriticalChance',        statJa: 'クリティカル率',       modType: 'ADDITIVE',        value: 300 },
  { type: 'Buff',   stat: 'MovementSpeed',         statJa: '移動速度',             modType: 'MULTIPLICATIVE',  value: 200 },
  { type: 'Buff',   stat: 'AttackDamage',         statJa: '攻撃ダメージ',         modType: 'MULTIPLICATIVE',  value: 1000 },
  { type: 'Buff',   stat: 'AttackSpeed',           statJa: '攻撃速度',             modType: 'MULTIPLICATIVE',  value: 1000 },
  { type: 'Debuff', stat: 'AttackSpeed',           statJa: '攻撃速度',             modType: 'MULTIPLICATIVE',  value: 300,  statusEffect: 'Chill' },
  { type: 'Debuff', stat: 'MovementSpeed',         statJa: '移動速度',             modType: 'MULTIPLICATIVE',  value: 300,  statusEffect: 'Chill' },
  { type: 'Debuff', stat: 'FireDamageAddition',    statJa: '火ダメージ追加',       modType: 'FLAT',            value: 200,  statusEffect: 'Ignite' },
  { type: 'Debuff', stat: 'LightningDamageAddition',statJa: '雷ダメージ追加',      modType: 'FLAT',            value: 200,  statusEffect: 'Shock' },
  { type: 'Debuff', stat: 'PhysicalDamageAddition', statJa: '物理ダメージ追加',    modType: 'FLAT',            value: 200,  statusEffect: 'Bleed' },
  { type: 'Debuff', stat: 'DamageAddition',        statJa: 'ダメージ追加',         modType: 'FLAT',            value: 100,  statusEffect: 'Stun' },
  { type: 'Debuff', stat: 'FireResistance',        statJa: '火耐性',               modType: 'FLAT',            value: 20 },
  { type: 'Debuff', stat: 'ColdResistance',        statJa: '冷気耐性',             modType: 'FLAT',            value: 20 },
  { type: 'Debuff', stat: 'LightningResistance',   statJa: '雷耐性',               modType: 'FLAT',            value: 20 },
  { type: 'Debuff', stat: 'ChaosResistance',       statJa: 'カオス耐性',           modType: 'FLAT',            value: 20 },
  { type: 'Debuff', stat: 'FireResistance',        statJa: '火耐性',               modType: 'FLAT',            value: 40 },
  { type: 'Debuff', stat: 'ColdResistance',        statJa: '冷気耐性',             modType: 'FLAT',            value: 40 },
  { type: 'Debuff', stat: 'LightningResistance',   statJa: '雷耐性',               modType: 'FLAT',            value: 40 },
  { type: 'Debuff', stat: 'ChaosResistance',       statJa: 'カオス耐性',           modType: 'FLAT',            value: 40 },
  { type: 'Debuff', stat: 'FireResistance',        statJa: '火耐性',               modType: 'FLAT',            value: 60 },
  { type: 'Debuff', stat: 'ColdResistance',        statJa: '冷気耐性',             modType: 'FLAT',            value: 60 },
  { type: 'Debuff', stat: 'LightningResistance',   statJa: '雷耐性',               modType: 'FLAT',            value: 60 },
  { type: 'Debuff', stat: 'ChaosResistance',       statJa: 'カオス耐性',           modType: 'FLAT',            value: 60 },
];
