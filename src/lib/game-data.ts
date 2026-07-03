/**
 * TBH ゲームデータ定義
 * データソース: tbherohelper.com/database
 */

export const SPRITE_BASE = 'https://tbherohelper.com/sprites';

// ---- ヒーロー ----

export interface HeroInfo {
  key: number;
  name: string;
  nameJa: string;
  nameZh: string;
  nameKo: string;
  class: string;
  weapon: string;
  isDLC: boolean;
  hp: number;
  atk: number;
  atkSpd: number;
  crit: number;
  critDmg: number;
  armor: number;
  moveSpd: number;
  unlockCost: number;
  description: string;
  imageUrl: string;
  iconUrl: string;
  color: string;
  gradient: string;
  dpsRank: number;
  ehpRank: number;
}

export const HEROES: Record<number, HeroInfo> = {
  101: {
    key: 101, name: 'Knight', nameJa: 'ナイト', nameZh: '骑士', nameKo: '나이트',
    class: 'Knight', weapon: 'Sword / Shield', isDLC: false,
    hp: 130, atk: 2, atkSpd: 90, crit: 2.5, critDmg: 1.4, armor: 45, moveSpd: 700, unlockCost: 500,
    description: 'The starter tank. Sword-and-shield melee with the highest survivability in the roster.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/101.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/101.gif`,
    color: 'text-blue-400', gradient: 'from-blue-900/40',
    dpsRank: 1, ehpRank: 1,
  },
  201: {
    key: 201, name: 'Ranger', nameJa: 'レンジャー', nameZh: '游侠', nameKo: '레인저',
    class: 'Ranger', weapon: 'Bow / Arrow', isDLC: false,
    hp: 60, atk: 1, atkSpd: 100, crit: 4, critDmg: 1.4, armor: 8, moveSpd: 700, unlockCost: 500,
    description: 'An agile archer with fast, precise single-target damage.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/201.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/201.gif`,
    color: 'text-green-400', gradient: 'from-green-900/40',
    dpsRank: 5, ehpRank: 5,
  },
  301: {
    key: 301, name: 'Sorcerer', nameJa: 'ソーサラー', nameZh: '法师', nameKo: '소서러',
    class: 'Sorcerer', weapon: 'Staff / Orb', isDLC: false,
    hp: 50, atk: 2, atkSpd: 55, crit: 5, critDmg: 1.4, armor: 5, moveSpd: 700, unlockCost: 500,
    description: 'A glass-cannon mage with devastating area damage.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/301.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/301.gif`,
    color: 'text-purple-400', gradient: 'from-purple-900/40',
    dpsRank: 4, ehpRank: 6,
  },
  401: {
    key: 401, name: 'Priest', nameJa: 'プリースト', nameZh: '牧师', nameKo: '프리스트',
    class: 'Priest', weapon: 'Scepter / Tome', isDLC: true,
    hp: 95, atk: 1, atkSpd: 90, crit: 2, critDmg: 1.4, armor: 30, moveSpd: 700, unlockCost: 500,
    description: 'A holy support hero that keeps the party alive with restoration magic.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/401.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/401.gif`,
    color: 'text-yellow-400', gradient: 'from-yellow-900/40',
    dpsRank: 6, ehpRank: 3,
  },
  501: {
    key: 501, name: 'Hunter', nameJa: 'ハンター', nameZh: '猎人', nameKo: '헌터',
    class: 'Hunter', weapon: 'Crossbow / Bolt', isDLC: true,
    hp: 70, atk: 2, atkSpd: 70, crit: 4.5, critDmg: 1.4, armor: 15, moveSpd: 700, unlockCost: 500,
    description: 'A tactical crossbow expert that controls the field with traps.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/501.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/501.gif`,
    color: 'text-orange-400', gradient: 'from-orange-900/40',
    dpsRank: 2, ehpRank: 4,
  },
  601: {
    key: 601, name: 'Slayer', nameJa: 'スレイヤー', nameZh: '屠夫', nameKo: '슬레이어',
    class: 'Slayer', weapon: 'Axe / Hatchet', isDLC: true,
    hp: 115, atk: 2, atkSpd: 70, crit: 2.5, critDmg: 1.4, armor: 40, moveSpd: 700, unlockCost: 500,
    description: 'A rage-fueled berserker with the most aggressive melee damage.',
    imageUrl: `${SPRITE_BASE}/anim/heroes/601.gif`,
    iconUrl: `${SPRITE_BASE}/anim/heroes/601.gif`,
    color: 'text-red-400', gradient: 'from-red-900/40',
    dpsRank: 3, ehpRank: 2,
  },
};

