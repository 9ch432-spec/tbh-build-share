import Navbar from '@/components/Navbar';
import MarketView from '@/components/MarketView';

export default function MarketPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
            📈 マーケット
            <span className="text-xs bg-amber-900/50 text-amber-400 border border-amber-700/50 px-2 py-0.5 rounded font-normal">
              BETA
            </span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Steam Community Market の取引価格（JPY）· クリックで詳細
          </p>
        </div>
        <MarketView />
      </main>
    </>
  );
}
