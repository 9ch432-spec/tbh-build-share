/**
 * ES3 (Easy Save 3) ファイルパーサー for Task Bar Hero
 *
 * 暗号化方式: PBKDF2(password, salt=先頭16bytes, iterations=100, keylen=16, digest=SHA1)
 *            → AES-128-CBC (IV=salt)
 *
 * データ構造:
 *   root: { SystemInfo, PlayerSaveData, AccountSaveData }
 *   PlayerSaveData.value: JSON文字列 (二重エンコード、大きな整数は文字列化済み)
 *     → commonSaveData.arrangedHeroKey: [heroKey, heroKey, heroKey]
 *     → heroSaveDatas: HeroSaveData[]
 *       - heroKey: number (101=Knight, 201=Sorcerer, 301=Ranger, 401=Priest, 501=Hunter, 601=Slayer)
 *       - HeroLevel: number
 *       - equippedSKillKey: number[]
 *       - equippedItemIds: number[]
 *       - unlockedAttributeGroupKeys: number[]
 */

import { createDecipheriv, pbkdf2Sync } from 'crypto';

// TBH暗号化キー（taskbarhero.wiki のソースより確認）
const TBH_ENCRYPTION_KEY = 'emuMqG3bLYJ938ZDCfieWJ';

// ヒーローキー → クラス名
export const HERO_KEY_TO_CLASS: Record<number, string> = {
  101: 'Knight',
  201: 'Sorcerer',
  301: 'Ranger',
  401: 'Priest',
  501: 'Hunter',
  601: 'Slayer',
};

export interface ItemSlotData {
  uniqueId: string;
  itemKey: number;
  decorationItemKeys: number[];   // 装飾スロット（宝石系）
  engravingItemKeys: number[];    // 彫刻スロット（モンスター素材系）
  inscriptionItemKeys: number[];  // 碑文スロット（巻物系）
  enhanceLevel: number;           // 強化レベル
  inherentOptionValues: number[]; // 固有ステータス値
}

export interface HeroData {
  index: number;
  heroKey: number;
  class: string;
  level: number;
  exp: number;
  abilityPoint: number;
  allocatedAbilityPoint: number;
  equippedSkillKeys: number[];
  equippedItemIds: number[];      // UniqueId (64bit)
  equippedItemKeys: number[];     // ItemKey (種類キー)
  equippedItemsDetail: ItemSlotData[]; // 装備詳細（スロット情報含む）
  unlockedAttributeGroupKeys: number[];
  isUnlocked: boolean;
}

export interface CommonData {
  version: string;
  playTime: number;
  arrangedHeroKey: number[];
  maxCompletedStage?: number;
  tutorialCleared?: boolean[];
}

export interface ParsedBuild {
  heroes: HeroData[];
  partyHeroKeys: number[];
  common: CommonData;
  rawPlayerData: Record<string, unknown>;
}

export type ParseResult =
  | { success: true; build: ParsedBuild }
  | { success: false; error: string; encrypted?: boolean };

/**
 * ES3ファイルをPBKDF2+AES-128-CBCで復号
 */
function decryptES3(buffer: Buffer): Buffer | null {
  try {
    if (buffer.length <= 16) return null;
    const salt = buffer.subarray(0, 16);
    const ciphertext = buffer.subarray(16);
    const derivedKey = pbkdf2Sync(TBH_ENCRYPTION_KEY, salt, 100, 16, 'sha1');
    const decipher = createDecipheriv('aes-128-cbc', derivedKey, salt);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  } catch {
    return null;
  }
}

/**
 * 大きな整数（64bit）を文字列として安全にパース
 * TBHはlastSavedTimeなど64bit整数を持つため通常のJSON.parseでは精度が失われる
 * 正規表現でJSON構造内の数値のみを対象にする
 */
function safeParseJson(text: string): Record<string, unknown> {
  // まず通常のJSON.parseを試みる
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    // 失敗した場合のみ大きな整数を文字列化して再試行
    const safe = text.replace(/:\s*(\d{16,})([,\}\]\s])/g, ':"$1"$2');
    return JSON.parse(safe) as Record<string, unknown>;
  }
}

