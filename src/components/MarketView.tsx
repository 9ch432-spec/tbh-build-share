'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { MARKET_ITEMS, type MarketItem } from '@/lib/db/market-items';

const SPRITE_BASE = 'https://tbherohelper.com/sprites';
const CACHE_KEY = 'tbh_market_v2';
const FAVES_KEY = 'tbh_market_faves';
const CACHE_TTL = 5 * 60 * 1000; // 5分
const CONCURRENCY = 5;
const BATCH_DELAY = 300;

// ---- キャッシュ ----
interface PriceData {
  name: string;
  lowest_price: string | null;
  median_price: string | null;
  volume: string | null;
  lowest_price_num: number;
  loading?: boolean;
  error?: boolean;
}

function loadCache(): { prices: Record<string, PriceData>; ts: number } | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as { prices: Record<string, PriceData>; ts: number };
  } catch { return null; }
}

function saveCache(prices: Record<string, PriceData>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ prices, ts: Date.now() }));
  } catch { /* 容量超過は無視 */ }
}

// ---- お気に入り ----
function loadFaves(): string[] {
  try { return JSON.parse(localStorage.getItem(FAVES_KEY) ?? '[]') as string[]; } catch { return []; }
}
function saveFaves(faves: string[]) {
  try { localStorage.setItem(FAVES_KEY, JSON.stringify(faves)); } catch {}
}

// ---- スプライト ----
const NAME_TO_SPRITE: Record<string, string> = {
  'Minor Ruby':'Item_110001','Minor Sapphire':'Item_110002','Minor Topaz':'Item_110003',
  'Minor Emerald':'Item_110004','Minor Amethyst':'Item_110005',
  'Obsidian Shard':'Item_111001','Coral Piece':'Item_111002','Jade Stone':'Item_111003','Amber Gem':'Item_111004',
  'Ruby':'Item_112001','Sapphire':'Item_112002','Topaz':'Item_112003','Emerald':'Item_112004','Amethyst':'Item_112005',
  'Crystal Quartz':'Item_113001','Pearl':'Item_113002','Turquoise':'Item_113003','Garnet':'Item_113004',
  'Diamond':'Item_114001','Opal':'Item_114002','Lapis Lazuli':'Item_114003','Black Pearl':'Item_114004',
  'Twilight Amethyst':'Item_116001','Phantom Emerald':'Item_116002',
  'Goblin Hide':'Item_120001','Skeleton Bone':'Item_120002','Slime Jelly':'Item_120003',
  'Wolf Fang':'Item_121001','Spider Silk':'Item_121002','Poisonous Herb':'Item_121003','Healing Herb':'Item_121004',
  'Bat Wing Membrane':'Item_122001','Ogre Blood':'Item_122002','Mushroom Spore':'Item_122003','Ancient Tree Sap':'Item_122004',
  'Skull':'Item_123001','Harpy Feather':'Item_123002','Mandrake Root':'Item_123003','Nightshade Extract':'Item_123004',
  'Basilisk Scale':'Item_124001','Wyvern Claw':'Item_124002','Dice':'Item_124003','Demon Blood':'Item_124004',
  'Scroll of Common Inscription':'Item_130001','Scroll of Uncommon Inscription':'Item_131001',
  'Scroll of Rare Inscription':'Item_132001','Scroll of Legendary Inscription':'Item_133001',
  'Scroll of Immortal Inscription':'Item_134001','Scroll of Arcana Inscription':'Item_135001',
  'Wood':'Item_140001','Stone':'Item_140002','Leather':'Item_140003','Copper Nugget':'Item_140004',
  'Bronze Ingot':'Item_141001','Iron Ingot':'Item_141002','Silver Ingot':'Item_142001','Gold Ingot':'Item_142002',
  'Stardust Ingot':'Item_143001','Void Iron':'Item_143002',
  'Kingdom 1st Anniversary Coin':'Item_160001','Empire 1st Anniversary Coin':'Item_160002',
  'Kingdom 10th Anniversary Coin':'Item_160003','Empire 10th Anniversary Coin':'Item_160004',
  'Kingdom 50th Anniversary Coin':'Item_160005','Empire 50th Anniversary Coin':'Item_160006',
  'Kingdom 100th Anniversary Coin':'Item_160007','Empire 100th Anniversary Coin':'Item_160008',
};

