import { ReactNode } from 'react';
import { isRtlLang } from 'rtl-detect';
import { cookies } from 'next/headers';
import { ResolvingViewport } from 'next';
import Analytics from '@/components/Analytics';
import AuthProvider from '@/layout/AuthProvider';
import { isMobileDevice } from '@/utils/responsive';
import GlobalProvider from '@/layout/GlobalProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale';

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout = async ({ children, modal }: RootLayoutProps) => {
  const cookieStore = cookies();

  const lang = cookieStore.get(LOBE_LOCALE_COOKIE);
  const direction = isRtlLang(lang?.value || DEFAULT_LANG) ? 'rtl' : 'ltr';

  return (
    <html dir={direction} lang={lang?.value || DEFAULT_LANG} suppressHydrationWarning>
      <body>
        <GlobalProvider>
          <AuthProvider>
            {children}
            {modal}
          </AuthProvider>
        </GlobalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;

export { generateMetadata } from './metadata';

export const generateViewport = async (): ResolvingViewport => {
  const isMobile = isMobileDevice();

  const dynamicScale = isMobile ? { maximumScale: 1, userScalable: false } : {};

  return {
    ...dynamicScale,
    initialScale: 1,
    minimumScale: 1,
    themeColor: [
      { color: '#f8f8f8', media: '(prefers-color-scheme: light)' },
      { color: '#000', media: '(prefers-color-scheme: dark)' },
    ],
    viewportFit: 'cover',
    width: 'device-width',
  };
};
