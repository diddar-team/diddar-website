import {
  createTheme,
  type CSSVariablesResolver,
  type MantineColorsTuple,
} from '@mantine/core';

/** Brand scale — Electric Royal Blue (#173FEA near index 6). */
const brand: MantineColorsTuple = [
  '#eef2ff',
  '#dbe2ff',
  '#b3c2ff',
  '#889fff',
  '#647fff',
  '#4c6bff',
  '#173fea',
  '#1235cf',
  '#0a2bba',
  '#001f8f',
];

/** Accent scale — Warm Coral (#F36B42 near index 6). */
const coral: MantineColorsTuple = [
  '#fff1ec',
  '#ffe0d6',
  '#ffbfa9',
  '#ff9c78',
  '#fb7f4f',
  '#f66c37',
  '#f36b42',
  '#d8542e',
  '#c04824',
  '#a63a17',
];

export const mantineTheme = createTheme({
  primaryColor: 'brand',
  primaryShade: { light: 6, dark: 5 },
  colors: { brand, coral },
  fontFamily: 'var(--font-secondary-font)',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  headings: { fontFamily: 'var(--font-app-font)', fontWeight: '600' },
  defaultRadius: 'md',
  radius: { xs: '6px', sm: '8px', md: '10px', lg: '14px', xl: '18px' },
  cursorType: 'pointer',
  focusRing: 'auto',
});

/** Bridge Mantine's core surface variables to the Dida token set so every
 *  Mantine component follows the palette and flips with our tokens in dark. */
export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-color-body': 'var(--background)',
    '--mantine-color-text': 'var(--text)',
    '--mantine-color-error': 'var(--error)',
    '--mantine-color-placeholder': 'var(--muted)',
    '--mantine-color-dimmed': 'var(--text-light)',
    '--mantine-color-anchor': 'var(--primary)',
    '--mantine-color-default': 'var(--surface)',
    '--mantine-color-default-hover': 'var(--subtle-surface)',
    '--mantine-color-default-color': 'var(--text)',
    '--mantine-color-default-border': 'var(--stroke)',
  },
  light: {},
  dark: {},
});
