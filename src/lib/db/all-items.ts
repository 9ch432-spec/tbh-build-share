/**
 * TBH 全アイテムデータ (v1.00.21)
 * 内部データとして保持 - UIには表示しない
 * Source: tbherohelper.com/database/items
 */

export const SPRITE_BASE = 'https://tbherohelper.com/sprites';

export interface GearItem {
  key: number;       // スプライトキー (例: 300001)
  name: string;
  nameJa: string;
  type: string;      // SWORD, BOW, STAFF, etc.
  heroClass: string;
  grade: number;     // 0=Common
  atk?: number;
  atkSpd?: number;
  minLevel: number;
  obtainable: boolean;
}

export interface MaterialItem {
  key: number;       // ItemKey (例: 110001)
  name: string;
  nameJa: string;
  category: string;  // Decoration, Engraving, Inscription, Crafting, Offering
  grade: number;
}

// ---- 素材アイテム (MATERIAL) 全件 ----
export const MATERIALS: MaterialItem[] = [
  // Common Decoration
  { key: 110001, name: 'Minor Ruby',     nameJa: 'マイナールビー',    category: 'Decoration', grade: 0 },
  { key: 110002, name: 'Minor Sapphire', nameJa: 'マイナーサファイア', category: 'Decoration', grade: 0 },
  { key: 110003, name: 'Minor Topaz',    nameJa: 'マイナートパーズ',   category: 'Decoration', grade: 0 },
  { key: 110004, name: 'Minor Emerald',  nameJa: 'マイナーエメラルド', category: 'Decoration', grade: 0 },
  { key: 110005, name: 'Minor Amethyst', nameJa: 'マイナーアメジスト', category: 'Decoration', grade: 0 },
  // Uncommon Decoration
  { key: 111001, name: 'Obsidian Shard', nameJa: 'オブシディアンの欠片', category: 'Decoration', grade: 1 },
  { key: 111002, name: 'Coral Piece',    nameJa: 'サンゴの欠片',        category: 'Decoration', grade: 1 },
  { key: 111003, name: 'Jade Stone',     nameJa: 'ジェイドストーン',    category: 'Decoration', grade: 1 },
  { key: 111004, name: 'Amber Gem',      nameJa: 'アンバーの宝石',      category: 'Decoration', grade: 1 },
  // Rare Decoration
  { key: 112001, name: 'Ruby',           nameJa: 'ルビー',              category: 'Decoration', grade: 2 },
  { key: 112002, name: 'Sapphire',       nameJa: 'サファイア',          category: 'Decoration', grade: 2 },
  { key: 112003, name: 'Topaz',          nameJa: 'トパーズ',            category: 'Decoration', grade: 2 },
  { key: 112004, name: 'Emerald',        nameJa: 'エメラルド',          category: 'Decoration', grade: 2 },
  { key: 112005, name: 'Amethyst',       nameJa: 'アメジスト',          category: 'Decoration', grade: 2 },
  // Legendary Decoration
  { key: 113001, name: 'Crystal Quartz', nameJa: 'クリスタルクォーツ',  category: 'Decoration', grade: 3 },
  { key: 113002, name: 'Pearl',          nameJa: 'パール',              category: 'Decoration', grade: 3 },
  { key: 113003, name: 'Turquoise',      nameJa: 'ターコイズ',          category: 'Decoration', grade: 3 },
  { key: 113004, name: 'Garnet',         nameJa: 'ガーネット',          category: 'Decoration', grade: 3 },
  // Immortal Decoration
  { key: 114001, name: 'Diamond',        nameJa: 'ダイヤモンド',        category: 'Decoration', grade: 4 },
  { key: 114002, name: 'Opal',           nameJa: 'オパール',            category: 'Decoration', grade: 4 },
  { key: 114003, name: 'Lapis Lazuli',   nameJa: 'ラピスラズリ',        category: 'Decoration', grade: 4 },
  { key: 114004, name: 'Black Pearl',    nameJa: 'ブラックパール',      category: 'Decoration', grade: 4 },
  // Arcana+ Decoration
  { key: 115001, name: 'Star Ruby',      nameJa: 'スタールビー',        category: 'Decoration', grade: 5 },
  { key: 115002, name: 'Star Sapphire',  nameJa: 'スターサファイア',    category: 'Decoration', grade: 5 },
  { key: 115003, name: 'Star Emerald',   nameJa: 'スターエメラルド',    category: 'Decoration', grade: 5 },
  { key: 115004, name: 'Star Amethyst',  nameJa: 'スターアメジスト',    category: 'Decoration', grade: 5 },
  // Beyond（grade 6）
  { key: 116001, name: 'Twilight Amethyst', nameJa: 'トワイライトアメジスト', category: 'Decoration', grade: 6 },
  { key: 116002, name: 'Phantom Emerald',   nameJa: 'ファントムエメラルド',   category: 'Decoration', grade: 6 },
  // Celestial（grade 7）
  { key: 117001, name: 'Celestial Ruby',     nameJa: 'セレスティアルルビー',     category: 'Decoration', grade: 7 },
  { key: 117002, name: 'Celestial Sapphire', nameJa: 'セレスティアルサファイア',  category: 'Decoration', grade: 7 },
  // Divine（grade 8）
  { key: 118001, name: 'Divine Ruby',        nameJa: 'ディバインルビー',          category: 'Decoration', grade: 8 },
  { key: 118002, name: 'Divine Sapphire',    nameJa: 'ディバインサファイア',      category: 'Decoration', grade: 8 },
  // Cosmic（grade 9）
  { key: 119001, name: 'Cosmic Ruby',        nameJa: 'コズミックルビー',          category: 'Decoration', grade: 9 },
  { key: 119002, name: 'Cosmic Sapphire',    nameJa: 'コズミックサファイア',      category: 'Decoration', grade: 9 },
  // Common Engraving
  { key: 120001, name: 'Goblin Hide',    nameJa: 'ゴブリンの皮',        category: 'Engraving', grade: 0 },
  { key: 120002, name: 'Skeleton Bone',  nameJa: 'スケルトンの骨',      category: 'Engraving', grade: 0 },
  { key: 120003, name: 'Slime Jelly',    nameJa: 'スライムゼリー',      category: 'Engraving', grade: 0 },
  // Uncommon Engraving
  { key: 121001, name: 'Wolf Fang',      nameJa: 'ウルフの牙',          category: 'Engraving', grade: 1 },
  { key: 121002, name: 'Spider Silk',    nameJa: 'スパイダーシルク',    category: 'Engraving', grade: 1 },
  { key: 121003, name: 'Poisonous Herb', nameJa: '毒草',                category: 'Engraving', grade: 1 },
  { key: 121004, name: 'Healing Herb',   nameJa: '癒しの草',            category: 'Engraving', grade: 1 },
  // Rare Engraving
  { key: 122001, name: 'Bat Wing Membrane', nameJa: 'バットウィングメンブレイン', category: 'Engraving', grade: 2 },
  { key: 122002, name: 'Ogre Blood',     nameJa: 'オーガブラッド',      category: 'Engraving', grade: 2 },
  { key: 122003, name: 'Mushroom Spore', nameJa: 'マッシュルームスポア', category: 'Engraving', grade: 2 },
  { key: 122004, name: 'Ancient Tree Sap',nameJa: '古木の樹液',         category: 'Engraving', grade: 2 },
  // Legendary Engraving
  { key: 123001, name: 'Skull',          nameJa: 'スカル',              category: 'Engraving', grade: 3 },
  { key: 123002, name: 'Harpy Feather',  nameJa: 'ハーピーの羽',        category: 'Engraving', grade: 3 },
  { key: 123003, name: 'Mandrake Root',  nameJa: 'マンドレイクの根',    category: 'Engraving', grade: 3 },
  { key: 123004, name: 'Nightshade Extract',nameJa: 'ナイトシェードエキス', category: 'Engraving', grade: 3 },
  // Immortal Engraving
  { key: 124001, name: 'Basilisk Scale', nameJa: 'バシリスクの鱗',      category: 'Engraving', grade: 4 },
  { key: 124002, name: 'Wyvern Claw',    nameJa: 'ワイバーンの爪',      category: 'Engraving', grade: 4 },
  { key: 124003, name: 'Dice',           nameJa: 'ダイス',              category: 'Engraving', grade: 4 },
  { key: 124004, name: 'Demon Blood',    nameJa: 'デーモンブラッド',    category: 'Engraving', grade: 4 },
  // Arcana+ Engraving
  { key: 125001, name: 'Dragon Scale',   nameJa: 'ドラゴンの鱗',        category: 'Engraving', grade: 5 },
  { key: 125002, name: 'Phoenix Feather',nameJa: 'フェニックスの羽',    category: 'Engraving', grade: 5 },
  { key: 126001, name: 'Chaos Essence',  nameJa: 'カオスエッセンス',    category: 'Engraving', grade: 6 },
  { key: 126002, name: 'Void Crystal',   nameJa: 'ヴォイドクリスタル',  category: 'Engraving', grade: 6 },
  { key: 126003, name: 'Aether Shard',   nameJa: 'エーテルシャード',    category: 'Engraving', grade: 6 },
  // Celestial Engraving
  { key: 127001, name: 'Celestial Wing', nameJa: 'セレスティアルウィング', category: 'Engraving', grade: 7 },
  { key: 127002, name: 'Star Fragment',  nameJa: 'スターフラグメント',  category: 'Engraving', grade: 7 },
  // Divine Engraving
  { key: 128001, name: 'Divine Essence', nameJa: 'ディバインエッセンス', category: 'Engraving', grade: 8 },
  { key: 128002, name: 'Radiant Core',   nameJa: 'レイディアントコア',  category: 'Engraving', grade: 8 },
  // Cosmic Engraving
  { key: 129001, name: 'Cosmic Shard',   nameJa: 'コズミックシャード',  category: 'Engraving', grade: 9 },
  { key: 129002, name: 'Infinity Stone', nameJa: 'インフィニティストーン', category: 'Engraving', grade: 9 },
  // Inscription
  { key: 130001, name: 'Scroll of Common Inscription',    nameJa: 'コモンインスクリプション巻物',       category: 'Inscription', grade: 0 },
  { key: 131001, name: 'Scroll of Uncommon Inscription',  nameJa: 'アンコモンインスクリプション巻物',   category: 'Inscription', grade: 1 },
  { key: 132001, name: 'Scroll of Rare Inscription',      nameJa: 'レアインスクリプション巻物',         category: 'Inscription', grade: 2 },
  { key: 133001, name: 'Scroll of Legendary Inscription', nameJa: 'レジェンダリーインスクリプション巻物',category: 'Inscription', grade: 3 },
  { key: 134001, name: 'Scroll of Immortal Inscription',  nameJa: 'イモータルインスクリプション巻物',   category: 'Inscription', grade: 4 },
  { key: 135001, name: 'Scroll of Arcana Inscription',    nameJa: 'アルカナインスクリプション巻物',     category: 'Inscription', grade: 5 },
  { key: 136001, name: 'Scroll of Beyond Inscription',    nameJa: 'ビヨンドインスクリプション巻物',     category: 'Inscription', grade: 6 },
  { key: 137001, name: 'Scroll of Celestial Inscription', nameJa: 'セレスティアルインスクリプション巻物', category: 'Inscription', grade: 7 },
  { key: 138001, name: 'Scroll of Divine Inscription',    nameJa: 'ディバインインスクリプション巻物',    category: 'Inscription', grade: 8 },
  { key: 139001, name: 'Scroll of Cosmic Inscription',    nameJa: 'コズミックインスクリプション巻物',   category: 'Inscription', grade: 9 },
  // Crafting
  { key: 140001, name: 'Wood',           nameJa: '木材',                category: 'Crafting', grade: 0 },
  { key: 140002, name: 'Stone',          nameJa: '石材',                category: 'Crafting', grade: 0 },
  { key: 140003, name: 'Leather',        nameJa: '皮革',                category: 'Crafting', grade: 0 },
  { key: 140004, name: 'Copper Nugget',  nameJa: '銅塊',                category: 'Crafting', grade: 0 },
  { key: 141001, name: 'Bronze Ingot',   nameJa: '青銅インゴット',      category: 'Crafting', grade: 1 },
  { key: 141002, name: 'Iron Ingot',     nameJa: '鉄インゴット',        category: 'Crafting', grade: 1 },
  { key: 142001, name: 'Silver Ingot',   nameJa: '銀インゴット',        category: 'Crafting', grade: 2 },
  { key: 142002, name: 'Gold Ingot',     nameJa: '金インゴット',        category: 'Crafting', grade: 2 },
  { key: 143001, name: 'Stardust Ingot', nameJa: 'スターダストインゴット', category: 'Crafting', grade: 3 },
  { key: 143002, name: 'Void Iron',      nameJa: 'ヴォイドアイアン',    category: 'Crafting', grade: 3 },
  { key: 144001, name: 'Chaos Ore',      nameJa: 'カオス鉱石',          category: 'Crafting', grade: 4 },
  { key: 144002, name: 'Void Ore',       nameJa: 'ヴォイド鉱石',        category: 'Crafting', grade: 4 },
  { key: 145001, name: 'Celestial Ingot',nameJa: 'セレスティアルインゴット', category: 'Crafting', grade: 5 },
  { key: 145002, name: 'Cosmic Ingot',   nameJa: 'コズミックインゴット', category: 'Crafting', grade: 5 },
  { key: 146001, name: 'Beyond Ingot',   nameJa: 'ビヨンドインゴット',   category: 'Crafting', grade: 6 },
  { key: 146002, name: 'Celestial Ore',  nameJa: 'セレスティアル鉱石',   category: 'Crafting', grade: 7 },
  { key: 147001, name: 'Divine Ingot',   nameJa: 'ディバインインゴット',  category: 'Crafting', grade: 8 },
  { key: 148001, name: 'Cosmic Ore',     nameJa: 'コズミック鉱石',        category: 'Crafting', grade: 9 },
  // Offering - 全10種
  { key: 160001, name: 'Kingdom 1st Anniversary Coin',       nameJa: '王国建国1周年記念コイン',       category: 'Offering', grade: 0 },
  { key: 160002, name: 'Empire 1st Anniversary Coin',        nameJa: '帝国建国1周年記念コイン',       category: 'Offering', grade: 1 },
  { key: 160003, name: 'Kingdom 10th Anniversary Coin',      nameJa: '王国10周年記念コイン',           category: 'Offering', grade: 2 },
  { key: 160004, name: 'Empire 10th Anniversary Coin',       nameJa: '帝国建国10周年記念コイン',       category: 'Offering', grade: 3 },
  { key: 160005, name: 'Kingdom 50th Anniversary Coin',      nameJa: '王国50周年記念コイン',           category: 'Offering', grade: 4 },
  { key: 160006, name: 'Empire 50th Anniversary Coin',       nameJa: '帝国建国50周年記念コイン',       category: 'Offering', grade: 5 },
  { key: 160007, name: 'Kingdom 100th Anniversary Coin',     nameJa: '王国100周年記念コイン',          category: 'Offering', grade: 6 },
  { key: 160008, name: 'Empire 100th Anniversary Coin',      nameJa: '帝国百周年記念コイン',           category: 'Offering', grade: 7 },
  { key: 160009, name: 'Sacred Kingdom 1000th Anniversary Coin', nameJa: '神聖王国1000周年記念コイン', category: 'Offering', grade: 8 },
  { key: 160010, name: 'Eternal Empire 1000th Anniversary Coin', nameJa: '永遠帝国1000周年記念コイン', category: 'Offering', grade: 9 },
];

