'use client';

import Link from 'next/link';
import { Burger, Drawer } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
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
  const [{ y }] = useWindowScroll();
  const scrolled = y > 10;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-stroke/40 bg-background/80 shadow-[0_1px_24px_-8px_rgba(11,22,63,0.1)] backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1120px] items-center justify-between gap-6 px-5 sm:px-8">
        <BrandLockup />

        <nav
          aria-label="Main navigation"
          className="hidden items-center rounded-full border border-stroke/50 bg-surface/60 px-2 py-1 backdrop-blur-sm md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 font-sans text-[0.875rem] font-medium text-text-light transition-all hover:bg-panel hover:text-text"
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
  );
}
