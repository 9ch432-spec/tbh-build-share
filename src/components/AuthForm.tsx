'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const t = useTranslations('auth');
  const locale = useLocale();
  const router = useRouter();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const body = mode === 'login'
        ? { email, password }
        : { email, password, username };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json() as { error?: string; success?: boolean };

      if (!res.ok) {
        setError(data.error || t('error.invalid'));
        return;
      }

      if (mode === 'register') {
        setSuccess('確認メールを送信しました。メールを確認してください。');
      } else {
        router.push(`/${locale}`);
        router.refresh();
      }
    } catch {
      setError(t('error.invalid'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h1 className="text-2xl font-bold text-amber-400 mb-6">
        {mode === 'login' ? t('loginTitle') : t('registerTitle')}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="username">
              ユーザー名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              maxLength={30}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
            {t('email')}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1" htmlFor="password">
            {t('password')}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-4 py-3">
            ⚠️ {error}
          </p>
        )}
        {success && (
          <p className="text-green-400 text-sm bg-green-900/20 border border-green-800 rounded-lg px-4 py-3">
            ✓ {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-gray-700 disabled:text-gray-500 text-gray-900 font-bold py-3 rounded-lg transition-colors"
        >
          {loading ? '処理中...' : mode === 'login' ? t('loginSubmit') : t('registerSubmit')}
        </button>
      </form>

      <div className="mt-6 text-center">
        {mode === 'login' ? (
          <p className="text-gray-400 text-sm">
            {t('noAccount')}{' '}
            <button
              onClick={() => { setMode('register'); setError(''); }}
              className="text-amber-400 hover:text-amber-300 underline"
            >
              {t('registerTitle')}
            </button>
          </p>
        ) : (
          <p className="text-gray-400 text-sm">
            {t('hasAccount')}{' '}
            <button
              onClick={() => { setMode('login'); setError(''); }}
              className="text-amber-400 hover:text-amber-300 underline"
            >
              {t('loginTitle')}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
