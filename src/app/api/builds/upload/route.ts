import { NextRequest, NextResponse } from 'next/server';
import { parseES3Buffer } from '@/lib/es3-parser';
import { v4 as uuidv4 } from 'uuid';

const MAX_SIZE = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const username = (formData.get('username') as string) || '名無し';
    const title = (formData.get('title') as string) || '';
    const note = (formData.get('note') as string) || '';
    const isPublic = formData.get('isPublic') !== 'false';

    if (!file) return NextResponse.json({ error: 'ファイルが見つかりません' }, { status: 400 });
    if (!file.name.endsWith('.es3')) return NextResponse.json({ error: 'ES3ファイルのみアップロードできます' }, { status: 400 });
    if (file.size > MAX_SIZE) return NextResponse.json({ error: 'ファイルサイズが10MBを超えています' }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`[Upload] file=${file.name} size=${buffer.length} first4=${buffer.slice(0,4).toString('hex')}`);

    const result = parseES3Buffer(buffer);
    console.log(`[Upload] parse result: success=${result.success}`, !result.success ? result.error : '');

    if (!result.success) {
      return NextResponse.json(
        { error: result.error, encrypted: (result as { encrypted?: boolean }).encrypted ?? false },
        { status: (result as { encrypted?: boolean }).encrypted ? 422 : 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
      const demoId = uuidv4();
      const demoToken = uuidv4();
      return NextResponse.json({ buildId: demoId, deleteToken: demoToken, demo: true });
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    const buildId = uuidv4();
    const deleteToken = uuidv4(); // 削除用トークン

    const { error: dbError } = await supabase.from('builds').insert({
      id: buildId,
      title: title || null,
      note: note || null,
      is_public: isPublic,
      build_data: result.build,
      username: username,
      user_id: null,
      delete_token: deleteToken,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error('DB insert error:', dbError);
      return NextResponse.json({ error: 'データの保存に失敗しました' }, { status: 500 });
    }

    return NextResponse.json({ buildId, deleteToken });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
