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
        'sticky top-0 z-50 transition-colors duration-200',
        scrolled
          ? 'border-b border-stroke-ink/60 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1120px] items-center justify-between gap-6 px-5 sm:px-8">
        <BrandLockup />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[0.9rem] font-medium text-text-light transition-colors hover:text-text"
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
              className="rounded-input px-3 py-3 font-display text-xl font-semibold text-text transition-colors hover:bg-subtle-surface"
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
