import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-16">
        <AuthForm />
      </main>
    </>
  );
}