function getSprite(item: MarketItem): string {
  const key = NAME_TO_SPRITE[item.name];
  if (key) return `${SPRITE_BASE}/${key}.png`;
  const m = item.type.match(/^([A-Za-z]+)\s*-\s*Lv\.\s*(\d+)$/);
  if (m) {
    const t = m[1].toUpperCase();
    const lv = parseInt(m[2]);
    const n = lv<=20?'001':lv<=30?'007':lv<=40?'009':lv<=50?'011':lv<=65?'014':lv<=80?'017':'020';
    const tm: Record<string,string> = {SWORD:'300',BOW:'310',STAFF:'320',SCEPTER:'330',CROSSBOW:'340',AXE:'350',SHIELD:'400',ARROW:'410',ORB:'420',TOME:'430',BOLT:'440',HATCHET:'450',HELMET:'500',ARMOR:'510',GLOVES:'520',BOOTS:'530',AMULET:'600',EARING:'610',RING:'620',BRACER:'630'};
    if (tm[t]) return `${SPRITE_BASE}/${t}_${tm[t]}${n}.png`;
  }
  return '';
}

// ---- グレード ----
const GRADES = ['Common','Uncommon','Rare','Legendary','Immortal','Arcana','Beyond','Celestial','Divine','Cosmic'];
const GRADE_COLOR: Record<string,string> = {Common:'text-gray-400',Uncommon:'text-green-400',Rare:'text-blue-400',Legendary:'text-amber-400',Immortal:'text-orange-400',Arcana:'text-purple-400',Beyond:'text-pink-400',Celestial:'text-cyan-400',Divine:'text-yellow-300',Cosmic:'text-white'};
const GRADE_BORDER: Record<string,string> = {Common:'border-gray-700',Uncommon:'border-green-700',Rare:'border-blue-700',Legendary:'border-amber-500',Immortal:'border-orange-500',Arcana:'border-purple-500',Beyond:'border-pink-500',Celestial:'border-cyan-400',Divine:'border-yellow-300',Cosmic:'border-white'};

function gradeOf(name: string) {
  for (const g of GRADES) if (name.includes(`(${g})`)) return g;
  return 'Common';
}

// ---- メインコンポーネント ----
const CATS = ['すべて','お気に入り','Gear','Decoration','Engraving','Inscription','Crafting','Offering','Soulstone'];
type SortKey = 'volume'|'lowest'|'name';

