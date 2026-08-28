import type { Metadata } from 'next';
import { Caveat, DM_Sans, Fraunces } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import './globals.css';
import { COLOR_SCHEME_KEY, Providers } from '@/components/providers';

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dida.example';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dida — Same you. Bigger future.',
    template: '%s · Dida',
  },
  description:
    'Dida is a practical, mentor-led tech bootcamp. Add your name to the list, tell us your stack and level, and help shape the first cohort.',
  keywords: [
    'tech bootcamp',
    'learn to code',
    'frontend',
    'backend',
    'software training',
    'Dida',
  ],
  openGraph: {
    title: 'Dida — Same you. Bigger future.',
    description:
      'A practical, mentor-led tech bootcamp shaped around real demand. Add your name to the list.',
    url: SITE_URL,
    siteName: 'Dida',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dida — Same you. Bigger future.',
    description:
      'A practical, mentor-led tech bootcamp shaped around real demand. Add your name to the list.',
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
