'use client';

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

/** Fades + lifts its children into view once. Content is visible by default
 *  (see `.js .reveal` in globals.css) so it degrades safely without JS. */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const node: Element | null = ref.current;
    if (!node) return;

    // Safety net: never leave content hidden, even if the observer never fires.
    const fallback = setTimeout(() => setShown(true), 1600);

    if (!('IntersectionObserver' in window)) {
      return () => clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      data-revealed={shown ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  );
}
