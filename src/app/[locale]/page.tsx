import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';

export default async function HomePage() {
  const locale = await getLocale();
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950">
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-950 to-gray-950" />
          <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
            <div className="text-6xl mb-6">⚔️</div>
            <HeroContent locale={locale} />
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <FeatureCards />
        </section>
      </main>
    </>
  );
}

function HeroContent({ locale }: { locale: string }) {
  const t = useTranslations('home');
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-300 mb-10">{t('subtitle')}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={`/${locale}/upload`}
          className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-lg text-lg transition-colors shadow-lg"
        >
          {t('cta')}
        </Link>
        <Link
          href={`/${locale}/builds`}
          className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors border border-gray-700"
        >
          {t('browseCta')}
        </Link>
      </div>
    </>
  );
}

function FeatureCards() {
  const features = [
    {
      icon: '📂',
      title: 'ES3ファイルを読み込み',
      desc: 'SteamクラウドのセーブデータをそのままアップロードするだけでOK',
    },
    {
      icon: '🔗',
      title: '共有リンクを発行',
      desc: '投稿したビルドには固有のURLが付与され、誰でも閲覧できます',
    },
    {
      icon: '📊',
      title: 'ステータスをひと目で',
      desc: 'パーティ3人のクラス・スキル・装備を整理して表示',
    },
    {
      icon: '🌐',
      title: '4言語対応',
      desc: '日本語・英語・中国語・韓国語で利用できます',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((f) => (
        <div
          key={f.title}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-800 transition-colors"
        >
          <div className="text-3xl mb-3">{f.icon}</div>
          <h3 className="text-lg font-semibold text-gray-100 mb-2">{f.title}</h3>
          <p className="text-gray-400 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
