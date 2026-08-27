'use client';

import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <button
      type="button"
      onClick={() => setColorScheme(computed === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle colour theme"
      className={cn(
        'grid h-10 w-10 place-items-center rounded-full border border-stroke-ink/70 bg-surface text-text transition-colors hover:border-primary hover:text-primary',
        className,
      )}
    >
      {/* icons swap purely via CSS on the color-scheme attribute — no
          hydration-sensitive text */}
      <span aria-hidden className="text-[1.05rem] leading-none dark:hidden">
        ☾
      </span>
      <span
        aria-hidden
        className="hidden text-[1.05rem] leading-none dark:inline"
      >
        ☀
      </span>
    </button>
  );
}
