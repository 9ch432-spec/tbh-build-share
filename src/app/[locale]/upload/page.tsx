import Navbar from '@/components/Navbar';
import UploadForm from '@/components/UploadForm';

export default function UploadPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <UploadForm />
      </main>
    </>
  );
}
