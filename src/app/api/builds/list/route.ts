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
      .select('id, title, build_data, note, username, created_at')
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
      heroes: extractHeroes(row.build_data),
      skills: extractSkills(row.build_data),
      gear: extractGear(row.build_data),
      maxStage: extractMaxStage(row.build_data),
      version: extractVersion(row.build_data),
      note: row.note as string | null,
      username: row.username as string | null,
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

interface HeroSummary {
  heroKey: number;
  class: string;
  level: number;
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
