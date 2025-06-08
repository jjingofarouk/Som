'use client'; // Required for client-side rendering

import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link 
        href="/home"
        className={`px-4 py-2 rounded ${
          theme === 'dark' ? 'bg-blue-100 text-black' : 'bg-blue-600 text-white'
        }`}
      >
        Return Home
      </Link>
    </div>
  );
}