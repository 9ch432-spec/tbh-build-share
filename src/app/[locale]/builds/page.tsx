import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';

const CLASSES = ['Knight', 'Sorcerer', 'Ranger', 'Priest', 'Hunter', 'Slayer'];

// クラスアイコン
const CLASS_ICONS: Record<string, string> = {
  Knight: '🛡️',
  Sorcerer: '🔮',
  Ranger: '🏹',
  Priest: '✨',
  Hunter: '🎯',
  Slayer: '⚔️',
};

export default async function BuildsPage({
  searchParams,
}: {
  searchParams: Promise<{ class?: string; page?: string }>;
}) {
  const { class: classFilter, page: pageStr } = await searchParams;
  const locale = await getLocale();
  const page = Math.max(1, parseInt(pageStr ?? '1'));

  // Supabaseからビルド一覧を取得（未設定時はサンプルデータ）
  const builds = await fetchBuilds({ classFilter, page });

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <BuildsList builds={builds} locale={locale} classFilter={classFilter} page={page} />
      </main>
    </>
  );
}

// ---- サブコンポーネント ----

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
            !classFilter
              ? 'bg-amber-500 text-gray-900'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {t('all')}
        </Link>
        {CLASSES.map((c) => (
          <Link
            key={c}
            href={`/${locale}/builds?class=${c}`}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              classFilter === c
                ? 'bg-amber-500 text-gray-900'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
  return (
    <Link
      href={`/${locale}/builds/${build.id}`}
      className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-amber-700 transition-colors block"
    >
      <h2 className="font-semibold text-gray-100 mb-2 truncate">
        {build.title || '名無しのビルド'}
      </h2>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {build.classes.map((c, i) => (
          <span
            key={i}
            className="text-xs bg-gray-800 text-amber-300 px-2 py-0.5 rounded-full"
          >
            {CLASS_ICONS[c] || '👤'} {tClasses(c as keyof typeof CLASS_ICONS) || c}
          </span>
        ))}
      </div>
      {build.note && (
        <p className="text-xs text-gray-500 line-clamp-2">{build.note}</p>
      )}
      <p className="text-xs text-gray-600 mt-3">
        {new Date(build.createdAt).toLocaleDateString(locale)}
      </p>
    </Link>
  );
}

// ---- データ取得 ----

interface BuildSummary {
  id: string;
  title: string | null;
  classes: string[];
  note: string | null;
  createdAt: string;
}

async function fetchBuilds({
  classFilter,
  page,
}: {
  classFilter?: string;
  page: number;
}): Promise<BuildSummary[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
    // デモデータ
    return [];
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    let query = supabase
      .from('builds')
      .select('id, title, build_data, note, created_at')
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .range((page - 1) * 20, page * 20 - 1);

    const { data, error } = await query;

    if (error || !data) return [];

    let results = data.map((row) => ({
      id: row.id as string,
      title: row.title as string | null,
      classes: extractClasses(row.build_data),
      note: row.note as string | null,
      createdAt: row.created_at as string,
    }));

    // クラスフィルター（クライアント側でフィルタリング）
    if (classFilter) {
      results = results.filter((b) => b.classes.includes(classFilter));
    }

    return results;
  } catch (e) {
    console.error('fetchBuilds error:', e);
    return [];
  }
}

function extractClasses(buildData: unknown): string[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { class?: string }[] };
  return (data.heroes || []).map((h) => h?.class || 'Unknown').filter(Boolean);
}
