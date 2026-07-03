/**
 * TBH アイテムデータ (v1.00.21)
 * Source: tbherohelper.com/database/items
 *
 * ItemKeyのパターン:
 * - 1xxxxx: 素材系 (Decoration/Engraving/Inscription/Crafting/Offering)
 * - 3xxxxx: 武器/防具/アクセサリ
 *
 * スプライトURLパターン:
 * - 素材: https://tbherohelper.com/sprites/Item_{key}.png
 * - 武器: https://tbherohelper.com/sprites/{TYPE}_{key}.png
 */

export const SPRITE_BASE = 'https://tbherohelper.com/sprites';

export interface ItemInfo {
  key: number;
  name: string;
  nameJa: string;
  grade: number;    // 0=Common, 1=Uncommon, ...
  category: string; // Decoration, Engraving, Inscription, Crafting, Offering, Sword, Bow, ...
  heroClass?: string;
  minLevel?: number;
  atk?: number;
  atkSpd?: number;
  steamMarketName?: string;
}

// スプライトURLを自動生成
export function getItemSpriteUrl(itemKey: number): string {
  // 武器タイプのマッピング
  const weaponTypes: Record<number, string> = {
    300: 'SWORD', 301: 'SWORD',
    310: 'BOW',   311: 'BOW',
    320: 'STAFF', 321: 'STAFF',
    330: 'SCEPTER',331: 'SCEPTER',
    340: 'CROSSBOW',341: 'CROSSBOW',
    350: 'AXE',   351: 'AXE',
    360: 'SHIELD',361: 'SHIELD',
    370: 'ORB',   371: 'ORB',
    380: 'TOME',  381: 'TOME',
    390: 'BOLT',  391: 'BOLT',
    400: 'HATCHET',401: 'HATCHET',
    410: 'HELMET',411: 'HELMET',
    420: 'ARMOR', 421: 'ARMOR',
    430: 'GLOVES',431: 'GLOVES',
    440: 'BOOTS', 441: 'BOOTS',
  };
  const prefix = Math.floor(itemKey / 1000);
  const type = weaponTypes[prefix];
  if (type) return `${SPRITE_BASE}/${type}_${itemKey}.png`;
  return `${SPRITE_BASE}/Item_${itemKey}.png`;
}

// アイテムキーからグレードを推定
export function getItemGradeFromKey(itemKey: number): number {
  const hundreds = Math.floor((itemKey % 100000) / 10000);
  // 素材系: 11xxxx=0, 111xxx=1, 112xxx=2, 113xxx=3, 114xxx=4, 115xxx=5, 116xxx=6, 117xxx=7, 118xxx=8, 119xxx=9
  if (itemKey >= 100000 && itemKey < 200000) {
    const sub = Math.floor(itemKey / 1000) % 10;
    return sub; // 0=Common, 1=Uncommon, 2=Rare...
  }
  // 武器/防具: 300001-399999 → Common基準
  return 0;
}

// アイテムカテゴリー名（日本語）
export const ITEM_CATEGORIES_JA: Record<string, string> = {
  Decoration: 'デコレーション',
  Engraving: 'エングレービング',
  Inscription: 'インスクリプション',
  Crafting: 'クラフト素材',
  Offering: 'オファリング',
  Sword: '剣',
  Bow: '弓',
  Staff: 'スタッフ',
  Scepter: 'セプター',
  Crossbow: 'クロスボウ',
  Axe: '斧',
  Shield: '盾',
  Orb: 'オーブ',
  Tome: 'トーム',
  Bolt: 'ボルト',
  Hatchet: 'ハチェット',
  Helmet: 'ヘルメット',
  Armor: 'アーマー',
  Gloves: 'グローブ',
  Boots: 'ブーツ',
};

