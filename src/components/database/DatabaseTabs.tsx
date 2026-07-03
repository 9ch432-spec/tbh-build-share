'use client';

import { useState } from 'react';
import ItemsTab from './ItemsTab';
import MonstersTab from './MonstersTab';
import HeroesTab from './HeroesTab';
import PetsTab from './PetsTab';
import GradesTab from './GradesTab';
import BuffsTab from './BuffsTab';
import SkillsTab from './SkillsTab';

const TABS = [
  { id: 'items',    label: '🎒 アイテム' },
  { id: 'heroes',   label: '⚔️ ヒーロー' },
  { id: 'skills',   label: '✨ スキル' },
  { id: 'monsters', label: '👾 モンスター' },
  { id: 'grades',   label: '🏆 グレード' },
  { id: 'pets',     label: '🐾 ペット' },
  { id: 'buffs',    label: '⬆️ バフ' },
] as const;

type TabId = typeof TABS[number]['id'];

export default function DatabaseTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('items');

  return (
    <div>
      {/* タブバー */}
      <div className="flex flex-wrap gap-1 mb-6 bg-gray-900 border border-gray-800 rounded-xl p-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-amber-500 text-gray-900'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* タブコンテンツ */}
      <div>
        {activeTab === 'items'    && <ItemsTab />}
        {activeTab === 'heroes'   && <HeroesTab />}
        {activeTab === 'skills'   && <SkillsTab />}
        {activeTab === 'monsters' && <MonstersTab />}
        {activeTab === 'grades'   && <GradesTab />}
        {activeTab === 'pets'     && <PetsTab />}
        {activeTab === 'buffs'    && <BuffsTab />}
      </div>
    </div>
  );
}
