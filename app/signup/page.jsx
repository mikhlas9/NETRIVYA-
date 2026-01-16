import SignupForm from '@/components/signup-form';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SignupForm />
      <Footer />
    </main>
  );
}