import { getLocale, getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import BuildViewer from '@/components/BuildViewer';
import ShareButtonClient from '@/components/ShareButtonClient';
import DeleteBuildButton from '@/components/DeleteBuildButton';
import type { ParsedBuild } from '@/lib/es3-parser';

interface BuildRecord {
  id: string;
  title: string | null;
  note: string | null;
  username: string | null;
  build_data: ParsedBuild;
  is_public: boolean;
  created_at: string;
}

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations('build');

  const build = await fetchBuild(id);

  if (!build) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-gray-400 text-lg">{t('notFound')}</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-amber-400">
                {build.title || '名無しのビルド'}
              </h1>
              {build.note && (
                <p className="text-gray-400 mt-2 text-sm whitespace-pre-line">{build.note}</p>
              )}
              <div className="flex items-center gap-3 mt-2">
                <p className="text-gray-600 text-xs">
                  {t('createdAt')}: {new Date(build.created_at).toLocaleDateString(locale)}
                </p>
                {build.username && (
                  <p className="text-gray-500 text-xs">👤 {build.username}</p>
                )}
              </div>
            </div>
            {/* 削除ボタン（トークン認証） */}
            <DeleteBuildButton buildId={id} locale={locale} />
          </div>
        </div>

        {/* 共有ボタン */}
        <ShareButtonClient buildId={id} />

        {/* ビルド表示 */}
        <BuildViewer build={build.build_data} />
      </main>
    </>
  );
}

async function fetchBuild(id: string): Promise<BuildRecord | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') return null;

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('builds').select('*').eq('id', id).eq('is_public', true).single();
    if (error || !data) return null;
    return data as BuildRecord;
  } catch {
    return null;
  }
}
