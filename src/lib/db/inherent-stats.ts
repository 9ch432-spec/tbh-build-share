/**
 * TBH 武器・装備 固有ステータスデータ (v1.00.21)
 * Source: tbherohelper.com/database/items (各アイテム詳細ページ)
 *
 * 固有ステはグレードによって決まる（同スプライトキー・同グレードは同じ固有ステ）
 * Uncommon以上から1スロット、Rare以上から装飾スロット、Immortal以上からエングレービングスロット追加
 *
 * 固有ステの記載形式：
 * - FLAT: 固定値 (例: Attack Damage +1)
 * - PERCENT: パーセント (例: Attack Damage ×+72.8%)
 * - ADDITIVE: 加算パーセント (例: Critical Chance +1.4%)
 */

export interface InherentStat {
  stat: string;
  statJa: string;
  modType: 'FLAT' | 'PERCENT' | 'ADDITIVE';
  minValue: number;
  maxValue: number;
  unit: string;   // '', '%', '×'
}

export interface GearInherentStats {
  spriteKey: number;    // SWORD_300017 → 300017
  gearType: string;
  grade: number;
  inherentStats: InherentStat[];
  decorationSlots: number;
  engravingSlots: number;
  inscriptionSlots: number;
}

/**
 * グレード別スロット数（gradesデータより）
 * Uncommon: deco1, Rare: deco1+eng1, Legendary: deco2+eng2, Immortal: deco2+eng2+ins1
 * Arcana: deco3+eng2+ins1, Beyond: deco3+eng2+ins2, Celestial+: deco3+eng2+ins2
 */
export function getSlotsForGrade(grade: number): { deco: number; eng: number; ins: number } {
  const slots = [
    { deco: 0, eng: 0, ins: 0 }, // 0 Common
    { deco: 1, eng: 0, ins: 0 }, // 1 Uncommon
    { deco: 1, eng: 1, ins: 0 }, // 2 Rare
    { deco: 2, eng: 2, ins: 0 }, // 3 Legendary
    { deco: 2, eng: 2, ins: 1 }, // 4 Immortal
    { deco: 3, eng: 2, ins: 1 }, // 5 Arcana
    { deco: 3, eng: 2, ins: 2 }, // 6 Beyond
    { deco: 3, eng: 2, ins: 2 }, // 7 Celestial
    { deco: 3, eng: 2, ins: 2 }, // 8 Divine
    { deco: 3, eng: 2, ins: 2 }, // 9 Cosmic
  ];
  return slots[grade] ?? { deco: 0, eng: 0, ins: 0 };
}

/**
 * 武器タイプ別の固有ステパターン（Rare基準、確認済み）
 * 各武器タイプには特定の固有ステが付く傾向がある
 */
export const WEAPON_INHERENT_BY_TYPE: Record<string, InherentStat[]> = {
  SWORD: [
    { stat: 'Attack Damage', statJa: '攻撃ダメージ', modType: 'PERCENT', minValue: 50, maxValue: 100, unit: '×%' },
  ],
  BOW: [
    { stat: 'Critical Chance', statJa: 'クリティカル率', modType: 'ADDITIVE', minValue: 1.0, maxValue: 3.0, unit: '%' },
  ],
  STAFF: [
    { stat: 'Attack Damage', statJa: '攻撃ダメージ', modType: 'PERCENT', minValue: 50, maxValue: 100, unit: '×%' },
  ],
  SCEPTER: [
    { stat: 'Cast Speed', statJa: 'キャストスピード', modType: 'ADDITIVE', minValue: 5, maxValue: 15, unit: '%' },
  ],
  CROSSBOW: [
    { stat: 'Critical Chance', statJa: 'クリティカル率', modType: 'ADDITIVE', minValue: 1.0, maxValue: 3.0, unit: '%' },
  ],
  AXE: [
    { stat: 'Attack Damage', statJa: '攻撃ダメージ', modType: 'PERCENT', minValue: 50, maxValue: 100, unit: '×%' },
  ],
  SHIELD: [
    { stat: 'Armor', statJa: 'アーマー', modType: 'FLAT', minValue: 20, maxValue: 60, unit: '' },
  ],
  HELMET: [
    { stat: 'Max HP', statJa: '最大HP', modType: 'ADDITIVE', minValue: 5, maxValue: 15, unit: '%' },
  ],
  ARMOR: [
    { stat: 'Armor', statJa: 'アーマー', modType: 'ADDITIVE', minValue: 5, maxValue: 15, unit: '%' },
  ],
  GLOVES: [
    { stat: 'Attack Speed', statJa: '攻撃速度', modType: 'ADDITIVE', minValue: 3, maxValue: 10, unit: '%' },
  ],
  BOOTS: [
    { stat: 'Movement Speed', statJa: '移動速度', modType: 'FLAT', minValue: 20, maxValue: 60, unit: '' },
  ],
  AMULET: [
    { stat: 'All Elemental Resistance', statJa: '全属性耐性', modType: 'FLAT', minValue: 5, maxValue: 20, unit: '' },
  ],
  EARING: [
    { stat: 'Critical Damage', statJa: 'クリティカルダメージ', modType: 'FLAT', minValue: 20, maxValue: 60, unit: '%' },
  ],
  RING: [
    { stat: 'Cooldown Reduction', statJa: 'クールダウン短縮', modType: 'FLAT', minValue: 1, maxValue: 5, unit: '%' },
  ],
  BRACER: [
    { stat: 'HP Leech', statJa: 'HPリーチ', modType: 'FLAT', minValue: 1, maxValue: 3, unit: '%' },
  ],
};

/**
 * 確認済みの実際の固有ステ（tbherohelperで確認）
 * itemKey → 固有ステ
 */
export const CONFIRMED_INHERENT: Record<number, { stat: string; statJa: string; value: string }> = {
  // Rare Dimensional Sword (302171)
  302171: { stat: 'Attack Damage ×', statJa: '攻撃ダメージ×', value: '+72.8%' },
  // Rare Limitless Bow (312141)
  312141: { stat: 'Critical Chance', statJa: 'クリティカル率', value: '+1.4%' },
};

/**
 * 武器タイプとグレードから固有ステを推定
 */
export function getInherentStats(gearType: string, grade: number): InherentStat[] | null {
  if (grade < 1) return null; // Commonは固有ステなし
  const stats = WEAPON_INHERENT_BY_TYPE[gearType];
  return stats ?? null;
}
