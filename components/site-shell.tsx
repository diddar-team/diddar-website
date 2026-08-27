'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('techuno-theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const nextDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
    localStorage.setItem('techuno-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
      type="button"
    >
      <span aria-hidden="true">{dark ? '☼' : '◐'}</span>
    </button>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="TechUno home">
        <span className="brand-mark">T</span>
        <span>
          Tech<span>Uno</span>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/#tracks">Tracks</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#about">Why TechUno</Link>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link className="button button-small" href="/waitlist">
          Join waitlist <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" href="/">
          <span className="brand-mark">T</span>
          <span>
            Tech<span>Uno</span>
          </span>
        </Link>
        <p>Same skills. Bigger opportunities.</p>
      </div>
      <div className="footer-links">
        <Link href="/#tracks">Programs</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/waitlist">Join the waitlist</Link>
      </div>
      <small>© 2026 TechUno. Built for what is next.</small>
    </footer>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      className={`arrow-link${light ? ' arrow-link-light' : ''}`}
      href={href}
    >
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}
