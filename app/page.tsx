import { LoginButton } from '@/components/LoginButton';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Welcome to NextAuth Demo</h1>
      <LoginButton />
    </main>
  );
}
