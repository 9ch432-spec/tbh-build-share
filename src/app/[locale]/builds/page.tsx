import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import { createClient } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import { HEROES, SKILLS, SPRITE_BASE } from '@/lib/game-data';
import { getItemMapping } from '@/lib/db/item-mapping';
import { GRADES } from '@/lib/db/grades';

export const dynamic = 'force-dynamic';

const CLASSES = ['Knight', 'Sorcerer', 'Ranger', 'Priest', 'Hunter', 'Slayer'];

const CLASS_ICONS: Record<string, string> = {
  Knight: '🛡️',
  Sorcerer: '🔮',
  Ranger: '🏹',
  Priest: '✨',
  Hunter: '🎯',
  Slayer: '⚔️',
};

// グレードID→ボーダーカラー
const GRADE_BORDER_COLORS: Record<number, string> = {
  0: 'border-gray-600',
  1: 'border-green-600',
  2: 'border-blue-500',
  3: 'border-amber-500',
  4: 'border-orange-500',
  5: 'border-purple-500',
  6: 'border-pink-500',
  7: 'border-cyan-400',
  8: 'border-yellow-300',
  9: 'border-white',
};

interface HeroSummary {
  heroKey: number;
  class: string;
  level: number;
}

interface BuildSummary {
  id: string;
  title: string | null;
  classes: string[];
  heroes: HeroSummary[];
  skills: number[];
  gear: number[];
  maxStage: number | null;
  version: string | null;
  note: string | null;
  username: string | null;
  createdAt: string;
}

function extractClasses(buildData: unknown): string[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { class?: string }[] };
  return (data.heroes || []).map((h) => h?.class || 'Unknown').filter(Boolean);
}

function extractHeroes(buildData: unknown): HeroSummary[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { heroKey?: number; class?: string; level?: number }[] };
  return (data.heroes || []).map((h) => ({
    heroKey: h?.heroKey ?? 0,
    class: h?.class ?? 'Unknown',
    level: h?.level ?? 0,
  }));
}

function extractSkills(buildData: unknown): number[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { equippedSkillKeys?: number[] }[] };
  const skills: number[] = [];
  for (const hero of data.heroes ?? []) {
    for (const sk of hero.equippedSkillKeys ?? []) {
      if (sk > 0) skills.push(sk);
    }
  }
  return skills;
}

function extractGear(buildData: unknown): number[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { equippedItemKeys?: number[] }[] };
  const gear: number[] = [];
  for (const hero of data.heroes ?? []) {
    for (const k of hero.equippedItemKeys ?? []) {
      if (k > 0) gear.push(k);
    }
  }
  return gear;
}

function extractMaxStage(buildData: unknown): number | null {
  if (!buildData || typeof buildData !== 'object') return null;
  const data = buildData as { common?: { maxCompletedStage?: number } };
  return data.common?.maxCompletedStage ?? null;
}

function extractVersion(buildData: unknown): string | null {
  if (!buildData || typeof buildData !== 'object') return null;
  const data = buildData as { common?: { version?: string } };
  return data.common?.version ?? null;
}

export default async function BuildsPage({
  searchParams,
}: {
  searchParams: Promise<{ class?: string; page?: string }>;
}) {
  const { class: classFilter, page: pageStr } = await searchParams;
  const locale = await getLocale();
  const page = Math.max(1, parseInt(pageStr ?? '1'));

  let builds: BuildSummary[] = [];

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey && supabaseUrl !== 'YOUR_SUPABASE_URL') {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase
        .from('builds')
        .select('id, title, build_data, note, username, created_at')
        .eq('is_public', true)
        .order('created_at', { ascending: false })
        .range((page - 1) * 20, page * 20 - 1);

      if (error) {
        console.error('[BuildsPage] error:', JSON.stringify(error));
      } else if (data) {
        builds = data.map((row) => ({
          id: row.id as string,
          title: row.title as string | null,
          classes: extractClasses(row.build_data),
          heroes: extractHeroes(row.build_data),
          skills: extractSkills(row.build_data),
          gear: extractGear(row.build_data),
          maxStage: extractMaxStage(row.build_data),
          version: extractVersion(row.build_data),
          note: row.note as string | null,
          username: row.username as string | null,
          createdAt: row.created_at as string,
        }));
        if (classFilter) {
          builds = builds.filter((b) => b.classes.includes(classFilter));
        }
        console.log('[BuildsPage] fetched:', builds.length);
      }
    } catch (e) {
      console.error('[BuildsPage] exception:', e);
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <BuildsList builds={builds} locale={locale} classFilter={classFilter} page={page} />
      </main>
    </>
  );
}

