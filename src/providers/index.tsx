import { ThemeProvider } from './theme-provider';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import * as Sentry from '@sentry/nextjs';
import ZustandStateInitializer from './zustand-state-initializer';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
}

function getGoogleTagManagerId() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gtmId) {
    Sentry.captureMessage('GTM ID is not defined in the environment variables.');
    return '';
  }

  return gtmId;
}

export function Providers({ children, locale }: ProvidersProps) {
  const messages = useMessages();
  const gtmId = getGoogleTagManagerId();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ZustandStateInitializer>{children}</ZustandStateInitializer>
        </NextIntlClientProvider>
      </ThemeProvider>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </>
  );
}