/**
 * PlayerSaveData.value（二重JSONエンコード）を展開
 */
function parsePlayerSaveData(root: Record<string, unknown>): Record<string, unknown> {
  const psd = root.PlayerSaveData as { value?: string } | undefined;
  if (!psd?.value) return {};
  const text = psd.value.trim();
  if (text.startsWith('{') || text.startsWith('[')) {
    return safeParseJson(text);
  }
  return {};
}

/**
 * セーブデータのスキルキーをtbherohelperのスキルIDに変換
 * セーブデータ: x0001 形式（スターター）→ tbherohelper: x0101 形式
 * 例: 40001 → 40101, 30001 → 30101
 * 例: 40201 → 40201（変換不要）
 */
function normalizeSkillKey(key: number): number {
  if (key <= 0) return key;
  const str = String(key);
  // 末尾が "001" の場合は "101" に変換
  if (str.endsWith('001')) {
    return parseInt(str.slice(0, -3) + '101');
  }
  return key;
}

/**
 * heroSaveDatas からHeroDataを構築
 */
function buildHeroData(
  heroSave: Record<string, unknown>,
  index: number,
  equippedItemKeys: number[] = [],
  equippedItemsDetail: ItemSlotData[] = []
): HeroData {
  const heroKey = Number(heroSave.heroKey ?? 0);
  return {
    index,
    heroKey,
    class: HERO_KEY_TO_CLASS[heroKey] ?? `Unknown(${heroKey})`,
    level: Number(heroSave.HeroLevel ?? 0),
    exp: Number(heroSave.HeroExp ?? 0),
    abilityPoint: Number(heroSave.AbilityPoint ?? 0),
    allocatedAbilityPoint: Number(heroSave.AllocatedHeroAbilityPoint ?? 0),
    equippedSkillKeys: ((heroSave.equippedSKillKey as number[] | undefined) ?? []).map(normalizeSkillKey),
    equippedItemIds: (heroSave.equippedItemIds as number[] | undefined) ?? [],
    equippedItemKeys,
    equippedItemsDetail,
    unlockedAttributeGroupKeys: (heroSave.unlockedAttributeGroupKeys as number[] | undefined) ?? [],
    isUnlocked: Boolean(heroSave.IsUnLock ?? false),
  };
}

/**
 * TBHのPlayerSaveDataからビルド情報を抽出
 */
