import '../styles/globals.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Soma - Learning Management System',
  description: 'Online learning platform',
};

export default function RootLayout({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}