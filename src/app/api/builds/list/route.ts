import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const classFilter = searchParams.get('class') ?? undefined;
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log('[builds/list] url:', supabaseUrl ? 'set' : 'NOT SET');
  console.log('[builds/list] key:', supabaseKey ? 'set' : 'NOT SET');

  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
    return NextResponse.json({ builds: [], error: 'Supabase not configured' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('builds')
      .select('id, title, build_data, note, created_at')
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .range((page - 1) * 20, page * 20 - 1);

    if (error) {
      console.error('[builds/list] error:', JSON.stringify(error));
      return NextResponse.json({ builds: [], error: error.message });
    }

    const builds = (data ?? []).map((row) => ({
      id: row.id as string,
      title: row.title as string | null,
      classes: extractClasses(row.build_data),
      note: row.note as string | null,
      createdAt: row.created_at as string,
    }));

    const filtered = classFilter
      ? builds.filter((b) => b.classes.includes(classFilter))
      : builds;

    console.log('[builds/list] found:', filtered.length, 'builds');
    return NextResponse.json({ builds: filtered });
  } catch (e) {
    console.error('[builds/list] exception:', e);
    return NextResponse.json({ builds: [], error: String(e) });
  }
}

function extractClasses(buildData: unknown): string[] {
  if (!buildData || typeof buildData !== 'object') return [];
  const data = buildData as { heroes?: { class?: string }[] };
  return (data.heroes || []).map((h) => h?.class || 'Unknown').filter(Boolean);
}
