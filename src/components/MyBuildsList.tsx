'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CLASS_ICONS: Record<string, string> = {
  Knight: '🛡️', Sorcerer: '🔮', Ranger: '🏹',
  Priest: '✨', Hunter: '🎯', Slayer: '⚔️',
};

interface MyBuild {
  id: string;
  title: string | null;
  note: string | null;
  isPublic: boolean;
  classes: string[];
  createdAt: string;
}

export default function MyBuildsList({
  builds,
  locale,
}: {
  builds: MyBuild[];
  locale: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-amber-400 mb-6">自分のビルド</h1>
      {builds.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-4">📭</p>
          <p>まだビルドがありません</p>
          <Link
            href={`/${locale}/upload`}
            className="mt-4 inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-2 rounded-lg transition-colors"
          >
            ビルドを投稿する
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}

function BuildCard({ build, locale }: { build: MyBuild; locale: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch('/api/builds/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ buildId: build.id }),
      });
      if (res.ok) {
        router.refresh();
      }
    } catch {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
      {/* タイトル・クラス */}
      <div>
        <h2 className="font-semibold text-gray-100 mb-2 truncate">
          {build.title || '名無しのビルド'}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {build.classes.map((c, i) => (
            <span key={i} className="text-xs bg-gray-800 text-amber-300 px-2 py-0.5 rounded-full">
              {CLASS_ICONS[c] || '👤'} {c}
            </span>
          ))}
        </div>
      </div>

      {/* 公開設定 */}
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          build.isPublic ? 'bg-green-900/40 text-green-400' : 'bg-gray-800 text-gray-500'
        }`}>
          {build.isPublic ? '🌐 公開' : '🔒 非公開'}
        </span>
        <span className="text-xs text-gray-600">
          {new Date(build.createdAt).toLocaleDateString(locale)}
        </span>
      </div>

      {/* ボタン */}
      <div className="flex gap-2 mt-auto">
        <Link
          href={`/${locale}/builds/${build.id}`}
          className="flex-1 text-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-lg transition-colors"
        >
          表示
        </Link>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={`flex-1 text-xs px-3 py-2 rounded-lg transition-colors ${
            confirmDelete
              ? 'bg-red-600 hover:bg-red-500 text-white'
              : 'bg-gray-800 hover:bg-red-900/40 text-red-400'
          }`}
        >
          {deleting ? '削除中...' : confirmDelete ? '本当に削除' : '削除'}
        </button>
      </div>
      {confirmDelete && !deleting && (
        <button
          onClick={() => setConfirmDelete(false)}
          className="text-xs text-gray-500 hover:text-gray-300 text-center"
        >
          キャンセル
        </button>
      )}
    </div>
  );
}