export default function MarketView() {
  const [prices, setPrices] = useState<Record<string, PriceData>>({});
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('すべて');
  const [gradeF, setGradeF] = useState('');
  const [sort, setSort] = useState<SortKey>('volume');
  const [fetching, setFetching] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date|null>(null);
  const [fromCache, setFromCache] = useState(false);
  const [faves, setFaves] = useState<string[]>([]);
  const [faveFetching, setFaveFetching] = useState(false);
  const abortRef = useRef(false);

  const fetchOne = async (item: MarketItem): Promise<PriceData> => {
    try {
      const res = await fetch(`/api/market/prices?name=${encodeURIComponent(item.name)}`);
      if (res.ok) return await res.json() as PriceData;
    } catch {}
    return { name: item.name, lowest_price: null, median_price: null, volume: null, lowest_price_num: 0, error: true };
  };

  const fetchAll = useCallback(async (skipCache = false) => {
    // キャッシュ確認
    if (!skipCache) {
      const cache = loadCache();
      if (cache && Date.now() - cache.ts < CACHE_TTL) {
        setPrices(cache.prices);
        setLastUpdated(new Date(cache.ts));
        setFromCache(true);
        setLoaded(Object.keys(cache.prices).length);
        return;
      }
    }

    setFetching(true);
    setLoaded(0);
    setFromCache(false);
    abortRef.current = false;

    const result: Record<string, PriceData> = {};
    const items = [...MARKET_ITEMS];

    // CONCURRENCY件ずつ並列処理
    for (let i = 0; i < items.length; i += CONCURRENCY) {
      if (abortRef.current) break;
      const batch = items.slice(i, i + CONCURRENCY);
      const batchResults = await Promise.all(batch.map(fetchOne));
      batchResults.forEach((p, j) => { result[batch[j].name] = p; });
      setPrices(prev => ({ ...prev, ...result }));
      setLoaded(i + batch.length);
      if (i + CONCURRENCY < items.length) {
        await new Promise(r => setTimeout(r, BATCH_DELAY));
      }
    }

    saveCache(result);
    setFetching(false);
    setLastUpdated(new Date());
  }, []);

  useEffect(() => {
    setFaves(loadFaves());
    fetchAll();
    return () => { abortRef.current = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleFave = (name: string) => {
    setFaves(prev => {
      const next = prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name];
      saveFaves(next);
      return next;
    });
  };

  // お気に入りだけ最新価格を取得
  const refreshFaves = useCallback(async () => {
    const favItems = MARKET_ITEMS.filter(i => faves.includes(i.name));
    if (favItems.length === 0) return;
    setFaveFetching(true);
    for (let i = 0; i < favItems.length; i += CONCURRENCY) {
      const batch = favItems.slice(i, i + CONCURRENCY);
      const results = await Promise.all(batch.map(fetchOne));
      const update: Record<string, PriceData> = {};
      results.forEach((p, j) => { update[batch[j].name] = p; });
      setPrices(prev => {
        const next = { ...prev, ...update };
        saveCache(next);
        return next;
      });
      if (i + CONCURRENCY < favItems.length) await new Promise(r => setTimeout(r, BATCH_DELAY));
    }
    setFaveFetching(false);
  }, [faves]);

  // フィルター・ソート
  const filtered = MARKET_ITEMS
    .filter(item => {
      const q = search.toLowerCase();
      return (!q || item.name.toLowerCase().includes(q))
        && (cat === 'すべて' || (cat === 'お気に入り' ? faves.includes(item.name) : item.category === cat))
        && (!gradeF || gradeOf(item.name) === gradeF);
    })
    .map(item => ({ item, price: prices[item.name] }))
    .sort((a, b) => {
      if (sort === 'volume') {
        const va = parseInt((a.price?.volume??'0').replace(/,/g,''))||0;
        const vb = parseInt((b.price?.volume??'0').replace(/,/g,''))||0;
        return vb - va;
      }
      if (sort === 'lowest') return (b.price?.lowest_price_num??0) - (a.price?.lowest_price_num??0);
      return a.item.name.localeCompare(b.item.name);
    });

  const hotItems = [...MARKET_ITEMS]
    .map(item => ({ item, price: prices[item.name] }))
    .filter(x => x.price && !x.price.loading && (x.price.lowest_price_num??0) > 0)
    .sort((a,b) => (b.price?.lowest_price_num??0)-(a.price?.lowest_price_num??0))
    .slice(0, 5);

  const progress = Math.round((loaded / MARKET_ITEMS.length) * 100);
  const estimateSec = Math.ceil((MARKET_ITEMS.length - loaded) / CONCURRENCY * (BATCH_DELAY / 1000 + 0.5));

  return (
    <div className="space-y-6">
      {/* ステータスバー */}
      {fetching ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">価格取得中... {loaded}/{MARKET_ITEMS.length}件 ({progress}%)</span>
            </div>
            <span className="text-xs text-gray-500">残り約{estimateSec}秒</span>
          </div>
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-gray-600">{CONCURRENCY}件並列取得中</p>
        </div>
      ) : lastUpdated && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {fromCache ? '⚡ キャッシュから表示 · ' : ''}
            最終更新: {lastUpdated.toLocaleTimeString('ja-JP')}
          </p>
          <button onClick={() => fetchAll(true)}
            className="text-xs text-amber-400 hover:text-amber-300 bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg transition-colors">
            🔄 更新
          </button>
        </div>
      )}

      {/* 高値TOP5 */}
      {hotItems.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-amber-400 mb-3">🔥 高値アイテム TOP5</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {hotItems.map(({ item, price }) => {
              const s = getSprite(item);
              return (
                <a key={item.name}
                  href={`https://steamcommunity.com/market/listings/3678970/${encodeURIComponent(item.name)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-gray-900 border border-amber-700/50 rounded-xl p-3 flex flex-col items-center gap-2 hover:border-amber-500 transition-colors">
                  {s && <img src={s} alt={item.name} className="w-10 h-10 object-contain" onError={e=>{(e.target as HTMLImageElement).style.opacity='0.2';}} />}
                  <p className="text-xs text-gray-200 text-center leading-tight line-clamp-2">{item.name}</p>
                  <p className="text-sm font-bold text-amber-400">{price?.lowest_price??'-'}</p>
                  <p className="text-xs text-gray-500">Vol: {price?.volume??'-'}</p>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* お気に入り更新ボタン（お気に入りタブ表示中） */}
      {cat === 'お気に入り' && faves.length > 0 && (
        <div className="flex items-center justify-between bg-gray-900 border border-amber-800/40 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-300">
            ⭐ お気に入り <span className="text-amber-400 font-bold">{faves.length}</span>件
          </p>
          <button onClick={refreshFaves} disabled={faveFetching}
            className="text-sm bg-amber-500 hover:bg-amber-400 disabled:bg-gray-700 disabled:text-gray-500 text-gray-900 font-semibold px-4 py-1.5 rounded-lg transition-colors">
            {faveFetching ? '取得中...' : '🔄 最新価格を取得'}
          </button>
        </div>
      )}

      {/* フィルター */}
      <div className="flex flex-wrap gap-2">
        <input type="text" placeholder="検索..." value={search} onChange={e=>setSearch(e.target.value)}
          className="flex-1 min-w-40 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-amber-500" />
        <select value={cat} onChange={e=>setCat(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm">
          {CATS.map(c=><option key={c} value={c}>{c}</option>)}
        </select>
        <select value={gradeF} onChange={e=>setGradeF(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm">
          <option value="">全グレード</option>
          {GRADES.map(g=><option key={g} value={g}>{g}</option>)}
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value as SortKey)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-sm">
          <option value="volume">取引量順</option>
          <option value="lowest">高値順</option>
          <option value="name">名前順</option>
        </select>
      </div>

      <p className="text-xs text-gray-500">{filtered.length}件 / {MARKET_ITEMS.length}件</p>

      {/* アイテム一覧 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {filtered.map(({ item, price }) => {
          const grade = gradeOf(item.name);
          const border = GRADE_BORDER[grade]??'border-gray-700';
          const gColor = GRADE_COLOR[grade]??'text-gray-400';
          const s = getSprite(item);
          return (
            <a key={item.name}
              href={`https://steamcommunity.com/market/listings/3678970/${encodeURIComponent(item.name)}`}
              target="_blank" rel="noopener noreferrer"
              className={`bg-gray-900 border-2 ${border} rounded-xl p-3 flex flex-col items-center gap-2 hover:brightness-110 transition-all relative`}>
              {/* お気に入りボタン */}
              <button
                onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFave(item.name); }}
                className="absolute top-2 right-2 text-sm leading-none"
                title={faves.includes(item.name) ? 'お気に入り解除' : 'お気に入り追加'}
              >
                {faves.includes(item.name) ? '⭐' : '☆'}
              </button>
              {s && <img src={s} alt={item.name} className="w-12 h-12 object-contain" onError={e=>{(e.target as HTMLImageElement).style.opacity='0.2';}} />}
              <div className="text-center w-full">
                <p className="text-xs text-gray-200 font-medium leading-tight line-clamp-2" title={item.name}>{item.name}</p>
                <p className={`text-xs ${gColor}`}>{grade!=='Common'?grade:item.type}</p>
              </div>
              {!price ? (
                <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" />
              ) : price.loading ? (
                <div className="w-full h-3 bg-gray-800 rounded animate-pulse" />
              ) : price.error ? (
                <p className="text-xs text-gray-600">-</p>
              ) : (
                <div className="text-center w-full">
                  <p className="text-sm font-bold text-green-400">{price.lowest_price??'-'}</p>
                  <p className="text-xs text-gray-500">Vol: {price.volume??'-'}</p>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
