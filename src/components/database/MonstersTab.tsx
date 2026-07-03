'use client';

import { useState, useMemo } from 'react';
import { MONSTERS } from '@/lib/db';

const ELEMENTS = [...new Set(MONSTERS.map((m) => m.element))].sort();

const ELEMENT_COLORS: Record<string, string> = {
  Physical: 'text-gray-300', Fire: 'text-red-400',
  Cold: 'text-blue-400', Lightning: 'text-yellow-400', Chaos: 'text-purple-400',
};

export default function MonstersTab() {
  const [search, setSearch] = useState('');
  const [elementFilter, setElementFilter] = useState('');
  const [bossOnly, setBossOnly] = useState(false);

  const monsters = useMemo(() => {
    return MONSTERS.filter((m) => {
      const q = search.toLowerCase();
      const matchSearch = !q || m.name.toLowerCase().includes(q) || m.nameJa.includes(q);
      const matchElement = !elementFilter || m.element === elementFilter;
      const matchBoss = !bossOnly || m.isBoss;
      return matchSearch && matchElement && matchBoss;
    });
  }, [search, elementFilter, bossOnly]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="モンスター名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-amber-500"
        />
        <select
          value={elementFilter}
          onChange={(e) => setElementFilter(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none"
        >
          <option value="">全属性</option>
          {ELEMENTS.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input type="checkbox" checked={bossOnly} onChange={(e) => setBossOnly(e.target.checked)} className="accent-amber-500" />
          ボスのみ
        </label>
      </div>

      <p className="text-xs text-gray-500 mb-4">{monsters.length}件</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-800 text-gray-500 text-xs">
              <th className="pb-2 pr-4">名前</th>
              <th className="pb-2 pr-4">属性</th>
              <th className="pb-2 pr-4">HP</th>
              <th className="pb-2 pr-4">ATK</th>
              <th className="pb-2 pr-4">移動速度</th>
              <th className="pb-2">EXP</th>
            </tr>
          </thead>
          <tbody>
            {monsters.map((m) => (
              <tr key={m.id} className="border-b border-gray-900 hover:bg-gray-900/50">
                <td className="py-2 pr-4">
                  <span className="text-gray-200">{m.nameJa}</span>
                  {m.isBoss && <span className="ml-2 text-xs bg-red-900/50 text-red-400 px-1.5 py-0.5 rounded">BOSS</span>}
                </td>
                <td className={`py-2 pr-4 ${ELEMENT_COLORS[m.element] ?? 'text-gray-400'}`}>{m.element}</td>
                <td className="py-2 pr-4 text-gray-300 font-mono">{m.hp.toLocaleString()}</td>
                <td className="py-2 pr-4 text-gray-300 font-mono">{m.atk}</td>
                <td className="py-2 pr-4 text-gray-300 font-mono">{m.moveSpd}</td>
                <td className="py-2 text-amber-400 font-mono">{m.expReward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