// ---- スキル ----

export interface SkillInfo {
  key: number;
  name: string;
  nameJa: string;
  nameZh: string;
  nameKo: string;
  heroKey: number;
  description: string;
  element: string;
  maxLevel: number;
  imageUrl: string;
}

export const SKILLS: Record<number, SkillInfo> = {
  // Knight
  10101: { key: 10101, name: 'Shield Bash', nameJa: 'シールドバッシュ', nameZh: '盾击', nameKo: '방패 강타', heroKey: 101, description: 'Bash an enemy with your shield, dealing damage and stunning.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_ShieldBash.png` },
  10201: { key: 10201, name: 'Aegis Field', nameJa: 'イージスフィールド', nameZh: '神盾领域', nameKo: '이지스 필드', heroKey: 101, description: 'Raise your shield to block incoming damage for a duration.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_AegisField.png` },
  10301: { key: 10301, name: 'Sacred Blade', nameJa: 'セイクリッドブレード', nameZh: '圣剑', nameKo: '성스러운 검', heroKey: 101, description: 'Imbue your sword with holy energy, dealing bonus damage.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_SacredBlade.png` },
  10401: { key: 10401, name: 'Holy Aura', nameJa: 'ホーリーオーラ', nameZh: '圣光光环', nameKo: '신성 오라', heroKey: 101, description: 'Emit a holy aura that heals nearby allies over time.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_HolyAura.png` },
  10501: { key: 10501, name: 'Taunt', nameJa: 'テーント', nameZh: '嘲讽', nameKo: '도발', heroKey: 101, description: 'Force all enemies to target you for a duration.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Taunt.png` },
  10601: { key: 10601, name: 'Righteous Strike', nameJa: 'ライチャスストライク', nameZh: '正义打击', nameKo: '의로운 일격', heroKey: 101, description: 'A powerful strike dealing massive physical damage.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_RighteousStrike.png` },
  // Ranger
  20101: { key: 20101, name: 'Quick Shot', nameJa: 'クイックショット', nameZh: '速射', nameKo: '속사', heroKey: 201, description: 'Rapidly fire an arrow dealing damage.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_QuickShot.png` },
  20201: { key: 20201, name: 'Swift Surge', nameJa: 'スウィフトサージ', nameZh: '迅捷冲锋', nameKo: '신속 돌진', heroKey: 201, description: 'Dash forward, dealing damage to enemies in the path.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_SwiftSurge.png` },
  20301: { key: 20301, name: 'Skewer Shot', nameJa: 'スキュワーショット', nameZh: '穿刺箭', nameKo: '꿰뚫기 화살', heroKey: 201, description: 'Fire a piercing arrow that passes through multiple enemies.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_SkewerShot.png` },
  20401: { key: 20401, name: 'Rain of Arrows', nameJa: 'レインオブアローズ', nameZh: '箭雨', nameKo: '화살비', heroKey: 201, description: 'Call down a rain of arrows on a target area.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_RainOfArrows.png` },
  20501: { key: 20501, name: 'Eagle Eye', nameJa: 'イーグルアイ', nameZh: '鹰眼', nameKo: '독수리 눈', heroKey: 201, description: 'Increase your critical hit chance significantly.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_EagleEye.png` },
  20601: { key: 20601, name: 'Multishot', nameJa: 'マルチショット', nameZh: '多重射击', nameKo: '다중 사격', heroKey: 201, description: 'Fire multiple arrows simultaneously at nearby enemies.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Multishot.png` },
  // Sorcerer
  30101: { key: 30101, name: 'Fireball', nameJa: 'ファイアボール', nameZh: '火球', nameKo: '파이어볼', heroKey: 301, description: 'Launch a fireball that explodes on impact.', element: 'Fire', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Fireball.png` },
  30201: { key: 30201, name: 'Flame Hydra', nameJa: 'フレイムヒュドラ', nameZh: '火焰九头蛇', nameKo: '불꽃 히드라', heroKey: 301, description: 'Summon a flame hydra that attacks multiple enemies.', element: 'Fire', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_FlameHydra.png` },
  30301: { key: 30301, name: 'Ice Lance', nameJa: 'アイスランス', nameZh: '冰枪', nameKo: '얼음 창', heroKey: 301, description: 'Launch a lance of ice that slows enemies.', element: 'Cold', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_IceLance.png` },
  30401: { key: 30401, name: 'Thunder Strike', nameJa: 'サンダーストライク', nameZh: '雷击', nameKo: '천둥 강타', heroKey: 301, description: 'Call down lightning on an area, dealing high damage.', element: 'Lightning', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_ThunderStrike.png` },
  30501: { key: 30501, name: 'Arcane Blast', nameJa: 'アルカンブラスト', nameZh: '奥术爆炸', nameKo: '신비한 폭발', heroKey: 301, description: 'Unleash a burst of arcane energy.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_ArcaneBlast.png` },
  30601: { key: 30601, name: 'Meteor', nameJa: 'メテオ', nameZh: '陨石', nameKo: '메테오', heroKey: 301, description: 'Call down a massive meteor dealing huge area damage.', element: 'Fire', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Meteor.png` },
  // Priest
  40101: { key: 40101, name: 'Heal', nameJa: 'ヒール', nameZh: '治疗', nameKo: '힐', heroKey: 401, description: "Restore one ally's HP by 1~2.8% of their maximum HP.", element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Heal.png` },
  40201: { key: 40201, name: 'Blessing of Might', nameJa: 'ブレッシングオブマイト', nameZh: '力量祝福', nameKo: '힘의 축복', heroKey: 401, description: 'Increases attack damage of self and nearby party members by 5~14%.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_BlessingOfMight.png` },
  40301: { key: 40301, name: 'Wrath of Heaven', nameJa: 'ラースオブヘブン', nameZh: '天堂之怒', nameKo: '천국의 분노', heroKey: 401, description: 'Imbue your scepter with divine lightning. Attacks deal 43~79% lightning area damage.', element: 'Lightning', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_WrathOfHeaven.png` },
  40401: { key: 40401, name: 'Sanctuary', nameJa: 'サンクチュアリ', nameZh: '圣所', nameKo: '성소', heroKey: 401, description: 'Deploy a holy sanctuary. All allies inside regenerate 300~1,920 HP per second.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Sanctuary.png` },
  40501: { key: 40501, name: 'Blessing of Warding', nameJa: 'ブレッシングオブウォーディング', nameZh: '守护祝福', nameKo: '수호의 축복', heroKey: 401, description: 'Increases elemental resistance of self and nearby party members by 10~55.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_BlessingOfWarding.png` },
  40601: { key: 40601, name: 'Resurrection', nameJa: 'リザレクション', nameZh: '复活', nameKo: '부활', heroKey: 401, description: "Revive a fallen party member with 3~7.5% of their max HP.", element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Resurrection.png` },
  // Hunter
  50101: { key: 50101, name: 'Explosive Shot', nameJa: 'エクスプロッシブショット', nameZh: '爆炸箭', nameKo: '폭발 사격', heroKey: 501, description: 'Fire an explosive bolt that deals area damage on impact.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_ExplosiveShot.png` },
  50201: { key: 50201, name: 'Frost Shot', nameJa: 'フロストショット', nameZh: '冰霜箭', nameKo: '서리 사격', heroKey: 501, description: 'Fire a bolt of ice that slows and damages enemies.', element: 'Cold', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_FrostShot.png` },
  50301: { key: 50301, name: 'Trap', nameJa: 'トラップ', nameZh: '陷阱', nameKo: '함정', heroKey: 501, description: 'Place a trap that triggers when an enemy walks over it.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Trap.png` },
  50401: { key: 50401, name: 'Volley', nameJa: 'ヴォレー', nameZh: '连射', nameKo: '일제 사격', heroKey: 501, description: 'Fire a volley of bolts at multiple targets.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Volley.png` },
  50501: { key: 50501, name: 'Shadow Step', nameJa: 'シャドウステップ', nameZh: '暗影步', nameKo: '그림자 발걸음', heroKey: 501, description: 'Teleport behind an enemy and deal critical damage.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_ShadowStep.png` },
  50601: { key: 50601, name: 'Poison Arrow', nameJa: 'ポイズンアロー', nameZh: '毒箭', nameKo: '독 화살', heroKey: 501, description: 'Fire a poisoned bolt that deals damage over time.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_PoisonArrow.png` },
  // Slayer
  60101: { key: 60101, name: 'Axe Throw', nameJa: 'アックススロー', nameZh: '斧投', nameKo: '도끼 던지기', heroKey: 601, description: 'Throw your axe at an enemy, dealing high damage.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_AxeThrow.png` },
  60201: { key: 60201, name: 'Crushing Blow', nameJa: 'クラッシングブロー', nameZh: '碎击', nameKo: '분쇄 일격', heroKey: 601, description: 'Deliver a devastating blow that reduces enemy armor.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_CrushingBlow.png` },
  60301: { key: 60301, name: 'Axe Spin', nameJa: 'アックススピン', nameZh: '旋转斧', nameKo: '도끼 회전', heroKey: 601, description: 'Spin with your axes, hitting all nearby enemies.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_AxeSpin.png` },
  60401: { key: 60401, name: 'Blood Rage', nameJa: 'ブラッドレイジ', nameZh: '血怒', nameKo: '피의 분노', heroKey: 601, description: 'Enter a blood rage, massively increasing attack speed.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_BloodRage.png` },
  60501: { key: 60501, name: 'Cleave', nameJa: 'クリーブ', nameZh: '横扫', nameKo: '베어가기', heroKey: 601, description: 'Sweep your axe in a wide arc, hitting multiple enemies.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Cleave.png` },
  60601: { key: 60601, name: 'Berserker', nameJa: 'バーサーカー', nameZh: '狂战士', nameKo: '광전사', heroKey: 601, description: 'Go berserk, sacrificing defense for massive offense.', element: 'Physical', maxLevel: 5, imageUrl: `${SPRITE_BASE}/Skill_Berserker.png` },
};

// ---- ルーン ----

export interface RuneInfo {
  key: string;
  name: string;
  nameJa: string;
  nameZh: string;
  nameKo: string;
  stat: string;
  type: 'FLAT' | 'ADDITIVE';
  imageUrl: string;
  category: string;
}

export const RUNE_SPRITES: Record<string, string> = {
  AllHeroAttackDamage: `${SPRITE_BASE}/AllHeroAttackDamage.png`,
  AllHeroAttackDamagePercent: `${SPRITE_BASE}/AllHeroAttackDamagePercent.png`,
  AllHeroAttackSpeed: `${SPRITE_BASE}/AllHeroAttackSpeed.png`,
  AllHeroArmor: `${SPRITE_BASE}/AllHeroArmor.png`,
  AllHeroArmorPercent: `${SPRITE_BASE}/AllHeroArmorPercent.png`,
  AllHeroMoveSpeed: `${SPRITE_BASE}/AllHeroMoveSpeed.png`,
  AdditionalGoldStageBoss: `${SPRITE_BASE}/AdditionalGoldStageBoss.png`,
  AdditionalExpStageBoss: `${SPRITE_BASE}/AdditionalExpStageBoss.png`,
  MaxInventorySlot: `${SPRITE_BASE}/MaxInventorySlot.png`,
  UnlockOfflineReward: `${SPRITE_BASE}/UnlockOfflineReward.png`,
  OfflineRewardGoldPercent: `${SPRITE_BASE}/OfflineRewardGoldPercent.png`,
  OfflineRewardExpPercent: `${SPRITE_BASE}/OfflineRewardExpPercent.png`,
  DropChanceNormalChest: `${SPRITE_BASE}/DropChanceNormalChest.png`,
  DropChanceStageBossChest: `${SPRITE_BASE}/DropChanceStageBossChest.png`,
  UnlockArrangeSlotCount: `${SPRITE_BASE}/UnlockArrangeSlotCount.png`,
  UnlockSkillSlotCount: `${SPRITE_BASE}/UnlockSkillSlotCount.png`,
  IncreaseGoldAmount: `${SPRITE_BASE}/IncreaseGoldAmount.png`,
  IncreaseExpAmount: `${SPRITE_BASE}/IncreaseExpAmount.png`,
};

// ---- パッシブスプライト ----

export const PASSIVE_SPRITES: Record<string, string> = {
  AttackDamage: `${SPRITE_BASE}/Passive_AttackDamage.png`,
  MaxHp: `${SPRITE_BASE}/Passive_MaxHp.png`,
  Armor: `${SPRITE_BASE}/Passive_Armor.png`,
  CriticalChance: `${SPRITE_BASE}/Passive_CriticalChance.png`,
  CriticalDamage: `${SPRITE_BASE}/Passive_CriticalDamage.png`,
  AttackSpeed: `${SPRITE_BASE}/Passive_AttackSpeed.png`,
  CastSpeed: `${SPRITE_BASE}/Passive_CastSpeed.png`,
  CooldownReduction: `${SPRITE_BASE}/Passive_CooldownReduction.png`,
  DamageAbsorption: `${SPRITE_BASE}/Passive_DamageAbsorption.png`,
  BlockChance: `${SPRITE_BASE}/Passive_BlockChance.png`,
  DodgeChance: `${SPRITE_BASE}/Passive_DodgeChance.png`,
  HpLeech: `${SPRITE_BASE}/Passive_HpLeech.png`,
  HpRegenPerSec: `${SPRITE_BASE}/Passive_HpRegenPerSec.png`,
  AreaOfEffect: `${SPRITE_BASE}/Passive_AreaOfEffect.png`,
  MovementSpeed: `${SPRITE_BASE}/Passive_MovementSpeed.png`,
  PhysicalDamagePercent: `${SPRITE_BASE}/Passive_PhysicalDamagePercent.png`,
  AllElementalResistance: `${SPRITE_BASE}/Passive_AllElementalResistance.png`,
  FireDamagePercent: `${SPRITE_BASE}/Passive_FireDamagePercent.png`,
  ColdDamagePercent: `${SPRITE_BASE}/Passive_ColdDamagePercent.png`,
  LightningDamagePercent: `${SPRITE_BASE}/Passive_LightningDamagePercent.png`,
  SkillHealAmount: `${SPRITE_BASE}/Passive_SkillHealAmount.png`,
};

// ---- ヘルパー関数 ----

export function getHero(heroKey: number): HeroInfo | undefined {
  return HEROES[heroKey];
}

export function getSkill(skillKey: number): SkillInfo | undefined {
  return SKILLS[skillKey];
}

export function getSkillName(skillKey: number, locale = 'ja'): string {
  const skill = SKILLS[skillKey];
  if (!skill) return `Skill #${skillKey}`;
  if (locale === 'ja') return skill.nameJa;
  if (locale === 'zh') return skill.nameZh;
  if (locale === 'ko') return skill.nameKo;
  return skill.name;
}

export function getHeroName(heroKey: number, locale = 'ja'): string {
  const hero = HEROES[heroKey];
  if (!hero) return `Hero #${heroKey}`;
  if (locale === 'ja') return hero.nameJa;
  if (locale === 'zh') return hero.nameZh;
  if (locale === 'ko') return hero.nameKo;
  return hero.name;
}
