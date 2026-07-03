import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import BuildViewer from '@/components/BuildViewer';
import type { ParsedBuild } from '@/lib/es3-parser';

interface BuildRecord {
  id: string;
  title: string | null;
  note: string | null;
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
          <h1 className="text-2xl font-bold text-amber-400">
            {build.title || '名無しのビルド'}
          </h1>
          {build.note && (
            <p className="text-gray-400 mt-2 text-sm whitespace-pre-line">{build.note}</p>
          )}
          <p className="text-gray-600 text-xs mt-2">
            {t('createdAt')}: {new Date(build.created_at).toLocaleDateString(locale)}
          </p>
        </div>

        {/* 共有ボタン */}
        <ShareButton buildId={id} />

        {/* ビルド表示 */}
        <BuildViewer build={build.build_data} />
      </main>
    </>
  );
}

function ShareButton({ buildId }: { buildId: string }) {
  return <ShareButtonClient buildId={buildId} />;
}

// クライアントコンポーネントとして分離
import ShareButtonClient from '@/components/ShareButtonClient';

async function fetchBuild(id: string): Promise<BuildRecord | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
    // デモモード: null（ビルドが見つからない）
    return null;
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('builds')
      .select('*')
      .eq('id', id)
      .eq('is_public', true)
      .single();

    if (error || !data) return null;
    return data as BuildRecord;
  } catch {
    return null;
  }
}
