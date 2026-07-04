/**
 * TBH オファリング（ガチャコイン）データ (v1.00.21)
 * Source: tbherohelper.com/database/offering
 * キューブLv20でアンロック
 */

export interface OfferingCoin {
  key: number;
  name: string;
  nameJa: string;
  tier: number;
  cost: number;          // ゴールドコスト
  baseGrade: string;     // 最低保証グレード
  imageUrl: string;
  odds: OfferingOdds[];
}

export interface OfferingOdds {
  grade: string;
  gradeJa: string;
  chance: number;        // %
  alchemyGold: number;   // そのグレードの錬金ゴールド
}

const SPRITE = 'https://tbherohelper.com/sprites';

export const OFFERING_COINS: OfferingCoin[] = [
  {
    key: 160001, tier: 1, name: 'Kingdom 1st Anniversary Coin', nameJa: '王国建国1周年記念コイン',
    cost: 10, baseGrade: 'COMMON', imageUrl: `${SPRITE}/Item_160001.png`,
    odds: [
      { grade: 'COMMON',    gradeJa: 'コモン',       chance: 2.44,  alchemyGold: 10 },
      { grade: 'UNCOMMON',  gradeJa: 'アンコモン',   chance: 12.39, alchemyGold: 30 },
      { grade: 'RARE',      gradeJa: 'レア',         chance: 28.40, alchemyGold: 90 },
      { grade: 'LEGENDARY', gradeJa: 'レジェンダリー',chance: 35.48, alchemyGold: 270 },
      { grade: 'IMMORTAL',  gradeJa: 'イモータル',   chance: 21.29, alchemyGold: 810 },
    ],
  },
  {
    key: 160002, tier: 2, name: 'Empire 1st Anniversary Coin', nameJa: '帝国建国1周年記念コイン',
    cost: 110, baseGrade: 'UNCOMMON', imageUrl: `${SPRITE}/Item_160002.png`,
    odds: [
      { grade: 'UNCOMMON',  gradeJa: 'アンコモン',    chance: 9.53,  alchemyGold: 30 },
      { grade: 'RARE',      gradeJa: 'レア',          chance: 23.35, alchemyGold: 90 },
      { grade: 'LEGENDARY', gradeJa: 'レジェンダリー', chance: 31.28, alchemyGold: 270 },
      { grade: 'IMMORTAL',  gradeJa: 'イモータル',    chance: 23.46, alchemyGold: 810 },
      { grade: 'ARCANA',    gradeJa: 'アルカナ',      chance: 11.73, alchemyGold: 2592 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 0.65,  alchemyGold: 29029 },
    ],
  },
  {
    key: 160003, tier: 3, name: 'Kingdom 10th Anniversary Coin', nameJa: '王国10周年記念コイン',
    cost: 210, baseGrade: 'RARE', imageUrl: `${SPRITE}/Item_160003.png`,
    odds: [
      { grade: 'UNCOMMON',  gradeJa: 'アンコモン',    chance: 2.66,  alchemyGold: 30 },
      { grade: 'RARE',      gradeJa: 'レア',          chance: 14.40, alchemyGold: 90 },
      { grade: 'LEGENDARY', gradeJa: 'レジェンダリー', chance: 28.34, alchemyGold: 270 },
      { grade: 'IMMORTAL',  gradeJa: 'イモータル',    chance: 28.34, alchemyGold: 810 },
      { grade: 'ARCANA',    gradeJa: 'アルカナ',      chance: 17.00, alchemyGold: 2592 },
      { grade: 'BEYOND',    gradeJa: 'ビヨンド',      chance: 6.61,  alchemyGold: 8294 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 2.66,  alchemyGold: 29029 },
    ],
  },
  {
    key: 160004, tier: 4, name: 'Empire 10th Anniversary Coin', nameJa: '帝国建国10周年記念コイン',
    cost: 310, baseGrade: 'LEGENDARY', imageUrl: `${SPRITE}/Item_160004.png`,
    odds: [
      { grade: 'UNCOMMON',  gradeJa: 'アンコモン',    chance: 1.67,  alchemyGold: 30 },
      { grade: 'LEGENDARY', gradeJa: 'レジェンダリー', chance: 17.21, alchemyGold: 270 },
      { grade: 'IMMORTAL',  gradeJa: 'イモータル',    chance: 30.60, alchemyGold: 810 },
      { grade: 'ARCANA',    gradeJa: 'アルカナ',      chance: 26.77, alchemyGold: 2592 },
      { grade: 'BEYOND',    gradeJa: 'ビヨンド',      chance: 14.34, alchemyGold: 8294 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 9.40,  alchemyGold: 29029 },
    ],
  },
  {
    key: 160005, tier: 5, name: 'Kingdom 50th Anniversary Coin', nameJa: '王国50周年記念コイン',
    cost: 410, baseGrade: 'IMMORTAL', imageUrl: `${SPRITE}/Item_160005.png`,
    odds: [
      { grade: 'IMMORTAL',  gradeJa: 'イモータル',    chance: 20.61, alchemyGold: 810 },
      { grade: 'ARCANA',    gradeJa: 'アルカナ',      chance: 29.98, alchemyGold: 2592 },
      { grade: 'BEYOND',    gradeJa: 'ビヨンド',      chance: 26.23, alchemyGold: 8294 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 20.05, alchemyGold: 29029 },
      { grade: 'DIVINE',    gradeJa: 'ディバイン',    chance: 3.12,  alchemyGold: 101602 },
    ],
  },
  {
    key: 160006, tier: 6, name: 'Empire 50th Anniversary Coin', nameJa: '帝国建国50周年記念コイン',
    cost: 510, baseGrade: 'ARCANA', imageUrl: `${SPRITE}/Item_160006.png`,
    odds: [
      { grade: 'ARCANA',    gradeJa: 'アルカナ',      chance: 41.93, alchemyGold: 2592 },
      { grade: 'BEYOND',    gradeJa: 'ビヨンド',      chance: 25.16, alchemyGold: 8294 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 29.02, alchemyGold: 29029 },
      { grade: 'DIVINE',    gradeJa: 'ディバイン',    chance: 3.34,  alchemyGold: 101602 },
      { grade: 'COSMIC',    gradeJa: 'コズミック',    chance: 0.55,  alchemyGold: 355607 },
    ],
  },
  {
    key: 160007, tier: 7, name: 'Kingdom 100th Anniversary Coin', nameJa: '王国100周年記念コイン',
    cost: 610, baseGrade: 'BEYOND', imageUrl: `${SPRITE}/Item_160007.png`,
    odds: [
      { grade: 'BEYOND',    gradeJa: 'ビヨンド',      chance: 50.50, alchemyGold: 8294 },
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 40.01, alchemyGold: 29029 },
      { grade: 'DIVINE',    gradeJa: 'ディバイン',    chance: 8.38,  alchemyGold: 101602 },
      { grade: 'COSMIC',    gradeJa: 'コズミック',    chance: 1.11,  alchemyGold: 355607 },
    ],
  },
  {
    key: 160008, tier: 8, name: 'Empire 100th Anniversary Coin', nameJa: '帝国百周年記念コイン',
    cost: 710, baseGrade: 'CELESTIAL', imageUrl: `${SPRITE}/Item_160008.png`,
    odds: [
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 79.76, alchemyGold: 29029 },
      { grade: 'DIVINE',    gradeJa: 'ディバイン',    chance: 17.37, alchemyGold: 101602 },
      { grade: 'COSMIC',    gradeJa: 'コズミック',    chance: 2.88,  alchemyGold: 355607 },
    ],
  },
  {
    key: 160009, tier: 9, name: 'Sacred Kingdom 1000th Anniversary Coin', nameJa: '神聖王国1000周年記念コイン',
    cost: 810, baseGrade: 'DIVINE', imageUrl: `${SPRITE}/Item_160009.png`,
    odds: [
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 14.86, alchemyGold: 29029 },
      { grade: 'DIVINE',    gradeJa: 'ディバイン',    chance: 79.31, alchemyGold: 101602 },
      { grade: 'COSMIC',    gradeJa: 'コズミック',    chance: 5.84,  alchemyGold: 355607 },
    ],
  },
  {
    key: 160010, tier: 10, name: 'Eternal Empire 1000th Anniversary Coin', nameJa: '永遠帝国1000周年記念コイン',
    cost: 910, baseGrade: 'COSMIC', imageUrl: `${SPRITE}/Item_160010.png`,
    odds: [
      { grade: 'CELESTIAL', gradeJa: 'セレスティアル', chance: 18.35, alchemyGold: 29029 },
      { grade: 'COSMIC',    gradeJa: 'コズミック',    chance: 81.65, alchemyGold: 355607 },
    ],
  },
];
