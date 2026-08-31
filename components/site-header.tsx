'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BrandLockup } from '@/components/brand';
import { ThemeToggle } from '@/components/theme-toggle';
import { ButtonLink } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'The tracks', href: '/#tracks' },
  { label: 'How it works', href: '/#how' },
  { label: 'Questions', href: '/#faq' },
];

export function SiteHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-6"
      />

      <header
        data-scrolled={scrolled ? 'true' : 'false'}
        className={cn(
          'sticky top-0 z-50 border-b backdrop-blur-md',
          'transition-[background-color,border-color,box-shadow] duration-200',
          scrolled
            ? 'border-stroke/50 bg-background/80 shadow-[0_1px_20px_-8px_rgba(11,22,63,0.12)]'
            : 'border-transparent bg-transparent shadow-none',
        )}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1120px] items-center justify-between gap-6 px-5 sm:px-8">
          <BrandLockup priority />

          <nav
            aria-label="Main navigation"
            className="hidden items-center rounded-full border border-stroke/50 bg-surface/60 px-2 py-1 backdrop-blur-sm md:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 font-sans text-[0.875rem] font-medium text-text-light transition-colors hover:bg-panel hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <ButtonLink href="/waitlist" size="sm">
              Add my name
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              aria-label="Toggle navigation"
            />
          </div>
        </div>

        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="80%"
          withCloseButton
          title={<BrandLockup />}
          classNames={{ content: 'bg-background', header: 'bg-background' }}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-input px-3 py-3 font-display text-xl font-semibold text-text transition-colors hover:bg-panel"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/waitlist" onClick={close} className="mt-4 w-full">
              Add my name to the list
            </ButtonLink>
          </nav>
        </Drawer>
      </header>
    </>
  );
}
