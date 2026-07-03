'use client';

import { GRADES } from '@/lib/db';

export default function GradesTab() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-800 text-gray-500 text-xs">
            <th className="pb-2 pr-4">グレード</th>
            <th className="pb-2 pr-4">固有スロット</th>
            <th className="pb-2 pr-4">デコレーション</th>
            <th className="pb-2 pr-4">エングレービング</th>
            <th className="pb-2 pr-4">インスクリプション</th>
            <th className="pb-2 pr-4">錬金ゴールド</th>
            <th className="pb-2">キューブEXP</th>
          </tr>
        </thead>
        <tbody>
          {GRADES.map((g) => (
            <tr key={g.id} className="border-b border-gray-900 hover:bg-gray-900/50">
              <td className="py-2 pr-4">
                <span className={`font-bold ${g.color}`}>{g.nameJa}</span>
              </td>
              <td className="py-2 pr-4 text-gray-300 font-mono">{g.inherentSlots}</td>
              <td className="py-2 pr-4 text-gray-300 font-mono">{g.decorationSlots}</td>
              <td className="py-2 pr-4 text-gray-300 font-mono">{g.engravingSlots}</td>
              <td className="py-2 pr-4 text-gray-300 font-mono">{g.inscriptionSlots}</td>
              <td className="py-2 pr-4 text-amber-400 font-mono">{g.alchemyGold.toLocaleString()}</td>
              <td className="py-2 text-green-400 font-mono">{g.cubeExp.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
