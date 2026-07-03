/**
 * TBH ペットデータ (v1.00.21)
 * Source: tbherohelper.com/database/pets
 */
export interface PetInfo {
  id: string;
  name: string;
  nameJa: string;
  isDLC: boolean;
  unlockCondition: string;
  unlockConditionJa: string;
  bonuses: { stat: string; value: number; type: string }[];
  imageUrl: string;
}

const SPRITE = 'https://tbherohelper.com/sprites';

export const PETS: PetInfo[] = [
  {
    id: 'bat', name: 'Bat', nameJa: 'バット', isDLC: false,
    unlockCondition: 'Defeat Bat ×5,000',
    unlockConditionJa: 'バットを5,000体倒す',
    bonuses: [
      { stat: 'Drop Chance Normal Chest', value: 10, type: 'ADDITIVE' },
      { stat: 'EXP Amount', value: 15, type: 'ADDITIVE' },
    ],
    imageUrl: `${SPRITE}/PetSlotSmall_Bat_Arranged.png`,
  },
  {
    id: 'watcher', name: 'Watcher', nameJa: 'ウォッチャー', isDLC: false,
    unlockCondition: 'Defeat Giant Fly ×5,000',
    unlockConditionJa: '巨大ハエを5,000体倒す',
    bonuses: [{ stat: 'Gold Amount', value: 15, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_BeHolder_Arranged.png`,
  },
  {
    id: 'burning-skeleton', name: 'Burning Skeleton', nameJa: 'バーニングスケルトン', isDLC: false,
    unlockCondition: 'Defeat Fire Elemental ×5,000',
    unlockConditionJa: 'ファイアエレメンタルを5,000体倒す',
    bonuses: [{ stat: 'Drop Chance Stage Boss Chest', value: 10, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_FlyingSkull_Arranged.png`,
  },
  {
    id: 'blue-golem', name: 'Blue Golem', nameJa: 'ブルーゴーレム', isDLC: false,
    unlockCondition: 'Defeat Hell Golem ×5,000',
    unlockConditionJa: 'ヘルゴーレムを5,000体倒す',
    bonuses: [{ stat: 'Drop Chance Normal Chest', value: 15, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_BlueGolem_Arranged.png`,
  },
  {
    id: 'dark-spirit', name: 'Dark Spirit', nameJa: 'ダークスピリット', isDLC: false,
    unlockCondition: 'Defeat Ghost ×5,000',
    unlockConditionJa: 'ゴーストを5,000体倒す',
    bonuses: [{ stat: 'Drop Chance Stage Boss Chest', value: 15, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_BlackSpirit_Arranged.png`,
  },
  {
    id: 'sword', name: 'Sword', nameJa: 'ソード', isDLC: true,
    unlockCondition: 'Purchase the Supporter Pack',
    unlockConditionJa: 'サポーターパックを購入',
    bonuses: [{ stat: 'EXP Amount', value: 15, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_FlyingSword_Arranged.png`,
  },
  {
    id: 'butterfly', name: 'Butterfly', nameJa: 'バタフライ', isDLC: true,
    unlockCondition: 'Purchase the Supporter Pack',
    unlockConditionJa: 'サポーターパックを購入',
    bonuses: [{ stat: 'Gold Amount', value: 10, type: 'ADDITIVE' }],
    imageUrl: `${SPRITE}/PetSlotSmall_ButterFly_Arranged.png`,
  },
  {
    id: 'dragon', name: 'Dragon', nameJa: 'ドラゴン', isDLC: true,
    unlockCondition: 'Purchase the Supporter Pack',
    unlockConditionJa: 'サポーターパックを購入',
    bonuses: [
      { stat: 'Drop Chance Normal Chest', value: 20, type: 'ADDITIVE' },
      { stat: 'Gold Amount', value: 15, type: 'ADDITIVE' },
      { stat: 'EXP Amount', value: 20, type: 'ADDITIVE' },
    ],
    imageUrl: `${SPRITE}/PetSlotSmall_Dragon_Arranged.png`,
  },
];
