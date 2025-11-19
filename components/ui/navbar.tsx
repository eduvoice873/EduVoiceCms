"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full h-16 bg-brand-blue text-white flex items-center px-6 justify-between">
      <h1 className="font-nunito text-xl font-bold">EduVoice</h1>

      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Perfil</Link>
      </div>
    </nav>
  );
}
