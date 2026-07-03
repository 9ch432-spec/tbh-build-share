'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadForm() {
  const t = useTranslations('upload');
  const locale = useLocale();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (!f.name.endsWith('.es3')) {
      setErrorMsg(t('error.invalidFile'));
      setStatus('error');
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setErrorMsg(t('error.tooLarge'));
      setStatus('error');
      return;
    }
    setFile(f);
    setStatus('idle');
    setErrorMsg('');
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setStatus('processing');
    setErrorMsg('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('note', note);
    formData.append('isPublic', String(isPublic));

    try {
      const res = await fetch('/api/builds/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json() as { error?: string; encrypted?: boolean; buildId?: string };

      if (!res.ok) {
        setErrorMsg(data.error || t('error.parseFailed'));
        setStatus('error');
        return;
      }

      setStatus('success');
      setTimeout(() => {
        router.push(`/${locale}/builds/${data.buildId}`);
      }, 1500);
    } catch {
      setErrorMsg(t('error.parseFailed'));
      setStatus('error');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-amber-400 mb-2">{t('title')}</h1>
      <p className="text-gray-400 text-sm mb-8">{t('description')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ドロップゾーン */}
        <div
          role="button"
          tabIndex={0}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
            dragging
              ? 'border-amber-400 bg-amber-900/10'
              : file
              ? 'border-green-500 bg-green-900/10'
              : 'border-gray-700 hover:border-gray-500 bg-gray-900'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
        >
          <input
            ref={fileRef}
            type="file"
            accept=".es3"
            className="hidden"
            onChange={onInputChange}
            aria-label="ES3ファイルを選択"
          />
          {file ? (
            <div>
              <p className="text-green-400 font-semibold text-lg">✓ {file.name}</p>
              <p className="text-gray-500 text-sm mt-1">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          ) : (
            <div>
              <p className="text-4xl mb-3">📂</p>
              <p className="text-gray-300">{t('dropzone')}</p>
              <p className="text-gray-500 text-sm mt-2">{t('fileHint')}</p>
            </div>
          )}
        </div>

        {/* ビルド名 */}
        <div>
          <label className="block text-sm text-gray-300 mb-1" htmlFor="buildTitle">
            {t('buildTitle')}
          </label>
          <input
            id="buildTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="例: 火力特化ナイト"
          />
        </div>

        {/* メモ */}
        <div>
          <label className="block text-sm text-gray-300 mb-1" htmlFor="buildNote">
            {t('buildNote')}
          </label>
          <textarea
            id="buildNote"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            maxLength={500}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-amber-500 transition-colors resize-none"
          />
        </div>

        {/* 公開設定 */}
        <div>
          <p className="text-sm text-gray-300 mb-2">{t('visibility.label')}</p>
          <div className="flex gap-4">
            {(['public', 'private'] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  checked={isPublic === (v === 'public')}
                  onChange={() => setIsPublic(v === 'public')}
                  className="accent-amber-500"
                />
                <span className="text-sm text-gray-200">{t(`visibility.${v}`)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* エラー */}
        {status === 'error' && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-4 py-3">
            ⚠️ {errorMsg}
          </p>
        )}

        {/* 成功 */}
        {status === 'success' && (
          <p className="text-green-400 text-sm bg-green-900/20 border border-green-800 rounded-lg px-4 py-3">
            ✓ {t('success')}
          </p>
        )}

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={!file || status === 'processing' || status === 'success'}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-gray-700 disabled:text-gray-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-lg"
        >
          {status === 'processing' ? t('processing') : t('submit')}
        </button>
      </form>
    </div>
  );
}
