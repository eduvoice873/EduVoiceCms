"use client";

import Link from "next/link";

export function Sidebar({ children }) {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-6 border-r border-gray-300">
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="text-brand-blue font-semibold">
          Dashboard
        </Link>
        <Link href="/spaces" className="text-brand-blue font-semibold">
          Espacios
        </Link>
        <Link href="/settings" className="text-brand-blue font-semibold">
          Ajustes
        </Link>
      </nav>

      <div className="mt-10">{children}</div>
    </aside>
  );
}

