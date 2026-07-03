/**
 * TBH アイテムキーマッピング (v1.00.21)
 * セーブデータに含まれるItemKeyと名前・スプライトの対応表
 *
 * ItemKeyの構造:
 *   素材系:  [グレード2桁][タイプ2桁][連番3桁]  例: 11_0001 = Common Decoration
 *   装備系:  [ギアタイプ3桁][グレード2桁][レベル帯2桁]  例: 302_17 = Sword, Rare, Lv80
 *
 * スプライト: https://tbherohelper.com/sprites/{SPRITE}.png
 */

export const SPRITE_BASE = 'https://tbherohelper.com/sprites';

export interface ItemMapping {
  name: string;
  nameJa: string;
  sprite: string;
  grade: number;
  gearType?: string;
  heroClass?: string;
}

// グレードID→名前
const GRADE_NAMES = ['Common','Uncommon','Rare','Legendary','Immortal','Arcana','Beyond','Celestial','Divine','Cosmic'];
const GRADE_NAMES_JA = ['コモン','アンコモン','レア','レジェンダリー','イモータル','アルカナ','ビヨンド','セレスティアル','ディバイン','コズミック'];

// ギアタイプ→日本語
const GEAR_TYPE_JA: Record<string, string> = {
  SWORD:'剣', BOW:'弓', STAFF:'スタッフ', SCEPTER:'セプター', CROSSBOW:'クロスボウ',
  AXE:'斧', SHIELD:'盾', ARROW:'矢', ORB:'オーブ', TOME:'トーム',
  BOLT:'ボルト', HATCHET:'ハチェット', HELMET:'ヘルメット', ARMOR:'アーマー',
  GLOVES:'グローブ', BOOTS:'ブーツ', AMULET:'アミュレット', EARING:'イヤリング',
  RING:'リング', BRACER:'ブレーサー',
};

// ギアタイプ→対応ヒーロー
const GEAR_HERO: Record<string, string> = {
  SWORD:'Knight', SHIELD:'Knight',
  BOW:'Ranger', ARROW:'Ranger',
  STAFF:'Sorcerer', ORB:'Sorcerer',
  SCEPTER:'Priest', TOME:'Priest',
  CROSSBOW:'Hunter', BOLT:'Hunter',
  AXE:'Slayer', HATCHET:'Slayer',
};

// スプライト名からギア名と情報を導出
function spriteToInfo(sprite: string, grade: number): Pick<ItemMapping, 'name'|'nameJa'|'gearType'|'heroClass'> {
  const [typeStr] = sprite.split('_');
  const gearTypeJa = GEAR_TYPE_JA[typeStr] ?? typeStr;
  const heroClass = GEAR_HERO[typeStr];
  const gradeName = GRADE_NAMES[grade] ?? '';
  const gradeNameJa = GRADE_NAMES_JA[grade] ?? '';
  return {
    name: `${gradeName} ${gearTypeJa}`,
    nameJa: `${gradeNameJa} ${gearTypeJa}`,
    gearType: typeStr,
    heroClass,
  };
}

