'use client';

import Image from 'next/image';
import { useState } from 'react';
import { OFFERING_COINS, type OfferingCoin } from '@/lib/db/offering';

const GRADE_COLORS: Record<string, string> = {
  COMMON:    'text-gray-300',
  UNCOMMON:  'text-green-400',
  RARE:      'text-blue-400',
  LEGENDARY: 'text-amber-400',
  IMMORTAL:  'text-orange-400',
  ARCANA:    'text-purple-400',
  BEYOND:    'text-pink-400',
  CELESTIAL: 'text-cyan-400',
  DIVINE:    'text-yellow-300',
  COSMIC:    'text-white',
};

const GRADE_BAR_BG: Record<string, string> = {
  COMMON:    'bg-gray-600',
  UNCOMMON:  'bg-green-600',
  RARE:      'bg-blue-600',
  LEGENDARY: 'bg-amber-600',
  IMMORTAL:  'bg-orange-600',
  ARCANA:    'bg-purple-600',
  BEYOND:    'bg-pink-600',
  CELESTIAL: 'bg-cyan-600',
  DIVINE:    'bg-yellow-400',
  COSMIC:    'bg-white',
};

const TIER_BORDER: Record<number, string> = {
  1: 'border-gray-600',
  2: 'border-green-600',
  3: 'border-blue-600',
  4: 'border-amber-600',
  5: 'border-orange-600',
  6: 'border-purple-600',
  7: 'border-pink-600',
  8: 'border-cyan-500',
  9: 'border-yellow-400',
  10: 'border-white',
};

export default function OfferingTab() {
  const [selected, setSelected] = useState<OfferingCoin | null>(null);

  return (
    <div className="relative">
      <p className="text-gray-400 text-sm mb-6">
        キューブLv20でアンロック。記念コインを捧げてランダムグレードのアイテムを入手。
      </p>

      <div className="flex gap-4">
        {/* コイン一覧（左） */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 flex-1">
          {OFFERING_COINS.map((coin) => {
            const isSelected = selected?.key === coin.key;
            const border = TIER_BORDER[coin.tier] ?? 'border-gray-700';
            return (
              <button
                key={coin.key}
                onClick={() => setSelected(isSelected ? null : coin)}
                className={`bg-gray-900 border-2 ${border} rounded-xl p-3 flex flex-col items-center gap-2 transition-all hover:brightness-110 ${
                  isSelected ? 'brightness-125 scale-105' : 'opacity-90'
                }`}
              >
                <Image
                  src={coin.imageUrl}
                  alt={coin.nameJa}
                  width={56}
                  height={56}
                  className="rounded-lg"
                  unoptimized
                />
                <div className="text-center">
                  <p className="text-xs text-gray-200 font-medium leading-tight">{coin.nameJa}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Tier {coin.tier}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 確率パネル（右上固定） */}
        {selected && (
          <div className="w-64 flex-shrink-0 sticky top-4 self-start">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={selected.imageUrl}
                  alt={selected.nameJa}
                  width={36}
                  height={36}
                  className="rounded-lg"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-bold text-gray-100 leading-tight">{selected.nameJa}</p>
                  <p className="text-xs text-gray-500">Tier {selected.tier} · コスト {selected.cost}G</p>
                </div>
              </div>

              {/* 確率バー */}
              <div className="space-y-2">
                {selected.odds.map((odd) => (
                  <div key={odd.grade}>
                    <div className="flex justify-between items-center mb-0.5">
                      <span className={`text-xs font-semibold ${GRADE_COLORS[odd.grade] ?? 'text-gray-300'}`}>
                        {odd.gradeJa}
                      </span>
                      <span className={`text-sm font-bold ${GRADE_COLORS[odd.grade] ?? 'text-gray-300'}`}>
                        {odd.chance}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${GRADE_BAR_BG[odd.grade] ?? 'bg-gray-500'}`}
                        style={{ width: `${Math.min(odd.chance, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full text-xs text-gray-500 hover:text-gray-300 text-center"
              >
                閉じる ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
