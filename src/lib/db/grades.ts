/**
 * TBH アイテムグレード定義 (v1.00.21)
 * Source: tbherohelper.com/database/grades
 */
export interface GradeInfo {
  id: number;
  name: string;
  nameJa: string;
  inherentSlots: number;
  decorationSlots: number;
  engravingSlots: number;
  inscriptionSlots: number;
  alchemyGold: number;
  cubeExp: number;
  color: string;
  bgColor: string;
}

export const GRADES: GradeInfo[] = [
  { id: 0, name: 'COMMON',    nameJa: 'コモン',    inherentSlots: 0, decorationSlots: 0, engravingSlots: 0, inscriptionSlots: 0, alchemyGold: 10,      cubeExp: 2,      color: 'text-gray-300',   bgColor: 'bg-gray-700' },
  { id: 1, name: 'UNCOMMON',  nameJa: 'アンコモン', inherentSlots: 1, decorationSlots: 1, engravingSlots: 0, inscriptionSlots: 0, alchemyGold: 30,      cubeExp: 6,      color: 'text-green-400',  bgColor: 'bg-green-900' },
  { id: 2, name: 'RARE',      nameJa: 'レア',      inherentSlots: 2, decorationSlots: 1, engravingSlots: 1, inscriptionSlots: 0, alchemyGold: 90,      cubeExp: 18,     color: 'text-blue-400',   bgColor: 'bg-blue-900' },
  { id: 3, name: 'LEGENDARY', nameJa: 'レジェンダリー', inherentSlots: 3, decorationSlots: 2, engravingSlots: 2, inscriptionSlots: 0, alchemyGold: 270,  cubeExp: 54,     color: 'text-amber-400',  bgColor: 'bg-amber-900' },
  { id: 4, name: 'IMMORTAL',  nameJa: 'イモータル', inherentSlots: 4, decorationSlots: 2, engravingSlots: 2, inscriptionSlots: 1, alchemyGold: 810,     cubeExp: 162,    color: 'text-orange-400', bgColor: 'bg-orange-900' },
  { id: 5, name: 'ARCANA',    nameJa: 'アルカナ',  inherentSlots: 5, decorationSlots: 3, engravingSlots: 2, inscriptionSlots: 1, alchemyGold: 2592,    cubeExp: 518,    color: 'text-purple-400', bgColor: 'bg-purple-900' },
  { id: 6, name: 'BEYOND',    nameJa: 'ビヨンド',  inherentSlots: 6, decorationSlots: 3, engravingSlots: 2, inscriptionSlots: 2, alchemyGold: 8294,    cubeExp: 1658,   color: 'text-pink-400',   bgColor: 'bg-pink-900' },
  { id: 7, name: 'CELESTIAL', nameJa: 'セレスティアル', inherentSlots: 7, decorationSlots: 3, engravingSlots: 2, inscriptionSlots: 2, alchemyGold: 29029, cubeExp: 5803,   color: 'text-cyan-400',   bgColor: 'bg-cyan-900' },
  { id: 8, name: 'DIVINE',    nameJa: 'ディバイン', inherentSlots: 8, decorationSlots: 3, engravingSlots: 2, inscriptionSlots: 2, alchemyGold: 101602,  cubeExp: 20311,  color: 'text-yellow-300', bgColor: 'bg-yellow-900' },
  { id: 9, name: 'COSMIC',    nameJa: 'コズミック', inherentSlots: 9, decorationSlots: 3, engravingSlots: 2, inscriptionSlots: 2, alchemyGold: 355607,  cubeExp: 71089,  color: 'text-white',      bgColor: 'bg-slate-700' },
];

export function getGrade(id: number): GradeInfo | undefined {
  return GRADES[id];
}

export function getGradeName(id: number, locale = 'ja'): string {
  const g = GRADES[id];
  if (!g) return `Grade ${id}`;
  return locale === 'ja' ? g.nameJa : g.name;
}
