import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const APPID = 3678970;
const CURRENCY_JPY = 8;

// Steam API のレート制限対応: 1リクエストずつ遅延
async function fetchPrice(name: string): Promise<{
  lowest_price: string | null;
  median_price: string | null;
  volume: string | null;
} | null> {
  const url = `https://steamcommunity.com/market/priceoverview/?appid=${APPID}&currency=${CURRENCY_JPY}&market_hash_name=${encodeURIComponent(name)}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 300 }, // 5分キャッシュ
    });
    if (!res.ok) return null;
    const data = await res.json() as {
      success: boolean;
      lowest_price?: string;
      median_price?: string;
      volume?: string;
    };
    if (!data.success) return null;
    return {
      lowest_price: data.lowest_price ?? null,
      median_price: data.median_price ?? null,
      volume: data.volume ?? null,
    };
  } catch {
    return null;
  }
}

// 円表示を数値に変換
function parseJPY(str: string | null): number {
  if (!str) return 0;
  return parseInt(str.replace(/[¥,\s]/g, '').trim()) || 0;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 });
  }

  const data = await fetchPrice(name);
  if (!data) {
    return NextResponse.json({ error: 'Failed to fetch price' }, { status: 502 });
  }

  return NextResponse.json({
    name,
    lowest_price: data.lowest_price,
    median_price: data.median_price,
    volume: data.volume,
    lowest_price_num: parseJPY(data.lowest_price),
    median_price_num: parseJPY(data.median_price),
  });
}
