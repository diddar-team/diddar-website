import { cn } from '@/lib/utils';

/* Hand-drawn marks. Stroke is `currentColor`; set the colour on the wrapper.
   Default is the brand blue — coral is reserved for a couple of deliberate
   highlight moments and is passed in explicitly. Decorative: aria-hidden. */

export function MarkUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-x-0 -bottom-[0.15em] h-[0.34em] w-full text-primary',
        className,
      )}
      fill="none"
    >
      <path
        d="M3 11c48-6 120-8 180-6 40 1 82 4 114 2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10 15c60-4 150-5 210-3 25 1 55 2 72 1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function MarkCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 90"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(
        'pointer-events-none absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-primary',
        className,
      )}
      fill="none"
    >
      <path
        d="M150 8C92 2 36 10 18 30 2 48 10 70 46 80c46 13 128 9 156-12 22-16 18-42-16-54C158 6 120 4 96 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MarkArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 70"
      aria-hidden
      className={cn('h-14 w-16 text-primary', className)}
      fill="none"
    >
      <path
        d="M6 8c14 30 34 46 66 50"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M54 54c8 3 15 3 22 4M70 40c2 6 3 12 3 19"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MarkStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      className={cn('h-5 w-5 text-primary', className)}
      fill="none"
    >
      <path
        d="M20 3v34M3 20h34M8 8l24 24M32 8L8 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MarkCorner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      aria-hidden
      className={cn('h-8 w-8 text-primary', className)}
      fill="none"
    >
      <path
        d="M6 40C6 20 20 6 40 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
