import '@/styles/global.css';

import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';
import { Providers } from '@/providers';
import { cn } from '@/lib/utils';
import { BottomMenu } from '@/components/shared/bottom-menu';

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
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  twitter: {
    card: 'app',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://nextjs.org/og.png',
      alt: 'Next.js Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
  itunes: {
    appId: 'myAppStoreID',
    appArgument: 'myAppArgument',
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  appLinks: {
    ios: {
      url: 'https://nextjs.org/ios',
      app_store_id: 'app_store_id',
    },
    android: {
      package: 'com.example.android/package',
      app_name: 'app_name_android',
    },
    web: {
      url: 'https://nextjs.org/web',
      should_fallback: true,
    },
  },
  category: 'technology',
  title: {
    template: '%s | Acme',
    default: 'Acme', // a default is required when creating a template
  },
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://acme.com'),
  manifest: 'https://nextjs.org/manifest.json',
  alternates: {
    canonical: 'https://nextjs.org',
    languages: {
      'en': 'https://nextjs.org/en',
      'es': 'https://nextjs.org/es',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://nextjs.org/rss',
    },
  },
  other: {
    'google-site-verification': '9mR0qYlGrHgStCeEyf66tTOBk3iy6KX6ws22vM3k9po',
    "p:domain_verify":"338bd32e5c25207049d197e13f329c6d"
  },
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
          <BottomMenu />
        </Providers>
      </body>
    </html>
  );
}
