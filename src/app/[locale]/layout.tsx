import '@/styles/global.css';

import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';
import { Providers } from '@/providers';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <head>
        <meta
          name="google-site-verification"
          content="9mR0qYlGrHgStCeEyf66tTOBk3iy6KX6ws22vM3k9po"
        />
        <meta name="p:domain_verify" content="338bd32e5c25207049d197e13f329c6d" />
      </head>

      <body
        className={cn('bg-background font-sans text-foreground antialiased', poppins.className)}>
        <Providers locale={params.locale}>
          <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-100 py-32">
            {children}
          </main>
          {/* <BottomMenu /> */}
        </Providers>
      </body>
    </html>
  );
}
