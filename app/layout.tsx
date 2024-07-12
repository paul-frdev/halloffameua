import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';
import { oswald, sfPro } from '@/fonts';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hall of fame",
  description: "Hall of fame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`relative antialiased`, sfPro.variable, oswald.variable)}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
