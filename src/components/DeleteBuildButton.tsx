'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteBuildButton({
  buildId,
  locale,
}: {
  buildId: string;
  locale: string;
}) {
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'input' | 'deleting'>('idle');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleDelete = async () => {
    if (!token.trim()) {
      setError('削除トークンを入力してください');
      return;
    }

    setState('deleting');
    setError('');

    try {
      const res = await fetch('/api/builds/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ buildId, deleteToken: token.trim() }),
      });

      if (res.ok) {
        router.push(`/${locale}/builds`);
        router.refresh();
      } else {
        const data = await res.json() as { error?: string };
        setError(data.error ?? '削除に失敗しました');
        setState('input');
      }
    } catch {
      setError('エラーが発生しました');
      setState('input');
    }
  };

  if (state === 'idle') {
    return (
      <button
        onClick={() => setState('input')}
        className="text-sm bg-gray-800 hover:bg-red-900/40 text-red-400 border border-gray-700 hover:border-red-700 px-4 py-2 rounded-lg font-medium transition-colors flex-shrink-0"
      >
        🗑 削除
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 flex-shrink-0 w-64">
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="削除用トークンを入力"
        className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-red-500"
        autoFocus
      />
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          disabled={state === 'deleting'}
          className="flex-1 text-sm bg-red-600 hover:bg-red-500 disabled:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          {state === 'deleting' ? '削除中...' : '削除する'}
        </button>
        <button
          onClick={() => { setState('idle'); setToken(''); setError(''); }}
          className="flex-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 rounded-lg transition-colors"
        >
          キャンセル
        </button>
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