// よく使う素材・装飾品（主要なものだけ定義）
export const KNOWN_ITEMS: Record<number, ItemInfo> = {
  // Decoration - Common
  110001: { key: 110001, name: 'Minor Ruby',     nameJa: 'マイナールビー',    grade: 0, category: 'Decoration', steamMarketName: 'Minor Ruby' },
  110002: { key: 110002, name: 'Minor Sapphire', nameJa: 'マイナーサファイア', grade: 0, category: 'Decoration', steamMarketName: 'Minor Sapphire' },
  110003: { key: 110003, name: 'Minor Topaz',    nameJa: 'マイナートパーズ',   grade: 0, category: 'Decoration', steamMarketName: 'Minor Topaz' },
  110004: { key: 110004, name: 'Minor Emerald',  nameJa: 'マイナーエメラルド', grade: 0, category: 'Decoration', steamMarketName: 'Minor Emerald' },
  110005: { key: 110005, name: 'Minor Amethyst', nameJa: 'マイナーアメジスト', grade: 0, category: 'Decoration', steamMarketName: 'Minor Amethyst' },
  // Engraving - Common
  120001: { key: 120001, name: 'Goblin Hide',    nameJa: 'ゴブリンの皮',      grade: 0, category: 'Engraving' },
  120002: { key: 120002, name: 'Skeleton Bone',  nameJa: 'スケルトンの骨',    grade: 0, category: 'Engraving' },
  120003: { key: 120003, name: 'Slime Jelly',    nameJa: 'スライムゼリー',    grade: 0, category: 'Engraving' },
  // Inscription - Common
  130001: { key: 130001, name: 'Scroll of Common Inscription',    nameJa: 'コモンインスクリプション巻物',    grade: 0, category: 'Inscription' },
  131001: { key: 131001, name: 'Scroll of Uncommon Inscription',  nameJa: 'アンコモンインスクリプション巻物', grade: 1, category: 'Inscription' },
  132001: { key: 132001, name: 'Scroll of Rare Inscription',      nameJa: 'レアインスクリプション巻物',      grade: 2, category: 'Inscription' },
  133001: { key: 133001, name: 'Scroll of Legendary Inscription', nameJa: 'レジェンダリーインスクリプション巻物', grade: 3, category: 'Inscription' },
  134001: { key: 134001, name: 'Scroll of Immortal Inscription',  nameJa: 'イモータルインスクリプション巻物',  grade: 4, category: 'Inscription' },
  // Crafting
  140001: { key: 140001, name: 'Wood',         nameJa: '木材',      grade: 0, category: 'Crafting' },
  140002: { key: 140002, name: 'Stone',        nameJa: '石材',      grade: 0, category: 'Crafting' },
  140003: { key: 140003, name: 'Leather',      nameJa: '皮革',      grade: 0, category: 'Crafting' },
  140004: { key: 140004, name: 'Copper Nugget',nameJa: '銅塊',      grade: 0, category: 'Crafting' },
  141001: { key: 141001, name: 'Bronze Ingot', nameJa: '青銅インゴット', grade: 1, category: 'Crafting' },
  141002: { key: 141002, name: 'Iron Ingot',   nameJa: '鉄インゴット',   grade: 1, category: 'Crafting' },
  142001: { key: 142001, name: 'Silver Ingot', nameJa: '銀インゴット',   grade: 2, category: 'Crafting' },
  142002: { key: 142002, name: 'Gold Ingot',   nameJa: '金インゴット',   grade: 2, category: 'Crafting' },
  143001: { key: 143001, name: 'Stardust Ingot',nameJa: 'スターダストインゴット', grade: 3, category: 'Crafting' },
  143002: { key: 143002, name: 'Void Iron',    nameJa: 'ヴォイドアイアン', grade: 3, category: 'Crafting' },
  // Offering
  160001: { key: 160001, name: 'Kingdom 1st Anniversary Coin',  nameJa: '王国建国1周年コイン',  grade: 0, category: 'Offering' },
  160002: { key: 160002, name: 'Empire 1st Anniversary Coin',   nameJa: '帝国建国1周年コイン',  grade: 1, category: 'Offering' },
  160003: { key: 160003, name: 'Kingdom 10th Anniversary Coin', nameJa: '王国建国10周年コイン', grade: 2, category: 'Offering' },
  160004: { key: 160004, name: 'Empire 10th Anniversary Coin',  nameJa: '帝国建国10周年コイン', grade: 3, category: 'Offering' },
  // Decoration - higher grades
  111001: { key: 111001, name: 'Obsidian Shard', nameJa: 'オブシディアンの欠片', grade: 1, category: 'Decoration' },
  111002: { key: 111002, name: 'Coral Piece',    nameJa: 'サンゴの欠片',        grade: 1, category: 'Decoration' },
  111003: { key: 111003, name: 'Jade Stone',     nameJa: 'ジェイドストーン',    grade: 1, category: 'Decoration' },
  111004: { key: 111004, name: 'Amber Gem',      nameJa: 'アンバーの宝石',      grade: 1, category: 'Decoration' },
  112001: { key: 112001, name: 'Ruby',           nameJa: 'ルビー',              grade: 2, category: 'Decoration' },
  112002: { key: 112002, name: 'Sapphire',       nameJa: 'サファイア',          grade: 2, category: 'Decoration' },
  112003: { key: 112003, name: 'Topaz',          nameJa: 'トパーズ',            grade: 2, category: 'Decoration' },
  112004: { key: 112004, name: 'Emerald',        nameJa: 'エメラルド',          grade: 2, category: 'Decoration' },
  112005: { key: 112005, name: 'Amethyst',       nameJa: 'アメジスト',          grade: 2, category: 'Decoration' },
  113001: { key: 113001, name: 'Crystal Quartz', nameJa: 'クリスタルクォーツ',  grade: 3, category: 'Decoration' },
  113002: { key: 113002, name: 'Pearl',          nameJa: 'パール',              grade: 3, category: 'Decoration' },
  113003: { key: 113003, name: 'Turquoise',      nameJa: 'ターコイズ',          grade: 3, category: 'Decoration' },
  113004: { key: 113004, name: 'Garnet',         nameJa: 'ガーネット',          grade: 3, category: 'Decoration' },
  114001: { key: 114001, name: 'Diamond',        nameJa: 'ダイヤモンド',        grade: 4, category: 'Decoration' },
  114002: { key: 114002, name: 'Opal',           nameJa: 'オパール',            grade: 4, category: 'Decoration' },
  114003: { key: 114003, name: 'Lapis Lazuli',   nameJa: 'ラピスラズリ',        grade: 4, category: 'Decoration' },
  114004: { key: 114004, name: 'Black Pearl',    nameJa: 'ブラックパール',      grade: 4, category: 'Decoration' },
};