// ---- ギアアイテム (GEAR, obtainable) スプライトキー基準 ----
// スプライトキーからItemKeyは: [タイプ][グレード2桁][レベル帯2桁] のパターン
// ここではスプライトキーで管理する

export const GEAR_ITEMS: GearItem[] = [
  // ===== SWORD (Knight) =====
  { key: 300001, name: 'Long Sword',        nameJa: 'ロングソード',       type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 1,   atkSpd: 1,   minLevel: 1,   obtainable: true },
  { key: 300002, name: 'Cutlas',            nameJa: 'カトラス',           type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 2,   atkSpd: 1,   minLevel: 5,   obtainable: true },
  { key: 300003, name: 'Rapier',            nameJa: 'レイピア',           type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 3,   atkSpd: 1.5, minLevel: 10,  obtainable: true },
  { key: 300004, name: 'Bastard Sword',     nameJa: 'バスタードソード',   type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 5,   atkSpd: 1.5, minLevel: 15,  obtainable: true },
  { key: 300005, name: 'Great Sword',       nameJa: 'グレートソード',     type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 9,   atkSpd: 2,   minLevel: 20,  obtainable: true },
  { key: 300007, name: 'Knight Sword',      nameJa: 'ナイトソード',       type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 20,  atkSpd: 2,   minLevel: 30,  obtainable: true },
  { key: 300009, name: 'Rune Sword',        nameJa: 'ルーンソード',       type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 44,  atkSpd: 2,   minLevel: 40,  obtainable: true },
  { key: 300011, name: 'Fate Sword',        nameJa: 'フェイトソード',     type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 94,  atkSpd: 2.5, minLevel: 50,  obtainable: true },
  { key: 300014, name: 'Vengeance Sword',   nameJa: 'ヴェンジェンスソード',type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 156, atkSpd: 3,   minLevel: 65,  obtainable: true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード',type:'SWORD', heroClass: 'Knight', grade: 0, atk: 239, atkSpd: 3,   minLevel: 80,  obtainable: true },
  { key: 300020, name: 'Radiant Sword',     nameJa: 'レイディアントソード',type: 'SWORD', heroClass: 'Knight', grade: 0, atk: 66,  atkSpd: 3,   minLevel: 100, obtainable: true },
  // ===== BOW (Ranger) =====
  { key: 310001, name: 'Short Bow',         nameJa: 'ショートボウ',       type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 2,   atkSpd: 3,   minLevel: 1,   obtainable: true },
  { key: 310002, name: 'Hunting Bow',       nameJa: 'ハンティングボウ',   type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 3,   atkSpd: 3,   minLevel: 5,   obtainable: true },
  { key: 310003, name: 'Long Bow',          nameJa: 'ロングボウ',         type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 5,   atkSpd: 3,   minLevel: 10,  obtainable: true },
  { key: 310004, name: 'Composite Bow',     nameJa: 'コンポジットボウ',   type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 7,   atkSpd: 4,   minLevel: 15,  obtainable: true },
  { key: 310005, name: 'War Bow',           nameJa: 'ウォーボウ',         type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 10,  atkSpd: 4,   minLevel: 20,  obtainable: true },
  { key: 310007, name: 'Dusk Bow',          nameJa: 'ダスクボウ',         type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 21,  atkSpd: 4,   minLevel: 30,  obtainable: true },
  { key: 310009, name: 'Elite Bow',         nameJa: 'エリートボウ',       type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 44,  atkSpd: 4,   minLevel: 40,  obtainable: true },
  { key: 310011, name: 'Mystic Bow',        nameJa: 'ミスティックボウ',   type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 93,  atkSpd: 4.5, minLevel: 50,  obtainable: true },
  { key: 310014, name: 'Limitless Bow',     nameJa: 'リミットレスボウ',   type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 155, atkSpd: 5,   minLevel: 65,  obtainable: true },
  { key: 310017, name: 'Shadow Bow',        nameJa: 'シャドウボウ',       type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 239, atkSpd: 5,   minLevel: 80,  obtainable: true },
  { key: 310020, name: 'Radiant Bow',       nameJa: 'レイディアントボウ', type: 'BOW', heroClass: 'Ranger', grade: 0, atk: 65,  atkSpd: 5,   minLevel: 100, obtainable: true },
  // ===== STAFF (Sorcerer) =====
  { key: 320001, name: 'Wooden Staff',      nameJa: 'ウッデンスタッフ',   type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 2,   atkSpd: 1,   minLevel: 1,   obtainable: true },
  { key: 320002, name: 'Herald Staff',      nameJa: 'ヘラルドスタッフ',   type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 3,   atkSpd: 1,   minLevel: 5,   obtainable: true },
  { key: 320003, name: 'Long Staff',        nameJa: 'ロングスタッフ',     type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 5,   atkSpd: 1,   minLevel: 10,  obtainable: true },
  { key: 320004, name: 'Witch Staff',       nameJa: 'ウィッチスタッフ',   type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 7,   atkSpd: 1.5, minLevel: 15,  obtainable: true },
  { key: 320005, name: 'Azure Staff',       nameJa: 'アジュールスタッフ', type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 14,  atkSpd: 1.5, minLevel: 20,  obtainable: true },
  { key: 320007, name: 'Sage Staff',        nameJa: 'セイジスタッフ',     type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 29,  atkSpd: 1.5, minLevel: 30,  obtainable: true },
  { key: 320009, name: 'Comet Staff',       nameJa: 'コメットスタッフ',   type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 63,  atkSpd: 1.8, minLevel: 40,  obtainable: true },
  { key: 320011, name: 'Void Staff',        nameJa: 'ヴォイドスタッフ',   type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 136, atkSpd: 2,   minLevel: 50,  obtainable: true },
  { key: 320014, name: 'Sacred Staff',      nameJa: 'セイクリッドスタッフ',type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 225, atkSpd: 2,   minLevel: 65,  obtainable: true },
  { key: 320017, name: 'Tempest Staff',     nameJa: 'テンペストスタッフ', type: 'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 345, atkSpd: 2,   minLevel: 80,  obtainable: true },
  { key: 320020, name: 'Radiant Staff',     nameJa: 'レイディアントスタッフ',type:'STAFF', heroClass: 'Sorcerer', grade: 0, atk: 114, atkSpd: 2,   minLevel: 100, obtainable: true },
  // ===== SCEPTER (Priest) =====
  { key: 330001, name: 'Novice Scepter',    nameJa: 'ノービスセプター',   type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 1,   atkSpd: 1,   minLevel: 1,   obtainable: true },
  { key: 330002, name: 'Iron Scepter',      nameJa: 'アイアンセプター',   type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 2,   atkSpd: 1,   minLevel: 5,   obtainable: true },
  { key: 330003, name: 'Blessed Scepter',   nameJa: 'ブレストセプター',   type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 3,   atkSpd: 1,   minLevel: 10,  obtainable: true },
  { key: 330004, name: 'Steel Scepter',     nameJa: 'スチールセプター',   type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 5,   atkSpd: 1.5, minLevel: 15,  obtainable: true },
  { key: 330005, name: 'Sacred Scepter',    nameJa: 'セイクリッドセプター',type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 8,  atkSpd: 1.5, minLevel: 20,  obtainable: true },
  { key: 330007, name: 'Devout Scepter',    nameJa: 'デヴァウトセプター', type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 18,  atkSpd: 1.5, minLevel: 30,  obtainable: true },
  { key: 330009, name: 'Rune Scepter',      nameJa: 'ルーンセプター',     type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 39,  atkSpd: 1.8, minLevel: 40,  obtainable: true },
  { key: 330011, name: 'Fate Scepter',      nameJa: 'フェイトセプター',   type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 83,  atkSpd: 2,   minLevel: 50,  obtainable: true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター',type: 'SCEPTER', heroClass: 'Priest', grade: 0, atk: 139, atkSpd: 2,   minLevel: 65,  obtainable: true },
  { key: 330017, name: 'Dimensional Scepter',nameJa: 'ディメンジョナルセプター',type:'SCEPTER',heroClass:'Priest',grade:0, atk: 212, atkSpd: 2, minLevel: 80, obtainable: true },
  { key: 330020, name: 'Radiant Scepter',   nameJa: 'レイディアントセプター',type:'SCEPTER',heroClass:'Priest',grade:0, atk: 70, atkSpd: 2, minLevel: 100, obtainable: true },
  // ===== CROSSBOW (Hunter) =====
  { key: 340001, name: 'Short Crossbow',    nameJa: 'ショートクロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 1,   atkSpd: 1,   minLevel: 1,   obtainable: true },
  { key: 340002, name: 'Leather Crossbow',  nameJa: 'レザークロスボウ',   type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 3,   atkSpd: 1,   minLevel: 5,   obtainable: true },
  { key: 340003, name: 'Iron Crossbow',     nameJa: 'アイアンクロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 5,   atkSpd: 1,   minLevel: 10,  obtainable: true },
  { key: 340004, name: 'Steel Crossbow',    nameJa: 'スチールクロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 7,   atkSpd: 1.5, minLevel: 15,  obtainable: true },
  { key: 340005, name: 'Siege Crossbow',    nameJa: 'シージクロスボウ',   type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 10,  atkSpd: 1.5, minLevel: 20,  obtainable: true },
  { key: 340007, name: 'Hunter Crossbow',   nameJa: 'ハンタークロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 20,  atkSpd: 2,   minLevel: 30,  obtainable: true },
  { key: 340009, name: 'Rune Crossbow',     nameJa: 'ルーンクロスボウ',   type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 43,  atkSpd: 2,   minLevel: 40,  obtainable: true },
  { key: 340011, name: 'Fate Crossbow',     nameJa: 'フェイトクロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 93,  atkSpd: 2.5, minLevel: 50,  obtainable: true },
  { key: 340014, name: 'Limitless Crossbow',nameJa: 'リミットレスクロスボウ',type:'CROSSBOW',heroClass:'Hunter',grade:0, atk:154, atkSpd:3, minLevel:65, obtainable:true },
  { key: 340017, name: 'Shadow Crossbow',   nameJa: 'シャドウクロスボウ', type: 'CROSSBOW', heroClass: 'Hunter', grade: 0, atk: 238, atkSpd: 3,   minLevel: 80,  obtainable: true },
  { key: 340020, name: 'Radiant Crossbow',  nameJa: 'レイディアントクロスボウ',type:'CROSSBOW',heroClass:'Hunter',grade:0,atk:65,atkSpd:3,minLevel:100,obtainable:true },
  // ===== AXE (Slayer) =====
  { key: 350001, name: 'Stone Axe',         nameJa: 'ストーンアックス',   type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 2,   atkSpd: 1,   minLevel: 1,   obtainable: true },
  { key: 350002, name: 'Iron Axe',          nameJa: 'アイアンアックス',   type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 4,   atkSpd: 1,   minLevel: 5,   obtainable: true },
  { key: 350003, name: 'Battle Axe',        nameJa: 'バトルアックス',     type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 7,   atkSpd: 1,   minLevel: 10,  obtainable: true },
  { key: 350004, name: 'War Axe',           nameJa: 'ウォーアックス',     type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 11,  atkSpd: 1.5, minLevel: 15,  obtainable: true },
  { key: 350005, name: 'Heavy Axe',         nameJa: 'ヘビーアックス',     type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 18,  atkSpd: 1.5, minLevel: 20,  obtainable: true },
  { key: 350007, name: 'Slayer Axe',        nameJa: 'スレイヤーアックス', type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 38,  atkSpd: 2,   minLevel: 30,  obtainable: true },
  { key: 350009, name: 'Rune Axe',          nameJa: 'ルーンアックス',     type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 83,  atkSpd: 2,   minLevel: 40,  obtainable: true },
  { key: 350011, name: 'Fate Axe',          nameJa: 'フェイトアックス',   type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 178, atkSpd: 2.5, minLevel: 50,  obtainable: true },
  { key: 350014, name: 'Rage Axe',          nameJa: 'レイジアックス',     type: 'AXE', heroClass: 'Slayer', grade: 0, atk: 296, atkSpd: 3,   minLevel: 65,  obtainable: true },
  { key: 350017, name: 'Dimensional Axe',   nameJa: 'ディメンジョナルアックス',type:'AXE',heroClass:'Slayer',grade:0,atk:454,atkSpd:3,minLevel:80,obtainable:true },
  // ===== Grade 1 (Uncommon) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:1,atk:30,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:1,atk:66,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:1,atk:141,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:1,atk:234,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:1,atk:359,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:1,atk:32,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:1,atk:66,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:1,atk:140,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:1,atk:233,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:1,atk:359,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:1,atk:44,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:1,atk:95,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:1,atk:204,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:1,atk:338,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:1,atk:518,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:1,atk:27,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:1,atk:59,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:1,atk:125,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:1,atk:209,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:1,atk:318,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:1,atk:30,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:1,atk:65,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:1,atk:140,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:1,atk:231,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:1,atk:357,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:1,atk:57,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:1,atk:125,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:1,atk:267,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:1,atk:444,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:1,atk:681,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 2 (Rare) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:2,atk:45,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:2,atk:99,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:2,atk:212,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:2,atk:351,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:2,atk:538,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:2,atk:47,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:2,atk:99,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:2,atk:209,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:2,atk:349,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:2,atk:538,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:2,atk:65,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:2,atk:142,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:2,atk:306,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:2,atk:506,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:2,atk:776,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:2,atk:41,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:2,atk:88,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:2,atk:187,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:2,atk:313,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:2,atk:477,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:2,atk:45,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:2,atk:97,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:2,atk:209,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:2,atk:347,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:2,atk:536,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:2,atk:86,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:2,atk:187,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:2,atk:401,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:2,atk:666,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:2,atk:1022,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 3 (Legendary) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:3,atk:68,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:3,atk:149,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:3,atk:317,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:3,atk:527,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:3,atk:807,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:3,atk:71,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:3,atk:149,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:3,atk:314,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:3,atk:523,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:3,atk:807,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:3,atk:98,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:3,atk:213,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:3,atk:459,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:3,atk:759,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:3,atk:1164,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:3,atk:61,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:3,atk:132,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:3,atk:280,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:3,atk:469,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:3,atk:716,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:3,atk:68,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:3,atk:145,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:3,atk:314,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:3,atk:520,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:3,atk:803,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:3,atk:128,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:3,atk:280,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:3,atk:601,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:3,atk:999,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:3,atk:1532,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 4 (Immortal) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:4,atk:101,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:4,atk:223,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:4,atk:476,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:4,atk:789,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:4,atk:1209,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:4,atk:106,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:4,atk:223,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:4,atk:471,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:4,atk:784,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:4,atk:1209,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:4,atk:147,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:4,atk:319,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:4,atk:688,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:4,atk:1139,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:4,atk:1746,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:4,atk:91,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:4,atk:197,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:4,atk:420,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:4,atk:703,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:4,atk:1073,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:4,atk:101,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:4,atk:218,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:4,atk:471,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:4,atk:779,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:4,atk:1204,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:4,atk:192,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:4,atk:420,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:4,atk:901,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:4,atk:1498,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:4,atk:2297,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 5 (Arcana) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:5,atk:152,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:5,atk:334,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:5,atk:713,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:5,atk:1184,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:5,atk:1814,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:5,atk:159,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:5,atk:334,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:5,atk:706,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:5,atk:1176,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:5,atk:1814,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:5,atk:220,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:5,atk:478,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:5,atk:1032,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:5,atk:1708,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:5,atk:2619,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:5,atk:137,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:5,atk:296,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:5,atk:630,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:5,atk:1055,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:5,atk:1609,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:5,atk:152,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:5,atk:326,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:5,atk:706,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:5,atk:1169,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:5,atk:1806,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:5,atk:288,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:5,atk:630,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:5,atk:1351,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:5,atk:2247,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:5,atk:3446,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 6 (Beyond) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:6,atk:228,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:6,atk:502,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:6,atk:1072,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:6,atk:1778,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:6,atk:2725,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:6,atk:239,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:6,atk:502,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:6,atk:1060,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:6,atk:1767,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:6,atk:2725,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:6,atk:331,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:6,atk:718,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:6,atk:1550,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:6,atk:2565,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:6,atk:3933,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:6,atk:205,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:6,atk:445,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:6,atk:946,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:6,atk:1585,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:6,atk:2417,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:6,atk:228,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:6,atk:490,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:6,atk:1060,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:6,atk:1756,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:6,atk:2713,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:6,atk:433,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:6,atk:946,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:6,atk:2029,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:6,atk:3374,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:6,atk:5176,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 7 (Celestial) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:7,atk:342,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:7,atk:752,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:7,atk:1607,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:7,atk:2668,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:7,atk:4087,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:7,atk:359,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:7,atk:752,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:7,atk:1590,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:7,atk:2651,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:7,atk:4087,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:7,atk:496,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:7,atk:1077,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:7,atk:2326,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:7,atk:3848,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:7,atk:5900,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:7,atk:308,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:7,atk:667,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:7,atk:1419,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:7,atk:2377,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:7,atk:3625,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:7,atk:342,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:7,atk:735,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:7,atk:1590,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:7,atk:2633,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:7,atk:4070,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:7,atk:650,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:7,atk:1419,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:7,atk:3044,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:7,atk:5062,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:7,atk:7763,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 8 (Divine) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:8,atk:512,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:8,atk:1126,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:8,atk:2406,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:8,atk:3994,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:8,atk:6118,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:8,atk:538,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:8,atk:1126,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:8,atk:2381,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:8,atk:3968,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:8,atk:6118,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:8,atk:742,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:8,atk:1613,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:8,atk:3482,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:8,atk:5760,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:8,atk:8832,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:8,atk:461,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:8,atk:998,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:8,atk:2125,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:8,atk:3558,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:8,atk:5427,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:8,atk:512,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:8,atk:1101,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:8,atk:2381,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:8,atk:3942,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:8,atk:6093,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:8,atk:973,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:8,atk:2125,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:8,atk:4557,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:8,atk:7578,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:8,atk:11622,atkSpd:3,minLevel:80,obtainable:true },

  // ===== Grade 9 (Cosmic) =====
  { key: 300007, name: 'Knight Sword', nameJa: 'ナイトソード', type:'SWORD',heroClass:'Knight',grade:9,atk:768,atkSpd:2,minLevel:30,obtainable:true },
  { key: 300009, name: 'Rune Sword', nameJa: 'ルーンソード', type:'SWORD',heroClass:'Knight',grade:9,atk:1690,atkSpd:2,minLevel:40,obtainable:true },
  { key: 300011, name: 'Fate Sword', nameJa: 'フェイトソード', type:'SWORD',heroClass:'Knight',grade:9,atk:3610,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 300014, name: 'Vengeance Sword', nameJa: 'ヴェンジェンスソード', type:'SWORD',heroClass:'Knight',grade:9,atk:5990,atkSpd:3,minLevel:65,obtainable:true },
  { key: 300017, name: 'Dimensional Sword', nameJa: 'ディメンジョナルソード', type:'SWORD',heroClass:'Knight',grade:9,atk:9178,atkSpd:3,minLevel:80,obtainable:true },
  { key: 310007, name: 'Dusk Bow', nameJa: 'ダスクボウ', type:'BOW',heroClass:'Ranger',grade:9,atk:806,atkSpd:4,minLevel:30,obtainable:true },
  { key: 310009, name: 'Elite Bow', nameJa: 'エリートボウ', type:'BOW',heroClass:'Ranger',grade:9,atk:1690,atkSpd:4,minLevel:40,obtainable:true },
  { key: 310011, name: 'Mystic Bow', nameJa: 'ミスティックボウ', type:'BOW',heroClass:'Ranger',grade:9,atk:3571,atkSpd:4.5,minLevel:50,obtainable:true },
  { key: 310014, name: 'Limitless Bow', nameJa: 'リミットレスボウ', type:'BOW',heroClass:'Ranger',grade:9,atk:5952,atkSpd:5,minLevel:65,obtainable:true },
  { key: 310017, name: 'Shadow Bow', nameJa: 'シャドウボウ', type:'BOW',heroClass:'Ranger',grade:9,atk:9178,atkSpd:5,minLevel:80,obtainable:true },
  { key: 320007, name: 'Sage Staff', nameJa: 'セイジスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:9,atk:1114,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 320009, name: 'Comet Staff', nameJa: 'コメットスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:9,atk:2419,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 320011, name: 'Void Staff', nameJa: 'ヴォイドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:9,atk:5222,atkSpd:2,minLevel:50,obtainable:true },
  { key: 320014, name: 'Sacred Staff', nameJa: 'セイクリッドスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:9,atk:8640,atkSpd:2,minLevel:65,obtainable:true },
  { key: 320017, name: 'Tempest Staff', nameJa: 'テンペストスタッフ', type:'STAFF',heroClass:'Sorcerer',grade:9,atk:13248,atkSpd:2,minLevel:80,obtainable:true },
  { key: 330007, name: 'Devout Scepter', nameJa: 'デヴァウトセプター', type:'SCEPTER',heroClass:'Priest',grade:9,atk:691,atkSpd:1.5,minLevel:30,obtainable:true },
  { key: 330009, name: 'Rune Scepter', nameJa: 'ルーンセプター', type:'SCEPTER',heroClass:'Priest',grade:9,atk:1498,atkSpd:1.8,minLevel:40,obtainable:true },
  { key: 330011, name: 'Fate Scepter', nameJa: 'フェイトセプター', type:'SCEPTER',heroClass:'Priest',grade:9,atk:3187,atkSpd:2,minLevel:50,obtainable:true },
  { key: 330014, name: 'Limitless Scepter', nameJa: 'リミットレスセプター', type:'SCEPTER',heroClass:'Priest',grade:9,atk:5338,atkSpd:2,minLevel:65,obtainable:true },
  { key: 330017, name: 'Dimensional Scepter', nameJa: 'ディメンジョナルセプター', type:'SCEPTER',heroClass:'Priest',grade:9,atk:8141,atkSpd:2,minLevel:80,obtainable:true },
  { key: 340007, name: 'Hunter Crossbow', nameJa: 'ハンタークロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:9,atk:768,atkSpd:2,minLevel:30,obtainable:true },
  { key: 340009, name: 'Rune Crossbow', nameJa: 'ルーンクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:9,atk:1651,atkSpd:2,minLevel:40,obtainable:true },
  { key: 340011, name: 'Fate Crossbow', nameJa: 'フェイトクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:9,atk:3571,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 340014, name: 'Limitless Crossbow', nameJa: 'リミットレスクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:9,atk:5914,atkSpd:3,minLevel:65,obtainable:true },
  { key: 340017, name: 'Shadow Crossbow', nameJa: 'シャドウクロスボウ', type:'CROSSBOW',heroClass:'Hunter',grade:9,atk:9139,atkSpd:3,minLevel:80,obtainable:true },
  { key: 350007, name: 'Slayer Axe', nameJa: 'スレイヤーアックス', type:'AXE',heroClass:'Slayer',grade:9,atk:1459,atkSpd:2,minLevel:30,obtainable:true },
  { key: 350009, name: 'Rune Axe', nameJa: 'ルーンアックス', type:'AXE',heroClass:'Slayer',grade:9,atk:3187,atkSpd:2,minLevel:40,obtainable:true },
  { key: 350011, name: 'Fate Axe', nameJa: 'フェイトアックス', type:'AXE',heroClass:'Slayer',grade:9,atk:6835,atkSpd:2.5,minLevel:50,obtainable:true },
  { key: 350014, name: 'Rage Axe', nameJa: 'レイジアックス', type:'AXE',heroClass:'Slayer',grade:9,atk:11366,atkSpd:3,minLevel:65,obtainable:true },
  { key: 350017, name: 'Dimensional Axe', nameJa: 'ディメンジョナルアックス', type:'AXE',heroClass:'Slayer',grade:9,atk:17434,atkSpd:3,minLevel:80,obtainable:true },
];

// ---- ルックアップ関数 ----

/** MaterialItemKeyから素材情報を取得 */
export function getMaterial(key: number): MaterialItem | undefined {
  return MATERIALS.find(m => m.key === key);
}

/** スプライトキーからギア情報を取得 */
export function getGearBySpriteKey(spriteKey: number): GearItem | undefined {
  return GEAR_ITEMS.find(g => g.key === spriteKey);
}

/** 名前検索（素材） */
export function searchMaterials(query: string, locale = 'ja'): MaterialItem[] {
  const q = query.toLowerCase();
  return MATERIALS.filter(m =>
    (locale === 'ja' ? m.nameJa : m.name).toLowerCase().includes(q) ||
    m.name.toLowerCase().includes(q)
  );
}

/** 名前検索（ギア） */
export function searchGear(query: string, heroClass?: string, locale = 'ja'): GearItem[] {
  const q = query.toLowerCase();
  return GEAR_ITEMS.filter(g => {
    const nameMatch = (locale === 'ja' ? g.nameJa : g.name).toLowerCase().includes(q) ||
      g.name.toLowerCase().includes(q);
    const classMatch = !heroClass || g.heroClass === heroClass;
    return nameMatch && classMatch && g.obtainable;
  });
}
