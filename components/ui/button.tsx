import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ink' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-btn font-sans font-semibold transition-[transform,background-color,color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_10px_24px_-10px_rgb(23_63_234/0.55)] hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0',
  ink: 'bg-text text-background hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-2 border-text/15 bg-transparent text-text hover:border-primary hover:text-primary',
  ghost: 'bg-transparent text-text hover:bg-subtle-surface',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.82rem]',
  md: 'h-12 px-6 text-[0.9rem]',
  lg: 'h-[3.4rem] px-8 text-[0.98rem]',
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

function classesFor({ variant = 'primary', size = 'md', className }: StyleProps) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonElementProps = StyleProps &
  ComponentPropsWithoutRef<'button'> & { children: ReactNode };

type LinkElementProps = StyleProps &
  ComponentPropsWithoutRef<typeof Link> & { children: ReactNode };

export function Button({
  variant,
  size,
  className,
  ...rest
}: ButtonElementProps) {
  return (
    <button className={classesFor({ variant, size, className })} {...rest} />
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  ...rest
}: LinkElementProps) {
  return <Link className={classesFor({ variant, size, className })} {...rest} />;
}
