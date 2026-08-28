'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Carousel({
  children,
  ariaLabel,
  className,
}: {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    sync();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(el.clientWidth * 0.8, 560),
      behavior: 'smooth',
    });
  };

  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent transition-opacity',
          atStart && 'opacity-0',
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent transition-opacity',
          atEnd && 'opacity-0',
        )}
      />

      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
      >
        {children}
      </div>

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Previous"
          className="grid h-10 w-10 place-items-center rounded-full border border-stroke bg-surface text-text transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-stroke disabled:hover:text-text"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="Next"
          className="grid h-10 w-10 place-items-center rounded-full border border-stroke bg-surface text-text transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-stroke disabled:hover:text-text"
        >
          →
        </button>
      </div>
    </div>
  );
}
