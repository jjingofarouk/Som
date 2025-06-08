// app/layout.tsx
import './globals.css'; // Correct path for App Router
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/common/Header'; // Use alias for cleaner imports
import Footer from '@/components/common/Footer'; // Use alias

export const metadata: Metadata = {
  title: 'Soma - Learning Management System',
  description: 'Online learning platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning for next-themes */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}