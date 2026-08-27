import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { MarkStar } from '@/components/marks';

/** Small handwritten section marker — "✦ the next cohort". Understated:
 *  slate text with a small blue star. */
export function HandLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-hand text-xl leading-none text-text-light',
        className,
      )}
    >
      <MarkStar className="h-3.5 w-3.5 shrink-0 text-primary" />
      {children}
    </span>
  );
}
