'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import type { ParsedBuild, HeroData, ItemSlotData } from '@/lib/es3-parser';
import { HEROES, SKILLS, getSkillName } from '@/lib/game-data';
import { getItemMapping } from '@/lib/db/item-mapping';
import { GRADES } from '@/lib/db/grades';
import { GEAR_ITEMS, MATERIALS } from '@/lib/db/all-items';
import { getInherentStats, getSlotsForGrade } from '@/lib/db/inherent-stats';

// グレードID→ボーダーカラー
const GRADE_BORDER: Record<number, string> = {
  0: 'border-gray-600', 1: 'border-green-600', 2: 'border-blue-500',
  3: 'border-amber-500', 4: 'border-orange-500', 5: 'border-purple-500',
  6: 'border-pink-500', 7: 'border-cyan-400', 8: 'border-yellow-300', 9: 'border-white',
};
const GRADE_TEXT: Record<number, string> = {
  0: 'text-gray-400', 1: 'text-green-400', 2: 'text-blue-400',
  3: 'text-amber-400', 4: 'text-orange-400', 5: 'text-purple-400',
  6: 'text-pink-400', 7: 'text-cyan-400', 8: 'text-yellow-300', 9: 'text-white',
};

function formatPlayTime(s: number) {
  return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
}
function formatStage(k: number) {
  const c = Math.floor(k / 100), s = k % 100;
  return (c > 0 && s > 0) ? `${c}-${s}` : String(k);
}
function getDifficulty(k: number) {
  const c = Math.floor(k / 100);
  if (c <= 3) return { label: 'ノーマル', color: 'bg-gray-700 text-gray-300' };
  if (c <= 6) return { label: 'ハード', color: 'bg-blue-900 text-blue-300' };
  if (c <= 9) return { label: 'トーメント', color: 'bg-red-900 text-red-300' };
  return { label: 'エキスパート', color: 'bg-purple-900 text-purple-300' };
}

// スプライトキー（数値）→ GearItem を引く
function getGearItemBySprite(spriteNum: number, grade: number) {
  return GEAR_ITEMS.find(g => g.key === spriteNum && g.grade === grade)
    ?? GEAR_ITEMS.find(g => g.key === spriteNum);
}

// ItemMapping のスプライト文字列からスプライト番号を取得 (例: "BOW_310014" → 310014)
function spriteToNum(sprite: string): number {
  const parts = sprite.split('_');
  return parseInt(parts[parts.length - 1]) || 0;
}

// 素材名を取得
function getMaterialName(key: number): string {
  return MATERIALS.find(m => m.key === key)?.nameJa ?? `#${key}`;
}
function getMaterialGrade(key: number): number {
  return MATERIALS.find(m => m.key === key)?.grade ?? 0;
}
function getMaterialCategory(key: number): string {
  return MATERIALS.find(m => m.key === key)?.category ?? '';
}

// ---- STATSタブ計算 ----
interface HeroStats {
  level: number;
  hp: number; maxHp: number;
  atk: number; basicAtk: number;
  atkSpd: number; castSpd: number;
  crit: number; critDmg: number;
  armor: number; moveSpd: number;
  cdr: number; hpLeech: number;
  elemRes: number;
}

function calcStats(hero: HeroData): HeroStats {
  const base = HEROES[hero.heroKey];
  if (!base) return { level: hero.level, hp: 0, maxHp: 0, atk: 0, basicAtk: 0, atkSpd: 0, castSpd: 0, crit: 0, critDmg: 0, armor: 0, moveSpd: 0, cdr: 0, hpLeech: 0, elemRes: 0 };

  // ベースHP（簡易計算: base.hp × level × 9）
  const maxHp = Math.round(base.hp * hero.level * 9);
  // 武器のATK（メイン武器 = index 0）
  const mainWeaponKey = hero.equippedItemKeys?.[0] ?? 0;
  const mainMapping = mainWeaponKey > 0 ? getItemMapping(mainWeaponKey) : null;
  const spriteNum = mainMapping ? spriteToNum(mainMapping.sprite) : 0;
  const weaponItem = spriteNum > 0 ? getGearItemBySprite(spriteNum, mainMapping?.grade ?? 0) : null;
  const weaponAtk = weaponItem?.atk ?? 0;
  const weaponAtkSpd = weaponItem?.atkSpd ?? base.atkSpd / 100;

  // 基本攻撃 = 武器ATK × AtkSpd / s
  const basicAtk = Math.round(weaponAtk * weaponAtkSpd);

  return {
    level: hero.level,
    hp: maxHp, maxHp,
    atk: weaponAtk,
    basicAtk,
    atkSpd: weaponAtkSpd,
    castSpd: 2.0,
    crit: base.crit,
    critDmg: base.critDmg,
    armor: Math.round(base.armor * hero.level * 2.5),
    moveSpd: base.moveSpd,
    cdr: 0,
    hpLeech: 0,
    elemRes: 0,
  };
}
