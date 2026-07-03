import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import MyBuildsList from '@/components/MyBuildsList';

export const dynamic = 'force-dynamic';

export default async function MyBuildsPage() {
  const locale = await getLocale();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/auth`);
  }

  const serviceSupabase = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: builds } = await serviceSupabase
    .from('builds')
    .select('id, title, build_data, note, is_public, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const myBuilds = (builds ?? []).map((b) => ({
    id: b.id as string,
    title: b.title as string | null,
    note: b.note as string | null,
    isPublic: b.is_public as boolean,
    classes: extractClasses(b.build_data),
    createdAt: b.created_at as string,
  }));

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <MyBuildsList builds={myBuilds} locale={locale} />
      </main>
    </>
  );
}

function extractClasses(buildData: unknown): string[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { class?: string }[] };
  return (data.heroes || []).map((h) => h?.class || 'Unknown').filter(Boolean);
}