function extractBuildFromPlayerData(playerData: Record<string, unknown>): ParsedBuild {
  const common = (playerData.commonSaveData ?? {}) as Record<string, unknown>;
  const arrangedHeroKey = (common.arrangedHeroKey as number[] | undefined) ?? [];
  const heroSaveDatas = (playerData.heroSaveDatas as Record<string, unknown>[] | undefined) ?? [];
  const itemSaveDatas = (playerData.itemSaveDatas as Record<string, unknown>[] | undefined) ?? [];

  // UniqueId → フル装備データのマップを作成
  const uniqueIdToItemData = new Map<string, ItemSlotData>();
  for (const item of itemSaveDatas) {
    const uniqueId = item.UniqueId;
    const itemKey = item.ItemKey;
    if (uniqueId == null || itemKey == null) continue;
    const uid = String(uniqueId);

    // 装飾スロット（DecorationItemKeys / decorationItemKeys / DecorationKeys 等複数パターン対応）
    const decoKeys = (
      (item.DecorationItemKeys as number[] | undefined) ??
      (item.decorationItemKeys as number[] | undefined) ??
      []
    ).filter((k: number) => k > 0);

    // 彫刻スロット
    const engKeys = (
      (item.EngravingItemKeys as number[] | undefined) ??
      (item.engravingItemKeys as number[] | undefined) ??
      []
    ).filter((k: number) => k > 0);

    // 碑文スロット
    const insKeys = (
      (item.InscriptionItemKeys as number[] | undefined) ??
      (item.inscriptionItemKeys as number[] | undefined) ??
      []
    ).filter((k: number) => k > 0);

    // 固有ステータス値
    const inherentVals = (
      (item.InherentOptionValues as number[] | undefined) ??
      (item.inherentOptionValues as number[] | undefined) ??
      []
    );

    uniqueIdToItemData.set(uid, {
      uniqueId: uid,
      itemKey: Number(itemKey),
      decorationItemKeys: decoKeys,
      engravingItemKeys: engKeys,
      inscriptionItemKeys: insKeys,
      enhanceLevel: Number(item.EnhanceLevel ?? item.enhanceLevel ?? 0),
      inherentOptionValues: inherentVals,
    });
  }

  // パーティ3体のヒーローを取得
  const heroes: HeroData[] = arrangedHeroKey.slice(0, 3).map((heroKey, idx) => {
    const heroSave = heroSaveDatas.find((h) => Number(h.heroKey) === heroKey) ?? {};
    const equippedItemIds = (heroSave.equippedItemIds as number[] | undefined) ?? [];

    const equippedItemKeys: number[] = [];
    const equippedItemsDetail: ItemSlotData[] = [];

    for (const uid of equippedItemIds) {
      if (uid > 0) {
        const detail = uniqueIdToItemData.get(String(uid));
        equippedItemKeys.push(detail?.itemKey ?? 0);
        equippedItemsDetail.push(detail ?? {
          uniqueId: String(uid),
          itemKey: 0,
          decorationItemKeys: [],
          engravingItemKeys: [],
          inscriptionItemKeys: [],
          enhanceLevel: 0,
          inherentOptionValues: [],
        });
      } else {
        equippedItemKeys.push(0);
        equippedItemsDetail.push({
          uniqueId: '0',
          itemKey: 0,
          decorationItemKeys: [],
          engravingItemKeys: [],
          inscriptionItemKeys: [],
          enhanceLevel: 0,
          inherentOptionValues: [],
        });
      }
    }

    return buildHeroData({ ...heroSave, heroKey }, idx, equippedItemKeys, equippedItemsDetail);
  });

  return {
    heroes,
    partyHeroKeys: arrangedHeroKey.slice(0, 3),
    common: {
      version: String(common.version ?? ''),
      playTime: Number(common.playTime ?? 0),
      arrangedHeroKey,
      maxCompletedStage: common.maxCompletedStageKey != null
        ? Number(common.maxCompletedStageKey)
        : undefined,
      tutorialCleared: (common.TutorialCleared as boolean[] | undefined),
    },
    rawPlayerData: playerData,
  };
}

/**
 * ES3ファイルバッファをパース（メイン関数）
 */
export function parseES3Buffer(buffer: Buffer): ParseResult {
  // プレーンJSONを試みる（暗号化なしの場合）
  try {
    const text = buffer.toString('utf-8').trim();
    if (text.startsWith('{')) {
      const root = JSON.parse(text) as Record<string, unknown>;
      const playerData = parsePlayerSaveData(root);
      return { success: true, build: extractBuildFromPlayerData(playerData) };
    }
  } catch {
    // 暗号化されている → 次へ
  }

  // PBKDF2 + AES-128-CBC で復号
  const decrypted = decryptES3(buffer);
  if (!decrypted) {
    return {
      success: false,
      error: 'ファイルの復号に失敗しました。TBHのセーブファイルか確認してください。',
      encrypted: true,
    };
  }

  try {
    const text = decrypted.toString('utf-8').trim();
    console.log('[ES3] decrypted length:', text.length, 'first50:', text.slice(0, 50));
    const root = safeParseJson(text);
    console.log('[ES3] root keys:', Object.keys(root));
    const playerData = parsePlayerSaveData(root);
    console.log('[ES3] playerData keys:', Object.keys(playerData));
    return { success: true, build: extractBuildFromPlayerData(playerData) };
  } catch (e) {
    console.error('[ES3] parse error:', e);
    return {
      success: false,
      error: 'ファイルの解析に失敗しました。ファイルが破損している可能性があります。',
    };
  }
}
