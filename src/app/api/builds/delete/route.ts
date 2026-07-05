import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  const { buildId, deleteToken } = await req.json() as { buildId: string; deleteToken: string };

  if (!buildId || !deleteToken) {
    return NextResponse.json({ error: 'buildIdとdeleteTokenが必要です' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabaseが設定されていません' }, { status: 500 });
  }

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(supabaseUrl, supabaseKey);

  // トークンで所有権を確認してから削除
  const { data: build } = await supabase
    .from('builds')
    .select('id, delete_token')
    .eq('id', buildId)
    .single();

  if (!build) {
    return NextResponse.json({ error: 'ビルドが見つかりません' }, { status: 404 });
  }

  if (build.delete_token !== deleteToken) {
    return NextResponse.json({ error: '削除トークンが正しくありません' }, { status: 403 });
  }

  const { error } = await supabase.from('builds').delete().eq('id', buildId);

  if (error) {
    return NextResponse.json({ error: '削除に失敗しました' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
