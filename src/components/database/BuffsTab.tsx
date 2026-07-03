'use client';

import { useState } from 'react';
import { BUFFS } from '@/lib/db';

export default function BuffsTab() {
  const [typeFilter, setTypeFilter] = useState<'all' | 'Buff' | 'Debuff'>('all');

  const filtered = BUFFS.filter((b) => typeFilter === 'all' || b.type === typeFilter);

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {(['all', 'Buff', 'Debuff'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              typeFilter === t ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {t === 'all' ? 'すべて' : t === 'Buff' ? 'バフ' : 'デバフ'}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-800 text-gray-500 text-xs">
              <th className="pb-2 pr-4">種類</th>
              <th className="pb-2 pr-4">ステータス</th>
              <th className="pb-2 pr-4">変化タイプ</th>
              <th className="pb-2 pr-4">値</th>
              <th className="pb-2">状態異常</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, i) => (
              <tr key={i} className="border-b border-gray-900 hover:bg-gray-900/50">
                <td className="py-2 pr-4">
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    b.type === 'Buff' ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'
                  }`}>
                    {b.type === 'Buff' ? 'バフ' : 'デバフ'}
                  </span>
                </td>
                <td className="py-2 pr-4 text-gray-300">{b.statJa}</td>
                <td className="py-2 pr-4 text-gray-500 text-xs">{b.modType}</td>
                <td className="py-2 pr-4 text-amber-400 font-mono">{b.value ?? '—'}</td>
                <td className="py-2 text-purple-400 text-xs">{b.statusEffect ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
