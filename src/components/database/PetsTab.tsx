'use client';

import Image from 'next/image';
import { PETS } from '@/lib/db';

export default function PetsTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PETS.map((pet) => (
        <div key={pet.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-amber-700 transition-colors">
          <div className="relative">
            <Image src={pet.imageUrl} alt={pet.name} width={80} height={80} unoptimized
              className="rounded-lg bg-gray-800 p-1" />
            {pet.isDLC && (
              <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-gray-900 px-1.5 py-0.5 rounded font-bold">DLC</span>
            )}
          </div>
          <div className="text-center">
            <h3 className="font-bold text-gray-100">{pet.nameJa}</h3>
            <p className="text-xs text-gray-500 mt-1">{pet.unlockConditionJa}</p>
          </div>
          <div className="w-full space-y-1">
            {pet.bonuses.map((b, i) => (
              <div key={i} className="flex justify-between text-xs bg-gray-800/50 rounded px-2 py-1">
                <span className="text-gray-400">{b.stat}</span>
                <span className="text-green-400 font-semibold">+{b.value}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
