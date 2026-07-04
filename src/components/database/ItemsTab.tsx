'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { MATERIALS, GEAR_ITEMS } from '@/lib/db/all-items';
import { GRADES } from '@/lib/db/grades';
import { SPRITE_BASE } from '@/lib/db/item-mapping';
import { getInherentStats, getSlotsForGrade } from '@/lib/db/inherent-stats';

const HERO_CLASSES = ['Knight', 'Ranger', 'Sorcerer', 'Priest', 'Hunter', 'Slayer'];
const CATEGORIES = ['Decoration', 'Engraving', 'Inscription', 'Crafting', 'Offering'];
const CATEGORIES_JA: Record<string, string> = {
  Decoration: 'デコレーション',
  Engraving: 'エングレービング',
  Inscription: 'インスクリプション',
  Crafting: 'クラフト素材',
  Offering: 'オファリング',
};
const GEAR_TYPES_JA: Record<string, string> = {
  SWORD:'剣', BOW:'弓', STAFF:'スタッフ', SCEPTER:'セプター', CROSSBOW:'クロスボウ',
  AXE:'斧', SHIELD:'盾', ARROW:'矢', ORB:'オーブ', TOME:'トーム',
  BOLT:'ボルト', HATCHET:'ハチェット', HELMET:'ヘルメット', ARMOR:'アーマー',
  GLOVES:'グローブ', BOOTS:'ブーツ', AMULET:'アミュレット', EARING:'イヤリング',
  RING:'リング', BRACER:'ブレーサー',
};

// グレード別ボーダーカラー
const GRADE_BORDER = [
  'border-gray-700',   // 0 Common
  'border-green-700',  // 1 Uncommon
  'border-blue-700',   // 2 Rare
  'border-amber-500',  // 3 Legendary
  'border-orange-500', // 4 Immortal
  'border-purple-500', // 5 Arcana
  'border-pink-500',   // 6 Beyond
  'border-cyan-400',   // 7 Celestial
  'border-yellow-300', // 8 Divine
  'border-white',      // 9 Cosmic
];

type TabMode = 'material' | 'gear';

export default function ItemsTab() {
  const [mode, setMode] = useState<TabMode>('material');
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [heroFilter, setHeroFilter] = useState<string | null>(null);

  const filteredMaterials = useMemo(() => {
    return MATERIALS.filter(m => {
      const q = search.toLowerCase();
      const matchSearch = !q || m.nameJa.includes(q) || m.name.toLowerCase().includes(q);
      const matchGrade = gradeFilter === null || m.grade === gradeFilter;
      const matchCat = !categoryFilter || m.category === categoryFilter;
      return matchSearch && matchGrade && matchCat;
    });
  }, [search, gradeFilter, categoryFilter]);

  const filteredGear = useMemo(() => {
    return GEAR_ITEMS.filter(g => {
      const q = search.toLowerCase();
      const matchSearch = !q || g.nameJa.includes(q) || g.name.toLowerCase().includes(q);
      const matchGrade = gradeFilter === null || g.grade === gradeFilter;
      const matchHero = !heroFilter || g.heroClass === heroFilter;
      return matchSearch && matchGrade && matchHero && g.obtainable;
    });
  }, [search, gradeFilter, heroFilter]);

  return (
    <div>
      {/* モード切り替え */}
      <div className="flex gap-2 mb-4">
        {(['material', 'gear'] as const).map((m) => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === m ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {m === 'material' ? '💎 素材' : '⚔️ 武器・装備'}
          </button>
        ))}
      </div>

      {/* フィルター */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="アイテム名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-amber-500"
        />
        <select
          value={gradeFilter ?? ''}
          onChange={(e) => setGradeFilter(e.target.value === '' ? null : Number(e.target.value))}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none"
        >
          <option value="">全グレード</option>
          {GRADES.map((g, i) => <option key={i} value={i}>{g.nameJa}</option>)}
        </select>
        {mode === 'material' && (
          <select value={categoryFilter ?? ''} onChange={(e) => setCategoryFilter(e.target.value || null)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none"
          >
            <option value="">全カテゴリ</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{CATEGORIES_JA[c]}</option>)}
          </select>
        )}
        {mode === 'gear' && (
          <select value={heroFilter ?? ''} onChange={(e) => setHeroFilter(e.target.value || null)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none"
          >
            <option value="">全ヒーロー</option>
            {HERO_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        )}
      </div>

      <p className="text-xs text-gray-500 mb-4">
        {mode === 'material' ? filteredMaterials.length : filteredGear.length}件
      </p>

      {/* 素材一覧 */}
      {mode === 'material' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredMaterials.map(item => {
            const grade = GRADES[item.grade];
            const border = GRADE_BORDER[item.grade] ?? 'border-gray-700';
            return (
              <div key={item.key} className={`bg-gray-900 border ${border} rounded-xl p-3 flex flex-col items-center gap-2 hover:brightness-110 transition-all`}>
                <div className="w-12 h-12 relative">
                  <Image src={`${SPRITE_BASE}/Item_${item.key}.png`} alt={item.name}
                    width={48} height={48} className="object-contain" unoptimized
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-200 font-medium leading-tight">{item.nameJa}</p>
                  <p className={`text-xs mt-0.5 ${grade?.color ?? 'text-gray-500'}`}>{grade?.nameJa}</p>
                  <p className="text-xs text-gray-600">{CATEGORIES_JA[item.category]}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ギア一覧 */}
      {mode === 'gear' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredGear.map(item => {
            const grade = GRADES[item.grade];
            const border = GRADE_BORDER[item.grade] ?? 'border-gray-700';
            return (
              <div key={`${item.key}-${item.grade}`} className={`bg-gray-900 border ${border} rounded-xl p-4 flex gap-3 items-center hover:brightness-110 transition-all`}>
                <div className="w-12 h-12 flex-shrink-0">
                  <Image src={`${SPRITE_BASE}/${item.type}_${item.key}.png`} alt={item.name}
                    width={48} height={48} className="object-contain" unoptimized
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.2'; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-100">{item.nameJa}</p>
                  <p className="text-xs text-gray-500">{item.name}</p>
                  <div className="flex flex-wrap gap-2 mt-1 text-xs">
                    <span className={grade?.color ?? 'text-gray-500'}>{grade?.nameJa}</span>
                    <span className="text-gray-500">{GEAR_TYPES_JA[item.type] ?? item.type}</span>
                    <span className="text-gray-500">{item.heroClass}</span>
                    <span className="text-gray-600">Lv.{item.minLevel}+</span>
                  </div>
                  {(item.atk || item.atkSpd) && (
                    <div className="flex gap-3 mt-1 text-xs text-gray-400">
                      {item.atk && <span>ATK {item.atk}</span>}
                      {item.atkSpd && <span>速度 {item.atkSpd}%</span>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {((mode === 'material' && filteredMaterials.length === 0) ||
        (mode === 'gear' && filteredGear.length === 0)) && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-3">🔍</p>
          <p>一致するアイテムが見つかりません</p>
        </div>
      )}
    </div>
  );
}
