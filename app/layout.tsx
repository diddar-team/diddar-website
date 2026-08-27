import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechUno | Build skills that move you forward',
  description:
    'Practical technology bootcamps for the next chapter of your career.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
