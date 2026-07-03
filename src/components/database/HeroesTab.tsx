'use client';

import Image from 'next/image';
import { HEROES } from '@/lib/db';

export default function HeroesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.values(HEROES).map((hero) => (
        <div key={hero.key} className={`bg-gradient-to-b ${hero.gradient} to-gray-900 border border-gray-800 rounded-xl p-5`}>
          <div className="flex items-center gap-4 mb-4">
            <Image src={hero.imageUrl} alt={hero.name} width={64} height={64} className="rounded-lg bg-gray-800" unoptimized />
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-xl font-bold ${hero.color}`}>{hero.nameJa}</h3>
                {hero.isDLC && <span className="text-xs bg-amber-500 text-gray-900 px-1.5 py-0.5 rounded font-bold">DLC</span>}
              </div>
              <p className="text-gray-400 text-sm">{hero.weapon}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[
              ['HP', hero.hp], ['ATK', hero.atk], ['Armor', hero.armor],
              ['AtkSpd', `${hero.atkSpd}%`], ['Crit', `${hero.crit}%`], ['CritDmg', `${hero.critDmg}×`],
            ].map(([label, val]) => (
              <div key={label} className="bg-gray-900/60 rounded p-2">
                <p className="text-gray-500">{label}</p>
                <p className="text-gray-200 font-semibold">{val}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-3 text-xs">
            <span className="text-gray-500">DPSランク <span className="text-amber-400 font-bold">#{hero.dpsRank}</span></span>
            <span className="text-gray-500">EHPランク <span className="text-amber-400 font-bold">#{hero.ehpRank}</span></span>
          </div>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">{hero.description}</p>
        </div>
      ))}
    </div>
  );
}
