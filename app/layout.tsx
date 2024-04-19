'use client';

import { I18nextProvider } from 'react-i18next';
import Footer from './components/landing-page/Footer';
// import { Navbar } from './components/landing-page/Navbar';
import './globals.css';
import i18n from './locales/i18n';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from './components/theme/theme-provider';
import { ArrowUpCircle } from 'lucide-react';

const Navbar = dynamic(
  () => import('./components/landing-page/Navbar') as Promise<any>,
  {
    ssr: false,
  }
);

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins bg-base-100 overflow-x-hidden`}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
