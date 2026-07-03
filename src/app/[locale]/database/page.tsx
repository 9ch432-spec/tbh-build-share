import Navbar from '@/components/Navbar';
import DatabaseTabs from '@/components/database/DatabaseTabs';

export default function DatabasePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-amber-400">データベース</h1>
          <p className="text-gray-400 text-sm mt-1">v1.00.21 · tbherohelper.com より照合済み</p>
        </div>
        <DatabaseTabs />
      </main>
    </>
  );
}
