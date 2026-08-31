'use client';

import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { cssVariablesResolver, mantineTheme } from '@/theme/mantine-theme';

export const COLOR_SCHEME_KEY = 'diddar-color-scheme';

const colorSchemeManager = localStorageColorSchemeManager({
  key: COLOR_SCHEME_KEY,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={mantineTheme}
      defaultColorScheme="light"
      colorSchemeManager={colorSchemeManager}
      cssVariablesResolver={cssVariablesResolver}
    >
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
