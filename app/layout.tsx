import type { Metadata } from 'next';
import { Caveat, DM_Sans, Fraunces } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import './globals.css';
import { COLOR_SCHEME_KEY, Providers } from '@/components/providers';
import { APP_DESCRIPTION, APP_NAME, APP_TAGLINE, SITE_URL } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const TITLE = `${APP_NAME} — ${APP_TAGLINE}`;
const SOCIAL_DESCRIPTION = `A practical, mentor-led tech bootcamp shaped around real demand. Add your name to the list.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'tech bootcamp',
    'learn to code',
    'frontend',
    'backend',
    'software training',
    APP_NAME,
  ],
  openGraph: {
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript
          defaultColorScheme="light"
          localStorageKey={COLOR_SCHEME_KEY}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<style>.reveal{opacity:1!important;transform:none!important}</style>',
          }}
        />
      </head>
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