// 素材アイテムのキーから情報を導出（既定義のものは上書き）
const MATERIAL_NAMES: Record<number, [string, string]> = {
  // Decoration
  110001: ['Minor Ruby','マイナールビー'],
  110002: ['Minor Sapphire','マイナーサファイア'],
  110003: ['Minor Topaz','マイナートパーズ'],
  110004: ['Minor Emerald','マイナーエメラルド'],
  110005: ['Minor Amethyst','マイナーアメジスト'],
  111001: ['Obsidian Shard','オブシディアンの欠片'],
  111002: ['Coral Piece','サンゴの欠片'],
  111003: ['Jade Stone','ジェイドストーン'],
  111004: ['Amber Gem','アンバーの宝石'],
  112001: ['Ruby','ルビー'],
  112002: ['Sapphire','サファイア'],
  112003: ['Topaz','トパーズ'],
  112004: ['Emerald','エメラルド'],
  112005: ['Amethyst','アメジスト'],
  113001: ['Crystal Quartz','クリスタルクォーツ'],
  113002: ['Pearl','パール'],
  113003: ['Turquoise','ターコイズ'],
  113004: ['Garnet','ガーネット'],
  114001: ['Diamond','ダイヤモンド'],
  114002: ['Opal','オパール'],
  114003: ['Lapis Lazuli','ラピスラズリ'],
  114004: ['Black Pearl','ブラックパール'],
  115001: ['Chaos Fragment','カオスの欠片'],
  115002: ['Void Shard','ヴォイドシャード'],
  115003: ['Celestial Crystal','セレスティアルクリスタル'],
  115004: ['Cosmic Dust','コズミックダスト'],
  // Engraving
  120001: ['Goblin Hide','ゴブリンの皮'],
  120002: ['Skeleton Bone','スケルトンの骨'],
  120003: ['Slime Jelly','スライムゼリー'],
  121001: ['Wolf Fang','ウルフの牙'],
  121002: ['Spider Silk','スパイダーシルク'],
  121003: ['Poisonous Herb','毒草'],
  121004: ['Healing Herb','癒しの草'],
  122001: ['Bat Wing Membrane','バットウィングメンブレイン'],
  122002: ['Ogre Blood','オーガブラッド'],
  122003: ['Mushroom Spore','マッシュルームスポア'],
  122004: ['Ancient Tree Sap','古木の樹液'],
  123001: ['Skull','スカル'],
  123002: ['Harpy Feather','ハーピーの羽'],
  123003: ['Mandrake Root','マンドレイクの根'],
  123004: ['Nightshade Extract','ナイトシェードエキス'],
  124001: ['Basilisk Scale','バシリスクの鱗'],
  124002: ['Wyvern Claw','ワイバーンの爪'],
  124003: ['Dice','ダイス'],
  124004: ['Demon Blood','デーモンブラッド'],
  125001: ['Dragon Scale','ドラゴンの鱗'],
  125002: ['Phoenix Feather','フェニックスの羽'],
  126001: ['Chaos Essence','カオスエッセンス'],
  126002: ['Void Crystal','ヴォイドクリスタル'],
  126003: ['Aether Shard','エーテルシャード'],
  // Inscription
  130001: ['Scroll of Common Inscription','コモンインスクリプション巻物'],
  131001: ['Scroll of Uncommon Inscription','アンコモンインスクリプション巻物'],
  132001: ['Scroll of Rare Inscription','レアインスクリプション巻物'],
  133001: ['Scroll of Legendary Inscription','レジェンダリーインスクリプション巻物'],
  134001: ['Scroll of Immortal Inscription','イモータルインスクリプション巻物'],
  135001: ['Scroll of Arcana Inscription','アルカナインスクリプション巻物'],
  // Crafting
  140001: ['Wood','木材'],
  140002: ['Stone','石材'],
  140003: ['Leather','皮革'],
  140004: ['Copper Nugget','銅塊'],
  141001: ['Bronze Ingot','青銅インゴット'],
  141002: ['Iron Ingot','鉄インゴット'],
  142001: ['Silver Ingot','銀インゴット'],
  142002: ['Gold Ingot','金インゴット'],
  143001: ['Stardust Ingot','スターダストインゴット'],
  143002: ['Void Iron','ヴォイドアイアン'],
  144001: ['Chaos Ore','カオス鉱石'],
  144002: ['Void Ore','ヴォイド鉱石'],
  145001: ['Celestial Ingot','セレスティアルインゴット'],
  145002: ['Cosmic Ingot','コズミックインゴット'],
  // Offering
  160001: ['Kingdom 1st Anniversary Coin','王国建国1周年コイン'],
  160002: ['Empire 1st Anniversary Coin','帝国建国1周年コイン'],
  160003: ['Kingdom 10th Anniversary Coin','王国建国10周年コイン'],
  160004: ['Empire 10th Anniversary Coin','帝国建国10周年コイン'],
};

