import SignupForm from "@/components/auth/SignupForm";
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1>Registrarse</h1>
      <Card bg="bg-white">
        <SignupForm />
      </Card>
    </div>
  );
}
