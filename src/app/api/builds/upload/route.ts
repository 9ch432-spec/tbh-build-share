import { NextRequest, NextResponse } from 'next/server';
import { parseES3Buffer } from '@/lib/es3-parser';
import { v4 as uuidv4 } from 'uuid';

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const title = (formData.get('title') as string) || '';
    const note = (formData.get('note') as string) || '';
    const isPublic = formData.get('isPublic') !== 'false';

    if (!file) {
      return NextResponse.json({ error: 'ファイルが見つかりません' }, { status: 400 });
    }

    if (!file.name.endsWith('.es3')) {
      return NextResponse.json({ error: 'ES3ファイルのみアップロードできます' }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'ファイルサイズが10MBを超えています' }, { status: 400 });
    }

    // ファイルをバッファに読み込んでパース
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`[Upload] file=${file.name} size=${buffer.length} first4=${buffer.slice(0,4).toString('hex')}`);
    const result = parseES3Buffer(buffer);
    console.log(`[Upload] parse result: success=${result.success}`, !result.success ? result.error : '');

    // ファイルはメモリから解放（保存しない）
    // buffer はGCに任せる

    if (!result.success) {
      const status = result.encrypted ? 422 : 400;
      return NextResponse.json(
        { error: result.error, encrypted: result.encrypted ?? false },
        { status }
      );
    }

    // Supabaseへの保存
    // 環境変数が設定されていない場合はデモ用IDを返す
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
      // デモモード: Supabaseなしでダミーレスポンスを返す
      const demoId = uuidv4();
      console.warn('[DEMO MODE] Supabase not configured. Returning demo build ID:', demoId);
      return NextResponse.json({ buildId: demoId, demo: true });
    }

    // Supabase保存
    const { createClient: createServiceClient } = await import('@supabase/supabase-js');
    const serviceSupabase = createServiceClient(supabaseUrl, supabaseKey);

    // ログインユーザーを取得（未ログインはnull）
    const { createClient: createAuthClient } = await import('@/lib/supabase/server');
    const authSupabase = await createAuthClient();
    const { data: { user } } = await authSupabase.auth.getUser();

    const buildId = uuidv4();
    const { error: dbError } = await serviceSupabase.from('builds').insert({
      id: buildId,
      title: title || null,
      note: note || null,
      is_public: isPublic,
      build_data: result.build,
      user_id: user?.id ?? null,
      username: user?.user_metadata?.username ?? null,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error('DB insert error:', dbError);
      return NextResponse.json({ error: 'データの保存に失敗しました' }, { status: 500 });
    }

    return NextResponse.json({ buildId });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
