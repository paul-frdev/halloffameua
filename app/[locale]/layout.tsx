import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';
import { oswald, sfPro } from '@/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hall of fame",
  description: "Hall of fame",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params?: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  let messages;
  let locale = params?.locale;

  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.log(error)
  }

  return (
    <html lang={locale}>
      <body className={cn(`antialiased relative bg-basic  text-white transition-all duration-300`, sfPro.variable, oswald.variable)} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className='flex min-h-screen flex-col items-center justify-between'>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