export function getItemInfo(key: number): ItemInfo | undefined {
  return KNOWN_ITEMS[key];
}

export function getItemName(key: number, locale = 'ja'): string {
  const item = KNOWN_ITEMS[key];
  if (!item) return `Item #${key}`;
  return locale === 'ja' ? item.nameJa : item.name;
}

// ギアタイプ判別（ItemKeyの先頭桁から）
export function getGearType(itemKey: number): string {
  const prefix3 = Math.floor(itemKey / 1000);
  const typeMap: Record<number, string> = {
    300: 'Sword', 301: 'Sword',
    310: 'Bow',   311: 'Bow',
    320: 'Staff', 321: 'Staff',
    330: 'Scepter',331:'Scepter',
    340: 'Crossbow',341:'Crossbow',
    350: 'Axe',   351: 'Axe',
    360: 'Shield',361:'Shield',
    370: 'Orb',   371: 'Orb',
    380: 'Tome',  381: 'Tome',
    390: 'Bolt',  391: 'Bolt',
    400: 'Hatchet',401:'Hatchet',
    410: 'Helmet',411:'Helmet',
    420: 'Armor', 421: 'Armor',
    430: 'Gloves',431:'Gloves',
    440: 'Boots', 441: 'Boots',
  };
  return typeMap[prefix3] ?? 'Unknown';
}