function BuildsList({
  builds,
  locale,
  classFilter,
  page,
}: {
  builds: BuildSummary[];
  locale: string;
  classFilter?: string;
  page: number;
}) {
  const t = useTranslations('builds');
  const tClasses = useTranslations('classes');

  return (
    <div>
      <h1 className="text-2xl font-bold text-amber-400 mb-6">{t('title')}</h1>

      {/* クラスフィルター */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href={`/${locale}/builds`}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !classFilter ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {t('all')}
        </Link>
        {CLASSES.map((c) => (
          <Link
            key={c}
            href={`/${locale}/builds?class=${c}`}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              classFilter === c ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {CLASS_ICONS[c]} {tClasses(c as keyof typeof CLASS_ICONS)}
          </Link>
        ))}
      </div>

      {/* ビルド一覧 */}
      {builds.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-4">📭</p>
          <p>{t('empty')}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} locale={locale} />
          ))}
        </div>
      )}

      {/* ページネーション */}
      {builds.length > 0 && (
        <div className="flex justify-center gap-3 mt-8">
          {page > 1 && (
            <Link
              href={`/${locale}/builds?${classFilter ? `class=${classFilter}&` : ''}page=${page - 1}`}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
            >
              ← 前へ
            </Link>
          )}
          {builds.length === 20 && (
            <Link
              href={`/${locale}/builds?${classFilter ? `class=${classFilter}&` : ''}page=${page + 1}`}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
            >
              次へ →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function BuildCard({ build, locale }: { build: BuildSummary; locale: string }) {
  const tClasses = useTranslations('classes');

  // 表示用のステージテキスト（例: "3-9"）
  const stageText = build.maxStage != null ? formatStage(build.maxStage) : null;

  // 難易度（ステージ番号から推定）
  const difficulty = build.maxStage != null ? getDifficulty(build.maxStage) : null;

  return (
    <Link
      href={`/${locale}/builds/${build.id}`}
      className="block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-black/40"
    >
      {/* ヘッダーバー */}
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-gray-800 bg-gray-950/60">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <h2 className="font-bold text-gray-100 text-base truncate">
            {build.title || '名無しのビルド'}
          </h2>
          {stageText && (
            <span className="flex-shrink-0 text-xs font-mono bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
              {stageText}
            </span>
          )}
          {difficulty && (
            <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded ${difficulty.color}`}>
              {difficulty.label}
            </span>
          )}
          {build.version && (
            <span className="flex-shrink-0 text-xs text-gray-500">
              バージョン{build.version}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 text-xs text-gray-500">
          {build.username && <span>投稿者{build.username}</span>}
          <span>・</span>
          <span>
            {new Date(build.createdAt).toLocaleDateString(locale, {
              month: 'long',
              day: 'numeric',
            })}
            {' '}
            {new Date(build.createdAt).toLocaleTimeString(locale, {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })}
          </span>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex flex-col sm:flex-row gap-0">
        {/* 左：パーティ（このページでは横並び） */}
        <div className="flex items-stretch border-b sm:border-b-0 sm:border-r border-gray-800">
          {/* サイドラベル */}
          <div className="flex flex-col justify-center px-3 py-4 border-r border-gray-800 bg-gray-950/30 min-w-0">
            <div className="writing-vertical text-xs text-gray-500 font-medium tracking-widest">パーティ</div>
          </div>
          {/* ヒーローたち */}
          <div className="flex">
            {build.heroes.length === 0 ? (
              <div className="px-6 py-4 text-gray-600 text-sm">データなし</div>
            ) : (
              build.heroes.map((hero, i) => {
                const heroInfo = HEROES[hero.heroKey];
                const heroName = heroInfo
                  ? locale === 'ja' ? heroInfo.nameJa
                    : locale === 'zh' ? heroInfo.nameZh
                    : locale === 'ko' ? heroInfo.nameKo
                    : heroInfo.name
                  : hero.class;
                const isFirst = i === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center gap-1.5 px-5 py-4 ${
                      i > 0 ? 'border-l border-gray-800' : ''
                    } ${isFirst ? 'bg-blue-950/20 border-l-0 outline outline-1 outline-blue-600/40' : ''}`}
                  >
                    {heroInfo ? (
                      <Image
                        src={heroInfo.imageUrl}
                        alt={heroName}
                        width={48}
                        height={48}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 text-lg">
                        {CLASS_ICONS[hero.class] || '👤'}
                      </div>
                    )}
                    <p className={`text-sm font-bold ${heroInfo?.color ?? 'text-gray-300'}`}>{heroName}</p>
                    <p className="text-xs text-gray-500">
                      レベル <span className="font-mono text-gray-300">{hero.level}</span>
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 右：スキル＆装備 */}
        <div className="flex-1 px-4 py-4 flex flex-col gap-3">
          {/* スキル */}
          {build.skills.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 mb-1.5">スキル({build.skills.length})</p>
              <div className="flex flex-wrap gap-1">
                {build.skills.slice(0, 16).map((skillKey, i) => {
                  const skill = SKILLS[skillKey];
                  return (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-md border border-gray-700 bg-gray-800/60 overflow-hidden flex items-center justify-center"
                      title={skill?.nameJa ?? `Skill #${skillKey}`}
                    >
                      {skill ? (
                        <Image
                          src={skill.imageUrl}
                          alt={skill.nameJa}
                          width={32}
                          height={32}
                          className="object-contain"
                          unoptimized
                        />
                      ) : (
                        <span className="text-gray-600 text-xs">?</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 装備 */}
          {build.gear.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 mb-1.5">装備({build.gear.length})</p>
              <div className="flex flex-wrap gap-1">
                {build.gear.slice(0, 20).map((itemKey, i) => {
                  const mapping = getItemMapping(itemKey);
                  const borderColor = GRADE_BORDER_COLORS[mapping.grade] ?? 'border-gray-600';
                  return (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-md border-2 ${borderColor} bg-gray-900 overflow-hidden flex items-center justify-center`}
                      title={mapping.nameJa}
                    >
                      <Image
                        src={`https://tbherohelper.com/sprites/${mapping.sprite}.png`}
                        alt={mapping.nameJa}
                        width={28}
                        height={28}
                        className="object-contain p-0.5"
                        unoptimized
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* メモ */}
          {build.note && (
            <p className="text-xs text-gray-500 line-clamp-1">{build.note}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

/** ステージキー → "章-ステージ" 形式に変換 */
function formatStage(stageKey: number): string {
  if (stageKey <= 0) return String(stageKey);
  // TBHのステージキー: 章×100 + ステージ番号 (例: 309 = 3章9ステージ)
  const chapter = Math.floor(stageKey / 100);
  const stage = stageKey % 100;
  if (chapter > 0 && stage > 0) return `${chapter}-${stage}`;
  return String(stageKey);
}

/** ステージから難易度を推定 */
function getDifficulty(stageKey: number): { label: string; color: string } | null {
  // ゲームの難易度区分（仮）
  if (stageKey <= 0) return null;
  const chapter = Math.floor(stageKey / 100);
  if (chapter <= 3) return { label: 'ノーマル', color: 'bg-gray-700 text-gray-300' };
  if (chapter <= 6) return { label: 'ハード', color: 'bg-blue-900 text-blue-300' };
  if (chapter <= 9) return { label: 'トーメント', color: 'bg-red-900 text-red-300' };
  return { label: 'エキスパート', color: 'bg-purple-900 text-purple-300' };
}
