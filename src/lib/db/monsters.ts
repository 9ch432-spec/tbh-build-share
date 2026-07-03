/**
 * TBH モンスターデータ (v1.00.21)
 * Source: tbherohelper.com/database/monsters
 */
export interface MonsterInfo {
  id: string;
  name: string;
  nameJa: string;
  type: 'MONSTER';
  element: string;
  hp: number;
  atk: number;
  moveSpd: number;
  expReward: number;
  isBoss: boolean;
}

export const MONSTERS: MonsterInfo[] = [
  { id: 'archon-morkar',           name: 'Archon Morkar',           nameJa: 'アーコン・モルカー',      type: 'MONSTER', element: 'Chaos',    hp: 2550, atk: 70, moveSpd: 130, expReward: 500, isBoss: true },
  { id: 'bat',                     name: 'Bat',                     nameJa: 'バット',                type: 'MONSTER', element: 'Physical', hp: 15,   atk: 10, moveSpd: 90,  expReward: 10,  isBoss: false },
  { id: 'blood-priest',            name: 'Blood Priest',            nameJa: 'ブラッドプリースト',      type: 'MONSTER', element: 'Chaos',    hp: 125,  atk: 16, moveSpd: 65,  expReward: 35,  isBoss: false },
  { id: 'burning-hell-priest',     name: 'Burning Hell Priest',     nameJa: 'バーニングヘルプリースト', type: 'MONSTER', element: 'Fire',     hp: 95,   atk: 30, moveSpd: 100, expReward: 30,  isBoss: false },
  { id: 'burning-piglet',          name: 'Burning Piglet',          nameJa: 'バーニングピグレット',    type: 'MONSTER', element: 'Physical', hp: 110,  atk: 30, moveSpd: 80,  expReward: 30,  isBoss: false },
  { id: 'chaos-hell-priest',       name: 'Chaos Hell Priest',       nameJa: 'カオスヘルプリースト',    type: 'MONSTER', element: 'Chaos',    hp: 75,   atk: 30, moveSpd: 100, expReward: 30,  isBoss: false },
  { id: 'cobra',                   name: 'Cobra',                   nameJa: 'コブラ',                type: 'MONSTER', element: 'Physical', hp: 55,   atk: 18, moveSpd: 115, expReward: 15,  isBoss: true },
  { id: 'demon-legion-commander',  name: 'Demon Legion Commander',  nameJa: 'デーモン軍団長',          type: 'MONSTER', element: 'Fire',     hp: 45,   atk: 20, moveSpd: 80,  expReward: 10,  isBoss: false },
  { id: 'demon-shocktrooper',      name: 'Demon Shocktrooper',      nameJa: 'デーモン突撃兵',          type: 'MONSTER', element: 'Physical', hp: 90,   atk: 20, moveSpd: 80,  expReward: 30,  isBoss: false },
  { id: 'demon-soldier',           name: 'Demon Soldier',           nameJa: 'デーモン兵士',            type: 'MONSTER', element: 'Physical', hp: 70,   atk: 20, moveSpd: 80,  expReward: 10,  isBoss: false },
  { id: 'desert-overlord',         name: 'Desert Overlord',         nameJa: 'デザートオーバーロード',   type: 'MONSTER', element: 'Physical', hp: 1850, atk: 80, moveSpd: 170, expReward: 500, isBoss: true },
  { id: 'dragon-hatchling',        name: 'Dragon Hatchling',        nameJa: 'ドラゴンの雛',            type: 'MONSTER', element: 'Fire',     hp: 175,  atk: 30, moveSpd: 70,  expReward: 10,  isBoss: false },
  { id: 'electric-hell-priest',    name: 'Electric Hell Priest',    nameJa: '電撃ヘルプリースト',      type: 'MONSTER', element: 'Lightning',hp: 95,   atk: 30, moveSpd: 100, expReward: 30,  isBoss: false },
  { id: 'elite-orc',               name: 'Elite Orc',               nameJa: 'エリートオーク',          type: 'MONSTER', element: 'Physical', hp: 185,  atk: 17, moveSpd: 65,  expReward: 35,  isBoss: true },
  { id: 'fallen-angels-helm',      name: "Fallen Angel's Helm",     nameJa: '堕天使の兜',              type: 'MONSTER', element: 'Physical', hp: 40,   atk: 25, moveSpd: 110, expReward: 15,  isBoss: false },
  { id: 'finger-of-death',         name: 'Finger of Death',         nameJa: '死の指',                  type: 'MONSTER', element: 'Physical', hp: 65,   atk: 25, moveSpd: 160, expReward: 30,  isBoss: false },
  { id: 'fire-elemental',          name: 'Fire Elemental',          nameJa: 'ファイアエレメンタル',    type: 'MONSTER', element: 'Fire',     hp: 75,   atk: 25, moveSpd: 80,  expReward: 23,  isBoss: false },
  { id: 'frozen-hell-priest',      name: 'Frozen Hell Priest',      nameJa: '凍結ヘルプリースト',      type: 'MONSTER', element: 'Cold',     hp: 95,   atk: 30, moveSpd: 100, expReward: 30,  isBoss: false },
  { id: 'geonid',                  name: 'Geonid',                  nameJa: 'ジオニッド',              type: 'MONSTER', element: 'Physical', hp: 50,   atk: 15, moveSpd: 90,  expReward: 12,  isBoss: false },
  { id: 'ghost',                   name: 'Ghost',                   nameJa: 'ゴースト',                type: 'MONSTER', element: 'Physical', hp: 65,   atk: 10, moveSpd: 180, expReward: 15,  isBoss: false },
  { id: 'ghoul',                   name: 'Ghoul',                   nameJa: 'グール',                  type: 'MONSTER', element: 'Physical', hp: 225,  atk: 20, moveSpd: 60,  expReward: 45,  isBoss: true },
  { id: 'giant-fly',               name: 'Giant Fly',               nameJa: '巨大ハエ',                type: 'MONSTER', element: 'Physical', hp: 45,   atk: 20, moveSpd: 120, expReward: 11,  isBoss: false },
  { id: 'goblin',                  name: 'Goblin',                  nameJa: 'ゴブリン',                type: 'MONSTER', element: 'Physical', hp: 35,   atk: 15, moveSpd: 50,  expReward: 12,  isBoss: false },
  { id: 'goblin-shaman',           name: 'Goblin Shaman',           nameJa: 'ゴブリンシャーマン',      type: 'MONSTER', element: 'Fire',     hp: 30,   atk: 18, moveSpd: 70,  expReward: 20,  isBoss: true },
  { id: 'goblin-thief',            name: 'Goblin Thief',            nameJa: 'ゴブリン盗賊',            type: 'MONSTER', element: 'Physical', hp: 45,   atk: 10, moveSpd: 110, expReward: 15,  isBoss: true },
  { id: 'gremlin',                 name: 'Gremlin',                 nameJa: 'グレムリン',              type: 'MONSTER', element: 'Physical', hp: 70,   atk: 10, moveSpd: 60,  expReward: 10,  isBoss: false },
  { id: 'hell-golem',              name: 'Hell Golem',              nameJa: 'ヘルゴーレム',            type: 'MONSTER', element: 'Fire',     hp: 185,  atk: 40, moveSpd: 60,  expReward: 30,  isBoss: false },
  { id: 'homunculus',              name: 'Homunculus',              nameJa: 'ホムンクルス',            type: 'MONSTER', element: 'Physical', hp: 115,  atk: 16, moveSpd: 80,  expReward: 13,  isBoss: true },
  { id: 'kobold-guard',            name: 'Kobold Guard',            nameJa: 'コボルドガード',          type: 'MONSTER', element: 'Physical', hp: 90,   atk: 20, moveSpd: 80,  expReward: 17,  isBoss: true },
  { id: 'kobold-slinger',          name: 'Kobold Slinger',          nameJa: 'コボルド投石兵',          type: 'MONSTER', element: 'Physical', hp: 80,   atk: 23, moveSpd: 110, expReward: 14,  isBoss: false },
  { id: 'lava-being',              name: 'Lava Being',              nameJa: 'ラヴァビーイング',        type: 'MONSTER', element: 'Fire',     hp: 75,   atk: 20, moveSpd: 75,  expReward: 20,  isBoss: false },
  { id: 'mummy',                   name: 'Mummy',                   nameJa: 'ミイラ',                  type: 'MONSTER', element: 'Physical', hp: 260,  atk: 17, moveSpd: 80,  expReward: 30,  isBoss: true },
  { id: 'orc',                     name: 'Orc',                     nameJa: 'オーク',                  type: 'MONSTER', element: 'Physical', hp: 65,   atk: 14, moveSpd: 80,  expReward: 15,  isBoss: true },
  { id: 'orc-warrior',             name: 'Orc Warrior',             nameJa: 'オーク戦士',              type: 'MONSTER', element: 'Physical', hp: 95,   atk: 16, moveSpd: 75,  expReward: 20,  isBoss: true },
  { id: 'plague-rat',              name: 'Plague Rat',              nameJa: 'ペストラット',            type: 'MONSTER', element: 'Physical', hp: 110,  atk: 20, moveSpd: 70,  expReward: 20,  isBoss: true },
  { id: 'ratfolk-archer',          name: 'Ratfolk Archer',          nameJa: 'ラットフォーク弓兵',      type: 'MONSTER', element: 'Physical', hp: 45,   atk: 10, moveSpd: 110, expReward: 15,  isBoss: false },
  { id: 'ratfolk-berserker',       name: 'Ratfolk Berserker',       nameJa: 'ラットフォーク狂戦士',    type: 'MONSTER', element: 'Physical', hp: 75,   atk: 17, moveSpd: 150, expReward: 25,  isBoss: true },
  { id: 'ratfolk-warrior',         name: 'Ratfolk Warrior',         nameJa: 'ラットフォーク戦士',      type: 'MONSTER', element: 'Physical', hp: 35,   atk: 15, moveSpd: 50,  expReward: 12,  isBoss: true },
  { id: 'scorpion',                name: 'Scorpion',                nameJa: 'スコーピオン',            type: 'MONSTER', element: 'Physical', hp: 50,   atk: 10, moveSpd: 40,  expReward: 10,  isBoss: false },
  { id: 'skeleton',                name: 'Skeleton',                nameJa: 'スケルトン',              type: 'MONSTER', element: 'Physical', hp: 50,   atk: 20, moveSpd: 80,  expReward: 10,  isBoss: true },
  { id: 'skeleton-archer',         name: 'Skeleton Archer',         nameJa: 'スケルトンアーチャー',    type: 'MONSTER', element: 'Physical', hp: 35,   atk: 20, moveSpd: 80,  expReward: 10,  isBoss: true },
  { id: 'skeleton-king',           name: 'Skeleton King',           nameJa: 'スケルトンキング',        type: 'MONSTER', element: 'Physical', hp: 1050, atk: 50, moveSpd: 115, expReward: 500, isBoss: true },
  { id: 'skeleton-warrior',        name: 'Skeleton Warrior',        nameJa: 'スケルトン戦士',          type: 'MONSTER', element: 'Physical', hp: 90,   atk: 20, moveSpd: 80,  expReward: 30,  isBoss: true },
  { id: 'slime',                   name: 'Slime',                   nameJa: 'スライム',                type: 'MONSTER', element: 'Physical', hp: 50,   atk: 10, moveSpd: 40,  expReward: 10,  isBoss: false },
  { id: 'snow-mountain-archer',    name: 'Snow Mountain Archer',    nameJa: '雪山弓兵',                type: 'MONSTER', element: 'Physical', hp: 70,   atk: 20, moveSpd: 130, expReward: 10,  isBoss: false },
  { id: 'snow-mountain-guard',     name: 'Snow Mountain Guard',     nameJa: '雪山ガード',              type: 'MONSTER', element: 'Physical', hp: 155,  atk: 15, moveSpd: 90,  expReward: 10,  isBoss: false },
  { id: 'snow-mountain-mage',      name: 'Snow Mountain Mage',      nameJa: '雪山魔法使い',            type: 'MONSTER', element: 'Cold',     hp: 55,   atk: 25, moveSpd: 100, expReward: 10,  isBoss: false },
  { id: 'snow-mountain-warrior',   name: 'Snow Mountain Warrior',   nameJa: '雪山戦士',                type: 'MONSTER', element: 'Physical', hp: 90,   atk: 15, moveSpd: 70,  expReward: 10,  isBoss: false },
  { id: 'tick',                    name: 'Tick',                    nameJa: 'ティック',                type: 'MONSTER', element: 'Physical', hp: 55,   atk: 10, moveSpd: 140, expReward: 7,   isBoss: false },
  { id: 'venom-insect',            name: 'Venom Insect',            nameJa: '毒虫',                    type: 'MONSTER', element: 'Chaos',    hp: 45,   atk: 23, moveSpd: 130, expReward: 15,  isBoss: true },
  { id: 'venom-lord',              name: 'Venom Lord',              nameJa: 'ベノムロード',            type: 'MONSTER', element: 'Chaos',    hp: 75,   atk: 15, moveSpd: 55,  expReward: 35,  isBoss: false },
  { id: 'yeti',                    name: 'Yeti',                    nameJa: 'イエティ',                type: 'MONSTER', element: 'Physical', hp: 320,  atk: 12, moveSpd: 70,  expReward: 20,  isBoss: false },
];
