'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { routing } from '@/i18n/routing';

const LANG_LABELS: Record<string, string> = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
  ko: '한국어',
};

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUsername(user.user_metadata?.username ?? user.email?.split('@')[0] ?? 'ユーザー');
      }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUsername(session.user.user_metadata?.username ?? session.user.email?.split('@')[0] ?? 'ユーザー');
      } else {
        setUsername(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUsername(null);
    setUserMenuOpen(false);
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* ロゴ */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          ⚔️ TBH Builds
        </Link>

        {/* ナビリンク */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/builds`}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            {t('builds')}
          </Link>
          <Link
            href={`/${locale}/database?tab=offering`}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            祈願確率
          </Link>
          <Link
            href={`/${locale}/upload`}
            className="text-sm bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-3 py-1.5 rounded-md transition-colors"
          >
            {t('upload')}
          </Link>

          {/* バージョン */}
          <span className="text-xs text-gray-600 font-mono hidden sm:inline">v1.00.1</span>

          {/* ユーザーメニュー */}
          {username ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="text-sm text-amber-400 flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-800 transition-colors"
              >
                👤 {username} <span className="text-xs">▾</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-xl min-w-[140px]">
                  <Link
                    href={`/${locale}/my-builds`}
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors"
                  >
                    自分のビルド
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                  >
                    {t('logout')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={`/${locale}/auth`}
              className="text-sm text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-gray-800 transition-colors"
            >
              {t('login')}
            </Link>
          )}

          {/* 言語切り替え */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm text-gray-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-800 transition-colors"
              aria-label="言語切り替え"
            >
              🌐 {LANG_LABELS[locale]}
              <span className="text-xs">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-xl min-w-[120px]">
                {routing.locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      l === locale ? 'text-amber-400 font-semibold' : 'text-gray-200'
                    }`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
