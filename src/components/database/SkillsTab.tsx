'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { SKILLS, HEROES } from '@/lib/db';

const HERO_KEYS = Object.keys(HEROES).map(Number);

export default function SkillsTab() {
  const [search, setSearch] = useState('');
  const [heroFilter, setHeroFilter] = useState<number | null>(null);

  const skills = useMemo(() => {
    return Object.values(SKILLS).filter((s) => {
      const q = search.toLowerCase();
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.nameJa.includes(q) || String(s.key).includes(q);
      const matchHero = !heroFilter || s.heroKey === heroFilter;
      return matchSearch && matchHero;
    });
  }, [search, heroFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="スキル名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-amber-500"
        />
        <select
          value={heroFilter ?? ''}
          onChange={(e) => setHeroFilter(e.target.value === '' ? null : Number(e.target.value))}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none"
        >
          <option value="">全ヒーロー</option>
          {HERO_KEYS.map((k) => (
            <option key={k} value={k}>{HEROES[k].nameJa}</option>
          ))}
        </select>
      </div>

      <p className="text-xs text-gray-500 mb-4">{skills.length}件</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => {
          const hero = HEROES[skill.heroKey];
          return (
            <div key={skill.key} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex gap-3 items-start hover:border-amber-700 transition-colors">
              <div className="w-10 h-10 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center">
                <Image src={skill.imageUrl} alt={skill.name} width={40} height={40} unoptimized
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-100">{skill.nameJa}</p>
                <p className="text-xs text-gray-500">{skill.name}</p>
                <div className="flex gap-2 mt-1">
                  {hero && <span className={`text-xs ${hero.color}`}>{hero.nameJa}</span>}
                  <span className="text-xs text-gray-600">{skill.element}</span>
                  <span className="text-xs text-gray-600">Lv.{skill.maxLevel}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{skill.description}</p>
                <p className="text-xs text-gray-700 font-mono mt-1">#{skill.key}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
