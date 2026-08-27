import Link from 'next/link';
import { cn } from '@/lib/utils';

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-7 w-7', className)}
      role="img"
      aria-label="Dida"
    >
      <rect width="32" height="32" rx="10" fill="var(--primary)" />
      <circle cx="13" cy="20" r="6" fill="none" stroke="#fff" strokeWidth="3.2" />
      <path d="M21 6V26" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="24.5" cy="8" r="3" fill="var(--primary)" />
    </svg>
  );
}

export function BrandLockup({
  className,
  href = '/',
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Dida home"
      className={cn(
        'group/brand relative inline-flex items-baseline font-display text-[1.6rem] font-semibold leading-none tracking-[-0.01em] text-text',
        className,
      )}
    >
      <span className="relative">
        Dida
        <svg
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute -bottom-1.5 left-0 h-2 w-full text-primary"
          fill="none"
        >
          <path
            d="M2 7c22-4 74-6 116-3"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span aria-hidden className="ml-0.5 text-primary">
        .
      </span>
    </Link>
  );
}
