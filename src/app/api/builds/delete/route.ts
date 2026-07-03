import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function DELETE(req: NextRequest) {
  const { buildId } = await req.json() as { buildId: string };

  if (!buildId) {
    return NextResponse.json({ error: 'buildId is required' }, { status: 400 });
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
  }

  // service_roleで削除（RLSをバイパス）
  const { createClient: createServiceClient } = await import('@supabase/supabase-js');
  const serviceSupabase = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // 所有者確認
  const { data: build } = await serviceSupabase
    .from('builds')
    .select('user_id')
    .eq('id', buildId)
    .single();

  if (!build) {
    return NextResponse.json({ error: 'ビルドが見つかりません' }, { status: 404 });
  }

  if (build.user_id !== user.id) {
    return NextResponse.json({ error: '削除権限がありません' }, { status: 403 });
  }

  const { error } = await serviceSupabase
    .from('builds')
    .delete()
    .eq('id', buildId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