// スプライトの装備グレードレベル帯→グレードID推定
function inferGradeFromSprite(sprite: string): number {
  const numMatch = sprite.match(/(\d+)$/);
  if (!numMatch) return 0;
  const num = parseInt(numMatch[1]);
  if (num <= 5)  return 0; // Common
  if (num <= 9)  return 1; // Uncommon
  if (num <= 14) return 2; // Rare
  if (num <= 17) return 3; // Legendary
  if (num <= 19) return 4; // Immortal
  if (num <= 20) return 5; // Arcana+
  return 0;
}

// 素材グレード推定（キーの上位桁から）
function inferMaterialGrade(key: number): number {
  const s = String(key);
  if (s.startsWith('11')) return parseInt(s[2]) || 0;
  if (s.startsWith('12')) return parseInt(s[2]) || 0;
  if (s.startsWith('13')) return parseInt(s[2]) || 0;
  if (s.startsWith('14')) return parseInt(s[2]) || 0;
  return 0;
}

// ItemKeyからItemMappingを取得
export function getItemMapping(key: number): ItemMapping {
  const sprite_data_raw = RAW_SPRITE_MAP[key];

  if (sprite_data_raw) {
    // 装備系
    const grade = inferGradeFromSprite(sprite_data_raw);
    const info = spriteToInfo(sprite_data_raw, grade);
    return {
      ...info,
      sprite: sprite_data_raw,
      grade,
    };
  }

  // 素材系
  const matName = MATERIAL_NAMES[key];
  const grade = inferMaterialGrade(key);
  const spriteKey = `Item_${key}`;
  return {
    name: matName?.[0] ?? `Item ${key}`,
    nameJa: matName?.[1] ?? `アイテム #${key}`,
    sprite: spriteKey,
    grade,
  };
}

export function getItemSpriteUrl(key: number): string {
  const mapping = getItemMapping(key);
  return `${SPRITE_BASE}/${mapping.sprite}.png`;
}

export function getItemName(key: number, locale = 'ja'): string {
  const mapping = getItemMapping(key);
  return locale === 'ja' ? mapping.nameJa : mapping.name;
}

// スプライトマップ（fetch-items.mjsの結果）
const RAW_SPRITE_MAP: Record<number, string> = {
  302171: 'SWORD_300017',
  315141: 'BOW_310014',
  325051: 'STAFF_320005',
  326141: 'STAFF_320014',
  326171: 'STAFF_320017',
  338171: 'SCEPTER_330017',
  403051: 'SHIELD_400005',
  406141: 'SHIELD_400014',
  410017: 'ARROW_410017',
  415041: 'ARROW_410004',
  415111: 'ARROW_410011',
  425041: 'ORB_420004',
  425111: 'ORB_420011',
  433171: 'TOME_430017',
  500017: 'HELMET_500017',
  501171: 'HELMET_500017',
  505051: 'HELMET_500005',
  506091: 'HELMET_500009',
  506141: 'HELMET_500014',
  510017: 'ARMOR_510017',
  513171: 'ARMOR_510017',
  515171: 'ARMOR_510017',
  523171: 'GLOVES_520017',
  524171: 'GLOVES_520017',
  527141: 'GLOVES_520014',
  533171: 'BOOTS_530017',
  534171: 'BOOTS_530017',
  535041: 'BOOTS_530004',
  535171: 'BOOTS_530017',
  603051: 'AMULET_600005',
  603091: 'AMULET_600009',
  603141: 'AMULET_600014',
  604091: 'AMULET_600009',
  604141: 'AMULET_600014',
  605091: 'AMULET_600009',
  613141: 'EARING_610014',
  614171: 'EARING_610017',
  615091: 'EARING_610009',
  615111: 'EARING_610011',
  623031: 'RING_620003',
  625091: 'RING_620009',
  625171: 'RING_620017',
  633091: 'BRACER_630009',
  633111: 'BRACER_630011',
  633171: 'BRACER_630017',
  634111: 'BRACER_630011',
  634171: 'BRACER_630017',
  635141: 'BRACER_630014',
};
