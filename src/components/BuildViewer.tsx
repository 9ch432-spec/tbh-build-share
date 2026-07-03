'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import type { ParsedBuild, HeroData } from '@/lib/es3-parser';
import { HEROES, SKILLS, getSkillName, getHeroName, SPRITE_BASE } from '@/lib/game-data';
import { getItemMapping, getItemSpriteUrl, getItemName } from '@/lib/db/item-mapping';
import { GRADES } from '@/lib/db/grades';

function formatPlayTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

interface Props {
  build: ParsedBuild;
}

export default function BuildViewer({ build }: Props) {
  const t = useTranslations('build');

  return (
    <div className="space-y-6">
      {/* 共通情報バー */}
      {build.common && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-4 flex flex-wrap gap-6 text-sm">
          {build.common.version && (
            <div>
              <span className="text-gray-500">バージョン </span>
              <span className="text-gray-200 font-mono">{build.common.version}</span>
            </div>
          )}
          {build.common.playTime > 0 && (
            <div>
              <span className="text-gray-500">プレイ時間 </span>
              <span className="text-gray-200">{formatPlayTime(build.common.playTime)}</span>
            </div>
          )}
          {build.common.maxCompletedStage != null && (
            <div>
              <span className="text-gray-500">最大クリアステージ </span>
              <span className="text-amber-400 font-semibold">{build.common.maxCompletedStage}</span>
            </div>
          )}
        </div>
      )}

      {/* パーティ */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">{t('party')}</h2>
        {build.heroes.length === 0 ? (
          <p className="text-gray-500 text-sm">ヒーローデータが見つかりませんでした</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {build.heroes.map((hero) => (
              <HeroCard key={hero.index} hero={hero} />
            ))}
          </div>
        )}
      </div>

      {/* デバッグ */}
      <details className="mt-4">
        <summary className="cursor-pointer text-xs text-gray-600 hover:text-gray-400 select-none">
          生データを表示（デバッグ用）
        </summary>
        <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-96 bg-gray-950 p-3 rounded-lg">
          {JSON.stringify(build.rawPlayerData, null, 2)}
        </pre>
      </details>
    </div>
  );
}

function HeroCard({ hero }: { hero: HeroData }) {
  const t = useTranslations('build');
  const locale = useLocale();
  const heroInfo = HEROES[hero.heroKey];
  const heroName = heroInfo
    ? locale === 'ja' ? heroInfo.nameJa
      : locale === 'zh' ? heroInfo.nameZh
      : locale === 'ko' ? heroInfo.nameKo
      : heroInfo.name
    : hero.class;

  const gradient = heroInfo?.gradient ?? 'from-gray-800/40';
  const color = heroInfo?.color ?? 'text-gray-300';
  const activeSkills = hero.equippedSkillKeys.filter((k) => k > 0);

  return (
    <div className={`bg-gradient-to-b ${gradient} to-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col`}>
      {/* ヘッダー：キャラクター画像 + 名前 */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        {heroInfo && (
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src={heroInfo.imageUrl}
              alt={heroName}
              width={56}
              height={56}
              className="rounded-lg object-contain bg-gray-800"
              unoptimized
            />
            {heroInfo.isDLC && (
              <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-gray-900 px-1 rounded font-bold leading-tight">
                DLC
              </span>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={`font-bold text-xl ${color} truncate`}>{heroName}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-gray-400 text-sm">Lv. <span className="text-gray-200 font-semibold">{hero.level}</span></span>
            {heroInfo && (
              <span className="text-xs text-gray-600">{heroInfo.weapon}</span>
            )}
          </div>
        </div>
      </div>

      {/* ベースステータス（ヒーロー固有） */}
      {heroInfo && (
        <div className="mx-5 mb-3 bg-gray-900/60 rounded-lg px-3 py-2 grid grid-cols-3 gap-x-2 gap-y-1">
          <StatPill label="HP" value={heroInfo.hp} highlight />
          <StatPill label="ATK" value={heroInfo.atk} highlight />
          <StatPill label="Armor" value={`${heroInfo.armor}`} />
          <StatPill label="AtkSpd" value={`${heroInfo.atkSpd}%`} />
          <StatPill label="Crit" value={`${heroInfo.crit}%`} />
          <StatPill label="CritDmg" value={`${heroInfo.critDmg}×`} />
        </div>
      )}

      {/* プレイヤーのステータス */}
      <div className="mx-5 mb-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{t('stats')}</p>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-xs text-amber-400">★ EXP</span>
            <span className="text-xs font-mono text-amber-300 font-bold">{hero.exp.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">アビリティPt</span>
            <span className="text-xs font-mono text-gray-300">{hero.allocatedAbilityPoint} 割当 / {hero.abilityPoint} 残</span>
          </div>
        </div>
      </div>

      {/* スキル */}
      {activeSkills.length > 0 && (
        <div className="mx-5 mb-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('skills')}</p>
          <div className="flex flex-col gap-1.5">
            {activeSkills.map((skillKey) => {
              const skill = SKILLS[skillKey];
              const skillName = getSkillName(skillKey, locale);
              return (
                <div key={skillKey} className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2 py-1.5">
                  {skill && (
                    <div className="w-7 h-7 flex-shrink-0 relative">
                      <Image
                        src={skill.imageUrl}
                        alt={skillName}
                        width={28}
                        height={28}
                        className="rounded object-contain"
                        unoptimized
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-200 truncate">{skillName}</p>
                    {skill && (
                      <p className="text-xs text-gray-500 truncate">{skill.element}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 装備スロット */}
      <div className="mx-5 mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {t('gear')} <span className="text-gray-600 normal-case font-normal">({hero.equippedItemKeys.filter(k => k > 0).length}/{hero.equippedItemKeys.length})</span>
        </p>
        <div className="grid grid-cols-5 gap-1">
          {hero.equippedItemKeys.map((itemKey, i) => {
            if (itemKey <= 0) {
              return (
                <div key={i} className="aspect-square rounded-md flex items-center justify-center bg-gray-800/30 border border-gray-700/20 text-gray-700 text-xs">·</div>
              );
            }
            const mapping = getItemMapping(itemKey);
            const gradeInfo = GRADES[mapping.grade];
            return (
              <div
                key={i}
                className="aspect-square rounded-md flex items-center justify-center border border-gray-700/40 bg-gray-900/50 hover:border-amber-600/60 transition-colors relative"
                title={`${mapping.nameJa}${gradeInfo ? ` (${gradeInfo.nameJa})` : ''}\n#${itemKey}`}
              >
                <Image
                  src={`https://tbherohelper.com/sprites/${mapping.sprite}.png`}
                  alt={mapping.nameJa}
                  width={32}
                  height={32}
                  className="object-contain p-0.5"
                  unoptimized
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value, highlight = false }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className={`text-xs ${highlight ? 'text-amber-400' : 'text-gray-500'}`}>{label}</span>
      <span className={`text-xs font-mono font-semibold ${highlight ? 'text-amber-300' : 'text-gray-300'}`}>{value}</span>
    </div>
  );
}
