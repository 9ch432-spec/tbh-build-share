'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ShareButtonClient({ buildId }: { buildId: string }) {
  const t = useTranslations('build');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const url = `${window.location.origin}${window.location.pathname}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="mb-6 flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg transition-colors"
      aria-label={t('shareLink')}
    >
      {copied ? (
        <>✓ <span className="text-green-400">{t('copied')}</span></>
      ) : (
        <>🔗 {t('shareLink')}</>
      )}
    </button>
  );
}
