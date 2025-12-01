import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { auth } from '@/lib/auth';

export default async function Layout({ children }) {
  const session = await auth();

  const role = session?.user?.role ?? 'editor'; // fallback

  return <DashboardLayout role={role}>{children}</DashboardLayout>;
}
